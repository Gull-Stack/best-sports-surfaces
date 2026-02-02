'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SlidersHorizontal, List, MapIcon, X } from 'lucide-react';
import VendorCard from '@/components/vendor/VendorCard';
import Pagination from '@/components/ui/Pagination';
import Badge from '@/components/ui/Badge';
import { SPORT_TYPES, SERVICE_TYPES, ITEMS_PER_PAGE } from '@/lib/constants';
import type { Vendor, SearchFilters } from '@/types';

const MapComponent = dynamic(() => import('@/components/ui/Map'), { ssr: false });

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);

  const filters: SearchFilters = {
    query: searchParams.get('q') || '',
    zip: searchParams.get('zip') || '',
    sportType: (searchParams.get('sport') as SearchFilters['sportType']) || '',
    serviceType: (searchParams.get('service') as SearchFilters['serviceType']) || '',
    radius: Number(searchParams.get('radius')) || 50,
    minRating: Number(searchParams.get('rating')) || 0,
    verified: searchParams.get('verified') === 'true',
    sort: (searchParams.get('sort') as SearchFilters['sort']) || 'relevance',
    page: Number(searchParams.get('page')) || 1,
  };

  const updateFilter = useCallback((key: string, value: string | number | boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === '' || value === 0 || value === false) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }
    if (key !== 'page') params.delete('page');
    router.push(`/search?${params.toString()}`);
  }, [searchParams, router]);

  useEffect(() => {
    const fetchVendors = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (filters.zip) params.set('zip', filters.zip);
        if (filters.sportType) params.set('sport', filters.sportType);
        if (filters.serviceType) params.set('service', filters.serviceType);
        if (filters.radius) params.set('radius', String(filters.radius));
        if (filters.minRating) params.set('rating', String(filters.minRating));
        if (filters.verified) params.set('verified', 'true');
        params.set('sort', filters.sort);
        params.set('page', String(filters.page));
        params.set('limit', String(ITEMS_PER_PAGE));

        const res = await fetch(`/api/vendors/search?${params.toString()}`);
        const data = await res.json();
        setVendors(data.vendors || []);
        setTotal(data.total || 0);
      } catch {
        setVendors([]);
      } finally {
        setLoading(false);
      }
    };
    fetchVendors();
  }, [searchParams]);

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  const activeFilters = [
    filters.zip && `ZIP: ${filters.zip}`,
    filters.sportType && SPORT_TYPES.find(s => s.value === filters.sportType)?.label,
    filters.serviceType && SERVICE_TYPES.find(s => s.value === filters.serviceType)?.label,
    filters.verified && 'Verified Only',
    filters.minRating > 0 && `${filters.minRating}+ Stars`,
  ].filter(Boolean);

  const mapPins = vendors.map(v => ({
    id: v.id,
    latitude: v.latitude,
    longitude: v.longitude,
    title: v.name,
    tier: v.tier,
    slug: v.slug,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Find Sports Surface Contractors</h1>
          <p className="text-text-secondary mt-1">{total} contractors found</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-1 px-3 py-2 border border-border rounded-lg text-sm text-text-secondary"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <div className="flex border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setView('list')}
              className={`px-3 py-2 text-sm ${view === 'list' ? 'bg-neon text-surface' : 'bg-surface-card text-text-secondary'}`}
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView('map')}
              className={`px-3 py-2 text-sm ${view === 'map' ? 'bg-neon text-surface' : 'bg-surface-card text-text-secondary'}`}
            >
              <MapIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {activeFilters.map((f) => (
            <Badge key={f as string} variant="green">{f as string}</Badge>
          ))}
          <button
            onClick={() => router.push('/search')}
            className="text-sm text-text-muted hover:text-text-primary flex items-center gap-1"
          >
            <X className="h-3 w-3" /> Clear all
          </button>
        </div>
      )}

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className={`w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-surface-card border border-border rounded-xl p-4 space-y-5 sticky top-20">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">ZIP Code</label>
              <input
                type="text"
                placeholder="Enter ZIP code"
                defaultValue={filters.zip}
                onBlur={(e) => updateFilter('zip', e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') updateFilter('zip', (e.target as HTMLInputElement).value); }}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm text-text-primary placeholder-text-muted bg-surface-raised"
                maxLength={5}
                pattern="[0-9]*"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Sport Type</label>
              <select
                value={filters.sportType}
                onChange={(e) => updateFilter('sport', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm text-text-primary bg-surface-raised"
              >
                <option value="">All Sports</option>
                {SPORT_TYPES.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Service Type</label>
              <select
                value={filters.serviceType}
                onChange={(e) => updateFilter('service', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm text-text-primary bg-surface-raised"
              >
                <option value="">All Services</option>
                {SERVICE_TYPES.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Distance (miles)</label>
              <select
                value={filters.radius}
                onChange={(e) => updateFilter('radius', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm text-text-primary bg-surface-raised"
              >
                <option value="25">25 miles</option>
                <option value="50">50 miles</option>
                <option value="100">100 miles</option>
                <option value="200">200 miles</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Minimum Rating</label>
              <select
                value={filters.minRating}
                onChange={(e) => updateFilter('rating', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm text-text-primary bg-surface-raised"
              >
                <option value="0">Any Rating</option>
                <option value="3">3+ Stars</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.verified}
                  onChange={(e) => updateFilter('verified', e.target.checked)}
                  className="rounded border-border text-neon focus:ring-neon bg-surface-raised"
                />
                Verified Only
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Sort By</label>
              <select
                value={filters.sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm text-text-primary bg-surface-raised"
              >
                <option value="relevance">Relevance</option>
                <option value="rating">Highest Rated</option>
                <option value="distance">Nearest</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div className="flex-1">
          {view === 'map' && (
            <div className="mb-6">
              <MapComponent pins={mapPins} className="h-96" />
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white border rounded-xl p-5 animate-pulse">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : vendors.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No contractors found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search filters or expanding your search area.</p>
              <button
                onClick={() => router.push('/search')}
                className="text-brand font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vendors.map((vendor) => (
                  <VendorCard key={vendor.id} vendor={vendor} />
                ))}
              </div>
              {totalPages > 1 && (
                <div className="mt-8">
                  <Pagination
                    currentPage={filters.page}
                    totalPages={totalPages}
                    onPageChange={(page) => updateFilter('page', page)}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
