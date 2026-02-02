import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Camera, Star } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Project Gallery - Sports Surface Installations',
  description: 'Browse stunning sports surface installations from top contractors. Pickleball courts, tennis courts, basketball courts, gym floors, running tracks, and more.',
};

// Gallery items — using Unsplash (free commercial use, no attribution required)
// In production, these would be populated from vendor uploads (paid tier feature)
const galleryCategories = [
  {
    id: 'pickleball',
    title: 'Pickleball Courts',
    description: 'Residential & commercial pickleball court installations',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1672573560822-28765e4e30f0?w=800&q=80',
        alt: 'Professional pickleball court with bright blue surface',
        type: 'Residential' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1676399557654-2fa96eab0858?w=800&q=80',
        alt: 'Outdoor pickleball court with net and paddles',
        type: 'Residential' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1687456305690-0644b7652005?w=800&q=80',
        alt: 'Multi-court pickleball facility',
        type: 'Municipal' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1695654400967-0ab11bbfdb41?w=800&q=80',
        alt: 'Indoor pickleball court with professional lighting',
        type: 'Commercial' as const,
      },
    ],
  },
  {
    id: 'tennis',
    title: 'Tennis Courts',
    description: 'Hard courts, clay courts, and grass court installations',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
        alt: 'Beautiful green tennis court aerial view',
        type: 'Residential' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80',
        alt: 'Professional blue hard court tennis surface',
        type: 'Commercial' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80',
        alt: 'Clay tennis court with pristine red surface',
        type: 'Residential' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1542144582-1ba00ace1038?w=800&q=80',
        alt: 'Tennis court from above showing clean lines',
        type: 'Municipal' as const,
      },
    ],
  },
  {
    id: 'basketball',
    title: 'Basketball Courts',
    description: 'Backyard, municipal, and indoor basketball court builds',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
        alt: 'Indoor basketball court with polished hardwood floor',
        type: 'Commercial' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80',
        alt: 'Outdoor basketball court with colorful surface',
        type: 'Municipal' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&q=80',
        alt: 'Basketball court in urban setting',
        type: 'Municipal' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1559692048-79a3f837883d?w=800&q=80',
        alt: 'Professional gymnasium basketball court',
        type: 'Commercial' as const,
      },
    ],
  },
  {
    id: 'gym-flooring',
    title: 'Gym Flooring',
    description: 'Gymnasium hardwood, rubber, and multi-purpose sport floors',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
        alt: 'Modern gym with professional rubber flooring',
        type: 'Commercial' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
        alt: 'Gymnasium with polished maple hardwood floor',
        type: 'Commercial' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
        alt: 'Weight room with heavy-duty rubber gym flooring',
        type: 'Commercial' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
        alt: 'CrossFit gym with specialized training floor',
        type: 'Commercial' as const,
      },
    ],
  },
  {
    id: 'track',
    title: 'Running Tracks',
    description: 'Synthetic rubber tracks for schools and municipalities',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1461897104016-0b3b00b1bce0?w=800&q=80',
        alt: 'Professional running track with red synthetic surface',
        type: 'Municipal' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80',
        alt: 'Blue athletic track surrounding football field',
        type: 'Municipal' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1580058572462-98e2c0e0e2f0?w=800&q=80',
        alt: 'Track lanes with crisp white lines',
        type: 'Commercial' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1474546652694-a33571f85032?w=800&q=80',
        alt: 'Stadium track with grandstand seating',
        type: 'Municipal' as const,
      },
    ],
  },
  {
    id: 'football-turf',
    title: 'Football & Soccer Turf',
    description: 'Artificial turf for football fields, soccer pitches, and multi-use stadiums',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800&q=80',
        alt: 'Football stadium with pristine artificial turf',
        type: 'Commercial' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
        alt: 'Soccer field with professional artificial grass',
        type: 'Municipal' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=800&q=80',
        alt: 'Multi-use turf field under stadium lights',
        type: 'Commercial' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80',
        alt: 'Football field turf with painted end zone',
        type: 'Municipal' as const,
      },
    ],
  },
];

const typeColors = {
  Residential: 'bg-neon-subtle text-neon',
  Municipal: 'bg-accent/10 text-accent',
  Commercial: 'bg-amber-500/10 text-amber-400',
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-neon-subtle text-neon px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Camera className="h-4 w-4" />
          Project Showcase
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
          Sports Surface <span className="neon-text">Gallery</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Browse real installations from top contractors across the country. 
          From backyard pickleball courts to stadium-grade turf fields.
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

      {/* Gallery Categories */}
      <div className="space-y-20">
        {galleryCategories.map((category) => (
          <section key={category.id} id={category.id}>
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">{category.title}</h2>
                <p className="text-text-muted mt-1">{category.description}</p>
              </div>
              <Link
                href={`/search?sport=${category.id}`}
                className="hidden sm:inline-flex items-center gap-1 text-sm text-neon font-medium hover:underline"
              >
                Find contractors <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            
            {/* Masonry-style grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.images.map((image, i) => (
                <div
                  key={i}
                  className={`group relative rounded-xl overflow-hidden border border-border hover:border-neon/40 transition-all cursor-pointer ${
                    i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                  }`}
                >
                  <div className={`${i === 0 ? 'aspect-square' : 'aspect-[4/3]'} overflow-hidden`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className={`self-start px-2 py-0.5 rounded text-xs font-medium mb-2 ${typeColors[image.type]}`}>
                      {image.type}
                    </span>
                    <p className="text-sm text-text-primary font-medium">{image.alt}</p>
                    {/* In production this would link to the vendor profile */}
                    <p className="text-xs text-text-muted mt-1 flex items-center gap-1">
                      <Star className="h-3 w-3 text-neon" /> Premium Vendor Showcase
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`/search?sport=${category.id}`}
              className="sm:hidden inline-flex items-center gap-1 text-sm text-neon font-medium hover:underline mt-4"
            >
              Find {category.title.toLowerCase()} contractors <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center bg-surface-card rounded-2xl border border-border p-8 md:p-12">
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
