"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  Building2,
  ClipboardCheck,
  CreditCard,
  Gift,
  Globe2,
  Languages,
  MapPinned,
  PlugZap,
  Rocket,
  Smartphone,
  Store,
  TriangleAlert,
  Utensils,
} from "lucide-react";
import {
  conversionProblems,
  conversionStats,
  discoveryAgenda,
  expertiseSignals,
  fakeBrands,
  faqItems,
  integrationAreas,
  platformPillars,
  positioningPoints,
  proofMetrics,
  processSteps,
  restaurantFormats,
  testimonials,
} from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const heroCards = [
  { icon: Utensils, label: "Menu rules", value: "City-wise pricing" },
  { icon: Smartphone, label: "Ordering", value: "Web and app" },
  { icon: PlugZap, label: "POS sync", value: "Mapped before build" },
  { icon: MapPinned, label: "Store logic", value: "Hours and availability" },
];

const landingPhotos = {
  operations: {
    src: "/assets/home/operations-counter.png",
    alt: "Cafe team preparing digital pickup orders beside an ordering tablet.",
    label: "Outlet operations",
  },
  guest: {
    src: "/assets/home/guest-ordering.png",
    alt: "Guest ordering food on a phone at a bright cafe table.",
    label: "Guest ordering",
  },
  pos: {
    src: "/assets/home/pos-integration.png",
    alt: "Restaurant POS, payment terminal, and kitchen pass in operation.",
    label: "POS and kitchen sync",
  },
  rollout: {
    src: "/assets/home/rollout-planning.png",
    alt: "Restaurant leadership team planning a regional rollout around a table.",
    label: "Pilot to rollout",
  },
  menu: {
    src: "/assets/home/regional-menu.png",
    alt: "Restaurant menu planning table with food cards, tablets, and ingredients.",
    label: "Regional menus",
  },
  analytics: {
    src: "/assets/home/analytics-review.png",
    alt: "Restaurant expansion analytics reviewed on laptop and tablet.",
    label: "Expansion visibility",
  },
  formats: {
    src: "/assets/home/format-mix.png",
    alt: "Modern restaurant with bakery display, pickup shelf, and kitchen pass.",
    label: "F&B formats",
  },
};

const solutionCards = [
  {
    icon: Smartphone,
    title: "Branded ordering layer",
    summary: "For customers placing orders across web and app.",
    bullets: [
      "Pickup, takeaway, delivery, and scheduled orders",
      "Combos, modifiers, upsells, and guest checkout",
      "Store-specific availability and fulfillment rules",
    ],
  },
  {
    icon: Utensils,
    title: "Regional menu engine",
    summary: "For brands expanding city by city or country by country.",
    bullets: [
      "Local pricing, taxes, languages, and currency",
      "Outlet overrides for hours, stock, and kitchen status",
      "Menu structure that stays consistent across markets",
    ],
  },
  {
    icon: PlugZap,
    title: "Restaurant stack integration",
    summary: "For operators who need systems to work together.",
    bullets: [
      "POS, loyalty, CRM, payments, and delivery partners",
      "Clean customer, order, rewards, and reporting events",
      "Pilot-first rollout before full franchise expansion",
    ],
  },
];

const pillarIcons = [Smartphone, Languages, PlugZap, Rocket];
const positioningIcons = [Building2, Utensils, Globe2];
const problemIcons = [TriangleAlert, Store, CreditCard];
const integrationIcons = [CreditCard, Gift, Rocket, BarChart3];
const proofIcons = [Store, LayersIcon, BadgeCheck, ClipboardCheck];
const expertiseIcons = [ClipboardCheck, Store, BadgeCheck, Rocket];

function LayersIcon(props: React.ComponentProps<typeof Building2>) {
  return <Building2 {...props} />;
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function IconBubble({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="grid size-11 place-items-center rounded-full bg-[#e60023] text-white">
      <Icon size={20} strokeWidth={2.4} />
    </div>
  );
}

function PhotoPanel({
  photo,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  large = false,
}: {
  photo: (typeof landingPhotos)[keyof typeof landingPhotos];
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  large?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${large ? "rounded-[32px]" : "rounded-2xl"} bg-[#f6f6f3] ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={1600}
        height={1000}
        priority={priority}
        sizes={sizes}
        className={`h-full w-full object-cover ${imageClassName}`}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-4">
        <span className="inline-flex rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-black">
          {photo.label}
        </span>
      </div>
    </div>
  );
}

function VisualAside({
  photo,
  metricValue,
  metricLabel,
  note,
  icon: Icon,
  dark = false,
  className = "",
}: {
  photo: (typeof landingPhotos)[keyof typeof landingPhotos];
  metricValue: string;
  metricLabel: string;
  note: string;
  icon: React.ElementType;
  dark?: boolean;
  className?: string;
}) {
  const tileClass = dark
    ? "bg-white/10 text-white"
    : "border border-[#e5e5e0] bg-white text-black";
  const muteClass = dark ? "text-white/70" : "text-[#62625b]";

  return (
    <div className={`grid gap-2 ${className}`}>
      <PhotoPanel
        photo={photo}
        className="aspect-[16/10] max-h-[260px] lg:max-h-[280px]"
        sizes="(min-width: 1024px) 34vw, 100vw"
      />
      <div className="grid gap-2 sm:grid-cols-2">
        <div className={`rounded-2xl p-5 ${tileClass}`}>
          <p className="text-3xl font-bold leading-none text-[#e60023]">
            {metricValue}
          </p>
          <p className={`mt-2 text-sm font-semibold leading-6 ${muteClass}`}>
            {metricLabel}
          </p>
        </div>
        <div className={`rounded-2xl p-5 ${tileClass}`}>
          <div className="grid size-10 place-items-center rounded-full bg-[#f6f6f3] text-[#262622]">
            <Icon size={20} strokeWidth={2.4} />
          </div>
          <p className={`mt-4 text-sm font-semibold leading-6 ${muteClass}`}>
            {note}
          </p>
        </div>
      </div>
    </div>
  );
}

function HomeHero() {
  return (
    <section className="sketch-texture bg-[#fbfbf9] px-4 py-5 sm:px-6 md:px-10 lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center lg:px-12 lg:py-4">
      <div className="mx-auto grid w-full max-w-7xl gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
        <div className="flex min-w-0 flex-col justify-between rounded-2xl bg-white p-5 sm:p-6 lg:p-7 xl:p-9">
          <div>
            <p className="text-xs font-bold uppercase leading-none text-[#62625b]">
              Custom ordering for growing F&B chains
            </p>
            <h1 className="mt-3 max-w-3xl text-[34px] font-semibold leading-[1.04] text-black sm:text-[42px] lg:text-[48px] xl:text-[58px]">
              Scale your F&B brand without generic tech.
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-[#33332e] lg:text-base lg:leading-7">
              Custom ordering, regional menus, loyalty, POS integrations, and
              rollout systems for newer restaurant chains going regional or
              global.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink href="mailto:hello@restro.tech">
                Book a Discovery Call
              </ButtonLink>
              <ButtonLink href="#solution" variant="secondary">
                See the solution
              </ButtonLink>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex flex-wrap gap-2">
              {["Not SaaS", "F&B only", "Custom build", "Pilot first"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#f6f6f3] px-3 py-2 text-center text-xs font-bold leading-none text-black xl:text-sm"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-3 hidden gap-2 sm:grid sm:grid-cols-3">
              {conversionStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl bg-[#f6f6f3] p-3 xl:p-4"
                >
                  <p className="text-lg font-bold leading-tight text-black xl:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-[#62625b]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-3 lg:grid-rows-[250px_124px_108px] xl:grid-rows-[310px_150px_130px]">
          <div className="relative h-[160px] overflow-hidden rounded-[32px] bg-[#f6f6f3] sm:h-[210px] lg:h-auto">
            <Image
              src={landingPhotos.operations.src}
              alt={landingPhotos.operations.alt}
              width={1000}
              height={620}
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-bold leading-none text-black">
              {landingPhotos.operations.label}
            </span>
          </div>

          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-2 flex min-h-[96px] flex-col justify-center rounded-2xl bg-[#262622] p-4 text-white sm:min-h-0 xl:p-5">
              <p className="text-xs font-bold uppercase leading-none text-white/65">
                Best fit
              </p>
              <p className="mt-2 text-2xl font-bold leading-none xl:text-3xl">
                10 to 500
              </p>
              <p className="mt-2 text-xs font-semibold leading-5 text-white/70 xl:text-sm">
                outlet F&B chains expanding across regions.
              </p>
            </div>

            <div className="relative col-span-3 min-h-[96px] overflow-hidden rounded-2xl bg-[#f6f6f3] sm:min-h-0">
              <Image
                src={landingPhotos.guest.src}
                alt={landingPhotos.guest.alt}
                width={900}
                height={600}
                sizes="(min-width: 1024px) 34vw, 60vw"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-black">
                {landingPhotos.guest.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroCards.map((card) => (
              <div
                key={card.label}
                className="min-w-0 rounded-2xl bg-white p-4"
              >
                <div className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f6f6f3] text-[#262622] xl:size-10">
                  <card.icon className="size-4" strokeWidth={2.35} />
                </div>
                <p className="mt-3 text-[10px] font-bold uppercase leading-none text-[#62625b]">
                  {card.label}
                </p>
                <p className="mt-1.5 text-sm font-bold leading-tight text-black">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const marqueeGroups = [fakeBrands, fakeBrands];

  return (
    <>
      <HomeHero />

      <section
        className="w-full overflow-hidden border-y border-[#e5e5e0] bg-white py-4"
        aria-label="Restaurant brand examples"
      >
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {marqueeGroups.map((brands, groupIndex) => (
            <div
              key={groupIndex}
              className="flex min-w-[100vw] shrink-0 items-center justify-around gap-3 px-2 sm:gap-4 sm:px-3"
            >
              {brands.map((brand) => (
                <div
                  key={`${brand}-${groupIndex}`}
                  className="inline-flex h-10 shrink-0 items-center rounded-full bg-[#f6f6f3] px-5 text-sm font-bold leading-none text-black"
                >
                  {brand}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#fbfbf9] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-2">
            <Reveal className="rounded-[32px] bg-white p-6 md:p-8">
              <p className="text-sm font-bold uppercase text-[#e60023]">
                What we focus on
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                Restaurant expansion needs fewer claims and clearer operating
                pictures.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#33332e]">
                We design around the outlets, menus, systems, and markets that
                make a growing F&B brand hard to scale.
              </p>
            </Reveal>

            <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-1">
              {positioningPoints.map((point, index) => {
                const Icon = positioningIcons[index];
                return (
                  <Reveal key={point.title} delay={index * 0.06}>
                    <article className="flex h-full gap-4 rounded-2xl bg-white p-5">
                      <IconBubble icon={Icon} />
                      <div>
                        <p className="text-xs font-bold uppercase text-[#e60023]">
                          {point.label}
                        </p>
                        <h3 className="mt-2 text-lg font-bold leading-tight text-black">
                          {point.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#33332e]">
                          {point.summary}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal>
            <VisualAside
              photo={landingPhotos.rollout}
              metricValue="10-500"
              metricLabel="outlet brands with regional complexity"
              note="Expansion is mapped before the build, so the website does not carry every operational surprise."
              icon={MapPinned}
            />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="grid gap-5">
            <div>
              <p className="text-sm font-bold uppercase text-[#e60023]">
                Customer problems
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                Expansion breaks when tech treats every outlet the same.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#33332e]">
                One brand experience. Many local operating rules behind it.
              </p>
            </div>
            <VisualAside
              photo={landingPhotos.operations}
              metricValue="1 brand"
              metricLabel="many outlet rules behind the scenes"
              note="Outlet differences should be planned as product logic, not patched after launch."
              icon={TriangleAlert}
            />
          </Reveal>

          <div className="grid gap-2">
            {conversionProblems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
                <Reveal key={problem.title} delay={index * 0.06}>
                  <article className="flex gap-4 rounded-2xl bg-[#262622] p-5 text-white md:p-6">
                    <IconBubble icon={Icon} />
                    <div>
                      <h3 className="text-xl font-bold leading-tight">
                        {problem.title}
                      </h3>
                      <p className="mt-2 leading-7 text-white/70">
                        {problem.summary}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solution" className="bg-white px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal className="grid gap-5">
            <div>
              <p className="text-sm font-bold uppercase text-[#e60023]">
                Our position
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                Custom digital commerce for growing F&B chains.
              </h2>
              <p className="mt-4 leading-7 text-[#33332e]">
                We build the branded layer customers, outlet teams, and
                leadership depend on during expansion.
              </p>
            </div>
            <VisualAside
              photo={landingPhotos.guest}
              metricValue="4 layers"
              metricLabel="guest, menu, stack, and rollout"
              note="The customer journey stays branded while outlet complexity stays structured."
              icon={Smartphone}
            />
          </Reveal>

          <div className="grid gap-2 sm:grid-cols-2">
            {platformPillars.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <Reveal key={pillar.title} delay={index * 0.05}>
                  <article className="h-full rounded-2xl bg-[#f6f6f3] p-5">
                    <IconBubble icon={Icon} />
                    <h3 className="mt-4 text-xl font-bold text-black">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#33332e]">
                      {pillar.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pillar.items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-black"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#262622] px-6 py-12 text-white md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal className="grid gap-5">
            <div>
              <p className="text-sm font-bold uppercase text-white/70">
                Our solution
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Three layers your F&B expansion actually needs.
              </h2>
              <p className="mt-4 leading-7 text-white/70">
                Customer experience, restaurant rules, and integrations planned
                as one operating system.
              </p>
            </div>
            <PhotoPanel
              photo={landingPhotos.pos}
              className="aspect-[16/9] max-h-[260px] lg:max-h-[280px]"
            />
          </Reveal>

          <div className="grid gap-2">
            {solutionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.06}>
                  <article className="rounded-2xl bg-white p-5 text-black md:p-6">
                    <div className="flex gap-4">
                      <IconBubble icon={Icon} />
                      <div>
                        <h3 className="text-xl font-bold">{card.title}</h3>
                        <p className="mt-2 text-sm font-semibold leading-6 text-[#62625b]">
                          {card.summary}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {card.bullets.slice(0, 2).map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2 text-sm font-semibold leading-6 text-[#33332e]"
                        >
                          <BadgeCheck
                            className="mt-0.5 shrink-0 text-[#e60023]"
                            size={18}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbf9] px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div>
            <Reveal>
              <p className="text-sm font-bold uppercase text-[#e60023]">
                Restaurant expertise
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                F&B expansion is not ecommerce with food photos.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#33332e]">
                Prep time, outlet downtime, packaging, tax, kitchen capacity,
                and franchise reality shape the product.
              </p>
            </Reveal>
            <div className="mt-6 grid gap-2 md:grid-cols-2">
              {expertiseSignals.map((signal, index) => {
                const Icon = expertiseIcons[index];
                return (
                  <Reveal key={signal.title} delay={index * 0.05}>
                    <article className="h-full rounded-2xl bg-white p-5">
                      <Icon className="text-[#e60023]" size={26} />
                      <h3 className="mt-4 text-lg font-bold text-black">
                        {signal.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#33332e]">
                        {signal.summary}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal>
            <VisualAside
              photo={landingPhotos.menu}
              metricValue="F&B only"
              metricLabel="restaurant constraints treated as product rules"
              note="Kitchen capacity, packaging, prep time, and franchise ownership stay visible in the plan."
              icon={Utensils}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal className="grid gap-5">
            <div>
              <p className="text-sm font-bold uppercase text-[#e60023]">
                Integration planning
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                The expensive mistakes usually hide between systems.
              </h2>
            </div>
            <VisualAside
              photo={landingPhotos.pos}
              metricValue="Before build"
              metricLabel="map every handoff and exception"
              note="POS, loyalty, delivery, payments, and reporting need one rollout view."
              icon={PlugZap}
            />
          </Reveal>

          <div>
            <div className="grid gap-2 md:grid-cols-2">
              {integrationAreas.map((area, index) => {
                const Icon = integrationIcons[index];
                return (
                  <Reveal key={area.title} delay={index * 0.05}>
                    <article className="h-full rounded-2xl border border-[#dadad3] bg-white p-5">
                      <Icon className="text-[#e60023]" size={26} />
                      <h3 className="mt-4 text-xl font-bold text-black">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#33332e]">
                        {area.summary}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbf9] px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <Reveal>
              <p className="text-sm font-bold uppercase text-[#e60023]">
                Discovery call
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                Leave with a restaurant scale-readiness map.
              </h2>
              <p className="mt-4 leading-7 text-[#33332e]">
                The first call finds the smallest useful pilot across ordering,
                regional menus, rewards, POS, and rollout.
              </p>
            </Reveal>
            <div className="mt-6 grid gap-2">
              {discoveryAgenda.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <div className="flex gap-4 rounded-2xl bg-white p-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#e60023] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="self-center font-semibold leading-6 text-black">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-6">
              <ButtonLink href="mailto:hello@restro.tech">
                Book a Discovery Call
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal>
            <VisualAside
              photo={landingPhotos.rollout}
              metricValue="Pilot first"
              metricLabel="small enough to learn, real enough to matter"
              note="The discovery output is a scoped route from first outlets to wider rollout."
              icon={ClipboardCheck}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#262622] px-6 py-14 text-white md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="grid gap-5">
            <div>
              <p className="text-sm font-bold uppercase text-white/70">
                How we work
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Pilot first. Then expand region by region.
              </h2>
            </div>
            <VisualAside
              photo={landingPhotos.rollout}
              metricValue="4 steps"
              metricLabel="audit, prototype, implement, expand"
              note="Each rollout stage has a visible operating checkpoint before the next region."
              icon={Rocket}
              dark
            />
          </Reveal>

          <div className="grid gap-2 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl bg-white p-5 text-black">
                  <span className="text-sm font-bold text-[#e60023]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#33332e]">
                    {step.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <Reveal className="grid gap-5">
            <div>
              <p className="text-sm font-bold uppercase text-[#e60023]">
                Proof points
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                The offer is narrow on purpose.
              </h2>
            </div>
            <VisualAside
              photo={landingPhotos.analytics}
              metricValue="1 team"
              metricLabel="focused on restaurant expansion technology"
              note="A narrow offer makes the proof easier to scan and the engagement easier to judge."
              icon={BarChart3}
            />
          </Reveal>

          <div className="grid gap-2 sm:grid-cols-2">
            {proofMetrics.map((metric, index) => {
              const Icon = proofIcons[index];
              return (
                <Reveal key={metric.label} delay={index * 0.05}>
                  <article className="h-full rounded-2xl bg-[#f6f6f3] p-6">
                    <Icon className="text-[#e60023]" size={28} />
                    <p className="mt-5 text-3xl font-bold text-[#e60023]">
                      {metric.value}
                    </p>
                    <p className="mt-2 font-semibold leading-6 text-black">
                      {metric.label}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbf9] px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal className="grid gap-5">
            <div>
              <p className="text-sm font-bold uppercase text-[#e60023]">
                Operator proof
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                Operators want restaurant fluency before they trust the build.
              </h2>
            </div>
            <PhotoPanel
              photo={landingPhotos.operations}
              className="aspect-[16/10] max-h-[260px] lg:max-h-[280px]"
            />
          </Reveal>

          <div className="grid gap-2">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.06}>
                <article className="rounded-2xl bg-white p-5 md:p-6">
                  <p className="text-lg font-semibold leading-8 text-black">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-5">
                    <p className="font-bold text-black">{testimonial.name}</p>
                    <p className="mt-1 text-sm font-semibold text-[#62625b]">
                      {testimonial.role}, {testimonial.brand}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <PhotoPanel
              photo={landingPhotos.formats}
              className="aspect-[16/10] max-h-[280px] lg:max-h-[320px]"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-bold uppercase text-[#e60023]">
                Formats we understand
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                Every outlet is similar, but never identical.
              </h2>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-2">
              {restaurantFormats.map((format, index) => (
                <Reveal key={format} delay={index * 0.03}>
                  <span className="block rounded-full bg-[#f6f6f3] px-4 py-3 text-sm font-bold text-black">
                    {format}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbf9] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.14fr_0.86fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-bold uppercase text-[#e60023]">
                Questions
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                Clear answers before a discovery call.
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-2 md:grid-cols-2">
              {faqItems.map((item, index) => (
                <Reveal key={item.question} delay={index * 0.04}>
                  <article className="h-full rounded-2xl bg-white p-5">
                    <h3 className="text-lg font-bold text-black">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#33332e]">
                      {item.answer}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="grid gap-5">
            <VisualAside
              photo={landingPhotos.analytics}
              metricValue="0 SaaS"
              metricLabel="custom implementation, not software resale"
              note="The first conversation clarifies fit, scope, and rollout risk before any proposal."
              icon={ClipboardCheck}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#262622] px-6 py-14 text-white md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase text-white/70">
              Final CTA
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
              Bring one messy restaurant expansion problem. Leave with a pilot
              path.
            </h2>
            <div className="mt-6">
              <ButtonLink href="mailto:hello@restro.tech">
                Book a Discovery Call
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal>
            <PhotoPanel
              photo={landingPhotos.operations}
              className="aspect-[16/10] max-h-[260px] lg:max-h-[300px]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
