import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';
import { createClient } from '@/lib/supabase/server';

const schema = z.object({
  business_name: z.string().min(2),
  contact_name: z.string().min(2),
  contact_email: z.string().email(),
  contact_phone: z.string().optional(),
  vendor_slug: z.string().min(1),
});

// Configure SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = schema.parse(body);

    // Get authenticated user
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    // Check if vendor exists
    const { data: vendor, error: vendorError } = await supabase
      .from('vendors')
      .select('id, business_name, city, state')
      .eq('slug', validatedData.vendor_slug)
      .single();

    if (vendorError || !vendor) {
      return NextResponse.json({ error: 'Vendor not found. Check the business listing URL.' }, { status: 404 });
    }

    // Insert claim into database
    const { error: insertError } = await supabase
      .from('vendor_claims')
      .insert({
        vendor_id: vendor.id,
        user_id: user.id,
        business_name: validatedData.business_name,
        contact_name: validatedData.contact_name,
        contact_email: validatedData.contact_email,
        contact_phone: validatedData.contact_phone,
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      return NextResponse.json({ error: 'Failed to submit claim' }, { status: 500 });
    }

    // Send notification email
    if (process.env.SENDGRID_API_KEY) {
      const emailContent = `
New Vendor Claim Submitted - BestSportsSurfaces.com

LISTING DETAILS:
• Business: ${vendor.business_name}
• Location: ${vendor.city}, ${vendor.state}
• Slug: ${validatedData.vendor_slug}
• URL: https://www.bestsportssurfaces.com/vendors/${validatedData.vendor_slug}

CLAIMANT DETAILS:
• Name: ${validatedData.contact_name}
• Email: ${validatedData.contact_email}
• Phone: ${validatedData.contact_phone || 'Not provided'}
• Claimed Business Name: ${validatedData.business_name}

USER ACCOUNT:
• User ID: ${user.id}
• User Email: ${user.email}

ACTION REQUIRED:
Review this claim in the admin panel:
https://www.bestsportssurfaces.com/admin/claims

Time: ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/Boise',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}
      `.trim();

      const msg = {
        to: 'bryce@gullstack.com',
        from: 'noreply@bestsportssurfaces.com',
        subject: `New Vendor Claim: ${validatedData.business_name}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
      };

      try {
        await sgMail.send(msg);
        console.log('Vendor claim notification sent to bryce@gullstack.com');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the request if email fails - claim is still saved
      }
    } else {
      console.log('SENDGRID_API_KEY not configured - email notification skipped');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Claim submitted successfully. You will receive a response within 2-3 business days.'
    });

  } catch (err) {
    console.error('Vendor claim error:', err);
    
    if (err instanceof z.ZodError) {
      return NextResponse.json({ 
        error: 'Invalid form data',
        details: err.issues
      }, { status: 400 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}