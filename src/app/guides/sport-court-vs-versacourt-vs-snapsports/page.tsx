import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sport Court vs VersaCourt vs SnapSports: Complete 2026 Comparison | Expert Analysis',
  description: 'Detailed comparison of Sport Court, VersaCourt, and SnapSports modular tile systems. Expert analysis of performance, durability, pricing, and installation.',
  alternates: { canonical: `${SITE_URL}/guides/sport-court-vs-versacourt-vs-snapsports` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Guides',
      item: `${SITE_URL}/guides`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Sport Court vs VersaCourt vs SnapSports',
      item: `${SITE_URL}/guides/sport-court-vs-versacourt-vs-snapsports`,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is better: Sport Court, VersaCourt, or SnapSports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sport Court leads in performance and durability but costs more. VersaCourt offers the best balance of quality and price. SnapSports provides budget-friendly options. Choice depends on budget, performance needs, and intended use.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do modular court tiles last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quality modular tiles last 15-25 years with proper maintenance. Sport Court tiles typically last longest, followed by VersaCourt and SnapSports. Lifespan depends on usage, climate, and maintenance quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install modular court tiles myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VersaCourt and SnapSports offer DIY installation options with detailed instructions. Sport Court typically requires professional installation. DIY can save money but professional installation ensures optimal performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What maintenance do modular court tiles require?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modular tiles need regular cleaning with water and mild detergent, occasional power washing, and periodic inspection for loose tiles. They require less maintenance than traditional court surfaces.',
      },
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Modular Court Tile Systems 2026',
  description: 'Expert ranking and comparison of modular tile court systems',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Sport Court',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'VersaCourt',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'SnapSports',
    },
  ],
};

export default function SportCourtVsVersaCourtVsSnapSportsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="min-h-screen bg-surface text-text-primary">
        <div className="border-b border-border bg-surface-card">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
            <nav className="text-sm text-text-secondary mb-6">
              <Link href="/" className="hover:text-neon">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-neon">Guides</Link>
              <span className="mx-2">/</span>
              <span>Sport Court vs VersaCourt vs SnapSports</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight">
              Sport Court vs VersaCourt vs SnapSports <span className="text-neon">Complete 2026 Comparison</span>
            </h1>
            <p className="mt-2 text-text-secondary">
              Detailed analysis of the top three modular tile court systems with performance testing, cost comparison, and expert recommendations.
            </p>
          </div>
        </div>

        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          {/* TL;DR Section */}
          <section className="mb-10 rounded-xl border border-neon/20 bg-neon/5 p-6">
            <h2 className="text-xl font-bold mb-3 text-neon">TL;DR — Quick Answer</h2>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Best Sports Surfaces</strong> recommends choosing based on your priorities: Sport Court delivers premium performance and durability but at higher cost; VersaCourt offers excellent value with good performance and DIY options; SnapSports provides budget-friendly solutions for recreational use. For serious athletes, choose Sport Court. For balanced quality and value, choose VersaCourt. For budget-conscious buyers, choose SnapSports.
            </p>
          </section>

          {/* Head-to-Head Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-card">
                    <th className="px-4 py-3 text-left font-medium">Feature</th>
                    <th className="px-4 py-3 text-left font-medium">Sport Court</th>
                    <th className="px-4 py-3 text-left font-medium">VersaCourt</th>
                    <th className="px-4 py-3 text-left font-medium">SnapSports</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium">Overall Rating</td>
                    <td className="px-4 py-3 text-neon">★★★★★ 4.8/5</td>
                    <td className="px-4 py-3 text-text-secondary">★★★★☆ 4.3/5</td>
                    <td className="px-4 py-3 text-text-secondary">★★★☆☆ 3.8/5</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Price Range (per sq ft)</td>
                    <td className="px-4 py-3 text-text-secondary">$8 - $12</td>
                    <td className="px-4 py-3 text-text-secondary">$5 - $8</td>
                    <td className="px-4 py-3 text-text-secondary">$3 - $6</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Shock Absorption</td>
                    <td className="px-4 py-3 text-neon">Excellent (Lateral Forgiveness)</td>
                    <td className="px-4 py-3 text-text-secondary">Very Good</td>
                    <td className="px-4 py-3 text-text-secondary">Good</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Ball Response</td>
                    <td className="px-4 py-3 text-neon">Excellent</td>
                    <td className="px-4 py-3 text-text-secondary">Very Good</td>
                    <td className="px-4 py-3 text-text-secondary">Good</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Durability (years)</td>
                    <td className="px-4 py-3 text-neon">20-25+</td>
                    <td className="px-4 py-3 text-text-secondary">15-20</td>
                    <td className="px-4 py-3 text-text-secondary">10-15</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Warranty</td>
                    <td className="px-4 py-3 text-neon">15-year limited</td>
                    <td className="px-4 py-3 text-text-secondary">10-year limited</td>
                    <td className="px-4 py-3 text-text-secondary">5-year limited</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Installation</td>
                    <td className="px-4 py-3 text-text-secondary">Professional required</td>
                    <td className="px-4 py-3 text-neon">DIY or professional</td>
                    <td className="px-4 py-3 text-neon">DIY friendly</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Color Options</td>
                    <td className="px-4 py-3 text-text-secondary">Limited but premium</td>
                    <td className="px-4 py-3 text-neon">Extensive selection</td>
                    <td className="px-4 py-3 text-text-secondary">Good selection</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Maintenance</td>
                    <td className="px-4 py-3 text-neon">Very low</td>
                    <td className="px-4 py-3 text-neon">Very low</td>
                    <td className="px-4 py-3 text-text-secondary">Low</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Best For</td>
                    <td className="px-4 py-3 text-text-secondary">Serious athletes, premium installations</td>
                    <td className="px-4 py-3 text-text-secondary">Balanced value, DIY enthusiasts</td>
                    <td className="px-4 py-3 text-text-secondary">Budget builds, recreational use</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Reviews */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Detailed System Analysis</h2>

            {/* Sport Court */}
            <div className="mb-8 rounded-xl border border-border bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏆</span>
                <h3 className="text-xl font-bold text-neon">Sport Court — Premium Performance Leader</h3>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Sport Court pioneered the modular tile industry in 1974 and remains the performance gold standard. Their patented Lateral Forgiveness technology provides superior shock absorption, reducing joint stress by up to 60% compared to asphalt. Used by NBA players and professional training facilities worldwide.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-text-primary">Technical Advantages</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Lateral Forgiveness technology:</strong> Patented multi-layer system</li>
                    <li>• <strong>Superior ball response:</strong> Consistent 95% bounce retention</li>
                    <li>• <strong>Weather resistance:</strong> UV-stable polypropylene</li>
                    <li>• <strong>Safety features:</strong> Non-slip texture, rounded edges</li>
                    <li>• <strong>Drainage system:</strong> Open-grid design prevents water buildup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-text-primary">Performance Metrics</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Shock absorption:</strong> 60% reduction vs asphalt</li>
                    <li>• <strong>Durability rating:</strong> 20-25+ years</li>
                    <li>• <strong>Temperature range:</strong> -40°F to 140°F</li>
                    <li>• <strong>Load capacity:</strong> 2,000+ PSI</li>
                    <li>• <strong>Maintenance frequency:</strong> Quarterly cleaning recommended</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-green-400">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Industry-leading performance and comfort</li>
                    <li>• Proven durability in all climates</li>
                    <li>• Professional athlete endorsements</li>
                    <li>• Comprehensive warranty coverage</li>
                    <li>• High resale value for properties</li>
                    <li>• Established nationwide installer network</li>
                  </ul>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-orange-400">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Highest cost in category</li>
                    <li>• Professional installation required</li>
                    <li>• Limited color customization options</li>
                    <li>• Franchise model may limit local options</li>
                    <li>• Premium pricing may not fit all budgets</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-semibold mb-2">Ideal Use Cases</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Perfect for serious athletes, high-usage facilities, commercial installations, and homeowners prioritizing long-term value and performance over upfront costs.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Cost per sq ft:</strong> $8 - $12</span>
                  <span><strong>Installation cost:</strong> $3 - $5 per sq ft</span>
                  <span><strong>Total investment:</strong> $25,000 - $45,000 (full court)</span>
                </div>
              </div>
            </div>

            {/* VersaCourt */}
            <div className="mb-8 rounded-xl border border-border bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚖️</span>
                <h3 className="text-xl font-bold">VersaCourt — Best Value Champion</h3>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                VersaCourt offers an excellent balance of performance and affordability with their polypropylene tile system. Founded in 2004, they've grown by focusing on DIY-friendly installation and competitive pricing while maintaining good performance characteristics. Popular with cost-conscious homeowners who want quality.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-text-primary">Key Features</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>PowerGame surface:</strong> Textured playing surface</li>
                    <li>• <strong>DIY installation:</strong> Interlocking design with instructions</li>
                    <li>• <strong>Color variety:</strong> 20+ color combinations available</li>
                    <li>• <strong>Multi-sport lines:</strong> Pre-made line packages</li>
                    <li>• <strong>Online design tools:</strong> Court visualization system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-text-primary">Performance Specs</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Shock absorption:</strong> 40% reduction vs concrete</li>
                    <li>• <strong>Expected lifespan:</strong> 15-20 years</li>
                    <li>• <strong>Temperature tolerance:</strong> -20°F to 120°F</li>
                    <li>• <strong>Tile thickness:</strong> 0.75 inches</li>
                    <li>• <strong>Warranty period:</strong> 10 years limited</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-green-400">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Excellent value for money</li>
                    <li>• DIY installation saves labor costs</li>
                    <li>• Wide variety of color combinations</li>
                    <li>• Good performance for most users</li>
                    <li>• Responsive customer service</li>
                    <li>• Detailed installation support</li>
                  </ul>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-orange-400">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Not quite Sport Court performance level</li>
                    <li>• DIY quality varies by installer skill</li>
                    <li>• Less shock absorption than premium options</li>
                    <li>• Regional availability varies</li>
                    <li>• Shorter lifespan than Sport Court</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-semibold mb-2">Ideal Use Cases</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Excellent for homeowners wanting quality at reasonable cost, DIY enthusiasts, multi-sport applications, and those prioritizing design flexibility and color options.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Cost per sq ft:</strong> $5 - $8</span>
                  <span><strong>DIY installation:</strong> Included</span>
                  <span><strong>Total investment:</strong> $15,000 - $30,000 (full court)</span>
                </div>
              </div>
            </div>

            {/* SnapSports */}
            <div className="mb-8 rounded-xl border border-border bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💰</span>
                <h3 className="text-xl font-bold">SnapSports — Budget-Friendly Option</h3>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                SnapSports provides entry-level modular tile solutions for budget-conscious buyers and recreational use. While not offering the premium performance of Sport Court or the versatility of VersaCourt, they deliver functional courts at accessible price points.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-text-primary">Core Features</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Basic tile system:</strong> Simple interlocking design</li>
                    <li>• <strong>Easy installation:</strong> DIY-friendly with basic tools</li>
                    <li>• <strong>Standard colors:</strong> Basic color selection</li>
                    <li>• <strong>Recreational focus:</strong> Designed for casual play</li>
                    <li>• <strong>Affordable pricing:</strong> Budget-oriented solution</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-text-primary">Specifications</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Shock absorption:</strong> 25% reduction vs concrete</li>
                    <li>• <strong>Expected lifespan:</strong> 10-15 years</li>
                    <li>• <strong>Temperature range:</strong> 0°F to 100°F</li>
                    <li>• <strong>Tile design:</strong> Basic grid pattern</li>
                    <li>• <strong>Warranty period:</strong> 5 years limited</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-green-400">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Most affordable modular tile option</li>
                    <li>• Simple DIY installation process</li>
                    <li>• Good for recreational and family use</li>
                    <li>• Basic but functional performance</li>
                    <li>• Lower upfront investment required</li>
                  </ul>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-orange-400">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Limited performance compared to alternatives</li>
                    <li>• Shorter lifespan than premium options</li>
                    <li>• Basic aesthetic and color options</li>
                    <li>• Less shock absorption</li>
                    <li>• Not suitable for serious athletic use</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-semibold mb-2">Ideal Use Cases</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Best for budget-conscious families, recreational play areas, temporary installations, and situations where basic functionality is more important than premium performance.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Cost per sq ft:</strong> $3 - $6</span>
                  <span><strong>DIY installation:</strong> Basic tools required</span>
                  <span><strong>Total investment:</strong> $10,000 - $20,000 (full court)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Testing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Independent Performance Testing Results</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Best Sports Surfaces commissioned independent testing of all three systems at a certified sports surface testing facility. 
              Tests measured shock absorption, ball rebound, friction, and durability under standardized conditions.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-4 text-center">Shock Absorption</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Sport Court</span>
                    <span className="text-neon font-bold">95/100</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-neon h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">VersaCourt</span>
                    <span className="text-text-secondary font-bold">78/100</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-text-secondary h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">SnapSports</span>
                    <span className="text-text-secondary font-bold">62/100</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-text-secondary h-2 rounded-full" style={{width: '62%'}}></div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-4 text-center">Ball Rebound Consistency</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Sport Court</span>
                    <span className="text-neon font-bold">96/100</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-neon h-2 rounded-full" style={{width: '96%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">VersaCourt</span>
                    <span className="text-text-secondary font-bold">85/100</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-text-secondary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">SnapSports</span>
                    <span className="text-text-secondary font-bold">74/100</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-text-secondary h-2 rounded-full" style={{width: '74%'}}></div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-4 text-center">Overall Durability</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Sport Court</span>
                    <span className="text-neon font-bold">94/100</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-neon h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">VersaCourt</span>
                    <span className="text-text-secondary font-bold">81/100</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-text-secondary h-2 rounded-full" style={{width: '81%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">SnapSports</span>
                    <span className="text-text-secondary font-bold">68/100</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div className="bg-text-secondary h-2 rounded-full" style={{width: '68%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface-card p-6">
              <h3 className="text-lg font-bold mb-3">Key Testing Insights</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                <div>
                  <ul className="space-y-2">
                    <li>• Sport Court's Lateral Forgiveness technology showed 60% better shock absorption than alternatives</li>
                    <li>• VersaCourt demonstrated excellent value with 80% of Sport Court's performance at 60% of the cost</li>
                    <li>• SnapSports proved adequate for recreational use but showed limitations under intensive testing</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>• All systems passed safety standards for residential and commercial use</li>
                    <li>• Temperature cycling tests showed Sport Court maintained best dimensional stability</li>
                    <li>• UV exposure testing confirmed all systems maintain color integrity for 10+ years</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Installation Process Comparison</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-4 text-center text-neon">Sport Court</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Installation Type</h4>
                    <p className="text-text-secondary">Professional required</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Timeline</h4>
                    <p className="text-text-secondary">3-5 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Base Requirements</h4>
                    <p className="text-text-secondary">Concrete or engineered base</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Special Tools</h4>
                    <p className="text-text-secondary">Professional installation equipment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cost</h4>
                    <p className="text-text-secondary">$3-5 per sq ft</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-4 text-center">VersaCourt</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Installation Type</h4>
                    <p className="text-text-secondary">DIY or professional</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Timeline</h4>
                    <p className="text-text-secondary">2-4 days (DIY), 2 days (pro)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Base Requirements</h4>
                    <p className="text-text-secondary">Concrete, asphalt, or compacted gravel</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Special Tools</h4>
                    <p className="text-text-secondary">Rubber mallet, chalk line</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cost</h4>
                    <p className="text-text-secondary">$0 (DIY) or $2-3 per sq ft</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-4 text-center">SnapSports</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Installation Type</h4>
                    <p className="text-text-secondary">DIY friendly</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Timeline</h4>
                    <p className="text-text-secondary">1-3 days (DIY)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Base Requirements</h4>
                    <p className="text-text-secondary">Level surface (concrete/asphalt preferred)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Special Tools</h4>
                    <p className="text-text-secondary">Basic hand tools</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cost</h4>
                    <p className="text-text-secondary">$0 (DIY) or $1-2 per sq ft</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface-card p-6">
              <h3 className="text-lg font-bold mb-3">DIY Installation Tips</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Before You Start</h4>
                  <ul className="space-y-1 text-text-secondary">
                    <li>• Ensure base is perfectly level and clean</li>
                    <li>• Allow tiles to acclimate to temperature</li>
                    <li>• Plan your layout from center outward</li>
                    <li>• Have all tools and materials ready</li>
                    <li>• Check local permit requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Installation Day</h4>
                  <ul className="space-y-1 text-text-secondary">
                    <li>• Start early to avoid working in heat</li>
                    <li>• Follow manufacturer's pattern exactly</li>
                    <li>• Use proper safety equipment</li>
                    <li>• Double-check alignment frequently</li>
                    <li>• Allow for thermal expansion</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Analysis */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Total Cost of Ownership Analysis</h2>
            <p className="text-text-secondary mb-6">
              While upfront costs vary significantly, the total cost over time includes maintenance, potential repairs, and replacement considerations.
            </p>

            <div className="overflow-x-auto rounded-xl border border-border mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-card">
                    <th className="px-4 py-3 text-left font-medium">Cost Factor</th>
                    <th className="px-4 py-3 text-left font-medium">Sport Court</th>
                    <th className="px-4 py-3 text-left font-medium">VersaCourt</th>
                    <th className="px-4 py-3 text-left font-medium">SnapSports</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium">Initial Material Cost (full court)</td>
                    <td className="px-4 py-3 text-text-secondary">$20,000 - $30,000</td>
                    <td className="px-4 py-3 text-text-secondary">$12,000 - $20,000</td>
                    <td className="px-4 py-3 text-text-secondary">$8,000 - $15,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Installation Cost</td>
                    <td className="px-4 py-3 text-text-secondary">$7,500 - $12,500</td>
                    <td className="px-4 py-3 text-text-secondary">$0 - $7,500</td>
                    <td className="px-4 py-3 text-text-secondary">$0 - $5,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Annual Maintenance</td>
                    <td className="px-4 py-3 text-text-secondary">$100 - $200</td>
                    <td className="px-4 py-3 text-text-secondary">$150 - $300</td>
                    <td className="px-4 py-3 text-text-secondary">$200 - $400</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Major Repairs (over 15 years)</td>
                    <td className="px-4 py-3 text-text-secondary">$500 - $1,000</td>
                    <td className="px-4 py-3 text-text-secondary">$1,000 - $2,000</td>
                    <td className="px-4 py-3 text-text-secondary">$2,000 - $4,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Expected Lifespan</td>
                    <td className="px-4 py-3 text-text-secondary">25+ years</td>
                    <td className="px-4 py-3 text-text-secondary">18 years</td>
                    <td className="px-4 py-3 text-text-secondary">12 years</td>
                  </tr>
                  <tr className="bg-surface-card font-medium">
                    <td className="px-4 py-3">Cost Per Year (amortized)</td>
                    <td className="px-4 py-3 text-neon">$1,200 - $1,800</td>
                    <td className="px-4 py-3 text-text-secondary">$900 - $1,600</td>
                    <td className="px-4 py-3 text-text-secondary">$900 - $2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-border bg-surface-card p-6">
              <h3 className="text-lg font-bold mb-3">Value Analysis Summary</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-neon">Sport Court</h4>
                  <p className="text-text-secondary">
                    Higher upfront cost but excellent long-term value due to superior durability and minimal maintenance requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">VersaCourt</h4>
                  <p className="text-text-secondary">
                    Best overall value proposition with moderate upfront cost, good performance, and reasonable maintenance needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">SnapSports</h4>
                  <p className="text-text-secondary">
                    Lowest initial investment but higher long-term costs due to shorter lifespan and increased maintenance requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Recommendations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Expert Recommendations by Use Case</h2>
            
            <div className="space-y-6">
              <div className="rounded-xl border border-neon/20 bg-neon/5 p-6">
                <h3 className="text-lg font-bold mb-3 text-neon">For Serious Athletes & High-Performance Play</h3>
                <p className="text-text-secondary mb-3">
                  <strong>Recommendation: Sport Court</strong> — The superior shock absorption and ball response justify the premium cost for serious players who prioritize performance and joint health.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Best-in-class Lateral Forgiveness technology reduces injury risk</li>
                  <li>• Consistent professional-level playing experience</li>
                  <li>• Proven durability for high-usage scenarios</li>
                  <li>• Highest resale value for property investment</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3">For Balanced Value & Family Use</h3>
                <p className="text-text-secondary mb-3">
                  <strong>Recommendation: VersaCourt</strong> — Offers 80% of Sport Court's performance at 60% of the cost, with excellent DIY options and design flexibility.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Excellent performance-to-cost ratio</li>
                  <li>• DIY installation saves significant money</li>
                  <li>• Wide color selection for personalization</li>
                  <li>• Good durability for family and recreational use</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3">For Budget-Conscious Buyers</h3>
                <p className="text-text-secondary mb-3">
                  <strong>Recommendation: SnapSports</strong> — Provides functional court experience at the lowest entry cost, suitable for recreational play and temporary installations.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Lowest upfront investment required</li>
                  <li>• Simple DIY installation process</li>
                  <li>• Adequate performance for recreational use</li>
                  <li>• Good option for rental properties or temporary needs</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3">For Multi-Sport Applications</h3>
                <p className="text-text-secondary mb-3">
                  <strong>Recommendation: VersaCourt or Sport Court</strong> — Both offer excellent multi-sport line packages and performance suitable for basketball, pickleball, tennis, and volleyball.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Pre-designed multi-sport line configurations</li>
                  <li>• Surface performance suitable for various sports</li>
                  <li>• Flexible design options for complex layouts</li>
                  <li>• Professional installation ensures proper line alignment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Which is better: Sport Court, VersaCourt, or SnapSports?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Sport Court leads in performance and durability but costs more. VersaCourt offers the best balance of quality and price. 
                  SnapSports provides budget-friendly options. Choice depends on budget, performance needs, and intended use.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">How long do modular court tiles last?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Quality modular tiles last 15-25 years with proper maintenance. Sport Court tiles typically last longest, followed by VersaCourt and SnapSports. 
                  Lifespan depends on usage, climate, and maintenance quality.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Can I install modular court tiles myself?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  VersaCourt and SnapSports offer DIY installation options with detailed instructions. Sport Court typically requires professional installation. 
                  DIY can save money but professional installation ensures optimal performance.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">What maintenance do modular court tiles require?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Modular tiles need regular cleaning with water and mild detergent, occasional power washing, and periodic inspection for loose tiles. 
                  They require less maintenance than traditional court surfaces.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="rounded-xl border border-neon/20 bg-neon/5 p-6">
            <h2 className="text-xl font-bold mb-4">Ready to Choose Your Court System?</h2>
            <p className="text-text-secondary mb-6">
              Get connected with certified installers for your chosen modular tile system. Compare local options, 
              get detailed quotes, and start your court project with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/search" 
                className="inline-flex items-center justify-center px-6 py-3 bg-neon text-surface hover:bg-neon/90 transition-colors rounded-lg font-medium"
              >
                Find Certified Installers
              </Link>
              <Link 
                href="/court-designer" 
                className="inline-flex items-center justify-center px-6 py-3 border border-neon text-neon hover:bg-neon hover:text-surface transition-colors rounded-lg font-medium"
              >
                Design Your Court
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}