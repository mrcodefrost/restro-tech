# Data Model — Restrovate Software Suite

Schema for `packages/db` (Drizzle). See [architecture.md](architecture.md) for the tenancy and isolation rules this schema is built to satisfy — every table below carries the tenancy columns those rules require. Retention class refers to [architecture.md §10](architecture.md#10-retention--archival).

Convention: `id` is a UUID on every table; timestamps are `created_at`/`updated_at` unless noted; `org_id` always leads composite indexes.

## Platform

| Table | Purpose | Tenancy columns | Key indexes | Retention |
|---|---|---|---|---|
| `org` | A brand/tenant. Billing root. | — (is the tenant) | `slug` unique | Permanent |
| `outlet` | One physical location. | `org_id` | `(org_id, id)` | Permanent |
| `user` | A human who can log in. | — (joins orgs via `membership`) | `email` unique | Permanent |
| `membership` | User's role and outlet scope within an org. | `org_id` | `(org_id, user_id)` unique, `(user_id)` | Permanent |
| `device` | A host-stand tablet, PIN-unlocked, bound to one outlet. See [architecture.md §4](architecture.md#4-identity--sessions). | `org_id`, `outlet_id` | `(outlet_id)` | Permanent; PIN hash rotated, never logged |
| `subscription` | Which products an org has opted into, and billing status. | `org_id` | `(org_id)` | Permanent |
| `entitlement` | Per-product opt-in flag + activation date, so "cancel Loyalty, keep Q" is a row, not a re-provisioning. | `org_id` | `(org_id, product)` unique | Permanent |
| `branding` | Guest-surface theming: logo, accent color, display name, WABA routing choice. | `org_id` | `(org_id)` unique | Permanent |
| `pos_connection` | POS integration state per outlet. Zero rows at MVP — see [architecture.md §11](architecture.md#11-pos-integration-seam-designed-now-built-later). | `org_id`, `outlet_id` | `(outlet_id)` | Permanent |
| `audit_log` | Who changed what, for support and franchisor trust. | `org_id` | `(org_id, created_at)` | 24 months, then archive |

## Shared (used by more than one product)

| Table | Purpose | Tenancy columns | Key indexes | Retention |
|---|---|---|---|---|
| `guest` | A phone-number-keyed person, scoped per org (a guest is not shared across brands). | `org_id` | `(org_id, phone)` unique | Permanent (guest identity), see note below |
| `message_template` | Versioned, per-locale WhatsApp template text, one row per (product, event, locale). | — (shared registry, org-override optional) | `(product, event, locale, version)` | Permanent |
| `message` | The outbound-send ledger. System of record for delivery status *and* cost tracking. See [architecture.md §5](architecture.md#5-notification-layer). | `org_id`, `outlet_id` | `(org_id, created_at)`, `(idempotency_key)` unique | 12 months raw, then archive; cost aggregates roll into `daily_outlet_metrics` first |
| `job` | Worker job ledger (send retries, scheduled prompts, rollups), for idempotency and observability. | `org_id` nullable (some jobs are cross-tenant, e.g. nightly rollup) | `(status, run_at)` | 30 days |
| `daily_outlet_metrics` | Nightly rollup: message counts/cost, queue throughput, feedback sentiment, complaint counts, loyalty activity — one row per `(org_id, outlet_id, date)`. All dashboards read this, not raw tables. | `org_id`, `outlet_id` | `(org_id, outlet_id, date)` unique | Permanent |

*Guest retention note:* a guest's identity (phone number) is permanent while they remain a customer of that org, but is subject to deletion-on-request under applicable data protection rules; the schema keeps `guest` separate from `queue_entry`/`feedback_response`/etc. specifically so a deletion request can null out the identity link without destroying the aggregate historical counts those rollups depend on.

## Q (queue & reservations)

| Table | Purpose | Tenancy columns | Key indexes | Retention |
|---|---|---|---|---|
| `queue_entry` | One guest's place in one outlet's queue: name, phone (→ `guest`), party size, joined_at, status (`waiting`, `notified`, `seated`, `no_show`, `cancelled`), estimated_wait. | `org_id`, `outlet_id` | `(outlet_id, status, joined_at)` | 12 months raw, then archive |
| `queue_event` | Append-only state transitions on a `queue_entry` (join, notify, seat, no-show), source of wait-time recalculation and the offline-outbox reconciliation log. | `org_id`, `outlet_id` | `(queue_entry_id, created_at)`, client UUID unique per §7 offline handling | 12 months, then archive |

## Feedbackly

| Table | Purpose | Tenancy columns | Key indexes | Retention |
|---|---|---|---|---|
| `feedback_form` | A configurable question set per org (or per outlet, if a brand wants to vary it). | `org_id` | `(org_id)` | Permanent |
| `feedback_response` | One guest's submission: outlet, timestamp, overall sentiment score. | `org_id`, `outlet_id` | `(org_id, outlet_id, created_at)` | 24 months raw, then archive; sentiment rolls into `daily_outlet_metrics` |
| `response_answer` | Per-question answer within a response. | `org_id` (denormalized from parent for index locality) | `(feedback_response_id)` | Same as parent |

## Loyalty

| Table | Purpose | Tenancy columns | Key indexes | Retention |
|---|---|---|---|---|
| `loyalty_program` | Program config per org: earn rate, redemption rules. One program works across every outlet by design (see site copy: "no re-implementing loyalty per franchise partner"). | `org_id` | `(org_id)` | Permanent |
| `loyalty_account` | A guest's balance within an org's program. | `org_id` | `(org_id, guest_id)` unique | Permanent |
| `loyalty_transaction` | An earn or redeem event, tagged with its `TransactionSource` (`manual_staff_entry`, `guest_qr`, `pos_webhook` — see [architecture.md §11](architecture.md#11-pos-integration-seam-designed-now-built-later)). This is the table a future POS adapter writes into unchanged. | `org_id`, `outlet_id` | `(org_id, guest_id, created_at)` | 24 months, then archive; balances are the permanent aggregate |

## Resolve (franchise complaint tracking)

| Table | Purpose | Tenancy columns | Key indexes | Retention |
|---|---|---|---|---|
| `complaint` | One complaint against one outlet: category, description, status (`open`, `in_progress`, `resolved`), owner (franchisee/outlet manager), raised_by. | `org_id`, `outlet_id` | `(org_id, outlet_id, status)`, `(outlet_id, created_at)` for pattern reporting | 24 months open+resolved, then archive |
| `complaint_event` | Append-only status/ownership changes, visible to both franchisor and franchisee per the product's core promise. | `org_id` | `(complaint_id, created_at)` | Same as parent |

## Why rollups, not raw scans, for every dashboard

Feedbackly's per-outlet sentiment trend and Resolve's pattern-across-outlets reporting are the two heaviest read paths in the system, and both are explicitly promised in the marketed FAQs (`site.ts`). At 250 outlets, a "sentiment trend, last 90 days, every outlet" query against raw `feedback_response` would scan a growing table with no natural ceiling. Against `daily_outlet_metrics`, the same query touches at most `outlets × 90` rows — small and flat regardless of how much raw traffic the org generates. This is the mechanism, not just a stated intent, behind the "keeps a 250-outlet dashboard on a small Postgres instance" claim in [architecture.md §9](architecture.md#9-analytics-strategy).
