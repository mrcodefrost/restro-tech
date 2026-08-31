# Restrovate Software Suite — Product & Architecture Docs

This directory is the build spec for the four productised SaaS tools marketed on the public site: **Q** (queue & reservations), **Feedbackly** (feedback & analytics), **Loyalty**, and **Resolve** (franchise complaint tracking). None of the four exist as software yet — today they are copy in [`src/core/site.ts`](../../src/core/site.ts#L847-L1001) (`problem`, `overview`, `howItWorks`, `faqs` per product) and nothing else. This directory turns that copy into a buildable, cost-sane system.

**[`business-context.md`](../business-context.md) remains the source of truth for positioning.** Nothing here should contradict it. In particular, the same content guardrail applies to product docs as to site copy: **no invented metrics, no fabricated testimonials, no measured outcomes that don't exist yet.**

## Reading order

1. **[architecture.md](architecture.md)** — system design: topology, package layout, tenancy, identity, notifications, jobs, offline behavior, white-labeling, analytics, retention.
2. **[data-model.md](data-model.md)** — the schema, table by table, grouped platform → shared → per-product → rollups.
3. **[cost-model.md](cost-model.md)** — the unit economics. Read this before quoting a price to anyone. Messaging cost dwarfs infra cost; this is the document that makes that concrete.
4. **[prd-platform.md](prd-platform.md)** — cross-cutting requirements every product depends on (org/outlet onboarding, invites, device pairing, per-product opt-in/cancel, billing, branding).
5. **[prd-q.md](prd-q.md)**, **[prd-feedbackly.md](prd-feedbackly.md)**, **[prd-resolve.md](prd-resolve.md)**, **[prd-loyalty.md](prd-loyalty.md)** — one PRD per product, in build order.
6. **[roadmap.md](roadmap.md)** — phasing and exit criteria.

## Non-negotiable constraints carried through every doc

- **Static export stays static.** `restrovate.com` (this repo) never grows a server. The suite is a **separate application** (`app.restrovate.com`) in a separate repo. Nothing in this directory proposes changing `next.config.ts`'s `output: "export"`.
- **Cost discipline is a design input, not a later optimization.** The dominant cost is WhatsApp messaging, not hosting — see [cost-model.md](cost-model.md). Every architectural choice is evaluated against that first.
- **Flat, predictable per-outlet pricing.** Confirmed with the business owner: F&B clients want a fixed number, not usage-based billing. A minority of high-volume outlets may run at a loss on messaging cost, subsidized by the rest — a deliberate pooled-risk bet, revisited by raising the base price once the brand has leverage. No per-tenant quota throttles service. The only automated cap in the system is a circuit-breaker against bugs/abuse (see [architecture.md](architecture.md#5-notification-layer)), never against a legitimately busy outlet.
- **The site's product copy is the committed promise.** Each PRD traces back to the `problem` / `howItWorks` / `faqs` fields already live in [`site.ts`](../../src/core/site.ts#L847-L1001). Where a PRD can't deliver what the site claims, that's flagged, not silently dropped.
