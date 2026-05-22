# Best Sports Surfaces — project notes

bestsportssurfaces.com — GullStack-owned marketplace matching court-buyers (and municipalities) with sports-surface contractors. Monetization: resell free-tier leads (free listings route leads through BSS, contact hidden) + sell $99/mo paid listings (direct leads, priority placement). Next.js 16 + Supabase (`ogzvejdnsfmssmbuluzc`) + SendGrid + Stripe.

## Session Log

### 2026-05-22 — Diagnosed "why it's sucking" + shipped P0 traffic/lead fixes

- **Root cause**: traffic engine was switched OFF (high-intent `/sports/[sport]/[location]` city pages were `noindex` + out of sitemap after a prior crawl-budget over-correction), invalid structured data sitewide (404 logo, relative article image), no canonicals — net ~13 organic clicks/3mo. Compounded by leads leaking: contact form was email-only (no DB), no form fired any GA/analytics conversion event (so all dashboards read "0 leads"), and SendGrid notifications failing (two unverified sender domains). A real $30k+ lead (Mitch Strobl, TX, backyard pickleball) sat unseen in the `inquiries` table for 2 months.
- **Shipped (branch `fix/traffic-and-lead-capture` → main → prod)**: selective re-index of city×sport pages (only where matching vendor supply exists) + sitemap re-add + canonicals + unique cost-based titles; fixed Organization/Article JSON-LD; added `lib/track.ts` and wired `generate_lead`/first-party tracking into all 4 forms; new `contact_messages` table + contact route persists before emailing; deleted two `.backup` junk pages.
- **DB change**: created additive `contact_messages` table in prod Supabase (`ogzvejdnsfmssmbuluzc`).
- **Still needs Bryce (can't fix in code)**: verify `gullstack.com` AND `bestsportssurfaces.com` senders in SendGrid (real notification fix); confirm `STRIPE_PRICE_ID` set in Vercel prod.
- **Next up (P1/P2)**: de-friction vendor claims (currently signup → form → 2–3 day manual approval; 0 claims) + add vendor lead-alert emails; deepen thin (~300-word) blog/guide content + add blog↔vendor↔city internal linking; consider a crawlable `/vendors` index; revisit homepage `force-dynamic` (perf).
- **Lead source of truth**: Supabase `inquiries` table (NOT GA). Check `/admin/inquiries`.
