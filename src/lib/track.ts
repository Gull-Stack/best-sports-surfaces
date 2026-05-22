// Client-side lead conversion tracking.
//
// Fires BOTH a GA4 event and a first-party analytics_events row on every lead
// form success. Before this existed, no form fired any conversion event, so
// GA4's "Generate leads" report and the custom analytics table both read 0 —
// hiding real inquiries (a $30k+ lead sat unseen for 2 months because of this).

type LeadEvent = 'contact' | 'inquiry' | 'newsletter' | 'vendor_claim';

const GA_EVENT: Record<LeadEvent, string> = {
  contact: 'generate_lead',
  inquiry: 'generate_lead',
  newsletter: 'sign_up',
  vendor_claim: 'generate_lead',
};

export function trackLead(event: LeadEvent, metadata: Record<string, unknown> = {}) {
  try {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.('event', GA_EVENT[event], { lead_type: event, ...metadata });
  } catch {
    /* gtag not loaded — ignore */
  }
  // First-party record. Fire-and-forget so it never blocks the success UI.
  fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event_type: event, metadata }),
  }).catch(() => {});
}
