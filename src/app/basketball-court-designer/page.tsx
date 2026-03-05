import { Metadata } from 'next';
import Link from 'next/link';
import CourtDesigner from '@/components/tools/CourtDesigner';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Basketball Court Designer & Cost Estimator | Design Your Dream Court',
  description: 'Design your custom basketball court with our free interactive tool. Choose colors, dimensions, and get instant cost estimates for your backyard or facility court.',
  alternates: { canonical: `${SITE_URL}/basketball-court-designer` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to build a backyard basketball court?', acceptedAnswer: { '@type': 'Answer', text: 'A backyard basketball court typically costs between $15,000 and $50,000+ depending on size, surface type, and accessories. A half-court (50x42 ft) on concrete with acrylic coating averages $20,000-$35,000.' }},
    { '@type': 'Question', name: 'What is the standard size of a basketball court?', acceptedAnswer: { '@type': 'Answer', text: 'A full NFHS (high school) court is 50x84 feet, NBA is 50x94 feet. A standard half-court is 50x42 feet. Backyard courts are often customized to fit available space, with 30x50 feet being a popular minimum.' }},
    { '@type': 'Question', name: 'What is the best surface for a backyard basketball court?', acceptedAnswer: { '@type': 'Answer', text: 'Concrete with acrylic sport coating is the most popular choice for residential basketball courts. It provides excellent ball bounce, is durable, and can be customized with colors and lines. Sport tile systems are another option that offer cushioning and drainage.' }},
    { '@type': 'Question', name: 'How long does it take to build a basketball court?', acceptedAnswer: { '@type': 'Answer', text: 'Most residential basketball courts take 2-4 weeks from excavation to completion. The timeline depends on weather, site preparation needs, and whether you are pouring new concrete or resurfacing existing pavement.' }},
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-surface text-text-primary">
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-border bg-surface-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <nav className="mb-4 text-sm text-text-secondary">
              <Link href="/" className="hover:text-neon">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/court-designer" className="hover:text-neon">Court Designer</Link>
              <span className="mx-2">/</span>
              <span className="text-text-primary">Basketball</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-neon">Basketball Court</span> Designer & Cost Estimator
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              Design your dream basketball court with our free interactive tool. Customize dimensions, choose your colors, and get instant cost estimates — whether you are building a backyard half-court or a full regulation facility.
            </p>
          </div>
        </div>

        {/* Intro Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <img
              src="/images/basketball-court-1.jpg"
              alt="Professional basketball court with acrylic surface coating"
              className="w-full rounded-xl mb-8"
              loading="lazy"
            />

            <h2 className="text-2xl font-bold text-text-primary">What Does Building a Basketball Court Actually Involve?</h2>
            <p className="text-text-secondary leading-relaxed">
              Building a basketball court in your backyard is one of the best investments you can make in your property and your family&apos;s quality of life. But it is not as simple as pouring concrete and bolting on a hoop. A proper basketball court involves site preparation, a stable base, the right surface material, professional line markings, and quality accessories. Getting any of these wrong leads to cracking, poor drainage, uneven bounce, and a court that deteriorates within a few years.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The process starts with site evaluation. A contractor will assess your property&apos;s grade, soil composition, drainage patterns, and available space. The area needs to be excavated to a depth of 8-12 inches, graded for proper water runoff (a minimum 1% slope), and compacted with aggregate base material. This foundation work is the most critical — and most commonly underestimated — part of the entire project.
            </p>
            <p className="text-text-secondary leading-relaxed">
              On top of the compacted base, a 4-6 inch reinforced concrete slab is poured. Post-tensioned concrete is the premium option that resists cracking in freeze-thaw climates, but standard reinforced concrete with proper control joints works well in most residential applications. After the concrete cures for 28+ days, the surface is coated with an acrylic sport surface system — typically 3-5 coats that provide color, texture, and UV protection.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Full Court vs. Half Court: Which Is Right for You?</h2>
            <p className="text-text-secondary leading-relaxed">
              A full-court basketball court measures 50 by 84 feet at the high school (NFHS) standard, or 50 by 94 feet for NBA regulation. With the recommended minimum surround of 3 feet on each side, you are looking at a total footprint of at least 56 by 90 feet — roughly 5,040 square feet. That is a significant chunk of yard space, and the cost reflects it: $30,000 to $70,000+ depending on surface type and accessories.
            </p>
            <p className="text-text-secondary leading-relaxed">
              For most homeowners, a half-court is the sweet spot. At 50 by 42 feet (about 2,100 square feet of playing area), it provides enough room for competitive play, shooting practice, and games up to 3-on-3. The cost is roughly half of a full court, typically ranging from $15,000 to $35,000. Many families also opt for a smaller &quot;driveway court&quot; at 30 by 50 feet, which is ideal for younger players and casual shooting.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Use the interactive designer below to experiment with different dimensions. You will see the cost estimate update in real time as you adjust the size.
            </p>
          </div>
        </div>

        {/* Court Designer Component */}
        <div className="border-y border-border bg-surface">
          <CourtDesigner defaultSport="basketball" showHeader={false} />
        </div>

        {/* More Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-text-primary">Choosing the Right Surface Material</h2>
            <p className="text-text-secondary leading-relaxed">
              The surface you choose determines how the court plays, how it looks, and how long it lasts. Here are your main options:
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Concrete with Acrylic Coating</strong> is the most popular choice for residential and commercial basketball courts. The acrylic system (like Acrytech, available through our platform) provides a textured, non-slip surface with excellent ball bounce characteristics. It comes in dozens of colors, is UV-resistant, and lasts 5-8 years between recoats. Total cost: $6-12 per square foot installed.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Asphalt</strong> is a more affordable base option at $3-6 per square foot, but it requires more maintenance. Asphalt is softer underfoot (easier on joints) but susceptible to cracking, especially in areas with temperature extremes. It should still be coated with an acrylic sport surface for proper performance and appearance.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Modular Sport Tile</strong> systems (like SnapSports or VersaCourt) are interlocking plastic tiles installed over a flat concrete or asphalt base. They provide excellent drainage, shock absorption, and can be installed in a day. However, they change the feel of the game — ball bounce is slightly different than a traditional hard court. Cost: $3-7 per square foot for the tiles alone, plus the base underneath.
            </p>

            <img
              src="/images/basketball-court-2.jpg"
              alt="Players enjoying a basketball game on an outdoor court"
              className="w-full rounded-xl my-8"
              loading="lazy"
            />

            <h2 className="text-2xl font-bold text-text-primary">Cost Breakdown: What to Expect</h2>
            <p className="text-text-secondary leading-relaxed">
              Here is a realistic cost breakdown for a standard 50x42-foot half-court on concrete with acrylic coating:
            </p>
            <ul className="text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Site preparation and excavation:</strong> $2,000 - $5,000</li>
              <li><strong className="text-text-primary">Concrete slab (4-6 inches, reinforced):</strong> $5,000 - $10,000</li>
              <li><strong className="text-text-primary">Acrylic sport surface (3-5 coats):</strong> $3,000 - $7,000</li>
              <li><strong className="text-text-primary">Line markings:</strong> $500 - $1,500</li>
              <li><strong className="text-text-primary">Basketball hoop system (in-ground):</strong> $500 - $3,000+</li>
              <li><strong className="text-text-primary">Fencing (optional, 10-foot chain link):</strong> $3,000 - $8,000</li>
              <li><strong className="text-text-primary">Lighting (optional, 4-pole LED):</strong> $8,000 - $15,000</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Total for a basic half-court without fencing or lighting: $11,000 - $26,500. With full accessories: $25,000 - $50,000+.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Climate and Maintenance Considerations</h2>
            <p className="text-text-secondary leading-relaxed">
              Your local climate plays a significant role in both construction and long-term maintenance. In northern states with freeze-thaw cycles, post-tensioned concrete is strongly recommended to prevent cracking. Proper drainage is critical everywhere — standing water destroys surfaces and promotes mold and algae growth.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Maintenance for a properly built basketball court is minimal but important. Plan on pressure washing 1-2 times per year, cleaning leaves and debris regularly, and recoating the acrylic surface every 5-8 years (approximately $2,000-$5,000 per recoat). Cracks should be repaired promptly before they spread. In cold climates, never use metal shovels or salt to remove snow from the court surface.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Does a Basketball Court Add Property Value?</h2>
            <p className="text-text-secondary leading-relaxed">
              A well-built sport court can add $10,000-$25,000 to your home&apos;s resale value, though the actual return varies by market and buyer demographics. In family-oriented neighborhoods, a basketball court is a significant selling feature. The key is professional installation — a DIY court with visible cracks and faded lines actually detracts from value.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Beyond financial return, the lifestyle value is substantial. A backyard basketball court gives your family and neighborhood a gathering spot, keeps kids active and off screens, and provides low-cost entertainment for decades.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Why Use a Professional Contractor?</h2>
            <p className="text-text-secondary leading-relaxed">
              The difference between a court that lasts 20 years and one that cracks in 2 comes down to the base preparation and installation quality. Professional sport surface contractors understand soil conditions, concrete specs, drainage requirements, and coating systems in ways that general contractors typically do not. They also carry specialized equipment for surface application and line marking.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Use our contractor search to find verified basketball court builders in your area. Compare quotes, check reviews, and make sure your investment is built to last.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/search?sport=basketball"
              className="flex-1 rounded-xl bg-neon px-6 py-4 text-center font-semibold text-black transition-opacity hover:opacity-90"
            >
              Find Basketball Court Contractors
            </Link>
            <Link
              href="/cost-estimator"
              className="flex-1 rounded-xl border border-neon px-6 py-4 text-center font-semibold text-neon transition-colors hover:bg-neon/10"
            >
              Get a Detailed Cost Estimate
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
