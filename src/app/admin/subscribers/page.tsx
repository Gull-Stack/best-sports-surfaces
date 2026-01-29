'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Download } from 'lucide-react';

export default function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState<{ id: string; email: string; subscribed_at: string; is_active: boolean }[]>([]);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data } = await supabase.from('newsletter_subscribers').select('*').order('subscribed_at', { ascending: false });
      setSubscribers(data || []);
    };
    load();
  }, []);

  const exportCsv = () => {
    const csv = 'Email,Subscribed At,Active\n' +
      subscribers.map((s) => `${s.email},${s.subscribed_at},${s.is_active}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subscribers.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers ({subscribers.length})</h1>
        <Button onClick={exportCsv} variant="outline" size="sm"><Download className="h-4 w-4 mr-1" /> Export CSV</Button>
      </div>

      <Card padding="none">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-3 text-left font-semibold text-gray-600">Email</th>
              <th className="p-3 text-left font-semibold text-gray-600">Subscribed</th>
              <th className="p-3 text-left font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub) => (
              <tr key={sub.id} className="border-b hover:bg-gray-50">
                <td className="p-3 text-gray-900">{sub.email}</td>
                <td className="p-3 text-gray-600">{new Date(sub.subscribed_at).toLocaleDateString()}</td>
                <td className="p-3">{sub.is_active ? <span className="text-brand">Active</span> : <span className="text-gray-400">Inactive</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
