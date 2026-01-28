'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Download } from 'lucide-react';

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data } = await supabase.from('inquiries').select('*, vendors(name)').order('created_at', { ascending: false });
      setInquiries(data || []);
    };
    load();
  }, []);

  const exportCsv = () => {
    const csv = 'Name,Email,Phone,ZIP,Sport,Service,Message,Status,Date\n' +
      inquiries.map((i) => `"${i.name}","${i.email}","${i.phone}","${i.zip}","${i.sport_type}","${i.service_type}","${i.message?.replace(/"/g, '""')}","${i.status}","${i.created_at}"`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inquiries.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const statusColors: Record<string, 'blue' | 'amber' | 'gray'> = { new: 'blue', contacted: 'amber', closed: 'gray' };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">All Inquiries ({inquiries.length})</h1>
        <Button onClick={exportCsv} variant="outline" size="sm"><Download className="h-4 w-4 mr-1" /> Export CSV</Button>
      </div>

      <div className="space-y-3">
        {inquiries.map((inq) => (
          <Card key={inq.id} padding="md">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{inq.name}</h3>
                <p className="text-xs text-gray-500">{inq.email} | {inq.phone} | ZIP: {inq.zip}</p>
                <p className="text-xs text-gray-400 mt-0.5">Vendor: {inq.vendors?.name || 'General'}</p>
              </div>
              <div className="text-right">
                <Badge variant={statusColors[inq.status] || 'gray'}>{inq.status}</Badge>
                <p className="text-xs text-gray-400 mt-1">{new Date(inq.created_at).toLocaleDateString()}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{inq.message}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
