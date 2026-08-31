# PRD — Loyalty

Fourth product built, per the confirmed build order — deliberately last because it's the most POS-entangled long-term, even though MVP itself has no POS dependency. Traces to [`site.ts` — Loyalty entry](../../src/core/site.ts#L927-L962). Depends on [prd-platform.md](prd-platform.md) and the POS seam in [architecture.md §11](architecture.md#11-pos-integration-seam-designed-now-built-later) — **read that section before this one**, it defines the accrual abstraction this PRD's MVP is built against.

## Problem (from site copy)

> "A first-time guest has no reason to become a regular." Most loyalty tools are single-restaurant, then bolted onto a franchise network outlet by outlet. Every visit resets to zero without a structured rewards system.

## Confirmed MVP boundary

**Standalone, no POS dependency at MVP** — confirmed explicitly with the business owner. Points accrue from a staff-entered bill amount at checkout, or a guest-scanned QR, not automatically from the POS. This trades a manual step at the counter for shipping without gating on Petpooja/Restroworks API access or per-client POS contracts. The architecture keeps this from being a dead end: every accrual, manual or future-automated, is modeled as the same `TransactionEvent` shape feeding the same accrual service (see [architecture.md §11](architecture.md#11-pos-integration-seam-designed-now-built-later)), so a POS adapter built later plugs into already-proven logic instead of requiring new accrual/redemption rules to be designed and tested at the same time as the integration itself.

## Users

- **Guest** — enrolls, earns, redeems. No app; WhatsApp + optionally a web balance-check link.
- **Staff** — enters bill amount at checkout (manual path) or scans a guest's redemption code.
- **Brand manager** — configures the one program that runs across every outlet (the product's explicit differentiator: "no re-implementing loyalty per franchise partner"), sees network-wide loyalty activity.

## Primary flow (must match `howItWorks` in site copy)

1. **Guest enrollment** — joins once (name + phone at checkout, or scans a table QR), and rewards carry across every outlet in the network from that point — this cross-outlet consistency is the FAQ-promised core: *"a guest's rewards work the same regardless of who operates the outlet."*
2. **Earn and redeem** — MVP earn path: staff enters the bill amount at checkout, program's earn rate converts it to points, guest gets a WhatsApp confirmation. Redeem path: guest tells staff they want to redeem, staff enters the redemption in the same interface, points deduct, guest gets confirmation.
3. **Franchise-wide reporting** — brand manager sees loyalty activity across the whole network, not siloed per outlet, rolled up per [data-model.md](data-model.md).

## Screens (MVP)

- **Guest enrollment** (staff-assisted at checkout, or self-serve via QR + WhatsApp number entry): name + phone, program terms shown once.
- **Staff accrual/redemption entry** (part of the same device-mode surface used for Q where applicable, or a simple manager-login screen for outlets not running Q): enter bill amount → points preview → confirm; or enter/scan a redemption → points deducted → confirm.
- **Guest balance check** (`guest.restrovate.com/<org-slug>/loyalty/<account-id>` linked from WhatsApp): current points, what they're worth, brand-themed.
- **Brand dashboard:** enrollment growth, points issued/redeemed, active-guest counts, all network-wide by default (not per-outlet-first) since the product's value proposition is the cross-outlet consistency itself.

## Edge cases

- **Guest enrolls at outlet A, redeems at outlet B** — must work identically per the FAQ promise; this is a correctness requirement on the schema (accounts are `org`-scoped, not `outlet`-scoped, per [data-model.md](data-model.md)), not an edge case to special-case in code.
- **Staff enters wrong bill amount** — accrual entries need a correction path (a manager can reverse/adjust a `loyalty_transaction`, itself logged as its own transaction for audit, not a silent edit).
- **Guest loses phone / changes number** — enrollment is phone-keyed via `guest`; a manager-assisted "merge/re-link" flow is needed for a guest to recover their balance under a new number. MVP: manual support-assisted merge is acceptable; no self-serve recovery flow required yet.
- **Program change (earn rate adjustment) mid-cycle** — new rate applies to transactions going forward only; historical `loyalty_transaction` rows keep whatever rate was in effect at the time (never recompute history).

## FAQs this must satisfy (from site copy)

- Works identically for company-owned and franchised outlets — satisfied by the org-scoped (not outlet-scoped) account model.
- Not locked to a specific POS vendor's loyalty module — satisfied by the MVP's POS-independence being the actual design, not a talking point.
- Standalone, cancel anytime — satisfied by [prd-platform.md §3](prd-platform.md#3-per-product-opt-in-and-cancellation).

## Explicitly out of scope for MVP

- Automatic POS-driven accrual (the confirmed MVP boundary above; scoped as its own roadmap phase, see [roadmap.md](roadmap.md))
- Tiered/gamified loyalty levels (site copy describes simple point accrual/redemption, not a tier system — don't build ahead of what's marketed)
- Guest self-service redemption without staff involvement (redemption is staff-mediated at MVP to avoid building a guest-facing payment/redemption-fraud surface prematurely)
