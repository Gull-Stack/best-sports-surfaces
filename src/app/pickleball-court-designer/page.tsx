import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';


import CourtDesignerEmbed from '@/components/tools/CourtDesignerEmbed';

export const metadata: Metadata = {
  title: 'Pickleball Court Designer & Cost Estimator | Design Your Court',
  description: 'Design your custom pickleball court with our free interactive tool. Choose colors, get dimensions right, and estimate costs for your backyard or community court.',
  alternates: { canonical: `${SITE_URL}/pickleball-court-designer` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to build a pickleball court?', acceptedAnswer: { '@type': 'Answer', text: 'A residential pickleball court costs between $11,000 and $30,000 for new construction with an acrylic surface. Resurfacing an existing slab costs $3,000-7,000. Multi-court facilities for communities range from $40,000-120,000+.' } },
    { '@type': 'Question', name: 'What are the dimensions of a pickleball court?', acceptedAnswer: { '@type': 'Answer', text: 'The official playing area is 20 by 44 feet. With recommended run-off space, the total minimum footprint is 30 by 60 feet, though 34 by 64 feet is preferred for competitive play.' } },
    { '@type': 'Question', name: 'Can I convert a tennis court to pickleball?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single tennis court can fit up to 4 pickleball courts. You can add pickleball lines to an existing tennis court for dual use, or fully convert it. Conversion costs $2,000-8,000 depending on scope.' } },
    { '@type': 'Question', name: 'Are pickleball courts noisy?', acceptedAnswer: { '@type': 'Answer', text: 'Pickleball generates 10-15 decibels more noise than tennis due to the hard paddle and polymer ball. Sound mitigation options include acoustic fencing, sound barriers, quieter paddle technologies, and positioning courts away from bedrooms.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Court Designer', item: `${SITE_URL}/court-designer` },
    { '@type': 'ListItem', position: 3, name: 'Pickleball Court Designer', item: `${SITE_URL}/pickleball-court-designer` },
  ],
};

export default function PickleballCourtDesignerPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-neon">Pickleball Court Designer</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Design Your Custom <span className="text-neon">Pickleball Court</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Pickleball is the fastest-growing sport in America, and building your own court is more accessible than you think. Use our free designer to visualize your court, choose colors, and get an instant cost estimate.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 prose prose-invert max-w-none">
            <img src="/images/pickleball-court-1.jpg" alt="Pickleball court with players during a doubles match" loading="lazy" className="w-full rounded-xl mb-8" />

            <h2 className="text-2xl font-bold text-text-primary">Why Building a Pickleball Court Is a Smart Investment</h2>
            <p className="text-text-secondary leading-relaxed">
              Pickleball participation grew over 85% between 2021 and 2024, making it the fastest-growing sport in the United States for the third consecutive year. The Sport and Fitness Industry Association estimates over 48 million Americans now play pickleball at least once a year, with over 13 million playing regularly. This explosive growth has created enormous demand for courts — and long wait times at public facilities.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Building your own court eliminates the drive to the rec center, the wait for open court time, and the scheduling headaches. And because pickleball courts are significantly smaller than tennis courts — just 20 by 44 feet of playing area — they fit in most backyards and cost a fraction of what a tennis court does. A residential pickleball court is one of the most accessible major sport installations you can build at home.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">What Building a Pickleball Court Involves</h2>
            <p className="text-text-secondary leading-relaxed">
              The construction process mirrors other sport courts but at a smaller and more affordable scale. It starts with <strong className="text-text-primary">site preparation</strong> — clearing the area, ensuring proper grading for drainage, and compacting the sub-base. Unlike tennis courts, a single pickleball court fits in a space as small as 30 by 60 feet (including run-off), making it viable for most suburban properties.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">concrete base</strong> is typically 4 inches thick with wire mesh or fiber reinforcement, poured over a 4-inch compacted aggregate base. Control joints should be placed around the perimeter rather than through the playing surface. Some homeowners choose to resurface an existing patio, driveway, or tennis court rather than pouring new concrete — a decision that can save 40-60% of the total project cost.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">acrylic surface coating</strong> is applied in 3-5 layers, creating the colored, textured playing surface. Lines are then painted to mark the playing area, non-volley zone (the "kitchen" — the 7-foot zone on each side of the net where volleying is prohibited), and the service areas. The line layout is simpler than tennis or basketball, which keeps costs lower.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Finally, the <strong className="text-text-primary">net system</strong> is installed. Permanent in-ground posts are preferred for dedicated courts, while portable net systems work well for multi-use surfaces. Regulation net height is 36 inches at the sideline and 34 inches at the center.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Dimensions: Getting It Right</h2>
            <p className="text-text-secondary leading-relaxed">
              The official USAPA pickleball court measures <strong className="text-text-primary">20 feet wide by 44 feet long</strong> for the playing area. However, you need additional space around the court for safe play. The minimum recommended total area is 30 by 60 feet, but 34 by 64 feet is preferred for competitive play and tournament standards. This gives players adequate room to chase balls without running into fences or walls.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The court is divided into several zones: two 15-by-10-foot service areas on each side, and the 7-foot non-volley zone (kitchen) on each side of the net. These dimensions are non-negotiable for regulation play, but for casual backyard use, minor adjustments to the surround space are acceptable.
            </p>

            <img src="/images/pickleball-court-2.jpg" alt="Outdoor pickleball court surface with blue and green colors" loading="lazy" className="w-full rounded-xl my-8" />

            <h2 className="text-2xl font-bold text-text-primary">Cost Breakdown for Pickleball Courts</h2>
            <p className="text-text-secondary leading-relaxed">
              Pickleball courts are the most affordable major sport court to build. Here are realistic 2025-2026 costs:
            </p>
            <ul className="text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Single court (new concrete + acrylic):</strong> $11,000 - $30,000</li>
              <li><strong className="text-text-primary">Resurface existing slab:</strong> $3,000 - $7,000</li>
              <li><strong className="text-text-primary">Sport tile system:</strong> $5,000 - $12,000</li>
              <li><strong className="text-text-primary">Tennis-to-pickleball conversion (4 courts):</strong> $8,000 - $20,000</li>
              <li><strong className="text-text-primary">Multi-court facility (4 courts):</strong> $40,000 - $120,000</li>
              <li><strong className="text-text-primary">Permanent net system:</strong> $200 - $800</li>
              <li><strong className="text-text-primary">Lighting (2-4 poles):</strong> $6,000 - $12,000</li>
              <li><strong className="text-text-primary">Acoustic fencing:</strong> $5,000 - $15,000</li>
            </ul>

            <h2 className="text-2xl font-bold text-text-primary mt-10">The Noise Issue: What You Need to Know</h2>
            <p className="text-text-secondary leading-relaxed">
              Let us address the elephant in the room: pickleball is louder than most racquet sports. The combination of a hard composite paddle striking a polymer ball produces a distinctive "pop" that measures 10-15 decibels louder than a tennis ball being hit. In quiet residential neighborhoods, this has led to noise complaints and even lawsuits.
            </p>
            <p className="text-text-secondary leading-relaxed">
              If you are building a backyard court, <strong className="text-text-primary">sound mitigation should be part of your planning from day one</strong>. Options include: acoustic fencing or sound barrier walls ($5,000-15,000), positioning the court as far from neighboring bedrooms as possible, orienting the court so the long axis faces away from neighbors, using "quiet" paddle technologies, and establishing courtesy hours for play.
            </p>
            <p className="text-text-secondary leading-relaxed">
              For community and municipal facilities, acoustic engineering studies are increasingly required during the permitting process. Your contractor should be familiar with local noise ordinances and mitigation strategies.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Converting a Tennis Court to Pickleball</h2>
            <p className="text-text-secondary leading-relaxed">
              One of the most popular and cost-effective approaches is converting an existing tennis court. A single tennis court (60 by 120 feet) can accommodate up to <strong className="text-text-primary">four pickleball courts</strong> with proper line layout. Many facilities add pickleball lines to existing tennis courts for dual-use play, using different line colors to distinguish the two sports.
            </p>
            <p className="text-text-secondary leading-relaxed">
              A full conversion involves repainting lines, installing new net systems, and potentially resurfacing. A dual-line overlay on an existing court costs $2,000-4,000, while a full conversion with new surfaces and dedicated net posts runs $8,000-20,000.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Indoor vs. Outdoor Considerations</h2>
            <p className="text-text-secondary leading-relaxed">
              Indoor pickleball courts eliminate weather concerns and noise issues but cost significantly more due to building requirements. Converting warehouse or gym space typically runs $15,000-40,000 per court including flooring, lighting, and HVAC considerations. The tradeoff is year-round play regardless of climate — a major advantage in northern states.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Outdoor courts need weather-appropriate surfaces (acrylic coatings handle rain and UV well), drainage planning, and potentially windscreens in exposed locations. LED court lighting extends play into evening hours for roughly $6,000-12,000.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Maintenance and Longevity</h2>
            <p className="text-text-secondary leading-relaxed">
              Pickleball courts require minimal maintenance. Sweep or blow off debris regularly, power wash once or twice a year, and address cracks promptly. The acrylic surface should last 5-8 years between recoats, and the concrete base can last 25+ years with proper care. Total annual maintenance cost is typically under $500 for a residential court.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Finding the Right Contractor</h2>
            <p className="text-text-secondary leading-relaxed">
              While pickleball courts are simpler than tennis courts, they still require sports surface expertise. Proper slope, surface texture, and line accuracy all affect playability. A contractor who specializes in sport courts will ensure your court drains correctly, plays consistently, and meets regulation standards. Our search tool connects you with verified pickleball court contractors nationwide.
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-surface-card p-6 sticky top-24">
              <h3 className="text-lg font-bold text-text-primary mb-4">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Court Size</dt>
                  <dd className="font-medium">20 x 44 ft (playing)</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Total Footprint</dt>
                  <dd className="font-medium">34 x 64 ft</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Cost Range</dt>
                  <dd className="font-medium text-neon">$11k - $30k</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Build Time</dt>
                  <dd className="font-medium">1-3 weeks</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Kitchen Zone</dt>
                  <dd className="font-medium">7 ft each side</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Net Height</dt>
                  <dd className="font-medium">34 in (center)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">Tennis Conversion</dt>
                  <dd className="font-medium">Up to 4 courts</dd>
                </div>
              </dl>
              <Link href="/search?sport=pickleball" className="mt-6 block w-full rounded-lg bg-neon px-4 py-3 text-center font-semibold text-black hover:opacity-90 transition-opacity">
                Find Pickleball Court Contractors
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Court Designer */}
      <div className="border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Design Your Pickleball Court</h2>
          <p className="text-text-secondary mb-6">Choose colors, see the kitchen zone, and estimate costs for your project.</p>
        </div>
        <CourtDesignerEmbed defaultSport="pickleball" />
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Pickleball Court?</h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-8">
          Connect with verified pickleball court contractors who understand the sport, the dimensions, and the noise mitigation strategies that keep neighbors happy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/search?sport=pickleball" className="rounded-xl bg-neon px-8 py-4 font-semibold text-black hover:opacity-90 transition-opacity">
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
