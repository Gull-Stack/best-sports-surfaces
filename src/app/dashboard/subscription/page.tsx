'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { CheckCircle, Crown } from 'lucide-react';
import { VENDOR_TIERS } from '@/lib/constants';

export default function SubscriptionPage() {
  const [vendor, setVendor] = useState<{ id: string; tier: string; stripe_subscription_id: string | null } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from('vendors').select('id, tier, stripe_subscription_id').eq('user_id', user.id).single();
      setVendor(data);
    };
    load();
  }, []);

  const handleUpgrade = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/checkout', { method: 'POST' });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch {
      setLoading(false);
    }
  };

  const handleManage = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch {
      setLoading(false);
    }
  };

  const isPaid = vendor?.tier === 'paid' || vendor?.tier === 'featured';

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Subscription</h1>

      {isPaid ? (
        <Card padding="lg" className="bg-neon-subtle border-neon-100 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="h-8 w-8 text-neon" />
            <div>
              <h2 className="text-lg font-bold text-text-primary">Premium Plan</h2>
              <p className="text-sm text-text-secondary">$99/month</p>
            </div>
          </div>
          <Button onClick={handleManage} loading={loading} variant="outline">Manage Billing</Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card padding="lg">
            <h2 className="text-lg font-bold text-text-primary mb-1">Free Plan</h2>
            <p className="text-sm text-text-muted mb-4">Current plan</p>
            <ul className="space-y-2 mb-4">
              {VENDOR_TIERS.free.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                  <CheckCircle className="h-4 w-4 text-text-muted" /> {f}
                </li>
              ))}
            </ul>
          </Card>

          <Card padding="lg" className="border-neon bg-neon-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-1">Premium Plan</h2>
            <p className="text-2xl font-bold text-neon mb-4">$99<span className="text-sm font-normal text-text-muted">/month</span></p>
            <ul className="space-y-2 mb-6">
              {VENDOR_TIERS.paid.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                  <CheckCircle className="h-4 w-4 text-neon" /> {f}
                </li>
              ))}
            </ul>
            <Button onClick={handleUpgrade} loading={loading} className="w-full" size="lg">Upgrade to Premium</Button>
          </Card>
        </div>
      )}
    </div>
  );
}
