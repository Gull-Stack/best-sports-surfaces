import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import Card from '@/components/ui/Card';
import { User, MessageSquare, Star, BarChart3, CreditCard, Settings } from 'lucide-react';

async function getVendorData(userId: string) {
  const supabase = await createClient();
  const { data: vendor } = await supabase.from('vendors').select('*').eq('user_id', userId).single();
  if (!vendor) return null;

  const { count: inquiryCount } = await supabase.from('inquiries').select('*', { count: 'exact', head: true }).eq('vendor_id', vendor.id);
  const { count: reviewCount } = await supabase.from('reviews').select('*', { count: 'exact', head: true }).eq('vendor_id', vendor.id);
  const { count: viewCount } = await supabase.from('analytics_events').select('*', { count: 'exact', head: true }).eq('vendor_id', vendor.id).eq('event_type', 'view');

  return { vendor, inquiryCount: inquiryCount || 0, reviewCount: reviewCount || 0, viewCount: viewCount || 0 };
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/auth/login');

  const data = await getVendorData(user.id);

  const dashboardLinks = [
    { href: '/dashboard/profile', icon: User, label: 'Edit Profile', description: 'Update your business information' },
    { href: '/dashboard/inquiries', icon: MessageSquare, label: 'Inquiries', description: `${data?.inquiryCount || 0} quote requests` },
    { href: '/dashboard/reviews', icon: Star, label: 'Reviews', description: `${data?.reviewCount || 0} customer reviews` },
    { href: '/dashboard/analytics', icon: BarChart3, label: 'Analytics', description: `${data?.viewCount || 0} profile views` },
    { href: '/dashboard/subscription', icon: CreditCard, label: 'Subscription', description: data?.vendor?.tier === 'paid' ? 'Premium Plan' : 'Free Plan' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back{data?.vendor ? `, ${data.vendor.name}` : ''}!
        </p>
      </div>

      {!data?.vendor && (
        <Card padding="lg" className="mb-8 bg-blue-50 border-blue-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Complete Your Profile</h2>
          <p className="text-gray-600 mb-4">Set up your business profile to start receiving leads.</p>
          <Link href="/dashboard/profile" className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-hover">
            <Settings className="h-4 w-4" /> Set Up Profile
          </Link>
        </Card>
      )}

      {data?.vendor && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card padding="md">
            <p className="text-sm text-gray-500">Profile Views</p>
            <p className="text-2xl font-bold text-gray-900">{data.viewCount}</p>
          </Card>
          <Card padding="md">
            <p className="text-sm text-gray-500">Quote Requests</p>
            <p className="text-2xl font-bold text-gray-900">{data.inquiryCount}</p>
          </Card>
          <Card padding="md">
            <p className="text-sm text-gray-500">Rating</p>
            <p className="text-2xl font-bold text-gray-900">{data.vendor.rating.toFixed(1)} / 5.0</p>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Card hover padding="md" className="h-full">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-light rounded-lg">
                  <link.icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{link.label}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{link.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
