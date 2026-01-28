'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function AdminClaimsPage() {
  const [claims, setClaims] = useState<any[]>([]);

  useEffect(() => { loadClaims(); }, []);

  const loadClaims = async () => {
    const supabase = createClient();
    const { data } = await supabase.from('vendor_claims').select('*, vendors(name)').order('created_at', { ascending: false });
    setClaims(data || []);
  };

  const handleAction = async (id: string, status: 'approved' | 'rejected') => {
    const supabase = createClient();
    await supabase.from('vendor_claims').update({ status, reviewed_at: new Date().toISOString() }).eq('id', id);
    if (status === 'approved') {
      const claim = claims.find((c) => c.id === id);
      if (claim) {
        await supabase.from('vendors').update({ user_id: claim.user_id }).eq('id', claim.vendor_id);
      }
    }
    loadClaims();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Vendor Claims</h1>
      <div className="space-y-4">
        {claims.map((claim) => (
          <Card key={claim.id} padding="md">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{claim.business_name}</h3>
                <p className="text-sm text-gray-500">Claiming: {claim.vendors?.name || 'Unknown'}</p>
                <p className="text-xs text-gray-400">{claim.contact_name} | {claim.contact_email} | {claim.contact_phone}</p>
              </div>
              <Badge variant={claim.status === 'approved' ? 'green' : claim.status === 'rejected' ? 'red' : 'amber'}>{claim.status}</Badge>
            </div>
            {claim.status === 'pending' && (
              <div className="flex gap-2 mt-3">
                <Button size="sm" onClick={() => handleAction(claim.id, 'approved')}>Approve</Button>
                <Button size="sm" variant="ghost" onClick={() => handleAction(claim.id, 'rejected')}>Reject</Button>
              </div>
            )}
          </Card>
        ))}
        {claims.length === 0 && <p className="text-gray-500 text-center py-8">No claims found.</p>}
      </div>
    </div>
  );
}
