import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Card from '@/components/ui/Card';
import StarRating from '@/components/ui/StarRating';
import { formatDate } from '@/lib/utils';

export default async function DashboardReviewsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/auth/login');

  const { data: vendor } = await supabase.from('vendors').select('id').eq('user_id', user.id).single();
  const { data: reviews } = vendor
    ? await supabase.from('reviews').select('*').eq('vendor_id', vendor.id).order('created_at', { ascending: false })
    : { data: [] };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Customer Reviews</h1>
      {!reviews?.length ? (
        <Card padding="lg" className="text-center"><p className="text-text-muted">No reviews yet.</p></Card>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id} padding="md">
              <div className="flex items-start justify-between mb-1">
                <span className="font-semibold text-text-primary">{review.author_name}</span>
                <span className="text-xs text-text-muted">{formatDate(review.created_at)}</span>
              </div>
              <StarRating rating={review.rating} size={14} />
              {review.title && <h4 className="font-medium mt-2">{review.title}</h4>}
              <p className="text-sm text-text-secondary mt-1">{review.content}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
