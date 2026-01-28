import { createClient } from '@/lib/supabase/server';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import StarRating from '@/components/ui/StarRating';
import Link from 'next/link';

export default async function AdminVendorsPage() {
  const supabase = await createClient();
  const { data: vendors } = await supabase.from('vendors').select('*').order('created_at', { ascending: false });

  const tierColors = { free: 'gray' as const, paid: 'green' as const, featured: 'amber' as const };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Vendors ({vendors?.length || 0})</h1>
        <Link href="/admin" className="text-sm text-green-600 hover:underline">&larr; Back to Admin</Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3 font-semibold text-gray-600">Name</th>
              <th className="pb-3 font-semibold text-gray-600">Location</th>
              <th className="pb-3 font-semibold text-gray-600">Tier</th>
              <th className="pb-3 font-semibold text-gray-600">Rating</th>
              <th className="pb-3 font-semibold text-gray-600">Verified</th>
              <th className="pb-3 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors?.map((vendor) => (
              <tr key={vendor.id} className="border-b hover:bg-gray-50">
                <td className="py-3 font-medium text-gray-900">
                  <Link href={`/vendors/${vendor.slug}`} className="hover:text-green-600">{vendor.name}</Link>
                </td>
                <td className="py-3 text-gray-600">{vendor.city}, {vendor.state}</td>
                <td className="py-3"><Badge variant={tierColors[vendor.tier as keyof typeof tierColors]}>{vendor.tier}</Badge></td>
                <td className="py-3"><StarRating rating={vendor.rating} size={12} showValue /></td>
                <td className="py-3">{vendor.is_verified ? <Badge variant="green">Yes</Badge> : <Badge variant="gray">No</Badge>}</td>
                <td className="py-3">
                  <Link href={`/vendors/${vendor.slug}`} className="text-green-600 hover:underline text-xs">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
