import { Shield, Award, Star } from 'lucide-react';
import type { VendorTier } from '@/types';

interface VendorBadgeProps {
  tier: VendorTier;
  className?: string;
}

const tierConfig = {
  free: { label: 'Basic Listing', icon: null, className: 'bg-gray-100 text-gray-600' },
  paid: { label: 'Premium', icon: Shield, className: 'bg-green-100 text-green-700' },
  featured: { label: 'Featured', icon: Award, className: 'bg-amber-100 text-amber-700' },
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
