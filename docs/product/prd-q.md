# PRD — Q (Queue & Reservations)

First product built, per the confirmed build order. Traces to [`site.ts` — Q entry](../../src/core/site.ts#L847-L886). Depends on [prd-platform.md](prd-platform.md) (org/outlet, device pairing) and [architecture.md](architecture.md) (notifier, offline handling).

## Problem (from site copy, verbatim intent)

> "Guests who can't see the line, leave the line." During peak hours a guest sees a crowd, has no estimate, and walks to the next restaurant. A whiteboard/clipboard tells them nothing.

## Users

- **Guest** — no account, no app. Interacts only via WhatsApp and an optional web status link.
- **Host / staff** — uses the paired device at the host stand (see [prd-platform.md §4](prd-platform.md#4-device-pairing-host-stand)).
- **Outlet manager** — sees the outlet's live queue and historical throughput.
- **Brand manager** — sees queue metrics rolled up across outlets (feeds `daily_outlet_metrics`, see [data-model.md](data-model.md)).

## Primary flow (must match `howItWorks` in site copy exactly — this is the committed promise)

1. **Guest checks in** — host captures name + phone at the paired device. No other guest input required.
2. **WhatsApp confirmation** — guest receives queue number + estimated wait immediately.
3. **Table-ready alert** — guest receives a WhatsApp alert the moment their table is ready.
4. **Host dashboard** — staff see the live queue and adjust as tables turn over.

Confirmed message flow: **all 3 messages** (join confirmation, "you're next," table-ready) — see [cost-model.md](cost-model.md) for what this costs at scale; the flow itself is not being trimmed for MVP.

## Screens (MVP)

- **Host stand (device-mode PWA):** check-in form (name, phone, party size), live queue list with position/wait/status, seat/no-show actions, works offline per [architecture.md §7](architecture.md#7-offline-tolerance-at-the-outlet).
- **Guest status page** (`guest.restrovate.com/<org-slug>/queue/<entry-id>`): position, estimated wait, brand-themed. Linked from the WhatsApp confirmation, not a replacement for it — the guest still gets all 3 messages regardless of whether they open the link.
- **Outlet dashboard:** today's queue, average wait, no-show rate.
- **Brand dashboard:** cross-outlet queue throughput, rolled up nightly (see [data-model.md — daily_outlet_metrics](data-model.md#shared-used-by-more-than-one-product)).

## Wait-time estimation (MVP approach — explicitly simple, not ML)

Estimated wait = (guests ahead in queue) × (rolling average table-turnover time for that outlet, last 2 hours), recalculated on every queue state change per [architecture.md §6](architecture.md#6-job--scheduling-model). No seating-layout awareness, no table-size matching at MVP — the site's promise is "roughly how long," not a precise reservation system. Flag for later: if a client's table mix is highly variable (large parties vs. singles), this estimate will be noisy; revisit only if a pilot outlet's feedback shows it matters.

## Edge cases

- **No-show** — guest doesn't arrive after table-ready alert; outlet defines a grace period (default 10 min), then entry moves to `no_show` and the table is offered to the next guest. No penalty to the guest (no accounts to penalize).
- **Guest cancels** — a "cancel" link in the WhatsApp message (or told to the host) moves the entry to `cancelled`; does not count against wait-time averages.
- **Duplicate check-in** (same phone number joins twice) — surfaced to the host as a warning, not blocked outright (a guest may legitimately be re-joining after leaving).
- **Outlet goes offline mid-shift** — per [architecture.md §7](architecture.md#7-offline-tolerance-at-the-outlet), check-in/seat/no-show keep working locally; WhatsApp sends queue and flush on reconnect.
- **Wrong/invalid phone number entered** — WhatsApp send fails; host sees a delivery-failure indicator on that queue entry within the dashboard (sourced from the `message` ledger's delivery-status webhook) so they can re-confirm verbally.

## FAQs this must satisfy (from site copy — do not regress these answers)

- No app download required for the guest — satisfied by the WhatsApp-only guest flow.
- No new hardware at the host stand — satisfied by the device-mode PWA running on whatever the outlet already uses.
- Available standalone, cancel anytime — satisfied by [prd-platform.md §3](prd-platform.md#3-per-product-opt-in-and-cancellation).

## Explicitly out of scope for MVP

- Table/seating-layout management (this is a queue product, not a table-management system)
- Reservation booking ahead of arrival (site copy is about walk-in queue management; a "book ahead" feature is a distinct future product decision, not assumed here)
- SMS fallback if WhatsApp delivery fails (flag for a later phase if pilot data shows meaningful delivery failure rates)
