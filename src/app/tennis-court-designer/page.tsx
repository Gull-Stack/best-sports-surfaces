import { Metadata } from 'next';
import Link from 'next/link';
import CourtDesigner from '@/components/tools/CourtDesigner';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tennis Court Designer & Cost Estimator | Build Your Perfect Court',
  description: 'Design your custom tennis court with our free interactive tool. Choose surface colors, dimensions, and get instant cost estimates for residential or commercial courts.',
  alternates: { canonical: `${SITE_URL}/tennis-court-designer` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to build a tennis court?', acceptedAnswer: { '@type': 'Answer', text: 'A residential tennis court costs between $25,000 and $60,000+ depending on surface type, site conditions, and accessories. A standard hard court with acrylic coating on concrete averages $35,000-$50,000. Clay courts and grass courts cost significantly more to build and maintain.' }},
    { '@type': 'Question', name: 'What are the dimensions of a tennis court?', acceptedAnswer: { '@type': 'Answer', text: 'A standard tennis court playing area is 36 feet wide (doubles) by 78 feet long. With the recommended overrun space, the total footprint is 60 feet wide by 120 feet long, or 7,200 square feet.' }},
    { '@type': 'Question', name: 'What is the best surface for a residential tennis court?', acceptedAnswer: { '@type': 'Answer', text: 'Acrylic hard court surfaces on concrete are the most popular for residential tennis courts. They offer consistent ball bounce, low maintenance, customizable colors, and last 25+ years with periodic recoating every 5-8 years.' }},
    { '@type': 'Question', name: 'How long does it take to build a tennis court?', acceptedAnswer: { '@type': 'Answer', text: 'A residential tennis court typically takes 4-8 weeks from excavation to completion. Weather delays, complex drainage requirements, and post-tensioned concrete can extend the timeline.' }},
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
              <span className="text-text-primary">Tennis</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-neon">Tennis Court</span> Designer & Cost Estimator
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              Design your perfect tennis court with our free interactive tool. Choose your surface colors, set your dimensions, and get instant cost estimates for your residential or commercial project.
            </p>
          </div>
        </div>

        {/* Intro Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <img
              src="/images/tennis-court-1.jpg"
              alt="Professional tennis court with blue and green acrylic surface"
              className="w-full rounded-xl mb-8"
              loading="lazy"
            />

            <h2 className="text-2xl font-bold text-text-primary">What Goes Into Building a Tennis Court?</h2>
            <p className="text-text-secondary leading-relaxed">
              A tennis court is one of the largest residential sport installations you can build. At a minimum footprint of 60 by 120 feet (7,200 square feet), it requires significant planning, proper engineering, and experienced contractors. The investment pays off in decades of use, but cutting corners during construction leads to expensive problems down the road.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Construction begins with site selection and excavation. The ideal location is flat, well-drained, and oriented north-south to minimize sun glare during play. The site is excavated to a depth of 12-16 inches, with careful attention to grading. Unlike a basketball court where a 1% slope is sufficient, tennis courts require precise drainage engineering — typically a side-to-side slope of 1 inch per 10 feet (0.83%) — because standing water on a tennis court creates dangerous playing conditions and accelerates surface deterioration.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The base layer is critical. Most residential tennis courts use a 4-6 inch reinforced concrete slab, though post-tensioned concrete is the premium standard in areas with expansive soils or freeze-thaw cycles. Post-tensioned slabs use steel tendons that are stretched after the concrete cures, creating internal compression that dramatically reduces cracking. The additional cost ($3-5 per square foot) is worth it for a surface that needs to remain perfectly flat over 25+ years.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Surface Types: Hard Court, Clay, or Grass?</h2>
            <p className="text-text-secondary leading-relaxed">
              The surface you choose fundamentally changes how the game plays, what maintenance is required, and what you will spend annually to keep the court in condition.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Acrylic Hard Court</strong> is by far the most common surface for residential and public tennis courts in the United States. A multi-layer acrylic coating system (like Acrytech, available through our contractor network) is applied over concrete or asphalt in 3-5 coats. It provides a consistent, medium-fast playing speed, excellent ball visibility, and comes in a wide range of color combinations. Maintenance is minimal — pressure washing and recoating every 5-8 years. The US Open uses a hard court surface, so you are in good company.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Clay Courts</strong> (Har-Tru or red clay) provide a slower playing speed that is easier on the body. They are the traditional surface of the French Open. However, clay courts require daily maintenance — watering, rolling, line sweeping — and annual reconstruction of the playing surface. The installation cost is comparable to hard court ($30,000-$50,000), but annual maintenance runs $2,000-$5,000. Clay courts are not practical in all climates and require a seasonal shutdown in cold weather.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Grass Courts</strong> are rare, expensive, and labor-intensive. Unless you are recreating Wimbledon in your backyard, a grass court is impractical for residential use. Installation exceeds $100,000 and maintenance is essentially a full-time job.
            </p>
          </div>
        </div>

        {/* Court Designer Component */}
        <div className="border-y border-border bg-surface">
          <CourtDesigner defaultSport="tennis" showHeader={false} />
        </div>

        {/* More Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-text-primary">Dimensions and Layout</h2>
            <p className="text-text-secondary leading-relaxed">
              A regulation tennis court playing area is 36 feet wide for doubles (27 feet for singles) and 78 feet long. However, you cannot just build a 36x78-foot slab and call it a court. Players need room to move behind the baseline and along the sidelines. The International Tennis Federation recommends a minimum overrun of 12 feet behind each baseline and 6 feet on each side, bringing the total footprint to 60 by 120 feet (7,200 square feet).
            </p>
            <p className="text-text-secondary leading-relaxed">
              If space allows, increasing the overrun to 21 feet behind baselines and 12 feet on the sides creates a tournament-quality layout at 60 by 120 feet. These extra few feet make a meaningful difference in gameplay, especially for advanced players who need room to run down lobs and wide serves.
            </p>

            <img
              src="/images/tennis-court-2.jpg"
              alt="Tennis player serving on a well-maintained court"
              className="w-full rounded-xl my-8"
              loading="lazy"
            />

            <h2 className="text-2xl font-bold text-text-primary">Cost Breakdown for a Residential Tennis Court</h2>
            <p className="text-text-secondary leading-relaxed">
              Here is a realistic cost breakdown for a standard 60x120-foot hard court on reinforced concrete:
            </p>
            <ul className="text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Site preparation and excavation:</strong> $4,000 - $8,000</li>
              <li><strong className="text-text-primary">Concrete slab (4-6 inches, reinforced):</strong> $10,000 - $20,000</li>
              <li><strong className="text-text-primary">Post-tensioning upgrade (optional):</strong> $5,000 - $10,000</li>
              <li><strong className="text-text-primary">Acrylic sport surface (3-5 coats):</strong> $5,000 - $12,000</li>
              <li><strong className="text-text-primary">Line markings:</strong> $500 - $1,500</li>
              <li><strong className="text-text-primary">Net posts and net (permanent):</strong> $500 - $2,000</li>
              <li><strong className="text-text-primary">Fencing (10-foot, all sides):</strong> $8,000 - $15,000</li>
              <li><strong className="text-text-primary">Wind screens:</strong> $1,000 - $3,000</li>
              <li><strong className="text-text-primary">Lighting (6-pole LED):</strong> $12,000 - $20,000</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Total for a basic court without lighting: $28,000 - $58,000. Fully equipped with fencing, wind screens, and lighting: $45,000 - $90,000+.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Color Psychology: Why It Matters</h2>
            <p className="text-text-secondary leading-relaxed">
              Tennis court colors are not just aesthetic — they affect visibility, heat absorption, and playing experience. Blue playing surfaces (like the US Open) provide the best ball visibility against the yellow ball. Green surfaces (traditional) blend with natural surroundings and are easier on the eyes during long matches. Red and terracotta surfaces absorb more heat and can become uncomfortably warm in southern climates.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The surround color should contrast with the playing surface for clear boundary recognition. A dark green surround with a lighter blue playing area is one of the most popular combinations. Use the designer above to experiment with different color schemes and see how they look.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Drainage: The Factor Most People Miss</h2>
            <p className="text-text-secondary leading-relaxed">
              Poor drainage is the number one cause of premature tennis court failure. Water that pools on the surface causes coating delamination, algae growth, and in cold climates, freeze-thaw damage that cracks the slab. Water that collects beneath the slab causes heaving and settlement.
            </p>
            <p className="text-text-secondary leading-relaxed">
              A properly engineered tennis court has three drainage systems working together: surface slope (directing water to one side or corner), perimeter drainage (French drains or channel drains at the low edge), and subsurface drainage (gravel base beneath the slab). Your contractor should provide a drainage plan before any excavation begins. If they do not bring up drainage in the initial consultation, find a different contractor.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-10">Finding the Right Tennis Court Contractor</h2>
            <p className="text-text-secondary leading-relaxed">
              Tennis court construction is a specialty trade. A general concrete contractor may be able to pour the slab, but the surface application, line marking, net post installation, and drainage engineering require specific experience. Look for contractors who are members of the American Sports Builders Association (ASBA) and who can provide references for completed tennis court projects.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Use our search tool to find verified tennis court contractors near you. Every contractor on BestSportsSurfaces.com specializes in sport surface construction — not general contracting.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/search?sport=tennis"
              className="flex-1 rounded-xl bg-neon px-6 py-4 text-center font-semibold text-black transition-opacity hover:opacity-90"
            >
              Find Tennis Court Contractors
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
