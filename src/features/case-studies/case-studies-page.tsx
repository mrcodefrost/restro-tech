import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/core/site";
import { PageHero } from "../shared/components/page-hero";

export function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Sample stories for the kind of restaurant work this agency will pursue."
        summary="These are temporary examples to complete the design pass. They should be replaced with real projects as soon as permission and outcomes are available."
        ctaLabel="Book a Discovery Call"
        ctaHref="mailto:hello@restro.tech"
      />
      <section className="mx-auto grid max-w-7xl gap-2 px-6 py-16 md:grid-cols-3 md:px-10 lg:px-12">
        {caseStudies.map((study) => (
          <Link
            key={study.title}
            href={`/case-studies/${study.slug}`}
            className="overflow-hidden rounded-[32px] bg-[#f6f6f3] transition-transform hover:-translate-y-1"
          >
            <div className="aspect-[4/5]">
              <Image
                src={study.image}
                alt={study.title}
                width={900}
                height={1125}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-black">
                {study.result}
              </span>
              <h2 className="mt-5 text-2xl font-bold text-black">
                {study.title}
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-[#62625b]">
                <span>{study.outletCount}</span>
                <span>{study.region}</span>
              </div>
              <p className="mt-3 leading-7 text-[#33332e]">{study.summary}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
