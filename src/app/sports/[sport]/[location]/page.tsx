import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight, ChevronRight, Search, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import VendorCard from '@/components/vendor/VendorCard';
import type { Vendor } from '@/types';

// Sport configuration mapping
const SPORT_CONFIG: Record<string, {
  name: string;
  singular: string;
  icon: string;
  dbFilter: string[];
  actionWord: string;
  costLow: string;
  costHigh: string;
  timelineRange: string;
  materials: string[];
  faqs: (city: string, state: string) => { q: string; a: string }[];
}> = {
  'pickleball-courts': {
    name: 'Pickleball Courts',
    singular: 'Pickleball Court',
    icon: '🏓',
    dbFilter: ['pickleball'],
    actionWord: 'Builders',
    costLow: '$20,000',
    costHigh: '$60,000',
    timelineRange: '4–8 weeks',
    materials: ['Acrylic Hard Court', 'Cushioned Acrylic', 'Modular Tile', 'Concrete with Coating'],
    faqs: (city, state) => [
      { q: `How much does a pickleball court cost in ${city}, ${state}?`, a: `Pickleball court construction in ${city} typically costs between $20,000 and $60,000 for a new court. Costs vary based on site preparation, surface material, and local labor rates. Converting an existing tennis court is more affordable at $5,000–$15,000.` },
      { q: `How many pickleball courts can fit on a tennis court in ${city}?`, a: `A standard tennis court in ${city} can accommodate 2–4 pickleball courts depending on the layout. Many ${city} facilities are converting underused tennis courts to meet the growing demand for pickleball.` },
      { q: `Do I need a permit to build a pickleball court in ${city}, ${state}?`, a: `Most ${city}, ${state} jurisdictions require building permits for new court construction due to concrete work and drainage requirements. Your contractor should handle the permitting process as part of the project.` },
      { q: `What is the best pickleball court surface for ${city}'s climate?`, a: `In ${city}, ${state}, acrylic hard court surfaces with UV-resistant coatings are the most popular choice. They handle the local weather conditions well, provide excellent ball bounce, and require minimal maintenance.` },
    ],
  },
  'tennis-courts': {
    name: 'Tennis Courts',
    singular: 'Tennis Court',
    icon: '🎾',
    dbFilter: ['tennis'],
    actionWord: 'Contractors',
    costLow: '$50,000',
    costHigh: '$150,000',
    timelineRange: '6–12 weeks',
    materials: ['Acrylic Hard Court', 'Har-Tru Clay', 'Post-Tension Concrete', 'Cushioned Surface'],
    faqs: (city, state) => [
      { q: `How much does it cost to build a tennis court in ${city}, ${state}?`, a: `Tennis court construction in ${city} ranges from $50,000 to $150,000 depending on surface type and site conditions. Hard courts are the most affordable, while clay courts and post-tension concrete cost more but offer superior play quality.` },
      { q: `How often should tennis courts be resurfaced in ${city}?`, a: `Tennis courts in ${city}, ${state} should be resurfaced every 4–8 years. Local climate factors like UV exposure, freeze-thaw cycles, and rainfall can affect this timeline. Annual maintenance extends court life significantly.` },
      { q: `What tennis court surface is best for ${city}'s climate?`, a: `The best surface depends on ${city}'s specific weather patterns. Hard courts with acrylic coating are the most versatile and lowest maintenance. Har-Tru clay courts are popular in warmer climates for their softer play surface.` },
      { q: `Can I add pickleball lines to my tennis court in ${city}?`, a: `Yes! Many ${city} tennis court contractors can add pickleball lines to existing courts. This dual-line approach is popular for maximizing court usage. Dedicated pickleball conversions with portable nets are also available.` },
    ],
  },
  'basketball-courts': {
    name: 'Basketball Courts',
    singular: 'Basketball Court',
    icon: '🏀',
    dbFilter: ['basketball'],
    actionWord: 'Contractors',
    costLow: '$15,000',
    costHigh: '$75,000',
    timelineRange: '3–8 weeks',
    materials: ['Concrete with Coating', 'Modular Sport Tiles', 'Asphalt with Acrylic', 'Rubberized Surface'],
    faqs: (city, state) => [
      { q: `How much does a basketball court cost in ${city}, ${state}?`, a: `A backyard basketball court in ${city} costs $15,000–$35,000 for a half-court and $30,000–$75,000 for a full court. Costs vary based on surface type, excavation needs, and accessories like adjustable hoops and lighting.` },
      { q: `What size basketball court fits in a ${city} backyard?`, a: `Most ${city} backyards can accommodate a half-court (47 x 50 ft) or smaller practice area (30 x 30 ft). Your contractor will assess your property and recommend the best size and layout.` },
      { q: `What is the best outdoor basketball court surface for ${city}?`, a: `For ${city}, ${state}, post-tension concrete with acrylic sport coating is the most durable option. Modular tile systems like Sport Court or VersaCourt offer great playability and easier installation over existing surfaces.` },
      { q: `Do I need HOA approval for a basketball court in ${city}?`, a: `Many ${city} neighborhoods with HOAs require approval for basketball court construction. Check your HOA guidelines before starting. Your contractor can help provide plans and specifications for the approval process.` },
    ],
  },
  'gym-flooring': {
    name: 'Gym Flooring',
    singular: 'Gym Floor',
    icon: '🏋️',
    dbFilter: ['gym-flooring'],
    actionWord: 'Installers',
    costLow: '$3/sqft',
    costHigh: '$20/sqft',
    timelineRange: '2–6 weeks',
    materials: ['Maple Hardwood', 'Rubber Flooring', 'Synthetic Multi-Sport', 'Vinyl Sport Surface'],
    faqs: (city, state) => [
      { q: `How much does gym flooring cost in ${city}, ${state}?`, a: `Gym flooring in ${city} costs $3–$20 per square foot installed. Rubber flooring is $5–$12/sqft, hardwood floors run $8–$20/sqft, and synthetic sport surfaces are $6–$15/sqft. Total cost depends on gym size and material choice.` },
      { q: `What type of gym flooring is best for a ${city} school?`, a: `For ${city} school gyms, maple hardwood is the gold standard for basketball. Multi-sport synthetic surfaces work well for varied activities. Rubber flooring is ideal for weight rooms and fitness areas.` },
      { q: `How long does gym flooring last in ${city}?`, a: `Properly maintained hardwood gym floors in ${city} last 50+ years with periodic refinishing. Rubber flooring lasts 10–20 years, and synthetic sport surfaces last 8–15 years depending on usage.` },
    ],
  },
  'running-tracks': {
    name: 'Running Tracks',
    singular: 'Running Track',
    icon: '🏃',
    dbFilter: ['track', 'track-field'],
    actionWord: 'Builders',
    costLow: '$200,000',
    costHigh: '$1,000,000+',
    timelineRange: '3–6 months',
    materials: ['Polyurethane (Mondo)', 'Latex Rubber', 'Full-Pour Urethane', 'Spray-Coat System'],
    faqs: (city, state) => [
      { q: `How much does a running track cost in ${city}, ${state}?`, a: `A new 400-meter running track in ${city} costs $200,000–$1,000,000+ depending on surface type and site conditions. Resurfacing an existing track costs $100,000–$400,000. Costs vary based on local labor rates and material selection.` },
      { q: `What surface type is best for a running track in ${city}?`, a: `For ${city}, ${state}, polyurethane surfaces like Mondo provide the best performance but cost more. Latex rubber is a durable, cost-effective option. Your certified track builder will recommend the best surface for your budget and climate.` },
      { q: `How long does track construction take in ${city}?`, a: `New track construction in ${city} takes 3–6 months from groundbreaking to completion. The timeline depends on weather windows, as proper curing conditions are critical for track surfaces.` },
    ],
  },
  'artificial-turf': {
    name: 'Artificial Turf',
    singular: 'Artificial Turf Field',
    icon: '⚽',
    dbFilter: ['soccer', 'football', 'baseball'],
    actionWord: 'Installers',
    costLow: '$400,000',
    costHigh: '$1,500,000+',
    timelineRange: '3–6 months',
    materials: ['Nylon Turf', 'Polyethylene Turf', 'Polypropylene Turf', 'Hybrid Turf System'],
    faqs: (city, state) => [
      { q: `How much does artificial turf cost in ${city}, ${state}?`, a: `A full-size synthetic turf field in ${city} costs $400,000–$1,500,000+ depending on field size, infill type, and site preparation. Smaller installations like backyard areas cost $5,000–$50,000.` },
      { q: `How long does artificial turf last in ${city}'s climate?`, a: `Quality synthetic turf in ${city}, ${state} lasts 8–12 years with proper maintenance. UV exposure and usage levels affect lifespan. Some premium systems designed for ${city}'s climate can last up to 15 years.` },
      { q: `Is artificial turf worth it for ${city} sports facilities?`, a: `For ${city} sports facilities with heavy usage, artificial turf can be very cost-effective. It eliminates irrigation, mowing, and seasonal maintenance while allowing year-round play regardless of weather conditions.` },
    ],
  },
};

interface Props {
  params: Promise<{ sport: string; location: string }>;
}

function parseLocation(location: string): { citySlug: string; stateCode: string } | null {
  // Parse "city-name-st" format (e.g., "denver-co", "new-york-ny", "salt-lake-city-ut")
  const parts = location.split('-');
  if (parts.length < 2) return null;
  const stateCode = parts[parts.length - 1].toUpperCase();
  if (stateCode.length !== 2) return null;
  const citySlug = parts.slice(0, -1).join('-');
  return { citySlug, stateCode };
}

async function getCityBySlugAndState(citySlug: string, stateCode: string) {
  const supabase = await createClient();
  // Try exact slug match first
  const { data } = await supabase
    .from('cities')
    .select('*')
    .eq('slug', citySlug)
    .eq('state_code', stateCode)
    .single();
  return data;
}

async function getVendorsForSportInArea(sportTypes: string[], cityName: string, stateCode: string): Promise<Vendor[]> {
  const supabase = await createClient();
  
  // Get vendors in exact city
  const { data: exactMatch } = await supabase
    .from('vendors')
    .select('*')
    .eq('state', stateCode)
    .overlaps('sport_types', sportTypes)
    .order('is_featured', { ascending: false })
    .order('tier', { ascending: false })
    .order('rating', { ascending: false })
    .limit(24);

  return exactMatch || [];
}

async function getNearbyLocations(sport: string, stateCode: string, currentSlug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from('cities')
    .select('name, slug, state_code')
    .eq('state_code', stateCode)
    .neq('slug', currentSlug)
    .order('population', { ascending: false })
    .limit(10);
  return data || [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sport, location } = await params;
  const config = SPORT_CONFIG[sport];
  if (!config) return { title: 'Not Found' };

  const parsed = parseLocation(location);
  if (!parsed) return { title: 'Not Found' };

  const city = await getCityBySlugAndState(parsed.citySlug, parsed.stateCode);
  if (!city) {
    const cityName = parsed.citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `${config.name} ${config.actionWord} in ${cityName}, ${parsed.stateCode} | BestSportsSurfaces.com`,
      description: `Find top-rated ${config.name.toLowerCase()} ${config.actionWord.toLowerCase()} in ${cityName}, ${parsed.stateCode}. Compare quotes, read reviews, and hire the best contractor for your project.`,
      robots: { index: false, follow: true }, // noindex until pages have unique content
    };
  }

  return {
    title: `${config.name} ${config.actionWord} in ${city.name}, ${city.state_code} | BestSportsSurfaces.com`,
    description: `Find top-rated ${config.name.toLowerCase()} ${config.actionWord.toLowerCase()} in ${city.name}, ${city.state_code}. Compare quotes, read reviews, and hire the best contractor for your project.`,
    robots: { index: false, follow: true }, // noindex until pages have unique content
    openGraph: {
      title: `${config.name} ${config.actionWord} in ${city.name}, ${city.state_code}`,
      description: `Find ${config.name.toLowerCase()} professionals in ${city.name}, ${city.state_code}. Get free quotes today.`,
    },
  };
}

export async function generateStaticParams() {
  try {
    const { createAdminClient } = await import('@/lib/supabase/admin');
    const supabase = createAdminClient();
    
    // Get top cities by population
    const { data: cities } = await supabase
      .from('cities')
      .select('slug, state_code')
      .order('population', { ascending: false })
      .limit(50);

    if (!cities) return [];

    const sports = Object.keys(SPORT_CONFIG);
    const params: { sport: string; location: string }[] = [];

    for (const sport of sports) {
      for (const city of cities) {
        params.push({
          sport,
          location: `${city.slug}-${city.state_code.toLowerCase()}`,
        });
      }
    }

    return params;
  } catch {
    return [];
  }
}

export default async function SportLocationPage({ params }: Props) {
  const { sport, location } = await params;
  const config = SPORT_CONFIG[sport];
  if (!config) notFound();

  const parsed = parseLocation(location);
  if (!parsed) notFound();

  const city = await getCityBySlugAndState(parsed.citySlug, parsed.stateCode);
  
  // Generate city name from slug if no DB record
  const cityName = city?.name || parsed.citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const stateCode = city?.state_code || parsed.stateCode;

  const [vendors, nearbyLocations] = await Promise.all([
    getVendorsForSportInArea(config.dbFilter, cityName, stateCode),
    getNearbyLocations(sport, stateCode, parsed.citySlug),
  ]);

  const faqs = config.faqs(cityName, stateCode);

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <ol className="flex items-center gap-2 text-sm text-text-secondary">
          <li><Link href="/" className="hover:text-neon">Home</Link></li>
          <li>/</li>
          <li><Link href="/sports" className="hover:text-neon">Sports</Link></li>
          <li>/</li>
          <li><Link href={`/sports/${sport}`} className="hover:text-neon">{config.name}</Link></li>
          <li>/</li>
          <li className="text-text-primary">{cityName}, {stateCode}</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-5xl mb-4">{config.icon}</div>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            {config.singular} {config.actionWord} in{' '}
            <span className="text-neon">{cityName}, {stateCode}</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            Find the best {config.name.toLowerCase()} {config.actionWord.toLowerCase()} serving {cityName}, {stateCode}. 
            Compare quotes, check credentials, and hire a trusted professional for your {config.singular.toLowerCase()} project.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href={`/search?sport=${config.dbFilter[0]}&location=${cityName}`}
              className="inline-flex items-center gap-2 bg-neon text-surface px-6 py-3 rounded-lg font-semibold hover:bg-neon/90 transition-colors"
            >
              <Search className="h-5 w-5" />
              Search Contractors
            </Link>
            <Link
              href={`/locations/${parsed.citySlug}`}
              className="inline-flex items-center gap-2 border border-border text-text-primary px-6 py-3 rounded-lg font-semibold hover:border-neon/40 transition-colors"
            >
              <MapPin className="h-5 w-5" />
              All Sports in {cityName}
            </Link>
          </div>
        </div>
      </section>

      {/* Cost & Info Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-card border border-border rounded-xl p-6 text-center">
            <DollarSign className="h-8 w-8 text-neon mx-auto mb-3" />
            <div className="text-sm text-text-secondary mb-1">Typical Cost Range</div>
            <div className="text-xl font-bold text-text-primary">{config.costLow} – {config.costHigh}</div>
          </div>
          <div className="bg-surface-card border border-border rounded-xl p-6 text-center">
            <Clock className="h-8 w-8 text-neon mx-auto mb-3" />
            <div className="text-sm text-text-secondary mb-1">Project Timeline</div>
            <div className="text-xl font-bold text-text-primary">{config.timelineRange}</div>
          </div>
          <div className="bg-surface-card border border-border rounded-xl p-6 text-center">
            <CheckCircle className="h-8 w-8 text-neon mx-auto mb-3" />
            <div className="text-sm text-text-secondary mb-1">Contractors in {stateCode}</div>
            <div className="text-xl font-bold text-text-primary">{vendors.length}+ Found</div>
          </div>
        </div>
      </section>

      {/* Surface Materials */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-surface-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            Popular {config.singular} Materials in {cityName}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {config.materials.map((material) => (
              <div key={material} className="flex items-center gap-2 text-text-secondary text-sm">
                <CheckCircle className="h-4 w-4 text-neon flex-shrink-0" />
                {material}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          {config.name} {config.actionWord} Serving {cityName}, {stateCode}
        </h2>
        <p className="text-text-secondary mb-8">
          These contractors serve the {cityName} area and specialize in {config.name.toLowerCase()}.
        </p>
        {vendors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-surface-card border border-border rounded-xl">
            <p className="text-text-secondary text-lg mb-2">
              No {config.name.toLowerCase()} contractors found in {cityName} yet.
            </p>
            <p className="text-text-secondary">
              <Link href="/search" className="text-neon hover:underline">Search all contractors</Link> or check nearby cities below.
            </p>
          </div>
        )}
      </section>

      {/* Nearby Locations */}
      {nearbyLocations.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            {config.name} in Nearby {stateCode} Cities
          </h2>
          <div className="bg-surface-card border border-border rounded-xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {nearbyLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/sports/${sport}/${loc.slug}-${loc.state_code.toLowerCase()}`}
                  className="flex items-center gap-1 text-text-secondary hover:text-neon transition-colors text-sm py-1"
                >
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  {loc.name}, {loc.state_code}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-text-primary mb-8">
          {config.name} FAQ for {cityName}, {stateCode}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-surface-card border border-border rounded-xl overflow-hidden"
              open={i === 0}
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

      {/* SEO Internal Links */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="bg-surface-card border border-border rounded-xl p-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            More Sports Surfaces in {cityName}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(SPORT_CONFIG)
              .filter(([key]) => key !== sport)
              .map(([key, cfg]) => (
                <Link
                  key={key}
                  href={`/sports/${key}/${parsed.citySlug}-${stateCode.toLowerCase()}`}
                  className="flex items-center gap-2 text-text-secondary hover:text-neon transition-colors text-sm py-2"
                >
                  <span>{cfg.icon}</span>
                  {cfg.name} in {cityName}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
