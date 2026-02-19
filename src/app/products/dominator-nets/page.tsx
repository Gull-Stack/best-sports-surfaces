import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Shield, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dominator Pro Max Pickleball Net - Semi-Permanent & Heavy Duty',
  description: 'The Dominator Pro Max is built with 6061 T6 aircraft-grade aluminum, locking wheels, hand crank tension, and USAPA regulation dimensions. The net the pros play on.',
};

const images = [
  '/products/dominator-net-1.jpeg',
  '/products/dominator-net-2.jpeg',
  '/products/dominator-net-3.jpeg',
  '/products/dominator-net-4.jpeg',
  '/products/dominator-net-5.jpeg',
];

const features = [
  '6061 T6 aircraft-grade aluminum frame',
  'Stainless steel hardware throughout',
  '3" thick heavy-duty square rust-proof frame',
  'Built-in heavy-duty locking wheels',
  'Hand crank adjustable net tension',
  'Wire cable through top of net',
  'Fiberglass dowels for enhanced tautness',
  'USAPA regulation dimensions',
  'Completely weather & rust proof',
  'Limited lifetime warranty',
];

const specs = [
  { label: 'Frame Material', value: '6061 T6 Aluminum' },
  { label: 'Center Height', value: '34"' },
  { label: 'Sideline Height', value: '36"' },
  { label: 'Frame Thickness', value: '3" Square' },
  { label: 'Wall Thickness', value: '5/32"' },
  { label: 'Warranty', value: 'Lifetime' },
];

const models = [
  {
    name: 'Pro Max',
    price: '$1,849',
    originalPrice: '$1,999',
    diameter: '3"',
    features: ['Heaviest duty option', 'Locking wheels', 'Hand crank tension', 'Semi-permanent design'],
    recommended: true,
  },
  {
    name: 'Pro',
    price: '$1,499',
    originalPrice: null,
    diameter: '2.95"',
    features: ['Heavy-duty build', 'Locking wheels', 'Hand crank tension', 'Rolling capability'],
    recommended: false,
  },
  {
    name: 'Original',
    price: '$489',
    originalPrice: null,
    diameter: '1" Upright / 2" Frame',
    features: ['Entry-level Dominator', 'Rolling capability', 'Velcro strap tension', 'Great value'],
    recommended: false,
  },
];

export default function DominatorNetsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Back link */}
      <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-neon mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      {/* Hero */}
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
            <Shield className="h-3 w-3" /> Semi-Permanent
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Dominator <span className="neon-text">Pro Max Pickleball Net</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            The net the pros play on — built for you. 6061 T6 aircraft-grade aluminum construction with
            built-in locking wheels, hand crank tension, and USAPA regulation dimensions.
          </p>
          <p className="text-text-secondary mb-4">
            Designed for indoor and outdoor play, the Dominator Pro Max is the ideal semi-permanent pickleball
            net system for home courts, facilities, gyms, schools, and competitive play. Heavy-duty wheels lock
            in place during play and retract for easy movement. Completely weather and rust proof with a limited
            lifetime warranty.
          </p>

          {/* Pricing */}
          <div className="mb-6 p-4 rounded-lg bg-surface-card border border-border">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-neon">$1,849</span>
              <span className="text-lg text-text-muted line-through">$1,999</span>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30">
                Save $150
              </span>
            </div>
            <p className="text-sm text-text-muted mt-1">Available in Silver & Black • Limited lifetime warranty</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>

          <a
            href="https://www.dominatorhoop.com/product/max-semi-permanent-portable-pickleball-net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
          >
            Shop Dominator Pro Max <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={images[0]} alt="Dominator Pro Max Pickleball Net System" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Specs Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Specifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-surface-card rounded-lg p-4 border border-border text-center">
              <p className="text-xs text-text-muted mb-1">{spec.label}</p>
              <p className="text-lg font-semibold text-text-primary">{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Model Comparison */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Dominator Net Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.name}
              className={`bg-surface-card rounded-xl p-6 border ${
                model.recommended ? 'border-neon/50 ring-1 ring-neon/20' : 'border-border'
              } relative`}
            >
              {model.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-neon text-surface">
                  Recommended
                </span>
              )}
              <h3 className="text-xl font-bold text-text-primary mb-2">Dominator {model.name}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-neon">{model.price}</span>
                {model.originalPrice && (
                  <span className="text-sm text-text-muted line-through">{model.originalPrice}</span>
                )}
              </div>
              <p className="text-xs text-text-muted mb-4">System diameter: {model.diameter}</p>
              <ul className="space-y-2">
                {model.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-text-muted mt-4 text-center">
          All Dominator nets follow USAPA regulation standards • 6061 T6 aluminum • Rust proof
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Dominator Pro Max Up Close</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-border hover:border-neon/40 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={src}
                  alt={`Dominator Pro Max Net ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-r from-neon/10 to-accent/10 border border-neon/20 text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-3">Need a Court for Your Dominator?</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">
          Find verified pickleball court contractors in your area who can build the perfect surface for your Dominator net system.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/search?sport=pickleball"
            className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
          >
            Find Pickleball Court Contractors <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="https://www.dominatorhoop.com/product/max-semi-permanent-portable-pickleball-net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-text-secondary px-6 py-3 rounded-lg font-semibold hover:border-neon/50 hover:text-neon transition-colors"
          >
            Visit Dominator <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
