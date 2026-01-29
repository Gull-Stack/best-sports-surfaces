import Link from 'next/link';
import { Search, Shield, DollarSign, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import MapComponent from '@/components/ui/DynamicMap';
import SearchBar from '@/components/ui/SearchBar';
import { SPORT_TYPES, SITE_NAME } from '@/lib/constants';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { createClient } from '@/lib/supabase/server';
import type { MapPin } from '@/components/ui/Map';

const howItWorks = [
  { icon: Search, title: 'Search', description: 'Enter your ZIP code and sport type to find local contractors.' },
  { icon: Users, title: 'Compare', description: 'Browse profiles, read reviews, and compare quotes.' },
  { icon: CheckCircle, title: 'Connect', description: 'Request free quotes and hire the best contractor for your project.' },
];

export default async function HomePage() {
  // Fetch vendors for map pins
  const supabase = await createClient();
  const { data: vendors } = await supabase
    .from('vendors')
    .select('id, latitude, longitude, name, tier, slug');

  const mapPins: MapPin[] = (vendors || [])
    .filter((v: { latitude: number | null; longitude: number | null }) => v.latitude && v.longitude)
    .map((v: { id: string; latitude: number; longitude: number; name: string; tier: 'free' | 'paid' | 'featured'; slug: string }) => ({
      id: v.id,
      latitude: v.latitude,
      longitude: v.longitude,
      title: v.name,
      tier: v.tier,
      slug: v.slug,
    }));

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    description: 'Find trusted sports surface contractors near you.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: '/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <SchemaOrg schema={websiteSchema} />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 md:py-36"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Build Your Perfect Sports Surface
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connect with trusted contractors for tennis courts, basketball courts, pickleball courts, and more. Get free quotes today.
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar size="lg" className="bg-white/10 backdrop-blur-sm rounded-xl p-3" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cost-estimator"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-hover transition-colors"
            >
              Build Your Court <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Find Contractors
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-300">
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-parchment" /> Free Quotes</span>
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-parchment" /> Verified Contractors</span>
            <span className="flex items-center gap-1"><DollarSign className="h-4 w-4 text-parchment" /> No Obligation</span>
          </div>
        </div>
      </section>

      {/* Sport Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Sport Type</h2>
            <p className="text-gray-600 mt-2">Find specialized contractors for every type of sports surface.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SPORT_TYPES.map((sport) => (
              <Link
                key={sport.value}
                href={`/search?sport=${sport.value}`}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md hover:border-brand border border-gray-200 transition-all group"
              >
                <span className="text-3xl block mb-2">{sport.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-brand">{sport.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Contractors Nationwide</h2>
            <p className="text-gray-600 mt-2">We have trusted sports surface contractors across the United States.</p>
          </div>
          <MapComponent pins={mapPins} className="h-96 md:h-[500px]" />
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500" /> Free Listings</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500" /> Premium</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-500" /> Featured</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-600 mt-2">Finding the right contractor is easy with {SITE_NAME}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-brand" />
                </div>
                <div className="text-sm font-medium text-brand mb-1">Step {i + 1}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimator CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Card padding="lg" className="bg-gradient-to-r from-brand to-brand-hover border-none">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold">How Much Does It Cost?</h2>
                <p className="text-parchment mt-2 max-w-lg">
                  Use our free cost estimator to get an instant price range for your sports surface project.
                </p>
              </div>
              <Link
                href="/cost-estimator"
                className="inline-flex items-center gap-2 bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-brand-light transition-colors flex-shrink-0"
              >
                Try Cost Estimator <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Contractor CTA */}
      <section className="py-16 bg-plum text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a Sports Surface Contractor?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join {SITE_NAME} to reach thousands of potential customers. List your business for free or upgrade to Premium for priority placement and direct leads.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/signup"
              className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-hover transition-colors"
            >
              List Your Business Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-parchment/30 text-parchment px-6 py-3 rounded-lg font-semibold hover:bg-plum-light transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
