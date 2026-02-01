export type VendorTier = 'free' | 'paid' | 'featured';
export type SportType = 'tennis' | 'basketball' | 'pickleball' | 'soccer' | 'football' | 'baseball' | 'track' | 'multi-sport' | 'volleyball' | 'gym-flooring';
export type ServiceType = 'new-construction' | 'resurfacing' | 'repair' | 'maintenance' | 'lighting' | 'fencing' | 'design';

export interface Vendor {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
  sport_types: SportType[];
  service_types: ServiceType[];
  service_area_miles: number;
  tier: VendorTier;
  is_verified: boolean;
  is_featured: boolean;
  rating: number;
  review_count: number;
  years_in_business: number;
  license_number: string | null;
  insurance_verified: boolean;
  logo_url: string | null;
  cover_image: string | null;
  gallery_urls: string[];
  user_id: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface Inquiry {
  id: string;
  vendor_id: string;
  name: string;
  email: string;
  phone: string;
  zip: string;
  sport_type: SportType;
  service_type: ServiceType;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured_image: string;
  author: string;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  vendor_id: string;
  author_name: string;
  rating: number;
  title: string;
  content: string;
  is_verified: boolean;
  is_approved: boolean;
  created_at: string;
}

export interface City {
  id: string;
  name: string;
  slug: string;
  state: string;
  state_code: string;
  latitude: number;
  longitude: number;
  population: number;
  description: string;
  seo_title: string;
  seo_description: string;
  created_at: string;
}

export interface SponsoredProduct {
  id: string;
  name: string;
  description: string;
  image_url: string;
  link_url: string;
  sponsor_name: string;
  placement: 'sidebar' | 'banner' | 'inline';
  is_active: boolean;
  created_at: string;
}

export interface AnalyticsEvent {
  id: string;
  event_type: 'view' | 'click' | 'inquiry' | 'call' | 'website_click';
  vendor_id: string | null;
  metadata: Record<string, unknown>;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
}

export interface VendorClaim {
  id: string;
  vendor_id: string;
  user_id: string;
  business_name: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  proof_document_url: string | null;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  reviewed_at: string | null;
}

export interface SearchFilters {
  query: string;
  zip: string;
  sportType: SportType | '';
  serviceType: ServiceType | '';
  radius: number;
  minRating: number;
  verified: boolean;
  sort: 'relevance' | 'rating' | 'distance';
  page: number;
}

export interface CostEstimate {
  sportType: SportType;
  width: number;
  length: number;
  surfaceType: string;
  extras: string[];
  location: string;
  lowEstimate: number;
  highEstimate: number;
  breakdown: { item: string; low: number; high: number }[];
}
