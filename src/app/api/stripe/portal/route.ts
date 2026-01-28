import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { stripe } from '@/lib/stripe';

export async function POST() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data: vendor } = await supabase.from('vendors').select('stripe_customer_id').eq('user_id', user.id).single();
    if (!vendor?.stripe_customer_id) return NextResponse.json({ error: 'No billing account' }, { status: 400 });

    const session = await stripe.billingPortal.sessions.create({
      customer: vendor.stripe_customer_id,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/subscription`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: 'Failed to create portal session' }, { status: 500 });
  }
}
