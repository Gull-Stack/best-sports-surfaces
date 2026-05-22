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

  const [vendors, posts, cities, vendorSupply] = await Promise.all([
    supabase.from('vendors').select('slug, updated_at'),
    supabase.from('blog_posts').select('slug, updated_at').eq('published', true),
    supabase.from('cities').select('slug, state_code, population').order('population', { ascending: false }),
    supabase.from('vendors').select('state, sport_types'),
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

  // Sport × City combo pages. The old sitemap dumped 2,600+ thin auto-pages and
  // Google crawled only 1 of them. We now include ONLY combos that have matching
  // contractor supply in that state — the exact pages we set index:true (real
  // cost/permit/FAQ content + vendors). cityName-only /locations pages stay out
  // until they have unique content.
  const supply = new Set<string>();
  for (const v of vendorSupply.data || []) {
    for (const t of (v.sport_types || [])) {
      if (v.state) supply.add(`${v.state}|${t}`);
    }
  }
  // sport URL slug -> vendor sport_types (mirrors SPORT_CONFIG.dbFilter)
  const SPORT_SLUG_TO_TYPES: Record<string, string[]> = {
    'pickleball-courts': ['pickleball'],
    'tennis-courts': ['tennis'],
    'basketball-courts': ['basketball'],
    'gym-flooring': ['gym-flooring'],
    'running-tracks': ['track', 'track-field'],
    'artificial-turf': ['soccer', 'football', 'baseball'],
  };
  const MAX_COMBOS = 1200;
  const sportLocationPages: MetadataRoute.Sitemap = [];
  for (const city of cities.data || []) {
    if (sportLocationPages.length >= MAX_COMBOS) break;
    for (const [sportSlug, types] of Object.entries(SPORT_SLUG_TO_TYPES)) {
      if (types.some((t) => supply.has(`${city.state_code}|${t}`))) {
        sportLocationPages.push({
          url: `${SITE_URL}/sports/${sportSlug}/${city.slug}-${city.state_code.toLowerCase()}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        });
      }
    }
  }

  return [...staticPages, ...sportPages, ...vendorPages, ...blogPages, ...sportLocationPages];
}
