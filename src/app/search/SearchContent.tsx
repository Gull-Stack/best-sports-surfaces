'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SlidersHorizontal, List, MapIcon, X } from 'lucide-react';
import VendorCard from '@/components/vendor/VendorCard';
import Pagination from '@/components/ui/Pagination';
import Badge from '@/components/ui/Badge';
import { SPORT_TYPES, SERVICE_TYPES, ITEMS_PER_PAGE } from '@/lib/constants';
import type { Vendor, SearchFilters } from '@/types';

const MapComponent = dynamic(() => import('@/components/ui/Map'), { ssr: false });

interface SearchContentProps {
  initialVendors: Vendor[];
  initialTotal: number;
}

export default function SearchContent({ initialVendors, initialTotal }: SearchContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors);
  const [total, setTotal] = useState(initialTotal);
  const [loading, setLoading] = useState(false);
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

        const response = await fetch(`/api/vendors/search?${params.toString()}`);
        if (!response.ok) throw new Error('Search failed');
        const data = await response.json();
        setVendors(data.vendors);
        setTotal(data.total);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if filters change after initial load
    if (JSON.stringify(vendors) !== JSON.stringify(initialVendors)) {
      fetchVendors();
    }
  }, [filters, initialVendors, vendors]);

  const clearFilter = (key: string) => updateFilter(key, '');
  const clearAllFilters = () => router.push('/search');

  const activeFilters = Object.entries(filters).filter(([key, value]) => 
    key !== 'sort' && key !== 'page' && value !== '' && value !== 0 && value !== false
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          Find Sports Surface Contractors Near You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              value={filters.zip}
              onChange={(e) => updateFilter('zip', e.target.value)}
              placeholder="Enter ZIP code"
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">
              Sport Type
            </label>
            <select
              value={filters.sportType}
              onChange={(e) => updateFilter('sport', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent"
            >
              <option value="">All Sports</option>
              {SPORT_TYPES.map((sport) => (
                <option key={sport.value} value={sport.value}>
                  {sport.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">
              Service Type
            </label>
            <select
              value={filters.serviceType}
              onChange={(e) => updateFilter('service', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent"
            >
              <option value="">All Services</option>
              {SERVICE_TYPES.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-text-secondary">
          {loading ? 'Searching...' : total > 0 ? `${total} contractors found` : 'Enter your location to find contractors'}
        </p>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="bg-surface-card rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Search Radius
              </label>
              <select
                value={filters.radius}
                onChange={(e) => updateFilter('radius', Number(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded-lg"
              >
                <option value={25}>25 miles</option>
                <option value={50}>50 miles</option>
                <option value={100}>100 miles</option>
                <option value={200}>200 miles</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Minimum Rating
              </label>
              <select
                value={filters.minRating}
                onChange={(e) => updateFilter('rating', Number(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded-lg"
              >
                <option value={0}>Any Rating</option>
                <option value={3}>3+ Stars</option>
                <option value={4}>4+ Stars</option>
                <option value={4.5}>4.5+ Stars</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Sort By
              </label>
              <select
                value={filters.sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg"
              >
                <option value="relevance">Relevance</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="distance">Nearest</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.verified}
                  onChange={(e) => updateFilter('verified', e.target.checked)}
                  className="rounded border-border text-neon focus:ring-neon"
                />
                <span className="ml-2 text-sm">Verified Only</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-surface-card border border-border rounded-lg hover:bg-surface-hover"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFilters.length > 0 && (
            <Badge variant="blue" className="ml-1">
              {activeFilters.length}
            </Badge>
          )}
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => setView('list')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              view === 'list' 
                ? 'bg-neon text-white' 
                : 'bg-surface-card border border-border hover:bg-surface-hover'
            }`}
          >
            <List className="h-4 w-4" />
            List
          </button>
          <button
            onClick={() => setView('map')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              view === 'map' 
                ? 'bg-neon text-white' 
                : 'bg-surface-card border border-border hover:bg-surface-hover'
            }`}
          >
            <MapIcon className="h-4 w-4" />
            Map
          </button>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {activeFilters.map(([key, value]) => (
            <button
              key={key}
              onClick={() => clearFilter(key)}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-300"
            >
              {key}: {String(value)}
              <X className="h-3 w-3" />
            </button>
          ))}
          <button
            onClick={clearAllFilters}
            className="text-sm text-neon hover:underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Content */}
      {view === 'list' ? (
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-pulse">Searching...</div>
            </div>
          ) : vendors.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-text-secondary">No contractors found matching your criteria.</p>
              <button
                onClick={clearAllFilters}
                className="text-neon hover:underline mt-2"
              >
                Clear filters to see all contractors
              </button>
            </div>
          ) : (
            vendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))
          )}

          {total > ITEMS_PER_PAGE && (
            <Pagination
              currentPage={filters.page}
              totalPages={Math.ceil(total / ITEMS_PER_PAGE)}
              onPageChange={(page) => updateFilter('page', page)}
            />
          )}
        </div>
      ) : (
        <div className="h-[600px] rounded-lg overflow-hidden border-2 border-dashed border-border flex items-center justify-center">
          <p className="text-text-secondary">Map view coming soon</p>
        </div>
      )}
    </div>
  );
}