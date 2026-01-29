import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import SchemaOrg, { articleSchema } from '@/components/seo/SchemaOrg';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface Props {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();
  return data;
}

async function getRelatedPosts(category: string, currentSlug: string): Promise<BlogPost[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .eq('category', category)
    .neq('slug', currentSlug)
    .order('published_at', { ascending: false })
    .limit(3);
  return data || [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.published_at,
      images: post.featured_image ? [post.featured_image] : undefined,
    },
  };
}

function extractHeadings(content: string): { id: string; text: string }[] {
  const headings: { id: string; text: string }[] = [];
  const regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    headings.push({ id: match[1], text: match[2].replace(/<[^>]*>/g, '') });
  }
  return headings;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post.category, post.slug);
  const headings = extractHeadings(post.content);
  const readTime = Math.ceil(post.content.replace(/<[^>]*>/g, '').split(/\s+/).length / 200);

  return (
    <>
      <SchemaOrg schema={articleSchema(post)} />

      <article className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            {post.featured_image && (
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <Badge variant="green">{post.category}</Badge>
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="gray">{tag}</Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b">
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {formatDate(post.published_at)}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {readTime} min read</span>
            </div>

            <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Share */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Share this article</h3>
              <div className="flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://bestsportssurfaces.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4 text-gray-600" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://bestsportssurfaces.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4 text-gray-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <Card padding="md">
                  <h3 className="font-semibold text-gray-900 mb-3">Table of Contents</h3>
                  <nav className="space-y-1">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className="block text-sm text-gray-600 hover:text-brand py-1"
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </Card>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card padding="md">
                  <h3 className="font-semibold text-gray-900 mb-3">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((rp) => (
                      <Link key={rp.id} href={`/blog/${rp.slug}`} className="block group">
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-brand line-clamp-2">
                          {rp.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{formatDate(rp.published_at)}</p>
                      </Link>
                    ))}
                  </div>
                </Card>
              )}

              {/* CTA */}
              <Card padding="md" className="bg-brand-light border-brand-100">
                <h3 className="font-semibold text-gray-900 mb-2">Need a Contractor?</h3>
                <p className="text-sm text-gray-600 mb-3">Get free quotes from verified sports surface contractors near you.</p>
                <Link
                  href="/search"
                  className="block text-center bg-brand text-white py-2 rounded-lg text-sm font-semibold hover:bg-brand-hover"
                >
                  Find Contractors
                </Link>
              </Card>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
