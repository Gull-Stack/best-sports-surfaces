'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SPORT_TYPES, SERVICE_TYPES } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { CheckCircle } from 'lucide-react';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  zip: z.string().min(5, 'ZIP code is required').max(5),
  sport_type: z.string().min(1, 'Select a sport type'),
  service_type: z.string().min(1, 'Select a service type'),
  message: z.string().min(10, 'Please provide some details about your project'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  vendorId?: string;
  vendorName?: string;
}

export default function InquiryForm({ vendorId, vendorName }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    try {
      setSubmitError('');
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, vendor_id: vendorId }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-12 w-12 text-brand mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900">Quote Request Submitted!</h3>
        <p className="text-gray-600 mt-1">
          {vendorName ? `${vendorName} will` : 'A contractor will'} be in touch within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        {vendorName ? `Request a Quote from ${vendorName}` : 'Get a Free Quote'}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Full Name" {...register('name')} error={errors.name?.message} placeholder="John Smith" />
        <Input label="Email" type="email" {...register('email')} error={errors.email?.message} placeholder="john@example.com" />
        <Input label="Phone (optional)" type="tel" {...register('phone')} placeholder="(555) 123-4567" />
        <Input label="ZIP Code" {...register('zip')} error={errors.zip?.message} placeholder="12345" maxLength={5} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sport Type</label>
          <select {...register('sport_type')} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand">
            <option value="">Select type...</option>
            {SPORT_TYPES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          {errors.sport_type && <p className="mt-1 text-sm text-red-600">{errors.sport_type.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
          <select {...register('service_type')} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand">
            <option value="">Select service...</option>
            {SERVICE_TYPES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          {errors.service_type && <p className="mt-1 text-sm text-red-600">{errors.service_type.message}</p>}
        </div>
      </div>
      <Textarea label="Project Details" {...register('message')} error={errors.message?.message} placeholder="Tell us about your project: dimensions, current condition, timeline..." />
      {submitError && <p className="text-sm text-red-600">{submitError}</p>}
      <Button type="submit" loading={isSubmitting} className="w-full" size="lg">
        Submit Quote Request
      </Button>
      <p className="text-xs text-gray-500 text-center">Free, no-obligation quote. We respect your privacy.</p>
    </form>
  );
}
