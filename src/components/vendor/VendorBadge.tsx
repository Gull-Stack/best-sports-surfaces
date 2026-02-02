import { Shield, Award, Star } from 'lucide-react';
import type { VendorTier } from '@/types';

interface VendorBadgeProps {
  tier: VendorTier;
  className?: string;
}

const tierConfig = {
  free: { label: 'Basic Listing', icon: null, className: 'bg-surface-hover text-text-muted' },
  paid: { label: 'Premium', icon: Shield, className: 'bg-neon-subtle text-neon' },
  featured: { label: 'Featured', icon: Award, className: 'bg-amber-500/15 text-amber-400' },
};

export default function VendorBadge({ tier, className = '' }: VendorBadgeProps) {
  const config = tierConfig[tier];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${config.className} ${className}`}>
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {config.label}
    </span>
  );
}
