import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { z } from 'zod';

const inquirySchema = z.object({
  vendor_id: z.string().uuid().optional(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  zip: z.string().optional(),
  sport_type: z.string().optional(),
  service_type: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.parse(body);

    const supabase = createAdminClient();
    const { error } = await supabase.from('inquiries').insert({
      ...parsed,
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
