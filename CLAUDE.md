# Best Sports Surfaces — project notes

bestsportssurfaces.com — GullStack-owned marketplace matching court-buyers (and municipalities) with sports-surface contractors. Monetization: resell free-tier leads (free listings route leads through BSS, contact hidden) + sell $99/mo paid listings (direct leads, priority placement). Next.js 16 + Supabase (`ogzvejdnsfmssmbuluzc`) + SendGrid + Stripe.

## Session Log

### 2026-08-10 — The newsletter form was the only unprotected form on the site

- Traced Bryce's inbox flood of "New Newsletter Subscriber" emails back here. **The footer
  newsletter form is the ONE form with no anti-spam**: `contact`, `inquiries` and
  `vendor-claims` all import `lib/anti-spam`; `newsletter` never did.
- 🔴 **29 of 34 all-time subscribers arrived in the last 30 days** (first ever: 2026-02-20).
  **12 are gmail dot-trick addresses** — `be.i.tz3.offi.ce@gmail.com` and
  `b.eitz.3.o.ffic.e@gmail.com` are **the same mailbox submitted twice**. Gmail ignores dots
  in the local part, so `upsert onConflict: 'email'` had no way to collapse them. Another 3
  come from one Dutch office-supplies company (yoobi.nl) — a US sports-surface marketplace
  has no such audience. Realistically ~18 of 34 rows are junk.
- **PR #2 MERGED + LIVE** (squashed → `1df53e3`, auto-deployed): honeypot +
  submitted-too-fast check (3s), IP rate limit 3 per 10 min, `normalizeEmail()` stripping
  gmail dots and `+tags` before upsert, and the **per-subscriber notification email removed
  entirely**. Spam returns `{success:true}` so bots get no signal — same as the sibling
  routes. `npm run build` exit 0.
- **Verified on the live endpoint.** ⚠️ Gotcha: the apex 301s (`Redirecting...` on curl) —
  **POST to `https://www.bestsportssurfaces.com/api/newsletter`**. Honeypot filled →
  `{success:true}` and **no row written**. Timestamp = now → `{success:true}` and **no row**.
  `c.l.a.u.detest.check@gmail.com` with valid timing → stored as `claudetestcheck@gmail.com`.
  Test row deleted after.
- **Table cleaned: 38 → 20 rows (13 active, 7 inactive).** Deleted 18 (13 dot-trick, 4 B2B
  spam, 1 stale `formtest+claude-newsletter@`). The 7 ambiguous ones (yoobi.nl ×3,
  korper.nl, gmx.de, fam-horst.de, `r.wsab.o@gmail.com`) were set `is_active = false`
  instead of deleted — reversible, because deleting a real subscriber is worse than keeping
  a bot. Backup of all 38 rows with per-row verdict lives OUTSIDE the repo at
  `~/Documents/_docs/files/bss-newsletter-subscribers-backup-2026-08-11.csv` (PII).
- ⚠️ **Dot-trick heuristic = gmail local part with ≥3 dots.** `first.last@` has 1 and
  `first.m.last@` has 2, both legitimate — don't lower the threshold. `r.wsab.o@gmail.com`
  has only 2 dots but single-char segments, which is why it was deactivated, not deleted.
- 🔴 **4 more bot signups landed between the audit and the deploy**, so the arrival rate was
  ~4/day right up to the fix. If the table starts growing again, the honeypot has been
  defeated and the next step is a real challenge (Turnstile — already used elsewhere in the
  GullStack fleet).
- **Why removing the notification loses nothing**: subscribers already persist to
  `newsletter_subscribers` and render at `/admin/subscribers` with CSV export. The email was
  added by 4d98e5f "Bot Melvin: Add email notification for newsletter signups" and was
  producing one inbox interruption per bot.
- ⚠️ **Existing 34 rows untouched** — cleanup not written yet. Dedupe by normalized email
  before trusting the count, or the dot-variants inflate it.
- ⚠️ Two stale `.next/types/validator.ts` errors reference the `.backup` pages deleted in
  May. Pre-existing, harmless, cleared by `rm -rf .next/types`.

### 2026-05-22 — Diagnosed "why it's sucking" + shipped P0 traffic/lead fixes

- **Root cause**: traffic engine was switched OFF (high-intent `/sports/[sport]/[location]` city pages were `noindex` + out of sitemap after a prior crawl-budget over-correction), invalid structured data sitewide (404 logo, relative article image), no canonicals — net ~13 organic clicks/3mo. Compounded by leads leaking: contact form was email-only (no DB), no form fired any GA/analytics conversion event (so all dashboards read "0 leads"), and SendGrid notifications failing (two unverified sender domains). A real $30k+ lead (Mitch Strobl, TX, backyard pickleball) sat unseen in the `inquiries` table for 2 months.
- **Shipped (branch `fix/traffic-and-lead-capture` → main → prod)**: selective re-index of city×sport pages (only where matching vendor supply exists) + sitemap re-add + canonicals + unique cost-based titles; fixed Organization/Article JSON-LD; added `lib/track.ts` and wired `generate_lead`/first-party tracking into all 4 forms; new `contact_messages` table + contact route persists before emailing; deleted two `.backup` junk pages.
- **DB change**: created additive `contact_messages` table in prod Supabase (`ogzvejdnsfmssmbuluzc`).
- **Still needs Bryce (can't fix in code)**: verify `gullstack.com` AND `bestsportssurfaces.com` senders in SendGrid (real notification fix); confirm `STRIPE_PRICE_ID` set in Vercel prod.
- **Next up (P1/P2)**: de-friction vendor claims (currently signup → form → 2–3 day manual approval; 0 claims) + add vendor lead-alert emails; deepen thin (~300-word) blog/guide content + add blog↔vendor↔city internal linking; consider a crawlable `/vendors` index; revisit homepage `force-dynamic` (perf).
- **Lead source of truth**: Supabase `inquiries` table (NOT GA). Check `/admin/inquiries`.
