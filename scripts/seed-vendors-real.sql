-- Real vendor seed data for BestSportsSurfaces.com
-- Researched from company websites, ASBA, and industry directories
-- All vendors set to 'free' tier (unclaimed)
TRUNCATE vendors CASCADE;

-- =====================================================
-- FLORIDA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Fast-Dry Courts',
  'fast-dry-courts',
  'For over 40 years, Fast-Dry Courts has been Florida''s premier tennis and pickleball court builder and is now the Official Tennis Court Contractor of the Miami Open. Family owned and operated, founded in Pompano Beach, they specialize in court construction from start to finish. With over 2,500 courts built and 4,000 courts resurfaced, FDC is one of the world''s largest builders of Har-Tru clay courts. ASBA Certified and 22 consecutive years of Construction Excellence awards.',
  'Florida''s premier tennis and pickleball court builder. Official contractor of the Miami Open with 40+ years experience.',
  '(954) 979-7787',
  'info@fast-dry.com',
  'https://www.fast-dry.com',
  '1400 NW 13th Ave',
  'Pompano Beach',
  'FL',
  '33069',
  26.2379,
  -80.1248,
  '{tennis,pickleball}',
  '{new-construction,resurfacing,repair,maintenance,design,consulting,lighting,fencing}',
  150,
  'free',
  false,
  false,
  0,
  0,
  40,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sport Surfaces',
  'sport-surfaces-florida',
  'Sport Surfaces is a full-service sport court construction and resurfacing company based in West Palm Beach, Florida. They specialize in tennis court and pickleball court construction, resurfacing, and repairs for residential communities, municipalities, and athletic clubs throughout South Florida. Their highly trained professional court contractors guide clients through every step of the process.',
  'Full-service sport court construction and resurfacing company in West Palm Beach, Florida.',
  '(561) 964-2001',
  'sales@sportsurfaces.com',
  'https://sportsurfaces.com',
  '7011 Wilson Rd',
  'West Palm Beach',
  'FL',
  '33413',
  26.6685,
  -80.1498,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design,consulting,lighting,fencing}',
  100,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Armor Courts',
  'armor-courts',
  'Armor Courts is dedicated to providing high quality sport surfaces that produce years of enjoyment. Based in South Florida, they service multi-family properties, residential properties, HOAs, municipalities, schools, and worship centers. They build, design, and renovate all types of outdoor sport surfaces including pickleball, tennis, basketball, shuffleboard, and multi-sport courts.',
  'South Florida''s #1 sports surfacing contractor for construction, resurfacing, and repair.',
  '(561) 462-8963',
  '',
  'https://armorcourts.com',
  '',
  'West Palm Beach',
  'FL',
  '33401',
  26.7153,
  -80.0534,
  '{tennis,pickleball,basketball,shuffleboard,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design}',
  75,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Southern Sport Surfaces',
  'southern-sport-surfaces',
  'Southern Sport Surfaces specializes in professional pickleball and tennis court surfacing, resurfacing, and repairs in Florida. With over 30 years of experience and 3,000+ completed projects, including a decade working as a subcontractor for Welch Tennis, they are trusted installers of Laykold surface materials used at the US Open. They serve private residences, community developments, and professional arenas.',
  'Florida''s pickleball and tennis court specialists with 30+ years and 3,000+ projects completed.',
  '(727) 405-8983',
  '',
  'https://southernsportsurfaces.com',
  '',
  'Tampa',
  'FL',
  '33601',
  27.9506,
  -82.4572,
  '{tennis,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair}',
  200,
  'free',
  false,
  false,
  0,
  0,
  30,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- TEXAS
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'CourTex Construction',
  'courtex-construction',
  'CourTex Construction is an industry leader in commercial and residential athletic court construction, repair, conversion, and resurfacing. With 15+ years of experience and thousands of projects completed, they serve Texas, Colorado, and the Carolinas. They specialize in pickleball, tennis, basketball, and padel courts using durable post-tension concrete for long-lasting, high-performance surfaces.',
  'Professional athletic court construction and resurfacing in Texas, Colorado, and the Carolinas.',
  '(512) 461-0519',
  '',
  'https://courtexconstruction.com',
  '14324 Geronimo St',
  'Leander',
  'TX',
  '78641',
  30.5788,
  -97.8531,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,design,consulting}',
  250,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Build My Courts',
  'build-my-courts',
  'Build My Courts is a Houston-based court builder specializing in courts of all sizes, from small backyard setups to full-size sports facilities. Their expert design team assists with layouts, measurements, land work, and diagrams. They are a trusted pickleball court builder and basketball court installation team known for quality craftsmanship and attention to detail.',
  'Houston''s trusted pickleball, tennis, and basketball court builder for residential and commercial projects.',
  '',
  '',
  'https://buildmycourts.com',
  '',
  'Houston',
  'TX',
  '77001',
  29.7604,
  -95.3698,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,design}',
  100,
  'free',
  false,
  false,
  0,
  0,
  5,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Master Systems Courts',
  'master-systems-courts',
  'Master Systems is the premier court construction, resurfacing, repair, and maintenance company in the Dallas Fort Worth area. They handle pickleball, tennis, basketball, volleyball, and multi-purpose courts for both residential and commercial clients. Their services include new court construction, resurfacing, cleaning, maintenance, and a full line of court accessories.',
  'Best court construction, resurfacing, and repair in Dallas Fort Worth for all sport types.',
  '',
  '',
  'https://mastersystemscourts.com',
  '',
  'Dallas',
  'TX',
  '75201',
  32.7767,
  -96.7970,
  '{tennis,pickleball,basketball,volleyball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,equipment}',
  75,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'KMS Sport Surfaces',
  'kms-sport-surfaces',
  'Since 1990, KMS Sport Surfaces has been providing Texas with expert design, construction, and maintenance across a full range of game courts. With over 1,200 tennis courts built along with running tracks, basketball courts, pickleball courts, and soccer fields, they produce high-performance non-skid acrylic coating systems for indoor and outdoor use.',
  'Texas sport surfaces experts since 1990 with 1,200+ courts built across the state.',
  '',
  '',
  'https://kmssportsurfaces.com',
  '',
  'Sugar Land',
  'TX',
  '77478',
  29.6197,
  -95.6349,
  '{tennis,pickleball,basketball,soccer,track,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,lighting,fencing,equipment}',
  150,
  'free',
  false,
  false,
  0,
  0,
  35,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Pro Tech Track and Tennis',
  'pro-tech-track-tennis',
  'Pro Tech Track and Tennis has been building, resurfacing, and repairing running tracks and tennis courts since 1991. They serve Texas, Oklahoma, Louisiana, Arkansas, and Mississippi with turn-key solutions including post-tension court construction, resurfacing, striping, and repairs. Their custom court designer lets clients visualize their project before construction begins.',
  'Sports construction company building and resurfacing tracks and courts across the South since 1991.',
  '(903) 894-6461',
  '',
  'https://www.protechtrackandtennis.com',
  '',
  'Bullard',
  'TX',
  '75757',
  32.1340,
  -95.3210,
  '{tennis,pickleball,basketball,track,multi-sport}',
  '{new-construction,resurfacing,repair}',
  300,
  'free',
  false,
  false,
  0,
  0,
  34,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'GeoSurfaces',
  'geosurfaces',
  'GeoSurfaces is a preferred dealer for Mondo, the global leader in high-performance running tracks and sports flooring. Their clients include major universities such as Arkansas, LSU, Texas A&M, Florida, Georgia, South Carolina, and Clemson. They specialize in artificial turf installations, running tracks, and multi-sport surfaces with patented GeoFlo Dynamic Shock Pad technology.',
  'Preferred Mondo dealer specializing in artificial turf, running tracks, and sports flooring.',
  '(713) 446-0219',
  '',
  'https://geosurfaces.com',
  '14425 Wagg Way',
  'Houston',
  'TX',
  '77041',
  29.8543,
  -95.5610,
  '{soccer,football,baseball,track-field,multi-sport}',
  '{new-construction,resurfacing,repair,design,consulting}',
  500,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- COLORADO
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Evergreen Tennis Courts',
  'evergreen-tennis-courts',
  'Evergreen Tennis Courts is a leading athletic court construction and resurfacing company serving the Rocky Mountain Region for over 50 years. They specialize in pickleball, tennis, and basketball courts using durable post-tension concrete. With thousands of projects completed, their crews excel at both the technical and artistic aspects of court surfacing for residential, commercial, and community facilities.',
  'Colorado''s premier court builder with 50+ years of experience in the Rocky Mountain Region.',
  '',
  '',
  'https://evergreentenniscourts.com',
  '',
  'Denver',
  'CO',
  '80201',
  39.7392,
  -104.9903,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,design,consulting}',
  200,
  'free',
  false,
  false,
  0,
  0,
  50,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Renner Sports Surfaces',
  'renner-sports-surfaces',
  'Renner Sports Surfaces is a trusted sports surface builder serving Colorado, Idaho, Montana, Utah, and Wyoming. They are leaders in track, tennis, pickleball, and court construction and surfacing. Their Apex Tennis Center project in Arvada, CO earned the ASBA Outstanding Tennis Facility of the Year award in 2018.',
  'Leading sports surface builder across CO, ID, MT, UT, and WY. ASBA award-winning contractor.',
  '',
  '',
  'https://rennersports.com',
  '5349 W 27th Ave',
  'Wheat Ridge',
  'CO',
  '80214',
  39.7533,
  -105.0681,
  '{tennis,pickleball,basketball,track,multi-sport}',
  '{new-construction,resurfacing,repair,design}',
  500,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- CAROLINAS
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Carolina CourTex',
  'carolina-courtex',
  'Carolina CourTex specializes in athletic court construction in North Carolina and South Carolina. They design and construct dedicated facilities for pickleball, tennis, and basketball with regulation sizing, premium surfacing, and top-tier materials. Using post-tension concrete, they create long-lasting courts for residential properties, schools, and recreational facilities throughout the Carolinas.',
  'Custom athletic court construction company serving North and South Carolina.',
  '',
  '',
  'https://carolinacourtex.com',
  '',
  'Charlotte',
  'NC',
  '28201',
  35.2271,
  -80.8431,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,design}',
  200,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'North State Resurfacing',
  'north-state-resurfacing',
  'Since 1990, North State Resurfacing has renovated thousands of outdoor courts across NC, SC, and Virginia. They create tournament-quality playing surfaces for country clubs, private homes, municipalities, high schools, universities, and military bases. Fully licensed, bonded, and insured, they are authorized distributors of Nova Sports USA, Pexipave, DecoTurf, Acrytech, and Laykold products.',
  'Court surfacing experts serving NC, SC, and VA since 1990 with thousands of renovated courts.',
  '(919) 365-7500',
  '',
  'https://northstateresurfacing.com',
  '',
  'Raleigh',
  'NC',
  '27601',
  35.7796,
  -78.6382,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,fencing,equipment}',
  250,
  'free',
  false,
  false,
  0,
  0,
  35,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- NEVADA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Nevada Court Builders',
  'nevada-court-builders',
  'Nevada Court Builders has been building superior sports courts in Nevada for 15 years. Their team of certified sports court builders handles tennis, basketball, pickleball, volleyball, multi-courts, and roller hockey surfaces. They are fully licensed and insured, offering fast installation at affordable prices with new construction, resurfacing, and repair services.',
  'Certified sports court builders in Las Vegas offering construction, resurfacing, and repair.',
  '',
  '',
  'https://nevadacourtbuilders.com',
  '',
  'Las Vegas',
  'NV',
  '89101',
  36.1699,
  -115.1398,
  '{tennis,pickleball,basketball,volleyball,multi-sport}',
  '{new-construction,resurfacing,repair}',
  100,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- CALIFORNIA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Champion Courts Inc.',
  'champion-courts-inc',
  'Champion Courts is the go-to expert for court surfacing and restoration in Northern California. They specialize in top-quality repairs and resurfacing for tennis courts, basketball courts, pickleball courts, and other sport surfaces using the same high-quality materials as professional sport events. Serving residential, commercial, and public works projects with over a decade of experience.',
  'Court surfacing experts in Northern California for tennis, basketball, and pickleball courts.',
  '',
  '',
  'https://www.championcourts.net',
  '',
  'Sacramento',
  'CA',
  '95814',
  38.5816,
  -121.4944,
  '{tennis,pickleball,basketball,multi-sport}',
  '{resurfacing,repair,consulting}',
  150,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Center Court Sports',
  'center-court-sports',
  'Center Court Sports is a Bay Area-based sports court resurfacing and construction company. As a member of the American Sports Builders Association and a licensed general contractor, they offer precision craftsmanship with direct owner involvement from start to finish. Winner of Best of Houzz three years running and featured in the San Francisco Chronicle.',
  'Bay Area pickleball, tennis, and basketball court resurfacing experts. ASBA member.',
  '',
  '',
  'https://centercourtsports.com',
  '',
  'San Francisco',
  'CA',
  '94101',
  37.7749,
  -122.4194,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair}',
  75,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'American Court Surfacing',
  'american-court-surfacing',
  'American Court Surfacing is a family-owned outdoor court surfacing company serving all of Southern California with over 20 years of experience. Licensed, bonded, and insured, they specialize in tennis, basketball, pickleball, paddleball, and multisport court construction, resurfacing, consulting, and design. Known for precision workmanship by skilled professionals.',
  'Family-owned court surfacing company covering all of Southern California with 20+ years experience.',
  '',
  '',
  'https://americancourtsurfacing.com',
  '',
  'Riverside',
  'CA',
  '92501',
  33.9533,
  -117.3962,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,design,consulting,equipment}',
  150,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Ferandell Tennis Courts',
  'ferandell-tennis-courts',
  'Ferandell Tennis Courts is a leading sport and game court construction company based in Carlsbad, California. They build tennis courts, pickleball courts, basketball courts, and multi-sport surfaces for residential and commercial properties throughout Southern California. Their commitment to excellence and quality materials has made them a trusted name in the industry.',
  'Sport and game court construction experts in Carlsbad, CA serving all of Southern California.',
  '(800) 900-1344',
  '',
  'https://ferandelltenniscourts.com',
  '3216 Grey Hawk Ct',
  'Carlsbad',
  'CA',
  '92010',
  33.1581,
  -117.3506,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,design}',
  150,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Palm Springs Tennis Courts',
  'palm-springs-tennis-courts',
  'Palm Springs Tennis Courts provides expert residential and commercial court construction and resurfacing throughout the Coachella Valley and Southern California. They specialize in tennis courts, pickleball courts, basketball courts, and sport court conversions, delivering professional-grade surfaces that enhance property value and playability.',
  'Tennis and pickleball court construction and resurfacing in the Coachella Valley and SoCal.',
  '(760) 321-4504',
  '',
  'https://www.pstenniscourts.com',
  '',
  'Cathedral City',
  'CA',
  '92234',
  33.7797,
  -116.4653,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair}',
  100,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- ILLINOIS
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Midwest Sport Surfaces',
  'midwest-sport-surfaces',
  'Midwest Sport Surfaces is based in Westmont, IL and has over 25 years of professional experience in court construction, resurfacing, stripping, repair, and maintenance. Founded by Paul Tulacka, a lifetime tennis player who views projects through the eye of a player. They serve residential, municipalities, and athletic clubs throughout the Midwest, including multi-purpose surfaces for pickleball, volleyball, and basketball.',
  'Proud Midwest company specializing in court construction and resurfacing with 25+ years experience.',
  '',
  '',
  'https://midwestsportsurfaces.com',
  '',
  'Westmont',
  'IL',
  '60559',
  41.7959,
  -87.9756,
  '{tennis,pickleball,basketball,volleyball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance}',
  150,
  'free',
  false,
  false,
  0,
  0,
  25,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- NATIONAL / MULTI-STATE
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'ProSport Construction',
  'prosport-construction',
  'Pro-Sport Construction is a full-service contractor providing turn-key construction since 1995. With 19 ASBA Outstanding Tennis Facility awards, 5 Residential Facility of the Year awards, and named RSI Magazine''s 2010 National Builder/Contractor of the Year, they are one of the most decorated court builders in the US. Their in-house capabilities include sub-base preparation, laser-grading, drainage, fencing, lighting, and finished surfaces.',
  '19-time ASBA award-winning tennis court construction company. Full-service since 1995.',
  '',
  '',
  'https://www.prosporttennis.com',
  '',
  'Tampa',
  'FL',
  '33601',
  27.9506,
  -82.4572,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,design,consulting,lighting,fencing}',
  500,
  'free',
  false,
  false,
  0,
  0,
  30,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Keystone Sports Construction',
  'keystone-sports-construction',
  'Keystone Sports Construction offers comprehensive solutions for all sports facility needs including artificial turf fields, running tracks, tennis courts, pickleball courts, padel courts, athletic hardwood flooring, fencing, and stadium amenities. They provide design-build services, financial services, and cooperative purchasing programs for projects nationwide.',
  'Full-service sports construction company offering turf, courts, tracks, and stadium solutions.',
  '(877) 407-4585',
  '',
  'https://keystonesportsconstruction.com',
  '',
  'Philadelphia',
  'PA',
  '19101',
  39.9526,
  -75.1652,
  '{tennis,pickleball,soccer,football,baseball,track-field,gym-flooring,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design,consulting,fencing}',
  500,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'American Sports Surfaces',
  'american-sports-surfaces',
  'American Sports Surfaces has over 50 years of experience designing, constructing, and resurfacing high-quality recreational courts. They are expert builders of outdoor courts for tennis, pickleball, basketball, shuffleboard, bocce, and multi-recreational facilities. They work with private residents, community centers, sports complexes, and various other clients.',
  'Over 50 years designing, constructing, and resurfacing recreational courts nationwide.',
  '',
  '',
  'https://americantenniscourts.com',
  '',
  'Fort Lauderdale',
  'FL',
  '33301',
  26.1224,
  -80.1373,
  '{tennis,pickleball,basketball,shuffleboard,multi-sport}',
  '{new-construction,resurfacing,repair,design,consulting}',
  300,
  'free',
  false,
  false,
  0,
  0,
  50,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Elite Courts Inc.',
  'elite-courts-inc',
  'Elite Courts Inc. delivers exceptional court resurfacing, painting, and repair solutions tailored to homeowners, sports clubs, and commercial property owners. They specialize in professional resurfacing and repair for pickleball, tennis, and basketball courts, offering custom court design options using Sport Master color combinations and patterns.',
  'Premier experts in court repair and resurfacing for residential and commercial properties.',
  '',
  '',
  'https://www.elitecourtsinc.com',
  '',
  'Orlando',
  'FL',
  '32801',
  28.5383,
  -81.3792,
  '{tennis,pickleball,basketball}',
  '{resurfacing,repair}',
  100,
  'free',
  false,
  false,
  0,
  0,
  3,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- NORTHEAST - NEW YORK
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Oval Tennis',
  'oval-tennis',
  'Oval Tennis Inc. has been constructing, rebuilding, and maintaining tennis courts for customers in New York, New Jersey, Connecticut, Pennsylvania, and beyond since 1971. Located in Somers, NY (Westchester County), they offer the entire package of tennis court and athletic court services including design, construction, maintenance, and supplies. Members of ASBA and USTA.',
  'Over 40 years building and servicing tennis courts across NY, NJ, CT, and PA. ASBA & USTA member.',
  '(914) 248-6825',
  'info@ovaltennis.com',
  'https://ovaltennis.com',
  'P.O. Box 189',
  'Somers',
  'NY',
  '10589',
  41.3322,
  -73.7210,
  '{tennis,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design,consulting,equipment,lighting,fencing}',
  150,
  'free',
  false,
  false,
  0,
  0,
  54,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'DeRosa Sports',
  'derosa-sports',
  'DeRosa Sports is the premier builder of tennis courts and track & field facilities serving New York, New Jersey, and Connecticut. As a member of the American Sports Builders Association, they provide tennis courts, basketball courts, synthetic fields, natural turf, roller hockey rinks, running tracks, baseball fields, soccer fields, and football fields. Dedicated to quality, integrity, and honesty.',
  'Premier builder of tennis courts and track facilities serving NY, NJ, and CT. ASBA member.',
  '(914) 341-1506',
  '',
  'https://derosasports.com',
  '',
  'Port Chester',
  'NY',
  '10573',
  41.0018,
  -73.6657,
  '{tennis,basketball,soccer,football,baseball,track-field,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance}',
  150,
  'free',
  false,
  false,
  0,
  0,
  25,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Neave Sports',
  'neave-sports',
  'Neave Outdoor (Neave Sports) is the premier company for custom athletic court construction in New York and Connecticut. They specialize in basketball, tennis, volleyball, hockey, and more, handling everything from residential backyard courts for families to schools and commercial properties. Known for innovative design solutions and attention to detail.',
  'Custom athletic court construction in NY and CT for residential, school, and commercial projects.',
  '(845) 463-0592',
  '',
  'https://www.neavegroup.com/sports/',
  '80 Airport Drive',
  'Wappingers Falls',
  'NY',
  '12590',
  41.5965,
  -73.9110,
  '{tennis,pickleball,basketball,volleyball,multi-sport}',
  '{new-construction,resurfacing,repair,design,consulting}',
  100,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- NORTHEAST - CONNECTICUT
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'R.S. Site & Sports',
  'rs-site-and-sports',
  'R.S. Site and Sports is New England''s premier athletic court construction company located in Oxford, CT. They serve all of Connecticut including New Canaan, Westport, and Greenwich, as well as Westchester, Suffolk, and Long Island, NY. Specializing in post-tensioned concrete courts, they are ASBA members and PTI certified. Owner-run with skilled installation, repair, and resurfacing contractors.',
  'New England''s premier athletic court construction company. ASBA member, PTI certified.',
  '(203) 888-5948',
  '',
  'https://www.rssiteandsports.com',
  '',
  'Oxford',
  'CT',
  '06478',
  41.4340,
  -73.1165,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance}',
  150,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Classic Turf Company',
  'classic-turf-company',
  'Classic Turf Company pioneered post-tension concrete courts in the Northeastern United States. With over 35 years of experience and two US patents, they build the world''s most durable and longest-lasting tennis and basketball courts, running tracks, and athletic fields. Their founder Tumer Eren has been designing and constructing courts for over 35 years.',
  'Pioneered post-tension concrete courts in the Northeast. 35+ years of innovation and excellence.',
  '(800) 246-7951',
  '',
  'https://www.classicturf.org',
  '437 Sherman Hill Rd',
  'Woodbury',
  'CT',
  '06798',
  41.5437,
  -73.2068,
  '{tennis,pickleball,basketball,track,multi-sport}',
  '{new-construction,resurfacing,repair,design,consulting}',
  200,
  'free',
  false,
  false,
  0,
  0,
  35,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Davis Courts',
  'davis-courts',
  'Davis Courts LLC has 35+ years of excellence in tennis, pickleball, and all-sport court construction. Based in Fairfield, CT, they specialize in new construction, repair and refurbishment of existing courts, tennis-to-pickleball conversions, and installation of lights, fencing, and irrigation. They also sell new and used court equipment.',
  '35+ years of excellence in tennis, pickleball, and multi-sport court construction in CT.',
  '(203) 255-2421',
  'chuck@daviscourts.com',
  'https://www.daviscourts.com',
  '',
  'Fairfield',
  'CT',
  '06824',
  41.1412,
  -73.2637,
  '{tennis,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,lighting,fencing,equipment}',
  75,
  'free',
  false,
  false,
  0,
  0,
  35,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- NORTHEAST - MASSACHUSETTS
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Cape and Island Tennis & Track',
  'cape-island-tennis-track',
  'Cape and Island Tennis & Track has been building New England''s finest tennis courts and running tracks since 1972. With 2,650+ court projects and 600+ track projects, they hold an industry-leading 46 ASBA Distinguished Facility Awards and were named 2020 National Builder of the Year by RSI Magazine. They employ 2 Certified Tennis Court Builders and 1 Certified Track Builder on staff.',
  'Building New England''s finest courts and tracks since 1972. 46 ASBA awards, National Builder of the Year.',
  '(508) 759-5636',
  'info@tennisandtrack.com',
  'https://www.tennisandtrack.com',
  '28 Commerce Park Rd',
  'Pocasset',
  'MA',
  '02559',
  41.6984,
  -70.6159,
  '{tennis,pickleball,track,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design,consulting}',
  200,
  'free',
  false,
  false,
  0,
  0,
  53,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Boston Tennis & Sports Court Company',
  'boston-tennis-sports-court',
  'Boston Tennis & Sports Court Company brings over 50 years of a stellar reputation for quality workmanship and outstanding service. They have built and maintained among the most prestigious clubs and residences throughout Boston, the South Shore, Cape Cod, and the Islands. Their full range of services includes construction, maintenance, reconditioning, resurfacing, repairs, and consultation.',
  '50+ years of quality tennis and sport court construction in greater Boston and Cape Cod.',
  '(781) 826-2303',
  'info@bostontenniscourt.com',
  'https://www.bostontenniscourt.com',
  '24 Rockland Street',
  'Hanover',
  'MA',
  '02339',
  42.1134,
  -70.8120,
  '{tennis,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,consulting,equipment,lighting}',
  100,
  'free',
  false,
  false,
  0,
  0,
  50,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MID-ATLANTIC
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Mid Atlantic Tennis Courts',
  'mid-atlantic-tennis-courts',
  'Mid Atlantic Tennis Courts is the premier sport surfacing solution in the Washington DC area and surrounding states. They specialize in construction and repair of hard courts, and also build and maintain clay courts. They distribute equipment, supplies, lighting, and fencing, serving Virginia, Maryland, DC, Delaware, Pennsylvania, New Jersey, North Carolina, and South Carolina.',
  'Premier sport surfacing solution in the DC area serving VA, MD, DC, PA, DE, NJ, NC, and SC.',
  '(703) 830-0777',
  '',
  'https://midatlantictenniscourts.com',
  'P.O. Box 221254',
  'Chantilly',
  'VA',
  '20153',
  38.8943,
  -77.4311,
  '{tennis,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,equipment,lighting,fencing}',
  300,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'ATC Corp of Maryland',
  'atc-corp-maryland',
  'ATC Corp has been serving the mid-Atlantic region since 1945, making them one of the largest and oldest sports contracting firms in the United States. They build and refurbish tennis courts, running tracks, basketball courts, inline hockey rinks, volleyball courts, and multi-purpose courts. Certified as a Women''s Business Enterprise and Minority Business with MDOT.',
  'One of the largest sports contracting firms in the US, serving MD, DE, VA, WV, PA, NJ since 1945.',
  '(410) 477-4400',
  'info@atccorpmd.com',
  'https://atccorpmd.com',
  '4051 North Point Road',
  'Baltimore',
  'MD',
  '21222',
  39.2558,
  -76.4837,
  '{tennis,pickleball,basketball,volleyball,track,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance}',
  300,
  'free',
  false,
  false,
  0,
  0,
  80,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'DeShayes Dream Courts',
  'deshayes-dream-courts',
  'DeShayes Dream Courts specializes in designing and building basketball courts, tennis courts, pickleball courts, multi-sport courts, batting cages, turf fields, and more. Named in the Top 10 Sports Construction Companies for 2023 by Construction Business Review Magazine and featured on the nationally syndicated TV show House Smarts. Serving NJ, PA, Delaware Valley, and nationwide.',
  'Top 10 sports construction company specializing in backyard courts. Featured on House Smarts TV.',
  '(856) 429-5445',
  '',
  'https://mybasketballcourt.com',
  '',
  'Haddonfield',
  'NJ',
  '08033',
  39.8912,
  -75.0382,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,design}',
  300,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Supreme Kourts',
  'supreme-kourts',
  'Supreme Kourts LLC of Deal, NJ specializes in private athletic court construction for any sport. They build tennis courts, pickleball courts, basketball courts, and multi-sport courts to national league specifications, custom-tailored to each client''s vision and property requirements.',
  'Private athletic court construction in NJ built to national league specifications.',
  '(732) 787-7363',
  '',
  'https://www.supremekourts.com',
  '256 Ocean Ave',
  'Deal',
  'NJ',
  '07723',
  40.2518,
  -73.9965,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair}',
  75,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- SOUTHEAST
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Competition Athletic Surfaces',
  'competition-athletic-surfaces',
  'Competition Athletic Surfaces builds and repairs running tracks, tennis courts, turf fields, and indoor sports floors primarily in the Southeastern United States. Their founder Lee Murray has over four decades of experience. Winner of the 2017 Tennis Industry Magazine Tennis Court Builder/Contractor of the Year Award, they make over 100 tennis court installations each year.',
  '2017 Tennis Court Builder of the Year. Running tracks, tennis courts, and turf fields in the Southeast.',
  '(423) 847-8330',
  '',
  'https://competitionathleticsurfaces.com',
  '3205 North Hawthorne Street',
  'Chattanooga',
  'TN',
  '37406',
  35.0750,
  -85.2631,
  '{tennis,pickleball,basketball,volleyball,track-field,gym-flooring,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance}',
  300,
  'free',
  false,
  false,
  0,
  0,
  40,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Talbot Tennis',
  'talbot-tennis',
  'Talbot Tennis has been one of the South''s leading tennis court construction and maintenance companies since they built their first courts in 1976. Based in Marietta, GA, they provide innovative solutions for tennis court construction, reconstruction, resurfacing, and maintenance in Georgia and South Carolina. Services include grading, paving, fencing, surfacing, accessories, lighting, and basketball goals.',
  'Leading tennis court construction in Georgia and South Carolina since 1976.',
  '(770) 552-5200',
  '',
  'https://www.talbottennis.com',
  '4225 JVL Industrial Park Dr Ste 504',
  'Marietta',
  'GA',
  '30066',
  34.0234,
  -84.3568,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design,consulting,lighting,fencing,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  49,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Howard B. Jones and Son',
  'howard-b-jones-son',
  'Located in Mount Pleasant, SC, Howard B. Jones and Son Inc. serves the complete needs of the tennis court industry across South Carolina, North Carolina, Virginia, Tennessee, and Georgia. Their emphasis on quality combined with personalized attention to each client''s individual needs has kept them as a leader in the industry since their founding.',
  'Southeast tennis court industry leader serving SC, NC, VA, TN, and GA from Mount Pleasant, SC.',
  '',
  '',
  'http://www.howardbjones.com',
  '409 Coleman Blvd STE 2D',
  'Mount Pleasant',
  'SC',
  '29464',
  32.7937,
  -79.8615,
  '{tennis,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,equipment}',
  300,
  'free',
  false,
  false,
  0,
  0,
  40,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- PACIFIC NORTHWEST
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Mid Pac Tennis Construction',
  'mid-pac-tennis',
  'Mid Pac Tennis Construction has specialized in the custom design, construction, resurfacing, and maintenance of tennis courts for 52 years. They are the number one choice for tennis and multi-purpose court construction in Washington State, Oregon, and Hawaii, with hundreds of satisfied customers including universities like University of Washington, University of Oregon, and Hawaii Pacific University.',
  '52 years of tennis court construction excellence in Washington, Oregon, and Hawaii.',
  '(425) 822-1002',
  'midpactennis@midpactennis.net',
  'https://midpactennis.net',
  '',
  'Kirkland',
  'WA',
  '98033',
  47.6769,
  -122.2060,
  '{tennis,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design}',
  500,
  'free',
  false,
  false,
  0,
  0,
  52,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sport Court of Oregon',
  'sport-court-of-oregon',
  'Sport Court of Oregon is a certified CourtBuilder and licensed general contractor serving all of Oregon and Southern Washington. They offer indoor and outdoor athletic surfacing with patented WetTrax technology designed for the Pacific Northwest climate. Their courts require little maintenance and provide exceptional safety, durability, and wet traction.',
  'Certified CourtBuilder for Oregon & Southern WA with patented WetTrax wet traction technology.',
  '(503) 246-2917',
  'mail@sportcourtoforegon.com',
  'https://www.sportcourtoforegon.com',
  '8008 SW 35th Ave',
  'Portland',
  'OR',
  '97219',
  45.4725,
  -122.7130,
  '{tennis,pickleball,basketball,volleyball,multi-sport}',
  '{new-construction,resurfacing,repair,design}',
  150,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Hal''s Construction',
  'hals-construction',
  'Hal''s Construction is a Portland, Oregon-based company providing sports field and court construction services. They build tennis courts, pickleball courts (from single courts to eight-court megaplexes), basketball courts, and multi-sport facilities. Every custom-designed installation meets the highest professional design and construction standards for residential, commercial, and municipal clients.',
  'Portland sports field and court construction for tennis, pickleball, basketball, and more.',
  '(503) 226-4999',
  '',
  'https://halsconstruction.com',
  '20666 S. Highway 213',
  'Oregon City',
  'OR',
  '97045',
  45.3573,
  -122.6068,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,design}',
  100,
  'free',
  false,
  false,
  0,
  0,
  30,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MOUNTAIN WEST
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Parkin Tennis Courts',
  'parkin-tennis-courts',
  'Parkin Tennis Courts is the oldest licensed tennis court construction contractor in the Intermountain West, locally owned and operated since 1978. Based in Salt Lake City, they specialize in post-tension concrete courts for tennis, basketball, and pickleball. They perform all excavation, concrete, fencing, and landscaping in-house, serving customers throughout Colorado, Idaho, Wyoming, and Arizona.',
  'Oldest licensed tennis court contractor in the Intermountain West since 1978. Post-tension specialists.',
  '(801) 298-1391',
  'info@parkintennis.com',
  'https://www.parkintennis.com',
  '3208 North 2200 West',
  'Salt Lake City',
  'UT',
  '84116',
  40.7958,
  -111.9263,
  '{tennis,pickleball,basketball}',
  '{new-construction,resurfacing,repair,design,consulting,fencing}',
  400,
  'free',
  false,
  false,
  0,
  0,
  47,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'PAC Tennis Arizona',
  'pac-tennis-arizona',
  'For over 40 years, PAC Tennis AZ has been the trusted name in court construction and resurfacing in Arizona. Based in Phoenix and serving the entire state plus Nevada, they specialize in building, resurfacing, and maintaining tennis, pickleball, and multi-sport courts using UV-resistant coatings and heat-tolerant materials designed for the demanding Southwest climate.',
  'Arizona''s trusted court construction and resurfacing experts for 40+ years. Southwest climate specialists.',
  '(480) 490-6948',
  '',
  'https://pactennisaz.com',
  '',
  'Phoenix',
  'AZ',
  '85001',
  33.4484,
  -112.0740,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair}',
  200,
  'free',
  false,
  false,
  0,
  0,
  40,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Apex Court Builders',
  'apex-court-builders',
  'Apex Court Builders is a family-owned business specializing in statewide construction, resurfacing, and repair of tennis courts, pickleball courts, basketball courts, bocce courts, playgrounds, and running tracks across Arizona. With forty years in the industry and service locations in Phoenix, Tucson, Yuma, and Prescott, they are ASBA members and BBB accredited.',
  'Family-owned court builder serving all of Arizona with 40 years experience. ASBA member.',
  '',
  '',
  'https://apexcourtbuilders.com',
  '',
  'Tempe',
  'AZ',
  '85281',
  33.4255,
  -111.9400,
  '{tennis,pickleball,basketball,track,multi-sport}',
  '{new-construction,resurfacing,repair,design}',
  300,
  'free',
  false,
  false,
  0,
  0,
  40,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MIDWEST - UPPER
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Courts Fore Sports',
  'courts-fore-sports',
  'Courts Fore Sports is Iowa''s premier dealer and installer of specialized athletic court systems and VersaCourt surfaces. From Iowa to neighboring Nebraska, Minnesota, Wisconsin, and Illinois, they bring top-tier service to communities across the Midwest. They specialize in custom multi-sport athletic courts for residential backyards and community projects.',
  'Iowa''s premier athletic court installer serving the Midwest with VersaCourt surfaces.',
  '',
  '',
  'https://courtsforesports.com',
  '',
  'Des Moines',
  'IA',
  '50301',
  41.5868,
  -93.6250,
  '{tennis,pickleball,basketball,volleyball,shuffleboard,multi-sport}',
  '{new-construction,equipment}',
  300,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Pro Track & Tennis',
  'pro-track-and-tennis',
  'Pro Track and Tennis is a sports court and track surfacing contractor working across 24 states throughout the Midwest and South. For over 20 years, they have been building and resurfacing courts and tracks designed to perform in harsh winters, scorching heat, and high humidity. Their ASBA-certified contractors have completed 1,000+ successful projects.',
  'ASBA-certified court and track surfacing contractors serving 24 states with 1,000+ projects.',
  '',
  '',
  'https://protrackandtennis.com',
  '',
  'Des Moines',
  'IA',
  '50301',
  41.5868,
  -93.6250,
  '{tennis,pickleball,basketball,track,multi-sport}',
  '{new-construction,resurfacing,repair}',
  1000,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Kolkmann Court Builder',
  'kolkmann-court-builder',
  'Fred Kolkmann Tennis and Sports Surfaces LLC provides over 50 years of experience in tennis court evaluation, maintenance, consulting, and construction. Winner of the 2013 Tennis Industry Magazine Champions of Tennis Builder of the Year award and the Wisconsin WRMCA Concrete Design Award. Based in Wisconsin, they serve the upper Midwest with specialized Tennis Court Evaluation and Maintenance Programs.',
  '50+ years experience. 2013 TI Magazine Builder of the Year. Tennis court evaluation and maintenance.',
  '(262) 685-7507',
  '',
  'https://www.kolkmanncourtbuilder.com',
  '',
  'Waukesha',
  'WI',
  '53186',
  43.0117,
  -88.2315,
  '{tennis,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,consulting}',
  200,
  'free',
  false,
  false,
  0,
  0,
  50,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MIDWEST - CENTRAL
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Mid-American Courtworks',
  'mid-american-courtworks',
  'Mid-American Courtworks has built some of the best tennis courts and facilities in the midwest and south-central region. Based in Wichita, Kansas, owner Darrel Snyder is a Certified Tennis Court Builder with over 25 years of experience specializing in post-tension court construction. An ASBA member, they have received national attention for excellence in tennis court construction.',
  'ASBA-recognized tennis court builder in Wichita, KS serving KS, OK, TX, MO, NE, AR, and IA.',
  '(316) 558-5920',
  '',
  'https://www.tenniscourtworks.com',
  '230 N Byron Rd',
  'Wichita',
  'KS',
  '67212',
  37.7075,
  -97.3764,
  '{tennis,pickleball}',
  '{new-construction,resurfacing,repair,design}',
  400,
  'free',
  false,
  false,
  0,
  0,
  25,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Byrne & Jones Construction',
  'byrne-jones-construction',
  'Byrne & Jones Construction specializes in tennis court construction, resurfacing, and repair across Missouri, Illinois, Iowa, Tennessee, Ohio, Arkansas, Indiana, Wisconsin, and Kentucky. Based in Bridgeton, Missouri, they also construct parking lots, roads, turf fields, and running tracks, making them a versatile sports construction contractor in the Midwest.',
  'Tennis court and sports construction across 9 Midwest states from their Bridgeton, MO headquarters.',
  '(314) 254-9766',
  'Info@byrneandjones.com',
  'https://www.byrneandjones.com',
  '13940 St Charles Rock Rd',
  'Bridgeton',
  'MO',
  '63044',
  38.7670,
  -90.4132,
  '{tennis,pickleball,basketball,soccer,football,track-field,multi-sport}',
  '{new-construction,resurfacing,repair}',
  500,
  'free',
  false,
  false,
  0,
  0,
  30,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Generation Sports Construction',
  'generation-sports-construction',
  'Generation Sports Construction is an Arkansas family-owned company providing sport construction services for tennis, pickleball, basketball, bocce ball, and shuffleboard courts. They proudly serve Arkansas, Oklahoma, and Missouri with in-house installation of cushioned and non-cushion acrylic courts, base construction, fencing, and floodlighting.',
  'Arkansas family-owned court builder serving AR, OK, and MO with in-house installation.',
  '',
  '',
  'https://www.generationsportscc.com',
  '',
  'Little Rock',
  'AR',
  '72201',
  34.7465,
  -92.2896,
  '{tennis,pickleball,basketball,shuffleboard}',
  '{new-construction,resurfacing,repair,fencing,lighting}',
  250,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Tennis Courts Unlimited',
  'tennis-courts-unlimited',
  'Tennis Courts Unlimited in Nebraska City, NE offers construction, maintenance, and repair of athletic courts throughout the Midwest region including Nebraska, Iowa, Missouri, Kansas, eastern South Dakota, and western Minnesota. With more than 15 years of experience in tennis, basketball, inline skating, pickleball, and shuffleboard court construction, they handle residential and commercial projects.',
  'Midwest athletic court construction serving NE, IA, MO, KS, SD, and MN for 15+ years.',
  '(402) 873-6334',
  '',
  'https://www.tenniscourtsunlimitedne.com',
  '1130 N 58th Rd',
  'Nebraska City',
  'NE',
  '68410',
  40.6833,
  -95.8591,
  '{tennis,pickleball,basketball,shuffleboard,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance}',
  300,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- OHIO / KENTUCKY / INDIANA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Tennis Technology',
  'tennis-technology',
  'Since 1979, Tennis Technology Inc. has been the region''s top sports surface company, installing tennis courts, pickleball courts, running tracks, and other sport surfaces across Kentucky, Indiana, and Ohio. They have completed award-winning projects including courts for USTA Pro Circuit events, NCAA, and SEC competitions. Official contractor of the Cincinnati Open 2025 Expansion Project.',
  'Official Cincinnati Open contractor. Award-winning sports surfaces in KY, IN, and OH since 1979.',
  '(502) 969-8861',
  '',
  'https://www.tennistechnologyinc.com',
  '5510 Poplar Park Blvd',
  'Louisville',
  'KY',
  '40228',
  38.1344,
  -85.6668,
  '{tennis,pickleball,basketball,volleyball,track,multi-sport}',
  '{new-construction,resurfacing,repair}',
  200,
  'free',
  false,
  false,
  0,
  0,
  46,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Schubert Tennis',
  'schubert-tennis',
  'Schubert Tennis is the leading provider of tennis, pickleball, and basketball court resurfacing and construction in Ohio and Northern Kentucky. Proud provider of Eden Park''s Artswave Court in Cincinnati, they service all of Ohio including Cincinnati, Toledo, Columbus, Dayton, and Cleveland, along with Southeast Indiana and Northern Kentucky. Their expertise covers hard courts, clay courts, and indoor surfaces.',
  'Ohio''s leading court resurfacing and construction provider. Home of Eden Park''s Artswave Court.',
  '(513) 310-5890',
  '',
  'https://schuberttennis.com',
  '',
  'Cincinnati',
  'OH',
  '45202',
  39.1031,
  -84.5120,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair}',
  150,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Cincy Sportscapes',
  'cincy-sportscapes',
  'Cincinnati Sportscapes offers custom tennis, basketball, pickleball, and multi-sport athletic court construction throughout the Eastern Region of the US. They build courts in Ohio, Kentucky, Indiana, Tennessee, Alabama, Florida, and Virginia, specializing in residential and commercial court projects with attention to quality and craftsmanship.',
  'Custom athletic court construction in Cincinnati serving OH, KY, IN, TN, and beyond.',
  '(513) 309-0897',
  'Chris@CincySportscapes.com',
  'https://cincysportscapes.com',
  '5400 Long Lake Court',
  'Cincinnati',
  'OH',
  '45247',
  39.2058,
  -84.6367,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair}',
  300,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MISSISSIPPI
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Australian Courtworks',
  'australian-courtworks',
  'Australian Courtworks Inc. has been in business since 1988, specializing in post-tension concrete tennis courts, Hydro-Clay tennis courts, grass tennis courts, and synthetic surface tennis courts. Based in Brandon, MS, they have completed work across Alabama, Arkansas, Florida, Illinois, Indiana, Kansas, Louisiana, Michigan, Mississippi, Missouri, Pennsylvania, Tennessee, Texas, Virginia, and Mexico.',
  'Specialists in post-tension concrete, Hydro-Clay, and grass tennis courts since 1988.',
  '(800) 537-2613',
  '',
  'https://www.australiancourtworks.com',
  '1450 MS-471',
  'Brandon',
  'MS',
  '39042',
  32.2732,
  -89.9862,
  '{tennis,pickleball}',
  '{new-construction,resurfacing,repair,design}',
  500,
  'free',
  false,
  false,
  0,
  0,
  37,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- HAWAII
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'All Court Hawaii',
  'all-court-hawaii',
  'All Court Hawaii has been serving the Hawaiian Islands for over 30 years, owned by John and Cynthia Monnier. They specialize in court design, resurfacing, and construction for tennis, pickleball, basketball, and shuffleboard courts, tailored to Hawaii''s unique coastal climate. Authorized installer for SportMaster, California Sports Surfaces, Laykold, Guardian, VersaCourt, and Premier Court systems.',
  'Hawaii''s premier athletic court experts for 30+ years. Custom design for island coastal conditions.',
  '(808) 283-1148',
  '',
  'https://www.allcourthawaii.com',
  '',
  'Lahaina',
  'HI',
  '96761',
  20.8783,
  -156.6825,
  '{tennis,pickleball,basketball,shuffleboard}',
  '{new-construction,resurfacing,repair,design,lighting,fencing,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  30,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- GEORGIA (additional)
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Court Makers',
  'court-makers',
  'For over 45 years, Court Makers Inc. has been setting the standard for tennis and pickleball court construction in the Southeast. Based in Marietta, GA near Atlanta, they have installed and resurfaced thousands of courts while working with the South''s most prestigious clients. ASBA Certified Tennis Court Builder on staff. Members of the Cobb Chamber of Commerce and Georgia Home Builders'' Association.',
  'Atlanta''s home for tennis court construction with 45+ years experience. ASBA certified.',
  '(770) 795-8400',
  '',
  'https://courtmakers.com',
  '',
  'Marietta',
  'GA',
  '30060',
  33.9526,
  -84.5499,
  '{tennis,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,lighting,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  45,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- NEW ENGLAND (additional)
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Advantage Tennis',
  'advantage-tennis',
  'Advantage Tennis provides superior resurfacing products and top-of-the-line maintenance systems for hard court surfaces across Vermont, New Hampshire, and Maine. With nearly 47 years of experience, they handle new court construction, resurfacing, Armor Crack Repair systems, court-side lighting, fencing, and Pro Cushion systems. Certified SportMaster installer and Armor Crack Repair installer.',
  'Nearly 47 years of tennis court resurfacing and construction across VT, NH, and ME.',
  '(800) 550-2226',
  'info@advantagetennis.net',
  'https://www.advantagetennis.net',
  '759 W Hill Rd',
  'Saint Johnsbury',
  'VT',
  '05819',
  44.4190,
  -72.0150,
  '{tennis,pickleball,basketball}',
  '{new-construction,resurfacing,repair,maintenance,lighting,fencing}',
  200,
  'free',
  false,
  false,
  0,
  0,
  47,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Maine Tennis & Track',
  'maine-tennis-track',
  'Founded in 1968, Maine Tennis & Track has evolved into Maine''s largest recreational surfacing company. They specialize in consultation, design, construction, surfacing, resurfacing, patching, and maintenance of tennis and pickleball courts, running tracks, and other sports surfaces. ASBA members serving Maine, New Hampshire, and Vermont with a large supply of accessories.',
  'Maine''s largest recreational surfacing company since 1968. ASBA member serving ME, NH, and VT.',
  '(207) 657-2140',
  'surfaces@mainetennisandtrack.com',
  'https://mainetennisandtrack.com',
  '24 Mayall Rd',
  'Gray',
  'ME',
  '04039',
  43.8834,
  -70.3373,
  '{tennis,pickleball,track,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design,consulting,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  57,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'New England Tennis Courts',
  'new-england-tennis-courts',
  'New England Tennis Courts specializes in clay tennis courts and pickleball courts, serving New Hampshire, Vermont, Maine, and Massachusetts. With 50+ years of clay court experience and 500+ courts opened every spring, they use advanced laser grading technology for exceptional precision. They offer reconditioning, maintenance, and bulk supplies of Har-Tru and Hadeka Fast-Dry materials.',
  'Clay court specialists with 50+ years experience serving NH, VT, ME, and MA. 500+ courts annually.',
  '(603) 823-8880',
  'mike@claycourts.net',
  'https://claycourts.net',
  '2 Easton Rd',
  'Franconia',
  'NH',
  '03580',
  44.2298,
  -71.7476,
  '{tennis,pickleball}',
  '{new-construction,resurfacing,repair,maintenance,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  50,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MONTANA / IDAHO
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Koch''s Courts',
  'kochs-courts',
  'Koch''s Courts provides athletic court surfacing services across Montana, Idaho, Wyoming, North Dakota, Washington, and Arizona. Based in Bozeman, MT, they specialize in tennis, pickleball, and basketball court surfacing, resurfacing, and repair for residential and commercial clients in the Northern Rockies and beyond.',
  'Athletic court surfacing across MT, ID, WY, ND, WA, and AZ from Bozeman, Montana.',
  '(406) 570-5182',
  '',
  'https://kochscourts.com',
  '',
  'Bozeman',
  'MT',
  '59715',
  45.6770,
  -111.0429,
  '{tennis,pickleball,basketball}',
  '{resurfacing,repair}',
  500,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- NEW MEXICO
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Lone Mountain Contracting',
  'lone-mountain-contracting',
  'Lone Mountain Contracting is based in Bosque Farms, New Mexico and specializes in athletic facility construction including natural and synthetic fields, running tracks, tennis court installations, field lighting, and playground construction. They are a locally approved contractor for NM schools through Cooperative Educational Services, offering general contracting since 1980.',
  'New Mexico athletic facility contractor since 1980. Schools-approved for fields, tracks, and courts.',
  '(505) 869-2996',
  '',
  'https://www.lone-mountain-contracting.com',
  '',
  'Bosque Farms',
  'NM',
  '87068',
  34.8547,
  -106.7106,
  '{tennis,soccer,football,baseball,track-field,multi-sport}',
  '{new-construction,resurfacing,repair,lighting}',
  300,
  'free',
  false,
  false,
  0,
  0,
  45,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MINNESOTA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sport Court North',
  'sport-court-north',
  'Sport Court North (C&C Courts Inc.) is the only Sport Court builder for the Minneapolis/St. Paul metro area, Minnesota, and Wisconsin region. They are also the official distributor of Tarkett Sports athletic flooring. They handle everything from simple backyard courts to indoor home gymnasiums and multi-sport facilities for communities and schools.',
  'Official Sport Court builder for the Twin Cities metro, Minnesota, and Wisconsin.',
  '',
  '',
  'https://www.sportcourtmn.com',
  '9208 James Ave South Suite 5',
  'Bloomington',
  'MN',
  '55431',
  44.8408,
  -93.3110,
  '{tennis,pickleball,basketball,volleyball,gym-flooring,multi-sport}',
  '{new-construction,resurfacing,repair,design}',
  200,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- INDIANA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'AG Sports Surfaces',
  'ag-sports-surfaces',
  'AG Sports Surfaces specializes in the installation, maintenance, and resurfacing of top-tier tennis and multi-sport courts. Based in Indianapolis and servicing the entire Midwest region, they deliver exceptional quality to homeowners, HOAs, schools, and parks departments. Their services cover tennis, pickleball, basketball, padel courts, gym floor resurfacing, and running tracks across Indiana, Ohio, Kentucky, and Central Illinois.',
  'Indianapolis-based court installation and resurfacing serving the entire Midwest.',
  '',
  '',
  'https://agsportssurfaces.com',
  '',
  'Indianapolis',
  'IN',
  '46201',
  39.7684,
  -86.1581,
  '{tennis,pickleball,basketball,track,gym-flooring,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance}',
  250,
  'free',
  false,
  false,
  0,
  0,
  35,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- TEXAS (additional)
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'NexCourt',
  'nexcourt',
  'NexCourt is a court contractor offering Sport Court modular surfacing serving northern Texas and Oklahoma, including the Dallas/Fort Worth metro area since 1989. They install outdoor and indoor courts for homes, schools, businesses, and communities using durable Sport Court modular tile surfacing known for safety and playability. With thousands of courts installed over 30+ years.',
  'Sport Court dealer serving DFW and Oklahoma since 1989 with modular tile surfaces.',
  '',
  '',
  'https://nexcourt.com',
  '',
  'Dallas',
  'TX',
  '75201',
  32.7767,
  -96.7970,
  '{tennis,pickleball,basketball,volleyball,multi-sport}',
  '{new-construction,design,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  36,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- ARIZONA (additional)
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Coyote Sports Turf',
  'coyote-sports-turf',
  'Coyote Sports Turf is a licensed and insured artificial sports field installer serving Arizona and New Mexico. They specialize in synthetic turf for baseball, soccer, football, and tennis courts, building athletic fields for schools, parks, and sports complexes. Their installations are designed to perform year after year in the demanding Southwest climate.',
  'Licensed artificial sports field installer serving Arizona and New Mexico.',
  '',
  '',
  'https://www.coyotesportsturf.com',
  '',
  'Tucson',
  'AZ',
  '85701',
  32.2226,
  -110.9747,
  '{tennis,soccer,football,baseball,multi-sport}',
  '{new-construction,repair,consulting}',
  300,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- PENNSYLVANIA (Philadelphia area)
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sport Builders',
  'sport-builders',
  'Sport Builders is a highly specialized tennis and basketball court contractor serving the greater Philadelphia PA region. They build, reconstruct, and resurface tennis courts throughout Connecticut, Delaware, Maryland, Pennsylvania, New Jersey, and New York. They feature turn-key construction services for all-weather hard courts and Har-Tru brand clay courts, along with advanced renovation options for older courts. Their specialized processes have earned them distinction as one of the top tennis court contracting companies.',
  'Highly specialized tennis and basketball court contractor serving the greater Philadelphia region.',
  '(610) 779-7875',
  NULL,
  'http://www.sportbuilders.com',
  NULL,
  'Reading',
  'PA',
  '19606',
  40.3357,
  -75.9269,
  '{tennis,basketball,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,equipment,lighting,fencing}',
  150,
  'free',
  false,
  false,
  0,
  0,
  25,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Fast Times Tennis',
  'fast-times-tennis',
  'Fast Times Tennis Court Resurfacing is a premium sport court resurfacing company specializing in the construction, design, rehabilitation, resurfacing, and maintenance of acrylic court surfaces such as tennis courts, pickleball courts, and basketball courts. They have been in the court resurfacing industry for decades, serving residential properties, university and high school facilities, municipalities, and private tennis clubs across Western Pennsylvania including Pittsburgh, Greensburg, and Erie.',
  'Premium sport court resurfacing company serving Western Pennsylvania including Pittsburgh and Erie.',
  NULL,
  NULL,
  'https://fasttimestennis.com',
  NULL,
  'Pittsburgh',
  'PA',
  '15201',
  40.4406,
  -79.9959,
  '{tennis,pickleball,basketball}',
  '{new-construction,resurfacing,repair,maintenance}',
  150,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sport Court of Pittsburgh',
  'sport-court-of-pittsburgh',
  'Sport Court of Pittsburgh is an official Court Builder of Sport Court, giving families the opportunity to build memories right in their backyard. From basketball courts to tennis courts to home gyms and much more, they work with residential and commercial clients to make their dreams a reality. They can install Sport Court products on top of existing surfaces to revamp play areas.',
  'Official Sport Court builder in Pittsburgh for residential and commercial courts.',
  '(412) 224-0639',
  NULL,
  'https://www.sportcourtofpgh.com',
  '1200 Cochran Mill Road',
  'Pittsburgh',
  'PA',
  '15236',
  40.3365,
  -80.0571,
  '{tennis,basketball,pickleball,volleyball,multi-sport,gym-flooring}',
  '{new-construction,resurfacing,repair,design}',
  100,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- NEW JERSEY
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Fast Surfaces',
  'fast-surfaces-nj',
  'Fast Surfaces provides high-quality sports court construction along with playing surface improvements to residential and commercial property owners throughout the greater Philadelphia and South Jersey areas. They build tennis courts, pickleball courts, basketball courts, and multi-sport courts. Using brand name surfacing materials including acrylic surfacing from Nova Sports USA, their team has over 20 years of collective experience in the sports court business.',
  'Sports court construction and resurfacing serving South Jersey and the Philadelphia area.',
  '(856) 417-3566',
  NULL,
  'https://fastsurfaces.com',
  '244 Heilig Rd',
  'Mullica Hill',
  'NJ',
  '08062',
  39.7393,
  -75.2240,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance}',
  75,
  'free',
  false,
  false,
  0,
  0,
  8,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'NJPS Courts',
  'njps-courts',
  'NJPS Court Builders specializes in building basketball courts, tennis courts, shuffleboard courts, badminton courts, volleyball courts, and multi-game courts across New Jersey, Pennsylvania, New York, Maryland, and Delaware. They offer modular tile court systems and full construction services for residential and commercial clients throughout the tri-state area, with locations serving Bucks County, Montgomery County, and surrounding communities.',
  'Court builders serving NJ, PA, and the tri-state area for basketball, tennis, and multi-sport courts.',
  '(609) 858-2283',
  NULL,
  'http://www.njpssportscourts.com',
  NULL,
  'Franconia',
  'PA',
  '18924',
  40.3104,
  -75.3385,
  '{tennis,basketball,pickleball,volleyball,shuffleboard,multi-sport}',
  '{new-construction,resurfacing,repair,equipment,lighting}',
  100,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- VIRGINIA / DC AREA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Tennis Courts, Inc.',
  'tennis-courts-inc-va',
  'Tennis Courts, Inc. is Virginia, West Virginia, and DC''s premier tennis court builder and resurfacer for 48+ years. They have experience building courts at all scales from private residences to large complexes. Their growth is a testament to customer satisfaction, with referrals driving their success. Notable projects include Virginia Tech courts, New Kent Parks and Recreation pickleball courts, and community associations across the Eastern Shore.',
  'Virginia and DC''s premier tennis court builder and resurfacer for 48+ years.',
  NULL,
  NULL,
  'https://tenniscourtsinc.net',
  '7421 Richmond Tappahannock Hwy',
  'Aylett',
  'VA',
  '23009',
  37.7810,
  -77.0863,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,fencing}',
  200,
  'free',
  false,
  false,
  0,
  0,
  48,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Superior Tennis Courts',
  'superior-tennis-courts-va',
  'Superior Tennis Courts is a locally owned and operated company serving DC, Maryland, Virginia, North Carolina, and West Virginia. They specialize in tennis court resurfacing, repair, sealcoating, line striping, and new construction. They provide free on-site consultations to determine specific needs, with all warranties and guarantees discussed during the initial consultation.',
  'Locally owned tennis court resurfacing and repair serving DC, MD, VA, NC, and WV.',
  '(540) 272-7075',
  NULL,
  'https://superiortenniscourtsva.com',
  '12476 Hunt Rd #5617',
  'Culpeper',
  'VA',
  '22701',
  38.4729,
  -78.0097,
  '{tennis,pickleball,basketball}',
  '{new-construction,resurfacing,repair,maintenance}',
  200,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- TENNESSEE
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Champion Court Construction',
  'champion-court-construction',
  'Champion Court Construction offers a wide variety of services in Nashville and the surrounding areas with over 35 years of experience. They handle new court construction, pickleball court conversions, repairing and resurfacing all types of courts, as well as maintenance for all types of facilities. Their in-house team manages landscaping, fences, lighting, and amenities, with detailed 3D renderings provided before construction begins.',
  'Premium tennis and pickleball court construction in Nashville with 35+ years experience.',
  NULL,
  NULL,
  'https://www.championcourtconstruction.com',
  NULL,
  'Murfreesboro',
  'TN',
  '37127',
  35.8456,
  -86.3903,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design,lighting,fencing}',
  100,
  'free',
  false,
  false,
  0,
  0,
  35,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sessions Paving Company',
  'sessions-paving-company',
  'Sessions Paving Company is Nashville''s oldest asphalt paving contractor and a sports court construction contractor serving the greater Middle Tennessee area. They build tennis courts, basketball courts, and pickleball courts with expert precision, handling everything from excavation and base preparation to acrylic surfacing, line painting, and net installation. Notable projects include McFerrin Park and Madison Park in Nashville.',
  'Nashville''s oldest paving contractor offering tennis, basketball, and pickleball court construction.',
  '(615) 356-0600',
  'officemail@sessionspaving.com',
  'https://www.sessionspaving.com',
  'P.O. Box 90266',
  'Nashville',
  'TN',
  '37209',
  36.1627,
  -86.7816,
  '{tennis,pickleball,basketball}',
  '{new-construction,resurfacing,repair,maintenance,fencing}',
  75,
  'free',
  false,
  false,
  0,
  0,
  40,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Barton Sports Construction',
  'barton-sports-construction',
  'Barton Sports Construction has been building premier sports facilities since 1972, based in Memphis, Tennessee. They specialize in tennis court construction and resurfacing, pickleball court construction and resurfacing, basketball court construction and resurfacing, and clay court construction and top dressing. Known for quality and care in their craft, each employee brings years of industry experience and on-the-job training.',
  'Memphis-based sports court construction and resurfacing company since 1972.',
  '(901) 545-4729',
  NULL,
  'https://www.derrickbarton.com',
  'P.O. Box 772098',
  'Memphis',
  'TN',
  '38177',
  35.1495,
  -90.0490,
  '{tennis,pickleball,basketball}',
  '{new-construction,resurfacing,repair,maintenance}',
  150,
  'free',
  false,
  false,
  0,
  0,
  53,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- LOUISIANA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Cajun Courts',
  'cajun-courts',
  'Cajun Courts is a tennis and pickleball court construction company located in the Acadiana area of Louisiana. They provide top-quality construction, maintenance, and resurfacing services for tennis courts and pickleball courts in and around Eunice and Lake Charles, LA. They also offer clay, HydroCourt, and Rubico court installations. Their free on-site estimates are designed to beat the competition, and they work directly with customers for personalized results.',
  'Tennis and pickleball court construction and resurfacing in the Acadiana area of Louisiana.',
  '(337) 305-1339',
  NULL,
  'https://cajuncourts.com',
  NULL,
  'Eunice',
  'LA',
  '70535',
  30.4943,
  -92.4174,
  '{tennis,pickleball}',
  '{new-construction,resurfacing,repair,maintenance,design}',
  100,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'T3 Global Projects',
  't3-global-projects',
  'T3 Global Projects is a sports construction company offering professional-grade pickleball court construction and maintenance services in Louisiana and Mississippi. They install Musco Lighting for outdoor courts, providing energy-efficient metal halide and LED technology. Their ongoing maintenance services include resurfacing and crack repair using industry-leading techniques and premium materials to maximize the lifespan of sports facilities.',
  'Professional sports construction company in Louisiana specializing in pickleball courts and lighting.',
  NULL,
  NULL,
  'https://t3globalprojects.com',
  NULL,
  'Baton Rouge',
  'LA',
  '70801',
  30.4515,
  -91.1871,
  '{pickleball,tennis,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,lighting}',
  200,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- OKLAHOMA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Merritt Tennis Court & Track Systems',
  'merritt-tennis-track',
  'Since 1979, Merritt Tennis Court & Track Systems has been a leading tennis court and track construction company serving the state of Oklahoma. They offer tennis court resurfacing, running track construction, and home basketball system installations. They design, build, and repair or resurface tracks and courts to bring them to like-new conditions. Proud partners with the Oklahoma City Thunder through the Thunder Cares community outreach program.',
  'Leading Oklahoma tennis court and track construction company since 1979. OKC Thunder partner.',
  NULL,
  NULL,
  'https://www.merritttennisandtrack.com',
  NULL,
  'Oklahoma City',
  'OK',
  '73101',
  35.4676,
  -97.5164,
  '{tennis,pickleball,basketball,track-field}',
  '{new-construction,resurfacing,repair,maintenance,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  46,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- ALABAMA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Pro Court Construction',
  'pro-court-construction-al',
  'Pro Court Construction is Huntsville, Alabama''s most trusted track and court repair and resurfacing company. They help customers save money by repairing and refreshing their courts with long-term solutions guaranteed to last. Their services include tennis court resurfacing, pickleball court resurfacing, basketball court resurfacing, running track resurfacing, playground resurfacing, and repair and maintenance plans.',
  'Huntsville Alabama''s most trusted court and track repair and resurfacing company.',
  '(256) 529-4999',
  NULL,
  'https://www.procourtconstruction.com',
  'P.O. Box 1992',
  'Huntsville',
  'AL',
  '35807',
  34.7304,
  -86.5861,
  '{tennis,pickleball,basketball,track-field}',
  '{resurfacing,repair,maintenance}',
  150,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Lower Bros. Tennis Courts',
  'lower-bros-tennis-courts',
  'For over 50 years, Lower Bros. has been building tennis courts, pickleball courts, and running tracks throughout Alabama, Tennessee, Florida, Georgia, and Mississippi. They have built, surfaced, or resurfaced over 4,000 courts. Named the 2015 Builder/Contractor of the Year by Tennis Industry Magazine. Notable projects include the Olympic Tennis Center (site of the 1996 Olympics) and the University of West Alabama. They construct acrylic hard courts, clay courts with sub-surface irrigation, custom backyard game courts, and running tracks.',
  'Southeast tennis court builder for 50+ years with 4,000+ courts. 2015 Builder of the Year.',
  '(205) 967-3901',
  NULL,
  'https://lowerbros.com',
  NULL,
  'Birmingham',
  'AL',
  '35243',
  33.4075,
  -86.7430,
  '{tennis,pickleball,basketball,track-field,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance}',
  300,
  'free',
  false,
  false,
  0,
  0,
  50,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- SOUTH CAROLINA
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Carolina Sport Surfaces',
  'carolina-sport-surfaces',
  'Carolina Sport Surfaces Inc. specializes in tennis court, pickleball, basketball, and VersaCourt game court construction and resurfacing in the Charleston, South Carolina area. They offer both clay and hard court installations with a special focus on turn-key court and complex makeovers, including pickleball conversions. Led by Skip Scarpa, they provide comprehensive court solutions for residential and commercial clients.',
  'Tennis, pickleball, and basketball court construction specialist in the Charleston, SC area.',
  NULL,
  NULL,
  'https://carolinasportsurfaces.com',
  '2102 Atlantic Avenue',
  'Sullivans Island',
  'SC',
  '29482',
  32.7632,
  -79.8373,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design}',
  100,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'MAPA Recreation',
  'mapa-recreation',
  'MAPA Recreation is a locally owned and operated pickleball court construction company serving North Carolina, South Carolina, and Tennessee. They design and install custom pickleball courts and offer ancillary products including shade structures, benches, tables, nets, ball containment fencing, and rebounders. They also provide tennis-to-pickleball court conversions for communities and commercial properties.',
  'Locally owned pickleball court design and installation serving NC, SC, and Tennessee.',
  '(864) 421-3428',
  NULL,
  'https://www.maparecreation.com',
  NULL,
  'Greer',
  'SC',
  '29650',
  34.9385,
  -82.2271,
  '{pickleball,tennis,multi-sport}',
  '{new-construction,design,equipment,fencing}',
  200,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- OREGON
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Tennis Surfacing and Maintenance',
  'tennis-surfacing-maintenance',
  'Tennis Surfacing and Maintenance has been the Pacific Northwest''s premier tennis court builder and resurfacer for over 30 years. Since 1986, they have provided quality surfacing for tennis clubs, private residences, schools, and parks and recreation departments. As a licensed contractor for Oregon, their featured projects include the University of Oregon tennis courts in Eugene and West Hills Racquet Club in Portland.',
  'Pacific Northwest''s premier tennis court builder and resurfacer since 1986.',
  NULL,
  NULL,
  'https://www.tennis-surfacing.com',
  NULL,
  'Portland',
  'OR',
  '97201',
  45.5152,
  -122.6784,
  '{tennis,pickleball,basketball}',
  '{new-construction,resurfacing,repair,maintenance}',
  150,
  'free',
  false,
  false,
  0,
  0,
  39,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- WASHINGTON STATE
-- =====================================================

-- (Mid Pac Tennis already in file covering WA/OR/HI)

-- =====================================================
-- UTAH
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Ace Courts',
  'ace-courts-utah',
  'For 30 years, Ace Courts has been Utah''s trusted name in court construction. They proudly serve the entire state, from Cache Valley and Garden City in Rich County to the vibrant communities of southern Utah including St. George, Cedar City, and the surrounding areas in Iron and Washington Counties. They have built top-quality pickleball, basketball, and tennis courts in cities like Salt Lake City, Heber City, Park City, Layton, Alpine, and beyond. Specializing in custom post-tension concrete courts.',
  'Utah''s trusted court builder for 30 years serving the entire state with post-tension concrete courts.',
  NULL,
  NULL,
  'https://www.acecourtsutah.com',
  NULL,
  'St. George',
  'UT',
  '84770',
  37.0965,
  -113.5684,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,design}',
  300,
  'free',
  false,
  false,
  0,
  0,
  30,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MICHIGAN
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'VTECH Construction',
  'vtech-construction',
  'VTECH Construction is Michigan''s trusted choice for multi-sport court construction and refurbishment. They specialize in tennis, pickleball, and basketball courts — designing and building new facilities as well as repairing, resurfacing, and modernizing existing ones. From Metro Detroit to Grand Rapids and everywhere in between, their team delivers courts built to last, always conforming to ASBA standards. Serving both residential and commercial clients.',
  'Michigan''s trusted multi-sport court builder from Metro Detroit to Grand Rapids. ASBA compliant.',
  '(248) 534-8784',
  'courtsbyvtech@gmail.com',
  'https://courtsbyvtech.com',
  '4941 South Hill Road',
  'Milford',
  'MI',
  '48381',
  42.5848,
  -83.6002,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,design}',
  200,
  'free',
  false,
  false,
  0,
  0,
  10,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sport Court Michigan',
  'sport-court-michigan',
  'Sport Court Michigan has been discovering the potential within champions for several decades. Their CourtBuilders, located in Paw Paw, have been helping families design, build, and install courts across Michigan for over 30 years. As the sole CourtBuilder for Sport Court athletic flooring and components, they build residential and commercial courts including basketball, tennis, pickleball, putting greens, and multi-sport facilities with quality products and expert installation.',
  'Sole Sport Court CourtBuilder for Michigan with 30+ years of experience in Paw Paw.',
  NULL,
  NULL,
  'https://www.sportcourtmi.com',
  '30312 M 40',
  'Paw Paw',
  'MI',
  '49079',
  42.2178,
  -85.8928,
  '{tennis,basketball,pickleball,volleyball,multi-sport,golf-putting,gym-flooring}',
  '{new-construction,design,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  30,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Racquet Sports Inc.',
  'racquet-sports-inc',
  'Based in Grand Rapids, Michigan, Racquet Sports Inc. has been serving Michigan for 40 years. Their team specializes in commercial sport court solutions including design, installation, repair, resurfacing, and maintenance of tennis, pickleball, basketball, and shuffleboard courts. Located in Comstock Park since 2001, they are prepared to travel and provide services throughout all of the state of Michigan.',
  'Grand Rapids-based court specialist serving Michigan for 40 years.',
  '(616) 785-8003',
  NULL,
  'https://www.racquetsportsinc.com',
  '5850 Comstock Park Dr NW',
  'Comstock Park',
  'MI',
  '49321',
  43.0378,
  -85.6715,
  '{tennis,pickleball,basketball,shuffleboard}',
  '{new-construction,resurfacing,repair,maintenance,design}',
  200,
  'free',
  false,
  false,
  0,
  0,
  40,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Goddard Sport Surfaces',
  'goddard-sport-surfaces',
  'Goddard Sport Surfaces specializes in the design and construction of asphalt and concrete tennis courts for all types of commercial and residential projects in Michigan and Ohio. They have installed acrylic coatings on thousands of sport surfaces, proudly offering products from California Sports Surfaces/Plexipave and Pro-Cushion to ensure premier quality surfaces. The Plexipave Color Finish System is an all-weather, durable surface that provides superior UV resistance.',
  'Tennis court and running track construction and resurfacing specialists in Michigan and Ohio.',
  '(248) 393-6320',
  NULL,
  'https://www.goddardsportsurfaces.com',
  '490 South Opdyke Road',
  'Pontiac',
  'MI',
  '48341',
  42.6256,
  -83.2830,
  '{tennis,pickleball,basketball,track-field}',
  '{new-construction,resurfacing,repair,design}',
  200,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- WISCONSIN
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Munson Inc.',
  'munson-inc',
  'For more than 65 years, Munson Inc. has been the preferred choice for paving and fencing in the greater Milwaukee area. Their tennis court division puts these talents together creating nationally award-winning all-weather tennis and pickleball courts. From a single residential court to a battery of eight for a private club or municipality, they custom build courts from the ground up — excavating, paving, fencing, and finishing in-house to control quality from start to finish.',
  'Milwaukee''s preferred tennis court builder for 65+ years with nationally award-winning courts.',
  '(414) 351-0800',
  'info@munsoninc.com',
  'https://www.munsoninc.com',
  '6747 N Sidney Place',
  'Glendale',
  'WI',
  '53209',
  43.1253,
  -87.9363,
  '{tennis,pickleball,basketball,multi-sport}',
  '{new-construction,resurfacing,repair,maintenance,fencing,lighting}',
  100,
  'free',
  false,
  false,
  0,
  0,
  65,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sport Court Wisconsin',
  'sport-court-wisconsin',
  'Sport Court Wisconsin (C&C Courts) is an athletic court construction company with capabilities from simple backyard basketball courts to community multi-athletic courts. They specialize in residential indoor and outdoor athletic courts, commercial courts, tennis courts, multi-sport courts, backyard athletic courts, putting greens, turf, and fitness flooring. Serving Milwaukee, Madison, Waukesha, Green Bay, Fond Du Lac, Sheboygan, LaCrosse, Wausau, and all of Wisconsin.',
  'Athletic court construction company serving all of Wisconsin from Milwaukee to Green Bay.',
  NULL,
  NULL,
  'https://www.sportcourtwisconsin.com',
  '8325 Highland Dr',
  'Wausau',
  'WI',
  '54401',
  44.9591,
  -89.6301,
  '{tennis,basketball,pickleball,volleyball,multi-sport,golf-putting,gym-flooring}',
  '{new-construction,design,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- GEORGIA (additional - South Carolina coverage)
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Baseline Sports Construction',
  'baseline-sports-construction',
  'Baseline Sports Construction is a full-service sports construction company offering natural and synthetic turf fields, running tracks, tennis and pickleball courts, and indoor projects. They have constructed full-size soccer and multipurpose synthetic turf fields, tennis complexes, and other sports facilities for schools, municipalities, and community organizations throughout the Southeast including South Carolina and Georgia.',
  'Full-service sports construction company for turf, tracks, tennis, and more in the Southeast.',
  NULL,
  NULL,
  'https://www.baselinellc.com',
  NULL,
  'Greenville',
  'SC',
  '29601',
  34.8526,
  -82.3940,
  '{tennis,pickleball,soccer,football,baseball,track-field,multi-sport}',
  '{new-construction,resurfacing,repair,design,consulting}',
  200,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MISSOURI (additional)
-- =====================================================

-- (Byrne & Jones already in file from Bridgeton, MO)

-- =====================================================
-- NORTH CAROLINA (additional)
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sport Court Carolina',
  'sport-court-carolina',
  'Sport Court Carolina offers professional flooring installation for commercial facilities across North and South Carolina. They specialize in gym flooring, indoor athletic courts, and multi-sport surfaces for schools, recreation centers, and commercial properties. As an authorized Sport Court dealer, they provide patented modular tile systems designed for superior performance and safety.',
  'Professional athletic flooring for commercial facilities across North and South Carolina.',
  NULL,
  NULL,
  'https://sportcourtcarolina.com',
  NULL,
  'Charlotte',
  'NC',
  '28202',
  35.2271,
  -80.8431,
  '{basketball,volleyball,multi-sport,gym-flooring}',
  '{new-construction,design,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

-- =====================================================
-- MISSISSIPPI (additional coverage for Southeast)
-- =====================================================

-- (Australian Courtworks already in file from Brandon, MS)

-- =====================================================
-- IOWA (additional)
-- =====================================================

-- (Courts Fore Sports already in file from Des Moines, IA)

-- =====================================================
-- KANSAS (additional)
-- =====================================================

-- (Mid-American Courtworks already in file from Wichita, KS)

-- =====================================================
-- NEBRASKA (additional)
-- =====================================================

-- (Tennis Courts Unlimited already in file from Nebraska City, NE)

-- =====================================================
-- ADDITIONAL COVERAGE - MULTI-STATE COMPANIES
-- =====================================================

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Collier Engineering Co.',
  'collier-engineering',
  'Collier Engineering Co., Inc. is a Nashville-based firm specializing in designing and managing the construction of tennis courts and recreational surfaces. Following the guidelines of the American Sports Builders Association and the United States Tennis Association, their surface design specifications include crack sealants, acrylic resurfacers and coloring systems, geotextile asphalt overlay fabric, and asphalt surface materials. They provide engineering and project management for sports facilities.',
  'Nashville engineering firm specializing in tennis court design and construction management.',
  NULL,
  NULL,
  'https://collierengineering.com',
  NULL,
  'Nashville',
  'TN',
  '37203',
  36.1627,
  -86.7816,
  '{tennis,pickleball,multi-sport}',
  '{design,consulting,new-construction}',
  150,
  'free',
  false,
  false,
  0,
  0,
  20,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Pelican Playgrounds',
  'pelican-playgrounds',
  'Pelican Playgrounds provides multi-sport game courts for Louisiana and Mississippi using VersaCourt''s high-performance sport tile system. Their courts are perfect for basketball, volleyball, hockey, pickleball, and more. VersaCourt''s unique outdoor court tile system can be outfitted to support multiple sports at once, making their installations versatile community assets for parks, recreation centers, and residential properties.',
  'Multi-sport game court provider for Louisiana and Mississippi using VersaCourt tile systems.',
  NULL,
  NULL,
  'https://pelicanplaygrounds.com',
  NULL,
  'Baton Rouge',
  'LA',
  '70801',
  30.4515,
  -91.1871,
  '{basketball,volleyball,pickleball,multi-sport}',
  '{new-construction,design,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Stewart Tennis Courts & Fencing',
  'stewart-tennis-courts',
  'Stewart Tennis Courts & Fencing is a family-owned and operated tennis court contractor located in Palmetto, Florida, serving commercial and municipal clients throughout Florida, Georgia, and Alabama. They specialize in bocce ball, basketball, and tennis court construction, resurfacing, and fencing for parks, recreation departments, and HOA communities. Their Southeast coverage extends their services into Alabama markets.',
  'Family-owned tennis court and fencing contractor serving Florida, Georgia, and Alabama.',
  NULL,
  NULL,
  'https://stewarttennis.com',
  NULL,
  'Palmetto',
  'FL',
  '34221',
  27.5214,
  -82.5723,
  '{tennis,basketball,pickleball,multi-sport}',
  '{new-construction,resurfacing,repair,fencing,equipment}',
  300,
  'free',
  false,
  false,
  0,
  0,
  25,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Sport Court West Michigan',
  'sport-court-west-michigan',
  'Sport Court of West Michigan has been building champion courts for families and communities in the Great Lake State since 1974. They specialize in multi-sport courts, basketball courts, volleyball courts, pickleball courts, tennis courts, and home gyms using Sport Court''s revolutionary backyard court tile system. They provide residential and commercial court construction with expert installation from their base in Paw Paw.',
  'Certified Sport Court builder for West Michigan families and communities since 1974.',
  NULL,
  NULL,
  'https://sportcourtwestmich.com',
  NULL,
  'Paw Paw',
  'MI',
  '49079',
  42.2178,
  -85.8928,
  '{basketball,volleyball,pickleball,tennis,multi-sport,gym-flooring}',
  '{new-construction,design,equipment}',
  150,
  'free',
  false,
  false,
  0,
  0,
  51,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'The Tennis and Track Company',
  'tennis-and-track-company',
  'The Tennis and Track Company provides professional tennis court and running track construction services. They have both a Certified Running Track Builder and a Certified Tennis Court Builder on staff, ensuring the highest standards of quality for athletic facility projects. They serve clients across the Intermountain West region, working with schools, parks, municipalities, and private residences.',
  'Certified tennis court and running track builder serving the Intermountain West.',
  NULL,
  NULL,
  'https://www.tennisandtrackco.com',
  NULL,
  'Salt Lake City',
  'UT',
  '84101',
  40.7608,
  -111.8910,
  '{tennis,pickleball,track-field}',
  '{new-construction,resurfacing,repair,consulting}',
  300,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Lewis Landscape Services',
  'lewis-landscape-services',
  'Lewis Landscape Services has been serving the Portland, Oregon area since 1996, offering athletic court installation for various sports including basketball, pickleball, tennis, and volleyball. Their experienced team handles the complete design and installation process for residential and commercial clients, complementing their court construction with professional landscaping services throughout the Portland metro area.',
  'Portland, OR athletic court installer for basketball, pickleball, tennis since 1996.',
  NULL,
  NULL,
  'https://www.lewislandscape.com',
  NULL,
  'Portland',
  'OR',
  '97223',
  45.4407,
  -122.7640,
  '{basketball,pickleball,tennis,volleyball}',
  '{new-construction,design}',
  50,
  'free',
  false,
  false,
  0,
  0,
  29,
  NULL,
  false,
  NULL,
  '{}'
);

INSERT INTO vendors (name, slug, description, short_description, phone, email, website, address, city, state, zip, latitude, longitude, sport_types, service_types, service_area_miles, tier, is_verified, is_featured, rating, review_count, years_in_business, license_number, insurance_verified, logo_url, gallery_urls)
VALUES (
  'Engerman Contracting - Sport Court WI',
  'engerman-contracting-wi',
  'Engerman Contracting operates as a Sport Court dealer in Wisconsin, serving cities including Milwaukee, Madison, Waukesha, Fond Du Lac, Sheboygan, LaCrosse, Wausau, Green Bay, Port Washington, Lake Geneva, Oconomowoc, Delafield, and Oregon. They specialize in Sport Court modular tile installations for residential backyards and commercial properties, offering basketball, tennis, pickleball, and multi-sport court construction.',
  'Sport Court modular tile dealer serving all of Wisconsin from Milwaukee to Green Bay.',
  NULL,
  NULL,
  'https://engermancontracting.com',
  NULL,
  'Milwaukee',
  'WI',
  '53202',
  43.0389,
  -87.9065,
  '{basketball,tennis,pickleball,volleyball,multi-sport}',
  '{new-construction,design,equipment}',
  200,
  'free',
  false,
  false,
  0,
  0,
  15,
  NULL,
  false,
  NULL,
  '{}'
);
