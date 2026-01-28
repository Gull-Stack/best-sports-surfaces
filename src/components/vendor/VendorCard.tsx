import Link from 'next/link';
import { MapPin, Phone, ExternalLink, Shield, Award } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import StarRating from '@/components/ui/StarRating';
import type { Vendor } from '@/types';

interface VendorCardProps {
  vendor: Vendor;
  showDistance?: boolean;
  distance?: number;
}

export default function VendorCard({ vendor, showDistance, distance }: VendorCardProps) {
  const isPaid = vendor.tier === 'paid' || vendor.tier === 'featured';

  return (
    <Card hover className="relative">
      {vendor.is_featured && (
        <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
          Featured
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <Link href={`/vendors/${vendor.slug}`} className="group">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                {vendor.name}
              </h3>
            </Link>
            <div className="flex items-center gap-2 mt-1">
              <StarRating rating={vendor.rating} size={14} showValue count={vendor.review_count} />
            </div>
          </div>
          {vendor.logo_url && (
            <img src={vendor.logo_url} alt={vendor.name} className="w-12 h-12 rounded-lg object-cover ml-3" />
          )}
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {vendor.short_description || vendor.description}
        </p>

        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>{vendor.city}, {vendor.state}</span>
          {showDistance && distance !== undefined && (
            <span className="text-gray-400 ml-1">({distance.toFixed(1)} mi)</span>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {vendor.sport_types.slice(0, 4).map((sport) => (
            <Badge key={sport} variant="blue">{sport.replace('-', ' ')}</Badge>
          ))}
          {vendor.sport_types.length > 4 && (
            <Badge variant="gray">+{vendor.sport_types.length - 4} more</Badge>
          )}
        </div>

        <div className="flex items-center gap-3">
          {vendor.is_verified && (
            <span className="flex items-center gap-1 text-xs text-green-600">
              <Shield className="h-3.5 w-3.5" /> Verified
            </span>
          )}
          {isPaid && vendor.years_in_business > 0 && (
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Award className="h-3.5 w-3.5" /> {vendor.years_in_business}+ years
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Link
            href={`/vendors/${vendor.slug}`}
            className="flex-1 text-center py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            {isPaid ? 'View Profile' : 'Get a Free Quote'}
          </Link>
          {isPaid && vendor.phone && (
            <a
              href={`tel:${vendor.phone}`}
              className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              aria-label="Call"
            >
              <Phone className="h-4 w-4 text-gray-600" />
            </a>
          )}
          {isPaid && vendor.website && (
            <a
              href={vendor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              aria-label="Visit website"
            >
              <ExternalLink className="h-4 w-4 text-gray-600" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
