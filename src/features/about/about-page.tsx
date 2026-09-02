import Link from "next/link";
import { values } from "@/core/site";
import { PageHero } from "../shared/components/page-hero";
import { TeamShowcase, type TeamMember } from "../shared/components/team-showcase";

// Real roster, no headshots on file yet — the showcase falls back to a
// placeholder avatar per person until real photos exist. Add `src` per
// member once photos are ready.
// Order is deliberate: Daksh (founder) sits in the middle of the row,
// flanked by the rest of the team on either side.
const teamMembers: TeamMember[] = [
  { name: "Derek Almeida", title: "Head of Growth & Partnerships" },
  { name: "Sarthak Bhasin", title: "Business Development Lead" },
  { name: "Neelansh Singh", title: "General Counsel" },
  { name: "Mayank Tulshyan", title: "Chief of Staff" },
  { name: "Daksh Nauni", title: "Founder & CTO" },
  { name: "Ankit Malhotra", title: "Client Strategy & Insights Lead" },
  { name: "Steve Vora", title: "Head of Social Media" },
  { name: "Dhaerya", title: "Creative Director" },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Restrovate"
        title="A focused agency for food & beverage (F&B) brands at every stage of the franchise journey."
        summary="We handle paperwork, tech, marketing, and production for franchise and multi-outlet restaurant teams, plus the private chefs and catering businesses building a brand of their own."
        ctaLabel="View case studies"
        ctaHref="/case-studies"
        mockupLabel="Restrovate team"
        mockupSrc="/assets/about/team-collaboration-placeholder.png"
        mockupAlt="Restrovate multidisciplinary team workspace"
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
            Restrovate is a specialist agency for F&B brands. We&apos;re
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
      <section className="border-y border-[#eef0f3] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            The team
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#555a6a]">
            Restrovate is built as a multidisciplinary team because F&amp;B
            expansion rarely fails in one department. A website affects
            enquiries, a franchise agreement affects rollout speed, a menu
            change affects production, and a marketing campaign only works
            when the operating model can support it.
          </p>
        </div>

        <div className="mt-4">
          <TeamShowcase members={teamMembers} />
        </div>

        <p className="mt-14 text-center text-base text-[#555a6a]">
          Are you our next team member?{" "}
          <Link
            href="/careers"
            className="font-semibold uppercase tracking-wide text-[#4262ff] hover:text-[#2a41b6]"
          >
            See openings
          </Link>
        </p>
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
