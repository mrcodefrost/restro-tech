# Cost Model — Restrovate Software Suite

Read this before quoting a price. **WhatsApp messaging cost, not infrastructure, is what can blow up the bill.** This document makes that concrete, then makes explicit the pricing bet the business owner has chosen: flat, predictable per-outlet pricing with pooled risk, rather than usage-based billing.

## The rate-card fact this whole model depends on

Meta closes the **free 24-hour customer-service window on 1 October 2026.** Utility templates sent inside that window have been free since July 2025; from that date, they and free-form "service messages" are billed at the country's utility rate. Meta committed to publishing exact per-market rates by 1 September 2026. This model must be **treated as a spreadsheet with rates as inputs**, re-run once those rates publish — not rewritten. Do not build any part of the product around the assumption that in-window replies are free.

Sources: [MyOperator, WhatsApp Business API Pricing in India 2026](https://myoperator.com/blog/whatsapp-business-api-pricing-india-2026) · [Blueticks, WhatsApp Business API Pricing 2026](https://blueticks.co/blog/whatsapp-business-api-pricing-2026) · [ChakraHQ, Service Message Pricing Update Oct 2026](https://chakrahq.com/article/whatsapp-api-pricing-update-service-messages-october-2026/)

**Working India rates used below (verify against Meta's September 2026 rate card before finalizing pricing):**

| Category | Meta rate | Typical BSP-marked-up rate |
|---|---|---|
| Utility / authentication | ≈ ₹0.115 | ≈ ₹0.145 |
| Marketing | ≈ ₹0.86 | ≈ ₹1.09 |

Q and Feedbackly's guest messages are utility-category (transactional: queue status, table-ready, feedback prompt) — they should never be sent as marketing-template messages, both for cost and for Meta's opt-out/quality rules.

## Message count per guest, by product

| Product | Flow | Messages/guest |
|---|---|---|
| Q | Join confirmation → "you're next" → table-ready (full flow as marketed) | 3 |
| Feedbackly | Post-visit feedback prompt (+ optional thank-you) | 1–2 |
| Loyalty | Enrollment confirmation, occasional balance/reward nudges | 1 per accrual event, more variable |
| Resolve | Not guest-facing; internal notifications to franchisee/manager only, far lower volume | negligible vs. the above |

## Sensitivity table — monthly WhatsApp cost, Q only (the dominant line item)

At the confirmed **full 3-message flow**, BSP rate ₹0.145/message:

| Outlets | Guests/outlet/day | Messages/month | Monthly Meta+BSP cost | Monthly infra cost (from [architecture.md](architecture.md#1-topology)) | Messaging : infra ratio |
|---|---|---|---|---|---|
| 30 (pilot) | 50 | 135,000 | ≈ ₹19,600 (~$230) | ~$30 | ~7:1 |
| 250 (growth) | 80 | 1,800,000 | ≈ ₹2.6L (~$3,100) | ~$110 | ~28:1 |
| 250, one busy chain at 150/day | — | 3,375,000 | ≈ ₹4.9L (~$5,800) | ~$110 | ~52:1 |
| 1,000 (scale) | 80 | 7,200,000 | ≈ ₹10.4L (~$12,500) | ~$450 | ~28:1 |

**Reading this table:** at every scale point, messaging cost is one to two orders of magnitude larger than infrastructure. Server sizing decisions are a rounding error next to messaging volume decisions. This is why [architecture.md](architecture.md) treats the `Notifier` layer, idempotency, and the anomaly circuit-breaker as the load-bearing cost controls — not instance sizing.

## The pricing decision: flat price, pooled risk

Confirmed with the business owner and deliberately chosen over usage-based billing: **F&B operators want a predictable number, not a SaaS-style metered bill.** The model:

- Every outlet on a product pays the same flat monthly price for that product, regardless of its actual queue volume.
- **A minority of high-volume outlets will run at a messaging-cost loss** relative to their own subscription fee — the busy-chain row above is the shape of that case. This is accepted, not a defect.
- The majority of outlets, running below-average volume, generate margin that subsidizes that minority. The bet is that the blend is profitable, not that every individual outlet is.
- **No per-tenant quota throttles service.** The only automated safeguard is the anomaly circuit-breaker described in [architecture.md §5](architecture.md#5-notification-layer), which triggers only on volume wildly outside an org's own historical pattern (bug or abuse), never on a legitimately busy outlet.
- The lever for correcting an unfavorable blend is **raising the base price for all customers**, once the brand has enough market leverage to do so without churn — not retroactively metering existing customers.

### Worked blended-margin example (illustrative, not a quote)

Assume a hypothetical flat price of **₹2,500/outlet/month for Q**, and the growth-scale distribution above (250 outlets, mixed volume, one outlier chain):

| Segment | Outlets | Avg messaging cost/outlet/month | Margin/outlet before other costs |
|---|---|---|---|
| Typical (50/day) | ~220 | ≈ ₹653 | ≈ ₹1,847 positive |
| Busy (150/day) | ~30 (one chain) | ≈ ₹1,958 | ≈ ₹542 positive, but thin |
| **Blended average** | 250 | ≈ ₹778 | ≈ ₹1,722 positive per outlet before hosting, support, and dev cost amortization |

This table is a **template to re-run with real Meta rates and a real proposed price**, not a finished number — the ₹2,500 figure is a placeholder for illustrating the method. Before quoting any client, rerun this with: (a) September 2026's published rate card, (b) the actual proposed price, and (c) actual observed volume once the pilot outlets are live.

## Cost levers available if the blend runs unfavorable

In priority order, cheapest-to-implement first:

1. **Pooled WABA volume tiers** — Meta's utility rates step down at higher monthly volume per WABA. Routing all tenants through one Restrovate WABA by default (already the chosen design, see [architecture.md §8](architecture.md#8-white-label-guest-surfaces)) reaches those tiers faster than each brand billing separately would.
2. **Message deduplication and batching** — collapse duplicate table-ready sends from retry races, suppress a redundant prompt if a guest already responded. Built into the `message` ledger's idempotency keys from day one (see [architecture.md §5](architecture.md#5-notification-layer)), so this is largely already covered by the base design rather than a later feature.
3. **Trimming the flow, as an opt-in tier only** — dropping the "you're next" nudge in favor of the guest checking a live status page cuts ~33% off Q's message count. Not applied by default (full 3-message flow was confirmed as the marketed experience), but available as a cost lever for a future lower-priced tier without changing the underlying architecture.
4. **Base price increase** — the explicitly agreed long-run correction mechanism once the brand has pricing power.

## What this document is not

It is not a finished price sheet, and it should not be quoted from directly. It is the model to re-run — with real rates, real proposed prices, and real observed pilot volume — before the base per-outlet price is finalized.
