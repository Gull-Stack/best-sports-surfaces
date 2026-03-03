import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ogzvejdnsfmssmbuluzc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nenZlamRuc2Ztc3NtYnVsdXpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTYzNTQ1MywiZXhwIjoyMDg1MjExNDUzfQ.SU-_oaz3aXIF9pyGpW5Gx0-1zpYG7z3kQN3EiajCrvc'
);

const posts = [
  {
    id: 'b0000001-0000-0000-0000-000000000001',
    title: 'The Complete Guide to Tennis Court Surfaces',
    slug: 'complete-guide-tennis-court-surfaces',
    excerpt: 'Explore the pros and cons of every major tennis court surface — hard court, clay, grass, and synthetic — including costs, maintenance requirements, and climate suitability.',
    content: `<article>
<p>Choosing the right tennis court surface is one of the most important decisions you will make when building or renovating a court. The surface affects ball speed, bounce height, player comfort, maintenance demands, and long-term costs.</p>
<h2 id="hard-court-surfaces">Hard Court Surfaces</h2>
<p>Hard courts are the most common tennis surface worldwide. They are constructed from asphalt or concrete bases topped with an acrylic coating system. Standard acrylic hard courts typically cost between $25,000 and $60,000 to install for a single regulation court.</p>
<p>Hard courts offer a medium-paced game with a consistent, predictable bounce. Maintenance is relatively straightforward: pressure washing once or twice a year, keeping the surface free of debris, and patching any cracks. Expect to resurface every five to eight years at a cost of $4,000 to $10,000.</p>
<h2 id="clay-court-surfaces">Clay Court Surfaces</h2>
<p>Clay courts are synonymous with the French Open at Roland Garros. There are two primary types: red clay (crushed brick or shale) and green clay (Har-Tru, made from crushed metabasalt stone). Red clay courts range from $35,000 to $75,000, and Har-Tru green clay costs $30,000 to $60,000.</p>
<p>Clay courts are gentler on players' bodies, making them an excellent choice for older athletes or those with joint concerns. However, the high maintenance demands and seasonal limitations make them impractical in many climates.</p>
<h2 id="grass-court-surfaces">Grass Court Surfaces</h2>
<p>Grass courts are the rarest and most prestigious surface in tennis, most famously used at Wimbledon. Building a grass tennis court costs $50,000 to $150,000 or more. Very few private facilities invest in grass courts due to the extensive maintenance required.</p>
<h2 id="synthetic-surfaces">Synthetic and Alternative Surfaces</h2>
<p>Synthetic surfaces include artificial grass, modular polypropylene tiles, and rubber-cushioned systems. Artificial grass tennis courts cost $30,000 to $65,000 and require no watering or mowing. Modular tile systems range from $15,000 to $40,000.</p>
<h2 id="cost-comparison">Cost Comparison Summary</h2>
<ul>
<li><strong>Hard Court (Acrylic):</strong> $25,000–$60,000 installation</li>
<li><strong>Red Clay:</strong> $35,000–$75,000 installation</li>
<li><strong>Har-Tru (Green Clay):</strong> $30,000–$60,000 installation</li>
<li><strong>Natural Grass:</strong> $50,000–$150,000+ installation</li>
<li><strong>Synthetic Grass:</strong> $30,000–$65,000 installation</li>
<li><strong>Modular Tile:</strong> $15,000–$40,000 installation</li>
</ul>
</article>`,
    category: 'Tennis',
    tags: ['tennis', 'surfaces', 'cost guide', 'hard court', 'clay court'],
    featured_image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2026-01-15T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000002',
    title: 'How Much Does a Basketball Court Cost in 2026?',
    slug: 'basketball-court-cost-2026',
    excerpt: 'A detailed breakdown of basketball court construction costs for backyard, commercial, and professional installations — covering concrete, asphalt, sport tiles, and indoor options.',
    content: `<article>
<p>Building a basketball court is one of the most popular sports surface investments for homeowners, schools, and municipalities. The total cost depends on size, surface material, location, and extras like lighting and fencing.</p>
<h2 id="backyard-courts">Backyard Basketball Courts</h2>
<p>A standard half-court (30×50 feet) is the most common residential option. Concrete costs $5,000–$15,000, while sport tile surfaces run $8,000–$20,000 installed. Full backyard courts (50×84 feet) typically cost $15,000–$45,000 depending on material and site prep.</p>
<h2 id="commercial-courts">Commercial and Municipal Courts</h2>
<p>Commercial outdoor courts with professional-grade surfaces, striping, and goals cost $20,000–$80,000. Indoor courts are significantly more expensive, ranging from $100,000 to $500,000+ depending on the facility size and flooring system.</p>
<h2 id="surface-options">Surface Material Options</h2>
<p><strong>Concrete:</strong> The most durable and affordable option at $4–$8 per square foot. Requires crack sealing every few years.</p>
<p><strong>Asphalt:</strong> Slightly cheaper at $3–$6 per square foot but less durable. Needs resurfacing every 3–5 years.</p>
<p><strong>Sport Tiles:</strong> Modular interlocking tiles at $3–$7 per square foot. Excellent drainage and easy installation.</p>
<p><strong>Indoor Hardwood:</strong> Premium maple flooring at $8–$15 per square foot, used in professional and collegiate facilities.</p>
<h2 id="cost-saving-tips">Cost-Saving Tips</h2>
<ul>
<li>Use existing concrete pads when possible</li>
<li>Choose standard dimensions to reduce custom work</li>
<li>Get multiple quotes from local contractors</li>
<li>Consider phased construction — court first, lighting and fencing later</li>
</ul>
</article>`,
    category: 'Basketball',
    tags: ['basketball', 'cost guide', 'backyard court', 'concrete', 'sport tiles'],
    featured_image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2026-01-12T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000003',
    title: 'Pickleball Court Construction: Everything You Need to Know',
    slug: 'pickleball-court-construction-guide',
    excerpt: 'The definitive guide to building a pickleball court — dimensions, surface types, costs, and design considerations for residential and commercial installations.',
    content: `<article>
<p>Pickleball is the fastest-growing sport in America, and demand for dedicated courts has surged. Whether you are converting a tennis court, building from scratch, or adding courts to a community facility, this guide covers everything you need to know.</p>
<h2 id="dimensions">Court Dimensions and Layout</h2>
<p>A standard pickleball court is 20 feet wide by 44 feet long. With recommended runback space, plan for a minimum playing area of 30×60 feet (1,800 square feet). Multi-court layouts should allow 34 feet between court centers for side-by-side configurations.</p>
<h2 id="surface-types">Surface Type Options</h2>
<p><strong>Acrylic (Post-tension concrete):</strong> The gold standard for dedicated courts. Costs $15,000–$40,000 per court. Provides consistent bounce and can be color-customized.</p>
<p><strong>Concrete:</strong> A budget-friendly base at $8,000–$20,000 per court. Apply an acrylic color coat for better playability.</p>
<p><strong>Modular Tiles:</strong> Quick installation at $5,000–$15,000 per court. Great for backyard conversions and temporary setups.</p>
<h2 id="tennis-conversion">Converting Tennis Courts to Pickleball</h2>
<p>A single tennis court can accommodate up to four pickleball courts. Conversion costs range from $2,000–$8,000 for line striping and nets, or $10,000–$25,000 for a full surface renovation with dedicated pickleball dimensions.</p>
<h2 id="extras">Popular Add-Ons</h2>
<ul>
<li><strong>LED Lighting:</strong> $5,000–$15,000 for night play capability</li>
<li><strong>Fencing:</strong> $3,000–$10,000 for ball containment</li>
<li><strong>Shade Structures:</strong> $5,000–$20,000 for player comfort</li>
<li><strong>Seating:</strong> $1,000–$5,000 for spectator benches</li>
</ul>
</article>`,
    category: 'Pickleball',
    tags: ['pickleball', 'construction', 'cost guide', 'court conversion'],
    featured_image: 'https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2026-01-10T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000004',
    title: 'Natural vs. Synthetic Turf: Which Is Right for Your Field?',
    slug: 'natural-vs-synthetic-turf-comparison',
    excerpt: 'A comprehensive comparison of natural grass and synthetic turf for soccer fields, football fields, and multi-sport complexes — covering cost, maintenance, safety, and performance.',
    content: `<article>
<p>The natural vs. synthetic turf debate affects every field sport facility decision. Both options have significant advantages and trade-offs depending on usage, climate, budget, and maintenance capacity.</p>
<h2 id="natural-turf">Natural Turf</h2>
<p>Natural grass fields cost $50,000–$200,000 to establish for a full-size soccer or football field. Annual maintenance runs $15,000–$50,000 including mowing, fertilization, aeration, irrigation, and overseeding. Natural turf provides superior playing feel and lower surface temperatures.</p>
<h2 id="synthetic-turf">Synthetic Turf</h2>
<p>Modern synthetic turf fields cost $300,000–$1,000,000 installed but require far less maintenance — about $5,000–$15,000 annually. They can handle 2,000–3,000 playing hours per year compared to 500–800 for natural grass. Expected lifespan is 8–12 years before replacement.</p>
<h2 id="safety">Safety Considerations</h2>
<p>Both surfaces have injury considerations. Natural grass can become uneven and slippery. Synthetic turf generates more heat and may increase certain injury types. Modern infill systems have significantly improved synthetic turf safety profiles.</p>
<h2 id="environmental">Environmental Impact</h2>
<p>Natural turf provides carbon sequestration and stormwater management. Synthetic turf eliminates water usage and pesticide needs but has end-of-life disposal concerns. Newer recyclable turf systems are addressing this issue.</p>
</article>`,
    category: 'Turf & Fields',
    tags: ['turf', 'synthetic', 'natural grass', 'soccer', 'football'],
    featured_image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2026-01-08T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000005',
    title: 'Sports Court Maintenance: A Seasonal Checklist',
    slug: 'sports-court-maintenance-seasonal-checklist',
    excerpt: 'Keep your sports court in top condition year-round with this seasonal maintenance guide covering cleaning, repairs, resurfacing, and winterization.',
    content: `<article>
<p>Regular maintenance extends the life of any sports surface and ensures safe, consistent play. This seasonal checklist covers the essentials for hard courts, clay courts, and synthetic surfaces.</p>
<h2 id="spring">Spring Maintenance</h2>
<ul>
<li>Inspect for winter damage — cracks, heaving, drainage issues</li>
<li>Power wash hard court surfaces to remove algae and debris</li>
<li>Rebuild clay court surfaces and check irrigation systems</li>
<li>Touch up line markings and repair net systems</li>
<li>Check lighting fixtures and replace burned-out bulbs</li>
</ul>
<h2 id="summer">Summer Maintenance</h2>
<ul>
<li>Water clay courts daily, preferably in the morning</li>
<li>Remove organic debris promptly to prevent staining</li>
<li>Monitor synthetic turf temperatures and apply cooling treatments if needed</li>
<li>Inspect fencing and windscreens for wear</li>
</ul>
<h2 id="fall">Fall Maintenance</h2>
<ul>
<li>Clear leaves and organic matter frequently</li>
<li>Schedule professional surface inspection</li>
<li>Apply anti-fungal treatments to prevent algae growth</li>
<li>Service drainage systems before winter</li>
</ul>
<h2 id="winter">Winter Maintenance</h2>
<ul>
<li>Remove snow gently — avoid metal shovels on court surfaces</li>
<li>Do not use salt or chemical deicers on sports surfaces</li>
<li>Cover clay courts if not winterized</li>
<li>Check for ice damage after freeze-thaw cycles</li>
</ul>
</article>`,
    category: 'Maintenance',
    tags: ['maintenance', 'seasonal', 'cleaning', 'repair', 'winterization'],
    featured_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2026-01-06T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000006',
    title: 'How to Choose the Right Sports Surface Contractor',
    slug: 'how-to-choose-sports-surface-contractor',
    excerpt: 'A step-by-step guide to finding, vetting, and hiring the right contractor for your sports surface project — from initial research to contract signing.',
    content: `<article>
<p>Hiring the right contractor can make or break your sports surface project. The difference between a quality installation and a problematic one often comes down to choosing the right builder. Here is how to make the best decision.</p>
<h2 id="research">Step 1: Research and Shortlist</h2>
<p>Start by searching for contractors who specialize in your specific sport type. A tennis court specialist understands different needs than a turf field installer. Use directories like BestSportsSurfaces.com to find verified contractors in your area.</p>
<h2 id="verify">Step 2: Verify Credentials</h2>
<p>Check for proper licensing, insurance, and bonding. Ask for references from recent projects similar to yours. Look for industry certifications from organizations like the American Sports Builders Association (ASBA).</p>
<h2 id="compare">Step 3: Get Multiple Quotes</h2>
<p>Get at least three detailed written quotes. Compare not just price but also materials specified, timeline, warranty terms, and included services. The lowest bid is not always the best value.</p>
<h2 id="contract">Step 4: Review the Contract</h2>
<p>Ensure the contract includes detailed specifications, payment schedule (never pay 100% upfront), timeline with milestones, warranty information, and a clear change order process.</p>
<h2 id="red-flags">Red Flags to Watch For</h2>
<ul>
<li>No written contract or vague specifications</li>
<li>Demands full payment upfront</li>
<li>No proof of insurance or licensing</li>
<li>Cannot provide recent references</li>
<li>Pressure to sign immediately</li>
</ul>
</article>`,
    category: 'Industry',
    tags: ['contractor', 'hiring guide', 'tips', 'vetting'],
    featured_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2026-01-04T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000007',
    title: 'Running Track Surfaces: Materials, Costs, and Installation',
    slug: 'running-track-surfaces-guide',
    excerpt: 'Everything you need to know about running track surfaces — from rubberized polyurethane to latex and sandwich systems — including costs and performance characteristics.',
    content: `<article>
<p>A quality running track surface is essential for athlete performance and safety. Modern track surfaces have evolved significantly, offering options for every budget and performance level.</p>
<h2 id="full-pour">Full-Pour Polyurethane</h2>
<p>The premium option used in Olympic and collegiate facilities. Costs $8–$15 per square foot installed. Provides the most consistent performance, excellent shock absorption, and a lifespan of 10–15 years. Two types: impermeable (competition) and permeable (training).</p>
<h2 id="sandwich">Sandwich System</h2>
<p>A cost-effective alternative at $5–$10 per square foot. Uses a rubber base mat with a polyurethane top coat. Good durability and performance for high school and municipal tracks.</p>
<h2 id="latex">Latex Tracks</h2>
<p>The most budget-friendly option at $3–$7 per square foot. Uses latex-bound rubber granules. Suitable for practice facilities and lower-budget installations. Lifespan of 5–8 years.</p>
<h2 id="total-costs">Total Project Costs</h2>
<p>A standard 400-meter, 8-lane track covers approximately 40,000 square feet of surface area. Total project costs including base construction, surface installation, striping, and equipment:</p>
<ul>
<li><strong>Full-Pour:</strong> $500,000–$1,000,000</li>
<li><strong>Sandwich System:</strong> $300,000–$600,000</li>
<li><strong>Latex:</strong> $200,000–$400,000</li>
</ul>
</article>`,
    category: 'Cost Guides',
    tags: ['running track', 'polyurethane', 'cost guide', 'installation'],
    featured_image: 'https://images.unsplash.com/photo-1461897104016-0b3b00b1ea56?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2026-01-02T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000008',
    title: 'LED Lighting for Sports Courts: A Buyer\'s Guide',
    slug: 'led-lighting-sports-courts-guide',
    excerpt: 'How to choose the right LED lighting for your sports court — covering foot-candle requirements, pole placement, energy costs, and top manufacturers.',
    content: `<article>
<p>Proper lighting extends your court's usable hours and improves safety. LED technology has revolutionized sports lighting with better efficiency, longer lifespan, and instant-on capability.</p>
<h2 id="requirements">Lighting Requirements by Sport</h2>
<p><strong>Tennis:</strong> 50–75 foot-candles for recreational play, 75–125 for competitive. Four poles with 2–4 fixtures each is standard for a single court.</p>
<p><strong>Basketball:</strong> 30–50 foot-candles for recreational, 50–100 for competitive. Two to four poles depending on court size.</p>
<p><strong>Pickleball:</strong> 30–50 foot-candles for recreational play. Two poles are often sufficient for a single court.</p>
<h2 id="costs">Installation Costs</h2>
<p>A complete LED lighting system for a single court typically costs $8,000–$25,000 installed, including poles, fixtures, wiring, and controls. Multi-court installations benefit from shared infrastructure and can reduce per-court costs by 20–30%.</p>
<h2 id="energy">Energy Savings</h2>
<p>LED fixtures use 50–70% less energy than traditional metal halide lights. A typical court lighting system costs $50–$150 per month to operate at 3–4 hours per night. LED fixtures last 50,000–100,000 hours versus 10,000–20,000 for metal halide.</p>
<h2 id="smart-controls">Smart Controls</h2>
<p>Modern systems offer programmable timers, motion sensors, dimming capability, and remote smartphone control. These features save energy and provide convenience for both private and public facilities.</p>
</article>`,
    category: 'Industry',
    tags: ['lighting', 'LED', 'installation', 'energy efficiency'],
    featured_image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2025-12-30T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000009',
    title: 'Multi-Sport Court Design: One Surface for Every Game',
    slug: 'multi-sport-court-design-guide',
    excerpt: 'Design a versatile multi-sport court for basketball, pickleball, tennis, volleyball, and more — covering layout options, surface choices, and line marking strategies.',
    content: `<article>
<p>A multi-sport court maximizes your investment by supporting multiple games on a single surface. With thoughtful design, you can accommodate basketball, pickleball, tennis, volleyball, badminton, and more.</p>
<h2 id="layout">Layout Planning</h2>
<p>The most common multi-sport court size is 60×90 feet, which accommodates a full basketball court with overlapping pickleball and tennis lines. Smaller yards can use 30×60 feet for a half-court basketball with two pickleball courts.</p>
<h2 id="surface-choice">Surface Selection</h2>
<p>Modular sport tiles are the most popular choice for multi-sport courts because they offer good performance across all sports, easy installation, and excellent drainage. Cost runs $12,000–$35,000 depending on size. Acrylic-coated concrete is the premium option at $20,000–$50,000.</p>
<h2 id="line-marking">Line Marking Strategy</h2>
<p>Use different colors for each sport's lines to avoid confusion. Common schemes: basketball in white, pickleball in yellow, tennis in green, and volleyball in blue. Professional line painting costs $500–$1,500.</p>
<h2 id="equipment">Equipment Considerations</h2>
<p>Adjustable-height basketball goals allow different age groups to play. Portable net systems for tennis, pickleball, and volleyball provide flexibility. Budget $2,000–$5,000 for multi-sport equipment packages.</p>
</article>`,
    category: 'Industry',
    tags: ['multi-sport', 'court design', 'layout', 'line marking'],
    featured_image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2025-12-28T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000010',
    title: 'Sports Court Drainage: Why It Matters and How to Get It Right',
    slug: 'sports-court-drainage-guide',
    excerpt: 'Proper drainage is the foundation of any lasting sports surface. Learn about drainage systems, slope requirements, and common mistakes to avoid.',
    content: `<article>
<p>Drainage is arguably the most important — and most overlooked — aspect of sports court construction. Poor drainage leads to standing water, surface damage, algae growth, and shortened surface life.</p>
<h2 id="slope">Slope Requirements</h2>
<p>Outdoor courts need a minimum slope of 1% (1 inch per 10 feet) in one direction for proper surface drainage. The slope should be consistent and imperceptible during play. Most courts use a side-to-side slope rather than end-to-end.</p>
<h2 id="subsurface">Subsurface Drainage</h2>
<p>French drains, perforated pipe systems, and gravel bases help manage groundwater. A proper drainage system adds $3,000–$10,000 to project costs but prevents far more expensive problems down the road.</p>
<h2 id="surface-drainage">Surface Drainage Options</h2>
<p><strong>Permeable surfaces:</strong> Modular tiles and permeable concrete allow water to pass through directly. Best for areas with well-draining soil.</p>
<p><strong>Channel drains:</strong> Linear drains at court edges collect runoff. Essential for impermeable surfaces like standard concrete and acrylic.</p>
<h2 id="common-mistakes">Common Drainage Mistakes</h2>
<ul>
<li>Insufficient base compaction leading to settling and low spots</li>
<li>No perimeter drainage, causing water to pool at court edges</li>
<li>Ignoring groundwater levels during site selection</li>
<li>Using non-draining materials in the base without proper slope</li>
</ul>
</article>`,
    category: 'Industry',
    tags: ['drainage', 'construction', 'installation', 'maintenance'],
    featured_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2025-12-25T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000011',
    title: 'The Rise of Pickleball: Why Courts Are in Demand Nationwide',
    slug: 'rise-of-pickleball-courts-demand',
    excerpt: 'Pickleball participation has exploded, driving unprecedented demand for dedicated courts. Explore the trends, demographics, and investment opportunities.',
    content: `<article>
<p>Pickleball has grown from a niche backyard game to a mainstream sport with over 48 million players in the United States. This explosive growth is creating massive demand for dedicated court construction and conversion projects.</p>
<h2 id="growth">Growth by the Numbers</h2>
<p>The Sport & Fitness Industry Association reports pickleball as the fastest-growing sport in America for three consecutive years. Participation grew 85% between 2022 and 2025. The average player is 38 years old — much younger than the sport's earlier demographic.</p>
<h2 id="demand">Court Demand Outpacing Supply</h2>
<p>The USA Pickleball Association estimates a shortage of over 20,000 courts nationwide. Municipalities, parks departments, HOAs, and private clubs are all scrambling to add capacity. Tennis court conversions are the fastest path — a single tennis court can become four pickleball courts.</p>
<h2 id="investment">Investment Opportunity</h2>
<p>Dedicated pickleball facilities are emerging as profitable businesses. A four-court indoor facility costs $500,000–$1,500,000 to build and can generate $200,000–$500,000 in annual revenue through memberships, court rentals, lessons, and events.</p>
<h2 id="contractors">What This Means for Contractors</h2>
<p>Sports surface contractors who add pickleball expertise are seeing 30–50% increases in project volume. The skills overlap significantly with tennis court construction, making it a natural expansion for existing contractors.</p>
</article>`,
    category: 'Pickleball',
    tags: ['pickleball', 'trends', 'growth', 'investment', 'demand'],
    featured_image: 'https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2025-12-22T10:00:00Z',
  },
  {
    id: 'b0000001-0000-0000-0000-000000000012',
    title: 'Resurfacing Your Sports Court: When, Why, and How Much',
    slug: 'resurfacing-sports-court-guide',
    excerpt: 'Learn when your sports court needs resurfacing, what the process involves, and how much it costs for different surface types.',
    content: `<article>
<p>Every sports surface has a limited lifespan before it needs resurfacing. Knowing when to resurface — and not waiting too long — saves money and prevents safety hazards.</p>
<h2 id="signs">Signs You Need Resurfacing</h2>
<ul>
<li>Visible cracks wider than 1/4 inch</li>
<li>Faded or peeling color coating</li>
<li>Rough or uneven texture</li>
<li>Standing water in new locations</li>
<li>Loss of traction or inconsistent ball bounce</li>
</ul>
<h2 id="timeline">Typical Resurfacing Timeline</h2>
<p><strong>Acrylic hard courts:</strong> Every 5–8 years ($4,000–$10,000)</p>
<p><strong>Asphalt courts:</strong> Every 3–5 years ($3,000–$8,000)</p>
<p><strong>Synthetic turf:</strong> Full replacement every 8–12 years ($200,000–$800,000 for fields)</p>
<p><strong>Running tracks:</strong> Top coat every 5–7 years ($50,000–$150,000), full resurfacing every 10–15 years</p>
<h2 id="process">The Resurfacing Process</h2>
<p>Professional resurfacing typically involves: pressure washing, crack repair and filling, leveling low spots, applying new acrylic coatings (3–5 layers), and restriping lines. The process takes 5–10 days depending on court size and weather conditions.</p>
<h2 id="diy-vs-pro">DIY vs. Professional</h2>
<p>While DIY resurfacing kits exist ($500–$1,500 for materials), professional installation is strongly recommended. Improper application leads to peeling, bubbling, and premature failure. The cost difference between DIY and professional is small compared to the risk of redoing the work.</p>
</article>`,
    category: 'Maintenance',
    tags: ['resurfacing', 'maintenance', 'cost guide', 'repair'],
    featured_image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&q=80',
    author: 'BestSportsSurfaces Team',
    published: true,
    published_at: '2025-12-20T10:00:00Z',
  },
];

async function seed() {
  console.log('Seeding blog posts...');

  const { data, error } = await supabase
    .from('blog_posts')
    .upsert(posts, { onConflict: 'id' });

  if (error) {
    console.error('Error seeding blog posts:', error.message);
    process.exit(1);
  }

  console.log(`Successfully seeded ${posts.length} blog posts!`);
}

seed();
