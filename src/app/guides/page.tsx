import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sports Surface Guides & Comparisons | Best Sports Surfaces',
  description: 'Expert guides for choosing the best sports surface contractors, comparing costs, and understanding installation options for basketball, tennis, and pickleball courts.',
  alternates: { canonical: `${SITE_URL}/guides` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Guides',
      item: `${SITE_URL}/guides`,
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sports Surface Guides',
  description: 'Comprehensive guides for sports court construction, contractors, and pricing',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Best Basketball Court Contractors & Installers (2026)',
      url: `${SITE_URL}/guides/best-basketball-court-contractors-2026`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Best Tennis Court Builders & Resurfacing Companies (2026)',
      url: `${SITE_URL}/guides/best-tennis-court-builders-2026`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Best Pickleball Court Builders & Installers (2026)',
      url: `${SITE_URL}/guides/best-pickleball-court-builders-2026`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Sport Court vs VersaCourt vs SnapSports: Complete 2026 Comparison',
      url: `${SITE_URL}/guides/sport-court-vs-versacourt-vs-snapsports`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'How Much Does a Sport Court Cost in 2026? Complete Pricing Guide',
      url: `${SITE_URL}/guides/how-much-does-a-sport-court-cost-2026`,
    },
  ],
};

export default function GuidesPage() {
  const guides = [
    {
      title: 'Best Basketball Court Contractors & Installers (2026)',
      description: 'Find the top basketball court contractors nationwide. Compare pricing, services, and get expert recommendations for your backyard or commercial basketball court project.',
      href: '/guides/best-basketball-court-contractors-2026',
      category: 'Contractors',
      sport: 'Basketball',
    },
    {
      title: 'Best Tennis Court Builders & Resurfacing Companies (2026)',
      description: 'Discover leading tennis court builders and resurfacing specialists. Expert comparison of materials, costs, and contractor quality.',
      href: '/guides/best-tennis-court-builders-2026',
      category: 'Contractors',
      sport: 'Tennis',
    },
    {
      title: 'Best Pickleball Court Builders & Installers (2026)',
      description: 'Complete guide to pickleball court construction companies. Compare top installers, pricing, and surface options for your pickleball court project.',
      href: '/guides/best-pickleball-court-builders-2026',
      category: 'Contractors',
      sport: 'Pickleball',
    },
    {
      title: 'Sport Court vs VersaCourt vs SnapSports: Complete 2026 Comparison',
      description: 'In-depth comparison of the top modular tile court systems. Expert analysis of durability, performance, pricing, and installation.',
      href: '/guides/sport-court-vs-versacourt-vs-snapsports',
      category: 'Product Comparison',
      sport: 'Multi-Sport',
    },
    {
      title: 'How Much Does a Sport Court Cost in 2026? Complete Pricing Guide',
      description: 'Comprehensive pricing guide for all types of sport courts. Get accurate cost estimates by sport, size, and surface type.',
      href: '/guides/how-much-does-a-sport-court-cost-2026',
      category: 'Pricing',
      sport: 'All Sports',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="min-h-screen bg-surface text-text-primary">
        <div className="border-b border-border bg-surface-card">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
            <nav className="text-sm text-text-secondary mb-6">
              <Link href="/" className="hover:text-neon">Home</Link>
              <span className="mx-2">/</span>
              <span>Guides</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight">
              Sports Surface <span className="text-neon">Guides & Comparisons</span>
            </h1>
            <p className="mt-2 text-text-secondary">
              Expert guides to help you choose the right contractors, understand pricing, and make informed decisions for your sports court project.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
            {guides.map((guide) => (
              <article key={guide.href} className="rounded-xl border border-border bg-surface-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block rounded-full bg-neon/10 px-2 py-1 text-xs font-medium text-neon">
                        {guide.category}
                      </span>
                      <span className="inline-block rounded-full bg-surface px-2 py-1 text-xs font-medium text-text-secondary">
                        {guide.sport}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">
                      <Link href={guide.href} className="hover:text-neon transition-colors">
                        {guide.title}
                      </Link>
                    </h2>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {guide.description}
                    </p>
                    <Link 
                      href={guide.href}
                      className="inline-flex items-center text-neon hover:underline font-medium"
                    >
                      Read Guide
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-12 rounded-xl border border-border bg-surface-card p-6">
            <h2 className="text-xl font-bold mb-4">Need Personalized Recommendations?</h2>
            <p className="text-text-secondary mb-6">
              Our guides provide comprehensive comparisons, but every project is unique. Use our free tools to get personalized recommendations and accurate pricing for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/search" 
                className="inline-flex items-center justify-center px-6 py-3 border border-neon text-neon hover:bg-neon hover:text-surface transition-colors rounded-lg font-medium"
              >
                Find Local Contractors
              </Link>
              <Link 
                href="/cost-estimator" 
                className="inline-flex items-center justify-center px-6 py-3 bg-neon text-surface hover:bg-neon/90 transition-colors rounded-lg font-medium"
              >
                Get Cost Estimate
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}