import { Metadata } from 'next';
import Link from 'next/link';
import { Search, Shield, Users, CheckCircle, Target, Building2, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'BestSportsSurfaces.com helps homeowners, schools, and municipalities find the right sports surface contractor for basketball courts, pickleball courts, tennis courts, turf fields, and more.',
  alternates: { canonical: `${SITE_URL}/about` },
};

const stats = [
  { value: '500+', label: 'Contractors Nationwide' },
  { value: '11', label: 'Sport Types Covered' },
  { value: '50', label: 'States Served' },
  { value: 'Free', label: 'Quotes — Always' },
];

const whoWeServe = [
  {
    icon: Users,
    title: 'Homeowners',
    description:
      'Building a backyard basketball court, pickleball court, or tennis court? We connect you with contractors who specialize in residential projects — so you get the right surface, the right price, and a builder who actually returns your calls.',
  },
  {
    icon: Building2,
    title: 'Schools & Universities',
    description:
      'From gymnasium flooring to outdoor track resurfacing, educational facilities need contractors who understand compliance, timelines, and durability. We help you find them.',
  },
  {
    icon: Target,
    title: 'Municipalities & Parks',
    description:
      'Public courts and fields take a beating. Whether you need new multi-sport construction or resurfacing for aging facilities, we match you with commercial-grade contractors built for government projects.',
  },
  {
    icon: Shield,
    title: 'Sports Facilities & Clubs',
    description:
      'Private clubs, recreation centers, and sports complexes need surfaces that perform under heavy use. We connect you with contractors experienced in high-traffic, competition-grade installations.',
  },
];

const surfaces = [
  'Basketball Courts',
  'Pickleball Courts',
  'Tennis Courts',
  'Multi-Sport Courts',
  'Synthetic Turf Fields',
  'Running Tracks',
  'Gym & Indoor Flooring',
  'Volleyball Courts',
  'Soccer & Football Fields',
  'Padel Courts',
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            description:
              'BestSportsSurfaces.com is the leading platform for finding vetted sports surface contractors for basketball courts, pickleball courts, tennis courts, turf, and more.',
            foundingDate: '2025',
            areaServed: 'US',
            serviceType: 'Contractor Matching Platform',
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            We Help You Find the Right Contractor — Not Just Any Contractor
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Sports surface projects are expensive, specialized, and easy to get wrong. 
            BestSportsSurfaces.com exists to make sure you don&apos;t. We connect homeowners, 
            schools, municipalities, and sports facilities with vetted contractors who 
            actually know what they&apos;re doing.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} padding="lg" className="text-center">
              <div className="text-3xl font-bold text-neon mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Why BSS */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-3 text-center">
            Why BestSportsSurfaces.com?
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-8">
            Hiring a sports surface contractor shouldn&apos;t feel like a gamble. Most people 
            have never built a court or resurfaced a track — and most general contractors 
            haven&apos;t either. We bridge that gap.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="lg" className="text-center">
              <Search className="h-8 w-8 text-neon mx-auto mb-3" />
              <h3 className="font-semibold text-text-primary mb-2">Specialist Matching</h3>
              <p className="text-sm text-text-secondary">
                We don&apos;t list general handymen. Every contractor on our platform 
                specializes in sports surfaces — courts, fields, tracks, and flooring.
              </p>
            </Card>
            <Card padding="lg" className="text-center">
              <Shield className="h-8 w-8 text-neon mx-auto mb-3" />
              <h3 className="font-semibold text-text-primary mb-2">Vetted & Verified</h3>
              <p className="text-sm text-text-secondary">
                We verify licensing, insurance, and project history so you can compare 
                contractors with confidence — not crossed fingers.
              </p>
            </Card>
            <Card padding="lg" className="text-center">
              <CheckCircle className="h-8 w-8 text-neon mx-auto mb-3" />
              <h3 className="font-semibold text-text-primary mb-2">Free Quotes, No Pressure</h3>
              <p className="text-sm text-text-secondary">
                Request quotes from multiple contractors at no cost. Compare pricing, 
                timelines, and materials — then decide on your terms.
              </p>
            </Card>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoWeServe.map((item) => (
              <Card key={item.title} padding="lg">
                <div className="flex items-start gap-4">
                  <item.icon className="h-6 w-6 text-neon mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Surfaces Covered */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Surfaces We Cover
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {surfaces.map((surface) => (
              <span
                key={surface}
                className="px-4 py-2 bg-surface-card border border-border rounded-full text-sm text-text-secondary"
              >
                {surface}
              </span>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Tell Us About Your Project',
                desc: 'Enter your location, sport type, and what you need — new build, resurfacing, repair, or maintenance.',
              },
              {
                step: '2',
                title: 'Browse Matched Contractors',
                desc: 'We show you contractors in your area who specialize in exactly what you need. Read reviews, compare profiles.',
              },
              {
                step: '3',
                title: 'Get Free Quotes & Hire',
                desc: 'Request quotes directly. No middleman fees, no pressure. Pick the contractor that fits your budget and timeline.',
              },
            ].map((item) => (
              <Card key={item.step} padding="lg" className="text-center">
                <div className="w-10 h-10 rounded-full bg-neon/10 text-neon font-bold flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card padding="lg" className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Ready to Find Your Contractor?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Whether you&apos;re building a backyard pickleball court or resurfacing a 
            university tennis complex, we&apos;ll help you find the right pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/vendors"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neon text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Browse Contractors <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-text-primary font-semibold rounded-lg hover:bg-surface-card transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}
