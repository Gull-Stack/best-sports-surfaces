import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sports Surface Types | Find Contractors by Sport | BestSportsSurfaces.com',
  description: 'Browse sports surface contractors by sport type. Pickleball courts, tennis courts, basketball courts, gym flooring, running tracks, artificial turf, and more.',
  openGraph: {
    title: 'Sports Surface Types | BestSportsSurfaces.com',
    description: 'Find specialized contractors for every sport surface type. Compare quotes and hire the best.',
  },
};

const SPORT_PAGES = [
  {
    slug: 'pickleball-courts',
    name: 'Pickleball Courts',
    icon: '🏓',
    description: 'Pickleball is the fastest-growing sport in America. Find expert court builders who specialize in regulation pickleball court construction, resurfacing, and tennis-to-pickleball conversions.',
    color: 'from-green-500/20 to-green-600/5',
    borderColor: 'border-green-500/30 hover:border-green-500/60',
  },
  {
    slug: 'tennis-courts',
    name: 'Tennis Courts',
    icon: '🎾',
    description: 'From hard courts to clay and grass, find certified tennis court contractors for new construction, resurfacing, crack repair, and complete court renovations.',
    color: 'from-yellow-500/20 to-yellow-600/5',
    borderColor: 'border-yellow-500/30 hover:border-yellow-500/60',
  },
  {
    slug: 'basketball-courts',
    name: 'Basketball Courts',
    icon: '🏀',
    description: 'Build your dream basketball court. Find contractors who specialize in indoor and outdoor basketball court installation, from backyard half-courts to full-size gymnasiums.',
    color: 'from-orange-500/20 to-orange-600/5',
    borderColor: 'border-orange-500/30 hover:border-orange-500/60',
  },
  {
    slug: 'gym-flooring',
    name: 'Gym Flooring',
    icon: '🏋️',
    description: 'Professional gym flooring installation for fitness centers, school gymnasiums, and home gyms. Find contractors who install hardwood, rubber, and synthetic gym floors.',
    color: 'from-purple-500/20 to-purple-600/5',
    borderColor: 'border-purple-500/30 hover:border-purple-500/60',
  },
  {
    slug: 'running-tracks',
    name: 'Running Tracks',
    icon: '🏃',
    description: 'Certified running track construction and resurfacing contractors. Build regulation tracks for schools, parks, and athletic facilities with professional-grade surfaces.',
    color: 'from-red-500/20 to-red-600/5',
    borderColor: 'border-red-500/30 hover:border-red-500/60',
  },
  {
    slug: 'artificial-turf',
    name: 'Artificial Turf',
    icon: '⚽',
    description: 'Synthetic turf installation for soccer fields, football fields, baseball diamonds, and multi-sport facilities. Find contractors who install premium artificial turf systems.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    borderColor: 'border-emerald-500/30 hover:border-emerald-500/60',
  },
];

export default function SportsIndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Find Contractors by <span className="text-neon">Sport Type</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Every sport surface has unique requirements. Browse specialized contractors who know your sport inside and out — from materials and dimensions to drainage and maintenance.
          </p>
        </div>
      </section>

      {/* Sport Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPORT_PAGES.map((sport) => (
            <Link
              key={sport.slug}
              href={`/sports/${sport.slug}`}
              className={`group relative rounded-xl border ${sport.borderColor} bg-surface-card overflow-hidden transition-all hover:shadow-lg hover:shadow-neon/5 hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sport.color} opacity-50`} />
              <div className="relative p-8">
                <div className="text-5xl mb-4">{sport.icon}</div>
                <h2 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-neon transition-colors">
                  {sport.name}
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {sport.description}
                </p>
                <div className="flex items-center text-neon text-sm font-semibold">
                  Find Contractors <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-surface-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Why Choose a Sport-Specific Contractor?
          </h2>
          <div className="text-text-secondary space-y-4">
            <p>
              Not all sports surfaces are created equal. A tennis court requires different materials, dimensions, and expertise than a basketball court or running track. By choosing a contractor who specializes in your specific sport, you get:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Deep knowledge of regulation specifications and requirements</li>
              <li>Experience with sport-specific surface materials and technologies</li>
              <li>Understanding of proper drainage, lighting, and accessories</li>
              <li>Familiarity with local building codes for athletic facilities</li>
              <li>Portfolio of completed projects you can reference</li>
            </ul>
            <p>
              BestSportsSurfaces.com connects you with verified contractors who specialize in the exact type of sports surface you need. Browse by sport type above, or search by location to find contractors near you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
