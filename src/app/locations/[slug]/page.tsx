import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import VendorCard from '@/components/vendor/VendorCard';
import Card from '@/components/ui/Card';
import SearchBar from '@/components/ui/SearchBar';
import MapComponent from '@/components/ui/DynamicMap';
import SchemaOrg from '@/components/seo/SchemaOrg';
import type { City, Vendor } from '@/types';

interface Props {
  params: Promise<{ slug: string }>;
}

async function getCity(slug: string): Promise<City | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('cities')
    .select('*')
    .eq('slug', slug)
    .single();
  return data;
}

async function getCityVendors(city: string, state: string): Promise<Vendor[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('vendors')
    .select('*')
    .eq('city', city)
    .eq('state', state)
    .order('is_featured', { ascending: false })
    .order('tier', { ascending: false })
    .order('rating', { ascending: false })
    .limit(20);
  return data || [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = await getCity(slug);
  if (!city) return { title: 'City Not Found' };

  return {
    title: city.seo_title || `Sports Surface Contractors in ${city.name}, ${city.state_code}`,
    description: city.seo_description || `Find trusted sports surface contractors in ${city.name}, ${city.state_code}. Compare quotes for tennis courts, basketball courts, and more.`,
  };
}

export async function generateStaticParams() {
  try {
    const supabase = createAdminClient();
    const { data: cities } = await supabase.from('cities').select('slug');
    return (cities || []).map((city) => ({ slug: city.slug }));
  } catch {
    return [];
  }
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = await getCity(slug);
  if (!city) notFound();

  const vendors = await getCityVendors(city.name, city.state);

  const mapPins = vendors
    .filter((v) => v.latitude && v.longitude)
    .map((v) => ({
      id: v.id,
      latitude: v.latitude,
      longitude: v.longitude,
      title: v.name,
      tier: v.tier,
      slug: v.slug,
    }));

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${city.name}, ${city.state_code}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.latitude,
      longitude: city.longitude,
    },
  };

  return (
    <>
      <SchemaOrg schema={citySchema} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span>/</span>
            <span>{city.state}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Sports Surface Contractors in {city.name}, {city.state_code}
          </h1>
          <p className="text-gray-300 max-w-2xl mb-6">
            Find trusted contractors for tennis courts, basketball courts, pickleball courts, and other sports surfaces in the {city.name} area.
          </p>
          <div className="max-w-xl">
            <SearchBar size="lg" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Map */}
            {mapPins.length > 0 && (
              <div className="mb-8">
                <MapComponent
                  pins={mapPins}
                  center={{ lat: city.latitude, lng: city.longitude }}
                  zoom={10}
                  className="h-72 md:h-96"
                />
              </div>
            )}

            {/* Vendors */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {vendors.length} Contractor{vendors.length !== 1 ? 's' : ''} in {city.name}
            </h2>

            {vendors.length === 0 ? (
              <Card padding="lg" className="text-center">
                <p className="text-gray-500 mb-4">No contractors listed in {city.name} yet.</p>
                <Link
                  href="/search"
                  className="text-green-600 font-medium hover:underline"
                >
                  Search nearby areas &rarr;
                </Link>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vendors.map((vendor) => (
                  <VendorCard key={vendor.id} vendor={vendor} />
                ))}
              </div>
            )}

            {/* City Description */}
            {city.description && (
              <div className="mt-8">
                <Card padding="lg">
                  <h2 className="text-lg font-bold text-gray-900 mb-3">
                    About Sports Surfaces in {city.name}
                  </h2>
                  <div className="prose text-gray-600" dangerouslySetInnerHTML={{ __html: city.description }} />
                </Card>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              <Card padding="md">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Facts</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">City</dt>
                    <dd className="font-medium text-gray-900">{city.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">State</dt>
                    <dd className="font-medium text-gray-900">{city.state}</dd>
                  </div>
                  {city.population > 0 && (
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Population</dt>
                      <dd className="font-medium text-gray-900">{city.population.toLocaleString()}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Contractors</dt>
                    <dd className="font-medium text-gray-900">{vendors.length}</dd>
                  </div>
                </dl>
              </Card>

              <Card padding="md" className="bg-green-50 border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Get Free Quotes</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Compare prices from top-rated contractors in {city.name}.
                </p>
                <Link
                  href={`/search?zip=&sport=`}
                  className="block text-center bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700"
                >
                  Request Quotes <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </Card>

              <Card padding="md">
                <h3 className="font-semibold text-gray-900 mb-2">Cost Estimator</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Get an instant price range for your sports surface project.
                </p>
                <Link
                  href="/cost-estimator"
                  className="block text-center border border-green-600 text-green-600 py-2 rounded-lg text-sm font-semibold hover:bg-green-50"
                >
                  Estimate Costs
                </Link>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
