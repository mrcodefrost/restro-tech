import { values } from "@/core/site";
import { PageHero } from "../shared/components/page-hero";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Restro Tech"
        title="A focused agency for restaurant brands that have outgrown templates."
        summary="We help franchise and multi-outlet restaurant teams turn ordering, menus, loyalty, and integrations into a brand-native digital experience."
        ctaLabel="View sample case studies"
        ctaHref="/case-studies"
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12">
        <div>
          <p className="text-sm font-bold uppercase text-[#E10909]">
            Mission
          </p>
          <h2 className="mt-4 text-4xl font-bold text-black">
            Make restaurant tech feel designed for the brand and usable by every outlet.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-[#33332e]">
          <p>
            Restro Tech is starting as a lean specialist studio for restaurant
            operators who need more than a generic ordering page.
          </p>
          <p>
            Our work sits between product strategy, brand design, engineering,
            and implementation. The goal is simple: help growing chains launch
            digital systems that customers enjoy and outlet teams can manage.
          </p>
        </div>
      </section>
      <section className="bg-[#fbfbf9] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-black">
            Operating principles
          </h2>
          <div className="mt-8 grid gap-2 md:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="rounded-2xl bg-white p-6 text-xl font-bold text-black">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
