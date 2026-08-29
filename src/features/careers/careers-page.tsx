import { roles } from "@/core/site";
import { PageHero } from "../shared/components/page-hero";

export function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help build digital systems for the next generation of restaurant chains."
        summary="We work across paperwork, tech, marketing, and production for food & beverage (F&B) brands at every stage of the franchise journey. Open roles below."
        ctaLabel="Email your profile"
        ctaHref="mailto:relations@synradlabs.com"
        mockupLabel="Open roles"
        mockupSrc="/assets/about/team-collaboration-placeholder.png"
        mockupAlt="RestroScale team workspace for F&B systems, consulting, marketing, and legal work"
        mockupImageClassName="object-center"
      />
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid gap-3">
          {roles.map((role) => (
            <article
              key={role.title}
              className="grid gap-4 rounded-2xl border border-[#eef0f3] bg-[#f7f8fa] p-6 md:grid-cols-[1fr_0.6fr_1.4fr]"
            >
              <h2 className="text-2xl font-medium text-[#1c1c1e]">
                {role.title}
              </h2>
              <p className="font-medium text-[#6b6f7e]">{role.location}</p>
              <p className="leading-7 text-[#555a6a]">{role.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
