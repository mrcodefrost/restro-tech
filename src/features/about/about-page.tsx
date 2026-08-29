import { values } from "@/core/site";
import { PageHero } from "../shared/components/page-hero";
import { Placeholder } from "../shared/components/placeholder";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RestroScale"
        title="A focused agency for food & beverage (F&B) brands at every stage of the franchise journey."
        summary="We handle paperwork, tech, marketing, and production for franchise and multi-outlet restaurant teams, plus the private chefs and catering businesses building a brand of their own."
        ctaLabel="View case studies"
        ctaHref="/case-studies"
        mockupLabel="RestroScale team"
        mockupSrc="/assets/about/team-collaboration-placeholder.png"
        mockupAlt="RestroScale multidisciplinary team workspace"
        mockupImageClassName="object-center"
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            Mission
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
            Make running an F&B brand feel designed for the brand, not bolted onto generic software.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-[#555a6a]">
          <p>
            RestroScale is a specialist agency for F&B brands. We&apos;re
            agency-first, with four standalone tools on the side, queue &amp;
            reservations, feedback &amp; analytics, loyalty, and franchise
            complaint tracking, that grew out of problems we kept solving
            for clients.
          </p>
          <p>
            Our work spans paperwork and compliance, brand-native tech,
            marketing, and studio-grade production. We&apos;ve built for a
            200+ outlet chain live in six countries and a single outlet
            preparing to franchise, plus personal chef and catering brands
            that aren&apos;t outlet businesses at all.
          </p>
        </div>
      </section>
      <section className="border-y border-[#eef0f3] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <Placeholder
            src="/assets/about/team-collaboration-placeholder.png"
            alt="RestroScale team collaboration placeholder with engineering, consulting, marketing, and legal workstreams"
            className="aspect-[16/10] w-full"
            rounded="2xl"
            imageClassName="object-center"
            label="Team image placeholder"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              The team
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
              Engineers, consultants, marketers, and lawyers around one F&amp;B operating problem.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#555a6a]">
              RestroScale is built as a multidisciplinary team because F&amp;B
              expansion rarely fails in one department. A website affects
              enquiries, a franchise agreement affects rollout speed, a menu
              change affects production, and a marketing campaign only works
              when the operating model can support it.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f8fa] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            How we operate
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
            Operating principles
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-[#eef0f3] bg-white p-6 text-xl font-medium text-[#1c1c1e]"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
