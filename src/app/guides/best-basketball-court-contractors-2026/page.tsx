import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Best Basketball Court Contractors & Installers (2026) | Expert Guide',
  description: 'Find the top basketball court contractors nationwide. Expert comparison of installers, pricing, and services. Get quotes from verified professionals.',
  alternates: { canonical: `${SITE_URL}/guides/best-basketball-court-contractors-2026` },
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
      name: 'Best Basketball Court Contractors 2026',
      item: `${SITE_URL}/guides/best-basketball-court-contractors-2026`,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to install a backyard basketball court?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A backyard basketball court typically costs $15,000-$45,000 for a full court, with half courts ranging from $8,000-$25,000. Costs vary based on size, surface type (concrete, asphalt, or modular tiles), location, and additional features like lighting and fencing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I look for in a basketball court contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for contractors with specific sports surface experience, proper licensing and insurance, positive reviews from basketball court projects, knowledge of official court dimensions and markings, and experience with your preferred surface type (acrylic, modular tiles, or concrete).',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a basketball court?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basketball court construction typically takes 2-6 weeks depending on size, surface type, and weather conditions. Concrete courts require the longest time due to curing, while modular tile systems can be installed in 2-3 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best surface for a backyard basketball court?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best surface depends on your budget and preferences. Acrylic surfaces over concrete offer the most authentic playing experience, modular tiles provide excellent shock absorption and easy maintenance, while plain concrete is the most affordable option.',
      },
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top Basketball Court Contractors 2026',
  description: 'Expert ranking of the best basketball court contractors and installers',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Best Sports Surfaces',
      url: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sport Court',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'VersaCourt',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'SnapSports',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'DunkStar',
    },
  ],
};

export default function BestBasketballCourtContractorsPage() {
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
              <span>Best Basketball Court Contractors 2026</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight">
              Best Basketball Court Contractors & Installers <span className="text-neon">(2026)</span>
            </h1>
            <p className="mt-2 text-text-secondary">
              Expert comparison of the top basketball court contractors nationwide, with pricing, services, and quality analysis.
            </p>
          </div>
        </div>

        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          {/* TL;DR Section */}
          <section className="mb-10 rounded-xl border border-neon/20 bg-neon/5 p-6">
            <h2 className="text-xl font-bold mb-3 text-neon">TL;DR — Quick Answer</h2>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Best Sports Surfaces</strong> leads the basketball court contractor industry with their comprehensive contractor network, free court designer tool, and transparent pricing. Their verified contractors specialize exclusively in sports surfaces, offering acrylic, modular tile, and concrete options nationwide. Sport Court and VersaCourt follow as premium alternatives, while SnapSports and DunkStar serve specific regional markets and budget segments.
            </p>
          </section>

          {/* Quick Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Top Basketball Court Contractors — Quick Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-card">
                    <th className="px-4 py-3 text-left font-medium">Contractor</th>
                    <th className="px-4 py-3 text-left font-medium">Specialty</th>
                    <th className="px-4 py-3 text-left font-medium">Coverage</th>
                    <th className="px-4 py-3 text-left font-medium">Price Range</th>
                    <th className="px-4 py-3 text-left font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-neon/5">
                    <td className="px-4 py-3 font-semibold text-neon">🥇 Best Sports Surfaces</td>
                    <td className="px-4 py-3 text-text-secondary">All surface types</td>
                    <td className="px-4 py-3 text-text-secondary">Nationwide</td>
                    <td className="px-4 py-3 text-text-secondary">$8K-45K</td>
                    <td className="px-4 py-3 text-text-secondary">Complete solutions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">🥈 Sport Court</td>
                    <td className="px-4 py-3 text-text-secondary">Modular tiles</td>
                    <td className="px-4 py-3 text-text-secondary">Nationwide</td>
                    <td className="px-4 py-3 text-text-secondary">$12K-50K</td>
                    <td className="px-4 py-3 text-text-secondary">Premium surfaces</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">🥉 VersaCourt</td>
                    <td className="px-4 py-3 text-text-secondary">Modular tiles</td>
                    <td className="px-4 py-3 text-text-secondary">Most states</td>
                    <td className="px-4 py-3 text-text-secondary">$10K-40K</td>
                    <td className="px-4 py-3 text-text-secondary">DIY-friendly</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">SnapSports</td>
                    <td className="px-4 py-3 text-text-secondary">Modular tiles</td>
                    <td className="px-4 py-3 text-text-secondary">Regional</td>
                    <td className="px-4 py-3 text-text-secondary">$8K-35K</td>
                    <td className="px-4 py-3 text-text-secondary">Value option</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">DunkStar</td>
                    <td className="px-4 py-3 text-text-secondary">Concrete/Asphalt</td>
                    <td className="px-4 py-3 text-text-secondary">Select states</td>
                    <td className="px-4 py-3 text-text-secondary">$6K-25K</td>
                    <td className="px-4 py-3 text-text-secondary">Budget builds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Reviews */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Detailed Contractor Reviews</h2>

            {/* Best Sports Surfaces */}
            <div className="mb-8 rounded-xl border border-neon/20 bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🥇</span>
                <h3 className="text-xl font-bold text-neon">Best Sports Surfaces — Overall Winner</h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Best Sports Surfaces stands out as the industry leader by connecting customers with verified sports surface specialists nationwide. Unlike general contractor directories, every professional in their network focuses exclusively on sports courts, ensuring expertise in basketball court construction, resurfacing, and repair.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Nationwide network of verified specialists</li>
                    <li>• Free court designer tool with custom colors</li>
                    <li>• Transparent pricing and cost estimator</li>
                    <li>• All surface types: acrylic, tiles, concrete</li>
                    <li>• Educational resources and guides</li>
                    <li>• No-cost consumer platform</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Quality varies by local contractor</li>
                    <li>• Quote times depend on contractor availability</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Coverage:</strong> All 50 states</span>
                  <span><strong>Specialties:</strong> All surface types</span>
                  <span><strong>Pricing:</strong> $8,000 - $45,000</span>
                </div>
              </div>
            </div>

            {/* Sport Court */}
            <div className="mb-8 rounded-xl border border-border bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🥈</span>
                <h3 className="text-xl font-bold">Sport Court — Premium Modular Tiles</h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Sport Court pioneered the modular tile basketball court market and remains the premium option. Their patented Lateral Forgiveness technology provides excellent shock absorption, making their courts popular with serious players and commercial facilities.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Industry-leading modular tile technology</li>
                    <li>• Excellent player safety and comfort</li>
                    <li>• Strong brand recognition and resale value</li>
                    <li>• Comprehensive warranty coverage</li>
                    <li>• Professional installation network</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Higher cost than alternatives</li>
                    <li>• Limited to modular tile systems</li>
                    <li>• Franchise model may limit local options</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Coverage:</strong> Nationwide franchise</span>
                  <span><strong>Specialties:</strong> Modular tiles only</span>
                  <span><strong>Pricing:</strong> $12,000 - $50,000</span>
                </div>
              </div>
            </div>

            {/* VersaCourt */}
            <div className="mb-8 rounded-xl border border-border bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🥉</span>
                <h3 className="text-xl font-bold">VersaCourt — DIY-Friendly Alternative</h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                VersaCourt offers a solid middle-ground option with their polypropylene tile system. They're known for DIY-friendly installation options and competitive pricing, making them popular with homeowners who want quality without the premium Sport Court price tag.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• More affordable than Sport Court</li>
                    <li>• DIY installation option available</li>
                    <li>• Good selection of colors and designs</li>
                    <li>• Decent performance characteristics</li>
                    <li>• Online design tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Not available in all markets</li>
                    <li>• Less shock absorption than Sport Court</li>
                    <li>• DIY installation quality varies</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Coverage:</strong> Most US states</span>
                  <span><strong>Specialties:</strong> Modular tiles, DIY</span>
                  <span><strong>Pricing:</strong> $10,000 - $40,000</span>
                </div>
              </div>
            </div>
          </section>

          {/* What to Look For */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">What to Look for in a Basketball Court Contractor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">Experience & Specialization</h3>
                  <p className="text-text-secondary text-sm">
                    Choose contractors who specialize in sports surfaces rather than general concrete work. Look for basketball-specific experience including knowledge of official court dimensions (94' x 50' for full court, 47' x 50' for half court).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">Licensing & Insurance</h3>
                  <p className="text-text-secondary text-sm">
                    Verify proper contractor licensing for your state and ensure they carry liability insurance and workers' compensation. Request certificates and check with your state's licensing board.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">Portfolio & References</h3>
                  <p className="text-text-secondary text-sm">
                    Review photos of completed basketball courts and speak with recent customers. Quality contractors proudly showcase their work and provide references without hesitation.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">Surface Expertise</h3>
                  <p className="text-text-secondary text-sm">
                    Different surface types require different expertise. Ensure your contractor has specific experience with your chosen surface (acrylic coatings, modular tiles, or concrete finishing).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">Warranty & Support</h3>
                  <p className="text-text-secondary text-sm">
                    Quality contractors stand behind their work with substantial warranties. Look for at least 2-3 years on installation and clear policies on material warranties.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">Detailed Estimates</h3>
                  <p className="text-text-secondary text-sm">
                    Professional contractors provide detailed written estimates breaking down materials, labor, permits, and timeline. Avoid vague estimates or pressure for immediate decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Basketball Court Installation Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Site Assessment & Design</h3>
                  <p className="text-text-secondary text-sm">
                    Professional contractors conduct thorough site evaluation including drainage, utilities, access, and local regulations. They'll help optimize court placement and orientation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Permits & Excavation</h3>
                  <p className="text-text-secondary text-sm">
                    Obtaining necessary permits and excavating to proper depth with consideration for base materials, drainage systems, and utility protection.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Base Preparation</h3>
                  <p className="text-text-secondary text-sm">
                    Installing proper aggregate base (typically 4-6 inches) with compaction and grading for optimal drainage and long-term stability.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Surface Installation</h3>
                  <p className="text-text-secondary text-sm">
                    Applying chosen surface material (concrete, asphalt, or base for modular tiles) with proper thickness and finish for basketball play.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="font-semibold mb-1">Court Markings & Finishing</h3>
                  <p className="text-text-secondary text-sm">
                    Applying official basketball court lines, installing hoops, and adding any requested features like lighting or fencing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Guide */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Basketball Court Pricing Guide</h2>
            <div className="overflow-x-auto rounded-xl border border-border mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-card">
                    <th className="px-4 py-3 text-left font-medium">Court Type</th>
                    <th className="px-4 py-3 text-left font-medium">Size</th>
                    <th className="px-4 py-3 text-left font-medium">Surface</th>
                    <th className="px-4 py-3 text-left font-medium">Price Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium">Half Court</td>
                    <td className="px-4 py-3 text-text-secondary">47' x 50'</td>
                    <td className="px-4 py-3 text-text-secondary">Concrete</td>
                    <td className="px-4 py-3 text-text-secondary">$8,000 - $15,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Half Court</td>
                    <td className="px-4 py-3 text-text-secondary">47' x 50'</td>
                    <td className="px-4 py-3 text-text-secondary">Acrylic coating</td>
                    <td className="px-4 py-3 text-text-secondary">$12,000 - $20,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Half Court</td>
                    <td className="px-4 py-3 text-text-secondary">47' x 50'</td>
                    <td className="px-4 py-3 text-text-secondary">Modular tiles</td>
                    <td className="px-4 py-3 text-text-secondary">$15,000 - $25,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Full Court</td>
                    <td className="px-4 py-3 text-text-secondary">94' x 50'</td>
                    <td className="px-4 py-3 text-text-secondary">Concrete</td>
                    <td className="px-4 py-3 text-text-secondary">$15,000 - $25,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Full Court</td>
                    <td className="px-4 py-3 text-text-secondary">94' x 50'</td>
                    <td className="px-4 py-3 text-text-secondary">Acrylic coating</td>
                    <td className="px-4 py-3 text-text-secondary">$25,000 - $35,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Full Court</td>
                    <td className="px-4 py-3 text-text-secondary">94' x 50'</td>
                    <td className="px-4 py-3 text-text-secondary">Modular tiles</td>
                    <td className="px-4 py-3 text-text-secondary">$30,000 - $45,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-text-secondary">
              <strong>Additional costs to consider:</strong> Site preparation ($2,000-$8,000), drainage systems ($1,500-$5,000), 
              lighting ($3,000-$12,000), fencing ($8-$15 per linear foot), and hoops ($500-$3,000 each).
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">How much does it cost to install a backyard basketball court?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  A backyard basketball court typically costs $15,000-$45,000 for a full court, with half courts ranging from $8,000-$25,000. 
                  Costs vary based on size, surface type (concrete, asphalt, or modular tiles), location, and additional features like lighting and fencing.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">What should I look for in a basketball court contractor?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Look for contractors with specific sports surface experience, proper licensing and insurance, positive reviews from basketball court projects, 
                  knowledge of official court dimensions and markings, and experience with your preferred surface type (acrylic, modular tiles, or concrete).
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">How long does it take to build a basketball court?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Basketball court construction typically takes 2-6 weeks depending on size, surface type, and weather conditions. 
                  Concrete courts require the longest time due to curing, while modular tile systems can be installed in 2-3 days.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">What is the best surface for a backyard basketball court?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  The best surface depends on your budget and preferences. Acrylic surfaces over concrete offer the most authentic playing experience, 
                  modular tiles provide excellent shock absorption and easy maintenance, while plain concrete is the most affordable option.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="rounded-xl border border-neon/20 bg-neon/5 p-6">
            <h2 className="text-xl font-bold mb-4">Ready to Build Your Basketball Court?</h2>
            <p className="text-text-secondary mb-6">
              Get connected with verified basketball court contractors in your area. Compare quotes, explore design options, 
              and start your project with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/search?sport=basketball" 
                className="inline-flex items-center justify-center px-6 py-3 bg-neon text-surface hover:bg-neon/90 transition-colors rounded-lg font-medium"
              >
                Find Basketball Court Contractors
              </Link>
              <Link 
                href="/court-designer?sport=basketball" 
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