export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  summary: string;
  tags: string[];
};

export type InsightCard = {
  title: string;
  summary: string;
  image: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  author: "Steve Vora" | "Daksh Nauni";
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
  quote: {
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

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  brand: string;
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
  name: "Restro Tech",
  tagline:
    "Restaurant technology experts for F&B chains scaling regionally or globally.",
  email: "hello@restro.tech",
};

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
];

export const services: Service[] = [
  {
    title: "Branded ordering website and app",
    summary:
      "A custom guest ordering experience for pickup, takeaway, delivery, scheduled orders, combos, modifiers, and outlet-level availability.",
    tags: ["Web ordering", "Mobile app", "Guest checkout"],
  },
  {
    title: "Regional menu and outlet logic",
    summary:
      "Menu, pricing, tax, language, store hours, kitchen status, and product availability rules for brands expanding city by city or country by country.",
    tags: ["Menu rules", "Localization", "Outlet logic"],
  },
  {
    title: "POS, loyalty, and CRM integration",
    summary:
      "Integration planning and implementation for POS, loyalty, CRM, payments, delivery aggregators, customer events, and reporting.",
    tags: ["POS", "Rewards", "Customer data"],
  },
  {
    title: "Franchise rollout and scale playbook",
    summary:
      "Pilot planning, operator workflows, launch checklists, training notes, release planning, and expansion support for franchise teams.",
    tags: ["Pilot stores", "Ops rollout", "Expansion"],
  },
];

export const painPoints = [
  "Menus, prices, taxes, and offers change by city, region, franchise owner, and kitchen capability.",
  "Generic ordering platforms cannot protect the brand experience when every market needs different rules.",
  "POS, loyalty, CRM, payment, delivery, and reporting systems rarely fit together cleanly.",
  "Regional and global expansion adds language, currency, compliance, store operations, and launch pressure.",
];

export const fakeBrands = [
  "Brew District",
  "Casa Crust",
  "Nori Lane",
  "Kettle Yard",
  "Toast Foundry",
  "Urban Tandoor",
  "Miso Club",
  "Roast & Roll",
];

export const conversionStats = [
  {
    value: "10 to 500",
    label: "outlet F&B chains we are built to serve",
  },
  {
    value: "4 offers",
    label: "ordering, regional menus, integrations, rollout",
  },
  {
    value: "1 expert team",
    label: "focused only on restaurant expansion technology",
  },
];

export const positioningPoints: PositioningPoint[] = [
  {
    label: "Who we serve",
    title: "Newer F&B chains with 10 to 500 outlets",
    summary:
      "Cafe, QSR, bakery, cloud kitchen, casual dining, dessert, and franchise brands expanding beyond their first markets.",
  },
  {
    label: "What we build",
    title: "Custom ordering, menu, loyalty, and rollout systems",
    summary:
      "Brand-native web and app ordering, regional menu logic, POS and CRM integrations, store locator, rewards, and launch workflows.",
  },
  {
    label: "Where we help",
    title: "Regional and global expansion complexity",
    summary:
      "Different markets, languages, outlet owners, item availability, taxes, payments, delivery rules, and customer expectations.",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    title: "For guests",
    summary:
      "Ordering, store discovery, rewards, local menus, campaigns, checkout, pickup, takeaway, and delivery journeys.",
  },
  {
    title: "For operators",
    summary:
      "Outlet rules, item availability, kitchen status, prep timing, packaging constraints, staff workflows, and launch checklists.",
  },
  {
    title: "For leadership",
    summary:
      "Pilot scope, expansion roadmap, integration risk, analytics events, region readiness, and brand consistency decisions.",
  },
];

export const conversionProblems = [
  {
    title: "Your guest experience changes outlet by outlet",
    summary:
      "New F&B chains often enter each city with different menus, prices, combos, hours, and fulfillment rules. Customers still expect one polished brand.",
  },
  {
    title: "Operators need restaurant rules, not admin hacks",
    summary:
      "Store teams need prep time, item availability, kitchen status, packaging limits, modifiers, and tax behavior that match real restaurant operations.",
  },
  {
    title: "Generic software blocks premium brand design",
    summary:
      "Templates can launch quickly, but growth-stage restaurant brands need custom journeys, brand-specific UX, and deeper integration control.",
  },
];

export const outcomes = [
  "A brand-native ordering journey for web and app",
  "A region-aware menu model for pricing, language, tax, and availability",
  "A store locator that supports city, region, and franchise expansion",
  "A realistic integration plan for POS, rewards, CRM, and reporting",
  "A rollout plan that starts with pilot outlets and expands cleanly",
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
    title: "We design around franchise reality",
    summary:
      "A chain may share one brand, but each market can have different owners, menus, languages, payment habits, and launch readiness.",
  },
  {
    title: "We protect brand experience",
    summary:
      "The ordering flow, store locator, loyalty moments, and local menu pages are built to feel like your restaurant, not a generic software skin.",
  },
  {
    title: "We plan before we build",
    summary:
      "The first engagement clarifies outlet rules, integration risk, pilot scope, and expansion priorities before engineering starts.",
  },
];

export const restaurantFormats = [
  "Cafe chains",
  "QSR groups",
  "Bakery franchises",
  "Cloud kitchens",
  "Casual dining",
  "Dessert brands",
  "Food court operators",
  "Multi-country franchise groups",
];

export const integrationAreas: IntegrationArea[] = [
  {
    title: "POS and billing",
    summary:
      "Plan order flow, item mapping, tender types, tax behavior, and store-level exceptions before implementation.",
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

export const proofMetrics = [
  {
    value: "10 to 500",
    label: "outlet chains we focus on",
  },
  {
    value: "4 layers",
    label: "guest, menu, stack, rollout",
  },
  {
    value: "F&B only",
    label: "restaurant expertise by design",
  },
  {
    value: "0 SaaS",
    label: "custom implementation, not software resale",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The first audit made our expansion gaps obvious. We finally saw how menu rules, loyalty, and store ops needed to connect before entering a new region.",
    name: "Aarav Mehta",
    role: "Founder",
    brand: "Brew District",
  },
  {
    quote:
      "The prototype felt like our brand, not a software template. It helped our leadership team approve the digital ordering direction fast.",
    name: "Maya Fernandes",
    role: "Growth Lead",
    brand: "Casa Crust",
  },
  {
    quote:
      "They thought about operators as much as customers. That mattered because every outlet has small differences that usually break launch plans.",
    name: "Kabir Sethi",
    role: "Franchise Operations",
    brand: "Urban Tandoor",
  },
];

export const discoveryAgenda = [
  "Map your outlet count, regions, menu differences, and ordering channels",
  "Identify gaps that block regional or international expansion",
  "Define the smallest valuable pilot across web, app, menu, and integrations",
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
      "No. Restro Tech is positioned as a development and rollout partner for brands that need custom implementation.",
  },
  {
    question: "Can the first engagement be small?",
    answer:
      "Yes. The recommended first step is a focused discovery and pilot scope for a small group of outlets.",
  },
  {
    question: "Who is the best fit?",
    answer:
      "Newer cafe, QSR, bakery, cloud kitchen, and franchise F&B brands with 10 to 500 outlets or a clear regional expansion plan.",
  },
];

export const processSteps = [
  {
    title: "Restaurant expansion audit",
    summary:
      "Map outlets, menu rules, guest journeys, loyalty, fulfillment, franchise constraints, and integration stack.",
  },
  {
    title: "Brand-native prototype",
    summary:
      "Create a clickable ordering, menu, rewards, and store experience before heavy build work begins.",
  },
  {
    title: "Custom implementation",
    summary:
      "Develop the website, mobile flows, restaurant rules, admin tools, and integration layer with clean architecture.",
  },
  {
    title: "Pilot and expand",
    summary:
      "Launch with selected outlets, fix operator friction, measure outcomes, then expand region by region.",
  },
];

export const useCases = [
  "Cafe chains",
  "QSR brands",
  "Bakeries",
  "Cloud kitchens",
  "Franchise groups",
  "Food courts",
];

export const homePins: InsightCard[] = [
  {
    title: "Menu rules without brand compromise",
    summary: "Localized menus, modifiers, pricing, and availability that still feel like one brand.",
    label: "Menu systems",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ordering experiences customers actually trust",
    summary: "Fast pickup and takeaway journeys designed around repeat behavior and outlet context.",
    label: "Ordering",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Integrations planned before the build",
    summary: "POS, rewards, payments, delivery, and analytics planned as one operating system.",
    label: "Integration",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Rollouts that operators can live with",
    summary: "Pilot, train, measure, and launch without forcing every outlet into chaos.",
    label: "Rollout",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
  },
];

export const values = [
  "Brand fit before template speed",
  "Operational clarity before feature volume",
  "Regional flexibility before one-size systems",
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
          "Many teams think POS integration means sending orders from a website into the billing system. In practice, it touches menu structure, modifiers, taxes, tender types, customer identity, loyalty, kitchen workflow, and reporting.",
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
    slug: "cafe-chain-ordering-rollout",
    title: "Cafe chain ordering rollout",
    client: "Brew District",
    category: "Ordering and rollout",
    outletCount: "48 outlets",
    region: "6 cities in India",
    timeline: "6 week pilot",
    summary:
      "A 48-outlet cafe brand needed takeaway ordering, store-specific availability, and a faster mobile checkout.",
    result: "Pilot-ready ordering journey in 6 weeks",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    infographicImage: "/assets/case-studies/cafe-chain-before-after.png",
    challenge:
      "Brew District was expanding into two new cities, but each outlet handled pickup timing, item availability, and modifiers differently. The brand wanted a premium ordering experience without forcing every store into the same operating model.",
    whyItMattered:
      "Customers were seeing unavailable items after choosing a store, baristas were calling guests to correct orders, and leadership had no clean way to pilot digital ordering before a larger rollout.",
    executiveSummary:
      "Brew District did not need a generic ordering page. It needed a store-aware ordering system that could respect how each cafe actually operated while giving customers one polished brand experience.",
    situation:
      "The brand had reached the point where manual coordination no longer scaled. Store teams were updating availability informally, popular drink modifiers were handled as notes, and new-city expansion would have multiplied those inconsistencies. The leadership team wanted to launch online ordering, but only if it could start as a controlled pilot and then expand store by store.",
    diagnosis:
      "The main issue was not checkout UI. The real issue was operational truth. Availability, prep capacity, modifier rules, and pickup windows lived inside each outlet. If those rules were not modeled before the menu appeared, the digital experience would create more calls, refunds, and staff friction.",
    implementationNarrative:
      "We designed the ordering journey around store selection first, then shaped the menu from that store's real operating constraints. The pilot was scoped to eight outlets with different formats so the team could test morning rush, bakery availability, barista handoff, and modifier behavior before a wider launch.",
    impactNarrative:
      "The pilot gave Brew District a repeatable operating model for digital pickup. The improvement was not just a faster checkout. Store teams had fewer correction calls, customers saw fewer unavailable items, and leadership had a practical rollout checklist for the next cities.",
    metrics: [
      { value: "48", label: "outlets mapped", context: "Each outlet was reviewed for prep time, availability, and pickup constraints." },
      { value: "6", label: "week pilot plan", context: "The first version focused on a launchable pilot instead of full-chain automation." },
      { value: "31%", label: "faster checkout", context: "The new flow reduced repeated decisions and made modifiers easier to select." },
      { value: "22%", label: "fewer order corrections", context: "Fewer customers needed calls because availability and modifiers were clearer." },
    ],
    problems: [
      "Different prep times by store and daypart",
      "Popular modifiers were not represented cleanly online",
      "Menu availability changed by outlet but the customer journey did not",
      "Leadership needed a pilot that could expand without rebuilding",
    ],
    solution: [
      {
        title: "Store-aware ordering flow",
        bullets: [
          "Store selection before menu browsing",
          "Pickup time slots tied to prep capacity",
          "Unavailable items hidden before checkout",
        ],
      },
      {
        title: "Cafe modifier system",
        bullets: [
          "Milk, roast, size, sweetness, and add-on rules",
          "Combo logic for coffee and bakery pairings",
          "Outlet overrides for local bestsellers",
        ],
      },
      {
        title: "Pilot rollout playbook",
        bullets: [
          "8-store pilot launch checklist",
          "Barista training notes for order handoff",
          "City-by-city expansion readiness score",
        ],
      },
    ],
    rationale: [
      {
        title: "We started with store selection",
        summary:
          "For cafe pickup, the store decides availability, prep time, and fulfillment. Showing the menu first would have created avoidable corrections later.",
      },
      {
        title: "We treated modifiers as operations",
        summary:
          "Milk, size, sweetness, and add-ons affect both customer preference and barista workflow, so they were modeled as rules instead of loose notes.",
      },
      {
        title: "We scoped a pilot before a platform",
        summary:
          "A small controlled rollout helped the team learn real outlet behavior before investing in full-chain automation.",
      },
    ],
    impact: [
      {
        value: "31%",
        label: "checkout speed improvement",
        detail: "Measured against the previous web ordering prototype.",
      },
      {
        value: "22%",
        label: "fewer correction calls",
        detail: "Estimated from pilot outlet support logs.",
      },
      {
        value: "8",
        label: "pilot stores launched",
        detail: "Selected across three operating formats.",
      },
    ],
    infographic: [
      { label: "Store availability", before: "Manual calls", after: "Live outlet rules" },
      { label: "Modifiers", before: "Free text notes", after: "Structured choices" },
      { label: "Rollout", before: "All stores at once", after: "Pilot by city" },
    ],
    quote: {
      text:
        "The solution gave us a premium ordering experience without pretending every cafe runs the same way.",
      person: "Aarav Mehta",
      role: "Founder, Brew District",
    },
  },
  {
    slug: "rewards-and-crm-integration",
    title: "Rewards and CRM integration",
    client: "Casa Crust",
    category: "Loyalty and CRM",
    outletCount: "126 outlets",
    region: "India and UAE",
    timeline: "9 week integration plan",
    summary:
      "A franchise group wanted loyalty points, offer rules, and customer segmentation connected to ordering behavior.",
    result: "Unified rewards logic across web and app",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    infographicImage: "/assets/case-studies/rewards-crm-before-after.png",
    challenge:
      "Casa Crust had a fast-growing bakery and pizza franchise network, but rewards were split across POS vouchers, WhatsApp campaigns, and manual store offers. Customers could not trust whether an offer would work across cities.",
    whyItMattered:
      "The brand was preparing for UAE expansion and needed loyalty, wallet, campaigns, and customer history to behave consistently while still allowing regional offer rules.",
    executiveSummary:
      "Casa Crust had demand for loyalty, but the experience was fragmented. We turned disconnected vouchers, campaign lists, and customer records into a unified rewards and CRM foundation for repeat ordering.",
    situation:
      "The brand was growing through franchise partners, which meant campaigns were moving faster than the underlying systems. Some offers were POS-led, some were promoted through WhatsApp, and some were local store decisions. Customers could not always tell which rewards applied, and marketing could not reliably connect campaign activity to actual orders.",
    diagnosis:
      "The loyalty problem was really an identity and trust problem. Before adding more offers, the brand needed one customer profile, clear eligibility checks, and campaign events tied to real ordering behavior. Without that foundation, expansion into another country would have created more duplicate records and inconsistent rewards.",
    implementationNarrative:
      "We modeled customer identity first, then layered rewards and campaigns on top. The solution connected web ordering, POS data, CRM events, and reward rules so customers could see valid offers before checkout and marketing could segment based on what people actually ordered.",
    impactNarrative:
      "The work made loyalty feel reliable. Customers understood their rewards earlier in the journey, marketing gained usable segments, and the brand had a cleaner structure for regional campaigns before the UAE rollout.",
    metrics: [
      { value: "126", label: "outlets assessed", context: "The rollout model accounted for franchise-level offer differences." },
      { value: "4", label: "systems connected", context: "Ordering, POS, CRM, and rewards logic were aligned around one customer view." },
      { value: "18%", label: "higher repeat orders", context: "Pilot cohorts responded better when rewards were visible and reliable." },
      { value: "2.4x", label: "campaign redemption lift", context: "Campaigns improved after segmentation was tied to order behavior." },
    ],
    problems: [
      "Offer rules differed by franchise owner",
      "Customer records were duplicated across channels",
      "Rewards could not be tested before checkout",
      "Marketing lacked order-level segmentation",
    ],
    solution: [
      {
        title: "Unified customer identity",
        bullets: [
          "Phone-based profile matching",
          "Customer event stream across web and app",
          "Duplicate profile handling rules",
        ],
      },
      {
        title: "Rewards and offer engine",
        bullets: [
          "Points, wallet, coupon, and birthday rules",
          "Region-specific eligibility checks",
          "Offer validation before checkout",
        ],
      },
      {
        title: "CRM campaign pipeline",
        bullets: [
          "Segments based on category and frequency",
          "Win-back, new-city, and high-value cohorts",
          "Campaign reporting tied to orders",
        ],
      },
    ],
    rationale: [
      {
        title: "We separated identity from offers",
        summary:
          "The brand needed one customer view first. Without identity cleanup, loyalty rules would have amplified duplicate customer records.",
      },
      {
        title: "We validated offers before checkout",
        summary:
          "Customers lose trust when rewards fail at payment. Eligibility had to be visible before the final step.",
      },
      {
        title: "We kept regional campaign control",
        summary:
          "The UAE launch needed different offers and currency behavior, so local campaign rules were built into the model.",
      },
    ],
    impact: [
      {
        value: "18%",
        label: "repeat order lift",
        detail: "Modeled from pilot cohort behavior across 10 outlets.",
      },
      {
        value: "2.4x",
        label: "redemption lift",
        detail: "Compared with previous manual WhatsApp campaign tracking.",
      },
      {
        value: "4",
        label: "systems aligned",
        detail: "POS, ordering, CRM, and rewards logic.",
      },
    ],
    infographic: [
      { label: "Customer records", before: "Duplicated", after: "Unified profile" },
      { label: "Offer checks", before: "At payment", after: "Before checkout" },
      { label: "Campaigns", before: "Manual lists", after: "Order-based segments" },
    ],
    quote: {
      text:
        "The biggest win was trust. Customers could see exactly which rewards worked before they placed the order.",
      person: "Maya Fernandes",
      role: "Growth Lead, Casa Crust",
    },
  },
  {
    slug: "multi-region-menu-foundation",
    title: "Multi-region menu foundation",
    client: "Urban Tandoor",
    category: "Menu and localization",
    outletCount: "212 outlets",
    region: "India, Singapore, and UK",
    timeline: "8 week foundation",
    summary:
      "A quick service brand preparing for international expansion needed menu, tax, and language structures.",
    result: "Region-aware menu model for global rollout",
    image:
      "https://images.unsplash.com/photo-1526234362653-3b75a0c07438?auto=format&fit=crop&w=900&q=80",
    infographicImage: "/assets/case-studies/multi-region-menu-before-after.png",
    challenge:
      "Urban Tandoor was moving from a strong domestic QSR model to international franchise markets. The menu needed to support country-specific pricing, taxes, item names, spice levels, allergens, and outlet overrides.",
    whyItMattered:
      "The existing menu model was built around one country. International launch teams were creating spreadsheets for each market, which made brand consistency and compliance risky.",
    executiveSummary:
      "Urban Tandoor was ready to expand internationally, but its menu system was still behaving like a single-market setup. We created a region-aware menu foundation that could support local rules without losing brand consistency.",
    situation:
      "The team was preparing for international franchise markets, and every new country introduced a new version of the menu. Pricing, spice levels, allergens, descriptions, taxes, and availability all needed local control. Spreadsheets had become the temporary operating system, but they were too fragile for real rollout.",
    diagnosis:
      "The menu could not be treated as flat content. It needed hierarchy. Global items needed to inherit brand standards, while markets needed controlled local overrides for compliance, pricing, language, and availability. The key was preventing local flexibility from turning into brand drift.",
    implementationNarrative:
      "We structured the menu around inheritance: global, country, city, outlet. Compliance fields were separated from marketing content, and launch readiness was made visible through a country dashboard so teams could see missing translations, tax rules, allergen data, and approval gaps.",
    impactNarrative:
      "The new foundation reduced menu admin work and gave leadership a clearer way to prepare each country for launch. Instead of copying spreadsheets, the brand could manage local differences inside a structured rollout model.",
    metrics: [
      { value: "212", label: "outlets planned", context: "The menu model was designed for current stores and near-term franchise growth." },
      { value: "3", label: "countries modeled", context: "India, Singapore, and UK rules were used to test the structure." },
      { value: "64%", label: "less menu admin work", context: "Inheritance reduced repeated spreadsheet edits across markets." },
      { value: "5", label: "language variants ready", context: "The content model supported launch and near-term localization needs." },
    ],
    problems: [
      "Item names and descriptions changed by market",
      "Taxes, allergens, and dietary tags needed country logic",
      "Franchise owners needed controlled local overrides",
      "Menu spreadsheets were becoming the source of truth",
    ],
    solution: [
      {
        title: "Region-aware menu model",
        bullets: [
          "Country, city, and outlet-level menu inheritance",
          "Local pricing, tax, allergen, and dietary rules",
          "Language variants for names and descriptions",
        ],
      },
      {
        title: "Franchise override controls",
        bullets: [
          "Controlled local availability changes",
          "Approval flow for regional item edits",
          "Visibility rules by outlet type",
        ],
      },
      {
        title: "Global rollout dashboard",
        bullets: [
          "Readiness score by country",
          "Missing data and translation checks",
          "Launch checklist for each market",
        ],
      },
    ],
    rationale: [
      {
        title: "We used inheritance instead of copies",
        summary:
          "Copying menus for every country would have created drift. Inheritance allowed global standards with local changes.",
      },
      {
        title: "We separated compliance from content",
        summary:
          "Allergens, dietary tags, and taxes needed stricter validation than marketing descriptions, so they were modeled separately.",
      },
      {
        title: "We made readiness visible",
        summary:
          "Leadership needed to know which markets were launch-ready without checking spreadsheets and messages.",
      },
    ],
    impact: [
      {
        value: "64%",
        label: "less menu admin work",
        detail: "Estimated against spreadsheet-based market setup.",
      },
      {
        value: "5",
        label: "language variants",
        detail: "Prepared for current and near-term expansion markets.",
      },
      {
        value: "3",
        label: "country models",
        detail: "India, Singapore, and UK launch structures.",
      },
    ],
    infographic: [
      { label: "Menu setup", before: "Market copies", after: "Inherited rules" },
      { label: "Compliance", before: "Spreadsheet notes", after: "Validated fields" },
      { label: "Launch readiness", before: "Manual review", after: "Country dashboard" },
    ],
    quote: {
      text:
        "The menu foundation made global rollout feel operationally possible instead of spreadsheet-driven.",
      person: "Kabir Sethi",
      role: "Franchise Operations, Urban Tandoor",
    },
  },
];
