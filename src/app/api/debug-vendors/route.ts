import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const supabase = await createClient();
  
  const { data: vendors, error } = await supabase
    .from('vendors')
    .select('id, name, latitude, longitude, state')
    .limit(20);

  const { count } = await supabase
    .from('vendors')
    .select('*', { count: 'exact', head: true });

  return NextResponse.json({
    totalCount: count,
    sampleVendors: vendors,
    error: error?.message || null,
    timestamp: new Date().toISOString(),
  });
}
