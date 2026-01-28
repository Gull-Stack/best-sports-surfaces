import { MetadataRoute } from 'next';
import { createAdminClient } from '@/lib/supabase/admin';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bestsportssurfaces.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createAdminClient();

  const [vendors, posts, cities] = await Promise.all([
    supabase.from('vendors').select('slug, updated_at'),
    supabase.from('blog_posts').select('slug, updated_at').eq('published', true),
    supabase.from('cities').select('slug'),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/search`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/cost-estimator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/locations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
  ];

  const vendorPages: MetadataRoute.Sitemap = (vendors.data || []).map((vendor) => ({
    url: `${SITE_URL}/vendors/${vendor.slug}`,
    lastModified: new Date(vendor.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = (posts.data || []).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const cityPages: MetadataRoute.Sitemap = (cities.data || []).map((city) => ({
    url: `${SITE_URL}/locations/${city.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...vendorPages, ...blogPages, ...cityPages];
}
