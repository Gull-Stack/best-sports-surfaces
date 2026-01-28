import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with BestSportsSurfaces.com. We\'re here to help with questions about sports surface construction.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Have a question or need help? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="lg:col-span-2">
          <Card padding="lg">
            <ContactForm />
          </Card>
        </div>
        <div className="space-y-4">
          <Card padding="md">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-sm text-gray-600">info@bestsportssurfaces.com</p>
              </div>
            </div>
          </Card>
          <Card padding="md">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600">(555) 123-4567</p>
              </div>
            </div>
          </Card>
          <Card padding="md">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-sm text-gray-600">Austin, TX 78701</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
