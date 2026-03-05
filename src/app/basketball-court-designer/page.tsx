import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';


import CourtDesignerEmbed from '@/components/tools/CourtDesignerEmbed';

export const metadata: Metadata = {
  title: 'Basketball Court Designer & Cost Estimator | Design Your Dream Court',
  description: 'Design your custom basketball court with our free interactive tool. Choose colors, dimensions, and get instant cost estimates for your backyard or facility court.',
  alternates: { canonical: `${SITE_URL}/basketball-court-designer` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to build a backyard basketball court?', acceptedAnswer: { '@type': 'Answer', text: 'A backyard basketball court typically costs between $15,000 and $50,000+ depending on size, surface type, and accessories. A half-court on an existing concrete slab can start around $5,000-8,000 for resurfacing alone.' } },
    { '@type': 'Question', name: 'What size is a standard basketball court?', acceptedAnswer: { '@type': 'Answer', text: 'A full NFHS (high school) court is 50 x 84 feet. NBA courts are 50 x 94 feet. A half court is typically 50 x 42 feet. Backyard courts can be customized to fit available space.' } },
    { '@type': 'Question', name: 'What is the best surface for a backyard basketball court?', acceptedAnswer: { '@type': 'Answer', text: 'Acrylic-coated concrete is the gold standard for backyard basketball courts. It provides consistent bounce, good traction, and lasts 8-15 years. Sport tile systems are another popular option offering cushioning and drainage.' } },
    { '@type': 'Question', name: 'How long does it take to build a basketball court?', acceptedAnswer: { '@type': 'Answer', text: 'A typical backyard basketball court takes 2-4 weeks to complete, depending on weather, site prep requirements, and whether new concrete needs to be poured. Resurfacing an existing slab can take as little as 3-5 days.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Court Designer', item: `${SITE_URL}/court-designer` },
    { '@type': 'ListItem', position: 3, name: 'Basketball Court Designer', item: `${SITE_URL}/basketball-court-designer` },
  ],
};

export default function BasketballCourtDesignerPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-neon">Basketball Court Designer</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Design Your Custom <span className="text-neon">Basketball Court</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Use our free interactive designer to visualize your court, choose colors, and get instant cost estimates. Whether you are building a backyard half-court or a full regulation facility, start here.
            </p>
          </div>
        </div>
      </div>

      {/* Intro Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 prose prose-invert max-w-none">
            <img src="/images/basketball-court-1.jpg" alt="Outdoor basketball court with painted lines and hoops" loading="lazy" className="w-full rounded-xl mb-8" />

            <h2 className="text-2xl font-bold text-text-primary">What Building a Basketball Court in Your Yard Actually Involves</h2>
            <p className="text-text-secondary leading-relaxed">
              Building a basketball court is one of the most popular backyard projects in America, and for good reason. A well-built court adds real value to your property, gives your family a place to stay active, and can last decades with minimal maintenance. But before you start shopping for hoops, you need to understand what the project actually involves from start to finish.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The process starts with <strong className="text-text-primary">site preparation</strong>. Your contractor will need to assess the terrain, ensure proper grading for drainage (a minimum 1% slope is standard), and determine whether tree roots, utility lines, or soil conditions present any challenges. This phase alone can make or break your court. A court built on poorly prepared ground will crack within a few years, no matter how good the surface is.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Next comes the <strong className="text-text-primary">base layer</strong>. For most residential basketball courts, this means a 4-inch reinforced concrete slab poured over a compacted aggregate base. Some builders use asphalt, which is cheaper but less durable and more prone to cracking in freeze-thaw climates. Post-tensioned concrete is the premium option, using steel cables under tension to prevent cracking — the same technology used in commercial parking garages.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">playing surface</strong> goes on top of the base. Acrylic sport coatings like those from Acrytech are the industry standard, applied in multiple layers to create a textured, non-slip surface with precise color. Sport tile systems (interlocking modular tiles) are an alternative that provides cushioning, built-in drainage, and the ability to relocate the court if needed.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Finally, the court gets its <strong className="text-text-primary">markings, hoops, and accessories</strong>. Lines are painted or taped to regulation specifications, basketball systems are installed (in-ground, wall-mount, or portable), and optional extras like fencing, lighting, and rebounding systems round out the project.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Full Court vs. Half Court: Which Should You Build?</h2>
            <p className="text-text-secondary leading-relaxed">
              This is the first major decision, and it comes down to space and budget. A <strong className="text-text-primary">full-size high school court</strong> measures 50 by 84 feet, requiring a minimum footprint of about 56 by 90 feet with run-off space. That is roughly 5,000 square feet — a significant chunk of yard. An NBA-regulation court is even larger at 50 by 94 feet.
            </p>
            <p className="text-text-secondary leading-relaxed">
              A <strong className="text-text-primary">half court</strong> at 50 by 42 feet is the most popular residential choice. It gives you a three-point line, a key, and enough room for competitive half-court games while costing roughly half as much as a full court. Many homeowners further customize with narrower widths (30-42 feet) to fit their available space.
            </p>
            <p className="text-text-secondary leading-relaxed">
              For driveways and small backyards, a <strong className="text-text-primary">shooting pad or practice court</strong> as small as 20 by 25 feet can accommodate a hoop with enough room for shooting drills and casual play.
            </p>

            <img src="/images/basketball-court-2.jpg" alt="Basketball players on an outdoor court during a game" loading="lazy" className="w-full rounded-xl my-8" />

            <h2 className="text-2xl font-bold text-text-primary">Cost Breakdown: What to Expect</h2>
            <p className="text-text-secondary leading-relaxed">
              Basketball court costs vary dramatically based on size, surface type, site conditions, and your region. Here are realistic ranges for 2025-2026:
            </p>
            <ul className="text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Half-court (new concrete + acrylic surface):</strong> $15,000 - $30,000</li>
              <li><strong className="text-text-primary">Full court (new concrete + acrylic):</strong> $30,000 - $60,000+</li>
              <li><strong className="text-text-primary">Resurface existing slab:</strong> $3,000 - $8,000</li>
              <li><strong className="text-text-primary">Sport tile system (half court):</strong> $8,000 - $18,000</li>
              <li><strong className="text-text-primary">In-ground hoop system:</strong> $500 - $3,000</li>
              <li><strong className="text-text-primary">Lighting (4 poles, LED):</strong> $8,000 - $15,000</li>
              <li><strong className="text-text-primary">Perimeter fencing:</strong> $3,000 - $8,000</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              The biggest cost variable is whether you are building on virgin ground (requiring excavation, grading, and new concrete) versus resurfacing an existing slab. Resurfacing can save 50-70% of the total project cost.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Surface Types Compared</h2>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Acrylic-coated concrete</strong> is the gold standard. It provides consistent ball bounce, excellent traction in wet and dry conditions, and lasts 8-15 years between recoats. Acrytech coatings, available through our designer tool above, come in 30+ colors and are the same systems used on professional courts.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Asphalt</strong> is cheaper by 20-30% but has a rougher texture, absorbs more heat in summer, and is more susceptible to cracking in cold climates. It also requires a seal coat every 2-3 years.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Sport tile (modular)</strong> systems like SnapSports or VersaCourt offer cushioning that reduces joint stress, built-in drainage, and the ability to install over existing concrete or even compacted gravel. They cost more per square foot but require less site prep and can be DIY-installed.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Climate and Maintenance Considerations</h2>
            <p className="text-text-secondary leading-relaxed">
              If you live in a region with freeze-thaw cycles, concrete base preparation is critical. Proper sub-base drainage, control joints every 10-12 feet, and fiber-reinforced concrete reduce the risk of cracking. In hot climates, lighter surface colors reflect more heat and keep the court playable during summer.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Maintenance for an acrylic court is minimal: periodic power washing, crack filling as needed, and recoating every 5-8 years. Sport tile systems need even less — just occasional cleaning and individual tile replacement if damaged.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Why Hire a Specialist Contractor</h2>
            <p className="text-text-secondary leading-relaxed">
              A general contractor can pour a concrete slab, but sports surface installation requires specific expertise. Improper slope (too much or too little), incorrect coating application, or poor joint placement will lead to standing water, premature wear, and cracking. A sports surface specialist understands the tolerances — a basketball court needs to be flat to within 1/8 inch over 10 feet, far tighter than a typical patio or driveway.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Use our contractor search to find verified sports surface professionals in your area who specialize in basketball court construction and resurfacing.
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-surface-card p-6 sticky top-24">
              <h3 className="text-lg font-bold text-text-primary mb-4">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Full Court</dt>
                  <dd className="font-medium">50 x 84 ft (NFHS)</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Half Court</dt>
                  <dd className="font-medium">50 x 42 ft</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Cost Range</dt>
                  <dd className="font-medium text-neon">$15k - $60k+</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Build Time</dt>
                  <dd className="font-medium">2-4 weeks</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-text-secondary">Surface Life</dt>
                  <dd className="font-medium">8-15 years</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">Best Surface</dt>
                  <dd className="font-medium">Acrylic on concrete</dd>
                </div>
              </dl>
              <Link href="/search?sport=basketball" className="mt-6 block w-full rounded-lg bg-neon px-4 py-3 text-center font-semibold text-black hover:opacity-90 transition-opacity">
                Find Basketball Court Contractors
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Court Designer */}
      <div className="border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Design Your Basketball Court</h2>
          <p className="text-text-secondary mb-6">Choose your dimensions, colors, and extras to get an instant cost estimate.</p>
        </div>
        <CourtDesignerEmbed defaultSport="basketball" />
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Basketball Court?</h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-8">
          Connect with verified basketball court contractors in your area. Get free quotes and compare pricing, timelines, and reviews.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/search?sport=basketball" className="rounded-xl bg-neon px-8 py-4 font-semibold text-black hover:opacity-90 transition-opacity">
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
