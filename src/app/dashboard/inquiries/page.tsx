import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

const statusColors = {
  new: 'blue' as const,
  contacted: 'amber' as const,
  closed: 'gray' as const,
};

export default async function InquiriesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/auth/login');

  const { data: vendor } = await supabase.from('vendors').select('id').eq('user_id', user.id).single();
  const { data: inquiries } = vendor
    ? await supabase.from('inquiries').select('*').eq('vendor_id', vendor.id).order('created_at', { ascending: false })
    : { data: [] };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Quote Requests</h1>

      {!inquiries?.length ? (
        <Card padding="lg" className="text-center">
          <p className="text-text-muted">No inquiries yet. They will appear here when customers request quotes.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <Card key={inquiry.id} padding="md">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-text-primary">{inquiry.name}</h3>
                  <p className="text-sm text-text-muted">{inquiry.email} {inquiry.phone && `| ${inquiry.phone}`}</p>
                </div>
                <div className="text-right">
                  <Badge variant={statusColors[inquiry.status as keyof typeof statusColors]}>{inquiry.status}</Badge>
                  <p className="text-xs text-text-muted mt-1">{formatDate(inquiry.created_at)}</p>
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                {inquiry.sport_type && <Badge variant="blue">{inquiry.sport_type}</Badge>}
                {inquiry.service_type && <Badge variant="green">{inquiry.service_type}</Badge>}
                {inquiry.zip && <Badge variant="gray">ZIP: {inquiry.zip}</Badge>}
              </div>
              <p className="text-sm text-text-secondary">{inquiry.message}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
