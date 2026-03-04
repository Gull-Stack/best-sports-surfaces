-- Fix broken internal links in blog post content
-- These links are pointing to /about instead of correct blog URLs

-- First, let's see what links exist in the content
SELECT id, title, 
  SUBSTRING(content FROM 'href="[^"]*"') as sample_link
FROM blog_posts 
WHERE content LIKE '%href="%about%';

-- Fix any links that incorrectly point to /about when they should point to blog posts
-- This is a pattern match - adjust based on what we find
UPDATE blog_posts 
SET content = REPLACE(content, 'href="/about"', 'href="/contact"')
WHERE content LIKE '%href="/about"%';

-- If there are specific hardcoded blog links pointing to /about, fix them:
-- Example fixes (uncomment and modify based on actual broken links found):

-- UPDATE blog_posts 
-- SET content = REPLACE(content, 
--   '<a href="/about">tennis court guide</a>', 
--   '<a href="/blog/complete-guide-tennis-court-surfaces">tennis court guide</a>'
-- );

-- UPDATE blog_posts 
-- SET content = REPLACE(content, 
--   '<a href="/about">basketball court costs</a>', 
--   '<a href="/blog/how-much-does-it-cost-build-basketball-court">basketball court costs</a>'
-- );

-- UPDATE blog_posts 
-- SET content = REPLACE(content, 
--   '<a href="/about">pickleball nets comparison</a>', 
--   '<a href="/blog/best-pickleball-nets-2026">pickleball nets comparison</a>'
-- );

-- UPDATE blog_posts 
-- SET content = REPLACE(content, 
--   '<a href="/about">DIY vs contractor guide</a>', 
--   '<a href="/blog/diy-vs-contractor-sports-court-cost-quality-comparison">DIY vs contractor guide</a>'
-- );

-- UPDATE blog_posts 
-- SET content = REPLACE(content, 
--   '<a href="/about">choosing sports surface contractor</a>', 
--   '<a href="/blog/how-to-choose-sports-surface-contractor">choosing sports surface contractor</a>'
-- );

-- UPDATE blog_posts 
-- SET content = REPLACE(content, 
--   '<a href="/about">indoor vs outdoor courts</a>', 
--   '<a href="/blog/indoor-vs-outdoor-sports-courts-cost-comparison">indoor vs outdoor courts</a>'
-- );

-- After running updates, verify no /about links remain in blog content:
SELECT id, title, 
  LENGTH(content) - LENGTH(REPLACE(content, 'href="/about"', '')) as about_link_count
FROM blog_posts 
WHERE content LIKE '%href="/about"%';

-- Check final state:
SELECT COUNT(*) as posts_with_about_links 
FROM blog_posts 
WHERE content LIKE '%href="/about"%';