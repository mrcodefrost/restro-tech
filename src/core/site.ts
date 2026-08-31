export type NavItem = {
  label: string;
  href: string;
};

export type ServicePillarId = "legal" | "tech" | "marketing" | "production" | "general";

export type ServicePillarInfo = {
  id: ServicePillarId;
  title: string;
  description: string;
  color: {
    accent: string;
    soft: string;
    text: string;
  };
};

export type Service = {
  slug: string;
  pillar: ServicePillarId;
  title: string;
  summary: string;
  tags: string[];
  overview: string;
  /** Documents or prerequisites a client needs to have ready. Mainly used by legal/compliance services. */
  requirements?: string[];
  deliverables: string[];
  process: Array<{ title: string; summary: string }>;
  faqs: FaqItem[];
};

export type ProductColor = {
  name: string;
  accent: string;
  soft: string;
  text: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  audience: string;
  features: string[];
  overview: string;
  color: ProductColor;
  problem: {
    headline: string;
    body: string;
  };
  metrics: Array<{ value: string; label: string; context: string }>;
  howItWorks: Array<{ title: string; summary: string }>;
  faqs: FaqItem[];
};

export type Segment = {
  title: string;
  summary: string;
  examples: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  deck: string;
  tags: string[];
  tableOfContents: string[];
  keyTakeaways: string[];
  sections: Array<{
    title: string;
    body: string[];
    bullets?: string[];
  }>;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  result: string;
  image: string;
  infographicImage: string;
  client: string;
  category: string;
  outletCount: string;
  region: string;
  timeline: string;
  challenge: string;
  whyItMattered: string;
  executiveSummary: string;
  situation: string;
  diagnosis: string;
  implementationNarrative: string;
  impactNarrative: string;
  metrics: Array<{
    value: string;
    label: string;
    context: string;
  }>;
  problems: string[];
  solution: Array<{
    title: string;
    bullets: string[];
  }>;
  rationale: Array<{
    title: string;
    summary: string;
  }>;
  impact: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
  infographic: Array<{
    label: string;
    before: string;
    after: string;
  }>;
  /**
   * Optional. Only set this from a quote a client has actually given us in
   * writing. Never write a quote for a real, named client. See
   * docs/business-context.md "Known gaps / content debt".
   */
  quote?: {
    text: string;
    person: string;
    role: string;
  };
};

export type Role = {
  title: string;
  location: string;
  summary: string;
};

export type ClientProof = {
  brand: string;
  href: string;
  highlight: string;
  detail: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PlatformPillar = {
  title: string;
  summary: string;
  items: string[];
};

export type IntegrationArea = {
  title: string;
  summary: string;
};

export type ExpertiseSignal = {
  title: string;
  summary: string;
};

export type PositioningPoint = {
  title: string;
  summary: string;
  label: string;
};

export type ServiceDetail = {
  title: string;
  summary: string;
};

export const siteConfig = {
  name: "Restrovate",
  tagline:
    "Paperwork, tech, marketing, and production for F&B brands at every stage of the franchise journey.",
  email: "relations@synradlabs.com",
  legalName: "Synrad Labs Private Limited",
  legalNote: "Restrovate is a brand owned and operated by Synrad Labs Private Limited.",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/restrovate" },
    { label: "Instagram", href: "https://www.instagram.com/restrovate" },
    { label: "X", href: "https://x.com/restrovate" },
  ],
};

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
];

export const footerNavItems: NavItem[] = [
  ...navItems,
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const legalNavItems: NavItem[] = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
];

export const servicePillars: ServicePillarInfo[] = [
  {
    id: "legal",
    title: "Legal",
    description:
      "Registration and compliance: the licenses, agreements, and audits that stand between an idea and a legally ready outlet.",
    color: { accent: "#4262ff", soft: "#f5f3ff", text: "#2a41b6" },
  },
  {
    id: "tech",
    title: "Tech",
    description:
      "Websites, apps, ordering, and the integration layer that connects your brand's digital presence to the systems you already run.",
    color: { accent: "#0fbcb0", soft: "#c3faf5", text: "#187574" },
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Brand positioning, digital marketing, campaigns, and social, built for a franchise brand entering new cities, regions, or countries.",
    color: { accent: "#ff9999", soft: "#ffc6c6", text: "#600000" },
  },
  {
    id: "production",
    title: "Production",
    description:
      "Studio-grade shoots for menus, recipes, and founder branding, plus the menu research that decides what's worth shooting.",
    color: { accent: "#fcb900", soft: "#fff8e0", text: "#746019" },
  },
];

export const services: Service[] = [
  // ---------- LEGAL ----------
  {
    slug: "fssai-registration",
    pillar: "legal",
    title: "FSSAI Registration & Renewal",
    summary:
      "Basic, State, or Central FSSAI licensing handled end to end for every outlet, plus renewal tracking so nothing lapses as you scale.",
    tags: ["FSSAI", "Food license", "Renewals"],
    overview:
      "No F&B outlet can legally serve food without an FSSAI license, and the tier you need (Basic, State, or Central) depends on turnover and outlet count, not guesswork. We handle the application, documentation, inspection coordination, and renewal calendar for every outlet you run, so a missed renewal never becomes a shutdown notice.",
    requirements: [
      "Business PAN and incorporation or partnership documents",
      "Identity and address proof for the owner or authorized signatory",
      "Rent agreement or ownership proof for the outlet premises",
      "Water testing report (for the Central license tier)",
      "List of food products and processing/handling activities at the outlet",
    ],
    deliverables: [
      "FSSAI tier assessment (Basic, State, or Central) per outlet",
      "Application filing and document preparation",
      "Inspection coordination and query resolution with the FSSAI office",
      "A renewal calendar tracked across every outlet you operate",
      "License display and compliance documentation for each location",
    ],
    process: [
      { title: "Tier assessment", summary: "We calculate the right FSSAI tier per outlet based on turnover, footprint, and food category." },
      { title: "Document collection", summary: "We tell you exactly what's needed and prepare the application, instead of you decoding a government portal." },
      { title: "Filing and follow-up", summary: "We file, track status, and resolve any queries raised by the FSSAI office on your behalf." },
      { title: "Renewal tracking", summary: "Every outlet's license expiry is tracked centrally, so renewals happen before they become a compliance risk." },
    ],
    faqs: [
      { question: "Do you handle FSSAI registration for every outlet, or just the first?", answer: "Every outlet. As you open new locations, we handle registration and renewal for each one, tracked on a single calendar." },
      { question: "How do I know which FSSAI tier my outlet needs?", answer: "It depends on annual turnover and business type. We assess this per outlet before filing, so you don't under- or over-license." },
    ],
  },
  {
    slug: "gst-registration-filing",
    pillar: "legal",
    title: "GST Registration & Filing",
    summary:
      "GST registration for every outlet and legal entity, plus ongoing return filing so tax compliance doesn't fall on whoever has time that week.",
    tags: ["GST", "Tax filing", "Multi-outlet"],
    overview:
      "Multi-outlet F&B brands often need GST registration per state, and filing gets harder as outlets and revenue streams multiply. We register every entity that needs it and handle ongoing return filing, so tax compliance runs on a schedule instead of a scramble.",
    requirements: [
      "PAN and business incorporation documents",
      "Proof of business address for each registered state",
      "Bank account details for the business entity",
      "Digital signature certificate (for company filings)",
    ],
    deliverables: [
      "GST registration per state and entity as required",
      "Monthly or quarterly return filing, based on your scheme",
      "Help matching your tax credits so nothing gets missed",
      "A filing calendar shared with your finance team",
    ],
    process: [
      { title: "Registration mapping", summary: "We identify every state and entity that needs its own GST registration before you open there." },
      { title: "Filing", summary: "Returns are prepared and filed on schedule, coordinated with your accounting records." },
      { title: "Reconciliation", summary: "We flag input credit mismatches early instead of at year-end audit time." },
      { title: "Ongoing support", summary: "As new outlets and states come online, registration and filing extend without a scramble." },
    ],
    faqs: [
      { question: "Do we need a separate GST registration for every state?", answer: "In most cases, yes. We map this out per outlet and handle registration for each state you operate in." },
      { question: "Can you take over filing from our current accountant?", answer: "Yes, we coordinate directly with your finance team or existing accountant so nothing is duplicated or missed." },
    ],
  },
  {
    slug: "rent-agreement-outlet-leasing",
    pillar: "legal",
    title: "Rent Agreement & Outlet Leasing Support",
    summary:
      "Lease review, rent agreement structuring, and registration support for every new outlet, so a bad lease clause doesn't become a franchise-wide problem.",
    tags: ["Lease review", "Rent agreement", "New outlet"],
    overview:
      "A rent agreement written for a generic retail tenant rarely accounts for what an F&B outlet actually needs: exhaust and fire clearances, kitchen exhaust routing, signage rights, and lock-in periods that match your franchise rollout plan. We review and structure lease terms before you sign, not after a landlord dispute.",
    requirements: [
      "Draft rent agreement or landlord's terms sheet",
      "Property ownership or title documents from the landlord",
      "Outlet floor plan, if kitchen or exhaust clauses need review",
    ],
    deliverables: [
      "Lease clause review against F&B-specific risks",
      "Rent agreement drafting or renegotiation support",
      "Registration and stamp duty coordination where required",
      "A standard lease checklist reused across every new outlet",
    ],
    process: [
      { title: "Lease review", summary: "We review the landlord's draft for lock-in terms, exit clauses, and F&B-specific gaps like exhaust and signage rights." },
      { title: "Negotiation support", summary: "We flag terms worth renegotiating before signature, in coordination with your legal counsel." },
      { title: "Registration", summary: "Agreements are registered and stamped as required by the state." },
      { title: "Template reuse", summary: "Once a lease structure works, it becomes the checklist for your next outlet." },
    ],
    faqs: [
      { question: "Do you draft the rent agreement from scratch?", answer: "We can, or we review a landlord's draft and flag the clauses that need to change before you sign." },
      { question: "Does this apply to franchisee-signed leases too?", answer: "Yes. We can build a standard lease checklist franchisees use when signing their own outlet leases." },
    ],
  },
  {
    slug: "franchise-agreement-drafting",
    pillar: "legal",
    title: "Franchise Agreement Drafting",
    summary:
      "Franchise agreement structuring, covering royalty terms, territory rights, and operating standards, before you sign your first franchisee.",
    tags: ["Franchise agreements", "Royalty structure", "Territory rights"],
    overview:
      "A franchise agreement written after your first franchisee is already asking questions is a franchise agreement written under pressure. We work with your legal counsel to structure royalty terms, territory exclusivity, operating standards, and exit clauses, so every franchisee signs the same disciplined agreement.",
    requirements: [
      "Brand operating standards or SOPs, if already documented",
      "Franchise fee and royalty structure, even in draft form",
      "Territory map or planned expansion regions",
    ],
    deliverables: [
      "Franchise agreement drafted in coordination with your legal counsel",
      "Royalty structure and territory rights defined per market",
      "Operating standards and brand compliance clauses",
      "A reusable agreement template for future franchisees",
    ],
    process: [
      { title: "Structure workshop", summary: "We align on royalty percentage, franchise fee, territory exclusivity, and term length before drafting begins." },
      { title: "Drafting", summary: "The agreement is drafted with your legal counsel, covering operating standards and brand protection clauses." },
      { title: "Review and finalize", summary: "Terms are reviewed against your expansion plan before the first franchisee signs." },
      { title: "Template rollout", summary: "The finalized structure becomes a standard template for every franchisee after the first." },
    ],
    faqs: [
      { question: "Can you help structure a franchise agreement from scratch?", answer: "Yes. We work with your legal counsel to structure royalty terms, territory rights, and operating standards, then draft the agreement." },
      { question: "Do you replace our lawyer?", answer: "No. We work alongside your legal counsel, handling the franchise-specific structuring so your lawyer isn't starting from a blank page." },
    ],
  },
  {
    slug: "trademark-brand-registration",
    pillar: "legal",
    title: "Trademark & Brand Registration",
    summary:
      "Trademark search, filing, and class registration, so your brand name and logo are legally yours before a franchisee, or a copycat, tests that assumption.",
    tags: ["Trademark", "Brand protection", "IP filing"],
    overview:
      "Franchising a brand without a registered trademark is franchising a name you don't legally control. We run the trademark search, file under the right classes for food service and retail, and track the registration through to grant, so the brand you're licensing to franchisees is actually yours.",
    requirements: [
      "Brand name, logo, and any tagline to be registered",
      "Proof of first use in commerce, if available (invoices, launch date, signage)",
      "Business PAN and address proof",
    ],
    deliverables: [
      "Trademark availability search across relevant classes",
      "Filing for word mark and logo under food service and retail classes",
      "Objection and opposition handling if raised",
      "Registration certificate and renewal tracking",
    ],
    process: [
      { title: "Search", summary: "We check name and logo availability before filing, so you're not building a brand you'll have to rename." },
      { title: "Filing", summary: "Applications are filed under the classes relevant to food service, retail, and franchising." },
      { title: "Objection handling", summary: "If an objection or opposition is raised, we respond on your behalf through to resolution." },
      { title: "Registration and renewal", summary: "Once granted, renewal dates are tracked so protection never lapses." },
    ],
    faqs: [
      { question: "How long does trademark registration take?", answer: "Timelines vary by jurisdiction and whether objections are raised, typically ranging from several months to over a year in India." },
      { question: "Should we register the trademark before or after franchising?", answer: "Before. Filing early, even before grant, gives you a legal basis to act if a franchisee or competitor infringes." },
    ],
  },
  {
    slug: "compliance-audits",
    pillar: "legal",
    title: "Compliance & Safety Audits",
    summary:
      "Fire safety NOC, health license, labour law, and municipal compliance audits per outlet, so a routine inspection never turns into a shutdown.",
    tags: ["Fire NOC", "Health license", "Labour compliance"],
    overview:
      "Beyond FSSAI and GST, every outlet carries a stack of municipal and labour compliance requirements that vary by city: fire safety NOC, health trade license, signage permits, and labour law registrations like Shops & Establishment and Provident Fund. We audit what's in place, what's missing, and close the gap before an inspector finds it first.",
    requirements: [
      "Outlet floor plan and fire safety equipment list",
      "Staff headcount and employment records",
      "Existing municipal licenses, if any",
    ],
    deliverables: [
      "A per-outlet compliance audit against fire, health, and labour requirements",
      "Fire safety NOC application and inspection coordination",
      "Health trade license filing",
      "Labour law compliance check (PF, ESI, Shops & Establishment)",
      "A standing compliance checklist for every future outlet",
    ],
    process: [
      { title: "Audit", summary: "We inspect current documentation against fire, health, and labour requirements for that outlet's city and state." },
      { title: "Gap closure", summary: "Missing licenses and registrations are filed, with inspection coordination where required." },
      { title: "Verification", summary: "We confirm every requirement is met and documented before calling the outlet compliant." },
      { title: "Standing checklist", summary: "The audit becomes a template, so every new outlet opens compliant from day one." },
    ],
    faqs: [
      { question: "Do compliance requirements differ by city or state?", answer: "Yes, significantly. Fire, health, and labour requirements vary by municipality, which is why we audit per outlet rather than applying one national checklist." },
      { question: "Can you audit outlets we didn't build the website or app for?", answer: "Yes. Compliance audits are available standalone, independent of any tech or marketing engagement." },
    ],
  },
  {
    slug: "shop-establishment-license",
    pillar: "legal",
    title: "Shop & Establishment License",
    summary:
      "Shop & Establishment registration for every outlet, the base license most F&B outlets need before they can legally operate or hire staff.",
    tags: ["Shop & Establishment", "Labour registration"],
    overview:
      "Shop & Establishment registration is the foundational license that lets an outlet legally employ staff and operate under state labour law, and it's frequently the one founders forget because it doesn't feel as urgent as FSSAI. We file it for every outlet as a standard part of opening, not an afterthought.",
    requirements: [
      "Outlet address proof and rent agreement",
      "Owner identity proof",
      "Staff headcount at the time of opening",
    ],
    deliverables: [
      "Shop & Establishment registration filed per outlet",
      "Working hours and employment condition compliance",
      "Renewal tracking alongside your other outlet licenses",
    ],
    process: [
      { title: "Eligibility check", summary: "We confirm the registration category based on outlet size and staff count." },
      { title: "Filing", summary: "The application is filed with the relevant state labour department." },
      { title: "Certificate and display", summary: "The registration certificate is issued and displayed as required at the outlet." },
      { title: "Renewal tracking", summary: "Renewal is tracked on the same calendar as FSSAI and GST." },
    ],
    faqs: [
      { question: "Is this required if we already have an FSSAI license?", answer: "Yes. FSSAI covers food safety, Shop & Establishment covers labour law, they're separate requirements." },
      { question: "Do franchisees need to register this separately for their own outlet?", answer: "Yes, each outlet needs its own registration. We can build this into your standard franchise opening checklist." },
    ],
  },

  // ---------- TECH ----------
  {
    slug: "website-development",
    pillar: "tech",
    title: "Website Development",
    summary:
      "A brand-native website with menu, store locator, and franchise enquiry flow, built to represent the business you actually are, not a restaurant template.",
    tags: ["Brand website", "Store locator", "Franchise enquiry"],
    overview:
      "Most restaurant websites are a menu PDF and a phone number. We build a site that does the job a growing F&B brand actually needs: menu presentation that matches your visual identity, a store locator that scales from one outlet to hundreds, and a franchise or investor enquiry flow that captures a serious lead instead of losing it to a generic contact form.",
    deliverables: [
      "Brand-native design, not a templated restaurant theme",
      "Menu presentation with pricing, categories, and dietary tags",
      "Store locator with city and region-based search",
      "Franchise and investor enquiry flow with structured intake",
      "Mobile-first performance and basic SEO setup",
    ],
    process: [
      { title: "Discovery", summary: "We map your brand identity, outlet footprint, and the goals the site actually needs to serve." },
      { title: "Design", summary: "The site is designed to look like your restaurant, with your visual identity carried through every page." },
      { title: "Build", summary: "Development happens with clean architecture, ready to extend as outlets and features grow." },
      { title: "Launch and iterate", summary: "We launch, monitor real usage, and refine based on what guests and franchise leads actually do on the site." },
    ],
    faqs: [
      { question: "Can you build a store locator for hundreds of outlets?", answer: "Yes. Our store locators are built to scale from a single outlet to hundreds, with city and region-based search." },
      { question: "Do you handle hosting and ongoing updates?", answer: "Yes, hosting, content updates, and ongoing support can be part of the engagement." },
    ],
  },
  {
    slug: "mobile-app-development",
    pillar: "tech",
    title: "Mobile App Development",
    summary:
      "A branded ordering and loyalty app so your best customers order direct, not through an aggregator that owns the relationship.",
    tags: ["iOS & Android", "Ordering app", "Loyalty"],
    overview:
      "Every order placed through a third-party delivery app is a customer relationship you don't own: no direct contact, no loyalty data, and a commission on every sale. We build a branded mobile app for ordering, loyalty, and store discovery, so your most frequent customers have a reason to open your app instead of an aggregator's.",
    deliverables: [
      "Native or cross-platform app for iOS and Android",
      "Ordering flow for pickup, takeaway, and delivery",
      "Loyalty and rewards built into the app experience",
      "Push notifications for offers, order status, and launches",
      "App store submission and release management",
    ],
    process: [
      { title: "Scope and platform decision", summary: "We decide native vs. cross-platform based on your budget, timeline, and feature needs." },
      { title: "Design", summary: "The app is designed around your ordering flow and brand identity, not a generic food-app template." },
      { title: "Build and integrate", summary: "Development connects to your POS, payment gateway, and loyalty system." },
      { title: "Launch and support", summary: "We handle app store submission, then support updates as your menu and outlets grow." },
    ],
    faqs: [
      { question: "Do we need both a website and an app?", answer: "Not always. Many brands start with a strong website and add an app once repeat-order volume justifies it. We'll advise honestly either way." },
      { question: "Can the app work across every outlet in our franchise?", answer: "Yes. It's built to handle multi-outlet ordering, availability, and pricing from day one." },
    ],
  },
  {
    slug: "ordering-delivery-platform",
    pillar: "tech",
    title: "Ordering & Delivery Platform",
    summary:
      "A web and app ordering layer for pickup, takeaway, and delivery, with regional menu, pricing, and fulfillment rules built in from the start.",
    tags: ["Ordering", "Delivery", "Regional menus"],
    overview:
      "Ordering breaks down the moment a chain crosses a handful of outlets with different hours, availability, and pricing. We build the ordering and delivery layer around your actual operating rules, regional pricing, item availability by outlet, and fulfillment logic, so guests never reach checkout only to discover an item or offer doesn't apply.",
    deliverables: [
      "Web and app ordering for pickup, takeaway, and delivery",
      "Regional menu logic for pricing, language, and outlet overrides",
      "Delivery partner and fulfillment coordination",
      "Offer and loyalty validation before checkout, not after",
    ],
    process: [
      { title: "Operating rules audit", summary: "We map store hours, availability, and pricing differences across your outlets before designing the flow." },
      { title: "Menu modeling", summary: "Menu structure is built to inherit brand standards while allowing outlet-level overrides." },
      { title: "Build and integrate", summary: "The ordering layer connects to your POS, delivery partners, and payment systems." },
      { title: "Pilot and expand", summary: "We launch with a small group of outlets, fix friction, then roll out region by region." },
    ],
    faqs: [
      { question: "Do you replace our POS or restaurant management software?", answer: "No. We build the customer-facing and integration layers around your current stack when that's the right path." },
      { question: "Can pricing differ by city or outlet?", answer: "Yes. Regional pricing and outlet-level overrides are built into the menu model from the start." },
    ],
  },
  {
    slug: "pos-crm-integration",
    pillar: "tech",
    title: "POS & CRM Integration",
    summary:
      "Integration planning and implementation that connects your website, app, and loyalty system to the POS and CRM you already run.",
    tags: ["POS integration", "CRM", "Payments"],
    overview:
      "POS integration fails operationally more often than it fails technically, when menu sync, payment methods, refunds, and loyalty points aren't mapped before the build starts. We plan the integration around your actual operating rules first, then implement it, so orders, rewards, and reporting all add up cleanly.",
    deliverables: [
      "Integration planning across menu sync, tenders, and refunds",
      "POS integration for order flow and reconciliation",
      "CRM and loyalty system connection for guest history and rewards",
      "Payment gateway integration and reconciliation reporting",
    ],
    process: [
      { title: "Technical audit", summary: "We map your current stack, POS, and integration points before writing a line of code." },
      { title: "Integration plan", summary: "Menu sync, payment methods, refund behavior, and loyalty logic are agreed before build begins." },
      { title: "Build and test", summary: "Integration is implemented and tested against real order and refund scenarios." },
      { title: "Pilot verification", summary: "A pilot outlet validates reconciliation before rolling out network-wide." },
    ],
    faqs: [
      { question: "Which POS systems can you integrate with?", answer: "We've worked with major restaurant POS platforms including Petpooja and Restroworks, and evaluate custom integration for others case by case." },
      { question: "What happens if an item is available online but not in-store?", answer: "This is exactly the kind of edge case we map during planning, so availability sync prevents the mismatch before it reaches a guest." },
    ],
  },
  {
    slug: "store-locator-franchise-enquiry",
    pillar: "tech",
    title: "Store Locator & Franchise Enquiry Systems",
    summary:
      "A dedicated store locator and franchise or investor enquiry system, built as first-class product surfaces, not an afterthought contact form.",
    tags: ["Store locator", "Franchise enquiry", "Lead capture"],
    overview:
      "A franchise enquiry that lands in a generic contact form is a lead you'll likely lose. We build store locators that scale past hundreds of outlets and franchise or investor enquiry flows with structured intake, so serious interest gets routed and followed up on, not buried in an inbox.",
    deliverables: [
      "City and region-based store locator",
      "Franchise enquiry form with structured, qualifying intake",
      "Investor enquiry capture separate from guest-facing contact",
      "Lead routing to the right team, not a shared inbox",
    ],
    process: [
      { title: "Requirements mapping", summary: "We define what a qualified franchise or investor lead actually looks like for your brand." },
      { title: "Design", summary: "The locator and enquiry flows are designed to match your brand and reduce drop-off." },
      { title: "Build", summary: "Both systems are built to scale as your outlet count and enquiry volume grow." },
      { title: "Routing setup", summary: "Leads are routed to the right internal team automatically, with no manual triage step." },
    ],
    faqs: [
      { question: "Can this be added to an existing website?", answer: "Yes, we can build this as a standalone addition to a site we didn't originally build." },
      { question: "Does the locator work for a single outlet preparing to franchise?", answer: "Yes. It's built to scale from one outlet to hundreds, so it grows with you instead of needing a rebuild." },
    ],
  },

  // ---------- MARKETING ----------
  {
    slug: "digital-marketing",
    pillar: "marketing",
    title: "Digital Marketing (SEO & Paid)",
    summary:
      "Search and paid marketing built for local discovery, so guests searching for a restaurant in your city actually find your outlet first.",
    tags: ["SEO", "Local search", "Paid ads"],
    overview:
      "Most F&B search traffic is local: someone searching for a kulcha place or a cafe nearby, right now. We run SEO for outlet and city pages, local map presence, and paid campaigns aimed at footfall and orders, not vanity impressions, so digital marketing spend maps to guests walking in or ordering online.",
    deliverables: [
      "Local SEO for outlet, city, and menu pages",
      "Google Business Profile setup and optimization per outlet",
      "Paid search and social campaigns tied to footfall or order goals",
      "Monthly reporting focused on enquiries, orders, and footfall, not just clicks",
    ],
    process: [
      { title: "Audit", summary: "We assess current search visibility, local listings, and paid spend efficiency before recommending changes." },
      { title: "Local SEO setup", summary: "Outlet and city pages are optimized for the searches guests actually run." },
      { title: "Campaign build", summary: "Paid campaigns are structured around footfall, orders, or franchise enquiries, whichever is the actual goal." },
      { title: "Reporting and iteration", summary: "We report on what drove real outcomes and adjust spend toward what's working." },
    ],
    faqs: [
      { question: "Do you handle this for every outlet individually?", answer: "Yes, local SEO and Google Business Profile work is done per outlet, since local search is location-specific." },
      { question: "Can you work alongside our existing marketing team?", answer: "Yes. We often work alongside an in-house team, focused specifically on the digital and franchise growth pieces." },
    ],
  },
  {
    slug: "social-media-management",
    pillar: "marketing",
    title: "Social Media Management",
    summary:
      "Ongoing social content, scheduling, and community management across your brand's channels, built for a real posting cadence.",
    tags: ["Social media", "Content calendar", "Community management"],
    overview:
      "A single viral reel doesn't build a brand, a consistent posting cadence does. We manage the content calendar, scheduling, captions, and community response across your social channels, drawing on the production library so posting never depends on whoever remembers to pick up a phone that week.",
    deliverables: [
      "A monthly content calendar aligned with launches and campaigns",
      "Post scheduling and publishing across platforms",
      "Caption writing and community response management",
      "Monthly performance reporting on engagement and growth",
    ],
    process: [
      { title: "Content calendar", summary: "We plan a month at a time, aligned with launches, campaigns, and available production content." },
      { title: "Production coordination", summary: "Where new content is needed, this connects directly to our production service." },
      { title: "Scheduling and posting", summary: "Content goes out on a consistent cadence across the channels that matter for your brand." },
      { title: "Reporting", summary: "We report on engagement and growth monthly, and adjust the calendar based on what's actually working." },
    ],
    faqs: [
      { question: "Do you also shoot the content, or just manage posting?", answer: "Both are available. Many clients pair this with our production service so content and posting are handled by one team." },
      { question: "Can you manage social for multiple outlets under one brand?", answer: "Yes, we manage this at the brand level while allowing outlet-specific content where it's useful." },
    ],
  },
  {
    slug: "campaigns-launch-marketing",
    pillar: "marketing",
    title: "Launch Campaigns",
    summary:
      "Campaign planning and execution for new outlet openings, city launches, and franchise announcements, timed to land with the opening itself.",
    tags: ["Campaigns", "Launch marketing", "New outlet"],
    overview:
      "A new outlet opening without a campaign behind it wastes the one moment guests are naturally curious. We plan and run launch campaigns, paid, social, and local, timed to land alongside the outlet opening, not weeks after it's already old news.",
    deliverables: [
      "Launch campaign plan across paid, social, and local channels",
      "Creative built for the specific launch, not reused generic ads",
      "Campaign execution timed to the outlet opening date",
      "Post-launch measurement of footfall and awareness impact",
    ],
    process: [
      { title: "Launch brief", summary: "We align on the opening date, city, and what success looks like before planning a single ad." },
      { title: "Campaign plan", summary: "Channels, creative, and timing are sequenced to build anticipation ahead of the opening." },
      { title: "Execution", summary: "Campaigns run alongside the outlet opening, not after it, so day-one footfall benefits." },
      { title: "Measurement", summary: "We track what actually drove footfall and awareness, not just impressions." },
    ],
    faqs: [
      { question: "Do you handle marketing for a single outlet, or only franchise-scale launches?", answer: "Both. A single outlet opening needs the same launch discipline as a multi-city franchise rollout." },
      { question: "How far ahead of an opening should we start planning?", answer: "Four to six weeks is typical, enough time to build anticipation without the campaign going stale before launch day." },
    ],
  },
  {
    slug: "branding-positioning",
    pillar: "marketing",
    title: "Branding & Positioning",
    summary:
      "Brand positioning, voice, and visual identity work, so a franchise expansion reads as confident and deliberate, not improvised.",
    tags: ["Brand positioning", "Voice & identity", "New markets"],
    overview:
      "A brand entering a new city or country needs more than a translated menu. We build the positioning behind how your brand should read in a new market: voice, visual identity guardrails, and messaging that stays consistent with who you already are while adapting to a new audience.",
    deliverables: [
      "Brand positioning statement for new markets or the brand overall",
      "Voice and messaging guidelines",
      "Visual identity guardrails for consistent execution across teams",
      "Messaging alignment across web, social, and campaign content",
    ],
    process: [
      { title: "Positioning workshop", summary: "We align on how the brand should read in a new city, region, or country before planning a single campaign." },
      { title: "Voice and identity", summary: "Messaging and visual guardrails are documented so every team executes consistently." },
      { title: "Rollout", summary: "Positioning is applied across web, social, and campaign content as a coordinated update, not a scattered one." },
      { title: "Review", summary: "We revisit positioning as the brand enters new markets or franchise partners come on board." },
    ],
    faqs: [
      { question: "Is this a one-time project or an ongoing service?", answer: "Positioning work is typically a focused project, with voice and identity guidelines then used ongoing across marketing and production." },
      { question: "Do you redesign our logo?", answer: "Only if positioning work reveals it's genuinely needed. We don't push a rebrand where the existing identity is working." },
    ],
  },
  {
    slug: "franchise-expansion-marketing",
    pillar: "marketing",
    title: "Franchise Expansion Go-To-Market",
    summary:
      "Go-to-market planning for domestic and international expansion, sequencing launch, channel, and messaging decisions before day one in a new market.",
    tags: ["Franchise GTM", "Expansion planning", "International launch"],
    overview:
      "Expanding into a new city, region, or country is a sequencing problem as much as a marketing one: what launches first, which channels matter locally, and how messaging adapts without losing brand consistency. We build the go-to-market plan that answers those questions before the first franchise agreement in that market is even signed.",
    deliverables: [
      "Market entry sequencing across cities, regions, or countries",
      "Channel selection based on how guests actually discover restaurants locally",
      "Messaging adaptation guidelines for new markets",
      "A go-to-market playbook reusable for future expansion",
    ],
    process: [
      { title: "Market assessment", summary: "We evaluate the new market's local search, social, and discovery behavior before recommending channels." },
      { title: "Go-to-market plan", summary: "Launch sequencing, channel selection, and messaging are set before day one in a new market." },
      { title: "Execution support", summary: "We support the first launch directly, then hand off a playbook for markets after it." },
      { title: "Playbook refinement", summary: "Each new market's results refine the playbook for the next one." },
    ],
    faqs: [
      { question: "Do you handle expansion into international markets?", answer: "Yes. Compliance content stays India-first by default, but go-to-market planning supports Canada, Australia, UAE, Singapore, US, and other markets as clients expand." },
      { question: "What if we're expanding through franchise partners, not company-owned outlets?", answer: "The playbook accounts for this. Franchise-led expansion needs messaging and enablement materials the franchisee can execute locally." },
    ],
  },

  // ---------- PRODUCTION ----------
  {
    slug: "menu-recipe-production",
    pillar: "production",
    title: "Menu & Recipe Video/Photo Production",
    summary:
      "Studio-grade photography and video for menu items and recipes, shot to actually make guests want to order what they're looking at.",
    tags: ["Menu photography", "Recipe video", "Studio shoot"],
    overview:
      "A menu photographed on a phone under kitchen lighting undersells the food. We run studio-grade shoots for menu items and recipe content, styled and lit to the standard your food actually deserves, ready for your website, app, delivery listings, and social channels.",
    deliverables: [
      "Studio-grade photography for every signature and core menu item",
      "Recipe video content for social and website use",
      "Food styling direction matched to your brand's visual identity",
      "Deliverables sized and formatted for web, app, and social platforms",
    ],
    process: [
      { title: "Creative direction", summary: "We align on the brand's visual identity and priority menu items before booking a single shoot." },
      { title: "Studio production", summary: "Recipe and menu content are shot to a professional standard, ready for the brand's own channels and ours." },
      { title: "Editing and packaging", summary: "Footage and photography are edited and packaged for the specific platforms they'll run on." },
      { title: "Delivery", summary: "Final assets are delivered in the formats your website, app, and delivery listings actually need." },
    ],
    faqs: [
      { question: "Do you travel to our outlet, or is this studio-only?", answer: "Both are available. Studio shoots give the most creative control; on-location shoots capture the outlet's real environment when that's the goal." },
      { question: "Can this content be reused across delivery apps and our own site?", answer: "Yes, assets are delivered in formats ready for your website, app, and third-party delivery listings." },
    ],
  },
  {
    slug: "founder-chef-branding",
    pillar: "production",
    title: "Founder & Chef Personal Branding",
    summary:
      "Personal branding production for chefs and founders, the content and positioning that turns a person into a recognizable face of the brand.",
    tags: ["Personal branding", "Chef branding", "Founder content"],
    overview:
      "Guests trust a face more than a logo, especially for private chefs and founder-led brands. We produce personal branding content, video, photography, and positioning, that establishes a chef or founder as a credible, recognizable presence, the kind of production capability we've applied for clients like Chef Aman Puri.",
    deliverables: [
      "Personal brand photography and video for the founder or chef",
      "Positioning and voice work specific to the individual, not just the brand",
      "Content built for a real posting cadence, not a one-off shoot",
      "Coordination with social media management for ongoing distribution",
    ],
    process: [
      { title: "Positioning conversation", summary: "We align on how the founder or chef should be presented before planning content." },
      { title: "Production", summary: "Photography and video are shot to establish a consistent, recognizable personal presence." },
      { title: "Content packaging", summary: "Footage is cut into a content library built for an actual posting schedule." },
      { title: "Distribution support", summary: "We advise on where and how the content should run across the brand's and individual's channels." },
    ],
    faqs: [
      { question: "Is this only for private chefs, or does it apply to franchise founders too?", answer: "Both. It's core to how we work with private chefs and catering brands, and equally useful for a franchise founder who is the face of the brand." },
      { question: "Do you produce content on an ongoing basis, or just a single shoot?", answer: "Both are available. Most clients start with a single studio shoot, then move to an ongoing content cadence." },
    ],
  },
  {
    slug: "menu-planning-research",
    pillar: "production",
    title: "Menu Planning & Research",
    summary:
      "Menu structure and item research before a shoot or a launch, so production time goes toward the items that actually deserve it.",
    tags: ["Menu research", "Menu engineering", "Category planning"],
    overview:
      "Shooting or marketing an entire menu equally wastes budget on items that don't move. We research menu performance, category gaps, and regional preferences before recommending what's worth a studio shoot, a campaign push, or a menu redesign, so production and marketing spend follows what actually matters.",
    deliverables: [
      "Menu category and item performance research",
      "Regional preference and gap analysis for multi-outlet or expansion menus",
      "Recommendations for what to shoot, promote, or reconsider",
      "A prioritized list feeding directly into production and campaign planning",
    ],
    process: [
      { title: "Menu audit", summary: "We review current menu structure, category balance, and available performance data." },
      { title: "Research", summary: "Regional preferences and competitive positioning are researched for markets you're entering or already serve." },
      { title: "Recommendations", summary: "We recommend what to prioritize for production, campaigns, or menu changes." },
      { title: "Handoff", summary: "Findings feed directly into production scheduling and marketing campaign planning." },
    ],
    faqs: [
      { question: "Do you redesign the menu itself?", answer: "We provide research and recommendations; menu redesign can follow as a separate scope if needed." },
      { question: "Is this useful before we've opened any outlets yet?", answer: "Yes, it's equally useful for a pre-launch brand deciding what to lead with as it is for an established chain entering a new region." },
    ],
  },
  {
    slug: "social-content-production",
    pillar: "production",
    title: "Social Content Production",
    summary:
      "Ongoing social content production, shot and cut specifically for the platforms and formats your audience actually watches.",
    tags: ["Social content", "Reels & shorts", "Content library"],
    overview:
      "Repurposed menu photography rarely performs as native social content. We produce content specifically for social formats, reels, shorts, and stories, built into a library that feeds your posting cadence instead of leaving social media management working with nothing new to post.",
    deliverables: [
      "Recurring social content shoots, scheduled to a real cadence",
      "Content edited natively for reels, shorts, and stories formats",
      "A content library that feeds ongoing social media management",
      "Trend-aware formats without losing brand consistency",
    ],
    process: [
      { title: "Content planning", summary: "We plan shoots around what social media management actually needs for the coming weeks." },
      { title: "Production", summary: "Content is shot and directed specifically for short-form social formats, not repurposed from other shoots." },
      { title: "Editing", summary: "Footage is cut natively for reels, shorts, and stories, matched to each platform's format." },
      { title: "Library handoff", summary: "Finished content feeds directly into the social media management calendar." },
    ],
    faqs: [
      { question: "Is this different from the menu and recipe production service?", answer: "Yes. Menu and recipe production focuses on core menu assets; this is ongoing, cadence-driven content built specifically for social formats." },
      { question: "Can this run without a separate social media management engagement?", answer: "Yes, though most clients pair the two so production and posting stay coordinated on one calendar." },
    ],
  },

  // ---------- GENERAL ----------
  {
    slug: "not-sure-what-you-need",
    pillar: "general",
    title: "Not Sure What You Need?",
    summary:
      "Tell us where the brand is stuck. We'll map it to the right service, or the right combination, before you commit to anything.",
    tags: ["Discovery call", "No commitment"],
    overview:
      "Most founders don't arrive already knowing whether their problem is legal, tech, marketing, or production, they just know something is slowing the brand down. Tell us what's going on: a launch that keeps slipping, a franchisee asking questions you can't answer, a menu nobody's photographed properly. We'll map it to the right service, or the right combination, before you commit to anything.",
    deliverables: [
      "A no-obligation discovery call to map your actual problem",
      "A recommendation across legal, tech, marketing, or production, whichever fits",
      "An honest answer if the right move is a smaller step than a full engagement",
    ],
    process: [
      { title: "Tell us what's going on", summary: "Describe the problem in your own words, we don't need it pre-sorted into a service category." },
      { title: "We map it", summary: "We identify which pillar, or combination of pillars, actually addresses what's slowing you down." },
      { title: "You get a recommendation", summary: "A clear next step, scoped honestly, even if that step is smaller than a full engagement." },
    ],
    faqs: [
      { question: "What if my problem touches more than one pillar?", answer: "That's common, a franchise launch usually touches legal, tech, and marketing at once. We'll scope across pillars rather than force it into one." },
      { question: "Does this call cost anything or commit me to a package?", answer: "No. It's a discovery conversation, not a sales pitch for a fixed package." },
    ],
  },
];

export const products: Product[] = [
  {
    slug: "queue-reservations",
    name: "Q",
    tagline: "Skip the clipboard",
    summary:
      "Queue and reservation management for the software suite. A guest gives their name and phone number, gets a WhatsApp wait estimate, then a table-ready alert.",
    audience:
      "Dine-in restaurants and cafes with peak-hour queues and no structured way to manage them.",
    features: [
      "WhatsApp queue number and wait-time estimate",
      "Table-ready alert, no app download required",
      "Works with the host stand you already have",
      "No new hardware to install",
    ],
    overview:
      "Peak-hour queues are usually managed with a clipboard, a whiteboard, or nothing at all. Q replaces that with a simple flow: the host takes a name and phone number, the guest gets a queue number and an estimated wait by WhatsApp, and a table-ready alert when it's their turn. No app to download, no hardware to install.",
    color: { name: "Yellow", accent: "#fcb900", soft: "#fff8e0", text: "#746019" },
    problem: {
      headline: "Guests who can't see the line, leave the line",
      body:
        "During peak hours, a guest walks up, sees a crowd, has no idea how long the wait actually is, and walks to the next restaurant instead. A whiteboard or a clipboard doesn't tell them anything, and your host doesn't have time to give every guest a personal estimate. Every one of those walk-aways is a table you never got the chance to seat.",
    },
    metrics: [
      { value: "Live", label: "queue position, not a guess", context: "Every guest sees roughly how long the wait is, instead of eyeballing a crowd at the door." },
      { value: "Real-time", label: "queue on one host dashboard", context: "Staff see who's next without a paper list or a whiteboard to keep erasing and rewriting." },
      { value: "0", label: "apps for the guest to download", context: "The entire guest experience runs over WhatsApp, which almost everyone walking in already has installed." },
    ],
    howItWorks: [
      { title: "Guest checks in", summary: "The host stand captures name and phone number, nothing else required from the guest." },
      { title: "WhatsApp confirmation", summary: "The guest instantly receives their queue number and an estimated wait time." },
      { title: "Table-ready alert", summary: "As the queue moves, the guest gets a WhatsApp alert the moment their table is ready." },
      { title: "Host dashboard", summary: "Staff see the live queue, estimated wait times, and can adjust as tables turn over." },
    ],
    faqs: [
      { question: "Does the guest need to install an app?", answer: "No. Everything runs over WhatsApp, which almost every guest already has." },
      { question: "Do we need new hardware at the host stand?", answer: "No. It works with the host stand and device you already use to seat guests." },
      { question: "Is this available on its own, without a full engagement?", answer: "Yes. You can opt into Q inside the software suite, pay for only this product, and cancel anytime." },
    ],
  },
  {
    slug: "feedback-analytics",
    name: "Feedbackly",
    tagline: "Know what guests actually think, per outlet",
    summary:
      "Feedback and outlet analytics for the software suite, so a franchise can see guest sentiment per location instead of relying on aggregator reviews alone.",
    audience:
      "Franchise groups who need to compare guest experience across outlets, not just read Zomato and Google reviews.",
    features: [
      "Feedback collection built for multi-outlet chains",
      "Per-outlet sentiment and trend reporting",
      "Multi-tenant, so any outlet can be added",
      "Reporting leadership can actually use for outlet reviews",
    ],
    overview:
      "Aggregator reviews tell you what the public sees, not what's actually happening inside each outlet. Feedbackly collects direct guest feedback per location and rolls it into reporting leadership can use to compare outlets, spot problems early, and hold franchise partners accountable.",
    color: { name: "Coral", accent: "#ff9999", soft: "#ffc6c6", text: "#600000" },
    problem: {
      headline: "By the time you read the review, the guest is already gone",
      body:
        "A public 1-star review is the last stage of a problem that could have been caught weeks earlier if anyone inside the business had a structured way to hear it. Aggregator reviews are self-selected, public, and averaged across the whole brand, so one struggling outlet quietly drags down the average while leadership has no way to isolate which location is actually the problem.",
    },
    metrics: [
      { value: "Direct", label: "feedback, not just public reviews", context: "Guests can tell you what happened while you can still fix it, not after they've already posted." },
      { value: "Early", label: "warning before it becomes a review", context: "A repeat complaint at one outlet shows up in your reports first, not in a 1-star review." },
      { value: "Per-outlet", label: "sentiment, not brand-wide average", context: "Every response is tied to a specific location, so one strong outlet can't mask a struggling one." },
    ],
    howItWorks: [
      { title: "Feedback capture", summary: "Guests are prompted for feedback at the right moment, in-store or post-visit." },
      { title: "Outlet-level tagging", summary: "Every response is tied to a specific outlet, not averaged across the whole brand." },
      { title: "Trend reporting", summary: "Leadership sees sentiment trends per outlet, per region, and across the full network." },
      { title: "Action tracking", summary: "Recurring issues at a specific outlet surface early, before they become aggregator reviews." },
    ],
    faqs: [
      { question: "How is this different from just reading our Google and Zomato reviews?", answer: "Aggregator reviews are self-selected and public. This captures direct feedback per outlet and gives leadership a structured way to compare locations." },
      { question: "Can new outlets be added as we grow?", answer: "Yes. It's built to keep growing with you, so adding a new outlet never means starting over." },
      { question: "Do we need a separate account for this product?", answer: "No. Feedbackly lives inside the same software suite account as the other products. You can opt in, pay for this one product, and cancel anytime." },
    ],
  },
  {
    slug: "loyalty",
    name: "Loyalty",
    tagline: "Give first-time guests a reason to come back",
    summary:
      "Loyalty and rewards for the software suite, built to work across every outlet instead of being reinvented per brand or franchise partner.",
    audience:
      "F&B brands with repeat-visit potential and no structured way to reward it yet.",
    features: [
      "Rewards that work the same across every outlet",
      "Built for franchise networks, not single-store loyalty",
      "No dependency on a single POS vendor's loyalty module",
    ],
    overview:
      "Most loyalty tools are built for a single restaurant, then bolted onto a franchise network outlet by outlet. Loyalty is built the other way around: one rewards system that works identically whether a guest visits outlet one or outlet two hundred.",
    color: { name: "Teal", accent: "#0fbcb0", soft: "#c3faf5", text: "#187574" },
    problem: {
      headline: "A first-time guest has no reason to become a regular",
      body:
        "Most F&B brands spend real money getting a new guest through the door once, then have nothing structured to bring them back a second time. Without a rewards system, every visit resets to zero, and the brands doing the least to retain guests end up paying the most, over and over, for the same one-time acquisition.",
    },
    metrics: [
      { value: "Automatic", label: "point tracking, no punch cards", context: "Guests don't have to remember a card, a code, or a phone number they've used before." },
      { value: "Instant", label: "enrollment at checkout", context: "Joining takes a phone number, right when the guest is already paying, not a separate app download." },
      { value: "1", label: "rewards system across every outlet", context: "No re-implementing loyalty per franchise partner, and no dependency on a single POS vendor's module." },
    ],
    howItWorks: [
      { title: "Guest enrollment", summary: "Guests join once and their rewards carry across every outlet in the network." },
      { title: "Earn and redeem", summary: "Points or rewards accrue and redeem consistently, regardless of which outlet or franchise partner is involved." },
      { title: "Franchise-wide reporting", summary: "Leadership sees loyalty activity across the whole network, not siloed per outlet." },
    ],
    faqs: [
      { question: "Does loyalty work the same for company-owned and franchised outlets?", answer: "Yes. That consistency is the entire point, a guest's rewards work the same regardless of who operates the outlet." },
      { question: "Are we locked into a specific POS vendor to use this?", answer: "No. It's built to work independently of any single POS vendor's loyalty module." },
      { question: "Can we use only Loyalty?", answer: "Yes. You can activate only Loyalty in the software suite, pay for that product, and cancel anytime." },
    ],
  },
  {
    slug: "franchise-complaint-tracking",
    name: "Resolve",
    tagline: "Complaints that don't disappear into a WhatsApp group",
    summary:
      "Complaint tracking for the software suite, with store-level logs and resolution status visible to both franchisor and franchisee.",
    audience:
      "Franchise operators who currently track complaints through calls, messages, or nothing at all.",
    features: [
      "Store-level complaint logging",
      "Resolution tracking visible to franchisor and franchisee",
      "Built for franchise accountability, not a generic support ticket tool",
    ],
    overview:
      "In most franchise networks, a complaint about a specific outlet gets raised in a phone call or a WhatsApp group and then disappears. Resolve gives every complaint a record, an owner, and a resolution status, visible to both the franchisor and the franchisee responsible for fixing it.",
    color: { name: "Rose", accent: "#e893c9", soft: "#fde0f0", text: "#8a2e63" },
    problem: {
      headline: "A complaint that disappears into a chat thread never gets fixed",
      body:
        "A guest complains, someone forwards it to a WhatsApp group, and then it's gone, no owner, no deadline, no record. Multiply that across dozens of franchise partners and the franchisor has zero visibility into which outlets have a real, repeating problem versus a one-off bad day, until it's already cost the brand a public review or a franchisee relationship.",
    },
    metrics: [
      { value: "100%", label: "of complaints logged with an owner and status", context: "Every complaint gets a record from the moment it's raised, replacing ad hoc phone calls and chat threads." },
      { value: "Visible", label: "deadline for every complaint", context: "Franchisor and franchisee both see the same status, not just a promise made over the phone." },
      { value: "Pattern", label: "reporting across every outlet", context: "See which outlets get repeat complaints instead of hearing about it after a bad review." },
    ],
    howItWorks: [
      { title: "Complaint logged", summary: "A complaint against a specific outlet is recorded with full context, not lost in a chat thread." },
      { title: "Routed to the right owner", summary: "The responsible franchisee or outlet manager is notified and accountable for resolution." },
      { title: "Resolution tracked", summary: "Status is visible to the franchisor throughout, not just reported after the fact." },
      { title: "Pattern reporting", summary: "Leadership can see which outlets generate repeat complaints, and act on it." },
    ],
    faqs: [
      { question: "Can the franchisor see every complaint across every outlet?", answer: "Yes. That visibility is the core of the product, complaints don't stay siloed with the franchisee." },
      { question: "Is this a general support ticket tool?", answer: "No. It's purpose-built for franchisor and franchisee accountability, not a generic help desk." },
      { question: "Can we subscribe only to Resolve?", answer: "Yes. It is part of the software suite, but you can opt into just this product, pay for it separately, and cancel anytime." },
    ],
  },
];

export const segments: Segment[] = [
  {
    title: "Multi-outlet F&B chains",
    summary:
      "Franchise and company-owned restaurant groups, at any point in their growth, from a single outlet preparing to franchise to a chain running 200+ outlets across multiple countries.",
    examples: ["Cafe chains", "QSR groups", "Bakery franchises", "Cloud kitchens", "Casual dining"],
  },
  {
    title: "Private chefs & catering",
    summary:
      "Individuals and small teams who need a brand, a site, and content, not a franchise stack: private chefs, catering businesses, and personal culinary brands.",
    examples: ["Private chefs", "Catering businesses", "Personal culinary brands"],
  },
];

export const positioningPoints: PositioningPoint[] = [
  {
    label: "Who we serve",
    title: "F&B brands at every stage of the franchise journey",
    summary:
      "From a single outlet preparing to franchise to a 200+ outlet chain going international, plus private chefs and catering businesses building a brand of their own.",
  },
  {
    label: "What we build",
    title: "Paperwork, tech, marketing, and production, end to end",
    summary:
      "FSSAI and franchise paperwork, brand-native ordering and delivery, store locators, franchise and investor enquiry capture, campaigns, and studio-grade content.",
  },
  {
    label: "Where we help",
    title: "The gap between running one outlet and running a franchise",
    summary:
      "Compliance, regional menu and pricing rules, POS and CRM integration, queueing, feedback, loyalty, and complaint tracking across every outlet.",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    title: "For guests",
    summary:
      "Ordering, store discovery, rewards, local menus, campaigns, checkout, pickup, takeaway, delivery, and queue and reservation journeys.",
  },
  {
    title: "For operators",
    summary:
      "Outlet rules, item availability, kitchen status, prep timing, packaging constraints, staff workflows, complaint tracking, and launch checklists.",
  },
  {
    title: "For leadership",
    summary:
      "Compliance status, pilot scope, expansion roadmap, integration risk, analytics events, region readiness, and brand consistency decisions.",
  },
];

export const conversionProblems = [
  {
    title: "Your guest experience changes outlet by outlet",
    summary:
      "F&B chains often enter each city with different menus, prices, combos, hours, and fulfillment rules. Customers still expect one polished brand.",
  },
  {
    title: "Paperwork and compliance eat founder time",
    summary:
      "FSSAI registration, franchise agreements, and franchise model setup pull attention away from actually running the brand, and most agencies won't touch them.",
  },
  {
    title: "No system for queues, feedback, or loyalty",
    summary:
      "Guests wait without a queue number, feedback disappears into aggregator reviews, and there's rarely a structured reason for a first-time guest to come back.",
  },
  {
    title: "Generic software blocks premium brand design and franchise fit",
    summary:
      "Standard POS platforms and templated sites aren't built for a franchise rolling out city by city, and they cost more than a curated alternative built for the job.",
  },
];

export const outcomes = [
  "A brand-native ordering journey for web and app",
  "FSSAI registration and franchise paperwork handled end to end",
  "A region-aware menu model for pricing, language, tax, and availability",
  "A store locator and franchise or investor enquiry flow built into your site",
  "Standalone access to queue, feedback, loyalty, and complaint-tracking tools whenever you need them",
];

export const platformPillars: PlatformPillar[] = [
  {
    title: "Guest ordering layer",
    summary:
      "Custom web and app ordering that protects the brand while handling the operational details behind each outlet.",
    items: ["Pickup", "Takeaway", "Delivery", "Scheduled orders"],
  },
  {
    title: "Regional menu layer",
    summary:
      "Structured menu logic for chains that need regional pricing, local languages, outlet overrides, and product availability.",
    items: ["Regional pricing", "Languages", "Tax rules", "Outlet overrides"],
  },
  {
    title: "Restaurant stack layer",
    summary:
      "A connection layer for the systems already running the business, from POS and loyalty to CRM and analytics.",
    items: ["POS sync", "Rewards", "CRM events", "Analytics"],
  },
  {
    title: "Expansion rollout layer",
    summary:
      "Pilot-first implementation support so leadership, outlet managers, and franchise partners can expand with confidence.",
    items: ["Pilot stores", "Training", "Launch checks", "Expansion playbook"],
  },
];

export const expertiseSignals: ExpertiseSignal[] = [
  {
    title: "We speak restaurant operations",
    summary:
      "Prep time, item modifiers, outlet downtime, stock-outs, packaging rules, tax, delivery windows, and kitchen capacity are treated as product requirements.",
  },
  {
    title: "We handle the paperwork too",
    summary:
      "FSSAI registration, franchise agreements, and compliance are part of the engagement, not something we point you toward a lawyer for.",
  },
  {
    title: "We protect brand experience",
    summary:
      "The ordering flow, store locator, loyalty moments, and local menu pages are built to feel like your restaurant, not a generic software skin.",
  },
  {
    title: "We've done it at every scale",
    summary:
      "From a single outlet preparing to franchise to a 200+ outlet chain live in six countries, the same team the whole way.",
  },
];

export const restaurantFormats = [
  "Cafe chains",
  "QSR groups",
  "Bakery franchises",
  "Cloud kitchens",
  "Casual dining",
  "Dessert brands",
  "Multi-country franchise groups",
  "Single-outlet brands preparing to franchise",
  "Private chefs",
  "Catering businesses",
];

export const integrationAreas: IntegrationArea[] = [
  {
    title: "POS and billing",
    summary:
      "Plan order flow, item mapping, payment methods, tax behavior, and store-level exceptions before implementation.",
  },
  {
    title: "Loyalty and CRM",
    summary:
      "Connect rewards, wallet, offers, segmentation, and guest history without forcing every outlet into one campaign style.",
  },
  {
    title: "Delivery and fulfillment",
    summary:
      "Coordinate pickup, delivery partners, prep timing, store hours, kitchen capacity, and customer notifications.",
  },
  {
    title: "Reporting and analytics",
    summary:
      "Capture clean events for ordering, campaigns, menu performance, outlet comparison, and regional growth decisions.",
  },
];

export const clientProof: ClientProof[] = [
  {
    brand: "Chai Churi",
    href: "/case-studies/chai-churi-brand-site-and-store-locator",
    highlight: "200+ outlets, 60+ cities",
    detail:
      "20 lakh+ customers served, live in the USA, Canada, India, UK, Australia, and UAE. Brand site, store locator, and franchise enquiry flow.",
  },
  {
    brand: "Sardaar Ji Amritsari Kulcha",
    href: "/case-studies/sardaar-ji-first-outlet-website-and-franchise-readiness",
    highlight: "4.4★ from 145+ reviews",
    detail:
      "One outlet in Mohali, franchise enquiries open ahead of the next location.",
  },
  {
    brand: "Chef Aman Puri",
    href: "/case-studies/chef-aman-puri-personal-brand-and-catering-site",
    highlight: "Private chef & catering",
    detail:
      "Hosted dinners, events, and catering across Canada and the United States.",
  },
];

export const discoveryAgenda = [
  "Map your outlets, regions, menu differences, and paperwork status",
  "Identify gaps that block regional or international expansion",
  "Define the smallest valuable pilot across web, app, menu, paperwork, and marketing",
  "Estimate POS, loyalty, CRM, payment, and delivery integration complexity",
];

export const faqItems: FaqItem[] = [
  {
    question: "Do you replace our POS or restaurant management software?",
    answer:
      "No. We build the customer-facing and integration layers around your current stack when that is the right path.",
  },
  {
    question: "Is this a SaaS product?",
    answer:
      "Not primarily. Restrovate is a services agency first: paperwork, tech, marketing, and production for F&B brands. A few problems we saw repeatedly, like queue management, feedback, loyalty, and franchise complaint tracking, are also available as standalone products, sold on their own to any restaurant.",
  },
  {
    question: "Can the first engagement be small?",
    answer:
      "Yes. The recommended first step is a focused discovery and pilot scope for a small group of outlets.",
  },
  {
    question: "Who is the best fit?",
    answer:
      "F&B brands at any point in the franchise journey, from a single outlet preparing to franchise to a 200+ outlet chain going international, plus private chefs and catering businesses building a brand of their own.",
  },
  {
    question: "Do you help with FSSAI and franchise paperwork?",
    answer:
      "Yes. Compliance and franchise paperwork is one of our four service pillars, alongside tech, marketing, and production.",
  },
  {
    question: "We're not a restaurant chain. Do you still work with us?",
    answer:
      "Yes. We also build personal brand sites, personal branding, and production, like recipe and brand video and social content, for private chefs and catering businesses.",
  },
];

export const processSteps = [
  {
    title: "Restaurant expansion audit",
    summary:
      "Map outlets, menu rules, guest journeys, loyalty, fulfillment, compliance status, franchise constraints, and integration stack.",
  },
  {
    title: "Brand-native prototype",
    summary:
      "Create a clickable ordering, menu, rewards, and store experience before heavy build work begins.",
  },
  {
    title: "Custom implementation",
    summary:
      "Develop the website, mobile flows, restaurant rules, admin tools, paperwork, and integration layer with clean architecture.",
  },
  {
    title: "Pilot and expand",
    summary:
      "Launch with selected outlets, fix operator friction, measure outcomes, then expand region by region.",
  },
];

export const values = [
  "Brand fit before template speed",
  "Operational clarity before feature volume",
  "Franchise-stage flexibility before one-size systems",
  "Clean architecture before short-term hacks",
];

export const roles: Role[] = [
  {
    title: "Product Designer",
    location: "Remote, India",
    summary:
      "Design ordering and operator workflows for restaurant chains with strong visual identities.",
  },
  {
    title: "Full Stack Engineer",
    location: "Remote, India",
    summary:
      "Build Next.js, React Native, and integration-heavy systems for multi-outlet restaurant brands.",
  },
  {
    title: "Implementation Specialist",
    location: "Hybrid, Mumbai",
    summary:
      "Coordinate pilot rollouts, document outlet requirements, and support launch operations.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-restaurant-chains-outgrow-generic-ordering-platforms",
    title: "Why restaurant chains outgrow generic ordering platforms",
    excerpt:
      "A practical look at store rules, menu complexity, and brand expectations once a chain crosses ten outlets.",
    category: "Scale",
    readTime: "8 min read",
    image: "/assets/blogs/ordering-platforms.png",
    author: "Steve Vora",
    authorRole: "Restaurant Technology Strategist",
    publishedAt: "June 27, 2026",
    updatedAt: "June 27, 2026",
    deck:
      "Generic ordering tools are useful until restaurant operations become local, complex, and brand-sensitive. Here is where the breakage starts.",
    tags: ["Ordering", "Scale", "Franchise Operations"],
    tableOfContents: [
      "The ten-outlet inflection point",
      "Where generic platforms start to break",
      "What custom ordering should actually solve",
      "A practical readiness checklist",
    ],
    keyTakeaways: [
      "The issue is usually operational fit, not just checkout design.",
      "Store availability, modifiers, prep time, and fulfillment rules need to shape the menu before checkout.",
      "A pilot is safer than a full-chain platform migration.",
    ],
    sections: [
      {
        title: "The ten-outlet inflection point",
        body: [
          "Most F&B brands can make a generic ordering platform work when every outlet behaves roughly the same. The cracks appear when the brand crosses markets, formats, franchise owners, or local menu rules.",
          "At that point, ordering is no longer a simple catalog and cart problem. It becomes an operating layer that has to understand store hours, item availability, modifiers, prep capacity, delivery radius, tax behavior, and guest expectations.",
        ],
      },
      {
        title: "Where generic platforms start to break",
        body: [
          "The first symptom is usually customer confusion. A guest selects a store, sees unavailable items, adds notes for modifiers, reaches checkout, and only then discovers that an offer or pickup time does not apply.",
          "The second symptom is operator friction. Store teams call customers to correct orders, manually hide items, or invent workarounds because the platform does not understand how that outlet actually runs.",
        ],
        bullets: [
          "Menu rules live outside the ordering flow",
          "Modifiers become free-text notes instead of structured choices",
          "Offers and loyalty logic fail late in checkout",
          "Leadership cannot compare outlet performance cleanly",
        ],
      },
      {
        title: "What custom ordering should actually solve",
        body: [
          "Custom ordering does not mean building every feature from scratch. It means designing the guest journey around the restaurant rules that matter most for the brand.",
          "For a cafe chain, that might mean pickup time slots and milk modifiers. For a QSR brand, it might mean combos, kitchen capacity, and regional pricing. For a bakery franchise, it might mean pre-order cutoffs and item availability by outlet.",
        ],
      },
      {
        title: "A practical readiness checklist",
        body: [
          "Before investing in a custom ordering layer, a growing chain should map the operational rules that affect the guest experience. If those rules are different across stores, they belong in the product model.",
        ],
        bullets: [
          "Can each outlet define availability without breaking brand consistency?",
          "Can customers see valid pickup times before checkout?",
          "Can modifiers be structured instead of typed into notes?",
          "Can loyalty and offers be validated before payment?",
          "Can leadership pilot with a few stores before expanding?",
        ],
      },
    ],
  },
  {
    slug: "designing-menus-for-regions-languages-and-outlet-realities",
    title: "Designing menus for regions, languages, and outlet realities",
    excerpt:
      "How regional menus can stay flexible without turning the customer experience into a patchwork.",
    category: "Localization",
    readTime: "7 min read",
    image: "/assets/blogs/regional-menus.png",
    author: "Daksh Nauni",
    authorRole: "Product Architect",
    publishedAt: "June 27, 2026",
    updatedAt: "June 27, 2026",
    deck:
      "A scalable menu is not a spreadsheet. It is a hierarchy of brand standards, local rules, outlet overrides, and compliance data.",
    tags: ["Menus", "Localization", "Global Expansion"],
    tableOfContents: [
      "Why menu localization gets messy",
      "The menu hierarchy growing brands need",
      "How to keep flexibility from becoming brand drift",
      "What to validate before launch",
    ],
    keyTakeaways: [
      "Regional menus need inheritance, not duplicated spreadsheets.",
      "Compliance data should be modeled separately from marketing content.",
      "Outlet overrides need guardrails so franchise teams can move fast without damaging the brand.",
    ],
    sections: [
      {
        title: "Why menu localization gets messy",
        body: [
          "When a restaurant brand expands across regions, the menu becomes more than a list of items. It carries pricing, taxes, item names, dietary information, allergens, spice levels, availability, and local merchandising priorities.",
          "The common failure pattern is copying a base menu into separate spreadsheets for each market. It works for a short period, then every market starts drifting away from the source of truth.",
        ],
      },
      {
        title: "The menu hierarchy growing brands need",
        body: [
          "A better model treats the menu as a hierarchy. Global items define the brand standard. Countries define compliance and currency. Cities can define pricing and availability patterns. Outlets can define stock and kitchen status.",
          "This lets the brand preserve consistency while still giving regional teams enough flexibility to operate realistically.",
        ],
        bullets: [
          "Global layer for item identity and brand standards",
          "Country layer for tax, currency, language, and compliance",
          "City layer for pricing and campaign differences",
          "Outlet layer for availability and kitchen reality",
        ],
      },
      {
        title: "How to keep flexibility from becoming brand drift",
        body: [
          "Local teams need control, but not unlimited control. The safest structure is controlled overrides: allow teams to change what they need, but keep sensitive fields behind approval rules.",
          "For example, an outlet manager may hide an item for the day, while a country manager controls allergen information and a brand team controls item photography.",
        ],
      },
      {
        title: "What to validate before launch",
        body: [
          "Before going live in a new market, the menu system should validate missing translations, tax rules, compliance fields, outlet availability, and campaign eligibility.",
        ],
        bullets: [
          "Are all customer-facing names and descriptions translated?",
          "Are allergens and dietary tags validated by market?",
          "Can outlets hide unavailable items without changing the global menu?",
          "Can pricing differ by region without duplicating the whole menu?",
        ],
      },
    ],
  },
  {
    slug: "the-integration-checklist-before-connecting-your-pos",
    title: "The integration checklist before connecting your POS",
    excerpt:
      "Questions every operator should answer before joining ordering, loyalty, POS, and reporting systems.",
    category: "Integrations",
    readTime: "7 min read",
    image: "/assets/blogs/pos-integration-checklist.png",
    author: "Steve Vora",
    authorRole: "Restaurant Technology Strategist",
    publishedAt: "June 27, 2026",
    updatedAt: "June 27, 2026",
    deck:
      "POS integration gets expensive when teams connect systems before mapping order flow, menu sync, customer identity, and reporting needs.",
    tags: ["POS", "Integrations", "Operations"],
    tableOfContents: [
      "Why POS integration is rarely just a connector",
      "The questions to answer before build",
      "What data should flow both ways",
      "How to pilot integrations safely",
    ],
    keyTakeaways: [
      "A POS integration should start with operating rules, not API endpoints.",
      "Menu, tender, tax, rewards, and refund behavior should be mapped before build.",
      "Pilot stores should represent real operating differences.",
    ],
    sections: [
      {
        title: "Why POS integration is rarely just a connector",
        body: [
          "Many teams think POS integration means sending orders from a website into the billing system. In practice, it touches menu structure, modifiers, taxes, payment methods, customer identity, loyalty, kitchen workflow, and reporting.",
          "If those behaviors are not mapped early, the integration works technically but fails operationally.",
        ],
      },
      {
        title: "The questions to answer before build",
        body: [
          "The most useful integration planning happens before code. Operators, finance, marketing, and store teams should agree on what the POS must own and what the ordering layer must own.",
        ],
        bullets: [
          "Which system is the source of truth for menu items?",
          "How are modifiers and combos represented in the POS?",
          "What happens when an item is available online but unavailable in-store?",
          "How are refunds, wallet credits, and loyalty points handled?",
          "Which events does leadership need for reporting?",
        ],
      },
      {
        title: "What data should flow both ways",
        body: [
          "Order data is only one part of the integration. A useful restaurant stack also needs clean menu sync, customer events, reward eligibility, payment status, preparation status, and reporting signals.",
          "The goal is not to connect everything. The goal is to connect the data that prevents customer confusion and operator rework.",
        ],
      },
      {
        title: "How to pilot integrations safely",
        body: [
          "Start with stores that expose the real complexity of the chain. Pick one high-volume outlet, one smaller franchise outlet, and one outlet with unusual menu or fulfillment rules.",
          "That pilot mix reveals edge cases early, before the integration becomes a chain-wide dependency.",
        ],
        bullets: [
          "Test order creation and cancellation",
          "Test menu sync and unavailable items",
          "Test rewards and offer validation",
          "Test reports against real store reconciliation",
        ],
      },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "chai-churi-brand-site-and-store-locator",
    title: "A brand website built for a 200+ outlet chai chain going global",
    client: "Chai Churi",
    category: "Brand website, store locator, and franchise enquiry",
    outletCount: "200+ outlets",
    region: "60+ cities across India, plus the USA, Canada, UK, Australia, and UAE",
    timeline: "Ongoing partnership",
    summary:
      "Chai Churi scaled past 200 outlets and six countries on the strength of its kulhad chai and nostalgia-led brand. It needed a website that could carry that brand into a store locator, franchise enquiries, and a menu built for a chain this size, not a single-cafe template.",
    result: "Live brand site with menu, store locator, and franchise enquiry flow",
    image: "/assets/case-studies/chai-churi-site-snapshot.png",
    infographicImage: "/assets/case-studies/multi-region-menu-before-after.png",
    challenge:
      "A brand operating 200+ outlets across 60+ cities and six countries needed its website to do more than describe the menu. It had to help guests find their nearest outlet, help prospective franchisees start a conversation, and represent a Punjab-born brand credibly to an international audience.",
    whyItMattered:
      "At this scale, the website is often a franchise partner's or investor's first serious look at the brand. A generic template site undersells 200+ outlets of proof, and a site with no store locator or franchise flow leaves real enquiries with nowhere to go.",
    executiveSummary:
      "Chai Churi didn't need a bigger menu page. It needed a website built for the size of business it had actually become, one that could carry a store locator, franchise enquiries, and a brand story credible enough for global expansion.",
    situation:
      "Chai Churi had built genuine scale, 200+ outlets, 60+ cities, over a thousand staff, 20 lakh+ customers served, and a live presence across the USA, Canada, India, UK, Australia, and UAE, largely on the strength of product and word of mouth. The website needed to catch up to that scale.",
    diagnosis:
      "The gap wasn't content, it was structure. A brand this size needs a store locator that actually helps a guest find their nearest kulhad chai, a franchise enquiry flow that captures serious leads instead of a generic contact form, and a menu and brand story that reads as confidently global as the business already is.",
    implementationNarrative:
      "We built the brand website around three jobs: help a guest find and choose an outlet, help a prospective franchisee start a real conversation, and tell the brand's own story, Punjab-born chai culture built for global growth, with the visual confidence it had earned.",
    impactNarrative:
      "The site is live and in production use today, carrying the brand's menu, store locator, and franchise enquiry flow across its Indian and international markets. We don't have measured before and after numbers to report yet, and that's tracked as open work in our own documentation rather than glossed over here.",
    metrics: [
      { value: "200+", label: "outlets live", context: "Across North India, with recent expansion into Jammu and Rajasthan." },
      { value: "60+", label: "cities served", context: "Domestic footprint spanning Punjab, Delhi, Haryana, Himachal Pradesh, Uttarakhand, and Uttar Pradesh." },
      { value: "20L+", label: "customers served", context: "Publicly stated lifetime customers served, per the live site." },
      { value: "6", label: "countries live", context: "USA, Canada, India, UK, Australia, and UAE." },
    ],
    problems: [
      "No store locator guests could actually use to find their nearest outlet",
      "Franchise enquiries had nowhere structured to land",
      "The site didn't read as credibly global as the business already was",
      "Menu and brand content needed to work for a domestic and an international audience at once",
    ],
    solution: [
      {
        title: "Store locator",
        bullets: [
          "City and region-based outlet search",
          "Built to scale past 200 listed outlets",
          "Consistent with the brand's visual identity",
        ],
      },
      {
        title: "Franchise enquiry flow",
        bullets: [
          "A dedicated path for franchise interest, not a generic contact form",
          "Structured intake instead of an email address in the footer",
          "Built to route serious leads, not just collect them",
        ],
      },
      {
        title: "Brand and menu presentation",
        bullets: [
          "Menu built around signature items like the kulhad chai and churis",
          "Brand story framed for both domestic and international visitors",
          "Careers and company information alongside the guest-facing site",
        ],
      },
    ],
    rationale: [
      {
        title: "We built for the business Chai Churi already was",
        summary:
          "200+ outlets and six countries is not a starter-brand website problem. The site needed to carry that scale credibly from the first screen.",
      },
      {
        title: "We treated franchise enquiries as a funnel, not a form field",
        summary:
          "At this scale, a generic contact page loses serious franchise leads. The enquiry flow needed to be a first-class part of the site.",
      },
      {
        title: "We designed the locator for real use, not decoration",
        summary:
          "With outlets in 60+ cities, a store locator only earns its place if a guest can actually find the nearest one quickly.",
      },
    ],
    impact: [
      { value: "Store locator", label: "Shipped and live", detail: "Guests can search by city and region across the full outlet network." },
      { value: "Franchise flow", label: "Shipped and live", detail: "A structured enquiry path replaces the previous generic contact route." },
      { value: "6 countries", label: "Represented on one site", detail: "USA, Canada, India, UK, Australia, and UAE presence carried by a single brand experience." },
    ],
    infographic: [
      { label: "Store discovery", before: "No structured locator", after: "City and region-based search" },
      { label: "Franchise enquiries", before: "Generic contact form", after: "Dedicated enquiry flow" },
      { label: "Brand presentation", before: "Domestic-only framing", after: "Built for a global audience" },
    ],
  },
  {
    slug: "sardaar-ji-first-outlet-website-and-franchise-readiness",
    title: "A first-outlet website built to franchise, for Sardaar Ji Amritsari Kulcha",
    client: "Sardaar Ji Amritsari Kulcha",
    category: "Brand website and franchise enquiry",
    outletCount: "1 outlet (Aerocity, Mohali)",
    region: "Punjab, India",
    timeline: "Ongoing",
    summary:
      "A single-outlet Amritsari kulcha brand with a strong local reputation, 4.4 stars from 145+ reviews, needed a website that looked ready to franchise before its second outlet even opened.",
    result: "Live brand site with menu, ordering info, and franchise enquiry form",
    image: "/assets/case-studies/sardaar-ji-site-snapshot.png",
    infographicImage: "/assets/case-studies/cafe-chain-before-after.png",
    challenge:
      "Sardaar Ji had one outlet and a loyal following, built on made-to-order kulchas with no shortcuts. The brand wanted to start franchising, but a single-location business usually doesn't have a website that reads as bigger than one shop with a phone number.",
    whyItMattered:
      "A prospective franchisee's or new customer's first impression of a one-outlet brand is almost entirely the website. Without a credible site and a real enquiry channel, franchise interest has no structured place to go, and the brand's actual quality and reviews don't carry over.",
    executiveSummary:
      "Sardaar Ji is the other bookend from Chai Churi: one outlet, not two hundred, and the job was to build a site that could carry the brand into franchising rather than describe it after the fact.",
    situation:
      "The brand was operating one outlet in Aerocity, Mohali, with strong reviews, 4.4 stars from 145+ Google ratings, and a clear next step: open a second location and start franchising. What it didn't have yet was a website that looked ready for that.",
    diagnosis:
      "A one-outlet brand doesn't need a 200-outlet feature set. It needs a menu, clear ordering information, and, critically, a real franchise enquiry channel that signals the brand is actively growing, not just running one shop.",
    implementationNarrative:
      "We built a focused brand site: the full kulcha menu with pricing, dine-in and ordering information including delivery partner links, and a franchise enquiry form as a first-class element of the site rather than an afterthought.",
    impactNarrative:
      "The site is live, with the franchise enquiry form already active ahead of the brand's next announced location. As with Chai Churi, we're not reporting invented conversion numbers here, the work shipped, and the results get added once they exist.",
    metrics: [
      { value: "1", label: "outlet live", context: "Aerocity, Mohali, the brand's founding location." },
      { value: "4.4★", label: "Google rating", context: "From 145+ reviews at the time of writing." },
      { value: "Next location", label: "franchise enquiry open", context: "The site carries an active franchise enquiry form ahead of outlet two." },
      { value: "7 days", label: "a week of service", context: "8:30 AM to 10:00 PM daily, dine-in, takeaway, and delivery." },
    ],
    problems: [
      "No structured way for franchise interest to reach the brand",
      "A one-outlet business needed to look ready to scale, not just operate",
      "Menu, pricing, and ordering information were scattered across delivery apps and word of mouth",
      "Nothing on the brand's actual reputation, 4.4 stars from 145+ reviews, was visible on its own site",
    ],
    solution: [
      {
        title: "Full brand menu",
        bullets: [
          "Every kulcha variant with pricing",
          "Combos and lassi listed alongside mains",
          "Built to extend cleanly to a second outlet's menu later",
        ],
      },
      {
        title: "Ordering and visit information",
        bullets: [
          "Dine-in hours and location",
          "Swiggy and Zomato delivery links",
          "Direct phone ordering",
        ],
      },
      {
        title: "Franchise enquiry form",
        bullets: [
          "A dedicated franchise interest path from outlet one",
          "Signals active growth ahead of location two",
          "Structured intake instead of a phone-only enquiry",
        ],
      },
    ],
    rationale: [
      {
        title: "We built for outlet two, not just outlet one",
        summary:
          "A franchise enquiry form only makes sense if it's there before you need it. We built it in from the first version of the site.",
      },
      {
        title: "We kept the menu honest to the product",
        summary:
          "Sardaar Ji's whole pitch is no shortcuts, made fresh to order. The site needed to represent that directly, not with stock food photography.",
      },
      {
        title: "We made the reputation visible",
        summary:
          "A 4.4-star rating from 145+ reviews is real proof. It needed to live on the brand's own site, not just on Google.",
      },
    ],
    impact: [
      { value: "Franchise form", label: "Shipped and live", detail: "Active ahead of the brand's next announced location." },
      { value: "Full menu", label: "Shipped and live", detail: "Every kulcha variant, combo, and price point represented." },
      { value: "1 to next", label: "Site built to extend", detail: "Structured so a second outlet's information can be added without a rebuild." },
    ],
    infographic: [
      { label: "Franchise enquiries", before: "Phone or walk-in only", after: "Structured form on site" },
      { label: "Menu and pricing", before: "Spread across delivery apps", after: "One brand-owned menu page" },
      { label: "Reputation", before: "Visible only on Google", after: "Carried on the brand's own site" },
    ],
  },
  {
    slug: "chef-aman-puri-personal-brand-and-catering-site",
    title: "A personal brand site for a private chef and catering business",
    client: "Chef Aman Puri",
    category: "Personal branding and catering site",
    outletCount: "Private chef & catering, no fixed outlets",
    region: "Canada and the United States",
    timeline: "Ongoing",
    summary:
      "Chef Aman Puri runs private dinners, hosted weekends, and full-scale catering across Canada and the US. The brand needed a site as polished and personal as the hospitality it sells, with services, philosophy, and a real path to booking.",
    result: "Live personal brand site with services, philosophy, and a booking path",
    image: "/assets/case-studies/chef-aman-puri-site-snapshot.png",
    infographicImage: "/assets/case-studies/rewards-crm-before-after.png",
    challenge:
      "Aman Puri's business isn't an outlet chain, it's a private chef and catering practice built on trust, personalization, and word of mouth across Mississauga, Vancouver, Calgary, and beyond. That's hard to convey through a phone number and a few photos.",
    whyItMattered:
      "For a private chef and catering brand, the website carries the entire first impression, there's no storefront to walk past. It had to communicate the same warmth and precision as the service itself, or the brand's actual quality wouldn't land before a booking conversation even started.",
    executiveSummary:
      "This is the clearest example of Restrovate's second service line: not a franchise chain, but a personal culinary brand that needed the same care in its digital presence that it puts into a menu for a hosted dinner.",
    situation:
      "The brand had strong word-of-mouth demand for private dinners, hosted weekends, and catering, but no site that represented the six services on offer or made booking straightforward for a corporate or family client discovering the brand for the first time.",
    diagnosis:
      "A personal chef brand sells trust before it sells a menu. The site needed to lead with philosophy and personalization, lay out the actual service breadth, private chef, catering, events planning, custom menus, hospitality consultation, and personal meal planning, and make the booking path obvious.",
    implementationNarrative:
      "We built the site around the brand's own voice, warm and polished food experiences for gatherings across Canada and the US, with a clear services breakdown, a philosophy section, regional testimonials, an FAQ for logistics, and a direct contact and booking call-to-action.",
    impactNarrative:
      "The site is live and serving as the brand's primary booking and credibility surface. In line with how we're reporting all three of these case studies, we're not attaching invented performance numbers, the deliverable is real, and the metrics aren't fabricated to fill a template.",
    metrics: [
      { value: "6", label: "services listed", context: "Private chef, catering, events planning, custom menus, hospitality consultation, and personal meal planning." },
      { value: "2", label: "countries served", context: "Canada and the United States." },
      { value: "1", label: "unified brand site", context: "Replacing scattered word-of-mouth and direct-message booking." },
      { value: "0 outlets", label: "by design", context: "A personal chef and catering practice, not a franchise chain, a different segment we serve." },
    ],
    problems: [
      "No single site represented the full range of services on offer",
      "Booking ran entirely through informal phone and message contact",
      "Nothing communicated the brand's philosophy before a client got on a call",
      "Regional trust across Mississauga, Vancouver, Calgary, and beyond had no place to live online",
    ],
    solution: [
      {
        title: "Services breakdown",
        bullets: [
          "All six offerings laid out clearly",
          "Private dinners distinguished from full catering",
          "Hospitality consultation and meal planning given equal billing",
        ],
      },
      {
        title: "Brand philosophy and positioning",
        bullets: [
          "Hospitality that feels attentive without feeling overworked",
          "Personalization framed around dietary needs and cultural traditions",
          "Voice built for affluent household and corporate clients alike",
        ],
      },
      {
        title: "Booking and trust surface",
        bullets: [
          "Direct contact and booking call-to-action",
          "Regional testimonials from real markets served",
          "FAQ addressing logistics and customization upfront",
        ],
      },
    ],
    rationale: [
      {
        title: "We led with philosophy, not a menu grid",
        summary:
          "A private chef sells an experience before a dish list. The site needed to earn trust in the first screen.",
      },
      {
        title: "We gave every service equal weight",
        summary:
          "Hospitality consultation and personal meal planning are real revenue lines, not footnotes to catering.",
      },
      {
        title: "We made booking a clear next step, not a search",
        summary:
          "A client who's convinced should never have to hunt for how to actually reach the brand.",
      },
    ],
    impact: [
      { value: "6 services", label: "Represented on one site", detail: "Every offering now has its own clear description." },
      { value: "Booking CTA", label: "Shipped and live", detail: "A direct contact and booking path replaces informal messaging as the front door." },
      { value: "2 markets", label: "Canada and US", detail: "Both served under one consistent brand presentation." },
    ],
    infographic: [
      { label: "Service clarity", before: "Word of mouth only", after: "Six services listed clearly" },
      { label: "Booking path", before: "Informal calls and messages", after: "Direct contact and booking CTA" },
      { label: "Brand trust", before: "No online presence", after: "Philosophy, services, and testimonials on one site" },
    ],
  },
];
