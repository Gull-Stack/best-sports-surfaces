import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { checkSpam, checkRateLimit, getClientIP } from '@/lib/anti-spam';

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
    }, 3000); // 3 second minimum
    
    if (spamCheck.isSpam) {
      console.log('Spam detected:', spamCheck.reason, body);
      // Return success to avoid revealing spam detection to bots
      return NextResponse.json({ success: true });
    }
    
    // Rate limiting by IP
    const clientIP = getClientIP(request);
    const rateLimitCheck = checkRateLimit(`contact:${clientIP}`, 5, 300000); // 5 per 5 minutes
    
    if (!rateLimitCheck.allowed) {
      return NextResponse.json({ 
        error: 'Too many requests. Please try again later.' 
      }, { status: 429 });
    }
    
    // Clean data (remove anti-spam fields)
    const cleanData = {
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
    };
    
    // In production, send email via service like SendGrid/Resend
    // For now, just log and return success
    console.log('Contact form submission (legitimate):', cleanData);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
