# Roadmap — Restrovate Software Suite

Phasing per the confirmed build order: platform first, then Q, then Feedbackly, then Resolve, then Loyalty, with POS integration as a later phase built against Loyalty's already-proven manual-entry logic. Each phase's exit criterion is real usage, not a feature checklist — a phase isn't "done" because the code merged, it's done when it's carrying a real outlet's traffic.

## Phase 0 — Platform

**Scope:** everything in [prd-platform.md](prd-platform.md) — org/outlet model, membership + invites, device pairing, per-product entitlement/cancellation, manual/invoiced billing, branding. Plus the foundational architecture pieces every product depends on: tenancy isolation in `packages/core`, the `Notifier` interface with one BSP adapter, the worker process, and the nightly rollup job (even with only test data to roll up initially).

**Exit criterion:** a real org (start with the smallest willing pilot client) has its outlets, users, and branding set up in the system, with no product yet turned on. Cross-tenant isolation tests pass for every repository (see [architecture.md §3](architecture.md#3-tenancy-model)).

## Phase 1 — Q, to one live outlet

**Scope:** [prd-q.md](prd-q.md) in full — host-stand device mode, offline outbox, 3-message WhatsApp flow, wait-time recalculation, guest status page, outlet + brand dashboards.

**Exit criterion:** one real outlet runs a full peak-hour shift on Q instead of a whiteboard, with WhatsApp delivery, offline recovery, and wait-time estimates all observed working under real guest traffic — not just a staged demo. Re-run [cost-model.md](cost-model.md)'s sensitivity table against this outlet's actual observed volume before onboarding the next outlet, since the whole pricing bet depends on real numbers replacing the placeholder ones in that document.

## Phase 2 — Feedbackly

**Scope:** [prd-feedbackly.md](prd-feedbackly.md) — in-store QR capture (cheapest channel, default recommendation), WhatsApp post-visit prompt, outlet + brand-comparison dashboards on rollups.

**Exit criterion:** at least one multi-outlet client (ideally the Phase 1 pilot, expanded, or a second design partner) is comparing sentiment across two or more of their own outlets in the brand dashboard — the cross-outlet comparison is the product's differentiator per its FAQ, so the exit bar is that comparison being used, not just responses being collected.

## Phase 3 — Resolve

**Scope:** [prd-resolve.md](prd-resolve.md) — complaint logging, franchisor/franchisee visibility, pattern reporting. No guest-facing surface needed, which should make this the fastest phase to build.

**Exit criterion:** a franchisor is tracking a real complaint end to end (logged → routed → resolved) with the franchisee seeing the same status the franchisor sees, replacing an actual prior WhatsApp-group-and-phone-call habit at a real client.

## Phase 4 — Loyalty (standalone, no POS)

**Scope:** [prd-loyalty.md](prd-loyalty.md) — manual staff-entry and guest-QR accrual, org-scoped (cross-outlet) accounts, redemption, brand-wide reporting. Built against the `TransactionEvent` abstraction from [architecture.md §11](architecture.md#11-pos-integration-seam-designed-now-built-later) from day one, even though no POS adapter exists yet.

**Exit criterion:** a guest enrolls at one outlet of a multi-outlet client and successfully redeems at a different outlet of the same brand — proving the cross-outlet consistency that's this product's entire differentiator, under real (not staged) conditions.

## Phase 5 — First POS adapter

**Scope:** one real `PosAdapter` implementation (Petpooja or Restroworks, whichever an existing client actually runs — see [business-context.md](../business-context.md) for the real client portfolio), feeding the same `loyalty_transaction`/accrual path Phase 4 already proved in production. This phase is explicitly **not** started before Phase 4 ships to a real client — building POS integration and accrual/redemption logic simultaneously is the complexity the MVP boundary in [prd-loyalty.md](prd-loyalty.md) was chosen to avoid.

**Exit criterion:** a real outlet's Loyalty accrual happens automatically from a POS transaction, with zero change to the accrual/redemption/reporting logic built in Phase 4 — this is the check that the seam designed in [architecture.md §11](architecture.md#11-pos-integration-seam-designed-now-built-later) actually paid off.

## Ongoing, not phase-gated

- **Re-run [cost-model.md](cost-model.md)** whenever: Meta publishes its post-October-2026 rate card, a new pilot outlet's real volume comes in, or the blended margin looks unfavorable — this is a living document, not a one-time exercise.
- **Re-check every PRD's FAQ-traceability** whenever site copy in [`site.ts`](../../src/core/site.ts) changes for these four products, and vice versa — a scope change on either side should update the other, not silently drift apart.
