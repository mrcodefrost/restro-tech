import Link from "next/link";
import { ArrowUpRight, CheckCircle2, HelpCircle } from "lucide-react";
import {
  integrationAreas,
  outcomes,
  platformPillars,
  positioningPoints,
  restaurantFormats,
  segments,
  serviceDetails,
  servicePillars,
  services,
} from "@/core/site";
import { PageHero } from "../shared/components/page-hero";
import { ButtonLink } from "../shared/components/button-link";

const generalService = services.find((service) => service.pillar === "general");

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Paperwork, tech, marketing, and production, end to end."
        summary="We take on the parts of running a food & beverage (F&B) brand that generic vendors won't touch, from FSSAI registration to a brand-native ordering site to the campaign that fills it."
        ctaLabel="Book a Discovery Call"
        ctaHref="/contact"
        mockupLabel="Our services"
        mockupSrc="/assets/home/franchise-rollout-journey.png"
        mockupAlt="Restaurant expansion workspace with compliance, menus, technology, and outlet rollout planning"
        mockupImageClassName="object-[48%_50%]"
      />

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

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            The four pillars
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
            Everything a growing F&B brand needs, under one team.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#555a6a]">
            We don&apos;t sell one bundled package. Every engagement is a
            specific service under one of four teams, legal, tech,
            marketing, or production, each with its own page and process.
          </p>

          <div className="mt-10 flex flex-col gap-14">
            {servicePillars.map((pillar) => {
              const pillarServices = services.filter(
                (service) => service.pillar === pillar.id,
              );
              return (
                <div key={pillar.id} id={pillar.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: pillar.color.accent }}
                    />
                    <h3 className="text-xl font-medium text-[#1c1c1e]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6b6f7e]">
                    {pillar.description}
                  </p>
                  <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {pillarServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group flex h-full flex-col rounded-2xl p-5 transition-opacity hover:opacity-90"
                        style={{ backgroundColor: pillar.color.soft }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-base font-medium text-[#1c1c1e]">
                            {service.title}
                          </h4>
                          <ArrowUpRight
                            size={16}
                            className="mt-1 shrink-0 text-[#1c1c1e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </div>
                        <p className="mt-2 flex-1 text-sm leading-6 text-[#2c2c34]">
                          {service.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium"
                              style={{ color: pillar.color.text }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {generalService && (
            <Link
              href={`/services/${generalService.slug}`}
              className="group mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#1c1c1e] p-8 text-white transition-opacity hover:opacity-90 md:flex-row md:items-center"
            >
              <div className="flex items-start gap-4">
                <HelpCircle size={28} className="mt-1 shrink-0 text-[#ffd02f]" />
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
                <ArrowUpRight size={16} />
              </span>
            </Link>
          )}
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
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#4262ff]" size={20} />
                  <span className="text-sm font-medium leading-6 text-[#1c1c1e]">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            Who we work with
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
            Every format, every stage.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {restaurantFormats.map((format) => (
              <span
                key={format}
                className="rounded-full border border-[#eef0f3] bg-white px-4 py-2 text-sm font-medium text-[#1c1c1e]"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#1c1c1e] px-6 py-12 text-white md:px-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-medium text-white/60">
                Start here
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight md:text-4xl">
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
