import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find Sports Surface Contractors Near You',
  description: 'Search and compare sports surface contractors in your area. Filter by sport type, service, rating, and location to find the right contractor for your project.',
  openGraph: {
    title: 'Find Sports Surface Contractors Near You',
    description: 'Search and compare sports surface contractors in your area. Filter by sport type, service, rating, and location.',
  },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
