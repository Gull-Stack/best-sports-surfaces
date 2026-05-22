import { SITE_URL, SITE_NAME } from '@/lib/constants';

interface SchemaOrgProps {
  schema: Record<string, unknown>;
}

function absoluteUrl(url: string | undefined | null): string | undefined {
  if (!url) return undefined;
  return url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
}

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function localBusinessSchema(vendor: {
  name: string;
  description: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  rating: number;
  review_count: number;
  website: string;
  latitude: number;
  longitude: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: vendor.name,
    description: vendor.description,
    ...(vendor.phone ? { telephone: vendor.phone } : {}),
    ...(vendor.website ? { url: vendor.website } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: vendor.address,
      addressLocality: vendor.city,
      addressRegion: vendor.state,
      postalCode: vendor.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: vendor.latitude,
      longitude: vendor.longitude,
    },
    aggregateRating: vendor.review_count > 0 ? {
      '@type': 'AggregateRating',
      ratingValue: vendor.rating,
      reviewCount: vendor.review_count,
    } : undefined,
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  author: string;
  published_at: string;
  updated_at: string;
  featured_image: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.published_at,
    dateModified: post.updated_at,
    image: absoluteUrl(post.featured_image) || `${SITE_URL}/og-image.jpg`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.jpg`,
      },
    },
  };
}
