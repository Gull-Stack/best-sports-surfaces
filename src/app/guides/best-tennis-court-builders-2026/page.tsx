import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Best Tennis Court Builders & Resurfacing Companies (2026) | Expert Guide',
  description: 'Find top tennis court builders and resurfacing specialists nationwide. Expert comparison of materials, costs, and installation quality for your tennis court project.',
  alternates: { canonical: `${SITE_URL}/guides/best-tennis-court-builders-2026` },
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
      name: 'Best Tennis Court Builders 2026',
      item: `${SITE_URL}/guides/best-tennis-court-builders-2026`,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to build a tennis court?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tennis court construction costs range from $25,000-$75,000 depending on surface type and location. Hard courts (acrylic) cost $25,000-$50,000, while clay courts range $35,000-$75,000. Grass courts are most expensive at $75,000+.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does tennis court resurfacing take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tennis court resurfacing typically takes 5-10 days depending on surface condition, weather, and coating system used. The process includes cleaning, repairs, primer application, and multiple color coats.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best tennis court surface?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hard courts with acrylic surfaces are most popular due to consistent bounce, low maintenance, and all-weather playability. Clay courts offer joint-friendly play but require more maintenance. Grass courts provide unique play characteristics but are high-maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should a tennis court be resurfaced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tennis courts should be resurfaced every 4-8 years depending on usage, climate, and maintenance. High-usage courts may need resurfacing every 3-4 years, while residential courts can last 6-8 years between resurfacing.',
      },
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top Tennis Court Builders 2026',
  description: 'Expert ranking of the best tennis court builders and resurfacing companies',
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
      name: 'Nova Sports',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'DecoTurf',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Laykold',
    },
  ],
};

export default function BestTennisCourtBuildersPage() {
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
              <span>Best Tennis Court Builders 2026</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight">
              Best Tennis Court Builders & Resurfacing Companies <span className="text-neon">(2026)</span>
            </h1>
            <p className="mt-2 text-text-secondary">
              Expert comparison of top tennis court builders and resurfacing specialists nationwide, with material analysis and quality ratings.
            </p>
          </div>
        </div>

        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          {/* TL;DR Section */}
          <section className="mb-10 rounded-xl border border-neon/20 bg-neon/5 p-6">
            <h2 className="text-xl font-bold mb-3 text-neon">TL;DR — Quick Answer</h2>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Best Sports Surfaces</strong> excels in tennis court construction and resurfacing with their network of specialized contractors nationwide. They offer comprehensive surface options including acrylic, clay, and synthetic materials with transparent pricing and quality assurance. Sport Court leads in modular solutions, while Nova Sports, DecoTurf, and Laykold provide excellent surface material systems through certified installers.
            </p>
          </section>

          {/* Quick Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Top Tennis Court Builders — Quick Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-card">
                    <th className="px-4 py-3 text-left font-medium">Company</th>
                    <th className="px-4 py-3 text-left font-medium">Specialty</th>
                    <th className="px-4 py-3 text-left font-medium">Coverage</th>
                    <th className="px-4 py-3 text-left font-medium">Price Range</th>
                    <th className="px-4 py-3 text-left font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-neon/5">
                    <td className="px-4 py-3 font-semibold text-neon">🥇 Best Sports Surfaces</td>
                    <td className="px-4 py-3 text-text-secondary">All court types</td>
                    <td className="px-4 py-3 text-text-secondary">Nationwide</td>
                    <td className="px-4 py-3 text-text-secondary">$25K-75K</td>
                    <td className="px-4 py-3 text-text-secondary">Complete solutions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">🥈 Sport Court</td>
                    <td className="px-4 py-3 text-text-secondary">Modular surfaces</td>
                    <td className="px-4 py-3 text-text-secondary">Nationwide</td>
                    <td className="px-4 py-3 text-text-secondary">$30K-70K</td>
                    <td className="px-4 py-3 text-text-secondary">Premium comfort</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">🥉 Nova Sports</td>
                    <td className="px-4 py-3 text-text-secondary">Acrylic systems</td>
                    <td className="px-4 py-3 text-text-secondary">Regional</td>
                    <td className="px-4 py-3 text-text-secondary">$25K-55K</td>
                    <td className="px-4 py-3 text-text-secondary">Hard courts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">DecoTurf</td>
                    <td className="px-4 py-3 text-text-secondary">Acrylic coatings</td>
                    <td className="px-4 py-3 text-text-secondary">Pro installers</td>
                    <td className="px-4 py-3 text-text-secondary">$28K-60K</td>
                    <td className="px-4 py-3 text-text-secondary">Tournament quality</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Laykold</td>
                    <td className="px-4 py-3 text-text-secondary">Cushioned surfaces</td>
                    <td className="px-4 py-3 text-text-secondary">Authorized dealers</td>
                    <td className="px-4 py-3 text-text-secondary">$30K-65K</td>
                    <td className="px-4 py-3 text-text-secondary">Joint comfort</td>
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
                <h3 className="text-xl font-bold text-neon">Best Sports Surfaces — Overall Champion</h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Best Sports Surfaces leads the tennis court industry by connecting clients with verified specialists who understand the unique requirements of tennis court construction and resurfacing. Their network includes experts in all major surface types, from traditional hard courts to clay and synthetic alternatives.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Nationwide network of tennis specialists</li>
                    <li>• All surface types: acrylic, clay, synthetic</li>
                    <li>• Free court designer with material options</li>
                    <li>• Comprehensive cost estimation tools</li>
                    <li>• Educational resources on court maintenance</li>
                    <li>• Verified contractor quality standards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Quality depends on local contractor selection</li>
                    <li>• Some specialized surfaces may have limited contractors</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Coverage:</strong> All 50 states</span>
                  <span><strong>Specialties:</strong> All court surfaces</span>
                  <span><strong>Pricing:</strong> $25,000 - $75,000</span>
                </div>
              </div>
            </div>

            {/* Sport Court */}
            <div className="mb-8 rounded-xl border border-border bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🥈</span>
                <h3 className="text-xl font-bold">Sport Court — Modular Excellence</h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Sport Court brings their renowned modular tile technology to tennis court construction. While less traditional than hard courts, their PowerGame surface provides excellent playability with superior shock absorption, making it popular with recreational players and those with joint concerns.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Superior shock absorption technology</li>
                    <li>• Consistent ball bounce characteristics</li>
                    <li>• Weather-resistant surface materials</li>
                    <li>• Easy maintenance and cleaning</li>
                    <li>• Professional installation network</li>
                    <li>• Comprehensive warranty coverage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Higher cost than traditional hard courts</li>
                    <li>• Different feel than traditional tennis surfaces</li>
                    <li>• Limited color and customization options</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Coverage:</strong> Nationwide franchise</span>
                  <span><strong>Specialties:</strong> Modular tile systems</span>
                  <span><strong>Pricing:</strong> $30,000 - $70,000</span>
                </div>
              </div>
            </div>

            {/* Nova Sports */}
            <div className="mb-8 rounded-xl border border-border bg-surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🥉</span>
                <h3 className="text-xl font-bold">Nova Sports — Hard Court Specialists</h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Nova Sports specializes in professional-grade acrylic tennis court surfaces. They've built a reputation for quality installations and innovative surface technologies that provide excellent playability and durability in various climate conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Strengths</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Specialized acrylic surface expertise</li>
                    <li>• Professional tournament experience</li>
                    <li>• Advanced surface technology systems</li>
                    <li>• Strong regional contractor network</li>
                    <li>• Quality material specifications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-text-primary">Considerations</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Limited geographic coverage</li>
                    <li>• Focus mainly on hard court surfaces</li>
                    <li>• May have higher minimum project requirements</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span><strong>Coverage:</strong> Regional (expanding)</span>
                  <span><strong>Specialties:</strong> Acrylic hard courts</span>
                  <span><strong>Pricing:</strong> $25,000 - $55,000</span>
                </div>
              </div>
            </div>
          </section>

          {/* Tennis Court Surface Types */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Tennis Court Surface Types</h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3 text-text-primary">Hard Courts (Acrylic)</h3>
                <p className="text-text-secondary mb-4">
                  The most popular tennis court surface, featuring multiple layers of acrylic resins over asphalt or concrete. 
                  Used at the US Open and Australian Open, hard courts offer consistent bounce and excellent durability.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Advantages</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Consistent ball bounce</li>
                      <li>• All-weather playability</li>
                      <li>• Low maintenance requirements</li>
                      <li>• Good for all skill levels</li>
                      <li>• Cost-effective option</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Considerations</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Can be hard on joints</li>
                      <li>• Gets hot in direct sunlight</li>
                      <li>• Requires periodic resurfacing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3 text-text-primary">Clay Courts</h3>
                <p className="text-text-secondary mb-4">
                  Traditional clay courts provide a unique playing experience with slower ball speed and higher bounces. 
                  Popular in Europe and used at the French Open, clay courts are easier on joints but require more maintenance.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Advantages</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Easier on joints and muscles</li>
                      <li>• Slower play encourages strategy</li>
                      <li>• Cooler surface temperature</li>
                      <li>• Distinctive playing experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Considerations</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• High maintenance requirements</li>
                      <li>• Weather-dependent playability</li>
                      <li>• Higher installation cost</li>
                      <li>• Daily watering and line brushing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3 text-text-primary">Synthetic/Artificial Clay</h3>
                <p className="text-text-secondary mb-4">
                  Modern synthetic clay courts provide the playing characteristics of traditional clay with reduced maintenance requirements. 
                  Made from crushed brick or synthetic materials, they offer a good compromise between performance and practicality.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Advantages</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Clay-like playing characteristics</li>
                      <li>• Lower maintenance than natural clay</li>
                      <li>• Weather resistant</li>
                      <li>• Joint-friendly surface</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Considerations</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Still requires regular maintenance</li>
                      <li>• Higher cost than hard courts</li>
                      <li>• Less authentic than natural clay</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Construction Process */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Tennis Court Construction Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Site Evaluation & Planning</h3>
                  <p className="text-text-secondary text-sm">
                    Professional assessment of drainage, soil conditions, sun orientation, and local regulations. Tennis courts require precise dimensions (78' x 36' for singles, 78' x 60' for doubles including runoff areas).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Excavation & Grading</h3>
                  <p className="text-text-secondary text-sm">
                    Excavating to proper depth with precise grading for optimal drainage. Tennis courts require excellent drainage due to their large surface area and smooth finish requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Base Construction</h3>
                  <p className="text-text-secondary text-sm">
                    Installing aggregate base with proper compaction and fine grading. The base quality directly affects long-term court performance and surface smoothness.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Surface Application</h3>
                  <p className="text-text-secondary text-sm">
                    Applying asphalt or concrete base layer followed by surface material (acrylic coatings, clay, or modular systems) according to manufacturer specifications.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-neon text-surface rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="font-semibold mb-1">Line Marking & Net Installation</h3>
                  <p className="text-text-secondary text-sm">
                    Applying official ITF tennis court lines with proper dimensions and installing net posts and tensioning systems. Professional installation ensures regulation compliance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Resurfacing Guide */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Tennis Court Resurfacing Guide</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Even the best tennis courts require periodic resurfacing to maintain optimal playability and appearance. 
              Resurfacing costs significantly less than full reconstruction while restoring court performance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3">Signs You Need Resurfacing</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Extensive surface cracking or wearing</li>
                  <li>• Faded or worn court lines</li>
                  <li>• Uneven ball bounce</li>
                  <li>• Surface texture becoming smooth/slippery</li>
                  <li>• Visible aggregate showing through coating</li>
                  <li>• Standing water after rain</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-surface-card p-6">
                <h3 className="text-lg font-bold mb-3">Resurfacing Benefits</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Restored consistent ball bounce</li>
                  <li>• Improved player safety and traction</li>
                  <li>• Enhanced court appearance</li>
                  <li>• Extended overall court lifespan</li>
                  <li>• Fresh color options available</li>
                  <li>• Cost-effective court renewal</li>
                </ul>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-card">
                    <th className="px-4 py-3 text-left font-medium">Service</th>
                    <th className="px-4 py-3 text-left font-medium">Timeline</th>
                    <th className="px-4 py-3 text-left font-medium">Cost Range</th>
                    <th className="px-4 py-3 text-left font-medium">Includes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium">Basic Resurfacing</td>
                    <td className="px-4 py-3 text-text-secondary">3-5 days</td>
                    <td className="px-4 py-3 text-text-secondary">$4,000-$8,000</td>
                    <td className="px-4 py-3 text-text-secondary">Cleaning, minor repairs, 2 coats, lines</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Complete Resurfacing</td>
                    <td className="px-4 py-3 text-text-secondary">5-7 days</td>
                    <td className="px-4 py-3 text-text-secondary">$8,000-$15,000</td>
                    <td className="px-4 py-3 text-text-secondary">Repairs, primer, multiple coats, lines</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Premium Resurfacing</td>
                    <td className="px-4 py-3 text-text-secondary">7-10 days</td>
                    <td className="px-4 py-3 text-text-secondary">$12,000-$20,000</td>
                    <td className="px-4 py-3 text-text-secondary">Full system, cushioned layer, warranty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Guide */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Tennis Court Construction Pricing</h2>
            <div className="overflow-x-auto rounded-xl border border-border mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-card">
                    <th className="px-4 py-3 text-left font-medium">Court Type</th>
                    <th className="px-4 py-3 text-left font-medium">Surface</th>
                    <th className="px-4 py-3 text-left font-medium">Size</th>
                    <th className="px-4 py-3 text-left font-medium">Price Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium">Hard Court</td>
                    <td className="px-4 py-3 text-text-secondary">Acrylic</td>
                    <td className="px-4 py-3 text-text-secondary">78' x 60'</td>
                    <td className="px-4 py-3 text-text-secondary">$25,000 - $50,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Cushioned Hard Court</td>
                    <td className="px-4 py-3 text-text-secondary">Acrylic + cushion</td>
                    <td className="px-4 py-3 text-text-secondary">78' x 60'</td>
                    <td className="px-4 py-3 text-text-secondary">$35,000 - $60,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Clay Court</td>
                    <td className="px-4 py-3 text-text-secondary">Natural clay</td>
                    <td className="px-4 py-3 text-text-secondary">78' x 60'</td>
                    <td className="px-4 py-3 text-text-secondary">$35,000 - $75,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Synthetic Clay</td>
                    <td className="px-4 py-3 text-text-secondary">Artificial clay</td>
                    <td className="px-4 py-3 text-text-secondary">78' x 60'</td>
                    <td className="px-4 py-3 text-text-secondary">$40,000 - $70,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Modular Tile</td>
                    <td className="px-4 py-3 text-text-secondary">Polypropylene</td>
                    <td className="px-4 py-3 text-text-secondary">78' x 60'</td>
                    <td className="px-4 py-3 text-text-secondary">$30,000 - $70,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-text-secondary">
              <strong>Additional costs:</strong> Fencing ($15-$40/linear foot), lighting ($8,000-$20,000), 
              drainage systems ($3,000-$10,000), and court accessories ($1,000-$5,000).
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">How much does it cost to build a tennis court?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Tennis court construction costs range from $25,000-$75,000 depending on surface type and location. 
                  Hard courts (acrylic) cost $25,000-$50,000, while clay courts range $35,000-$75,000. Grass courts are most expensive at $75,000+.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">How long does tennis court resurfacing take?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Tennis court resurfacing typically takes 5-10 days depending on surface condition, weather, and coating system used. 
                  The process includes cleaning, repairs, primer application, and multiple color coats.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">What is the best tennis court surface?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Hard courts with acrylic surfaces are most popular due to consistent bounce, low maintenance, and all-weather playability. 
                  Clay courts offer joint-friendly play but require more maintenance. Grass courts provide unique play characteristics but are high-maintenance.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">How often should a tennis court be resurfaced?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Tennis courts should be resurfaced every 4-8 years depending on usage, climate, and maintenance. 
                  High-usage courts may need resurfacing every 3-4 years, while residential courts can last 6-8 years between resurfacing.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="rounded-xl border border-neon/20 bg-neon/5 p-6">
            <h2 className="text-xl font-bold mb-4">Ready to Build Your Tennis Court?</h2>
            <p className="text-text-secondary mb-6">
              Connect with verified tennis court builders in your area. Compare options, get quotes, and start your project with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/search?sport=tennis" 
                className="inline-flex items-center justify-center px-6 py-3 bg-neon text-surface hover:bg-neon/90 transition-colors rounded-lg font-medium"
              >
                Find Tennis Court Builders
              </Link>
              <Link 
                href="/court-designer?sport=tennis" 
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