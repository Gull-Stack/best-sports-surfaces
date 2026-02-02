import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, ShieldCheck, Star, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dominator Hoops - The Best In-Ground Basketball Systems',
  description: 'Dominator makes the best in-ground basketball systems on the market. Commercial-grade, tempered glass backboards, adjustable height. Trusted by pros and homeowners.',
};

const images = [
  '/products/dominator-hoop-1.jpg',
  '/products/dominator-hoop-2.jpg',
  '/products/dominator-hoop-3.jpg',
  '/products/dominator-hoop-4.jpg',
  '/products/dominator-hoop-5.jpg',
  '/products/dominator-hoop-6.jpg',
];

const features = [
  'Tempered glass backboard',
  'Adjustable height system',
  'In-ground steel pole mount',
  'Commercial-grade construction',
  'Built to last decades',
  'Multiple size options',
  'Residential & commercial models',
  'Industry-leading warranty',
];

export default function DominatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Back link */}
      <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-neon mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      {/* Hero */}
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neon/10 text-neon border border-neon/30 mb-4">
            <Star className="h-3 w-3" /> Top Pick
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Dominator <span className="neon-text">Hoops</span>
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            The best in-ground basketball systems on the market. Period. Commercial-grade construction 
            with tempered glass backboards and rock-solid stability. Built to handle years of aggressive 
            play — from backyard warriors to full-court ballers.
          </p>
          <p className="text-text-secondary mb-8">
            If you&apos;re serious about your court, this is the only hoop worth buying. Dominator systems 
            are trusted by homeowners, schools, and commercial facilities across the country. Once you 
            play on one, everything else feels like a toy.
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
            href="https://www.dominatorhoop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
          >
            Shop Dominator <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={images[0]} alt="Dominator In-Ground Basketball System" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Dominator in Action</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-border hover:border-neon/40 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={src}
                  alt={`Dominator Hoop installation ${i + 1}`}
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
        <h2 className="text-2xl font-bold text-text-primary mb-3">Need a Court for Your Dominator Hoop?</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">
          Find verified basketball court contractors in your area who can build the perfect surface for your Dominator system.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/search?sport=basketball"
            className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
          >
            Find Basketball Court Contractors <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="https://www.dominatorhoop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-text-secondary px-6 py-3 rounded-lg font-semibold hover:border-neon/50 hover:text-neon transition-colors"
          >
            Visit DominatorHoop.com <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
