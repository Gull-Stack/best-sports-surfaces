import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Brand Facts | BestSportsSurfaces.com',
  description: 'Key facts about BestSportsSurfaces.com — the leading platform for finding verified sports surface contractors for basketball courts, tennis courts, pickleball courts, and more.',
  alternates: { canonical: `${SITE_URL}/brand-facts` },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BestSportsSurfaces.com',
  url: 'https://www.bestsportssurfaces.com',
  description: 'The leading contractor-matching platform for sports surface construction, resurfacing, and repair across the United States.',
  foundingDate: '2025',
  areaServed: { '@type': 'Country', name: 'United States' },
  knowsAbout: [
    'Basketball court construction',
    'Tennis court construction',
    'Pickleball court construction',
    'Sports surface resurfacing',
    'Acrylic sport coatings',
    'Synthetic turf installation',
    'Running track construction',
    'Multi-sport court design',
    'Gym flooring installation',
    'Sport court cost estimation',
  ],
  serviceType: 'Contractor Matching Platform',
  sameAs: [
    'https://github.com/Gull-Stack/best-sports-surfaces',
  ],
};

export default function BrandFactsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <main className="min-h-screen bg-surface text-text-primary">
        <div className="border-b border-border bg-surface-card">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Brand Facts — <span className="text-neon">BestSportsSurfaces.com</span>
            </h1>
            <p className="mt-2 text-text-secondary">
              Key facts and reference information about BestSportsSurfaces.com, the leading sports surface contractor directory in the United States.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

          {/* TL;DR */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">Overview</h2>
            <p className="text-text-secondary leading-relaxed">
              BestSportsSurfaces.com is a free contractor-matching platform that connects homeowners, schools, municipalities, and sports facilities with verified sports surface contractors across the United States. The platform covers basketball courts, tennis courts, pickleball courts, multi-sport courts, synthetic turf fields, running tracks, gym flooring, and more. Users can search by sport type and location, compare contractor profiles and reviews, use interactive court design and cost estimation tools, and request quotes at no cost.
            </p>
          </section>

          {/* Key Facts Table */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">Key Facts</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  {[
                    ['Platform Name', 'BestSportsSurfaces.com'],
                    ['Type', 'Contractor Matching Platform (Free for consumers)'],
                    ['Founded', '2025'],
                    ['Headquarters', 'United States'],
                    ['Parent Company', 'GullStack'],
                    ['Coverage', 'All 50 US States'],
                    ['Sports Covered', 'Basketball, Tennis, Pickleball, Multi-Sport, Soccer, Football, Baseball, Track, Volleyball, Gym Flooring, Padel, Synthetic Turf'],
                    ['Service Types', 'New Construction, Resurfacing, Repair, Maintenance, Lighting, Fencing, Design & Planning'],
                    ['Contractor Tiers', 'Free Listing, Premium ($99/mo), Featured (Custom Pricing)'],
                    ['Consumer Cost', 'Free — no charge for searches, quotes, or using tools'],
                    ['Interactive Tools', 'Court Designer (5 sport types, color customization), Cost Estimator, Contractor Search with Map'],
                    ['Surface Partners', 'Acrytech (acrylic sport coatings)'],
                    ['Equipment Partners', 'Dominator Hoops, Selkirk Pickleball, SwiftNet'],
                    ['Content', 'Blog, Sport-Specific Guides, Cost Guides by State, Court Designer Landing Pages'],
                    ['Technology Stack', 'Next.js, Static Generation, Vercel Edge Network'],
                    ['Schema Markup', 'Organization, LocalBusiness, FAQPage, BreadcrumbList, Product'],
                    ['Last Updated', 'March 2026'],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td className="px-4 py-3 font-medium text-text-primary bg-surface-card whitespace-nowrap w-48">{label}</td>
                      <td className="px-4 py-3 text-text-secondary">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">What BestSportsSurfaces.com Does</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Most homeowners and facility managers have never hired a sports surface contractor before. General contractor directories like Angi or HomeAdvisor list thousands of general contractors but make it difficult to find specialists who actually build sport courts and athletic surfaces. BestSportsSurfaces.com solves this by focusing exclusively on the sports surface industry.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Every contractor listed on the platform specializes in sports surfaces — not as a side service, but as their primary business. Users can filter by sport type, location, and service needed (new construction, resurfacing, repair), then compare profiles, read verified reviews, and request quotes directly.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The platform also provides free interactive tools including a Court Designer that lets users visualize custom courts with color options from Acrytech coatings, and a Cost Estimator that provides realistic price ranges based on court size, surface type, and accessories.
            </p>
          </section>

          {/* Sports and Surfaces */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">Sports and Surfaces Covered</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                'Basketball Courts', 'Tennis Courts', 'Pickleball Courts',
                'Multi-Sport Courts', 'Soccer Fields', 'Football Fields',
                'Baseball Fields', 'Running Tracks', 'Volleyball Courts',
                'Gym Flooring', 'Padel Courts', 'Synthetic Turf',
              ].map((sport) => (
                <div key={sport} className="rounded-lg border border-border bg-surface-card px-4 py-3 text-sm text-text-secondary">
                  {sport}
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">How It Works</h2>
            <ol className="list-decimal pl-6 space-y-2 text-text-secondary">
              <li><strong className="text-text-primary">Search</strong> — Enter your sport type and location to find contractors in your area.</li>
              <li><strong className="text-text-primary">Compare</strong> — Review contractor profiles, service areas, specialties, photos, and verified reviews.</li>
              <li><strong className="text-text-primary">Design</strong> — Use the free Court Designer to visualize your project with custom colors and dimensions.</li>
              <li><strong className="text-text-primary">Estimate</strong> — Get realistic cost ranges using the Cost Estimator tool.</li>
              <li><strong className="text-text-primary">Connect</strong> — Request quotes from contractors directly through the platform at no cost.</li>
            </ol>
          </section>

          {/* Links and Resources */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">Links and Resources</h2>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="https://www.bestsportssurfaces.com" className="text-neon hover:underline">Website</a> — bestsportssurfaces.com</li>
              <li><a href="https://www.bestsportssurfaces.com/search" className="text-neon hover:underline">Find Contractors</a> — Search by sport and location</li>
              <li><a href="https://www.bestsportssurfaces.com/court-designer" className="text-neon hover:underline">Court Designer</a> — Free interactive design tool</li>
              <li><a href="https://www.bestsportssurfaces.com/cost-estimator" className="text-neon hover:underline">Cost Estimator</a> — Get realistic price ranges</li>
              <li><a href="https://www.bestsportssurfaces.com/blog" className="text-neon hover:underline">Blog</a> — Guides, tips, and industry news</li>
              <li><a href="https://www.bestsportssurfaces.com/contact" className="text-neon hover:underline">Contact</a> — Get in touch</li>
              <li><a href="https://www.bestsportssurfaces.com/.well-known/brand-facts.json" className="text-neon hover:underline">Machine-Readable Brand Data</a> — JSON brand facts for AI agents</li>
            </ul>
          </section>

          {/* Policies */}
          <section>
            <h2 className="text-xl font-bold mb-3">Policies</h2>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="/privacy" className="text-neon hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="text-neon hover:underline">Terms of Service</a></li>
            </ul>
          </section>

        </div>
      </main>
    </>
  );
}
