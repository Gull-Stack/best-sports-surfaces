import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { z } from 'zod';
import { checkSpam, checkRateLimit, getClientIP } from '@/lib/anti-spam';

const schema = z.object({
  email: z.string().email(),
  email_confirm: z.string().optional(),
  timestamp: z.number().optional(),
});

/**
 * Gmail ignores dots in the local part, so beitz3office@ and be.i.tz3.offi.ce@
 * are the same mailbox. Bots exploit that to slip past the unique-email upsert.
 * Normalize before storing so dot-variants collapse onto one row.
 */
function normalizeEmail(email: string): string {
  const [local, domain] = email.trim().toLowerCase().split('@');
  if (!domain) return email.trim().toLowerCase();
  if (domain === 'gmail.com' || domain === 'googlemail.com') {
    return `${local.split('+')[0].replace(/\./g, '')}@gmail.com`;
  }
  return `${local.split('+')[0]}@${domain}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.parse(body);

    // Check for spam (honeypot + submitted-too-fast)
    const spamCheck = checkSpam({
      email_confirm: parsed.email_confirm,
      timestamp: parsed.timestamp,
    }, 3000);

    if (spamCheck.isSpam) {
      console.log('Spam detected in newsletter signup:', spamCheck.reason, parsed.email);
      // Return success so bots get no signal that they were caught
      return NextResponse.json({ success: true });
    }

    // Rate limiting by IP
    const clientIP = getClientIP(request);
    const rateLimitCheck = checkRateLimit(`newsletter:${clientIP}`, 3, 600000); // 3 per 10 minutes

    if (!rateLimitCheck.allowed) {
      return NextResponse.json({
        error: 'Too many requests. Please try again later.',
      }, { status: 429 });
    }

    const email = normalizeEmail(parsed.email);

    const supabase = createAdminClient();
    const { error } = await supabase.from('newsletter_subscribers').upsert(
      { email, is_active: true },
      { onConflict: 'email' }
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // No per-subscriber notification email by design. Subscribers are visible at
    // /admin/subscribers (with CSV export); a signup is not an event worth
    // interrupting anyone for.

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
