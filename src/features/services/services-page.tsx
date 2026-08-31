import { Suspense } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  CheckCircle,
  Devices,
  Megaphone,
  ListChecks,
  Question,
} from "@phosphor-icons/react/ssr";
import {
  integrationAreas,
  outcomes,
  platformPillars,
  positioningPoints,
  segments,
  serviceDetails,
  servicePillars,
  services,
  type ServicePillarId,
} from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";
import { FadeIn } from "../shared/components/fade-in";
import SplitText from "../shared/components/split-text";
import { ServiceExplorer } from "./service-explorer";

const generalService = services.find((service) => service.pillar === "general");

const pillarIcons: Partial<Record<ServicePillarId, typeof Camera>> = {
  legal: ListChecks,
  tech: Devices,
  marketing: Megaphone,
  production: Camera,
};

export function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-14 pt-16 sm:pt-20 md:px-10 lg:px-12 lg:pb-16 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                Services
              </p>
            </FadeIn>
            <SplitText
              tag="h1"
              text="Paperwork, tech, marketing, and production, end to end."
              splitType="words"
              duration={0.7}
              delay={60}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-[#1c1c1e] sm:text-5xl lg:text-6xl"
            />
            <FadeIn delay={0.15}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#555a6a]">
                We take on the parts of running a food &amp; beverage (F&amp;B)
                brand that generic vendors won&apos;t touch, from FSSAI
                registration to a brand-native ordering site to the campaign
                that fills it.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-8">
              <ButtonLink href="/contact">Book a Discovery Call</ButtonLink>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {servicePillars.map((pillar) => {
                const Icon = pillarIcons[pillar.id];
                return (
                  <Link
                    key={pillar.id}
                    href={`/services?pillar=${pillar.id}#all-services`}
                    className="rounded-2xl border border-[#eef0f3] p-5 transition-transform duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: pillar.color.soft }}
                  >
                    {Icon ? (
                      <span
                        className="grid size-10 place-items-center rounded-xl bg-white"
                        style={{ color: pillar.color.text }}
                      >
                        <Icon size={20} weight="duotone" />
                      </span>
                    ) : null}
                    <h3 className="mt-3 text-base font-medium text-[#1c1c1e]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-[#6b6f7e]">
                      {pillar.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <Suspense fallback={null}>
        <ServiceExplorer services={services} servicePillars={servicePillars} />
      </Suspense>

      {generalService && (
        <section className="px-6 pb-20 pt-4 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Link
              href={`/services/${generalService.slug}`}
              className="group flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#1c1c1e] p-8 text-white transition-opacity hover:opacity-90 md:flex-row md:items-center"
            >
              <div className="flex items-start gap-4">
                <Question size={28} weight="duotone" className="mt-1 shrink-0 text-[#ffd02f]" />
                <div>
                  <h3 className="text-xl font-medium">
                    {generalService.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                    {generalService.summary}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition-transform group-hover:translate-x-0.5">
                Start a conversation
                <ArrowUpRight size={16} weight="duotone" />
              </span>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-[#f7f8fa] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            Who we serve
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
            Two segments, one team.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {segments.map((segment) => (
              <article
                key={segment.title}
                className="rounded-2xl border border-[#eef0f3] bg-white p-6"
              >
                <h3 className="text-xl font-medium text-[#1c1c1e]">
                  {segment.title}
                </h3>
                <p className="mt-3 leading-7 text-[#555a6a]">
                  {segment.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {segment.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-[#f7f8fa] px-3 py-1.5 text-xs font-medium text-[#1c1c1e]"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 md:grid-cols-3">
            {positioningPoints.map((point) => (
              <article
                key={point.label}
                className="rounded-2xl border border-[#eef0f3] bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                  {point.label}
                </p>
                <h3 className="mt-3 text-lg font-medium leading-tight text-[#1c1c1e]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#555a6a]">
                  {point.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            Tech, in depth
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
            Four layers behind every ordering and brand site build.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {platformPillars.map((pillar) => (
              <article key={pillar.title} className="h-full rounded-2xl border border-[#eef0f3] bg-white p-5">
                <h3 className="text-lg font-medium text-[#1c1c1e]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b6f7e]">
                  {pillar.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pillar.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f7f8fa] px-2.5 py-1.5 text-[11px] font-medium text-[#1c1c1e]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {integrationAreas.map((area) => (
              <article
                key={area.title}
                className="h-full rounded-2xl border border-[#eef0f3] bg-white p-5"
              >
                <h3 className="text-lg font-medium text-[#1c1c1e]">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b6f7e]">
                  {area.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Who it&apos;s for
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
              Guests, operators, and leadership all need something different.
            </h2>
            <div className="mt-6 grid gap-3">
              {serviceDetails.map((detail) => (
                <article key={detail.title} className="rounded-2xl bg-[#f7f8fa] p-5">
                  <h3 className="text-lg font-medium text-[#1c1c1e]">{detail.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#555a6a]">
                    {detail.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              What you get
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
              By the end of an engagement.
            </h2>
            <ul className="mt-6 grid gap-3">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 rounded-2xl bg-[#f7f8fa] p-4">
                  <CheckCircle className="mt-0.5 shrink-0 text-[#4262ff]" size={20} weight="duotone" />
                  <span className="text-sm font-medium leading-6 text-[#1c1c1e]">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#1c1c1e] px-6 py-12 text-white md:px-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="max-w-2xl text-3xl font-medium leading-tight md:text-4xl">
                Also curious about our standalone products?
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-white/70">
                Queue and reservations, feedback and analytics, loyalty, and
                franchise complaint tracking are available on their own, no
                full engagement required.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/products" variant="outline-on-dark">
                See products
              </ButtonLink>
              <ButtonLink href="/contact" variant="on-dark">
                Book a Discovery Call
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
