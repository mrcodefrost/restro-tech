import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/core/site";
import { Placeholder } from "../shared/components/placeholder";

export function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-[#eef0f3] bg-white px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            Case studies
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-[40px]">
            Project reports for restaurant brands with expansion complexity.
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#555a6a]">
            A concise look at the situation, the constraints, the decisions
            we made, and what actually shipped, with real numbers where we
            have them and honest scope where we don&apos;t.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl auto-rows-fr gap-4 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group flex h-full min-h-[344px] flex-col overflow-hidden rounded-2xl border border-[#eef0f3] bg-white transition-colors hover:border-[#c7cad5]"
            >
              <Placeholder
                src={study.image}
                alt={`${study.client} website homepage snapshot`}
                className="h-48 w-full border-0"
                rounded="lg"
                imageClassName="object-top"
              />

              <div className="flex flex-1 flex-col p-4">
                <div className="flex min-h-5 flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-wide text-[#6b6f7e]">
                  <span className="text-[#4262ff]">0{index + 1}</span>
                  <span>{study.category}</span>
                </div>

                <h2 className="mt-3 min-h-[52px] text-xl font-medium leading-tight text-[#1c1c1e]">
                  {study.title}
                </h2>

                <p className="mt-2 overflow-hidden text-sm leading-6 text-[#555a6a] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  {study.summary}
                </p>

                <div className="mt-auto pt-3">
                  <div className="border-t border-[#eef0f3] pt-3">
                    <p className="overflow-hidden text-sm font-medium leading-5 text-[#1c1c1e] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                      {study.result}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#4262ff]">
                      Read report
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
