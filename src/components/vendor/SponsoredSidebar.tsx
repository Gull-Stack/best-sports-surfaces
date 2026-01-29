import type { SponsoredProduct } from '@/types';

interface SponsoredSidebarProps {
  products: SponsoredProduct[];
}

export default function SponsoredSidebar({ products }: SponsoredSidebarProps) {
  if (!products.length) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
      <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Sponsored</p>
      <div className="space-y-4">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.link_url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block group"
          >
            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full rounded-lg mb-2 group-hover:opacity-90 transition-opacity"
              />
            )}
            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-brand">{product.name}</h4>
            <p className="text-xs text-gray-500 mt-0.5">{product.description}</p>
            <p className="text-xs text-gray-400 mt-1">by {product.sponsor_name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
