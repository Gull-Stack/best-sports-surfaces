import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Card from '@/components/ui/Card';
import { Eye, MousePointer, MessageSquare, Phone } from 'lucide-react';

export default async function DashboardAnalyticsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/auth/login');

  const { data: vendor } = await supabase.from('vendors').select('id').eq('user_id', user.id).single();

  let stats = { views: 0, clicks: 0, inquiries: 0, calls: 0 };

  if (vendor) {
    const counts = await Promise.all([
      supabase.from('analytics_events').select('*', { count: 'exact', head: true }).eq('vendor_id', vendor.id).eq('event_type', 'view'),
      supabase.from('analytics_events').select('*', { count: 'exact', head: true }).eq('vendor_id', vendor.id).eq('event_type', 'click'),
      supabase.from('inquiries').select('*', { count: 'exact', head: true }).eq('vendor_id', vendor.id),
      supabase.from('analytics_events').select('*', { count: 'exact', head: true }).eq('vendor_id', vendor.id).eq('event_type', 'call'),
    ]);
    stats = {
      views: counts[0].count || 0,
      clicks: counts[1].count || 0,
      inquiries: counts[2].count || 0,
      calls: counts[3].count || 0,
    };
  }

  const statCards = [
    { label: 'Profile Views', value: stats.views, icon: Eye, color: 'blue' },
    { label: 'Website Clicks', value: stats.clicks, icon: MousePointer, color: 'green' },
    { label: 'Quote Requests', value: stats.inquiries, icon: MessageSquare, color: 'amber' },
    { label: 'Phone Calls', value: stats.calls, icon: Phone, color: 'purple' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Analytics</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.label} padding="md">
            <stat.icon className="h-5 w-5 text-text-muted mb-2" />
            <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
            <p className="text-sm text-text-muted">{stat.label}</p>
          </Card>
        ))}
      </div>
      {vendor?.id && (
        <Card padding="md" className="mt-8 bg-surface-raised">
          <p className="text-sm text-text-secondary">
            Detailed analytics with charts and date ranges are available on the Premium plan.
          </p>
        </Card>
      )}
    </div>
  );
}
