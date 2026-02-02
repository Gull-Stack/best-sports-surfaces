import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Recommended Products - Hoops, Nets & Court Surfaces',
  description: 'Hand-picked recommended products for sports court construction. Dominator Hoops, Selkirk Nets, Acrytech Paint, lighting solutions, and more — trusted by pros.',
};

const productCategories = [
  {
    id: 'hoops',
    title: '🏀 Dominator Hoops',
    description: 'The best in-ground basketball systems on the market. Period.',
    images: [
      '/products/dominator-hoop-1.jpg',
      '/products/dominator-hoop-2.jpg',
      '/products/dominator-hoop-3.jpg',
      '/products/dominator-hoop-4.jpg',
      '/products/dominator-hoop-5.jpg',
      '/products/dominator-hoop-6.jpg',
    ],
    products: [
      {
        name: 'Dominator In-Ground Basketball System',
        brand: 'Dominator',
        description: 'Commercial-grade in-ground basketball system that dominates every other hoop on the market. Tempered glass backboard, rock-solid stability, and adjustable height. Built to handle years of aggressive play — from backyard warriors to full-court ballers. If you\'re serious about your court, this is the only hoop worth buying.',
        url: 'https://www.dominatorhoop.com',
        badge: 'Top Pick',
        features: [
          'Tempered glass backboard',
          'Adjustable height system',
          'In-ground steel pole mount',
          'Commercial-grade construction',
          'Built to last decades',
          'Multiple size options',
        ],
      },
    ],
  },
  {
    id: 'nets',
    title: '🏓 Selkirk Pickleball Nets',
    description: 'Premium net systems from the most trusted name in pickleball.',
    images: [
      '/products/selkirk-net.jpg',
      '/products/selkirk-net-2.jpg',
      '/products/selkirk-net-3.jpg',
      '/products/selkirk-net-4.jpg',
    ],
    products: [
      {
        name: 'Selkirk Aluminum Pro Net System',
        brand: 'Selkirk',
        description: 'The gold standard in pickleball net systems. Lightweight aluminum frame with pro-level net tension and dead-accurate regulation height. Whether you\'re setting up a permanent court or need something portable for tournaments, Selkirk delivers every time.',
        url: 'https://www.selkirk.com',
        badge: 'Premium',
        features: [
          'Lightweight aluminum frame',
          'Pro-level net tension',
          'Regulation 22\' width & height',
          'Quick setup & breakdown',
          'Tournament approved',
          'Powder-coated finish',
        ],
      },
    ],
  },
  {
    id: 'surfaces',
    title: '🎨 Acrytech Court Surfaces',
    description: 'Official surface of the PPA Tour. Professional acrylic court coatings — the industry standard.',
    images: [
      '/products/acrytech-1.jpg',
      '/products/acrytech-2.png',
      '/products/acrytech-3.png',
      '/photos/acrytech-court-4.jpg',
      '/photos/acrytech-court-9.jpg',
      '/photos/acrytech-court-6.jpg',
    ],
    products: [
      {
        name: 'Acrytech Sport Surface System',
        brand: 'Acrytech',
        description: 'Professional acrylic sport surface coating system used by top contractors nationwide. UV-resistant, slip-resistant, and available in a full spectrum of court colors. When the best contractors in the country need to paint a court, they reach for Acrytech.',
        url: 'https://www.acrytech.com',
        badge: 'Industry Standard',
        features: [
          'UV & weather resistant',
          'Anti-slip texture options',
          'Full color spectrum',
          'Used by top contractors nationwide',
          'Proven durability in all climates',
          'Residential & commercial grade',
        ],
      },
    ],
  },
  {
    id: 'lighting',
    title: '💡 Court Lighting',
    description: 'LED lighting systems for night play and all-weather visibility.',
    images: [],
    products: [
      {
        name: 'Coming Soon',
        brand: 'TBD',
        description: 'We\'re evaluating the best LED court lighting systems on the market. Check back soon for our top picks — or contact us if you manufacture court lighting and want to be featured.',
        badge: 'Coming Soon',
        features: [
          'LED technology',
          'Minimal light pollution',
          'Energy efficient',
          'Residential & commercial options',
        ],
      },
    ],
  },
];

const badgeColors: Record<string, string> = {
  'Top Pick': 'bg-neon/10 text-neon border-neon/30',
  'Premium': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'Industry Standard': 'bg-accent/10 text-accent border-accent/30',
  'Coming Soon': 'bg-surface-hover text-text-muted border-border',
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
      <div className="mb-16 rounded-xl border border-border bg-surface-card p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <ShieldCheck className="h-8 w-8 text-neon flex-shrink-0" />
        <p className="text-text-secondary text-sm">
          Every product on this page is used and recommended by verified contractors in the {SITE_NAME} network. 
          We only list gear that pros actually trust on the job.
        </p>
      </div>

      {/* Product Categories */}
      <div className="space-y-24">
        {productCategories.map((category) => (
          <section key={category.id} id={category.id}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary">{category.title}</h2>
              <p className="text-text-muted mt-1">{category.description}</p>
            </div>

            {/* Product Image Gallery */}
            {category.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {category.images.map((src, i) => (
                  <div
                    key={i}
                    className={`rounded-xl overflow-hidden border border-border ${
                      i === 0 ? 'col-span-2 row-span-2' : ''
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${category.title} product photo ${i + 1}`}
                      className={`w-full h-full object-cover ${i === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}
                      loading={i < 2 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Product Cards */}
            <div className="grid grid-cols-1 gap-6">
              {category.products.map((product, i) => (
                <div
                  key={i}
                  className="bg-surface-card rounded-xl border border-border p-6 md:p-8 hover:border-neon/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-neon transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-text-muted">{product.brand}</p>
                    </div>
                    {product.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${badgeColors[product.badge] || badgeColors['Coming Soon']}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-text-secondary mb-5">{product.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-neon text-surface px-5 py-2.5 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
                    >
                      Shop {product.brand} <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Vendor/Brand CTA */}
      <div className="mt-20 text-center bg-surface-card rounded-2xl border border-border p-8 md:p-12">
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
