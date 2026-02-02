import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Camera, Star } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Project Gallery - Sports Surface Installations',
  description: 'Browse real sports surface installations from top contractors. Pickleball courts, tennis courts, basketball courts, multi-sport courts, and commercial builds by Precision Pro Courts and more.',
};

const galleryImages = [
  {
    src: '/gallery/precision-pro-courts-1.jpg',
    alt: 'Aerial view of multi-sport complex with pickleball courts, basketball hoop, and gaga pit',
    type: 'Commercial' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Multi-Sport',
  },
  {
    src: '/gallery/precision-pro-courts-2.jpg',
    alt: 'Backyard pickleball and basketball court with mountain views',
    type: 'Residential' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Pickleball',
  },
  {
    src: '/gallery/precision-pro-courts-3.jpg',
    alt: 'Basketball and pickleball combination court with professional surfacing',
    type: 'Residential' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Basketball',
  },
  {
    src: '/gallery/precision-pro-courts-4.jpg',
    alt: 'Garage-side pickleball and basketball court in residential setting',
    type: 'Residential' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Pickleball',
  },
  {
    src: '/gallery/precision-pro-courts-5.jpg',
    alt: 'Backyard basketball and pickleball court with landscaped yard',
    type: 'Residential' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Multi-Sport',
  },
  {
    src: '/gallery/precision-pro-courts-6.jpg',
    alt: 'Utah Jazz themed basketball court with custom graphics',
    type: 'Residential' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Basketball',
  },
  {
    src: '/gallery/precision-pro-courts-7.jpg',
    alt: 'Commercial pickleball courts at office complex',
    type: 'Commercial' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Pickleball',
  },
  {
    src: '/gallery/precision-pro-courts-8.jpg',
    alt: 'Office pickleball courts — corporate recreation facility',
    type: 'Commercial' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Pickleball',
  },
  {
    src: '/gallery/precision-pro-courts-9.jpg',
    alt: 'Professional court installation in progress by Precision Pro Courts',
    type: 'Residential' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Multi-Sport',
  },
  {
    src: '/gallery/precision-pro-courts-10.jpg',
    alt: 'Pickleball court with Dominator nets — premium equipment installation',
    type: 'Residential' as const,
    vendor: 'Precision Pro Courts',
    vendorSlug: 'precision-pro-courts',
    sport: 'Pickleball',
  },
];

const typeColors = {
  Residential: 'bg-neon-subtle text-neon',
  Municipal: 'bg-accent/10 text-accent',
  Commercial: 'bg-amber-500/10 text-amber-400',
};

const sportFilters = ['All', ...Array.from(new Set(galleryImages.map((img) => img.sport)))];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-neon-subtle text-neon px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Camera className="h-4 w-4" />
          Real Projects, Real Contractors
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
          Sports Surface <span className="neon-text">Gallery</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Browse real installations from verified contractors. Every photo is from an actual build — 
          no stock images, no filler.
        </p>
      </div>

      {/* Vendor CTA Banner */}
      <div className="mb-16 rounded-xl border border-neon/20 bg-neon-subtle p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Star className="h-6 w-6 text-neon flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Want your work featured here?</h3>
            <p className="text-text-secondary text-sm mt-1">
              Premium and Featured vendors get their best project photos showcased in our gallery — 
              with a direct link to your profile. Great for SEO and lead generation.
            </p>
          </div>
        </div>
        <Link
          href="/pricing"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-neon text-surface px-5 py-2.5 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
        >
          Upgrade to Premium <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {galleryImages.map((image, i) => (
          <div
            key={i}
            className={`group relative rounded-xl overflow-hidden border border-border hover:border-neon/40 transition-all ${
              i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
            }`}
          >
            <div className={`${i === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]'} overflow-hidden`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading={i < 3 ? 'eager' : 'lazy'}
              />
            </div>
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColors[image.type]}`}>
                  {image.type}
                </span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-surface-card text-text-secondary">
                  {image.sport}
                </span>
              </div>
              <p className="text-sm text-text-primary font-medium">{image.alt}</p>
              <Link
                href={`/vendors/${image.vendorSlug}`}
                className="text-xs text-neon mt-1.5 flex items-center gap-1 hover:underline"
              >
                <Star className="h-3 w-3" /> Built by {image.vendor}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Vendor Attribution */}
      <div className="mt-10 text-center">
        <p className="text-text-muted text-sm">
          Photos on this page courtesy of{' '}
          <Link href="/vendors/precision-pro-courts" className="text-neon hover:underline">
            Precision Pro Courts
          </Link>
          {' '}— a premium contractor serving Utah and surrounding states.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center bg-surface-card rounded-2xl border border-border p-8 md:p-12">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Ready to Build Your Sports Surface?
        </h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">
          Get matched with top-rated contractors in your area. Free quotes, no obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/search"
            className="px-6 py-3 bg-neon text-surface font-semibold rounded-lg hover:bg-neon-hover transition-colors"
          >
            Find Contractors Near You
          </Link>
          <Link
            href="/cost-estimator"
            className="px-6 py-3 border border-border text-text-secondary font-semibold rounded-lg hover:border-neon/50 hover:text-neon transition-colors"
          >
            Estimate Your Project Cost
          </Link>
        </div>
      </div>
    </div>
  );
}
