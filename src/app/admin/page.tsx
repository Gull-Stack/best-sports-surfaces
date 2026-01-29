import { createClient } from '@/lib/supabase/server';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { Users, MessageSquare, FileText, Star, MapPin, Mail, ShieldCheck, BarChart3 } from 'lucide-react';

export default async function AdminPage() {
  const supabase = await createClient();

  const [vendors, inquiries, blogPosts, reviews, cities, subscribers, claims] = await Promise.all([
    supabase.from('vendors').select('*', { count: 'exact', head: true }),
    supabase.from('inquiries').select('*', { count: 'exact', head: true }),
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
    supabase.from('reviews').select('*', { count: 'exact', head: true }),
    supabase.from('cities').select('*', { count: 'exact', head: true }),
    supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true }),
    supabase.from('vendor_claims').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
  ]);

  const paidVendors = await supabase.from('vendors').select('*', { count: 'exact', head: true }).eq('tier', 'paid');

  const stats = [
    { label: 'Total Vendors', value: vendors.count || 0, icon: Users, href: '/admin/vendors' },
    { label: 'Inquiries', value: inquiries.count || 0, icon: MessageSquare, href: '/admin/inquiries' },
    { label: 'Blog Posts', value: blogPosts.count || 0, icon: FileText, href: '/admin/blog' },
    { label: 'Reviews', value: reviews.count || 0, icon: Star, href: '/admin/reviews' },
    { label: 'Cities', value: cities.count || 0, icon: MapPin, href: '/admin/vendors' },
    { label: 'Subscribers', value: subscribers.count || 0, icon: Mail, href: '/admin/subscribers' },
    { label: 'Pending Claims', value: claims.count || 0, icon: ShieldCheck, href: '/admin/claims' },
    { label: 'Paid Vendors', value: paidVendors.count || 0, icon: BarChart3, href: '/admin/vendors' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card hover padding="md">
              <div className="flex items-center gap-3">
                <stat.icon className="h-5 w-5 text-brand" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/admin/vendors"><Card hover padding="md"><h3 className="font-semibold">Manage Vendors</h3><p className="text-sm text-gray-500">Add, edit, and manage vendor listings</p></Card></Link>
        <Link href="/admin/blog"><Card hover padding="md"><h3 className="font-semibold">Manage Blog</h3><p className="text-sm text-gray-500">Create and edit blog posts</p></Card></Link>
        <Link href="/admin/reviews"><Card hover padding="md"><h3 className="font-semibold">Moderate Reviews</h3><p className="text-sm text-gray-500">Approve or reject customer reviews</p></Card></Link>
        <Link href="/admin/claims"><Card hover padding="md"><h3 className="font-semibold">Vendor Claims</h3><p className="text-sm text-gray-500">Review and approve listing claims</p></Card></Link>
        <Link href="/admin/inquiries"><Card hover padding="md"><h3 className="font-semibold">View Inquiries</h3><p className="text-sm text-gray-500">Browse all lead submissions</p></Card></Link>
        <Link href="/admin/subscribers"><Card hover padding="md"><h3 className="font-semibold">Newsletter</h3><p className="text-sm text-gray-500">View and export subscribers</p></Card></Link>
      </div>
    </div>
  );
}
