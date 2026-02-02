import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Search, ChevronRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import VendorCard from '@/components/vendor/VendorCard';
import type { Vendor } from '@/types';

// Sport configuration
const SPORT_CONFIG: Record<string, {
  name: string;
  singular: string;
  icon: string;
  dbFilter: string[];
  h1: string;
  heroDesc: string;
  costRange: string;
  timeline: string;
  faqs: { q: string; a: string }[];
}> = {
  'pickleball-courts': {
    name: 'Pickleball Courts',
    singular: 'Pickleball Court',
    icon: '🏓',
    dbFilter: ['pickleball'],
    h1: 'Pickleball Court Builders Near You',
    heroDesc: 'Find experienced pickleball court contractors for new construction, tennis-to-pickleball conversions, resurfacing, and repair. Compare quotes from verified professionals.',
    costRange: '$20,000 – $60,000',
    timeline: '4–8 weeks',
    faqs: [
      { q: 'How much does it cost to build a pickleball court?', a: 'A new pickleball court typically costs between $20,000 and $60,000 depending on the surface type, site preparation needs, and accessories like fencing and lighting. Converting an existing tennis court to pickleball is usually $5,000–$15,000.' },
      { q: 'What surface is best for pickleball?', a: 'Acrylic hard courts are the most popular surface for outdoor pickleball. They offer excellent ball bounce, durability, and low maintenance. Cushioned acrylic surfaces reduce joint impact and are preferred by serious players.' },
      { q: 'How long does it take to build a pickleball court?', a: 'A new pickleball court takes 4–8 weeks from site prep to completion. Conversions from tennis courts can be done in 1–3 weeks. Weather and permitting can affect the timeline.' },
      { q: 'What are the dimensions of a regulation pickleball court?', a: 'A regulation pickleball court is 20 feet wide by 44 feet long. With recommended overruns, you need a minimum area of 30 x 60 feet, though 34 x 64 feet is ideal for tournament play.' },
      { q: 'Can I convert my tennis court to pickleball?', a: 'Yes! A standard tennis court can fit 2–4 pickleball courts. Conversion involves adding new lines, adjusting nets, and potentially adding divider fencing. Many contractors specialize in these conversions.' },
    ],
  },
  'tennis-courts': {
    name: 'Tennis Courts',
    singular: 'Tennis Court',
    icon: '🎾',
    dbFilter: ['tennis'],
    h1: 'Tennis Court Contractors Near You',
    heroDesc: 'Connect with certified tennis court builders for new construction, resurfacing, crack repair, and complete court renovations. Hard courts, clay courts, and more.',
    costRange: '$50,000 – $150,000',
    timeline: '6–12 weeks',
    faqs: [
      { q: 'How much does it cost to build a tennis court?', a: 'A new tennis court costs between $50,000 and $150,000 depending on surface type (hard court, clay, or grass), site preparation, and extras like lighting and fencing. Resurfacing typically costs $4,000–$10,000.' },
      { q: 'What type of tennis court surface is best?', a: 'Hard courts (acrylic) are the most common and lowest maintenance. Clay courts (Har-Tru) offer softer play but need more upkeep. Post-tension concrete provides the most durable foundation and prevents cracking.' },
      { q: 'How often should a tennis court be resurfaced?', a: 'Tennis courts should be resurfaced every 4–8 years depending on usage, climate, and maintenance. Signs that resurfacing is needed include fading color, rough texture, standing water, and visible cracks.' },
      { q: 'How long does tennis court construction take?', a: 'New tennis court construction takes 6–12 weeks on average. This includes site preparation, base construction, surface application, line painting, and accessories installation.' },
    ],
  },
  'basketball-courts': {
    name: 'Basketball Courts',
    singular: 'Basketball Court',
    icon: '🏀',
    dbFilter: ['basketball'],
    h1: 'Basketball Court Installation Near You',
    heroDesc: 'Find contractors specializing in indoor and outdoor basketball court construction. From backyard half-courts to full-size gyms, get quotes from experienced professionals.',
    costRange: '$15,000 – $75,000',
    timeline: '3–8 weeks',
    faqs: [
      { q: 'How much does a backyard basketball court cost?', a: 'A backyard basketball half-court costs $15,000–$35,000, while a full court runs $30,000–$75,000. Costs vary based on surface type (concrete, asphalt, or modular tiles), size, and accessories like hoops and lighting.' },
      { q: 'What is the best surface for an outdoor basketball court?', a: 'Post-tension concrete with an acrylic coating is the gold standard. Modular tile systems (like Sport Court) offer good performance with easier installation. Standard concrete or asphalt with sport coating is the most affordable option.' },
      { q: 'What size is a regulation basketball court?', a: 'An NBA regulation court is 94 x 50 feet. High school courts are 84 x 50 feet. A standard half-court is 47 x 50 feet, but backyard courts as small as 30 x 30 feet work well for recreational play.' },
      { q: 'How long does basketball court installation take?', a: 'A backyard basketball court takes 3–6 weeks, while a full-size court takes 6–8 weeks. Modular tile installations over existing concrete can be completed in 1–3 days.' },
    ],
  },
  'gym-flooring': {
    name: 'Gym Flooring',
    singular: 'Gym Floor',
    icon: '🏋️',
    dbFilter: ['gym-flooring'],
    h1: 'Gym Flooring Installation Near You',
    heroDesc: 'Find professional gym flooring contractors for fitness centers, school gymnasiums, home gyms, and athletic facilities. Hardwood, rubber, synthetic, and multi-sport options.',
    costRange: '$3 – $20 per sq ft',
    timeline: '2–6 weeks',
    faqs: [
      { q: 'How much does gym flooring cost?', a: 'Gym flooring costs $3–$20 per square foot installed. Rubber gym flooring is $5–$12/sqft, hardwood gym floors are $8–$20/sqft, and synthetic multi-sport flooring is $6–$15/sqft. Total cost depends on gym size and surface type.' },
      { q: 'What type of gym flooring is best?', a: 'Maple hardwood is the gold standard for basketball gyms. Rubber flooring is ideal for weight rooms and fitness centers. Synthetic surfaces like Sport Court and Tarkett offer versatility for multi-sport facilities.' },
      { q: 'How long does gym flooring installation take?', a: 'A standard gymnasium floor installation takes 2–6 weeks depending on the surface type and room preparation. Hardwood floors need additional time for sanding and finishing.' },
      { q: 'How often does a gym floor need refinishing?', a: 'Hardwood gym floors should be screened and recoated annually and fully sanded and refinished every 8–12 years. Rubber and synthetic floors need replacement every 10–20 years depending on usage.' },
    ],
  },
  'running-tracks': {
    name: 'Running Tracks',
    singular: 'Running Track',
    icon: '🏃',
    dbFilter: ['track', 'track-field'],
    h1: 'Running Track Construction Near You',
    heroDesc: 'Connect with certified running track builders for new construction, resurfacing, and repair. Regulation tracks for schools, parks, municipalities, and athletic facilities.',
    costRange: '$200,000 – $1,000,000+',
    timeline: '3–6 months',
    faqs: [
      { q: 'How much does a running track cost?', a: 'A new 400-meter running track costs $200,000–$1,000,000+ depending on the surface type, site preparation, and amenities. Resurfacing an existing track costs $100,000–$400,000. Smaller recreational tracks cost proportionally less.' },
      { q: 'What surface types are available for running tracks?', a: 'Polyurethane (like Mondo) is used at the Olympic level. Latex rubber surfaces are durable and cost-effective. Asphalt with rubber coating is the most affordable option. Each has different performance and maintenance characteristics.' },
      { q: 'How long does track construction take?', a: 'New running track construction takes 3–6 months including site preparation, base construction, and surface installation. Resurfacing takes 4–8 weeks. Weather windows are critical for proper curing.' },
      { q: 'How often should a track be resurfaced?', a: 'Running tracks should be resurfaced every 8–15 years depending on the surface type, usage levels, and maintenance. Regular cleaning and minor repairs can extend the life significantly.' },
    ],
  },
  'artificial-turf': {
    name: 'Artificial Turf',
    singular: 'Artificial Turf Field',
    icon: '⚽',
    dbFilter: ['soccer', 'football', 'baseball'],
    h1: 'Artificial Turf Installation Near You',
    heroDesc: 'Find contractors specializing in synthetic turf installation for soccer fields, football fields, baseball diamonds, and multi-sport facilities. Compare quotes from experienced installers.',
    costRange: '$400,000 – $1,500,000+',
    timeline: '3–6 months',
    faqs: [
      { q: 'How much does artificial turf cost?', a: 'A full-size synthetic turf field costs $400,000–$1,500,000+ depending on size, infill type, and site preparation. Smaller installations like backyard putting greens or batting cages cost $5,000–$50,000.' },
      { q: 'How long does artificial turf last?', a: 'Quality artificial turf lasts 8–12 years with proper maintenance. Some premium systems can last up to 15 years. Factors affecting lifespan include usage level, maintenance frequency, and UV exposure.' },
      { q: 'What maintenance does artificial turf require?', a: 'Regular grooming, infill redistribution, and debris removal keep synthetic turf performing well. Deep cleaning should be done annually. Maintenance costs are significantly lower than natural grass fields.' },
      { q: 'Is artificial turf safe?', a: 'Modern synthetic turf systems are designed with player safety in mind. Shock-absorbing pads, proper infill, and regulated pile heights meet ASTM safety standards. Many systems are also environmentally friendly with organic infills.' },
    ],
  },
};

interface Props {
  params: Promise<{ sport: string }>;
}

async function getVendorsForSport(sportTypes: string[]): Promise<Vendor[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('vendors')
    .select('*')
    .overlaps('sport_types', sportTypes)
    .order('is_featured', { ascending: false })
    .order('tier', { ascending: false })
    .order('rating', { ascending: false })
    .limit(24);
  return data || [];
}

async function getCitiesWithVendors(sportTypes: string[]): Promise<{ name: string; state_code: string; slug: string }[]> {
  const supabase = await createClient();
  // Get unique cities from vendors matching this sport type
  const { data: vendors } = await supabase
    .from('vendors')
    .select('city, state')
    .overlaps('sport_types', sportTypes);

  if (!vendors) return [];

  // Get matching cities
  const cityNames = [...new Set(vendors.map(v => v.city))];
  const { data: cities } = await supabase
    .from('cities')
    .select('name, state_code, slug')
    .in('name', cityNames)
    .order('population', { ascending: false })
    .limit(40);

  return cities || [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sport } = await params;
  const config = SPORT_CONFIG[sport];
  if (!config) return { title: 'Sport Not Found' };

  return {
    title: `${config.h1} | BestSportsSurfaces.com`,
    description: config.heroDesc,
    openGraph: {
      title: `${config.h1} | BestSportsSurfaces.com`,
      description: config.heroDesc,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(SPORT_CONFIG).map((sport) => ({ sport }));
}

export default async function SportPage({ params }: Props) {
  const { sport } = await params;
  const config = SPORT_CONFIG[sport];
  if (!config) notFound();

  const [vendors, cities] = await Promise.all([
    getVendorsForSport(config.dbFilter),
    getCitiesWithVendors(config.dbFilter),
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-6">{config.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            {config.h1}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            {config.heroDesc}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-surface-card border border-border rounded-lg px-6 py-3">
              <div className="text-neon font-bold text-lg">{vendors.length}+</div>
              <div className="text-text-secondary text-sm">Contractors</div>
            </div>
            <div className="bg-surface-card border border-border rounded-lg px-6 py-3">
              <div className="text-neon font-bold text-lg">{config.costRange}</div>
              <div className="text-text-secondary text-sm">Typical Cost</div>
            </div>
            <div className="bg-surface-card border border-border rounded-lg px-6 py-3">
              <div className="text-neon font-bold text-lg">{config.timeline}</div>
              <div className="text-text-secondary text-sm">Timeline</div>
            </div>
          </div>

          {/* Search CTA */}
          <Link
            href={`/search?sport=${config.dbFilter[0]}`}
            className="inline-flex items-center gap-2 bg-neon text-surface px-8 py-3 rounded-lg font-semibold hover:bg-neon/90 transition-colors"
          >
            <Search className="h-5 w-5" />
            Search {config.name} Contractors
          </Link>
        </div>
      </section>

      {/* Vendor Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-8">
          Top {config.name} Contractors
        </h2>
        {vendors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-surface-card border border-border rounded-xl">
            <p className="text-text-secondary text-lg">No contractors found for this sport type yet.</p>
            <p className="text-text-secondary mt-2">Check back soon or <Link href="/search" className="text-neon hover:underline">search all contractors</Link>.</p>
          </div>
        )}
      </section>

      {/* Browse by City */}
      {cities.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {config.name} by City
          </h2>
          <div className="bg-surface-card border border-border rounded-xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/sports/${sport}/${city.slug}-${city.state_code.toLowerCase()}`}
                  className="flex items-center gap-1 text-text-secondary hover:text-neon transition-colors text-sm py-1"
                >
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  {city.name}, {city.state_code}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-text-primary mb-8">
          Frequently Asked Questions About {config.name}
        </h2>
        <div className="space-y-4">
          {config.faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-surface-card border border-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-surface-card/80">
                <h3 className="text-lg font-semibold text-text-primary pr-4">{faq.q}</h3>
                <ChevronRight className="h-5 w-5 text-text-secondary flex-shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
