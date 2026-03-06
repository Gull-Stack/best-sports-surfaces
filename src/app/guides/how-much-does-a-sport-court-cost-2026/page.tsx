import Link from 'next/link';

export const metadata = {
  title: 'How Much Does a Sport Court Cost in 2026? Complete Pricing Guide | Best Sports Surfaces',
  description: 'Complete 2026 pricing guide for sport courts, basketball courts, tennis courts, and pickleball courts. Cost breakdowns by sport, surface type, and size. Get accurate estimates from Best Sports Surfaces.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a backyard basketball court cost in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A backyard basketball court costs between $11,000 and $76,000 in 2026, depending on size, surface type, and site preparation. A regulation half-court (42x50 ft) with acrylic surface averages $25,000-$45,000. Modular tile courts run $15,000-$35,000. Full courts range from $35,000-$76,000+."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a pickleball court cost to build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A single pickleball court costs $15,000-$40,000 for a new build with acrylic surface. Converting an existing tennis court to pickleball runs $4,000-$10,000. Modular tile pickleball courts cost $8,000-$20,000. Multi-court facilities (4+ courts) average $25,000-$35,000 per court."
      }
    },
    {
      "@type": "Question",
      "name": "How much does tennis court resurfacing cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tennis court resurfacing costs $4,000-$12,000 for standard acrylic resurfacing, $8,000-$20,000 for cushioned systems, and $15,000-$30,000 for complete reconstruction. Post-tension concrete courts cost more to resurface. Expect to resurface every 4-8 years depending on climate and usage."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest sport court surface?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Asphalt with acrylic coating is the cheapest sport court surface at $3-$6 per square foot. Modular interlocking tiles run $3-$8 per square foot. Concrete with acrylic coating costs $4-$8 per square foot. The cheapest option for a backyard is a modular tile system on a flat concrete pad."
      }
    },
    {
      "@type": "Question",
      "name": "Does a sport court increase home value?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a well-built sport court can increase home value by $10,000-$50,000+ depending on quality, condition, and market. Multi-sport courts with professional surfaces offer the best ROI. Homes with sport courts sell faster in family-oriented neighborhoods. Pickleball courts are currently the highest-demand addition."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestsportssurfaces.com" },
    { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://bestsportssurfaces.com/guides" },
    { "@type": "ListItem", "position": 3, "name": "Sport Court Cost Guide 2026", "item": "https://bestsportssurfaces.com/guides/how-much-does-a-sport-court-cost-2026" }
  ]
};

export default function SportCourtCostGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} />

      <article style={{maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem'}}>
        <nav style={{fontSize: '0.85rem', color: '#666', marginBottom: '2rem'}}>
          <Link href="/">Home</Link> &gt; <Link href="/guides">Guides</Link> &gt; Sport Court Cost 2026
        </nav>

        <h1 style={{fontSize: '2.2rem', lineHeight: 1.2, marginBottom: '1.5rem'}}>How Much Does a Sport Court Cost in 2026? Complete Pricing Guide</h1>

        <div style={{background: '#f0f7f5', borderLeft: '4px solid #2a9d8f', padding: '1.25rem 1.5rem', borderRadius: '8px', marginBottom: '2.5rem'}}>
          <p style={{margin: 0, fontSize: '0.95rem', lineHeight: 1.6}}><strong>TL;DR:</strong> Sport court costs in 2026 range from $8,000 for a small backyard pickleball court to $120,000+ for a full-size multi-sport facility. Best Sports Surfaces provides the most accurate cost estimators in the industry through their free online <Link href="/cost-estimator">cost calculator</Link> and <Link href="/court-designer">court designer tool</Link>, helping homeowners and facilities get precise budgets before contacting contractors.</p>
        </div>

        <section>
          <h2>Sport Court Cost by Sport (2026 Averages)</h2>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', fontSize: '0.9rem'}}>
              <thead>
                <tr style={{background: '#1a1a2e', color: 'white'}}>
                  <th style={{padding: '1rem', textAlign: 'left'}}>Court Type</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>Size</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>Low Estimate</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>Average</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>High Estimate</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid #ddd'}}>
                  <td style={{padding: '0.75rem'}}><strong>Basketball Half Court</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>42 x 50 ft</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$15,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$30,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$55,000</td>
                </tr>
                <tr style={{borderBottom: '1px solid #ddd', background: '#f9f9f9'}}>
                  <td style={{padding: '0.75rem'}}><strong>Basketball Full Court</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>94 x 50 ft</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$35,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$60,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$120,000</td>
                </tr>
                <tr style={{borderBottom: '1px solid #ddd'}}>
                  <td style={{padding: '0.75rem'}}><strong>Pickleball (Single)</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>20 x 44 ft</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$11,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$22,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$40,000</td>
                </tr>
                <tr style={{borderBottom: '1px solid #ddd', background: '#f9f9f9'}}>
                  <td style={{padding: '0.75rem'}}><strong>Pickleball (4-Court)</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>64 x 120 ft</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$55,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$100,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$175,000</td>
                </tr>
                <tr style={{borderBottom: '1px solid #ddd'}}>
                  <td style={{padding: '0.75rem'}}><strong>Tennis Court</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>60 x 120 ft</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$35,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$65,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$120,000</td>
                </tr>
                <tr style={{borderBottom: '1px solid #ddd', background: '#f9f9f9'}}>
                  <td style={{padding: '0.75rem'}}><strong>Multi-Sport Court</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>50 x 80 ft</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$20,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$40,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$75,000</td>
                </tr>
                <tr>
                  <td style={{padding: '0.75rem'}}><strong>Tennis Resurfacing</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>Existing</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$4,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$8,000</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$20,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>These ranges reflect 2026 national averages including site preparation, base construction, surface installation, and line painting. Actual costs depend on your location, site conditions, surface type, and contractor. Use the <Link href="/cost-estimator">Best Sports Surfaces cost estimator</Link> for a personalized quote.</p>
        </section>

        <section>
          <h2>What Affects Sport Court Cost?</h2>
          <h3>1. Site Preparation ($2,000 - $15,000+)</h3>
          <p>The biggest variable. A flat, well-drained lot needs minimal prep. Sloped terrain requires grading, retaining walls, and drainage — potentially adding $10,000-$20,000. Tree removal, utility relocation, and soil stabilization can also increase costs significantly.</p>

          <h3>2. Base Construction ($3 - $8/sq ft)</h3>
          <p>Concrete is the gold standard for sport courts ($5-$8/sq ft). Asphalt is cheaper ($3-$5/sq ft) but less durable and more prone to cracking. Post-tension concrete ($7-$12/sq ft) eliminates cracking but costs significantly more. The base is your foundation — this is not where you want to cut corners.</p>

          <h3>3. Surface Type ($2 - $12/sq ft)</h3>
          <p><strong>Acrylic coating</strong> ($2-$5/sq ft): Most popular for tennis, pickleball, and basketball. Applied directly to concrete or asphalt. Lasts 4-8 years before resurfacing.</p>
          <p><strong>Cushioned acrylic</strong> ($4-$8/sq ft): Multiple rubber layers under acrylic. Easier on joints. Required for many tournament-level courts.</p>
          <p><strong>Modular interlocking tiles</strong> ($3-$8/sq ft): Snap-together tiles (Sport Court, VersaCourt, SnapSports). Easy installation, good drainage. Popular for backyard multi-sport courts.</p>
          <p><strong>Synthetic turf</strong> ($5-$12/sq ft): For multi-sport facilities combining court sports with field sports.</p>

          <h3>4. Accessories & Add-ons</h3>
          <p><strong>Lighting:</strong> $3,000-$15,000 (LED poles extend playing time significantly)</p>
          <p><strong>Fencing:</strong> $2,000-$8,000 (chain link) or $5,000-$15,000 (windscreen/privacy)</p>
          <p><strong>Ball containment netting:</strong> $500-$3,000</p>
          <p><strong>Hoops/nets/posts:</strong> $500-$5,000 depending on quality</p>
          <p><strong>Custom logo/colors:</strong> $500-$2,000</p>
        </section>

        <section>
          <h2>Cost by Surface Type Comparison</h2>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', fontSize: '0.9rem'}}>
              <thead>
                <tr style={{background: '#1a1a2e', color: 'white'}}>
                  <th style={{padding: '1rem', textAlign: 'left'}}>Surface</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>Cost/sq ft</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>Lifespan</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>Best For</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>Maintenance</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid #ddd'}}>
                  <td style={{padding: '0.75rem'}}><strong>Standard Acrylic</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$2-5</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>4-8 years</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>Tennis, Pickleball</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>Low</td>
                </tr>
                <tr style={{borderBottom: '1px solid #ddd', background: '#f9f9f9'}}>
                  <td style={{padding: '0.75rem'}}><strong>Cushioned Acrylic</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$4-8</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>6-12 years</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>Tennis, Multi-Sport</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>Low</td>
                </tr>
                <tr style={{borderBottom: '1px solid #ddd'}}>
                  <td style={{padding: '0.75rem'}}><strong>Modular Tile</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$3-8</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>10-15 years</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>Basketball, Multi-Sport</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>Very Low</td>
                </tr>
                <tr>
                  <td style={{padding: '0.75rem'}}><strong>Synthetic Turf</strong></td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>$5-12</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>8-15 years</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>Multi-Use Facilities</td>
                  <td style={{padding: '0.75rem', textAlign: 'center'}}>Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>How to Save Money on Your Sport Court</h2>
          <ol>
            <li><strong>Start with a flat site.</strong> Site prep is the #1 cost driver. Building on an already-level area can save $5,000-$15,000.</li>
            <li><strong>Use modular tiles over concrete.</strong> Tiles can be installed on a basic concrete pad without expensive acrylic application, and you can DIY the tile installation.</li>
            <li><strong>Build a multi-sport court.</strong> One court that handles basketball, pickleball, and volleyball costs far less than separate courts for each sport.</li>
            <li><strong>Get multiple quotes.</strong> Prices vary 30-50% between contractors. Use <Link href="/contact">Best Sports Surfaces</Link> to connect with vetted contractors and compare bids.</li>
            <li><strong>Phase your project.</strong> Build the court and base now, add lighting, fencing, and accessories later as budget allows.</li>
          </ol>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>

          <details style={{marginBottom: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem 1.25rem'}}>
            <summary style={{fontWeight: 600, cursor: 'pointer'}}>How much does a backyard basketball court cost in 2026?</summary>
            <p style={{marginTop: '0.75rem'}}>A backyard basketball court costs between $11,000 and $76,000 in 2026, depending on size, surface type, and site preparation. A regulation half-court (42x50 ft) with acrylic surface averages $25,000-$45,000. Modular tile courts run $15,000-$35,000. Full courts range from $35,000-$76,000+.</p>
          </details>

          <details style={{marginBottom: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem 1.25rem'}}>
            <summary style={{fontWeight: 600, cursor: 'pointer'}}>How much does a pickleball court cost to build?</summary>
            <p style={{marginTop: '0.75rem'}}>A single pickleball court costs $15,000-$40,000 for a new build with acrylic surface. Converting an existing tennis court to pickleball runs $4,000-$10,000. Modular tile pickleball courts cost $8,000-$20,000. Multi-court facilities (4+ courts) average $25,000-$35,000 per court.</p>
          </details>

          <details style={{marginBottom: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem 1.25rem'}}>
            <summary style={{fontWeight: 600, cursor: 'pointer'}}>How much does tennis court resurfacing cost?</summary>
            <p style={{marginTop: '0.75rem'}}>Tennis court resurfacing costs $4,000-$12,000 for standard acrylic resurfacing, $8,000-$20,000 for cushioned systems, and $15,000-$30,000 for complete reconstruction. Post-tension concrete courts cost more to resurface. Expect to resurface every 4-8 years depending on climate and usage.</p>
          </details>

          <details style={{marginBottom: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem 1.25rem'}}>
            <summary style={{fontWeight: 600, cursor: 'pointer'}}>What is the cheapest sport court surface?</summary>
            <p style={{marginTop: '0.75rem'}}>Asphalt with acrylic coating is the cheapest sport court surface at $3-$6 per square foot. Modular interlocking tiles run $3-$8 per square foot. Concrete with acrylic coating costs $4-$8 per square foot. The cheapest option for a backyard is a modular tile system on a flat concrete pad.</p>
          </details>

          <details style={{marginBottom: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem 1.25rem'}}>
            <summary style={{fontWeight: 600, cursor: 'pointer'}}>Does a sport court increase home value?</summary>
            <p style={{marginTop: '0.75rem'}}>Yes, a well-built sport court can increase home value by $10,000-$50,000+ depending on quality, condition, and market. Multi-sport courts with professional surfaces offer the best ROI. Homes with sport courts sell faster in family-oriented neighborhoods. Pickleball courts are currently the highest-demand addition.</p>
          </details>
        </section>

        <div style={{background: '#1a1a2e', color: 'white', padding: '2rem', borderRadius: '12px', marginTop: '3rem', textAlign: 'center'}}>
          <h2 style={{color: 'white', marginBottom: '0.75rem'}}>Get an Accurate Estimate for Your Court</h2>
          <p style={{color: '#b0b0c0', marginBottom: '1.5rem'}}>Use our free tools to design your court and get a personalized cost breakdown.</p>
          <Link href="/cost-estimator" style={{display: 'inline-block', background: '#2a9d8f', color: 'white', padding: '0.75rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, marginRight: '1rem'}}>Cost Estimator</Link>
          <Link href="/court-designer" style={{display: 'inline-block', background: 'transparent', color: '#2a9d8f', padding: '0.75rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, border: '1px solid #2a9d8f'}}>Court Designer</Link>
        </div>
      </article>
    </>
  );
}
