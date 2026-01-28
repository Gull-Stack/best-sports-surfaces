import Link from 'next/link';
import { Search, Shield, DollarSign, Users, ArrowRight, CheckCircle } from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar';
import Card from '@/components/ui/Card';
import MapComponent from '@/components/ui/DynamicMap';
import { SPORT_TYPES, SITE_NAME } from '@/lib/constants';
import SchemaOrg from '@/components/seo/SchemaOrg';

const howItWorks = [
  { icon: Search, title: 'Search', description: 'Enter your ZIP code and sport type to find local contractors.' },
  { icon: Users, title: 'Compare', description: 'Browse profiles, read reviews, and compare quotes.' },
  { icon: CheckCircle, title: 'Connect', description: 'Request free quotes and hire the best contractor for your project.' },
];

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    description: 'Find trusted sports surface contractors near you.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: '/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <SchemaOrg schema={websiteSchema} />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 md:py-36"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Build Your Perfect Sports Surface
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connect with trusted contractors for tennis courts, basketball courts, pickleball courts, and more. Get free quotes today.
          </p>
          <div className="bg-white rounded-xl p-4 shadow-2xl max-w-2xl mx-auto">
            <SearchBar size="lg" />
          </div>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-300">
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-400" /> Free Quotes</span>
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-green-400" /> Verified Contractors</span>
            <span className="flex items-center gap-1"><DollarSign className="h-4 w-4 text-green-400" /> No Obligation</span>
          </div>
        </div>
      </section>

      {/* Sport Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Sport Type</h2>
            <p className="text-gray-600 mt-2">Find specialized contractors for every type of sports surface.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SPORT_TYPES.map((sport) => (
              <Link
                key={sport.value}
                href={`/search?sport=${sport.value}`}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md hover:border-green-300 border border-gray-200 transition-all group"
              >
                <span className="text-3xl block mb-2">{sport.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-600">{sport.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Contractors Nationwide</h2>
            <p className="text-gray-600 mt-2">We have trusted sports surface contractors across the United States.</p>
          </div>
          <MapComponent className="h-96 md:h-[500px]" />
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500" /> Free Listings</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500" /> Premium</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-500" /> Featured</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-600 mt-2">Finding the right contractor is easy with {SITE_NAME}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-sm font-medium text-green-600 mb-1">Step {i + 1}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimator CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Card padding="lg" className="bg-gradient-to-r from-green-600 to-green-700 border-none">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold">How Much Does It Cost?</h2>
                <p className="text-green-100 mt-2 max-w-lg">
                  Use our free cost estimator to get an instant price range for your sports surface project.
                </p>
              </div>
              <Link
                href="/cost-estimator"
                className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex-shrink-0"
              >
                Try Cost Estimator <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Contractor CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a Sports Surface Contractor?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join {SITE_NAME} to reach thousands of potential customers. List your business for free or upgrade to Premium for priority placement and direct leads.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/signup"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              List Your Business Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
