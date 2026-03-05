import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';


import CourtDesignerEmbed from '@/components/tools/CourtDesignerEmbed';

export const metadata: Metadata = {
  title: 'Tennis Court Designer & Cost Estimator | Build Your Perfect Court',
  description: 'Design your custom tennis court with our free interactive tool. Choose surface colors, dimensions, and get instant cost estimates for residential or commercial courts.',
  alternates: { canonical: `${SITE_URL}/tennis-court-designer` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to build a tennis court?', acceptedAnswer: { '@type': 'Answer', text: 'A residential tennis court costs between $25,000 and $60,000+ for new construction with an acrylic hard court surface. Resurfacing an existing court runs $4,000-12,000. Clay and grass courts cost significantly more to build and maintain.' } },
    { '@type': 'Question', name: 'What are the dimensions of a tennis court?', acceptedAnswer: { '@type': 'Answer', text: 'A standard tennis court playing area is 36 feet wide (doubles) by 78 feet long. With recommended run-off space, the total footprint is approximately 60 by 120 feet.' } },
    { '@type': 'Question', name: 'What is the best surface for a residential tennis court?', acceptedAnswer: { '@type': 'Answer', text: 'Acrylic hard court surfaces are the best choice for most residential courts. They offer consistent ball bounce, low maintenance, and last 8-15 years between recoats. They can also be resurfaced rather than replaced.' } },
    { '@type': 'Question', name: 'How long does a tennis court last?', acceptedAnswer: { '@type': 'Answer', text: 'A well-built tennis court with a concrete base can last 25-30 years or more. The acrylic surface coating needs reapplication every 5-8 years, which is significantly cheaper than rebuilding.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Court Designer', item: `${SITE_URL}/court-designer` },
    { '@type': 'ListItem', position: 3, name: 'Tennis Court Designer', item: `${SITE_URL}/tennis-court-designer` },
  ],
};

export default function TennisCourtDesignerPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-neon">Tennis Court Designer</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Design Your Custom <span className="text-neon">Tennis Court</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Visualize your dream tennis court with our free interactive designer. Choose surface colors, see regulation dimensions, and get instant cost estimates for your residential or commercial project.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 prose prose-invert max-w-none">
            <img src="/images/tennis-court-1.jpg" alt="Professional tennis court with blue acrylic surface and white lines" loading="lazy" className="w-full rounded-xl mb-8" />

            <h2 className="text-2xl font-bold text-text-primary">What Goes Into Building a Tennis Court</h2>
            <p className="text-text-secondary leading-relaxed">
              A tennis court is one of the most significant backyard investments you can make — and one of the most rewarding. A properly built court becomes a multi-generational asset that adds value to your property and provides decades of competitive play. But tennis courts are more complex than they appear, and cutting corners during construction leads to expensive problems down the road.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The construction process begins with <strong className="text-text-primary">excavation and grading</strong>. Tennis courts demand exceptional flatness — the surface must be level to within 1/8 inch over 10 feet in any direction. This is far more precise than a standard concrete pour, which is why general contractors often struggle with tennis court projects. The site must be graded to allow drainage (typically a 1% slope from side to side) while maintaining this level of precision.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">base layer</strong> is where tennis courts differ most from other sport surfaces. The standard approach is a 4-inch reinforced concrete slab over a 4-6 inch compacted stone base. However, many premium courts use <strong className="text-text-primary">post-tensioned concrete</strong>, where high-tension steel cables are embedded in the slab and tightened after curing. This prevents cracking — the number one maintenance issue with tennis courts — and can extend the base life to 30+ years.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Drainage</strong> is the single most critical factor that most homeowners overlook. Standing water destroys court surfaces, encourages algae growth, and makes the court unplayable. Your contractor should install a perimeter drainage system and ensure the sub-base allows water to flow away from the court quickly. Courts in high-rainfall areas may need additional French drains or a retention system.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">surface coating</strong> goes on last — typically 3-5 layers of acrylic sport coating over a base coat. Each layer serves a purpose: the base coat fills imperfections and creates adhesion, the color coats provide the playing surface with appropriate texture, and the line paint marks regulation boundaries. The entire coating system is typically 1/16 to 1/8 inch thick and must be applied in specific temperature and humidity conditions.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Surface Types: Which One Is Right for You?</h2>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Hard court (acrylic)</strong> is the most popular surface worldwide and the best choice for most residential installations. It offers consistent ball bounce, good traction, and relatively low maintenance. The US Open uses a hard court surface, as do the majority of public and private courts in America. Acrylic surfaces can be applied in virtually any color combination — our designer tool above lets you experiment with 30+ Acrytech colors.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Clay courts</strong> (Har-Tru in the US) offer a slower game with higher bounce. They are easier on joints and produce the classic "slide" that many players love. However, they require significantly more maintenance — daily watering, rolling, and line sweeping — and cost more to install. Annual maintenance runs $2,000-4,000, compared to near-zero for hard courts.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Grass courts</strong> are the rarest and most expensive option, primarily found at elite private clubs. They require professional groundskeeping, specific grass varieties, and constant care. Unless you are committed to the aesthetics and tradition of grass court tennis, this is not a practical residential option.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Cushioned hard courts</strong> are a premium variation that adds rubber underlayers beneath the acrylic surface, reducing impact on joints by up to 30%. This is popular for facilities serving older players or those recovering from injuries. The added cushioning increases cost by 15-25% but extends playability for aging athletes.
            </p>

            <img src="/images/tennis-court-2.jpg" alt="Tennis player serving on a hard court" loading="lazy" className="w-full rounded-xl my-8" />

            <h2 className="text-2xl font-bold text-text-primary">Cost Breakdown for Tennis Courts</h2>
            <p className="text-text-secondary leading-relaxed">
              Tennis court costs reflect the precision and scale of the project. Here are realistic 2025-2026 ranges:
            </p>
            <ul className="text-text-secondary space-y-2">
              <li><strong className="text-text-primary">New hard court (concrete + acrylic):</strong> $25,000 - $60,000</li>
              <li><strong className="text-text-primary">Post-tensioned concrete base:</strong> Add $8,000 - $15,000</li>
              <li><strong className="text-text-primary">Resurface existing court:</strong> $4,000 - $12,000</li>
              <li><strong className="text-text-primary">Har-Tru clay court:</strong> $35,000 - $75,000</li>
              <li><strong className="text-text-primary">Net posts and net:</strong> $300 - $2,000</li>
              <li><strong className="text-text-primary">Perimeter fencing (10 ft chain link):</strong> $8,000 - $15,000</li>
              <li><strong className="text-text-primary">Court lighting (6-8 poles, LED):</strong> $12,000 - $25,000</li>
              <li><strong className="text-text-primary">Wind screens:</strong> $1,000 - $3,000</li>
            </ul>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Color Psychology: Why Court Color Matters</h2>
            <p className="text-text-secondary leading-relaxed">
              Court color is not just aesthetic — it affects playability. <strong className="text-text-primary">Blue playing surfaces</strong> have become the global standard because they provide the highest contrast with the yellow tennis ball, reducing eye fatigue during long matches. The US Open switched to blue in 2005 for this reason. <strong className="text-text-primary">Green surrounds</strong> are popular because they create a natural contrast frame while blending with landscaping.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Red and terracotta</strong> surfaces evoke the clay court tradition and work well in Mediterranean or desert landscapes. <strong className="text-text-primary">Lighter colors</strong> reflect more heat and stay cooler in hot climates — an important consideration in the southern US where surface temperatures can exceed 150 degrees on dark courts.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Maintenance and Longevity</h2>
            <p className="text-text-secondary leading-relaxed">
              A hard court surface needs recoating every 5-8 years at a cost of $4,000-8,000, which is dramatically less than rebuilding. Between recoats, maintenance is minimal: remove debris with a leaf blower, power wash annually, and fill any cracks promptly before they spread. Cracks left untreated are the number one cause of premature court failure, as water infiltrates the base and causes heaving in freeze-thaw regions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              A well-maintained court with a quality concrete base can last 25-30 years with 3-4 recoating cycles. The total lifecycle cost comes out to roughly $1,500-2,500 per year of use — significantly less than a club membership.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Why You Need a Tennis Court Specialist</h2>
            <p className="text-text-secondary leading-relaxed">
              Tennis court construction requires specialized knowledge that most general contractors do not have. The flatness tolerances, drainage engineering, coating chemistry, and line layout specifications are all unique to sports surfaces. A court built by an unqualified contractor will likely develop drainage problems, premature cracking, or uneven ball bounce — all of which are expensive to fix after the fact.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Look for contractors with specific tennis court experience, references from completed projects, and familiarity with the coating systems they use. Our contractor search connects you with verified specialists in your area.
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-surface-card p-6 sticky top-24">
              <h3 className="text-lg font-bold text-text-primary mb-4">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Court Size</dt>
                  <dd className="font-medium">36 x 78 ft (playing)</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Total Footprint</dt>
                  <dd className="font-medium">60 x 120 ft</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Cost Range</dt>
                  <dd className="font-medium text-neon">$25k - $60k+</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Build Time</dt>
                  <dd className="font-medium">3-6 weeks</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Surface Life</dt>
                  <dd className="font-medium">25-30 years (base)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">Best Surface</dt>
                  <dd className="font-medium">Acrylic hard court</dd>
                </div>
              </dl>
              <Link href="/search?sport=tennis" className="mt-6 block w-full rounded-lg bg-neon px-4 py-3 text-center font-semibold text-black hover:opacity-90 transition-opacity">
                Find Tennis Court Contractors
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Court Designer */}
      <div className="border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Design Your Tennis Court</h2>
          <p className="text-text-secondary mb-6">Experiment with colors, see dimensions, and estimate costs for your project.</p>
        </div>
        <CourtDesignerEmbed defaultSport="tennis" />
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Tennis Court?</h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-8">
          Connect with verified tennis court contractors who specialize in hard court, clay, and cushioned surface installations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/search?sport=tennis" className="rounded-xl bg-neon px-8 py-4 font-semibold text-black hover:opacity-90 transition-opacity">
            Find Contractors Near You
          </Link>
          <Link href="/contact" className="rounded-xl border border-border px-8 py-4 font-semibold text-text-primary hover:bg-surface-card transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
