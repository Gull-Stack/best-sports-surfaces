'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import StarRating from '@/components/ui/StarRating';

interface ReviewWithVendor {
  id: string;
  vendor_id: string;
  author_name: string;
  rating: number;
  title: string;
  content: string;
  is_approved: boolean;
  created_at: string;
  vendors: { name: string } | null;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<ReviewWithVendor[]>([]);
  const [filter, setFilter] = useState<'pending' | 'approved' | 'all'>('pending');

  useEffect(() => {
    loadReviews();
  }, [filter]);

  const loadReviews = async () => {
    const supabase = createClient();
    let query = supabase.from('reviews').select('*, vendors(name)').order('created_at', { ascending: false });
    if (filter === 'pending') query = query.eq('is_approved', false);
    if (filter === 'approved') query = query.eq('is_approved', true);
    const { data } = await query;
    setReviews((data as unknown as ReviewWithVendor[]) || []);
  };

  const handleAction = async (id: string, approved: boolean) => {
    const supabase = createClient();
    await supabase.from('reviews').update({ is_approved: approved }).eq('id', id);
    loadReviews();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Moderate Reviews</h1>

      <div className="flex gap-2 mb-6">
        {(['pending', 'approved', 'all'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${filter === f ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} padding="md">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
                <p className="text-xs text-gray-500">for {review.vendors?.name || 'Unknown Vendor'}</p>
              </div>
              <Badge variant={review.is_approved ? 'green' : 'amber'}>
                {review.is_approved ? 'Approved' : 'Pending'}
              </Badge>
            </div>
            <StarRating rating={review.rating} size={14} />
            {review.title && <h4 className="font-medium text-gray-800 mt-2">{review.title}</h4>}
            <p className="text-sm text-gray-600 mt-1">{review.content}</p>
            {!review.is_approved && (
              <div className="flex gap-2 mt-3">
                <Button size="sm" onClick={() => handleAction(review.id, true)}>Approve</Button>
                <Button size="sm" variant="ghost" onClick={() => handleAction(review.id, false)}>Reject</Button>
              </div>
            )}
          </Card>
        ))}
        {reviews.length === 0 && <p className="text-gray-500 text-center py-8">No reviews found.</p>}
      </div>
    </div>
  );
}
