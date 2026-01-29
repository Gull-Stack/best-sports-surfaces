import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { getDistanceMiles } from '@/lib/utils';

async function geocodeZip(zip: string): Promise<{ lat: number; lng: number } | null> {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(zip)}.json?country=us&types=postcode&access_token=${token}`
    );
    const data = await res.json();
    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      return { lat, lng };
    }
  } catch {
    // Fall through to null
  }
  return null;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sport = searchParams.get('sport');
  const service = searchParams.get('service');
  const rating = Number(searchParams.get('rating')) || 0;
  const verified = searchParams.get('verified') === 'true';
  const sort = searchParams.get('sort') || 'relevance';
  const page = Number(searchParams.get('page')) || 1;
  const limit = Math.min(Number(searchParams.get('limit')) || 12, 50);
  const zip = searchParams.get('zip') || '';
  const radius = Number(searchParams.get('radius')) || 50;
  const state = searchParams.get('state') || '';

  try {
    const supabase = createAdminClient();
    let query = supabase.from('vendors').select('*', { count: 'exact' });

    if (sport) {
      query = query.contains('sport_types', [sport]);
    }
    if (service) {
      query = query.contains('service_types', [service]);
    }
    if (rating > 0) {
      query = query.gte('rating', rating);
    }
    if (verified) {
      query = query.eq('is_verified', true);
    }
    if (state) {
      query = query.eq('state', state);
    }

    // Sort: paid/featured first, then by chosen criteria
    if (sort === 'rating') {
      query = query.order('tier', { ascending: false }).order('rating', { ascending: false });
    } else if (sort === 'distance') {
      query = query.order('tier', { ascending: false }).order('name');
    } else {
      // relevance: featured first, then paid, then free
      query = query.order('is_featured', { ascending: false }).order('tier', { ascending: false }).order('rating', { ascending: false });
    }

    // When filtering by ZIP, fetch all matching vendors then filter by distance client-side
    // since Supabase doesn't have PostGIS for distance queries
    if (zip) {
      const coords = await geocodeZip(zip);
      if (coords) {
        // Remove pagination from query — we'll paginate after distance filtering
        const { data: allVendors, error } = await query;

        if (error) {
          return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Filter by distance and add distance to each vendor
        const vendorsWithDistance = (allVendors || [])
          .filter((v) => v.latitude && v.longitude)
          .map((v) => ({
            ...v,
            distance: getDistanceMiles(coords.lat, coords.lng, v.latitude, v.longitude),
          }))
          .filter((v) => v.distance <= radius);

        // Sort by distance if requested
        if (sort === 'distance') {
          vendorsWithDistance.sort((a, b) => a.distance - b.distance);
        }

        const total = vendorsWithDistance.length;
        const offset = (page - 1) * limit;
        const paginatedVendors = vendorsWithDistance.slice(offset, offset + limit);

        return NextResponse.json({
          vendors: paginatedVendors,
          total,
          page,
          totalPages: Math.ceil(total / limit),
        });
      }
    }

    // No ZIP filter — use standard pagination
    const offset = (page - 1) * limit;
    query = query.range(offset, offset + limit - 1);

    const { data: vendors, count, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      vendors: vendors || [],
      total: count || 0,
      page,
      totalPages: Math.ceil((count || 0) / limit),
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
