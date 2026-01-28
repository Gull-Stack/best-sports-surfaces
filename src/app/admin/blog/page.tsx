'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Link from 'next/link';
import { Plus, Edit2, Eye } from 'lucide-react';

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);

  useEffect(() => { loadPosts(); }, []);

  const loadPosts = async () => {
    const supabase = createClient();
    const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    setPosts(data || []);
  };

  const handleSave = async () => {
    if (!editing) return;
    const supabase = createClient();
    const slug = editing.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
    const payload = { ...editing, slug, updated_at: new Date().toISOString() };
    delete payload.id;

    if (editing.id) {
      await supabase.from('blog_posts').update(payload).eq('id', editing.id);
    } else {
      await supabase.from('blog_posts').insert(payload);
    }
    setEditing(null);
    loadPosts();
  };

  if (editing) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{editing.id ? 'Edit' : 'New'} Blog Post</h1>
        <div className="space-y-4">
          <Input label="Title" value={editing.title || ''} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
          <Input label="Category" value={editing.category || ''} onChange={(e) => setEditing({ ...editing, category: e.target.value })} placeholder="e.g. Tennis, Basketball, Cost Guides" />
          <Input label="Featured Image URL" value={editing.featured_image || ''} onChange={(e) => setEditing({ ...editing, featured_image: e.target.value })} />
          <Textarea label="Excerpt" value={editing.excerpt || ''} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} rows={2} />
          <Textarea label="Content (HTML)" value={editing.content || ''} onChange={(e) => setEditing({ ...editing, content: e.target.value })} rows={20} />
          <Input label="Tags (comma-separated)" value={(editing.tags || []).join(', ')} onChange={(e) => setEditing({ ...editing, tags: e.target.value.split(',').map((t: string) => t.trim()).filter(Boolean) })} />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={editing.published || false} onChange={(e) => setEditing({ ...editing, published: e.target.checked, published_at: e.target.checked ? new Date().toISOString() : null })} className="rounded" />
            Published
          </label>
          <div className="flex gap-2">
            <Button onClick={handleSave}>Save</Button>
            <Button variant="ghost" onClick={() => setEditing(null)}>Cancel</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts ({posts.length})</h1>
        <div className="flex gap-2">
          <Link href="/admin" className="text-sm text-green-600 hover:underline">&larr; Admin</Link>
          <Button size="sm" onClick={() => setEditing({ title: '', content: '', excerpt: '', category: '', tags: [], published: false })}><Plus className="h-4 w-4 mr-1" /> New Post</Button>
        </div>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <Card key={post.id} padding="md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{post.title}</h3>
                <div className="flex gap-2 mt-1">
                  <Badge variant={post.published ? 'green' : 'gray'}>{post.published ? 'Published' : 'Draft'}</Badge>
                  {post.category && <Badge variant="blue">{post.category}</Badge>}
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditing(post)} className="p-1.5 hover:bg-gray-100 rounded"><Edit2 className="h-4 w-4" /></button>
                {post.published && <Link href={`/blog/${post.slug}`} className="p-1.5 hover:bg-gray-100 rounded"><Eye className="h-4 w-4" /></Link>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
