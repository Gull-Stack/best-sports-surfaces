import Link from 'next/link';
import { MapPin, Phone, ExternalLink, Mail, Shield, Award, Star } from 'lucide-react';
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
  const isFeatured = vendor.tier === 'featured';

  return (
    <div
      className={`relative rounded-xl border overflow-hidden transition-all ${
        isFeatured
          ? 'border-amber-500/40 shadow-lg shadow-amber-500/10 bg-surface-card ring-1 ring-amber-500/20'
          : isPaid
            ? 'border-neon/20 shadow-md shadow-neon/5 bg-surface-card hover:shadow-lg hover:border-neon/40'
            : 'border-border bg-surface-card hover:shadow-sm hover:border-border-hover'
      }`}
    >
      {/* Featured badge ribbon */}
      {isFeatured && (
        <div className="absolute top-0 right-0 z-10 bg-amber-500 text-surface text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
          <Star className="h-3 w-3 fill-current" /> Featured
        </div>
      )}

      {/* Cover image for paid vendors */}
      {isPaid && vendor.cover_image && (
        <Link href={`/vendors/${vendor.slug}`}>
          <div className="relative h-40 overflow-hidden">
            <img
              src={vendor.cover_image}
              alt={`${vendor.name} featured work`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-card/90 to-transparent" />
          </div>
        </Link>
      )}

      <div className="p-5">
        {/* Header: Logo + Name + Rating */}
        <div className="flex items-start gap-3 mb-3">
          {vendor.logo_url ? (
            <Link href={`/vendors/${vendor.slug}`} className="flex-shrink-0">
              <img
                src={vendor.logo_url}
                alt={vendor.name}
                className={`rounded-lg object-cover ${
                  isPaid ? 'w-14 h-14 ring-2 ring-neon/20' : 'w-10 h-10'
                }`}
              />
            </Link>
          ) : isPaid ? (
            <div className="w-14 h-14 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0">
              <span className="text-neon font-bold text-lg">
                {vendor.name.charAt(0)}
              </span>
            </div>
          ) : null}

          <div className="flex-1 min-w-0">
            <Link href={`/vendors/${vendor.slug}`} className="group">
              <h3
                className={`font-semibold group-hover:text-neon transition-colors truncate ${
                  isPaid ? 'text-lg text-text-primary' : 'text-base text-text-primary'
                }`}
              >
                {vendor.name}
              </h3>
            </Link>
            {(vendor.rating > 0 || vendor.review_count > 0) && (
              <div className="flex items-center gap-2 mt-0.5">
                <StarRating rating={vendor.rating} size={14} showValue count={vendor.review_count} />
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-3 line-clamp-2">
          {vendor.short_description || vendor.description}
        </p>

        {/* Location + Distance */}
        <div className="flex items-center gap-1 text-sm text-text-muted mb-3">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>{vendor.city}, {vendor.state}</span>
          {showDistance && distance !== undefined && (
            <span className="text-text-muted/60 ml-1">({distance.toFixed(1)} mi)</span>
          )}
        </div>

        {/* Sport type badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {vendor.sport_types.slice(0, 4).map((sport) => (
            <Badge key={sport} variant="blue">{sport.replace(/-/g, ' ')}</Badge>
          ))}
          {vendor.sport_types.length > 4 && (
            <Badge variant="gray">+{vendor.sport_types.length - 4} more</Badge>
          )}
        </div>

        {/* Trust signals */}
        <div className="flex items-center gap-3 mb-4">
          {vendor.is_verified && (
            <span className="flex items-center gap-1 text-xs text-neon font-medium">
              <Shield className="h-3.5 w-3.5" /> Verified
            </span>
          )}
          {isPaid && vendor.years_in_business > 0 && (
            <span className="flex items-center gap-1 text-xs text-text-muted">
              <Award className="h-3.5 w-3.5" /> {vendor.years_in_business}+ years
            </span>
          )}
        </div>

        {/* Contact info row — paid only */}
        {isPaid && (vendor.phone || vendor.email || vendor.website) && (
          <div className="flex flex-wrap items-center gap-3 mb-4 py-3 px-3 bg-neon-subtle rounded-lg text-sm">
            {vendor.phone && (
              <a href={`tel:${vendor.phone}`} className="flex items-center gap-1.5 text-neon hover:text-neon-hover font-medium">
                <Phone className="h-3.5 w-3.5" /> {vendor.phone}
              </a>
            )}
            {vendor.website && (
              <a
                href={vendor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neon hover:text-neon-hover font-medium"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Website
              </a>
            )}
            {vendor.email && (
              <a href={`mailto:${vendor.email}`} className="flex items-center gap-1.5 text-neon hover:text-neon-hover font-medium">
                <Mail className="h-3.5 w-3.5" /> Email
              </a>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Link
            href={`/vendors/${vendor.slug}`}
            className={`flex-1 text-center py-2.5 text-sm font-semibold rounded-lg transition-colors ${
              isFeatured
                ? 'bg-amber-500 text-surface hover:bg-amber-600'
                : isPaid
                  ? 'bg-neon text-surface hover:bg-neon-hover'
                  : 'bg-surface-hover text-text-secondary hover:bg-border hover:text-text-primary'
            }`}
          >
            {isPaid ? 'View Profile & Contact' : 'Get a Free Quote'}
          </Link>
        </div>

        {/* Claim prompt for free vendors */}
        {!isPaid && (
          <div className="mt-3 pt-3 border-t border-border">
            <Link
              href="/vendor/claim"
              className="text-xs text-text-muted hover:text-neon transition-colors"
            >
              Is this your business? <span className="underline">Claim this listing</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
