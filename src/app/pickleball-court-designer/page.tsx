import { Metadata } from 'next';
import Link from 'next/link';
import CourtDesigner from '@/components/tools/CourtDesigner';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pickleball Court Designer & Cost Estimator | Design Your Court',
  description: 'Design your custom pickleball court with our free tool. Choose colors, get dimensions right, and estimate costs for your backyard or community court.',
  alternates: { canonical: `${SITE_URL}/pickleball-court-designer` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to build a pickleball court?', acceptedAnswer: { '@type': 'Answer', text: 'A residential pickleball court costs between $11,000 and $30,000 depending on surface type and accessories. A basic court on concrete with acrylic coating averages $15,000-$22,000. Multi-court facilities for communities cost $20,000-$40,000 per court.' }},
    { '@type': 'Question', name: 'What are the dimensions of a pickleball court?', acceptedAnswer: { '@type': 'Answer', text: 'A regulation pickleball court playing area is 20 feet wide by 44 feet long. With the recommended overrun space of 7 feet on each side and 10 feet behind each baseline, the total footprint is 34 feet wide by 64 feet long (2,176 square feet).' }},
    { '@type': 'Question', name: 'Can I convert a tennis court to pickleball?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single tennis court can accommodate up to 4 pickleball courts. You can add pickleball lines to an existing tennis court for dual use, or fully convert the space. Line addition costs $200-$500, while a full conversion with dedicated nets costs $5,000-$15,000.' }},
    { '@type': 'Question', name: 'Are pickleball courts noisy?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, pickleball generates 70-75 decibels of sound from paddle-ball contact, which is louder than tennis. Noise is the number one complaint from neighbors. Solutions include sound barriers, acoustic fencing, quiet paddle requirements, and strategic court placement away from property lines.' }},
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
              <span className="text-text-primary">Pickleball</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-neon">Pickleball Court</span> Designer & Cost Estimator
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              Design your custom pickleball court with our free interactive tool. Get the dimensions right, choose your colors, and see what it will cost — whether you are building in your backyard or planning a multi-court community facility.
            </p>
          </div>
        </div>

        {/* Intro Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <img
              src="/images/pickleball-court-1.jpg"
              alt="Players enjoying a game of pickleball on a dedicated court"
              className="w-full rounded-xl mb-8"
              loading="lazy"
            />

            <h2 className="text-2xl font-bold text-text-primary">The Fastest-Growing Sport Needs Courts — Fast</h2>
            <p className="text-text-secondary leading-relaxed">
              Pickleball is the fastest-growing sport in America, with over 48 million players as of 2024 — a number that has more than doubled in three years. The demand for dedicated pickleball courts has outpaced supply in nearly every market. Community recreation centers have year-long waitlists. Public parks are converting tennis courts just to keep up. And homeowners are increasingly building private courts in their backyards, both for personal use and as a genuine property value booster.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The good news? Pickleball courts are significantly smaller and less expensive than tennis or basketball courts. A single pickleball court with proper overrun space requires just 34 by 64 feet — roughly 2,176 square feet. That is less than a third of a tennis court&apos;s footprint. You can fit a dedicated pickleball court in most suburban backyards, and the total cost is typically $11,000-$30,000 depending on surface and accessories.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">What Building a Pickleball Court Involves</h2>
            <p className="text-text-secondary leading-relaxed">
              The construction process for a pickleball court follows the same fundamental steps as any sport court: site preparation, base installation, surface application, and line marking. The smaller footprint makes each step faster and less expensive, but the quality requirements are identical. A poorly built pickleball court cracks, puddles, and plays unevenly just like a poorly built tennis court.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Site preparation involves clearing and excavating the area to a depth of 8-12 inches, grading for drainage (minimum 1% slope in one direction), and compacting an aggregate base. A 4-inch reinforced concrete slab is standard for residential courts, though post-tensioned concrete is recommended in freeze-thaw zones. After the concrete cures (28 days minimum), an acrylic sport surface system is applied in 3-5 coats, followed by precision line marking.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The entire process typically takes 2-3 weeks from excavation to play, assuming favorable weather. It is one of the fastest sport court installations available — another reason pickleball courts are so popular.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Dimensions: Getting It Right</h2>
            <p className="text-text-secondary leading-relaxed">
              A regulation pickleball court playing area is 20 feet wide by 44 feet long — the same size as a doubles badminton court. The court is divided by a net that is 36 inches high at the sidelines and 34 inches at the center. A 7-foot non-volley zone (the &quot;kitchen&quot;) extends from the net on each side, creating a unique strategic element that defines the sport.
            </p>
            <p className="text-text-secondary leading-relaxed">
              However, you need more than the 20x44 playing area. USA Pickleball recommends a minimum total area of 30 by 60 feet for recreational play, and 34 by 64 feet for tournament play. That overrun space — 5-7 feet on each side and 8-10 feet behind each baseline — is essential for safe play. Players routinely move beyond the court boundaries to return lobs and dinks.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Use the interactive designer below to visualize different dimensions and see how they affect your cost estimate.
            </p>
          </div>
        </div>

        {/* Court Designer Component */}
        <div className="border-y border-border bg-surface">
          <CourtDesigner defaultSport="pickleball" showHeader={false} />
        </div>

        {/* More Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-text-primary">Surface Options for Pickleball</h2>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Concrete with Acrylic Coating</strong> is the gold standard for pickleball courts. The textured acrylic surface provides consistent ball bounce, slip resistance, and color customization. Systems like Acrytech (available through our contractor network) offer sport-specific texture levels that work perfectly for pickleball&apos;s unique ball dynamics. Cost: $5-10 per square foot for the complete surface system.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Asphalt with Acrylic Coating</strong> is a more affordable option at $3-6 per square foot. The playing characteristics are similar to concrete, but asphalt is more prone to cracking over time, especially in areas with temperature extremes. It is a good option if budget is the primary concern.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Modular Sport Tile</strong> systems are interlocking plastic tiles that install over any flat, hard surface. They provide excellent drainage, some cushioning, and can be installed in hours rather than weeks. The trade-off is a different ball bounce characteristic and a higher per-square-foot cost for the tiles ($3-7, plus the base). Sport tiles are popular for temporary installations, indoor courts, and surfaces where drilling or permanent modifications are not permitted.
            </p>

            <img
              src="/images/pickleball-court-2.jpg"
              alt="Dedicated pickleball court with professional surface markings"
              className="w-full rounded-xl my-8"
              loading="lazy"
            />

            <h2 className="text-2xl font-bold text-text-primary">Cost Breakdown: What to Expect</h2>
            <p className="text-text-secondary leading-relaxed">
              Here is a realistic cost breakdown for a standard 34x64-foot pickleball court on concrete with acrylic coating:
            </p>
            <ul className="text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Site preparation and excavation:</strong> $1,500 - $3,500</li>
              <li><strong className="text-text-primary">Concrete slab (4 inches, reinforced):</strong> $3,500 - $7,000</li>
              <li><strong className="text-text-primary">Acrylic sport surface (3-5 coats):</strong> $2,000 - $5,000</li>
              <li><strong className="text-text-primary">Line markings:</strong> $300 - $800</li>
              <li><strong className="text-text-primary">Net system (permanent posts + net):</strong> $300 - $1,500</li>
              <li><strong className="text-text-primary">Fencing (optional, 6-10 foot):</strong> $3,000 - $6,000</li>
              <li><strong className="text-text-primary">Lighting (optional, 4-pole LED):</strong> $8,000 - $12,000</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Total for a basic court without fencing or lighting: $7,600 - $17,800. Fully equipped: $18,600 - $35,800.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">The Noise Problem — And How to Solve It</h2>
            <p className="text-text-secondary leading-relaxed">
              Let us address the elephant in the room: pickleball is loud. The distinctive &quot;pop&quot; of a polymer ball hitting a composite paddle generates 70-75 decibels — louder than normal conversation and comparable to a vacuum cleaner. When you have four players rallying on a court near a property line, neighbors notice. Multiple communities across the country have restricted or banned backyard pickleball courts specifically because of noise complaints.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The solution is proactive noise management. Place the court as far from property lines as possible — every 10 feet of distance reduces perceived noise significantly. Install acoustic fencing or sound barrier walls (8-12 feet tall) along the sides facing neighbors. Consider requiring &quot;quiet&quot; paddles made from materials that dampen the impact sound. Some homeowners also plant dense hedgerows as both a visual and partial sound barrier. Addressing noise before it becomes a complaint is always easier than dealing with it after.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Converting a Tennis Court to Pickleball</h2>
            <p className="text-text-secondary leading-relaxed">
              If you already have a tennis court — or can purchase a property with one — converting to pickleball is one of the most cost-effective options available. A single tennis court (60x120 feet) can accommodate up to 4 pickleball courts with proper layout, or 2 courts with generous spacing.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The simplest conversion is adding pickleball lines to the existing tennis court surface for dual use. This costs $200-$500 and takes a few hours, using a contrasting color so both sets of lines are clearly visible. For dedicated conversion, you will need to relocate or remove tennis net posts, install pickleball-specific posts and nets, and potentially resurface to add fresh pickleball-only lines. A full conversion runs $5,000-$15,000 depending on the condition of the existing surface.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Multi-Court Facilities for Communities</h2>
            <p className="text-text-secondary leading-relaxed">
              Homeowners associations, parks departments, and recreation centers are building multi-court pickleball facilities at an unprecedented rate. A 4-court complex with shared fencing and lighting is the most popular configuration, providing enough capacity for organized play, tournaments, and drop-in sessions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Multi-court layouts benefit from economy of scale. Shared fencing, a single lighting system, and bulk surface coating reduce the per-court cost to $15,000-$25,000 (compared to $18,000-$30,000 for an isolated single court). Our contractor network includes builders who specialize in multi-court commercial facilities — use the search tool below to find one in your area.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Why Hire a Specialist Contractor?</h2>
            <p className="text-text-secondary leading-relaxed">
              Pickleball courts are precise. The kitchen lines need to be exactly 7 feet from the net. The net height must be exactly 34 inches at center and 36 inches at the posts. The surface texture needs to provide grip without being abrasive. And the drainage must be engineered to prevent puddles in a playing area that measures just 20 by 44 feet — where even a small low spot is immediately noticeable.
            </p>
            <p className="text-text-secondary leading-relaxed">
              A general contractor can pour concrete. A sport surface specialist builds a court that plays correctly, drains properly, and lasts for decades. The difference in cost is minimal compared to the difference in quality. Use our platform to find contractors who build pickleball courts specifically — not as a sideline to their driveway pouring business.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/search?sport=pickleball"
              className="flex-1 rounded-xl bg-neon px-6 py-4 text-center font-semibold text-black transition-opacity hover:opacity-90"
            >
              Find Pickleball Court Contractors
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
