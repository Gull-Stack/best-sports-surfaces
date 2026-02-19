import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { z } from 'zod';
import { checkSpam, checkRateLimit, getClientIP } from '@/lib/anti-spam';

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
    }, 4000); // 4 second minimum for inquiries
    
    if (spamCheck.isSpam) {
      console.log('Spam detected in inquiry:', spamCheck.reason, body);
      // Return success to avoid revealing spam detection to bots
      return NextResponse.json({ success: true });
    }
    
    // Rate limiting by IP
    const clientIP = getClientIP(request);
    const rateLimitCheck = checkRateLimit(`inquiries:${clientIP}`, 5, 600000); // 5 per 10 minutes
    
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

    const supabase = createAdminClient();
    const { error } = await supabase.from('inquiries').insert({
      ...cleanData,
      status: 'new',
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
