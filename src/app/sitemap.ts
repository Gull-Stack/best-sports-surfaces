import { MetadataRoute } from 'next';
import { createAdminClient } from '@/lib/supabase/admin';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bestsportssurfaces.com';

// Slugs that actually have built pages in /sports/[sport]
const SPORT_PAGE_SLUGS = [
  'pickleball-courts',
  'tennis-courts',
  'basketball-courts',
  'gym-flooring',
  'running-tracks',
  'artificial-turf',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createAdminClient();

  const [vendors, posts, cities] = await Promise.all([
    supabase.from('vendors').select('slug, updated_at'),
    supabase.from('blog_posts').select('slug, updated_at').eq('published', true),
    supabase.from('cities').select('slug, state_code'),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/search`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/sports`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/cost-estimator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/locations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/court-designer`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/products/dominator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/products/selkirk`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/acrytech`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
  ];

  // Sport type index pages (e.g., /sports/pickleball-courts)
  const sportPages: MetadataRoute.Sitemap = SPORT_PAGE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/sports/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Sport × City combo pages — REMOVED from sitemap (thin auto-generated content)
  // Re-add when pages have unique substantial content per city+sport combo.

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

  // NOTE: sportLocationPages removed from sitemap — 2000+ thin auto-generated pages
  // were killing crawl budget. Google crawled only 1 of 2622 submitted pages.
  // Re-add ONLY when these pages have unique, substantial content per city+sport combo.
  // cityPages also removed — same thin content issue with 201 auto-generated city pages.
  return [...staticPages, ...sportPages, ...vendorPages, ...blogPages];
}
