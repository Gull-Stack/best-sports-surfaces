'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
// Removed createClient - now using API route
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import { CheckCircle } from 'lucide-react';

function ClaimForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prefilledSlug = searchParams.get('slug') || '';
  const [form, setForm] = useState({ business_name: '', contact_name: '', contact_email: '', contact_phone: '', vendor_slug: prefilledSlug });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/vendor-claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong');
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <CheckCircle className="h-12 w-12 text-neon mx-auto mb-3" />
        <h2 className="text-xl font-bold text-text-primary mb-2">Claim Submitted!</h2>
        <p className="text-text-secondary">We will review your claim and get back to you within 2-3 business days.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-text-primary mb-2 text-center">Claim Your Listing</h1>
      <p className="text-text-secondary text-center mb-6">Verify your ownership to manage your business listing.</p>
      <Card padding="lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Listing URL Slug" value={form.vendor_slug} onChange={(e) => setForm({ ...form, vendor_slug: e.target.value })} placeholder="e.g. smith-tennis-courts" required />
          <Input label="Business Name" value={form.business_name} onChange={(e) => setForm({ ...form, business_name: e.target.value })} required />
          <Input label="Your Name" value={form.contact_name} onChange={(e) => setForm({ ...form, contact_name: e.target.value })} required />
          <Input label="Email" type="email" value={form.contact_email} onChange={(e) => setForm({ ...form, contact_email: e.target.value })} required />
          <Input label="Phone" value={form.contact_phone} onChange={(e) => setForm({ ...form, contact_phone: e.target.value })} />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <Button type="submit" loading={loading} className="w-full">Submit Claim</Button>
        </form>
      </Card>
    </div>
  );
}

export default function VendorClaimPage() {
  return (
    <Suspense fallback={<div className="max-w-md mx-auto px-4 py-12 text-center text-text-secondary">Loading...</div>}>
      <ClaimForm />
    </Suspense>
  );
}
