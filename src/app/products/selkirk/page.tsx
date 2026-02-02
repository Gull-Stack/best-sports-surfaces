import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Star, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selkirk Pickleball Nets - Premium Aluminum Pro Net Systems',
  description: 'Selkirk makes the premium pickleball net systems trusted by pros and tournaments worldwide. Lightweight aluminum, regulation specs, tournament approved.',
};

const images = [
  '/products/selkirk-net.jpg',
  '/products/selkirk-net-2.jpg',
  '/products/selkirk-net-3.jpg',
  '/products/selkirk-net-4.jpg',
];

const features = [
  'Lightweight aluminum frame',
  'Pro-level net tension',
  'Regulation 22\' width & height',
  'Quick setup & breakdown',
  'Tournament approved',
  'Powder-coated finish',
  'Portable with carry bag',
  'Built for indoor & outdoor use',
];

export default function SelkirkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Back link */}
      <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-neon mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      {/* Hero */}
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
            <Star className="h-3 w-3" /> Premium
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Selkirk <span className="neon-text">Pickleball Nets</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            The gold standard in pickleball net systems. Selkirk is one of the most trusted names in 
            pickleball, and their Aluminum Pro Net System lives up to the reputation — lightweight, 
            rock-solid tension, and dead-accurate regulation height.
          </p>
          <p className="text-text-secondary mb-8">
            Whether you&apos;re setting up a permanent backyard court or need tournament-ready equipment 
            that travels, Selkirk delivers every time. Used at major tournaments and beloved by recreational 
            players who refuse to compromise on quality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>

          <a
            href="https://www.selkirk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
          >
            Shop Selkirk <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={images[0]} alt="Selkirk Aluminum Pro Net System" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Selkirk Nets Up Close</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-border hover:border-neon/40 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={src}
                  alt={`Selkirk Pro Net ${i + 1}`}
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
        <h2 className="text-2xl font-bold text-text-primary mb-3">Need a Court for Your Selkirk Net?</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">
          Find verified pickleball court contractors in your area who can build the perfect surface for your Selkirk net system.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/search?sport=pickleball"
            className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
          >
            Find Pickleball Court Contractors <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="https://www.selkirk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-text-secondary px-6 py-3 rounded-lg font-semibold hover:border-neon/50 hover:text-neon transition-colors"
          >
            Visit Selkirk.com <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
