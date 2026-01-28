import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createAdminClient } from '@/lib/supabase/admin';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) return NextResponse.json({ error: 'No signature' }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const supabase = createAdminClient();

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const vendorId = session.metadata?.vendor_id;
      if (vendorId) {
        await supabase.from('vendors').update({
          tier: 'paid',
          stripe_subscription_id: session.subscription as string,
        }).eq('id', vendorId);
      }
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      await supabase.from('vendors').update({
        tier: 'free',
        stripe_subscription_id: null,
      }).eq('stripe_subscription_id', subscription.id);
      break;
    }
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription;
      if (subscription.status === 'active') {
        await supabase.from('vendors').update({ tier: 'paid' }).eq('stripe_subscription_id', subscription.id);
      } else if (subscription.status === 'canceled' || subscription.status === 'unpaid') {
        await supabase.from('vendors').update({ tier: 'free' }).eq('stripe_subscription_id', subscription.id);
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
