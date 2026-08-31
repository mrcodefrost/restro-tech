# PRD — Resolve (Franchise Complaint Tracking)

Third product built, per the confirmed build order. Traces to [`site.ts` — Resolve entry](../../src/core/site.ts#L964-L999). Depends on [prd-platform.md](prd-platform.md) (franchisor/franchisee membership model) and [architecture.md §9](architecture.md#9-analytics-strategy) (pattern reporting across outlets).

## Problem (from site copy)

> "A complaint that disappears into a chat thread never gets fixed." A guest complaint gets forwarded in a phone call or WhatsApp group and vanishes — no owner, no deadline, no record. The franchisor has no visibility into which outlets have a real, repeating problem versus a one-off.

## Users

- **Franchisor / brand manager** — logs or receives complaints, sees status and pattern reporting across every outlet.
- **Franchisee / outlet manager** — sees complaints against their outlet, owns resolution.
- Note: unlike Q and Feedbackly, **Resolve has no guest-facing surface at MVP** — the site copy frames this as an internal franchisor/franchisee accountability tool, not a guest complaint portal. A complaint is logged by staff (from a phone call, a walk-in comment, or manually transcribing a guest message), not submitted directly by the guest.

## Primary flow (must match `howItWorks` in site copy)

1. **Complaint logged** — against a specific outlet, with full context (category, description, who raised it, when).
2. **Routed to the right owner** — the responsible franchisee/outlet manager is notified (in-app + one WhatsApp/email nudge, not repeat spam) and accountable for resolution.
3. **Resolution tracked** — status visible to the franchisor throughout, not just reported after the fact — this "visible throughout" requirement is the core FAQ promise ("that visibility is the core of the product, complaints don't stay siloed with the franchisee") and must not be a franchisor-requests-a-report model.
4. **Pattern reporting** — leadership sees which outlets generate repeat complaints, sourced from `daily_outlet_metrics` per [data-model.md](data-model.md).

## Screens (MVP)

- **Log a complaint** (franchisor or outlet manager): outlet, category, description, guest contact if available (optional — this is an internal log, not requiring a guest to have engaged with any Restrovate surface).
- **Outlet complaint queue:** open/in-progress/resolved, owned by that outlet's manager.
- **Franchisor dashboard:** every complaint across every outlet, filterable by status/category/outlet, plus the pattern view (which outlets repeat) — the FAQ-promised differentiator versus "a generic support ticket tool."
- **Complaint detail:** full event history (`complaint_event`), status changes, notes.

## Edge cases

- **Complaint against an outlet with no assigned manager** (e.g. between staff transitions) — falls back to the brand manager/owner as default owner, never left unowned.
- **Franchisee disputes a complaint's validity** — MVP has no formal dispute workflow; a franchisee can add a note/status change explaining their side, visible to the franchisor, but there's no adjudication feature. Flag for later if real usage shows this is a frequent need.
- **Duplicate complaints about the same underlying issue** — no automatic deduplication at MVP; pattern reporting (repeat complaints per outlet) surfaces the signal at the aggregate level even without per-complaint dedup.
- **Sensitive complaint content** (e.g. involving a specific staff member) — visible per the standard role scope (franchisor sees everything, outlet manager sees their outlet); no additional confidentiality tier at MVP. Flag if a client raises this as a real need before building it speculatively.

## FAQs this must satisfy (from site copy)

- Franchisor sees every complaint across every outlet, not siloed with the franchisee — satisfied by the franchisor dashboard's default cross-outlet scope.
- Not a generic help-desk tool — satisfied by outlet-scoped ownership and franchise-specific pattern reporting being first-class, not a customization of a generic ticket schema.
- Standalone, cancel anytime — satisfied by [prd-platform.md §3](prd-platform.md#3-per-product-opt-in-and-cancellation).

## Explicitly out of scope for MVP

- Guest-facing complaint submission portal (this is an internal accountability tool per the site copy's framing; a guest-facing intake channel is a distinct future decision, not assumed here)
- SLA/deadline enforcement with automated escalation (the FAQ promises visible status, not an SLA engine — don't over-build ahead of what's marketed)
- Formal dispute/adjudication workflow between franchisor and franchisee
