import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Star, Zap, DollarSign, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Pickleball Nets Compared: Selkirk vs Dominator vs SwiftNet',
  description: 'Find the perfect pickleball net for your needs. Compare Selkirk (premium), Dominator (value), and SwiftNet (portable) — our top 3 picks for 2026.',
};

const nets = [
  {
    name: 'Selkirk Pro Net',
    slug: 'selkirk',
    href: '/products/selkirk',
    image: '/products/selkirk-net.jpg',
    badge: 'Premium',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    badgeIcon: Star,
    tagline: 'The Gold Standard',
    description: 'Premium aluminum construction, tournament approved, used at major events worldwide. The net serious players choose when quality matters most.',
    bestFor: 'Permanent courts, clubs, serious players who want the best',
    pros: ['Tournament approved', 'Premium aluminum frame', 'Best-in-class tension', 'Trusted by pros'],
    priceRange: '$$$',
    portability: 'Moderate',
    external: 'https://www.selkirk.com',
  },
  {
    name: 'Dominator Pro Max',
    slug: 'dominator-nets',
    href: '/products/dominator-nets',
    image: '/products/dominator-net-1.jpeg',
    badge: 'Semi-Permanent',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    badgeIcon: DollarSign,
    tagline: 'The Net the Pros Play On',
    description: '6061 T6 aluminum construction (aircraft-grade), built-in locking wheels, hand crank net tension, and USAPA regulation dimensions. Semi-permanent meets portable.',
    bestFor: 'Home courts, facilities, clubs, competitive play',
    pros: ['Aircraft-grade aluminum', 'Locking wheels', 'Hand crank tension', 'Lifetime warranty'],
    priceRange: '$$$',
    portability: 'Semi-Permanent',
    external: 'https://www.dominatorhoop.com/product/max-semi-permanent-portable-pickleball-net/',
  },
  {
    name: 'SwiftNet® Portable',
    slug: 'swiftnet',
    href: '/products/swiftnet',
    image: '/products/swiftnet-1.jpg',
    badge: 'Best Portable',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    badgeIcon: Zap,
    tagline: 'Take It Anywhere',
    description: 'At just 17 lbs with a patent-pending carbon fiber Boom tension system, SwiftNet is THE net for portability. Fits in luggage, sets up in 3 minutes.',
    bestFor: 'Travel, parks, driveways, players without permanent courts',
    pros: ['17 lbs ultra-light', 'Carbon fiber frame', '3-minute setup', 'Luggage-friendly'],
    priceRange: '$$',
    portability: 'Excellent',
    external: 'https://swiftnet.pro',
  },
];

export default function NetsComparisonPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Back link */}
      <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-neon mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
          Pickleball <span className="neon-text">Net Comparison</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Selkirk vs Dominator vs SwiftNet — which pickleball net is right for you?
          Here&apos;s our head-to-head comparison of the three best options on the market.
        </p>
      </div>

      {/* Net Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {nets.map((net) => {
          const BadgeIcon = net.badgeIcon;
          return (
            <div
              key={net.slug}
              className="bg-surface-card rounded-xl border border-border overflow-hidden hover:border-neon/40 transition-all group flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={net.image}
                  alt={net.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${net.badgeColor}`}>
                  <BadgeIcon className="h-3 w-3" /> {net.badge}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs text-neon font-medium mb-1">{net.tagline}</p>
                <h2 className="text-xl font-bold text-text-primary mb-2 group-hover:text-neon transition-colors">
                  {net.name}
                </h2>
                <p className="text-text-secondary text-sm mb-4">{net.description}</p>

                <div className="mb-4">
                  <p className="text-xs text-text-muted mb-2">Best for:</p>
                  <p className="text-sm text-text-secondary">{net.bestFor}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-text-muted mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {net.pros.map((pro) => (
                      <span key={pro} className="text-xs bg-surface-hover px-2 py-0.5 rounded text-text-secondary">
                        {pro}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm mb-4 mt-auto">
                  <div>
                    <span className="text-text-muted">Price:</span>
                    <span className="ml-1 font-semibold text-text-primary">{net.priceRange}</span>
                  </div>
                  <div>
                    <span className="text-text-muted">Portability:</span>
                    <span className="ml-1 font-semibold text-text-primary">{net.portability}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={net.href}
                    className="inline-flex items-center justify-center gap-2 bg-neon text-surface px-4 py-2.5 rounded-lg font-semibold hover:bg-neon-hover transition-colors text-sm"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                  {net.external && (
                    <a
                      href={net.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-border text-text-secondary px-4 py-2 rounded-lg font-medium hover:border-neon/50 hover:text-neon transition-colors text-sm"
                    >
                      Shop Now <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Comparison Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-surface-card rounded-xl border border-border text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-text-muted font-medium">Feature</th>
                <th className="text-center p-4 text-text-primary font-semibold">Selkirk</th>
                <th className="text-center p-4 text-text-primary font-semibold">Dominator</th>
                <th className="text-center p-4 text-text-primary font-semibold">SwiftNet</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 text-text-muted">Price Range</td>
                <td className="p-4 text-center text-text-secondary">$$$</td>
                <td className="p-4 text-center text-text-secondary">$$$</td>
                <td className="p-4 text-center text-text-secondary">$$</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 text-text-muted">Best For</td>
                <td className="p-4 text-center text-text-secondary">Permanent / Clubs</td>
                <td className="p-4 text-center text-text-secondary">Home Courts / Facilities</td>
                <td className="p-4 text-center text-text-secondary">Travel / Portable</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 text-text-muted">Portability</td>
                <td className="p-4 text-center text-text-secondary">Moderate</td>
                <td className="p-4 text-center text-text-secondary">Semi-Permanent</td>
                <td className="p-4 text-center text-neon font-medium">Excellent</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 text-text-muted">USAPA Approved</td>
                <td className="p-4 text-center text-neon">✓</td>
                <td className="p-4 text-center text-neon">✓</td>
                <td className="p-4 text-center text-text-secondary">—</td>
              </tr>
              <tr>
                <td className="p-4 text-text-muted">Weight</td>
                <td className="p-4 text-center text-text-secondary">~30 lbs</td>
                <td className="p-4 text-center text-text-secondary">Heavy-duty</td>
                <td className="p-4 text-center text-neon font-medium">17 lbs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="mb-16 bg-surface-card rounded-xl border border-border p-6 md:p-8">
        <h2 className="text-xl font-bold text-text-primary mb-4">The Bottom Line</h2>
        <div className="space-y-3 text-text-secondary">
          <p>
            <strong className="text-text-primary">Choose Selkirk</strong> if you&apos;re setting up a permanent court,
            running a club, or need tournament-approved equipment. It&apos;s the premium choice for a reason.
          </p>
          <p>
            <strong className="text-text-primary">Choose Dominator</strong> if you want aircraft-grade aluminum with semi-permanent locking wheels.
            Built for facilities, home courts, and competitive play with a lifetime warranty.
          </p>
          <p>
            <strong className="text-text-primary">Choose SwiftNet</strong> if portability is your priority. At 17 lbs,
            it&apos;s unmatched for travel, parks, or anywhere you need to set up and break down quickly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-r from-neon/10 to-accent/10 border border-neon/20 text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-3">Need a Court Built?</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto">
          Find verified pickleball court contractors in your area who can build the perfect surface for any of these nets.
        </p>
        <Link
          href="/search?sport=pickleball"
          className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon-hover transition-colors"
        >
          Find Pickleball Court Contractors <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
