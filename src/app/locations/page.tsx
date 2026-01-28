import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import type { City } from '@/types';

export const metadata: Metadata = {
  title: 'Sports Surface Contractors by City',
  description: 'Find sports surface contractors in cities across the United States. Browse our directory by location.',
};

async function getCities(): Promise<City[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('cities')
    .select('*')
    .order('state', { ascending: true })
    .order('name', { ascending: true });
  return data || [];
}

export default async function LocationsPage() {
  const cities = await getCities();

  const citiesByState: Record<string, City[]> = {};
  cities.forEach((city) => {
    if (!citiesByState[city.state]) citiesByState[city.state] = [];
    citiesByState[city.state].push(city);
  });

  const states = Object.keys(citiesByState).sort();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Sports Surface Contractors by City</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Browse sports surface contractors in {cities.length} cities across the United States.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {states.map((state) => (
          <div key={state}>
            <h2 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">{state}</h2>
            <ul className="space-y-1.5">
              {citiesByState[state].map((city) => (
                <li key={city.id}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                    {city.name}, {city.state_code}
                    {city.population > 0 && (
                      <span className="text-gray-400 text-xs ml-auto">
                        Pop. {(city.population / 1000).toFixed(0)}K
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {cities.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No cities available yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
