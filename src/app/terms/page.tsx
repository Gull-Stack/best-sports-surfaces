import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for BestSportsSurfaces.com',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-text-primary mb-8">Terms of Service</h1>
      <div className="prose">
        <p>Last updated: January 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing and using BestSportsSurfaces.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

        <h2>Description of Service</h2>
        <p>BestSportsSurfaces.com is a directory and lead generation platform connecting consumers with sports surface construction contractors. We do not directly provide construction services.</p>

        <h2>User Responsibilities</h2>
        <p>Users agree to provide accurate information, use the service for lawful purposes, and not attempt to circumvent security measures or scrape data from the platform.</p>

        <h2>Contractor Listings</h2>
        <p>While we strive to verify contractor information, we do not guarantee the accuracy of listings. Users should independently verify contractor credentials, licenses, and insurance before hiring.</p>

        <h2>Vendor Subscriptions</h2>
        <p>Premium vendor subscriptions are billed monthly at the current rate. Vendors may cancel at any time. Refunds are not provided for partial billing periods.</p>

        <h2>Limitation of Liability</h2>
        <p>BestSportsSurfaces.com is not liable for any disputes between users and contractors, quality of work performed, or any damages arising from use of the platform.</p>

        <h2>Intellectual Property</h2>
        <p>All content, design, and functionality of BestSportsSurfaces.com is owned by us and protected by intellectual property laws.</p>

        <h2>Modifications</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.</p>

        <h2>Contact</h2>
        <p>For questions about these terms, email legal@bestsportssurfaces.com.</p>
      </div>
    </div>
  );
}
