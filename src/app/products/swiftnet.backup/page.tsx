import Link from 'next/link'

export const metadata = {
  title: 'SwiftNet® Portable Pickleball Net | Best Sports Surfaces',
  description: 'The SwiftNet® is the ultimate portable pickleball net system. Ultra-lightweight, luggage-friendly, and regulation-sized. Perfect for players who want to play anywhere.',
}

const images = [
  'https://cdn.shopify.com/s/files/1/0613/9819/6498/files/DSC00157_d2a0cf50-96e4-4f3e-a8e1-7a1c5dc3b370.jpg?v=1729284222',
  'https://cdn.shopify.com/s/files/1/0613/9819/6498/files/DSC00149.jpg?v=1729284222',
]

export default function SwiftNetPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                ⭐ Featured Product
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                SwiftNet® Portable Pickleball Net
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The most portable regulation pickleball net on the market. Ultra-lightweight design 
                fits in a carry bag the size of luggage — take professional pickleball anywhere you go.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Ultra-lightweight — easiest net to transport</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Fits in included carry bag (luggage-sized)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Regulation size — 22 feet wide, official height</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Sets up in under 5 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Perfect for driveways, parks, gyms, and travel</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://swiftnet.pro/products/swiftnet%c2%ae" 
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Buy from SwiftNet →
                </a>
                <Link 
                  href="/products/pickleball-nets"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-500 transition-colors"
                >
                  Compare All Nets
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src={images[0]}
                alt="SwiftNet portable pickleball net set up outdoors"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why SwiftNet?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for players who refuse to let location stop them from playing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🧳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Storage Friendly</h3>
              <p className="text-gray-600">
                Packs down to the size of a piece of luggage. Store it in a closet, 
                car trunk, or take it on a plane. No garage space needed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🪶</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ultra Lightweight</h3>
              <p className="text-gray-600">
                The lightest regulation pickleball net available. One person can carry, 
                set up, and take down the entire system without breaking a sweat.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Setup</h3>
              <p className="text-gray-600">
                From bag to play in under 5 minutes. Simple assembly with no tools required. 
                Spend more time playing, less time setting up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">See It In Action</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <img 
                key={i}
                src={img}
                alt={`SwiftNet pickleball net in action ${i + 1}`}
                className="w-full rounded-xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who Is SwiftNet For?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🏠 Casual & Home Players</h3>
              <p className="text-gray-600">
                Play in your driveway, backyard, or local park. When you're done, pack it up 
                and store it anywhere — no permanent court needed.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">✈️ Traveling Players</h3>
              <p className="text-gray-600">
                Take your net on vacation, to the campground, or to a friend's house. 
                The carry bag makes it as easy to transport as luggage.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🏫 Community Organizers</h3>
              <p className="text-gray-600">
                Perfect for community centers, churches, and rec programs that need 
                a net they can set up and take down quickly for shared spaces.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🏋️ Coaches & Instructors</h3>
              <p className="text-gray-600">
                Mobile coaches love SwiftNet — bring a regulation net to any gym, 
                parking lot, or outdoor space for lessons and clinics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play Anywhere?</h2>
          <p className="text-green-100 text-lg mb-8">
            Get the SwiftNet and never worry about finding a court again
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://swiftnet.pro/products/swiftnet%c2%ae"
              target="_blank"
              className="px-8 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors"
            >
              Buy SwiftNet →
            </a>
            <Link 
              href="/products/pickleball-nets"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Compare All Nets
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}