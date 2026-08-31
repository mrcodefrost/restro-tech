# System Architecture — Restrovate Software Suite

See [README.md](README.md) for scope and non-negotiables. This document assumes the decisions already locked with the business owner: separate repo, Next.js + Postgres + Drizzle with domain logic isolated in `packages/core`, a pooled Restrovate WhatsApp Business Account (WABA) by default, flat per-outlet pricing, and design for ~250 outlets without foreclosing 1,000+.

## 1. Topology

One application, one worker, one database, one cache — not four microservices for four products. The products share tenancy, auth, notifications, and billing; splitting them into separate services would multiply hosting cost for no benefit at this scale.

```
                    ┌─────────────────────┐
  Guests (WhatsApp) │   apps/suite         │
  Staff (browser)   │   (Next.js)          │──────► Postgres (primary)
  Host tablet (PWA)─►│   - dashboard         │
                    │   - guest surfaces    │──────► Redis (queue + cache)
                    │   - /api/v1           │
                    └──────────┬───────────┘
                               │ enqueues jobs
                               ▼
                    ┌─────────────────────┐
                    │   apps/worker        │──────► WhatsApp provider
                    │   (long-running)      │        (BSP now, Cloud API later)
                    │   - send/retry        │
                    │   - wait-time recalc  │
                    │   - scheduled prompts │
                    │   - nightly rollups   │
                    └─────────────────────┘
```

**Why a long-running worker, not serverless functions, for jobs.** Message send-with-retry, wait-time recalculation, and scheduled feedback prompts are exactly the workload serverless platforms make expensive or awkward: they need to run on a schedule independent of a request, retry with backoff, and not incur a per-invocation charge for a queue that might sit mostly idle. A single small worker process (e.g. a 1 vCPU / 1GB box) handles all of this at a fixed monthly cost regardless of invocation count, which is the point — predictable cost was the explicit ask.

**Sizing / cost by scale** (infra only — see [cost-model.md](cost-model.md) for messaging cost, which dominates):

| Scale | App | Worker | Postgres | Redis | Approx. monthly infra |
|---|---|---|---|---|---|
| Pilot (≤30 outlets) | 1 small instance | 1 small instance | Managed, smallest tier | Smallest managed tier | ~$25–40 |
| Growth (~250 outlets) | 1–2 instances, vertical scale first | 1 instance, vertical scale | Managed, mid tier, read replica optional | Mid tier | ~$80–150 |
| Scale (1,000+ outlets) | Horizontal scale, 2–4 instances | 2 workers, partitioned by tenant shard | Managed, larger tier, read replica + partitioned event tables | Managed, larger tier | ~$300–600 |

At no point in this table does the system move to AWS's metered-everything model (Lambda-per-invocation, DynamoDB-per-request-unit, etc.). Hosting is deliberately chosen from fixed-price platforms (Railway, Fly.io, Hetzner, or equivalent) plus a managed Postgres provider (Neon, Supabase, or RDS reserved-instance if AWS is ever required) — the through-line is **the bill is a known number before the month starts**, which is what "not exploding" means in practice.

## 2. Package layout

```
apps/
  suite/         # Next.js app: dashboard, guest surfaces, /api/v1 route handlers
  worker/         # long-running Node process, imports packages/core + packages/db
packages/
  core/           # domain services, repositories, business rules — zero framework imports
  db/             # Drizzle schema + migrations, one schema shared by suite and worker
  notifier/       # Notifier interface + provider adapters (BSP, Meta Cloud API)
  ui/             # shared components, seeded from ../design.md tokens
```

**The rule that keeps this cheap to extract later:** route handlers and server actions in `apps/suite` are thin — they parse input, call a function in `packages/core`, and shape the response. No business rule, no tenant-scoping logic, no message-template decision lives in the app layer. If a native mobile app or a POS partner integration is ever built, it talks to the same `/api/v1` the web dashboard talks to; if a standalone API service is ever split out (the "C" option considered and deferred), it imports `packages/core` unchanged and the split is a deployment change, not a rewrite.

`packages/core` structure mirrors the products: `platform/` (org, outlet, membership, device, billing), `queue/`, `feedback/`, `loyalty/`, `complaints/`, each exposing repository + service pairs that take a `TenantContext` (see §3) as their first argument.

## 3. Tenancy model

- **`org`** — a brand (Chai Churi, Sardaar Ji, etc.). The billing entity and the top of the tenancy tree.
- **`outlet`** — one physical location, belongs to exactly one `org`.
- Every product table carries `org_id`; tables scoped to a location also carry `outlet_id`. Composite indexes always lead with `org_id` so a query is never a full-table scan across tenants.
- **Isolation is enforced in the repository layer, not via Postgres RLS.** Every repository method in `packages/core` requires a `TenantContext { orgId, outletIds, role }` as its first parameter and refuses to build a query without one. This was chosen over RLS deliberately: RLS policies are an audit surface that's easy to get subtly wrong (see the Supabase-first option considered and rejected in favor of this approach), and a typed, testable repository layer catches a missing tenant filter at compile/test time rather than relying on a database policy no application code path can see. `packages/core`'s test suite includes a cross-tenant leak test for every repository: fetch as org A, assert org B's rows are never returned.
- **Franchisees are outlet-scoped members of the franchisor's org**, not separate tenants. This matches the real model (Sardaar Ji, Chai Churi) where the franchisor needs visibility across every outlet and cross-outlet reporting (Feedbackly, Resolve) is a first-class need — a separate-tenant-per-franchisee model would make that reporting a cross-tenant query, which is exactly what the isolation layer is built to prevent.

## 4. Identity & sessions

Two session kinds, because the two jobs are different:

**Human sessions** — email-invited users. `user` ↔ `org` via `membership(role, outlet_scope)`. Roles: `owner`, `brand_manager` (all outlets), `outlet_manager` (one or more named outlets), `staff` (one outlet, narrow permissions). Standard session cookie, invite-by-email flow.

**Device sessions** — the host-stand tablet running Q doesn't have a person logging in every shift; it's a fixture at the counter. A `device` record is bound to one `outlet_id` at pairing time (an owner/manager pairs it once via a short-lived code), then unlocked shift-to-shift by a rotating 4-digit PIN rather than a personal login. Device sessions carry a **deliberately narrow permission set** — queue check-in, mark-ready, mark-seated — and cannot read Feedbackly/Loyalty/Resolve data or other outlets' data, even though they're technically part of the same org. This limits blast radius if a tablet is lost or a PIN leaks.

## 5. Notification layer

This is the layer the cost model (see [cost-model.md](cost-model.md)) lives or dies on, so it's designed for auditability first.

- **`Notifier` interface** in `packages/notifier`: `send(orgId, guestId, template, variables) -> messageId`. `packages/core` never talks to a WhatsApp SDK directly.
- **Two adapters**: a BSP adapter (AiSensy/Interakt/Gupshup-style, faster to onboard, used at launch) and a Meta Cloud API adapter (direct, better long-run economics once volume justifies owning the WABA relationship). Swapping is a config change, not a code change, because both implement the same interface.
- **`message` table is the single ledger** — every outbound send is a row, before it's confirmed sent: `id, org_id, outlet_id, guest_id, template, status, provider_message_id, cost_estimate, idempotency_key, created_at, delivered_at`. This table is simultaneously the audit trail, the delivery-status source for support, and the input to the cost model's actuals.
- **Idempotency keys** on every send (e.g. `queue_entry_id:event_type`) so a retry after a timeout can never double-send and double-charge — the single most important correctness property given messages cost real money per send.
- **Template registry** — one row per (product, event, locale), versioned, so a wording change doesn't require redeploying the app, and so Meta's per-template approval status is tracked in one place.
- **Delivery-status webhook** from the provider updates `message.status`; failures feed the retry job in the worker.
- **Circuit-breaker, narrowly scoped.** Per the business decision on pricing (flat price, pooled risk, no usage throttling — see [README.md](README.md)), this is **not** a spend cap on a legitimately busy outlet. It is an anomaly detector: if a single `org` or `outlet` sends at a rate wildly outside its own historical baseline (e.g. 10x the trailing-7-day p95) in a short window, sends pause and an alert fires for human review. This exists to catch bugs (a retry loop, a bad migration replaying old queue entries) and abuse (a scraped or invalid phone list being spammed), not to throttle a chain that's simply busy. A busy chain is the upside case this pricing model is built to absorb.

## 6. Job & scheduling model

The worker owns everything that isn't a direct response to a request:

- **Wait-time recalculation** — recomputed on every queue state change (join, seat, no-show), not polled, to keep WhatsApp status-page reads cheap and accurate.
- **Message send/retry** — backoff schedule (e.g. 30s, 2m, 10m, then dead-letter to a `failed_messages` view for support).
- **Scheduled feedback prompts** — Feedbackly's post-visit prompt fires N hours after a visit is marked complete.
- **Nightly rollups** — see §9.
- Backed by Redis (BullMQ or equivalent). Every job is idempotent and keyed by a natural id (e.g. `queue_entry_id`), so a worker crash-and-restart never double-processes.

## 7. Offline tolerance at the outlet

Indian outlet connectivity is patchy; the host stand (Q's primary surface) must keep working through it.

- The host-stand UI is a PWA that holds an **outbox** in IndexedDB: check-ins, seat/no-show actions queued locally with client-generated UUIDs.
- On reconnect, the outbox flushes to `/api/v1`; the server is authoritative on ordering (it stamps server-received time, not client time) and rejects/reconciles duplicates by the client-generated UUID, so a replay after a flaky connection is safe.
- **What degrades, explicitly:** the local queue keeps working fully offline (staff can still check guests in and mark tables ready by looking at the tablet). WhatsApp notifications queue locally and **defer until reconnect** — a guest might get their "table ready" WhatsApp a few minutes late if the outlet was offline, but the front-of-house flow itself never blocks on connectivity.
- Feedbackly, Loyalty, and Resolve are lower-frequency, less time-critical flows and get simple "queue the write, sync later" offline handling without the more involved outbox-ordering logic Q needs.

## 8. White-label guest surfaces

Guest-facing pages — Q's live status page, Feedbackly's feedback form, Loyalty's enrollment/balance screen — must look like the client's brand, not Restrovate's, per the constraint confirmed for chains at Chai Churi's scale.

- A `branding` record per `org`: logo, accent color, display name.
- Served at `guest.restrovate.com/<org-slug>/...` at launch; a custom-domain (`queue.chaichuri.com`) is a deferred enhancement (CNAME + TLS provisioning), not MVP.
- **Known tension, flagged as commercial rather than technical:** with the pooled default WABA, the guest-facing web page is brand-themed, but the WhatsApp messages themselves arrive from a sender identified as "Restrovate," not the brand. This is resolved per-tenant by the WABA upgrade path (brand brings its own WABA) already agreed as the pricing tier structure — it doesn't need solving in the base architecture, just needs the `org` model to support "which WABA does this org's traffic route through" as a field from day one so the upgrade is a config change.

## 9. Analytics strategy

Feedbackly and Resolve are reporting-heavy by nature (per-outlet sentiment trends, complaint pattern reporting across a 250-outlet network). Reads must never fall back to scanning raw event tables.

- Raw tables (`feedback_response`, `complaint`, `queue_event`, `message`) are the system of record and are append-only.
- A nightly worker job rolls raw tables into `daily_outlet_metrics` (and equivalents per product) — pre-aggregated counts, sentiment scores, resolution-time percentiles, keyed by `(org_id, outlet_id, date)`.
- **Every dashboard query reads from a rollup table, never a raw table**, except for a single outlet's live "today" view, which is small enough (one outlet, one day) to query directly. This is what keeps a 250-outlet leadership dashboard fast on a modestly sized Postgres instance instead of requiring a separate analytics warehouse.

## 10. Retention & archival

- Raw `queue_event` and `message` rows move to compressed cold storage (or are deleted, per the client's data policy) after a defined window — proposed default 12 months, configurable per org for compliance needs.
- Rollup tables (`daily_outlet_metrics` and equivalents) are never purged; they're small and are the long-term trend data leadership actually wants.
- This bounds primary-database growth so a 250→1,000 outlet transition is a vertical/read-replica scaling exercise, not a forced re-architecture — the largest tables in the system have a ceiling by design, not by accident.

## 11. POS integration seam (designed now, built later)

Confirmed with the business owner: Loyalty ships MVP **without** a POS dependency (staff-entered bill amount or guest-scanned QR at checkout — see [prd-loyalty.md](prd-loyalty.md)), because gating the first release on Petpooja/Restroworks API access and per-client POS contracts is too much complexity for a v1. But Restrovate also sells POS/app integration work as a service, so a client asking "can this read straight from my POS" needs to be a config change later, not a schema migration.

This is done by putting one seam in the domain layer now, at zero build cost for MVP:

- **`packages/core/loyalty`'s accrual function takes a `TransactionSource`** (`manual_staff_entry | guest_qr | pos_webhook`), not a hard dependency on how the bill amount arrived. MVP implements the first two; the third is an unimplemented case, not an unimagined one.
- **A `pos_connection` table exists in the schema from day one** (`org_id, outlet_id, provider, credentials_ref, status`), populated by zero rows at MVP. It costs nothing empty and means "which outlets have POS connected" is always a real query, not a future migration.
- **A `packages/pos-adapter` package is stubbed with the interface, not the implementations**: `PosAdapter.subscribeToTransactions(outletId) -> TransactionEvent stream`. The Loyalty accrual service already consumes a `TransactionEvent` shape internally for the manual-entry path (a staff-entered bill is modeled as a synthetic `TransactionEvent`), so a real Petpooja/Restroworks adapter, when built, feeds the exact same downstream code the manual path already exercises in production.
- **First real adapter is scoped as its own roadmap phase** (see [roadmap.md](roadmap.md), Phase 5), built against whichever POS an existing client actually runs, once Loyalty's manual-entry path has proven the accrual/redemption logic in production. Building the adapter against already-proven domain logic is materially lower-risk than building POS integration and accrual logic at the same time.

This keeps the MVP promise ("without POS") and the long-term promise ("architected to link up with POS") from being in tension — the interface exists either way; only the adapter implementation is deferred.
