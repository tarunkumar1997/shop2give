import { loadStripe } from '@stripe/stripe-js';
import { products } from '../stripe-config';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export async function createCheckoutSession(
  priceId: string,
  mode: 'payment' | 'subscription',
  successUrl: string,
  cancelUrl: string,
  campaignId?: string,
) {
  const stripe = await stripePromise;
  if (!stripe) throw new Error('Stripe failed to initialize');

  const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      price_id: priceId,
      mode,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: campaignId ? { campaignId } : undefined,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const { url } = await response.json();
  return url;
}

export function getProductByPriceId(priceId: string) {
  return Object.values(products).find((product) => product.priceId === priceId);
}