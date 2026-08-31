# PRD — Feedbackly (Feedback & Analytics)

Second product built, per the confirmed build order. Traces to [`site.ts` — Feedbackly entry](../../src/core/site.ts#L888-L925). Depends on [prd-platform.md](prd-platform.md) and [architecture.md §9](architecture.md#9-analytics-strategy) (rollup-based reporting is load-bearing for this product specifically).

## Problem (from site copy)

> "By the time you read the review, the guest is already gone." Aggregator reviews (Zomato/Google) are self-selected, public, and averaged brand-wide — one struggling outlet can hide behind a strong brand average, and leadership has no way to isolate which location is the problem.

## Users

- **Guest** — submits feedback, no account.
- **Outlet manager** — sees their outlet's sentiment and recent responses.
- **Brand manager / franchisor** — sees per-outlet comparison and trend, across the whole network. This cross-outlet comparison is the product's core differentiator per its FAQ ("Aggregator reviews are self-selected and public. This captures direct feedback per outlet and gives leadership a structured way to compare locations") and must not be an afterthought in the dashboard design.

## Primary flow (must match `howItWorks` in site copy)

1. **Feedback capture** — guest prompted at the right moment, in-store (QR at table/counter) or post-visit (WhatsApp prompt, scheduled per [architecture.md §6](architecture.md#6-job--scheduling-model)).
2. **Outlet-level tagging** — every response tied to a specific outlet, never averaged blind across the brand.
3. **Trend reporting** — sentiment trends per outlet, per region, and network-wide.
4. **Action tracking** — a repeat issue at one outlet surfaces in reporting before it becomes a public review.

## Screens (MVP)

- **Guest feedback form** (`guest.restrovate.com/<org-slug>/feedback`): short, mobile-first, a handful of questions (overall rating + 1-2 targeted questions per `feedback_form` config) plus free text. In-store QR code prints per outlet.
- **Outlet dashboard:** recent responses, this outlet's sentiment trend, flagged repeat themes.
- **Brand dashboard:** every outlet ranked/compared on sentiment (the FAQ-promised comparison), drill into any outlet's detail, filter by date range and region. Reads from `daily_outlet_metrics`, never raw responses, per [architecture.md §9](architecture.md#9-analytics-strategy).
- **Action tracking view:** responses below a configurable sentiment threshold surface as flagged items a manager can mark reviewed/resolved — this is the mechanism behind "action tracking" in the `howItWorks` copy; it is a lightweight status field on `feedback_response`, not a separate ticketing system (that's Resolve's job for franchise complaints specifically).

## Prompt timing and channel

- **In-store, QR-initiated** — no message cost at all (guest scans, fills form on their own phone). This is the cheapest channel and should be the default recommendation to clients, ahead of the WhatsApp-push variant.
- **Post-visit, WhatsApp-initiated** — one utility-template message with a link, scheduled N hours after a visit is marked complete (visit-complete signal comes from Q if the org also runs Q, or a manual "log a visit" action if not). Costs one message per prompt; see [cost-model.md](cost-model.md).
- Both channels write to the same `feedback_response` table; the dashboard doesn't distinguish channel in reporting, only in cost accounting via the `message` ledger for the WhatsApp-initiated path.

## Edge cases

- **Guest doesn't respond to the WhatsApp prompt** — no follow-up nag by default (avoids marketing-adjacent repeat-send cost and guest annoyance); a single prompt only at MVP.
- **Low response volume at a small outlet** — sentiment trend for a low-n outlet should visually indicate low confidence (e.g. "3 responses this month") rather than presenting a misleadingly precise average.
- **Feedback content requiring urgent action** (e.g. a food-safety complaint) — MVP has no automatic escalation; flag as a candidate for a future severity-detection rule once there's real response volume to calibrate against. Do not build a keyword-matching escalation without real data — false positives/negatives on something like food safety are worse than no automation.

## FAQs this must satisfy (from site copy)

- Differentiated from just reading aggregator reviews — satisfied by direct per-outlet capture and the brand comparison dashboard.
- New outlets addable without "starting over" — satisfied by outlets being first-class in the tenancy model already (no per-product special casing, see [data-model.md](data-model.md)).
- Standalone account, cancel anytime — satisfied by [prd-platform.md §3](prd-platform.md#3-per-product-opt-in-and-cancellation).

## Explicitly out of scope for MVP

- NLP-driven sentiment scoring from free text (MVP sentiment is guest-provided rating; free text is stored and readable by managers but not auto-scored — do not invent a sentiment model without a labeled dataset to validate it against)
- Automated response/reply-to-guest workflow
- Integration with public review platforms (this product's explicit differentiator is *not* being aggregator reviews)
