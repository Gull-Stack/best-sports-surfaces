import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-12-15.clover',
});

export const VENDOR_SUBSCRIPTION_PRICE = 99;
export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID || '';
