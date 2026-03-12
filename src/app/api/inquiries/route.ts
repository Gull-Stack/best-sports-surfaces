import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';
import { checkSpam, checkRateLimit, getClientIP } from '@/lib/anti-spam';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'leads@gullstack.com';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

const inquirySchema = z.object({
  vendor_id: z.string().uuid().optional(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  zip: z.string().optional(),
  sport_type: z.string().optional(),
  service_type: z.string().optional(),
  message: z.string().optional(),
  email_confirm: z.string().optional(),
  timestamp: z.number().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.parse(body);

    // Check for spam
    const spamCheck = checkSpam({
      email_confirm: parsed.email_confirm,
      timestamp: parsed.timestamp
    }, 4000);
    
    if (spamCheck.isSpam) {
      console.log('Spam detected in inquiry:', spamCheck.reason, body);
      return NextResponse.json({ success: true });
    }
    
    // Rate limiting by IP
    const clientIP = getClientIP(request);
    const rateLimitCheck = checkRateLimit(`inquiries:${clientIP}`, 5, 600000);
    
    if (!rateLimitCheck.allowed) {
      return NextResponse.json({ 
        error: 'Too many requests. Please try again later.' 
      }, { status: 429 });
    }

    // Clean data (remove anti-spam fields)
    const cleanData = {
      vendor_id: parsed.vendor_id,
      name: parsed.name,
      email: parsed.email,
      phone: parsed.phone,
      zip: parsed.zip,
      sport_type: parsed.sport_type,
      service_type: parsed.service_type,
      message: parsed.message,
    };

    // Save to Supabase
    const supabase = createAdminClient();
    const { error } = await supabase.from('inquiries').insert({
      ...cleanData,
      status: 'new',
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Send email notification to Bryce
    if (SENDGRID_API_KEY) {
      const notificationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a5f; padding: 20px; text-align: center;">
            <h1 style="color: #00d4ff; margin: 0; font-size: 20px;">New Quote Request — BestSportsSurfaces.com</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${cleanData.name}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${cleanData.email}">${cleanData.email}</a></td></tr>
              ${cleanData.phone ? `<tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${cleanData.phone}</td></tr>` : ''}
              ${cleanData.zip ? `<tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>ZIP:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${cleanData.zip}</td></tr>` : ''}
              ${cleanData.sport_type ? `<tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Sport:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${cleanData.sport_type}</td></tr>` : ''}
              ${cleanData.service_type ? `<tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${cleanData.service_type}</td></tr>` : ''}
              ${cleanData.vendor_id ? `<tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Vendor ID:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${cleanData.vendor_id}</td></tr>` : ''}
            </table>
            ${cleanData.message ? `<div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border: 1px solid #ddd;"><strong>Message:</strong><br/><p style="margin: 10px 0 0 0; white-space: pre-wrap;">${cleanData.message}</p></div>` : ''}
          </div>
          <div style="background: #1a1a1a; padding: 15px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">Vendor quote inquiry from BestSportsSurfaces.com</p>
          </div>
        </div>
      `;

      try {
        await sgMail.send({
          to: 'bryce@gullstack.com',
          from: { email: FROM_EMAIL, name: `${cleanData.name} via BestSportsSurfaces` },
          replyTo: cleanData.email,
          subject: `BSS Quote Request: ${cleanData.name}${cleanData.sport_type ? ` — ${cleanData.sport_type}` : ''}`,
          html: notificationHtml,
        });
      } catch (emailErr) {
        console.error('SendGrid error on inquiry notification:', emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
