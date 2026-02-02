import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Shield, Award, CheckCircle, Star } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Acrytech - Official Surface of the PPA Tour',
  description: 'Acrytech is the official court surface provider of the PPA Tour. Premium acrylic sport surface coatings for tennis, pickleball, basketball, and multi-sport courts worldwide.',
};

const stats = [
  { label: 'Official Surface', value: 'PPA Tour' },
  { label: 'Courts Worldwide', value: 'Thousands' },
  { label: 'Surface Types', value: '10+' },
  { label: 'Countries Served', value: '50+' },
];

const products = [
  {
    name: 'Court Surface Coatings',
    description: 'Premium acrylic sport surface systems in a full spectrum of colors. UV-resistant, slip-resistant, and built to perform in every climate.',
    icon: '🎨',
  },
  {
    name: 'Cushion Systems',
    description: 'Multi-layer cushioned court surfaces that reduce fatigue and joint stress. The choice of pros and residential players who take comfort seriously.',
    icon: '🛡️',
  },
  {
    name: 'Windscreens',
    description: 'Professional-grade windscreens that reduce wind interference and add privacy to outdoor court installations.',
    icon: '🌬️',
  },
  {
    name: 'Line Paint & Accessories',
    description: 'Precision line marking systems and accessories for crisp, regulation-compliant court markings that last.',
    icon: '📐',
  },
];

const galleryImages = [
  { src: '/photos/acrytech-court-4.jpg', alt: 'Red Rock venue court painting by Acrytech' },
  { src: '/photos/acrytech-court-5.jpg', alt: 'Westside Tennis Club courts with Acrytech surfaces' },
  { src: '/photos/acrytech-court-6.jpg', alt: 'Custom basketball court design with Acrytech paint' },
  { src: '/photos/acrytech-court-9.jpg', alt: 'Lakefront residential pickleball court with Acrytech cushion surface' },
  { src: '/photos/acrytech-court-10.jpg', alt: 'Backyard cushion court with Acrytech surface' },
  { src: '/photos/acrytech-court-11.jpg', alt: 'Basketball court painted with Acrytech sport surface' },
  { src: '/photos/acrytech-court-12.jpg', alt: 'Raptors branded courts with Acrytech surfaces' },
  { src: '/photos/acrytech-court-13.jpg', alt: 'Raptors courts aerial view — Acrytech surfaces' },
  { src: '/photos/acrytech-court-7.jpg', alt: 'RollX court surface application by Acrytech' },
  { src: '/photos/acrytech-court-8.jpg', alt: 'CushionX business court installation' },
  { src: '/photos/acrytech-court-15.jpg', alt: 'Professional court installation with Acrytech coating' },
  { src: '/photos/acrytech-track-1.jpg', alt: 'Running track with Acrytech surface coating' },
  { src: '/photos/acrytech-padel-1.jpg', alt: 'Padel court with Acrytech sport surface' },
  { src: '/photos/acrytech-windscreen-1.jpg', alt: 'Acrytech branded windscreen installation' },
  { src: '/products/acrytech-1.jpg', alt: 'Acrytech court surface application process' },
  { src: '/products/acrytech-2.png', alt: 'Acrytech product line' },
];

export default function AcrytechPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <Image
            src="/logos/acrytech-logo-white.png"
            alt="Acrytech"
            width={240}
            height={60}
            className="mx-auto mb-8"
          />
          <div className="inline-flex items-center gap-2 bg-neon/10 text-neon px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-neon/30">
            <Award className="h-4 w-4" />
            Official Surface of the PPA Tour
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            The World&apos;s Premier <span className="neon-text">Court Surface</span> Provider
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            From backyard pickleball courts to PPA Tour championship venues, Acrytech delivers 
            professional-grade acrylic sport surfaces trusted by contractors and players worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://atsports.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neon text-surface px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neon-hover transition-colors"
            >
              Visit Acrytech <ExternalLink className="h-5 w-5" />
            </a>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 border-2 border-border text-text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:border-neon/50 hover:text-neon transition-colors"
            >
              Find Acrytech Contractors
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-surface-card">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-neon">{stat.value}</div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Why the Pros Choose Acrytech
              </h2>
              <p className="text-text-secondary mb-4">
                Acrytech manufactures the highest-quality acrylic sport surface coatings on the market. 
                Their products are used on thousands of courts worldwide — from residential backyards to 
                the biggest stages in professional pickleball.
              </p>
              <p className="text-text-secondary mb-6">
                As the official surface provider of the PPA Tour, Acrytech surfaces are played on by 
                the best athletes in the sport. That same tournament-grade quality is available for 
                your court project.
              </p>
              <ul className="space-y-3">
                {[
                  'UV & weather resistant in all climates',
                  'Anti-slip texture for player safety',
                  'Full color spectrum — custom court designs',
                  'Cushion systems for reduced joint stress',
                  'Trusted by PPA Tour and top contractors',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-neon flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-border col-span-2">
                <img src="/photos/acrytech-court-4.jpg" alt="Acrytech court surface" className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <img src="/photos/acrytech-court-9.jpg" alt="Residential Acrytech court" className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <img src="/photos/acrytech-court-6.jpg" alt="Custom basketball court" className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-surface-card border-y border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-text-primary">Acrytech Product Line</h2>
            <p className="text-text-secondary mt-2">Everything you need for a world-class court surface.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-surface rounded-xl border border-border p-6 hover:border-neon/30 transition-all"
              >
                <span className="text-3xl mb-3 block">{product.icon}</span>
                <h3 className="text-lg font-bold text-text-primary mb-2">{product.name}</h3>
                <p className="text-sm text-text-secondary">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-text-primary">Acrytech in Action</h2>
            <p className="text-text-secondary mt-2">From championship venues to backyard dreams — all surfaced by Acrytech.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((image, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden border border-border hover:border-neon/40 transition-all group ${
                  i === 0 || i === 5 ? 'col-span-2' : ''
                }`}
              >
                <div className={`${i === 0 || i === 5 ? 'aspect-[2/1]' : 'aspect-square'} overflow-hidden`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={i < 4 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-raised border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image
            src="/logos/acrytech-logo-white.png"
            alt="Acrytech"
            width={160}
            height={40}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Ready for an Acrytech Surface?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Find verified contractors in your area who install Acrytech court surfaces. 
            Get free quotes and build the court of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/search"
              className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
            >
              Find Contractors <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://atsports.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-text-secondary px-6 py-3 rounded-lg font-semibold hover:border-neon/50 hover:text-neon transition-colors"
            >
              Visit ATSports.com <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
