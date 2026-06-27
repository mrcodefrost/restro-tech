import { roles } from "@/core/site";
import { PageHero } from "../shared/components/page-hero";

export function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help build digital systems for the next generation of restaurant chains."
        summary="This is placeholder hiring content for the first site version. The intent is to show a serious agency surface while the team and openings evolve."
        ctaLabel="Email your profile"
        ctaHref="mailto:hello@restro.tech"
      />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-2">
          {roles.map((role) => (
            <article
              key={role.title}
              className="grid gap-4 rounded-2xl bg-[#f6f6f3] p-6 md:grid-cols-[1fr_0.6fr_1.4fr]"
            >
              <h2 className="text-2xl font-bold text-black">
                {role.title}
              </h2>
              <p className="font-semibold text-[#62625b]">{role.location}</p>
              <p className="leading-7 text-[#33332e]">{role.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
