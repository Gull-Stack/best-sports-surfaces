import { Metadata } from 'next';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

export const metadata: Metadata = {
  title: 'Blog - Sports Surface Construction Guides & Tips',
  description: 'Expert guides on tennis court construction, basketball court costs, pickleball court building, surface maintenance, and more.',
};

const CATEGORIES = [
  'All',
  'Tennis',
  'Basketball',
  'Pickleball',
  'Turf & Fields',
  'Maintenance',
  'Cost Guides',
  'Industry',
];

async function getPosts(category?: string): Promise<BlogPost[]> {
  const supabase = await createClient();
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (category && category !== 'All') {
    query = query.eq('category', category);
  }

  const { data } = await query;
  return data || [];
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const posts = await getPosts(category);
  const activeCategory = category || 'All';

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Sports Surface Blog</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Expert guides, cost breakdowns, and tips for building and maintaining sports surfaces.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card hover padding="none" className="h-full flex flex-col">
                {post.featured_image && (
                  <div className="aspect-video overflow-hidden rounded-t-xl">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="green">{post.category}</Badge>
                    <span className="text-xs text-gray-400">{formatDate(post.published_at)}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 flex-1">{post.excerpt}</p>
                  <span className="text-sm text-green-600 font-medium mt-3 inline-block">
                    Read more &rarr;
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
