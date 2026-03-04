import Link from 'next/link'

export const metadata = {
  title: 'Best Pickleball Nets Compared: Selkirk vs Dominator vs SwiftNet | Best Sports Surfaces',
  description: 'Compare the top 3 portable pickleball nets: Selkirk Pro Line, Dominator Rolling Net, and SwiftNet. Find the perfect net for your playing style and budget.',
}

const nets = [
  {
    name: 'Selkirk Pro Line Net System',
    tagline: 'The Professional\'s Choice',
    image: 'https://cdn.selkirk.com/cdn-cgi/image/format=auto,width=800/https://cdn.selkirk.com/media/selkirk-pro-line-portable-net-system.jpg',
    badge: 'Best Premium',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    price: 'Premium',
    bestFor: 'Serious competitive players and tournament organizers',
    pros: [
      'Professional tournament-grade quality',
      'Ultra-stable — won\'t move during intense rallies',
      'Regulation certified for official play',
      'Premium materials and construction',
      'Lightweight for a professional net',
    ],
    cons: [
      'Most expensive option',
      'Heavier than ultra-portable alternatives',
    ],
    summary: 'If you\'re serious about pickleball and want the net used in professional tournaments, the Selkirk Pro Line is worth every penny. It\'s the gold standard for competitive play — stable, regulation-certified, and built to last through thousands of games.',
    buyUrl: 'https://www.selkirk.com/products/selkirk-pro-line-portable-net-system',
    detailUrl: '/products/selkirk',
  },
  {
    name: 'Dominator Rolling Pickleball Net',
    tagline: 'Best Value. Trusted Brand.',
    image: 'https://www.dominatorhoop.com/wp-content/uploads/2023/11/dominator-rolling-pickleball-net-1.jpg',
    badge: 'Best Value',
    badgeColor: 'bg-blue-100 text-blue-700',
    price: 'Mid-Range',
    bestFor: 'Clubs, recreation centers, and budget-conscious players who want quality',
    pros: [
      'Excellent build quality at a fair price',
      'Rolling wheels for easy repositioning',
      'Solid, stable frame',
      'Great company reputation and support',
      'Regulation size and height',
    ],
    cons: [
      'Heavier due to rolling frame',
      'Not as portable for travel',
    ],
    summary: 'The Dominator is the sweet spot of quality and affordability. Their reputation for durable, well-built sports equipment carries over perfectly to pickleball. The rolling design makes it ideal for facilities that move nets between locations.',
    buyUrl: 'https://www.dominatorhoop.com/product/dominator-rolling-pickleball-net/',
    detailUrl: '/products/dominator',
  },
  {
    name: 'SwiftNet® Portable Net',
    tagline: 'Play Anywhere. Store Anywhere.',
    image: 'https://cdn.shopify.com/s/files/1/0613/9819/6498/files/DSC00157_d2a0cf50-96e4-4f3e-a8e1-7a1c5dc3b370.jpg?v=1729284222',
    badge: 'Most Portable',
    badgeColor: 'bg-green-100 text-green-700',
    price: 'Affordable',
    bestFor: 'Travelers, casual players, and anyone who needs easy storage',
    pros: [
      'Ultra-lightweight — lightest regulation net available',
      'Fits in a luggage-sized carry bag',
      'Sets up in under 5 minutes',
      'Perfect for travel, parks, driveways',
      'No garage or storage room needed',
    ],
    cons: [
      'Not as heavy-duty as permanent installations',
      'Best for recreational and casual competitive play',
    ],
    summary: 'If portability is your priority, nothing beats the SwiftNet. It\'s the net you throw in your trunk, take on vacation, or store in a closet. Regulation-sized and surprisingly sturdy for how light it is — the perfect net for players who want to play anywhere.',
    buyUrl: 'https://swiftnet.pro/products/swiftnet%c2%ae',
    detailUrl: '/products/swiftnet',
  },
]

export default function PickleballNetsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The 3 Best Portable Pickleball Nets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We tested the top portable pickleball nets on the market. Whether you're a tournament 
            player, recreation director, or backyard warrior — here's which net is right for you.
          </p>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900"></th>
                  <th className="text-center p-4 font-bold text-gray-900">Selkirk Pro Line</th>
                  <th className="text-center p-4 font-bold text-gray-900">Dominator</th>
                  <th className="text-center p-4 font-bold text-gray-900 bg-green-50">SwiftNet ⭐</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Best For</td>
                  <td className="p-4 text-center text-gray-600 text-sm">Tournaments & Serious Players</td>
                  <td className="p-4 text-center text-gray-600 text-sm">Clubs & Rec Centers</td>
                  <td className="p-4 text-center text-gray-600 text-sm bg-green-50">Travel & Portability</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Price Range</td>
                  <td className="p-4 text-center text-gray-600">$$$$</td>
                  <td className="p-4 text-center text-gray-600">$$</td>
                  <td className="p-4 text-center text-gray-600 bg-green-50">$$</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Portability</td>
                  <td className="p-4 text-center text-gray-600">Good</td>
                  <td className="p-4 text-center text-gray-600">Moderate (wheels)</td>
                  <td className="p-4 text-center text-green-600 font-semibold bg-green-50">Excellent</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Weight</td>
                  <td className="p-4 text-center text-gray-600">Medium</td>
                  <td className="p-4 text-center text-gray-600">Heavy</td>
                  <td className="p-4 text-center text-green-600 font-semibold bg-green-50">Ultra-Light</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Setup Time</td>
                  <td className="p-4 text-center text-gray-600">~8 min</td>
                  <td className="p-4 text-center text-gray-600">~5 min</td>
                  <td className="p-4 text-center text-gray-600 bg-green-50">&lt;5 min</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Durability</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Excellent</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Excellent</td>
                  <td className="p-4 text-center text-gray-600 bg-green-50">Good</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">Regulation</td>
                  <td className="p-4 text-center text-green-600">✓</td>
                  <td className="p-4 text-center text-green-600">✓</td>
                  <td className="p-4 text-center text-green-600 bg-green-50">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual Net Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Detailed Reviews</h2>
          
          <div className="space-y-16">
            {nets.map((net, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto">
                    <img 
                      src={net.image}
                      alt={net.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <span className={`inline-block text-sm font-medium px-3 py-1 rounded-full mb-4 ${net.badgeColor}`}>
                      {net.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{net.name}</h3>
                    <p className="text-gray-500 mb-4 italic">{net.tagline}</p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{net.summary}</p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-sm font-bold text-green-600 mb-2">STRENGTHS</h4>
                        <ul className="space-y-1">
                          {net.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-green-500 mt-0.5">✓</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-400 mb-2">CONSIDERATIONS</h4>
                        <ul className="space-y-1">
                          {net.cons.map((con, i) => (
                            <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                              <span className="text-gray-400 mt-0.5">—</span> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-4">
                      <strong>Best for:</strong> {net.bestFor}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href={net.buyUrl}
                        target="_blank"
                        className="inline-flex items-center justify-center px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        Buy {net.name.split(' ')[0]} →
                      </a>
                      <Link 
                        href={net.detailUrl}
                        className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-500 transition-colors text-sm"
                      >
                        Full Review
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Recommendation</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            <strong>There's no single "best" net — it depends on how you play.</strong> If you're a competitive player 
            who needs tournament-grade equipment, go Selkirk. If you run a facility and need durability with easy 
            repositioning, the Dominator is your pick. And if portability is king — travel, storage, convenience — 
            the SwiftNet is unbeatable.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            The good news? All three are regulation-sized, well-built, and backed by companies that care about pickleball. 
            You genuinely can't go wrong.
          </p>
          <Link 
            href="/blog/best-pickleball-nets-2026"
            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            Read our full comparison blog post →
          </Link>
        </div>
      </section>
    </div>
  )
}