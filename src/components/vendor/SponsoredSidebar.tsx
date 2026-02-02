import type { SponsoredProduct } from '@/types';

interface SponsoredSidebarProps {
  products: SponsoredProduct[];
}

export default function SponsoredSidebar({ products }: SponsoredSidebarProps) {
  if (!products.length) return null;

  return (
    <div className="bg-surface-raised rounded-xl p-4 border border-border">
      <p className="text-xs text-text-muted uppercase tracking-wide mb-3">Sponsored</p>
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
            <h4 className="text-sm font-semibold text-text-primary group-hover:text-neon">{product.name}</h4>
            <p className="text-xs text-text-muted mt-0.5">{product.description}</p>
            <p className="text-xs text-text-muted mt-1">by {product.sponsor_name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
