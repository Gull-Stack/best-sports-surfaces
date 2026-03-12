import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'leads@gullstack.com';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    const supabase = createAdminClient();
    const { error } = await supabase.from('newsletter_subscribers').upsert(
      { email, is_active: true },
      { onConflict: 'email' }
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Notify Bryce of new subscriber
    if (SENDGRID_API_KEY) {
      try {
        await sgMail.send({
          to: 'bryce@gullstack.com',
          from: { email: FROM_EMAIL, name: 'BestSportsSurfaces.com' },
          subject: `New Newsletter Subscriber: ${email}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #1e3a5f; padding: 20px; text-align: center;">
                <h2 style="color: #00d4ff; margin: 0;">New Newsletter Subscriber</h2>
              </div>
              <div style="padding: 30px; background: #f9f9f9;">
                <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="font-size: 14px; color: #666;">Subscribed via BestSportsSurfaces.com footer newsletter form.</p>
              </div>
              <div style="background: #1a1a1a; padding: 15px; text-align: center;">
                <p style="color: #888; margin: 0; font-size: 12px;">BestSportsSurfaces.com — Newsletter Signup</p>
              </div>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error('SendGrid error on newsletter notification:', emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
