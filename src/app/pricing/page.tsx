import { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, Star, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vendor Pricing - List Your Business',
  description: 'List your sports surface business on BestSportsSurfaces.com. Free listings available. Upgrade for direct leads, premium placement, and more.',
};

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Get found by potential customers. Leads go through BestSportsSurfaces.com.',
    icon: Shield,
    iconColor: 'text-gray-500',
    borderColor: 'border-gray-200',
    bgColor: 'bg-white',
    ctaText: 'Claim Your Listing',
    ctaHref: '/vendor/claim',
    ctaStyle: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    features: [
      { text: 'Basic business listing', included: true },
      { text: 'City & state shown', included: true },
      { text: 'Sport types & services listed', included: true },
      { text: 'Appear in search results', included: true },
      { text: 'Direct phone/email on listing', included: false },
      { text: 'Website link on listing', included: false },
      { text: 'Cover photo & gallery', included: false },
      { text: 'Leads sent directly to you', included: false },
      { text: 'Priority search placement', included: false },
      { text: 'Analytics dashboard', included: false },
      { text: 'Featured homepage placement', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '$99',
    period: '/month',
    description: 'Your contact info front and center. Leads come directly to your inbox.',
    icon: Zap,
    iconColor: 'text-brand',
    borderColor: 'border-brand/40',
    bgColor: 'bg-white',
    popular: true,
    ctaText: 'Get Started',
    ctaHref: '/auth/signup?plan=paid',
    ctaStyle: 'bg-brand text-white hover:bg-brand-hover',
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'Direct phone/email on listing', included: true },
      { text: 'Website link on listing', included: true },
      { text: 'Cover photo & project gallery', included: true },
      { text: 'Leads sent directly to you', included: true },
      { text: 'Full business description', included: true },
      { text: 'Priority search placement', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Verified badge', included: true },
      { text: 'Featured homepage placement', included: false },
      { text: 'Custom lead volume', included: false },
    ],
  },
  {
    name: 'Featured',
    price: 'Custom',
    period: 'pricing',
    description: 'Maximum visibility. More leads in your area. White-glove partnership.',
    icon: Star,
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-400',
    bgColor: 'bg-amber-50/50',
    ctaText: 'Contact Us',
    ctaHref: '/contact?subject=featured-vendor',
    ctaStyle: 'bg-amber-500 text-white hover:bg-amber-600',
    features: [
      { text: 'Everything in Premium', included: true },
      { text: 'Featured homepage placement', included: true },
      { text: 'Top of search results', included: true },
      { text: 'Increased lead volume in your area', included: true },
      { text: 'Custom pricing for your market', included: true },
      { text: 'Dedicated account support', included: true },
      { text: 'Featured badge on all pages', included: true },
      { text: 'Priority in location pages', included: true },
      { text: 'Social media promotion', included: true },
      { text: 'Quarterly performance reviews', included: true },
      { text: 'Co-branded content opportunities', included: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Grow Your Business with BestSportsSurfaces.com
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thousands of homeowners and facilities search for sports surface contractors every month. 
          Get in front of them.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.name}
              className={`relative rounded-2xl border-2 ${tier.borderColor} ${tier.bgColor} p-8 flex flex-col ${
                tier.popular ? 'shadow-xl scale-105 z-10' : 'shadow-sm'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-sm font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${tier.popular ? 'bg-brand/10' : tier.name === 'Featured' ? 'bg-amber-100' : 'bg-gray-100'}`}>
                  <Icon className={`h-6 w-6 ${tier.iconColor}`} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{tier.name}</h2>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                <span className="text-gray-500 ml-1">{tier.period}</span>
              </div>

              <p className="text-gray-600 mb-6">{tier.description}</p>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 rounded-lg font-semibold transition-colors mb-8 ${tier.ctaStyle}`}
              >
                {tier.ctaText}
              </Link>

              <ul className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Already listed? Claim your page.
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          We may have already created a listing for your business. Search for it, claim it, 
          and upgrade to start getting leads directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/search"
            className="px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition-colors"
          >
            Search for Your Business
          </Link>
          <Link
            href="/vendor/claim"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Claim Your Listing
          </Link>
        </div>
      </div>
    </div>
  );
}
