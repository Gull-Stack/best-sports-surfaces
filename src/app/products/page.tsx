import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Recommended Products - Courts, Nets, Hoops & Surfaces',
  description: 'Our hand-picked recommended products for sports court construction. Dominator Nets, Dominator Hoops, Selkirk Nets, Acrytech Paint, lighting solutions, and more.',
};

type Product = {
  name: string;
  brand: string;
  category: string;
  description: string;
  image?: string;
  url?: string;
  badge?: string;
  features: string[];
};

const productCategories = [
  {
    id: 'nets',
    title: '🏐 Nets & Net Systems',
    description: 'Professional-grade nets and post systems for pickleball and tennis courts.',
    products: [
      {
        name: 'Dominator Portable Net System',
        brand: 'Dominator',
        category: 'Nets',
        description: 'Heavy-duty portable pickleball net system built for serious play. Regulation height, easy setup, and rock-solid stability. The go-to choice for backyard and tournament use.',
        url: 'https://dominatorsports.com',
        badge: 'Top Pick',
        features: [
          'Regulation 22\' width',
          'Steel frame construction',
          'Portable with carry bag',
          'Tournament-grade quality',
        ],
      },
      {
        name: 'Selkirk Pro Net System',
        brand: 'Selkirk',
        category: 'Nets',
        description: 'Premium pickleball net system from one of the most trusted names in the sport. Designed for permanent or semi-permanent installations with pro-level tension and stability.',
        url: 'https://www.selkirk.com',
        badge: 'Premium',
        features: [
          'Pro-level net tension',
          'Powder-coated frame',
          'Designed for permanent install',
          'Official tournament specs',
        ],
      },
    ],
  },
  {
    id: 'hoops',
    title: '🏀 Hoops & Basketball Systems',
    description: 'In-ground and adjustable basketball systems for residential and commercial courts.',
    products: [
      {
        name: 'Dominator In-Ground Basketball System',
        brand: 'Dominator',
        category: 'Hoops',
        description: 'Commercial-grade in-ground basketball system with tempered glass backboard. Built to withstand years of aggressive play — perfect for backyard courts and community facilities.',
        url: 'https://dominatorsports.com',
        badge: 'Top Pick',
        features: [
          'Tempered glass backboard',
          'Adjustable height',
          'In-ground steel pole',
          'Commercial-grade build',
        ],
      },
    ],
  },
  {
    id: 'surfaces',
    title: '🎨 Court Surface & Paint',
    description: 'Professional acrylic court surfaces and sport-grade coatings.',
    products: [
      {
        name: 'Acrytech Sport Surface System',
        brand: 'Acrytech',
        category: 'Surface Paint',
        description: 'Professional acrylic sport surface coating system used by top contractors nationwide. UV-resistant, slip-resistant, and available in a full spectrum of court colors. The industry standard for tennis, pickleball, and basketball courts.',
        url: 'https://www.acrytech.com',
        badge: 'Industry Standard',
        features: [
          'UV & weather resistant',
          'Anti-slip texture options',
          'Full color spectrum',
          'Used by top contractors',
        ],
      },
    ],
  },
  {
    id: 'lighting',
    title: '💡 Court Lighting',
    description: 'LED lighting systems for night play and all-weather visibility.',
    products: [
      {
        name: 'Coming Soon',
        brand: 'TBD',
        category: 'Lighting',
        description: 'We\'re evaluating the best LED court lighting systems on the market. Check back soon for our top picks — or contact us if you manufacture court lighting and want to be featured.',
        badge: 'Coming Soon',
        features: [
          'LED technology',
          'Minimal light pollution',
          'Energy efficient',
          'Residential & commercial',
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
          Hand-picked by industry pros.
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
      <div className="space-y-16">
        {productCategories.map((category) => (
          <section key={category.id} id={category.id}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-text-primary">{category.title}</h2>
              <p className="text-text-muted mt-1">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.products.map((product, i) => (
                <div
                  key={i}
                  className="bg-surface-card rounded-xl border border-border p-6 hover:border-neon/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-neon transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-text-muted">{product.brand}</p>
                    </div>
                    {product.badge && (
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeColors[product.badge] || badgeColors['Coming Soon']}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-text-secondary text-sm mb-4">{product.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {product.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-neon hover:underline"
                    >
                      Visit {product.brand} <ExternalLink className="h-3.5 w-3.5" />
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
