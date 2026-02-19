import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Recommended Products - Hoops, Nets & Court Surfaces',
  description: 'Hand-picked recommended products for sports court construction. Dominator Hoops, Selkirk Nets, Acrytech Paint, lighting solutions, and more — trusted by pros.',
};

const products = [
  {
    slug: 'dominator',
    name: 'Dominator Hoops',
    brand: 'Dominator',
    emoji: '🏀',
    image: '/products/dominator-hoop-1.jpg',
    description: 'The best in-ground basketball systems on the market. Commercial-grade, tempered glass, built to last decades.',
    badge: 'Top Pick',
    href: '/products/dominator',
  },
  {
    slug: 'selkirk',
    name: 'Selkirk Pickleball Nets',
    brand: 'Selkirk',
    emoji: '🏓',
    image: '/products/selkirk-net.jpg',
    description: 'Premium aluminum pickleball net systems from the most trusted name in the sport. Tournament approved.',
    badge: 'Premium',
    href: '/products/selkirk',
  },
  {
    slug: 'swiftnet',
    name: 'SwiftNet® Portable Net',
    brand: 'SwiftNet',
    emoji: '🏓',
    image: '/products/swiftnet-1.jpg',
    description: 'The lightest, strongest portable pickleball net. 17 lbs, sets up in 3 minutes. Take it anywhere.',
    badge: 'Best Portable',
    href: '/products/swiftnet',
  },
  {
    slug: 'nets',
    name: 'Pickleball Net Comparison',
    brand: "Buyer's Guide",
    emoji: '📊',
    image: '/products/swiftnet-2.jpg',
    description: 'Selkirk vs Dominator vs SwiftNet — which pickleball net is right for you? Our head-to-head comparison.',
    badge: 'Guide',
    href: '/products/nets',
  },
  {
    slug: 'acrytech',
    name: 'Acrytech Court Surfaces',
    brand: 'Acrytech',
    emoji: '🎨',
    image: '/products/acrytech-1.jpg',
    description: 'Official surface of the PPA Tour. Professional acrylic sport surface coatings — the industry standard.',
    badge: 'Official PPA Surface',
    href: '/acrytech',
  },
  {
    slug: 'lighting',
    name: 'Court Lighting',
    brand: 'Coming Soon',
    emoji: '💡',
    image: null,
    description: 'We\'re evaluating the best LED court lighting systems on the market. Check back soon for our top picks.',
    badge: 'Coming Soon',
    href: null,
  },
];

const badgeColors: Record<string, string> = {
  'Top Pick': 'bg-neon/10 text-neon border-neon/30',
  'Premium': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'Official PPA Surface': 'bg-neon/10 text-neon border-neon/30',
  'Coming Soon': 'bg-surface-hover text-text-muted border-border',
  'Best Portable': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  'Guide': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-neon-subtle text-neon px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Award className="h-4 w-4" />
          Tested & Recommended
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
          Recommended <span className="neon-text">Products</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          The best equipment and materials for building, outfitting, and maintaining your sports court. 
          Hand-picked by industry pros — no filler, no pay-to-play.
        </p>
      </div>

      {/* Trust Banner */}
      <div className="mb-12 rounded-xl border border-border bg-surface-card p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <ShieldCheck className="h-8 w-8 text-neon flex-shrink-0" />
        <p className="text-text-secondary text-sm">
          Every product on this page is used and recommended by verified contractors in the {SITE_NAME} network. 
          We only list gear that pros actually trust on the job.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => {
          const Card = (
            <div
              className={`bg-surface-card rounded-xl border border-border overflow-hidden hover:border-neon/40 transition-all group ${product.href ? 'cursor-pointer' : ''}`}
            >
              {product.image && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{product.emoji}</span>
                    <div>
                      <h2 className="text-xl font-bold text-text-primary group-hover:text-neon transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-sm text-text-muted">{product.brand}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeColors[product.badge] || badgeColors['Coming Soon']}`}>
                    {product.badge}
                  </span>
                </div>
                <p className="text-text-secondary mb-4">{product.description}</p>
                {product.href && (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neon">
                    View Details <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </div>
            </div>
          );

          return product.href ? (
            <Link key={product.slug} href={product.href}>
              {Card}
            </Link>
          ) : (
            <div key={product.slug}>{Card}</div>
          );
        })}
      </div>

      {/* Manufacturer CTA */}
      <div className="mt-16 text-center bg-surface-card rounded-2xl border border-border p-8 md:p-12">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Manufacture Court Products?
        </h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">
          Want your brand featured on this page? We partner with manufacturers whose products 
          are trusted by contractors in our network.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
        >
          Get in Touch <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
