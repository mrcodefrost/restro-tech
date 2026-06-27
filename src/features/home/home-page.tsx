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
  homePins,
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
    <div className="grid size-11 place-items-center rounded-full bg-[#E10909] text-white">
      <Icon size={20} strokeWidth={2.4} />
    </div>
  );
}

export function HomePage() {
  const brandLoop = [...fakeBrands, ...fakeBrands];

  return (
    <>
      <section className="sketch-texture overflow-hidden px-6 py-6 md:px-10 md:py-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-2 lg:grid-cols-12 lg:grid-rows-[210px_145px_145px]">
          <Reveal className="lg:col-span-5 lg:row-span-3">
            <div className="flex h-full min-h-[500px] flex-col justify-between rounded-[32px] bg-white/90 p-6 md:p-8 lg:min-h-0">
              <div>
                <p className="mb-3 text-sm font-bold uppercase text-[#E10909]">
                  Custom ordering for growing F&B chains
                </p>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] text-black md:text-6xl lg:text-6xl">
                  Scale your F&B brand without generic tech.
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#33332e]">
                  Custom ordering, regional menus, loyalty, POS integrations,
                  and rollout systems for newer restaurant chains going
                  regional or global.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="mailto:hello@restro.tech">
                    Book a Discovery Call
                  </ButtonLink>
                  <ButtonLink href="#solution" variant="secondary">
                    See the solution
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {["Not SaaS", "F&B only", "Custom build", "Pilot first"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#f6f6f3] px-4 py-3 text-sm font-bold text-black"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {conversionStats.map((stat, index) => (
                    <Reveal key={stat.value} delay={index * 0.06}>
                      <div className="rounded-2xl bg-[#f6f6f3] p-3">
                        <p className="text-xl font-bold text-black">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-xs font-semibold leading-5 text-[#62625b]">
                          {stat.label}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="overflow-hidden rounded-[32px] bg-[#f6f6f3] lg:col-span-7 lg:row-span-1">
            <Image
              src={homePins[0].image}
              alt={homePins[0].title}
              width={1000}
              height={620}
              priority
              className="h-full min-h-[240px] w-full object-cover lg:min-h-0"
            />
          </Reveal>

          <Reveal
            delay={0.08}
            className="rounded-[32px] bg-[#262622] p-5 text-white lg:col-span-3 lg:row-start-2"
          >
            <p className="text-sm font-bold text-white/70">Best fit</p>
            <p className="mt-3 text-3xl font-bold">10 to 500</p>
            <p className="mt-2 leading-6 text-white/70">
              outlet F&B chains expanding across regions.
            </p>
          </Reveal>

          <Reveal
            delay={0.14}
            className="overflow-hidden rounded-[32px] bg-[#f6f6f3] lg:col-span-4 lg:row-start-2"
          >
            <Image
              src={homePins[1].image}
              alt={homePins[1].title}
              width={900}
              height={600}
              className="h-full min-h-[210px] w-full object-cover lg:min-h-0"
            />
          </Reveal>

          <Reveal
            delay={0.2}
            className="grid gap-2 lg:col-span-7 lg:row-start-3 lg:grid-cols-4"
          >
            {heroCards.map((card) => (
              <div key={card.label} className="rounded-2xl bg-white p-4">
                <IconBubble icon={card.icon} />
                <p className="mt-3 text-sm font-bold text-[#62625b]">
                  {card.label}
                </p>
                <p className="mt-1 text-lg font-bold leading-snug text-black">
                  {card.value}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#e5e5e0] bg-white py-4">
        <motion.div
          className="flex w-max gap-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {brandLoop.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="rounded-full bg-[#f6f6f3] px-6 py-3 text-sm font-bold text-black"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#fbfbf9] px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-2 md:grid-cols-3">
          {positioningPoints.map((point, index) => {
              const Icon = positioningIcons[index];
              return (
                <Reveal key={point.title} delay={index * 0.08}>
                <article className="h-full rounded-[32px] bg-white p-7">
                  <IconBubble icon={Icon} />
                  <p className="mt-5 text-sm font-bold uppercase text-[#E10909]">
                    {point.label}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-black">
                    {point.title}
                  </h2>
                  <p className="mt-4 leading-7 text-[#33332e]">
                    {point.summary}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-bold uppercase text-[#E10909]">
              Customer problems
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
              Expansion breaks when restaurant tech treats every outlet the
              same.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#33332e]">
              Your brand needs one guest experience with many local operating
              rules behind it.
            </p>
          </Reveal>
          <div className="grid gap-2 md:grid-cols-3">
            {conversionProblems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
                <Reveal key={problem.title} delay={index * 0.08}>
                  <article className="h-full rounded-[32px] bg-[#262622] p-8 text-white">
                    <IconBubble icon={Icon} />
                    <h3 className="mt-6 text-2xl font-bold leading-tight">
                      {problem.title}
                    </h3>
                    <p className="mt-4 leading-7 text-white/70">
                      {problem.summary}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solution" className="bg-white px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#E10909]">
              Our position
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
              We are the custom digital commerce partner for growing F&B
              chains.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#33332e]">
              Not restaurant management software. Not a generic app agency. We
              build the branded layer that customers, outlet teams, and
              leadership depend on during expansion.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-2 md:grid-cols-4">
            {platformPillars.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <Reveal key={pillar.title} delay={index * 0.06}>
                  <article className="h-full rounded-[32px] bg-[#f6f6f3] p-6">
                    <IconBubble icon={Icon} />
                    <h3 className="mt-5 text-2xl font-bold text-black">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 leading-6 text-[#33332e]">
                      {pillar.summary}
                    </p>
                    <div className="mt-5 grid gap-2">
                      {pillar.items.map((item, itemIndex) => (
                        <Reveal key={item} delay={itemIndex * 0.04}>
                          <span className="block rounded-full bg-white px-3 py-2 text-xs font-bold text-black">
                            {item}
                          </span>
                        </Reveal>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <Reveal className="sketch-texture mx-auto max-w-7xl rounded-[32px] bg-[#262622] p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase text-white/70">
                Our solution
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Three layers your F&B expansion actually needs.
              </h2>
              <p className="mt-5 leading-7 text-white/70">
                We build the customer experience, the restaurant rules, and the
                integration layer together so expansion does not become a stack
                of disconnected tools.
              </p>
            </div>
            <div className="grid gap-2 lg:grid-cols-3">
              {solutionCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={index * 0.08}>
                    <article className="flex h-full flex-col rounded-2xl bg-white p-6 text-black">
                      <IconBubble icon={Icon} />
                      <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[#62625b]">
                        {card.summary}
                      </p>
                      <ul className="mt-5 grid gap-3">
                        {card.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-sm font-semibold leading-6 text-[#33332e]"
                          >
                            <BadgeCheck
                              className="mt-0.5 shrink-0 text-[#E10909]"
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
        </Reveal>
      </section>

      <section className="bg-[#fbfbf9] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase text-[#E10909]">
              Restaurant expertise
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
              F&B expansion is not ecommerce with food photos.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#33332e]">
              We plan around prep time, outlet downtime, stock-outs, packaging,
              tax, delivery windows, kitchen capacity, and franchise reality.
            </p>
          </Reveal>
          <div className="grid gap-2 md:grid-cols-2">
            {expertiseSignals.map((signal, index) => {
              const Icon = expertiseIcons[index];
              return (
              <Reveal key={signal.title} delay={index * 0.06}>
                <article className="h-full rounded-[32px] bg-white p-7">
                  <IconBubble icon={Icon} />
                  <h3 className="mt-5 text-2xl font-bold text-black">
                    {signal.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#33332e]">
                    {signal.summary}
                  </p>
                </article>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#E10909]">
              Integration planning
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
              The expensive mistakes usually hide between systems.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-2 md:grid-cols-4">
            {integrationAreas.map((area, index) => {
              const Icon = integrationIcons[index];
              return (
                <Reveal key={area.title} delay={index * 0.06}>
                  <article className="h-full rounded-2xl border border-[#dadad3] bg-white p-6">
                    <Icon className="text-[#E10909]" size={28} />
                    <h3 className="mt-5 text-xl font-bold text-black">
                      {area.title}
                    </h3>
                    <p className="mt-3 leading-6 text-[#33332e]">
                      {area.summary}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl gap-8 rounded-[32px] bg-[#f6f6f3] p-8 md:grid-cols-[0.95fr_1.05fr] md:p-12">
          <div>
            <p className="text-sm font-bold uppercase text-[#E10909]">
              Discovery call
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
              Leave with a restaurant scale-readiness map.
            </h2>
            <p className="mt-5 leading-7 text-[#33332e]">
              The first call finds the smallest useful pilot across ordering,
              regional menus, rewards, POS, and rollout.
            </p>
            <div className="mt-8">
              <ButtonLink href="mailto:hello@restro.tech">
                Book a Discovery Call
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-2">
            {discoveryAgenda.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="flex gap-4 rounded-2xl bg-white p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#E10909] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="self-center font-semibold leading-6 text-black">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-[#262622] px-6 py-16 text-white md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase text-white/70">
              How we work
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Pilot first. Then expand region by region.
            </h2>
          </Reveal>
          <div className="grid gap-2 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="h-full rounded-2xl bg-white p-6 text-black">
                  <span className="text-sm font-bold text-[#E10909]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-6 text-[#33332e]">
                    {step.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-2 md:grid-cols-4">
          {proofMetrics.map((metric, index) => {
              const Icon = proofIcons[index];
              return (
              <Reveal key={metric.label} delay={index * 0.06}>
                <article className="h-full rounded-[32px] bg-[#f6f6f3] p-8">
                  <Icon className="text-[#E10909]" size={30} />
                  <p className="mt-6 text-4xl font-bold text-[#E10909]">
                    {metric.value}
                  </p>
                  <p className="mt-3 font-semibold leading-6 text-black">
                    {metric.label}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase text-[#E10909]">
            Operator proof
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
            Operators want restaurant fluency before they trust the build.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <article className="h-full rounded-[32px] bg-[#f6f6f3] p-8">
                <p className="text-lg font-semibold leading-8 text-black">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-8">
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="mt-1 text-sm font-semibold text-[#62625b]">
                    {testimonial.role}, {testimonial.brand}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <Reveal className="sketch-texture mx-auto max-w-7xl rounded-[32px] bg-white p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
            <div>
              <p className="text-sm font-bold uppercase text-[#E10909]">
                Formats we understand
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
                Built for F&B brands where every outlet is similar, but never
                identical.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {restaurantFormats.map((format, index) => (
                <Reveal key={format} delay={index * 0.03}>
                  <span className="block rounded-full bg-[#f6f6f3] px-4 py-3 text-sm font-bold text-black">
                    {format}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-[#E10909]">
              Questions
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
              Clear answers before a discovery call.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-2 md:grid-cols-2">
            {faqItems.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.05}>
                <article className="h-full rounded-2xl bg-[#f6f6f3] p-6">
                  <h3 className="text-xl font-bold text-black">
                    {item.question}
                  </h3>
                  <p className="mt-3 leading-7 text-[#33332e]">
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <Reveal className="mx-auto max-w-7xl rounded-[32px] bg-[#262622] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-white/70">
                Final CTA
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight">
                Bring one messy restaurant expansion problem. Leave with a
                pilot path.
              </h2>
            </div>
            <ButtonLink href="mailto:hello@restro.tech">
              Book a Discovery Call
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
