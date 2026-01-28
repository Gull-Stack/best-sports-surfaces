import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sport = searchParams.get('sport');
  const service = searchParams.get('service');
  const rating = Number(searchParams.get('rating')) || 0;
  const verified = searchParams.get('verified') === 'true';
  const sort = searchParams.get('sort') || 'relevance';
  const page = Number(searchParams.get('page')) || 1;
  const limit = Math.min(Number(searchParams.get('limit')) || 12, 50);
  const offset = (page - 1) * limit;

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

    // Sort: paid/featured first, then by chosen criteria
    if (sort === 'rating') {
      query = query.order('tier', { ascending: false }).order('rating', { ascending: false });
    } else if (sort === 'distance') {
      query = query.order('tier', { ascending: false }).order('name');
    } else {
      // relevance: featured first, then paid, then free
      query = query.order('is_featured', { ascending: false }).order('tier', { ascending: false }).order('rating', { ascending: false });
    }

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
