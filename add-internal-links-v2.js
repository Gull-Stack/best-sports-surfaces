const fs = require('fs');

// Mock blog posts data extracted from seed file
const blogPosts = [
  {
    id: 'b0000001-0000-0000-0000-000000000001',
    title: 'The Complete Guide to Tennis Court Surfaces',
    slug: 'complete-guide-tennis-court-surfaces',
    category: 'Tennis',
    keywords: ['tennis court', 'court surfaces', 'hard court', 'clay court', 'grass court', 'acrylic', 'tennis surface', 'court maintenance']
  },
  {
    id: 'b0000002-0000-0000-0000-000000000002',
    title: 'How Much Does It Cost to Build a Basketball Court?',
    slug: 'how-much-does-it-cost-build-basketball-court',
    category: 'Basketball',
    keywords: ['basketball court', 'court construction', 'basketball cost', 'court budgeting', 'basketball contractor', 'court size']
  },
  {
    id: 'b0000003-0000-0000-0000-000000000003',
    title: 'Pickleball Court Construction: Everything You Need to Know',
    slug: 'pickleball-court-construction-everything-you-need-to-know',
    category: 'Pickleball',
    keywords: ['pickleball court', 'pickleball construction', 'pickleball cost', 'pickleball surface', 'court maintenance']
  },
  {
    id: 'b0000004-0000-0000-0000-000000000004',
    title: 'Synthetic Turf vs Natural Grass for Sports Fields',
    slug: 'synthetic-turf-vs-natural-grass-sports-fields',
    category: 'Turf & Fields',
    keywords: ['synthetic turf', 'natural grass', 'sports fields', 'field maintenance', 'turf cost', 'climate considerations']
  },
  {
    id: 'b0000005-0000-0000-0000-000000000005',
    title: 'Running Track Surfaces: A Comprehensive Comparison',
    slug: 'running-track-surfaces-comprehensive-comparison',
    category: 'Track',
    keywords: ['running track', 'track surfaces', 'athletic track', 'track maintenance', 'track construction']
  },
  {
    id: 'b0000006-0000-0000-0000-000000000006',
    title: 'When to Resurface Your Sports Court',
    slug: 'when-to-resurface-your-sports-court',
    category: 'Maintenance',
    keywords: ['court resurfacing', 'sports court maintenance', 'court repair', 'resurfacing cost', 'maintenance contractor']
  },
  {
    id: 'b0000007-0000-0000-0000-000000000007',
    title: 'How to Choose the Right Sports Surface Contractor',
    slug: 'how-to-choose-right-sports-surface-contractor',
    category: 'Industry',
    keywords: ['sports contractor', 'contractor selection', 'court builder', 'sports surface contractor', 'contractor hiring']
  },
  {
    id: 'b0000008-0000-0000-0000-000000000008',
    title: 'Multi-Sport Court Design: Maximize Your Space',
    slug: 'multi-sport-court-design-maximize-your-space',
    category: 'Design',
    keywords: ['multi-sport court', 'court design', 'space maximization', 'basketball tennis', 'court layout']
  },
  {
    id: 'b0000009-0000-0000-0000-000000000009',
    title: 'Sports Court Maintenance Schedules by Surface Type',
    slug: 'sports-court-maintenance-schedules-by-surface-type',
    category: 'Maintenance',
    keywords: ['maintenance schedules', 'court care', 'surface maintenance', 'court cleaning', 'preventive maintenance']
  },
  {
    id: 'b0000010-0000-0000-0000-000000000010',
    title: 'Climate Considerations for Sports Surface Selection',
    slug: 'climate-considerations-sports-surface-selection',
    category: 'Planning',
    keywords: ['climate considerations', 'weather factors', 'surface selection', 'temperature effects', 'humidity impact']
  },
  {
    id: 'b0000011-0000-0000-0000-000000000011',
    title: 'Commercial vs Residential Sports Courts',
    slug: 'commercial-vs-residential-sports-courts',
    category: 'Planning',
    keywords: ['commercial courts', 'residential courts', 'sports court planning', 'court differences', 'facility design']
  },
  {
    id: 'b0000012-0000-0000-0000-000000000012',
    title: 'The Environmental Impact of Sports Surface Materials',
    slug: 'environmental-impact-sports-surface-materials',
    category: 'Sustainability',
    keywords: ['environmental impact', 'sustainable materials', 'eco-friendly surfaces', 'material recycling', 'green construction']
  }
];

// Key site pages to link to with their anchor text patterns
const keyPages = [
  {
    url: '/vendors',
    name: 'Find a Court Builder',
    patterns: [
      'find a contractor', 'court builder', 'sports surface contractor', 
      'choosing a contractor', 'hire a contractor', 'professional contractor',
      'qualified contractor', 'certified contractor', 'contractor directory'
    ]
  },
  {
    url: '/cost-estimator',
    name: 'Cost Estimator',
    patterns: [
      'cost estimate', 'estimate costs', 'calculate cost', 'price estimate',
      'budget estimate', 'cost calculator', 'pricing tool', 'estimate pricing'
    ]
  },
  {
    url: '/court-designer',
    name: 'Court Designer',
    patterns: [
      'court design', 'design your court', 'court layout', 'design tool',
      'court dimensions', 'plan your court', 'court planning', 'layout design'
    ]
  },
  {
    url: '/products',
    name: 'Products',
    patterns: [
      'surface materials', 'court products', 'construction materials',
      'surface products', 'court equipment', 'building materials'
    ]
  },
  {
    url: '/gallery',
    name: 'Gallery',
    patterns: [
      'project gallery', 'see examples', 'view gallery', 'court photos',
      'project examples', 'gallery of courts', 'example projects'
    ]
  }
];

// Function to add strategic internal links
function addInternalLinks(content, currentSlug) {
  let updatedContent = content;
  let linkCount = 0;
  const maxLinks = 8;
  const addedLinks = new Set();
  
  console.log(`\n  Processing content for ${currentSlug}:`);
  
  // Step 1: Add links to key site pages first (higher priority)
  keyPages.forEach(page => {
    if (linkCount >= maxLinks) return;
    
    page.patterns.forEach(pattern => {
      if (linkCount >= maxLinks || addedLinks.has(page.url)) return;
      
      // Create a case-insensitive regex that matches whole phrases
      const regex = new RegExp(`\\b${pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'gi');
      const match = updatedContent.match(regex);
      
      if (match && !updatedContent.includes(`href="${page.url}"`)) {
        // Replace first occurrence that isn't already linked
        const linkRegex = new RegExp(`(?<!<a[^>]*>)\\b${pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b(?![^<]*</a>)`, 'i');
        if (linkRegex.test(updatedContent)) {
          updatedContent = updatedContent.replace(linkRegex, `<a href="${page.url}">${match[0]}</a>`);
          linkCount++;
          addedLinks.add(page.url);
          console.log(`    ✓ Added: "${match[0]}" → ${page.name}`);
        }
      }
    });
  });
  
  // Step 2: Add links to related blog posts
  const currentPost = blogPosts.find(p => p.slug === currentSlug);
  const otherPosts = blogPosts.filter(p => p.slug !== currentSlug);
  
  // Sort other posts by relevance (same category first, then by keyword overlap)
  const relevantPosts = otherPosts.sort((a, b) => {
    if (a.category === currentPost?.category && b.category !== currentPost?.category) return -1;
    if (b.category === currentPost?.category && a.category !== currentPost?.category) return 1;
    return 0;
  });
  
  relevantPosts.forEach(post => {
    if (linkCount >= maxLinks) return;
    
    post.keywords.forEach(keyword => {
      if (linkCount >= maxLinks || addedLinks.has(`/blog/${post.slug}`)) return;
      
      // Create regex to find the keyword phrase
      const regex = new RegExp(`\\b${keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'gi');
      const match = updatedContent.match(regex);
      
      if (match && !updatedContent.includes(`href="/blog/${post.slug}"`)) {
        // Replace first occurrence that isn't already linked
        const linkRegex = new RegExp(`(?<!<a[^>]*>)\\b${keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b(?![^<]*</a>)`, 'i');
        if (linkRegex.test(updatedContent)) {
          updatedContent = updatedContent.replace(linkRegex, `<a href="/blog/${post.slug}">${match[0]}</a>`);
          linkCount++;
          addedLinks.add(`/blog/${post.slug}`);
          console.log(`    ✓ Added: "${match[0]}" → ${post.title}`);
        }
      }
    });
  });
  
  console.log(`    Total links added: ${linkCount}`);
  
  return { content: updatedContent, linkCount };
}

// Function to process the SQL file and add internal links
function processInternalLinksV2() {
  console.log('Processing internal links for blog posts (v2)...');
  
  // Read the original seed file
  const seedFile = fs.readFileSync('scripts/seed-blog.sql', 'utf8');
  let updatedSeed = seedFile;
  let totalLinksAdded = 0;
  
  blogPosts.forEach((post, index) => {
    console.log(`\n${index + 1}. ${post.title}`);
    
    // Find the post content in the SQL file
    const postIdPattern = new RegExp(`'${post.id}',([\\s\\S]*?)(?='b0000|$)`);
    const postMatch = seedFile.match(postIdPattern);
    
    if (!postMatch) {
      console.log('    ❌ Could not find post content');
      return;
    }
    
    const postSection = postMatch[0];
    const contentMatch = postSection.match(/'(<article>[\s\S]*?<\/article>)'/);
    
    if (!contentMatch) {
      console.log('    ❌ Could not extract article content');
      return;
    }
    
    const originalContent = contentMatch[1];
    const { content: updatedContent, linkCount } = addInternalLinks(originalContent, post.slug);
    
    if (linkCount > 0) {
      // Replace in the full seed file
      updatedSeed = updatedSeed.replace(originalContent, updatedContent);
      totalLinksAdded += linkCount;
    }
  });
  
  // Write the updated seed file
  fs.writeFileSync('scripts/seed-blog-with-internal-links.sql', updatedSeed);
  
  console.log(`\n🎉 Completed! Added ${totalLinksAdded} internal links across all blog posts.`);
  console.log('📝 Created: scripts/seed-blog-with-internal-links.sql');
  console.log('\nNext steps:');
  console.log('1. Import this SQL file to update your Supabase database');
  console.log('2. Verify the links work correctly on your site');
}

// Run the link processing
if (require.main === module) {
  processInternalLinksV2();
}