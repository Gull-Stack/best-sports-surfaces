'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface-raised/80 backdrop-blur-md border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon rounded-lg flex items-center justify-center">
              <span className="text-surface font-bold text-sm">BSS</span>
            </div>
            <span className="font-bold text-lg text-text-primary hidden sm:block">{SITE_NAME}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.filter(l => l.href !== '/' && l.href !== '/contact').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-neon transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cost-estimator"
              className="inline-flex items-center gap-1.5 bg-neon text-surface px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neon-hover transition-colors"
            >
              Build Your Court
            </Link>
            <Link
              href="/auth/login"
              className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-neon"
            >
              <User className="h-4 w-4" />
              Login
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-hover text-text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface-raised">
          <nav className="px-4 pb-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-base font-medium text-text-secondary hover:bg-surface-hover hover:text-neon"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cost-estimator"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-neon hover:bg-surface-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              Build Your Court
            </Link>
            <Link
              href="/auth/login"
              className="block px-3 py-2 rounded-lg text-base font-medium text-text-secondary hover:bg-surface-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login / Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
