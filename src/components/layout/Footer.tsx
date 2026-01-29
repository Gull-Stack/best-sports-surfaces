import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import NewsletterForm from '@/components/forms/NewsletterForm';

const footerLinks = {
  'Sport Types': [
    { href: '/search?sport=tennis', label: 'Tennis Courts' },
    { href: '/search?sport=basketball', label: 'Basketball Courts' },
    { href: '/search?sport=pickleball', label: 'Pickleball Courts' },
    { href: '/search?sport=soccer', label: 'Soccer Fields' },
    { href: '/search?sport=track', label: 'Running Tracks' },
  ],
  'Resources': [
    { href: '/cost-estimator', label: 'Cost Estimator' },
    { href: '/blog', label: 'Blog' },
    { href: '/locations', label: 'Locations' },
  ],
  'Company': [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
  'For Contractors': [
    { href: '/auth/signup', label: 'List Your Business' },
    { href: '/auth/login', label: 'Contractor Login' },
    { href: '/vendor/claim', label: 'Claim Your Listing' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-plum text-parchment">
      <div className="border-t-2 border-parchment/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-parchment font-semibold mb-3">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-parchment font-semibold mb-3">Newsletter</h3>
            <p className="text-sm mb-3">Get tips on sports surface construction and maintenance.</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-plum-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="text-sm">Sponsored by <a href="https://atsports.com" target="_blank" rel="noopener noreferrer" className="text-parchment hover:text-white">ATSports.com</a></p>
        </div>
      </div>
    </footer>
  );
}
