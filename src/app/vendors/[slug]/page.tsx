import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Shield, Award, Clock, CheckCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import StarRating from '@/components/ui/StarRating';
import VendorBadge from '@/components/vendor/VendorBadge';
import VendorGallery from '@/components/vendor/VendorGallery';
import InquiryForm from '@/components/forms/InquiryForm';
import MapComponent from '@/components/ui/DynamicMap';
import SchemaOrg, { localBusinessSchema } from '@/components/seo/SchemaOrg';
import type { Vendor, Review } from '@/types';

interface Props {
  params: Promise<{ slug: string }>;
}

async function getVendor(slug: string): Promise<Vendor | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('vendors')
    .select('*')
    .eq('slug', slug)
    .single();
  return data;
}

async function getReviews(vendorId: string): Promise<Review[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('reviews')
    .select('*')
    .eq('vendor_id', vendorId)
    .eq('is_approved', true)
    .order('created_at', { ascending: false });
  return data || [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vendor = await getVendor(slug);
  if (!vendor) return { title: 'Vendor Not Found' };

  return {
    title: `${vendor.name} - Sports Surface Contractor in ${vendor.city}, ${vendor.state}`,
    description: vendor.short_description || `${vendor.name} is a sports surface contractor in ${vendor.city}, ${vendor.state}. ${vendor.sport_types.join(', ')} specialists.`,
    openGraph: {
      title: vendor.name,
      description: vendor.short_description,
      images: vendor.logo_url ? [vendor.logo_url] : undefined,
    },
  };
}

export default async function VendorPage({ params }: Props) {
  const { slug } = await params;
  const vendor = await getVendor(slug);
  if (!vendor) notFound();

  const reviews = await getReviews(vendor.id);
  const isPaid = vendor.tier === 'paid' || vendor.tier === 'featured';

  // Track view
  fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/analytics`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event_type: 'view', vendor_id: vendor.id }),
  }).catch(() => {});

  return (
    <>
      <SchemaOrg schema={localBusinessSchema(vendor)} />

      {/* Premium Hero Section for Paid/Featured Vendors */}
      {isPaid && (vendor.cover_image || vendor.gallery_urls?.length > 0) && (
        <div className="relative h-72 md:h-80 overflow-hidden">
          <img 
            src={vendor.cover_image || vendor.gallery_urls[0]} 
            alt={`${vendor.name} featured work`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="max-w-7xl mx-auto px-4">
              {/* Badges row */}
              <div className="flex items-center gap-3 flex-wrap mb-4">
                <VendorBadge tier={vendor.tier} />
              </div>
              {/* Logo + Name row */}
              <div className="flex items-center gap-5">
                {vendor.logo_url && (
                  <img src={vendor.logo_url} alt={vendor.name} className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover ring-4 ring-surface shadow-2xl flex-shrink-0" />
                )}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{vendor.name}</h1>
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <StarRating rating={vendor.rating} showValue count={vendor.review_count} />
                    <span className="flex items-center gap-1 text-white/80">
                      <MapPin className="h-4 w-4" />
                      {vendor.city}, {vendor.state}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`max-w-7xl mx-auto px-4 ${isPaid && (vendor.cover_image || vendor.gallery_urls?.length > 0) ? 'pt-8 pb-8' : 'py-8'}`}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header for Free Tier (no hero image) */}
            {!isPaid && (
              <div className="flex items-start gap-4 mb-6">
                {vendor.logo_url && (
                  <img src={vendor.logo_url} alt={vendor.name} className="w-20 h-20 rounded-xl object-cover ring-2 ring-border" />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{vendor.name}</h1>
                    <VendorBadge tier={vendor.tier} />
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <StarRating rating={vendor.rating} showValue count={vendor.review_count} />
                  </div>
                  <div className="flex items-center gap-1 text-text-muted mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{vendor.city}, {vendor.state}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Info */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
              {vendor.is_verified && (
                <div className="flex items-center gap-2 text-sm text-neon">
                  <Shield className="h-4 w-4" /> Verified
                </div>
              )}
              {vendor.years_in_business > 0 && (
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Clock className="h-4 w-4" /> {vendor.years_in_business}+ years
                </div>
              )}
              {vendor.insurance_verified && (
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle className="h-4 w-4" /> Insured
                </div>
              )}
              {vendor.license_number && (
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Award className="h-4 w-4" /> License #{vendor.license_number}
                </div>
              )}
              {(vendor as any).is_acrytech_partner && (
                <div className="flex items-center gap-2 text-sm text-neon">
                  <img src="/logos/acrytech-logo-white.png" alt="Acrytech" className="h-4 w-auto" /> Acrytech Partner
                </div>
              )}
            </div>

            {/* Contact Info (paid only) */}
            {isPaid && (
              <Card padding="md" className="mb-6 bg-neon-subtle border-neon/20">
                <div className="flex flex-wrap gap-4">
                  {vendor.phone && (
                    <a href={`tel:${vendor.phone}`} className="flex items-center gap-2 text-neon hover:text-neon-hover font-medium">
                      <Phone className="h-4 w-4" /> {vendor.phone}
                    </a>
                  )}
                  {vendor.website && (
                    <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neon hover:text-neon-hover font-medium">
                      <Globe className="h-4 w-4" /> Visit Website
                    </a>
                  )}
                  {vendor.email && (
                    <a href={`mailto:${vendor.email}`} className="flex items-center gap-2 text-neon hover:text-neon-hover font-medium">
                      <Mail className="h-4 w-4" /> Email
                    </a>
                  )}
                </div>
              </Card>
            )}

            {/* Description */}
            <Card padding="md" className="mb-6">
              <h2 className="text-lg font-semibold text-text-primary mb-3">About {vendor.name}</h2>
              <p className="text-text-secondary leading-relaxed">
                {isPaid ? vendor.description : (vendor.short_description || vendor.description?.slice(0, 200) + '...')}
              </p>
            </Card>

            {/* Sport Types */}
            <Card padding="md" className="mb-6">
              <h2 className="text-lg font-semibold text-text-primary mb-3">Sports & Services</h2>
              <div className="mb-3">
                <h3 className="text-sm font-medium text-text-muted mb-2">Sport Types</h3>
                <div className="flex flex-wrap gap-2">
                  {vendor.sport_types.map((sport) => (
                    <Badge key={sport} variant="blue">{sport.replace(/-/g, ' ')}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-text-muted mb-2">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {vendor.service_types.map((service) => (
                    <Badge key={service} variant="green">{service.replace(/-/g, ' ')}</Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Gallery (paid only) */}
            {isPaid && vendor.gallery_urls.length > 0 && (
              <Card padding="md" className="mb-6">
                <h2 className="text-lg font-semibold text-text-primary mb-3">Project Gallery</h2>
                <VendorGallery images={vendor.gallery_urls} vendorName={vendor.name} />
              </Card>
            )}

            {/* Service Area Map */}
            <Card padding="md" className="mb-6">
              <h2 className="text-lg font-semibold text-text-primary mb-3">Service Area</h2>
              <p className="text-sm text-text-secondary mb-3">Serves areas within {vendor.service_area_miles} miles of {vendor.city}, {vendor.state}</p>
              <div className="rounded-lg overflow-hidden border border-border">
                <MapComponent
                  pins={[{ id: vendor.id, latitude: vendor.latitude, longitude: vendor.longitude, title: vendor.name, tier: vendor.tier }]}
                  center={{ lat: vendor.latitude, lng: vendor.longitude }}
                  zoom={9}
                  className="h-64"
                />
              </div>
            </Card>

            {/* Reviews */}
            <Card padding="md" className="mb-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                Reviews ({reviews.length})
              </h2>
              {reviews.length === 0 ? (
                <p className="text-text-muted">No reviews yet.</p>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-text-primary">{review.author_name}</span>
                        <span className="text-xs text-text-muted">{new Date(review.created_at).toLocaleDateString()}</span>
                      </div>
                      <StarRating rating={review.rating} size={14} />
                      {review.title && <h4 className="font-medium text-text-primary mt-2">{review.title}</h4>}
                      <p className="text-text-secondary text-sm mt-1">{review.content}</p>
                      {review.is_verified && (
                        <span className="text-xs text-neon flex items-center gap-1 mt-2">
                          <CheckCircle className="h-3 w-3" /> Verified Customer
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-96">
            <div className="sticky top-20 space-y-6">
              <Card padding="lg">
                <InquiryForm vendorId={vendor.id} vendorName={vendor.name} />
              </Card>

              {!isPaid && (
                <Card padding="md" className="bg-surface-hover">
                  <p className="text-sm text-text-secondary">
                    <strong className="text-text-primary">Is this your business?</strong> Claim your listing to add direct contact info, photos, and more.
                  </p>
                  <Link href={`/vendor/claim?slug=${vendor.slug}`} className="text-neon text-sm font-medium hover:underline mt-2 block">
                    Claim This Listing &rarr;
                  </Link>
                </Card>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
