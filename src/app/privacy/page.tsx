import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for BestSportsSurfaces.com',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose">
        <p>Last updated: January 2026</p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly, including name, email address, phone number, and ZIP code when you submit inquiry forms or create an account. We also collect usage data such as pages visited, search queries, and interactions with vendor listings.</p>

        <h2>How We Use Your Information</h2>
        <p>We use your information to connect you with sports surface contractors, improve our services, send relevant communications, and process vendor subscriptions. We never sell your personal information to third parties.</p>

        <h2>Information Sharing</h2>
        <p>When you submit an inquiry form, your contact details are shared with the selected contractor so they can provide a quote. We may share anonymized, aggregated data for analytics purposes.</p>

        <h2>Cookies</h2>
        <p>We use cookies and similar technologies to enhance your experience, remember preferences, and analyze site traffic. You can control cookies through your browser settings.</p>

        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data, including encryption and secure server infrastructure.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at privacy@bestsportssurfaces.com.</p>

        <h2>Contact</h2>
        <p>For privacy-related questions, email us at privacy@bestsportssurfaces.com.</p>
      </div>
    </div>
  );
}
