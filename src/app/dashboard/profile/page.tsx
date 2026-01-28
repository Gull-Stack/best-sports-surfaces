'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Card from '@/components/ui/Card';
import { SPORT_TYPES, SERVICE_TYPES } from '@/lib/constants';
import type { Vendor } from '@/types';

export default function ProfilePage() {
  const router = useRouter();
  const [vendor, setVendor] = useState<Partial<Vendor>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/auth/login'); return; }

      const { data } = await supabase.from('vendors').select('*').eq('user_id', user.id).single();
      if (data) setVendor(data);
      else setVendor({ user_id: user.id, sport_types: [], service_types: [], gallery_urls: [] });
      setLoading(false);
    };
    load();
  }, [router]);

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const slug = vendor.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
    const payload = { ...vendor, slug, user_id: user.id };

    let error;
    if (vendor.id) {
      ({ error } = await supabase.from('vendors').update(payload).eq('id', vendor.id));
    } else {
      ({ error } = await supabase.from('vendors').insert(payload));
    }

    if (error) setMessage(`Error: ${error.message}`);
    else setMessage('Profile saved successfully!');
    setSaving(false);
  };

  const toggleArrayItem = (field: 'sport_types' | 'service_types', value: string) => {
    const current = (vendor[field] as string[]) || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setVendor({ ...vendor, [field]: updated });
  };

  if (loading) return <div className="max-w-3xl mx-auto px-4 py-8">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Business Profile</h1>

      <div className="space-y-6">
        <Card padding="lg">
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
          <div className="space-y-4">
            <Input label="Business Name" value={vendor.name || ''} onChange={(e) => setVendor({ ...vendor, name: e.target.value })} required />
            <Textarea label="Short Description" value={vendor.short_description || ''} onChange={(e) => setVendor({ ...vendor, short_description: e.target.value })} rows={2} placeholder="Brief description for search results" />
            <Textarea label="Full Description" value={vendor.description || ''} onChange={(e) => setVendor({ ...vendor, description: e.target.value })} rows={5} placeholder="Detailed description of your services" />
          </div>
        </Card>

        <Card padding="lg">
          <h2 className="text-lg font-semibold mb-4">Contact & Location</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Phone" value={vendor.phone || ''} onChange={(e) => setVendor({ ...vendor, phone: e.target.value })} />
            <Input label="Email" value={vendor.email || ''} onChange={(e) => setVendor({ ...vendor, email: e.target.value })} />
            <Input label="Website" value={vendor.website || ''} onChange={(e) => setVendor({ ...vendor, website: e.target.value })} placeholder="https://..." />
            <Input label="Address" value={vendor.address || ''} onChange={(e) => setVendor({ ...vendor, address: e.target.value })} />
            <Input label="City" value={vendor.city || ''} onChange={(e) => setVendor({ ...vendor, city: e.target.value })} required />
            <Input label="State" value={vendor.state || ''} onChange={(e) => setVendor({ ...vendor, state: e.target.value })} required />
            <Input label="ZIP Code" value={vendor.zip || ''} onChange={(e) => setVendor({ ...vendor, zip: e.target.value })} required />
            <Input label="Years in Business" type="number" value={vendor.years_in_business || ''} onChange={(e) => setVendor({ ...vendor, years_in_business: Number(e.target.value) })} />
          </div>
        </Card>

        <Card padding="lg">
          <h2 className="text-lg font-semibold mb-4">Sport Types</h2>
          <div className="flex flex-wrap gap-2">
            {SPORT_TYPES.map((sport) => (
              <button
                key={sport.value}
                onClick={() => toggleArrayItem('sport_types', sport.value)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  (vendor.sport_types || []).includes(sport.value)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-green-400'
                }`}
              >
                {sport.label}
              </button>
            ))}
          </div>
        </Card>

        <Card padding="lg">
          <h2 className="text-lg font-semibold mb-4">Services Offered</h2>
          <div className="flex flex-wrap gap-2">
            {SERVICE_TYPES.map((service) => (
              <button
                key={service.value}
                onClick={() => toggleArrayItem('service_types', service.value)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  (vendor.service_types || []).includes(service.value)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-green-400'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </Card>

        {message && (
          <p className={`text-sm ${message.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>{message}</p>
        )}

        <Button onClick={handleSave} loading={saving} size="lg">Save Profile</Button>
      </div>
    </div>
  );
}
