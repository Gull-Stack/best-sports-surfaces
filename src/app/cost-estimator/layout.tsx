import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Court Cost Estimator - Get Instant Price Estimates',
  description: 'Use our free cost estimator to get instant price ranges for tennis courts, basketball courts, pickleball courts, and more. Compare surface types, extras, and regional pricing.',
  openGraph: {
    title: 'Sports Court Cost Estimator - Get Instant Price Estimates',
    description: 'Use our free cost estimator to get instant price ranges for tennis courts, basketball courts, pickleball courts, and more.',
  },
};

export default function CostEstimatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
