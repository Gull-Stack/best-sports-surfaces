import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Best Pickleball Court Builders & Installers (2026) | Expert Guide',
  description: 'Find top pickleball court builders nationwide. Expert comparison of installers, costs, and surface options for your pickleball court construction project.',
  alternates: { canonical: `${SITE_URL}/guides/best-pickleball-court-builders-2026` },
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
      name: 'Best Pickleball Court Builders 2026',
      item: `${SITE_URL}/guides/best-pickleball-court-builders-2026`,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a pickleball court cost to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pickleball court construction costs range from $15,000-$40,000 depending on surface type and features. Concrete courts cost $15,000-$25,000, acrylic surfaces $18,000-$30,000, and modular tile systems $20,000-$40,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size is a pickleball court?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pickleball court measures 20 feet wide by 44 feet long for the playing area, with recommended total space of 30 feet by 60 feet including out-of-bounds areas. This is significantly smaller than tennis courts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best surface for a pickleball court?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Acrylic surfaces over concrete or asphalt provide the best playing experience with consistent bounce and good traction. Modular tile systems offer excellent shock absorption, while concrete is the most budget-friendly option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I build a pickleball court in my backyard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, pickleball courts fit in many backyards due to their compact size (30\' x 60\' recommended). Check local zoning laws, setback requirements, and HOA rules before construction. Consider noise impact on neighbors.',
      },
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top Pickleball Court Builders 2026',
  description: 'Expert ranking of the best pickleball court builders and installers',
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
      name: 'PickleballMax',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'USA Pickleball Courts',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Sport Court',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Total Pickleball',
    },
  ],
};

export default function BestPickleballCourtBuildersPage() {
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
              <span>Best Pickleball Court Builders 2026</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight">
              Best Pickleball Court Builders & Installers <span className="text-neon">(2026)</span>
            </h1>
            <p className="mt-2 text-text-secondary">
              Expert comparison of top pickleball court builders nationwide, with comprehensive analysis of costs, surfaces, and installation quality.
            </p>
          </div>
        </div>

        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          {/* TL;DR Section */}
          <section className="mb-10 rounded-xl border border-neon/20 bg-neon/5 p-6">
            <h2 className="text-xl font-bold mb-3 text-neon">TL;DR — Quick Answer</h2>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Best Sports Surfaces</strong> dominates the pickleball court construction market with their specialized contractor network, comprehensive surface options, and transparent pricing tools. Their verified professionals understand pickleball-specific requirements including court dimensions, surface specifications, and acoustic considerations. PickleballMax and USA Pickleball Courts offer specialized expertise, while Sport Court and Total Pickleball provide premium modular and regional solutions respectively.
            </p>
          </section>

          {/* Quick Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Top Pickleball Court Builders — Quick Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-card">
                    <th className="px-4 py-3 text-left font-medium">Builder</th>
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
                    <td className="px-4 py-3 text-text-secondary">$15K-40K</td>
                    <td className="px-4 py-3 text-text-secondary">Complete solutions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">🥈 PickleballMax</td>
                    <td className="px-4 py-3 text-text-secondary">Pickleball-only</td>
                    <td className="px-4 py-3 text-text-secondary">Multi-state</td>
                    <td className="px-4 py-3 text-text-secondary">$18K-45K</td>
                    <td className="px-4 py-3 text-text-secondary">Pickleball specialists</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">🥉 USA Pickleball Courts</td>
                    <td className="px-4 py-3 text-text-secondary">Tournament-grade</td>
                    <td className="px-4 py-3 text-text-secondary">Select regions</td>
                    <td className="px-4 py-3 text-text-secondary">$20K-50K</td>
                    <td className="px-4 py-3 text-text-secondary">Competition courts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Sport Court</td>
                    <td className="px-4 py-3 text-text-secondary">Modular tiles</td>
                    <td className="px-4 py-3 text-text-secondary">Nationwide</td>
                    <td className="px-4 py-3 text-text-secondary">$20K-45K</td>
                    <td className="px-4 py-3 text-text-secondary">Premium comfort</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Total Pickleball</td>
                    <td className="px-4 py-3 text-text-secondary">Regional service</td>
                    <td className="px-4 py-3 text-text-secondary">Southwest US</td>
                    <td className="px-4 py-3 text-text-secondary">$16K-35K</td>
                    <td className="px-4 py-3 text-text-secondary">Local expertise</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Reviews */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Detailed Builder Reviews</h2>

            {/* Best Sports Surfaces */}
            <div className="mb-8 rounded-xl border border-neon/20 bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🥇</span>
                <h3 className="text-xl font-bold text-neon">Best Sports Surfaces — Market Leader</h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Best Sports Surfaces leads the pickleball court construction industry with their comprehensive network of verified contractors who understand the sport's unique requirements. From residential backyard courts to multi-court complexes, they connect customers with specialists experienced in pickleball-specific installations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Nationwide network of pickleball specialists</li>
                    <li>• All surface types: acrylic, modular, concrete</li>
                    <li>• Free pickleball court designer tool</li>
                    <li>• Transparent cost estimation system</li>
                    <li>• Understanding of noise mitigation</li>
                    <li>• Multi-court complex experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Quality varies by local contractor</li>
                    <li>• Not exclusively pickleball-focused</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Coverage:</strong> All 50 states</span>
                  <span><strong>Specialties:</strong> All surface types, multi-court</span>
                  <span><strong>Pricing:</strong> $15,000 - $40,000</span>
                </div>
              </div>
            </div>

            {/* PickleballMax */}
            <div className="mb-8 rounded-xl border border-border bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🥈</span>
                <h3 className="text-xl font-bold">PickleballMax — Pure Pickleball Focus</h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                PickleballMax specializes exclusively in pickleball court construction and accessories. Their deep understanding of the sport's growth, player preferences, and technical requirements makes them a strong choice for serious pickleball enthusiasts and facilities.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• 100% pickleball specialization</li>
                    <li>• Deep sport-specific expertise</li>
                    <li>• Strong community connections</li>
                    <li>• Comprehensive court accessories</li>
                    <li>• Tournament experience</li>
                    <li>• Acoustic optimization knowledge</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Limited geographic coverage</li>
                    <li>• Higher pricing due to specialization</li>
                    <li>• May have waiting lists during peak season</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Coverage:</strong> Multi-state (expanding)</span>
                  <span><strong>Specialties:</strong> Pickleball-only construction</span>
                  <span><strong>Pricing:</strong> $18,000 - $45,000</span>
                </div>
              </div>
            </div>

            {/* USA Pickleball Courts */}
            <div className="mb-8 rounded-xl border border-border bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🥉</span>
                <h3 className="text-xl font-bold">USA Pickleball Courts — Tournament Quality</h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                USA Pickleball Courts focuses on high-end installations that meet tournament standards. They work with clubs, municipalities, and serious players who want competition-grade courts with precise specifications and premium materials.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Tournament-grade construction</li>
                    <li>• Premium material selection</li>
                    <li>• Precise specification adherence</li>
                    <li>• Commercial facility experience</li>
                    <li>• Professional lighting design</li>
                    <li>• Comprehensive project management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Higher cost tier</li>
                    <li>• Limited to select regions</li>
                    <li>• Minimum project size requirements</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Coverage:</strong> Select regions</span>
                  <span><strong>Specialties:</strong> Competition-grade courts</span>
                  <span><strong>Pricing:</strong> $20,000 - $50,000</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pickleball Court Specifications */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Pickleball Court Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3 text-text-primary">Standard Court Dimensions</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><strong>Playing area:</strong> 20' × 44'</li>
                  <li><strong>Recommended total space:</strong> 30' × 60'</li>
                  <li><strong>Minimum total space:</strong> 24' × 54'</li>
                  <li><strong>Net height:</strong> 36" at ends, 34" at center</li>
                  <li><strong>Non-volley zone:</strong> 7' from net on each side</li>
                  <li><strong>Service area depth:</strong> 15' from baseline</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3 text-text-primary">Surface Requirements</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><strong>Slope:</strong> Maximum 1% grade for drainage</li>
                  <li><strong>Surface texture:</strong> Consistent, non-slip finish</li>
                  <li><strong>Color:</strong> Typically blue or green with contrasting lines</li>
                  <li><strong>Line width:</strong> 2" wide, white or yellow</li>
                  <li><strong>Border space:</strong> 10' recommended beyond court</li>
                  <li><strong>Acoustic considerations:</strong> Sound dampening materials</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-surface-card p-6">
              <h3 className="text-lg font-bold mb-3 text-text-primary">Important Planning Considerations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Location & Orientation</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• North-south orientation preferred</li>
                    <li>• Avoid morning/evening sun glare</li>
                    <li>• Consider wind patterns</li>
                    <li>• Account for nearby structures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Noise & Neighbor Relations</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Discuss with neighbors beforehand</li>
                    <li>• Consider sound barriers/fencing</li>
                    <li>• Review local noise ordinances</li>
                    <li>• Plan for reasonable play hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Surface Options */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Pickleball Court Surface Options</h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3 text-text-primary">Acrylic Hard Court Surface</h3>
                <p className="text-text-secondary mb-4">
                  The most popular pickleball court surface, featuring textured acrylic coatings over concrete or asphalt. 
                  Provides excellent ball response and consistent play while offering good traction and durability.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Advantages</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Consistent ball bounce</li>
                      <li>• Good traction and safety</li>
                      <li>• Weather resistant</li>
                      <li>• Multiple color options</li>
                      <li>• Tournament-approved surface</li>
                      <li>• Moderate cost</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Considerations</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Can be hard on joints</li>
                      <li>• Gets hot in direct sun</li>
                      <li>• Requires periodic maintenance</li>
                      <li>• May crack in extreme weather</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-surface rounded border">
                  <p className="text-sm"><strong>Cost Range:</strong> $18,000 - $30,000 for full court installation</p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3 text-text-primary">Modular Tile Systems</h3>
                <p className="text-text-secondary mb-4">
                  Interlocking polypropylene tiles that create a cushioned playing surface. Popular brands include Sport Court, 
                  VersaCourt, and SnapSports, each offering unique performance characteristics.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Advantages</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Excellent shock absorption</li>
                      <li>• Joint-friendly playing surface</li>
                      <li>• Quick installation process</li>
                      <li>• Easy maintenance and cleaning</li>
                      <li>• Individual tile replacement possible</li>
                      <li>• Consistent performance year-round</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Considerations</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Higher upfront cost</li>
                      <li>• Slightly different ball response</li>
                      <li>• May require periodic tile adjustment</li>
                      <li>• Limited color combinations</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-surface rounded border">
                  <p className="text-sm"><strong>Cost Range:</strong> $20,000 - $40,000 for full court installation</p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3 text-text-primary">Concrete Surface</h3>
                <p className="text-text-secondary mb-4">
                  Basic concrete finish with painted lines offers the most budget-friendly option. While not ideal for serious play, 
                  it provides a functional court for recreational use and can be upgraded later with acrylic coatings.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Advantages</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Lowest initial cost</li>
                      <li>• Durable base material</li>
                      <li>• Can be upgraded later</li>
                      <li>• Simple maintenance</li>
                      <li>• Wide contractor availability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Considerations</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Hard surface, tough on joints</li>
                      <li>• Basic playing experience</li>
                      <li>• Limited traction when wet</li>
                      <li>• Paint lines wear over time</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-surface rounded border">
                  <p className="text-sm"><strong>Cost Range:</strong> $15,000 - $25,000 for full court installation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Pickleball Court Installation Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Site Assessment & Planning</h3>
                  <p className="text-text-secondary text-sm">
                    Evaluation of space requirements, drainage, utilities, and local regulations. Pickleball courts require less space than tennis courts but still need proper planning for optimal placement and neighborhood consideration.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Permits & Excavation</h3>
                  <p className="text-text-secondary text-sm">
                    Obtaining necessary building permits and excavating to proper depth with consideration for base materials and drainage systems specific to the smaller court footprint.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Base Preparation</h3>
                  <p className="text-text-secondary text-sm">
                    Installing and compacting aggregate base with precise grading for drainage. The smaller court size allows for more detailed attention to surface smoothness and consistency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Surface Installation</h3>
                  <p className="text-text-secondary text-sm">
                    Applying chosen surface material (concrete, asphalt base for coatings, or preparing for modular tiles) with attention to the specific requirements of pickleball play.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="font-semibold mb-1">Lines, Net & Accessories</h3>
                  <p className="text-text-secondary text-sm">
                    Applying official pickleball court lines with proper dimensions, installing net system with regulation height (36" at posts, 34" at center), and adding any requested accessories.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Breakdown */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Pickleball Court Cost Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-border mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-card">
                    <th className="px-4 py-3 text-left font-medium">Component</th>
                    <th className="px-4 py-3 text-left font-medium">Basic Court</th>
                    <th className="px-4 py-3 text-left font-medium">Acrylic Surface</th>
                    <th className="px-4 py-3 text-left font-medium">Modular Tiles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium">Site preparation</td>
                    <td className="px-4 py-3 text-text-secondary">$3,000 - $6,000</td>
                    <td className="px-4 py-3 text-text-secondary">$3,000 - $6,000</td>
                    <td className="px-4 py-3 text-text-secondary">$3,000 - $6,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Base construction</td>
                    <td className="px-4 py-3 text-text-secondary">$8,000 - $12,000</td>
                    <td className="px-4 py-3 text-text-secondary">$8,000 - $12,000</td>
                    <td className="px-4 py-3 text-text-secondary">$6,000 - $10,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Surface material</td>
                    <td className="px-4 py-3 text-text-secondary">$2,000 - $4,000</td>
                    <td className="px-4 py-3 text-text-secondary">$4,000 - $8,000</td>
                    <td className="px-4 py-3 text-text-secondary">$8,000 - $15,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Net system</td>
                    <td className="px-4 py-3 text-text-secondary">$400 - $800</td>
                    <td className="px-4 py-3 text-text-secondary">$400 - $800</td>
                    <td className="px-4 py-3 text-text-secondary">$400 - $800</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Lines & finishing</td>
                    <td className="px-4 py-3 text-text-secondary">$500 - $1,000</td>
                    <td className="px-4 py-3 text-text-secondary">$1,000 - $2,000</td>
                    <td className="px-4 py-3 text-text-secondary">$500 - $1,000</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="px-4 py-3">Total Range</td>
                    <td className="px-4 py-3 text-text-primary">$14,000 - $24,000</td>
                    <td className="px-4 py-3 text-text-primary">$17,000 - $29,000</td>
                    <td className="px-4 py-3 text-text-primary">$18,000 - $33,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3">Additional Costs to Consider</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><strong>Fencing:</strong> $8 - $25 per linear foot</li>
                  <li><strong>Lighting:</strong> $3,000 - $8,000 for basic LED system</li>
                  <li><strong>Windscreens:</strong> $300 - $800</li>
                  <li><strong>Court accessories:</strong> $200 - $1,000</li>
                  <li><strong>Landscaping:</strong> $1,000 - $5,000</li>
                  <li><strong>Permits:</strong> $200 - $1,500</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3">Money-Saving Tips</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Get multiple quotes from qualified contractors</li>
                  <li>• Consider off-season construction timing</li>
                  <li>• Plan for future upgrades (start basic, upgrade surface later)</li>
                  <li>• Bundle with neighboring projects</li>
                  <li>• Research local rebates or HOA programs</li>
                  <li>• Choose standard colors to reduce costs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">How much does a pickleball court cost to build?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Pickleball court construction costs range from $15,000-$40,000 depending on surface type and features. 
                  Concrete courts cost $15,000-$25,000, acrylic surfaces $18,000-$30,000, and modular tile systems $20,000-$40,000.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">What size is a pickleball court?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  A pickleball court measures 20 feet wide by 44 feet long for the playing area, with recommended total space of 30 feet by 60 feet including out-of-bounds areas. 
                  This is significantly smaller than tennis courts.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">What is the best surface for a pickleball court?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Acrylic surfaces over concrete or asphalt provide the best playing experience with consistent bounce and good traction. 
                  Modular tile systems offer excellent shock absorption, while concrete is the most budget-friendly option.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">Can I build a pickleball court in my backyard?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Yes, pickleball courts fit in many backyards due to their compact size (30' x 60' recommended). 
                  Check local zoning laws, setback requirements, and HOA rules before construction. Consider noise impact on neighbors.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="rounded-xl border border-neon/20 bg-neon/5 p-6">
            <h2 className="text-xl font-bold mb-4">Ready to Build Your Pickleball Court?</h2>
            <p className="text-text-secondary mb-6">
              Connect with verified pickleball court builders in your area. Get expert guidance, compare options, and start your project with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/search?sport=pickleball" 
                className="inline-flex items-center justify-center px-6 py-3 bg-neon text-surface hover:bg-neon/90 transition-colors rounded-lg font-medium"
              >
                Find Pickleball Court Builders
              </Link>
              <Link 
                href="/court-designer?sport=pickleball" 
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