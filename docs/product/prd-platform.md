# PRD — Platform (cross-cutting)

Requirements every one of the four products depends on. This ships as Phase 0 before any product-specific work — see [roadmap.md](roadmap.md). Architecture references: [architecture.md §3–4, §8](architecture.md#3-tenancy-model).

## 1. Org & outlet onboarding

- An owner signs up, creates an `org`, and adds one or more `outlet`s (name, address, phone).
- A brand preparing to franchise (Sardaar Ji's stage) starts with one outlet; a live chain (Chai Churi's stage) needs bulk outlet creation (CSV import or a quick repeated add-outlet flow) — both must be supported without treating "one outlet" as a special case in the data model (it isn't; see [data-model.md](data-model.md)).
- Onboarding an outlet does **not** require picking a product — product opt-in is separate (§3), so a brand can set up outlets first and activate Q later.

## 2. Users, roles, and invites

- Roles: `owner`, `brand_manager` (all outlets), `outlet_manager` (named outlets), `staff` (one outlet, narrow permissions) — per [architecture.md §4](architecture.md#4-identity--sessions).
- Invite by email; invitee sets a password (or SSO, deferred) on first login.
- An owner can change a member's role/outlet scope, and remove a member (revokes session immediately).
- Franchisee staff are invited the same way, scoped to their outlet(s) only — they never see another franchisee's outlet by default, matching the real Chai Churi/Sardaar Ji franchise relationship.

## 3. Per-product opt-in and cancellation

The site copy makes an explicit, repeated promise across all four FAQs: *"you can opt into [product] inside the software suite, pay for only this product, and cancel anytime."* This must be literally true, not aspirational:

- Each org has an `entitlement` row per product (see [data-model.md](data-model.md)) — activating Q does not activate Feedbackly.
- Cancelling a product **stops billing for it immediately** and disables its dashboard/write paths, but does not delete its historical data (an org that cancels Feedbackly and later reactivates should see its old sentiment trends, not start from zero).
- Cancelling one product never affects another — a chain running only Loyalty must be fully unaffected by Q being off.
- This is a platform requirement, not something re-solved per product PRD.

## 4. Device pairing (host stand)

- An owner/manager generates a short-lived pairing code from the dashboard, scoped to one outlet.
- The host-stand tablet (or any browser) enters the code once, which binds it as a `device` for that outlet.
- Day-to-day, staff unlock the paired device with a rotating PIN (no personal login required at the counter — see [architecture.md §4](architecture.md#4-identity--sessions)).
- An owner/manager can revoke a device (lost tablet, staff turnover) from the dashboard, immediately invalidating its session.
- MVP scope: this flow serves Q first. Feedbackly/Loyalty/Resolve don't need device-mode at MVP (they're either guest-initiated or manager-initiated), but the `device` entity and pairing flow are built generically so a future in-store Loyalty enrollment kiosk, say, reuses it rather than inventing a second device model.

## 5. Billing

- Subscription is per-org, per-product, flat monthly price per active outlet (per the pricing decision in [cost-model.md](cost-model.md)).
- MVP: a billing dashboard showing active products, outlet counts, and monthly amount; actual payment collection can start as invoiced/manual for the pilot cohort and move to automated card billing once volume justifies the integration — this is explicitly **not** gating Phase 1 (Q to one live outlet, see [roadmap.md](roadmap.md)).
- Entitlement changes (activate/cancel a product, add/remove an outlet) must be reflected in the next billing cycle's amount without manual reconciliation.

## 6. Branding / white-label setup

- Owner sets: logo, one accent color, display name — stored in `branding` (see [data-model.md](data-model.md)).
- This immediately reflects on every guest-facing surface (Q status page, Feedbackly form, Loyalty enrollment) without per-product configuration.
- MVP surfaces this at `guest.restrovate.com/<org-slug>/...`; custom domains are explicitly deferred (see [architecture.md §8](architecture.md#8-white-label-guest-surfaces)) and not required for Phase 1.
- `branding` also carries the WABA-routing field (pooled default vs. brand's own WABA) even though only the pooled path is built at MVP — see [architecture.md §8](architecture.md#8-white-label-guest-surfaces).

## Explicitly out of scope for Phase 0

- SSO / social login
- Automated card billing (manual/invoiced is acceptable for the pilot cohort)
- Custom domains for guest surfaces
- Multi-language dashboard UI (guest-facing message templates are locale-aware per [data-model.md](data-model.md); the staff dashboard is English-only at MVP)
