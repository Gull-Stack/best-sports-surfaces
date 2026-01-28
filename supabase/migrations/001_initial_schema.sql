-- ============================================================================
-- BestSportsSurfaces.com - Initial Database Schema
-- Sports Surfaces Construction Aggregator
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Extensions
-- ----------------------------------------------------------------------------

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ----------------------------------------------------------------------------
-- 2. Tables
-- ----------------------------------------------------------------------------

-- Vendors: contractors and businesses listed on the platform
CREATE TABLE vendors (
    id                    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name                  TEXT NOT NULL,
    slug                  TEXT UNIQUE NOT NULL,
    description           TEXT DEFAULT '',
    short_description     TEXT DEFAULT '',
    phone                 TEXT DEFAULT '',
    email                 TEXT DEFAULT '',
    website               TEXT DEFAULT '',
    address               TEXT DEFAULT '',
    city                  TEXT NOT NULL,
    state                 TEXT NOT NULL,
    zip                   TEXT NOT NULL,
    latitude              DOUBLE PRECISION,
    longitude             DOUBLE PRECISION,
    sport_types           TEXT[] DEFAULT '{}',
    service_types         TEXT[] DEFAULT '{}',
    service_area_miles    INT DEFAULT 50,
    tier                  TEXT DEFAULT 'free' CHECK (tier IN ('free', 'paid', 'featured')),
    is_verified           BOOLEAN DEFAULT FALSE,
    is_featured           BOOLEAN DEFAULT FALSE,
    rating                NUMERIC(2,1) DEFAULT 0,
    review_count          INT DEFAULT 0,
    years_in_business     INT DEFAULT 0,
    license_number        TEXT,
    insurance_verified    BOOLEAN DEFAULT FALSE,
    logo_url              TEXT,
    gallery_urls          TEXT[] DEFAULT '{}',
    user_id               UUID REFERENCES auth.users,
    stripe_customer_id    TEXT,
    stripe_subscription_id TEXT,
    created_at            TIMESTAMPTZ DEFAULT NOW(),
    updated_at            TIMESTAMPTZ DEFAULT NOW()
);

-- Inquiries: contact form submissions from visitors to vendors
CREATE TABLE inquiries (
    id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vendor_id    UUID REFERENCES vendors ON DELETE CASCADE,
    name         TEXT NOT NULL,
    email        TEXT NOT NULL,
    phone        TEXT DEFAULT '',
    zip          TEXT DEFAULT '',
    sport_type   TEXT,
    service_type TEXT,
    message      TEXT DEFAULT '',
    status       TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
    created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts: content marketing and SEO articles
CREATE TABLE blog_posts (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title           TEXT NOT NULL,
    slug            TEXT UNIQUE NOT NULL,
    excerpt         TEXT DEFAULT '',
    content         TEXT DEFAULT '',
    category        TEXT DEFAULT '',
    tags            TEXT[] DEFAULT '{}',
    featured_image  TEXT DEFAULT '',
    author          TEXT DEFAULT 'BestSportsSurfaces Team',
    published       BOOLEAN DEFAULT FALSE,
    published_at    TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews: customer reviews for vendors
CREATE TABLE reviews (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vendor_id   UUID REFERENCES vendors ON DELETE CASCADE,
    author_name TEXT NOT NULL,
    rating      INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title       TEXT DEFAULT '',
    content     TEXT DEFAULT '',
    is_verified BOOLEAN DEFAULT FALSE,
    is_approved BOOLEAN DEFAULT FALSE,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Cities: geographic landing pages for SEO
CREATE TABLE cities (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name            TEXT NOT NULL,
    slug            TEXT UNIQUE NOT NULL,
    state           TEXT NOT NULL,
    state_code      TEXT NOT NULL,
    latitude        DOUBLE PRECISION,
    longitude       DOUBLE PRECISION,
    population      INT DEFAULT 0,
    description     TEXT DEFAULT '',
    seo_title       TEXT DEFAULT '',
    seo_description TEXT DEFAULT '',
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Sponsored products: paid ad placements across the site
CREATE TABLE sponsored_products (
    id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name         TEXT NOT NULL,
    description  TEXT DEFAULT '',
    image_url    TEXT DEFAULT '',
    link_url     TEXT DEFAULT '',
    sponsor_name TEXT DEFAULT '',
    placement    TEXT DEFAULT 'sidebar' CHECK (placement IN ('sidebar', 'banner', 'inline')),
    is_active    BOOLEAN DEFAULT TRUE,
    created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics events: lightweight event tracking
CREATE TABLE analytics_events (
    id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_type TEXT NOT NULL,
    vendor_id  UUID REFERENCES vendors ON DELETE SET NULL,
    metadata   JSONB DEFAULT '{}',
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE newsletter_subscribers (
    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email         TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    is_active     BOOLEAN DEFAULT TRUE
);

-- Vendor claims: requests from business owners to claim a vendor listing
CREATE TABLE vendor_claims (
    id                 UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vendor_id          UUID REFERENCES vendors ON DELETE CASCADE,
    user_id            UUID REFERENCES auth.users,
    business_name      TEXT NOT NULL,
    contact_name       TEXT NOT NULL,
    contact_email      TEXT NOT NULL,
    contact_phone      TEXT DEFAULT '',
    proof_document_url TEXT,
    status             TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at         TIMESTAMPTZ DEFAULT NOW(),
    reviewed_at        TIMESTAMPTZ
);

-- ----------------------------------------------------------------------------
-- 3. Indexes
-- ----------------------------------------------------------------------------

-- Vendors
CREATE INDEX idx_vendors_sport_types    ON vendors USING GIN (sport_types);
CREATE INDEX idx_vendors_service_types  ON vendors USING GIN (service_types);
CREATE INDEX idx_vendors_slug           ON vendors (slug);
CREATE INDEX idx_vendors_city           ON vendors (city);
CREATE INDEX idx_vendors_state          ON vendors (state);
CREATE INDEX idx_vendors_tier           ON vendors (tier);
CREATE INDEX idx_vendors_zip            ON vendors (zip);

-- Blog posts
CREATE INDEX idx_blog_posts_tags      ON blog_posts USING GIN (tags);
CREATE INDEX idx_blog_posts_slug      ON blog_posts (slug);
CREATE INDEX idx_blog_posts_category  ON blog_posts (category);
CREATE INDEX idx_blog_posts_published ON blog_posts (published);

-- Cities
CREATE INDEX idx_cities_slug       ON cities (slug);
CREATE INDEX idx_cities_state_code ON cities (state_code);

-- Reviews
CREATE INDEX idx_reviews_vendor_id ON reviews (vendor_id);

-- Inquiries
CREATE INDEX idx_inquiries_vendor_id ON inquiries (vendor_id);
CREATE INDEX idx_inquiries_status    ON inquiries (status);

-- Analytics events
CREATE INDEX idx_analytics_events_event_type ON analytics_events (event_type);
CREATE INDEX idx_analytics_events_vendor_id  ON analytics_events (vendor_id);

-- Newsletter subscribers
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers (email);

-- ----------------------------------------------------------------------------
-- 4. Updated-at trigger function and triggers
-- ----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_vendors_updated_at
    BEFORE UPDATE ON vendors
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- ----------------------------------------------------------------------------
-- 5. Row Level Security
-- ----------------------------------------------------------------------------

-- Enable RLS on all tables
ALTER TABLE vendors              ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries            ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts           ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews              ENABLE ROW LEVEL SECURITY;
ALTER TABLE cities               ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsored_products   ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events     ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_claims        ENABLE ROW LEVEL SECURITY;

-- ---- Vendors ----

-- Anyone can view vendors
CREATE POLICY "vendors_select_all"
    ON vendors FOR SELECT
    USING (TRUE);

-- Authenticated users can insert their own vendor listing
CREATE POLICY "vendors_insert_own"
    ON vendors FOR INSERT
    TO authenticated
    WITH CHECK (user_id = auth.uid());

-- Authenticated users can update their own vendor listing
CREATE POLICY "vendors_update_own"
    ON vendors FOR UPDATE
    TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

-- Service role has full access (bypasses RLS by default, but explicit for clarity)
CREATE POLICY "vendors_service_all"
    ON vendors FOR ALL
    TO service_role
    USING (TRUE)
    WITH CHECK (TRUE);

-- ---- Inquiries ----

-- Anyone (including anonymous) can submit an inquiry
CREATE POLICY "inquiries_insert_all"
    ON inquiries FOR INSERT
    TO anon, authenticated
    WITH CHECK (TRUE);

-- Vendor owner can view inquiries for their listing
CREATE POLICY "inquiries_select_owner"
    ON inquiries FOR SELECT
    TO authenticated
    USING (
        vendor_id IN (
            SELECT id FROM vendors WHERE user_id = auth.uid()
        )
    );

-- Service role has full access
CREATE POLICY "inquiries_service_all"
    ON inquiries FOR ALL
    TO service_role
    USING (TRUE)
    WITH CHECK (TRUE);

-- ---- Blog Posts ----

-- Anyone can view published blog posts
CREATE POLICY "blog_posts_select_published"
    ON blog_posts FOR SELECT
    USING (published = TRUE);

-- Service role has full access (drafts, editing, deleting)
CREATE POLICY "blog_posts_service_all"
    ON blog_posts FOR ALL
    TO service_role
    USING (TRUE)
    WITH CHECK (TRUE);

-- ---- Reviews ----

-- Anyone can view approved reviews
CREATE POLICY "reviews_select_approved"
    ON reviews FOR SELECT
    USING (is_approved = TRUE);

-- Anyone can submit a review
CREATE POLICY "reviews_insert_all"
    ON reviews FOR INSERT
    TO anon, authenticated
    WITH CHECK (TRUE);

-- Service role has full access
CREATE POLICY "reviews_service_all"
    ON reviews FOR ALL
    TO service_role
    USING (TRUE)
    WITH CHECK (TRUE);

-- ---- Cities ----

-- Anyone can view cities
CREATE POLICY "cities_select_all"
    ON cities FOR SELECT
    USING (TRUE);

-- ---- Sponsored Products ----

-- Anyone can view active sponsored products
CREATE POLICY "sponsored_products_select_active"
    ON sponsored_products FOR SELECT
    USING (is_active = TRUE);

-- ---- Analytics Events ----

-- Anyone can insert analytics events
CREATE POLICY "analytics_events_insert_all"
    ON analytics_events FOR INSERT
    TO anon, authenticated
    WITH CHECK (TRUE);

-- Service role can read analytics
CREATE POLICY "analytics_events_service_all"
    ON analytics_events FOR ALL
    TO service_role
    USING (TRUE)
    WITH CHECK (TRUE);

-- ---- Newsletter Subscribers ----

-- Anyone can subscribe
CREATE POLICY "newsletter_subscribers_insert_all"
    ON newsletter_subscribers FOR INSERT
    TO anon, authenticated
    WITH CHECK (TRUE);

-- Service role can manage subscribers
CREATE POLICY "newsletter_subscribers_service_all"
    ON newsletter_subscribers FOR ALL
    TO service_role
    USING (TRUE)
    WITH CHECK (TRUE);

-- ---- Vendor Claims ----

-- Authenticated users can submit a claim
CREATE POLICY "vendor_claims_insert_auth"
    ON vendor_claims FOR INSERT
    TO authenticated
    WITH CHECK (user_id = auth.uid());

-- Authenticated users can view their own claims
CREATE POLICY "vendor_claims_select_own"
    ON vendor_claims FOR SELECT
    TO authenticated
    USING (user_id = auth.uid());

-- Service role has full access
CREATE POLICY "vendor_claims_service_all"
    ON vendor_claims FOR ALL
    TO service_role
    USING (TRUE)
    WITH CHECK (TRUE);

-- ----------------------------------------------------------------------------
-- 6. Storage buckets
-- ----------------------------------------------------------------------------
-- Storage buckets (create via Supabase dashboard or API):
-- vendor-images (public)
-- blog-images (public)
-- claim-documents (private)
