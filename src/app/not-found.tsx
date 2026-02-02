import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-2">Page Not Found</h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-neon text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-neon-hover"
          >
            <Home className="h-4 w-4" /> Go Home
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg font-semibold text-text-secondary hover:bg-surface-raised"
          >
            <Search className="h-4 w-4" /> Find Contractors
          </Link>
        </div>
      </div>
    </div>
  );
}
