export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          BestSportsSurfaces.com
        </h1>
        <p className="text-xl mb-8 text-slate-300">
          Under maintenance - back online shortly
        </p>
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Find Sports Surface Contractors</h2>
          <p className="text-slate-400 mb-4">
            We're temporarily updating our directory. For immediate assistance:
          </p>
          <a 
            href="mailto:contact@bestsportssurfaces.com" 
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
        <p className="text-slate-500">
          Expected restoration: within 24 hours
        </p>
      </div>
    </main>
  );
}