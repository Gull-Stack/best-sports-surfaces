export const SITE_NAME = 'BestSportsSurfaces.com';
export const SITE_DESCRIPTION = 'Find trusted sports surface contractors near you. Compare quotes for tennis courts, basketball courts, pickleball courts, and more.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bestsportssurfaces.com';

export const SPORT_TYPES = [
  { value: 'tennis', label: 'Tennis Courts', icon: '🎾' },
  { value: 'basketball', label: 'Basketball Courts', icon: '🏀' },
  { value: 'pickleball', label: 'Pickleball Courts', icon: '🏓' },
  { value: 'soccer', label: 'Soccer Fields', icon: '⚽' },
  { value: 'football', label: 'Football Fields', icon: '🏈' },
  { value: 'baseball', label: 'Baseball Fields', icon: '⚾' },
  { value: 'track', label: 'Running Tracks', icon: '🏃' },
  { value: 'multi-sport', label: 'Multi-Sport Courts', icon: '🏅' },
  { value: 'volleyball', label: 'Volleyball Courts', icon: '🏐' },
  { value: 'gym-flooring', label: 'Gym Flooring', icon: '🏋️' },
] as const;

export const SERVICE_TYPES = [
  { value: 'new-construction', label: 'New Construction' },
  { value: 'resurfacing', label: 'Resurfacing' },
  { value: 'repair', label: 'Repair' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'lighting', label: 'Lighting Installation' },
  { value: 'fencing', label: 'Fencing' },
  { value: 'design', label: 'Design & Planning' },
] as const;

export const VENDOR_TIERS = {
  free: { name: 'Free', color: 'blue', features: ['Basic listing', 'Lead capture via BSS'] },
  paid: { name: 'Premium', color: 'green', price: 99, features: ['Direct contact info', 'Full gallery', 'Priority placement', 'Analytics dashboard'] },
  featured: { name: 'Featured', color: 'amber', features: ['All Premium features', 'Homepage spotlight', 'Top search placement', 'Featured badge'] },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/search', label: 'Find Contractors' },
  { href: '/cost-estimator', label: 'Cost Estimator' },
  { href: '/blog', label: 'Blog' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact', label: 'Contact' },
] as const;

export const ITEMS_PER_PAGE = 12;
export const DEFAULT_SEARCH_RADIUS = 50;
export const MAX_SEARCH_RADIUS = 200;
export const US_CENTER = { lat: 39.8283, lng: -98.5795 };
export const DEFAULT_ZOOM = 4;
