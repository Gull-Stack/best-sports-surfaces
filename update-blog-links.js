const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Configuration - update these with your actual Supabase credentials
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder';

// Blog post data with updated content
const blogPostsWithLinks = [
  {
    id: 'b0000001-0000-0000-0000-000000000001',
    slug: 'complete-guide-tennis-court-surfaces',
    title: 'The Complete Guide to Tennis Court Surfaces'
  },
  {
    id: 'b0000002-0000-0000-0000-000000000002', 
    slug: 'how-much-does-it-cost-build-basketball-court',
    title: 'How Much Does It Cost to Build a Basketball Court?'
  },
  {
    id: 'b0000003-0000-0000-0000-000000000003',
    slug: 'pickleball-court-construction-everything-you-need-to-know', 
    title: 'Pickleball Court Construction: Everything You Need to Know'
  },
  {
    id: 'b0000004-0000-0000-0000-000000000004',
    slug: 'synthetic-turf-vs-natural-grass-sports-fields',
    title: 'Synthetic Turf vs Natural Grass for Sports Fields'
  },
  {
    id: 'b0000005-0000-0000-0000-000000000005',
    slug: 'running-track-surfaces-comprehensive-comparison',
    title: 'Running Track Surfaces: A Comprehensive Comparison'
  },
  {
    id: 'b0000006-0000-0000-0000-000000000006',
    slug: 'when-to-resurface-your-sports-court',
    title: 'When to Resurface Your Sports Court'
  },
  {
    id: 'b0000007-0000-0000-0000-000000000007',
    slug: 'how-to-choose-right-sports-surface-contractor',
    title: 'How to Choose the Right Sports Surface Contractor'
  },
  {
    id: 'b0000008-0000-0000-0000-000000000008',
    slug: 'multi-sport-court-design-maximize-your-space',
    title: 'Multi-Sport Court Design: Maximize Your Space'
  },
  {
    id: 'b0000009-0000-0000-0000-000000000009',
    slug: 'sports-court-maintenance-schedules-by-surface-type',
    title: 'Sports Court Maintenance Schedules by Surface Type'
  },
  {
    id: 'b0000010-0000-0000-0000-000000000010',
    slug: 'climate-considerations-sports-surface-selection',
    title: 'Climate Considerations for Sports Surface Selection'
  },
  {
    id: 'b0000011-0000-0000-0000-000000000011',
    slug: 'commercial-vs-residential-sports-courts',
    title: 'Commercial vs Residential Sports Courts'
  },
  {
    id: 'b0000012-0000-0000-0000-000000000012',
    slug: 'environmental-impact-sports-surface-materials',
    title: 'The Environmental Impact of Sports Surface Materials'
  }
];

// Function to extract content from SQL file
function extractContentFromSQL(sqlContent, postId) {
  const postIdPattern = new RegExp(`'${postId}',([\\s\\S]*?)(?='b0000|$)`);
  const postMatch = sqlContent.match(postIdPattern);
  
  if (!postMatch) return null;
  
  const postSection = postMatch[0];
  const contentMatch = postSection.match(/'(<article>[\s\S]*?<\/article>)'/);
  
  return contentMatch ? contentMatch[1] : null;
}

// Function to update blog posts with internal links
async function updateBlogPostsWithLinks() {
  console.log('🔄 Starting blog post internal link update...\n');
  
  // Check if credentials are set
  if (SUPABASE_URL === 'https://placeholder.supabase.co' || SUPABASE_SERVICE_ROLE_KEY === 'placeholder') {
    console.log('❌ Error: Supabase credentials not configured');
    console.log('Please set the following environment variables:');
    console.log('- NEXT_PUBLIC_SUPABASE_URL');
    console.log('- SUPABASE_SERVICE_ROLE_KEY\n');
    console.log('Generating SQL UPDATE statements instead...\n');
    await generateUpdateStatements();
    return;
  }

  // Create Supabase client
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  // Read the SQL file with updated content
  const sqlContent = fs.readFileSync('scripts/seed-blog-with-internal-links.sql', 'utf8');
  
  let successCount = 0;
  let errorCount = 0;

  // Update each blog post
  for (const post of blogPostsWithLinks) {
    try {
      console.log(`📝 Updating: ${post.title}`);
      
      // Extract the updated content from SQL file
      const updatedContent = extractContentFromSQL(sqlContent, post.id);
      
      if (!updatedContent) {
        console.log(`   ❌ Could not extract content for ${post.title}`);
        errorCount++;
        continue;
      }

      // Update the post in Supabase
      const { data, error } = await supabase
        .from('blog_posts')
        .update({ 
          content: updatedContent,
          updated_at: new Date().toISOString()
        })
        .eq('id', post.id);

      if (error) {
        console.log(`   ❌ Error updating ${post.title}:`, error.message);
        errorCount++;
      } else {
        console.log(`   ✅ Successfully updated ${post.title}`);
        successCount++;
      }
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (error) {
      console.log(`   ❌ Error updating ${post.title}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n🎉 Update complete!`);
  console.log(`✅ Successfully updated: ${successCount} posts`);
  console.log(`❌ Failed to update: ${errorCount} posts`);
}

// Function to generate SQL UPDATE statements
async function generateUpdateStatements() {
  console.log('📄 Generating SQL UPDATE statements...\n');
  
  const sqlContent = fs.readFileSync('scripts/seed-blog-with-internal-links.sql', 'utf8');
  let updateStatements = [];
  
  updateStatements.push('-- SQL UPDATE statements for blog posts with internal links');
  updateStatements.push('-- Run these statements in your Supabase SQL editor\n');

  for (const post of blogPostsWithLinks) {
    const updatedContent = extractContentFromSQL(sqlContent, post.id);
    
    if (updatedContent) {
      // Escape single quotes for SQL
      const escapedContent = updatedContent.replace(/'/g, "''");
      
      updateStatements.push(`-- Update: ${post.title}`);
      updateStatements.push(`UPDATE blog_posts`);
      updateStatements.push(`SET content = '${escapedContent}',`);
      updateStatements.push(`    updated_at = NOW()`);
      updateStatements.push(`WHERE id = '${post.id}';`);
      updateStatements.push('');
    }
  }

  // Write the update statements to a file
  const updateSQL = updateStatements.join('\n');
  fs.writeFileSync('scripts/update-blog-links.sql', updateSQL);
  
  console.log('✅ Generated: scripts/update-blog-links.sql');
  console.log('\nTo apply these changes:');
  console.log('1. Open your Supabase dashboard');
  console.log('2. Go to the SQL editor'); 
  console.log('3. Copy and paste the contents of scripts/update-blog-links.sql');
  console.log('4. Execute the SQL statements');
}

// Main execution
if (require.main === module) {
  updateBlogPostsWithLinks().catch(console.error);
}

module.exports = { updateBlogPostsWithLinks, generateUpdateStatements };