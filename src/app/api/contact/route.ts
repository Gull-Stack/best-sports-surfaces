import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';
import { checkSpam, checkRateLimit, getClientIP } from '@/lib/anti-spam';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SITE_EMAIL = process.env.SITE_EMAIL || 'bryce@gullstack.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'leads@gullstack.com';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
  email_confirm: z.string().optional(),
  timestamp: z.number().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = schema.parse(body);

    // Check for spam
    const spamCheck = checkSpam({
      email_confirm: validatedData.email_confirm,
      timestamp: validatedData.timestamp
    }, 3000);

    if (spamCheck.isSpam) {
      console.log('Spam detected:', spamCheck.reason, body);
      return NextResponse.json({ success: true });
    }

    // Rate limiting by IP
    const clientIP = getClientIP(request);
    const rateLimitCheck = checkRateLimit(`contact:${clientIP}`, 5, 300000);

    if (!rateLimitCheck.allowed) {
      return NextResponse.json({
        error: 'Too many requests. Please try again later.'
      }, { status: 429 });
    }

    const cleanData = {
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
    };

    // Send notification email to BSS team
    if (SENDGRID_API_KEY) {
      const notificationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a5f; padding: 20px; text-align: center;">
            <h1 style="color: #00d4ff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${cleanData.name}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${cleanData.email}">${cleanData.email}</a></td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Subject:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${cleanData.subject}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border: 1px solid #ddd;">
              <strong>Message:</strong><br/>
              <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${cleanData.message}</p>
            </div>
          </div>
          <div style="background: #1a1a1a; padding: 15px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">Lead from BestSportsSurfaces.com</p>
          </div>
        </div>
      `;

      // Send auto-reply to the lead
      const confirmationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a5f; padding: 30px; text-align: center;">
            <h1 style="color: #00d4ff; margin: 0;">Thank You, ${cleanData.name}!</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <p style="font-size: 16px; color: #333;">We've received your message and will get back to you within 24 hours.</p>
            <p style="font-size: 16px; color: #333;"><strong>Here's what you sent us:</strong></p>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${cleanData.subject}</p>
              <p style="margin: 5px 0;"><strong>Message:</strong> ${cleanData.message}</p>
            </div>
          </div>
          <div style="background: #1a1a1a; padding: 20px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 14px;">BestSportsSurfaces.com — Your Guide to Sports Surface Construction</p>
          </div>
        </div>
      `;

      try {
        // Notification to team
        await sgMail.send({
          to: SITE_EMAIL,
          from: { email: FROM_EMAIL, name: `${cleanData.name} via BestSportsSurfaces` },
          replyTo: cleanData.email,
          subject: `New Lead: ${cleanData.name} — ${cleanData.subject}`,
          html: notificationHtml,
        });

        // Auto-reply to lead
        await sgMail.send({
          to: cleanData.email,
          from: { email: FROM_EMAIL, name: 'Best Sports Surfaces' },
          subject: 'Thanks for contacting Best Sports Surfaces!',
          html: confirmationHtml,
        });
      } catch (emailErr) {
        console.error('SendGrid error:', emailErr);
        // Don't fail the form submission if email fails
      }
    } else {
      console.warn('[BSS Contact] SENDGRID_API_KEY not set — lead logged but no email sent:', cleanData);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
