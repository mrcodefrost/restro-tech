# Business context

This is the source of truth for who Restrovate is and who it serves. Site copy in `src/core/site.ts` and the pages under `src/features/` should trace back to what's written here — if you're changing positioning, update this file first.

## What Restrovate is

Restrovate is a **custom services agency** for food & beverage brands, agency-first with a small set of **standalone SaaS products as proof of what we build**. We are not a POS reseller and we are not primarily a software vendor — we take on end-to-end ownership of a brand's paperwork, tech, marketing, and content production, and where a problem is common enough across clients (queue management, feedback, loyalty, complaint tracking), we've productised it so it can be bought on its own, multi-tenant, without a full engagement.

Two service lines:

1. **Multi-outlet F&B chains** — franchise and company-owned restaurant groups, at any point in their growth.
2. **Private chefs, catering businesses, and personal culinary brands** — individuals and small teams who need a brand, a site, and content, not a franchise stack.

## Who we serve (the franchise journey, not a headcount band)

We don't gate the ICP by outlet count. The real portfolio spans a single-outlet brand about to franchise, a 200+ outlet chain live in six countries, and a private chef with no outlets at all. The honest framing is: **we work with F&B brands at any point in the franchise journey, from the first outlet to the two-hundredth, plus the individuals and catering teams around them.**

Primary market: **India-first, global-ready.** Compliance content (FSSAI, franchise agreements, GST) assumes an Indian operating context by default; international expansion (Canada, Australia, UAE, Singapore, US) is supported as a client's own growth, not our home market.

## The problems we solve

Verbatim from the founding brief — this is the problem set the business exists to address:

- **Customer feedback and analytics** — no structured way to collect or act on guest feedback across outlets.
- **Branding, compliance, and paperwork** — FSSAI registration, franchise model setup, and the general food & beverage compliance burden in India.
- **No customised brand website** — menu, franchise options, store locator, new-launch pages, site traffic analysis, and a channel for customer/investor queries are all missing or bolted on.
- **No owned delivery channel** — no branded website or app for delivery, leaving brands dependent on aggregators.
- **No table reservation or queue management** — something as simple as capturing a guest's name and phone number, notifying them of their queue position and estimated wait by WhatsApp, and alerting them when their table is ready, is usually absent.
- **No store complaint tracking** — franchise models have no system to log and track complaints per store.
- **No loyalty system** — nothing to convert first-time guests into recurring customers.
- **Dependency on generic POS** — Petpooja, Restroworks, and similar are built for single-restaurant operations, priced and structured without franchise management in mind, and cost more than a curated alternative built for the same job.

## Service pillars

1. **Paperwork** — FSSAI registration, franchise agreement structuring, franchise model setup, and the surrounding compliance work in the Indian F&B space.
2. **Tech** — brand websites, ordering/delivery web and apps, store locators, franchise/investor enquiry capture, POS and CRM integration, and the productised tools below.
3. **Marketing** — brand positioning, campaign support, and go-to-market for franchise expansion.
4. **Production** — studio-grade shoots for recipe and brand video, personal branding for chefs, and social content, delivered for clients like Chef Aman Puri.

## Products (standalone SaaS, multi-tenant)

Born out of client work, sold on their own to any restaurant regardless of engagement size.

| Product | What it does |
|---|---|
| **Queue & reservations** | Guest gives name + phone at the host stand. Guest gets their queue number and an estimated wait time by WhatsApp, then a "your table is ready" alert. No app download, no hardware beyond what the outlet already has. |
| **Feedback & analytics** | Multi-restaurant customer feedback collection and analytics, so a franchise can see per-outlet guest sentiment rather than relying on aggregator reviews alone. |
| **Loyalty** | Recurring-customer rewards, built to work across every outlet in a chain rather than being re-implemented per brand. |
| **Franchise complaint tracking** | Logging and resolution tracking for store-level complaints in a franchise model, visible to both franchisor and franchisee. |

## Competitive position

Standard restaurant POS platforms (Petpooja, Restroworks, and similar) solve point-of-sale for a single restaurant. They are not curated for franchise management, and licensing them across many outlets gets expensive without buying franchise-specific capability. Restrovate's products are scoped to the problems a franchise operator actually has — queueing, feedback, loyalty, complaint tracking — rather than being a full POS replacement.

## Real client portfolio

| Client | What they are | Scale (as of the live site) | What we built |
|---|---|---|---|
| [Chai Churi](https://www.chaichuri.com) | Kulhad chai café chain, "Feels like home" | 200+ outlets, 60+ cities, 1,000+ staff, 20 lakh+ customers served, live in the USA, Canada, India, UK, Australia, and UAE | Brand website with menu, store locator, and franchise enquiry flow, built for a Punjab-born brand expanding globally. |
| [Sardaar Ji Amritsari Kulcha](https://sardaarjiamritsarikulcha.netlify.app/) | Amritsari kulcha QSR, Mohali | 1 outlet (Aerocity, Mohali), 4.4★ from 145+ Google reviews, next-location franchise enquiry live | Brand website with menu, ordering info, and franchise enquiry form for a single-outlet brand preparing to scale. |
| [Chef Aman Puri](https://puriaman.com/) | Private chef and catering, Canada/US | Not an outlet business — event and catering bookings | Personal brand site and positioning; production capability (recipe/brand video, social content) applies here. |

These three anchor the site's case studies and public proof. Sardaar Ji and Chai Churi are the two bookends of the franchise-journey story; Aman Puri anchors the private-chef/catering line.

## Brand name: Restrovate

The brand is **Restrovate** ("restro" + "innovate" — signals tech/innovation for restaurants), with `restrovate.com` as the brand domain.

Preference is clearly for **"restro" + coined suffix** combos over words borrowed from Hindi/Indian F&B vocabulary (thali, bawarchi, chowk, dabbawala, kadai, etc.) — those read as too literal/local for a premium agency brand, even though the client base is India-first.

## Known gaps / content debt

- **No measured outcomes yet.** We know what was delivered for each client, not quantified before/after results (traffic, conversion, order volume). Case studies should stay scope-only until real numbers exist — do not invent metrics.
- **No client testimonial quotes on file.** Do not attribute quotes to Chai Churi, Sardaar Ji, or Aman Puri without their text in writing. Public, verifiable proof (star ratings, review counts, published scale numbers) stands in until then.
- **No case-study imagery for the real clients yet** — `public/assets/case-studies/` currently only has art for the retired fictional brands.
- **Careers page was placeholder content** for the first site version — needs a real rewrite once there's an actual hiring plan.
- **No products/services pages existed** before this pass — `/products` and `/services` are new routes; content on them should be revisited as the four SaaS products mature past MVP.
- **No demo video for any of the four SaaS products yet.** The product detail page (`product-detail-page.tsx`) has a demo-video section built and ready but gated behind a `SHOW_DEMO_VIDEO` flag since there's nothing real to show. Record one per product and flip it on once ready.
