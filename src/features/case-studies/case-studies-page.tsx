import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/core/site";

export function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-[#e5e5e0] bg-white px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase text-[#e60023]">
            Case studies
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-black md:text-[40px]">
            Project reports for restaurant brands with expansion complexity.
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#33332e]">
            A concise look at the situation, operating constraints, decisions,
            and measurable outcomes behind each engagement.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfbf9] px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl auto-rows-fr gap-3 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group flex h-full min-h-[304px] flex-col overflow-hidden rounded-2xl border border-[#dadad3] bg-white transition-colors hover:bg-[#f6f6f3]"
            >
              <div className="h-24 overflow-hidden bg-[#f6f6f3]">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={420}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex min-h-5 flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-bold uppercase leading-none text-[#62625b]">
                  <span className="text-[#e60023]">0{index + 1}</span>
                  <span>{study.category}</span>
                </div>

                <h2 className="mt-3 min-h-[52px] text-xl font-bold leading-tight text-black">
                  {study.title}
                </h2>

                <p className="mt-2 overflow-hidden text-sm leading-6 text-[#33332e] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  {study.summary}
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <span className="rounded-full bg-[#f6f6f3] px-2.5 py-1.5 text-[11px] font-bold text-black">
                    {study.outletCount}
                  </span>
                  <span className="rounded-full bg-[#f6f6f3] px-2.5 py-1.5 text-[11px] font-bold text-black">
                    {study.timeline}
                  </span>
                  <span className="col-span-2 truncate rounded-full bg-[#f6f6f3] px-2.5 py-1.5 text-[11px] font-bold text-black">
                    {study.region}
                  </span>
                </div>

                <div className="mt-auto pt-3">
                  <div className="border-t border-[#e5e5e0] pt-3">
                    <p className="overflow-hidden text-sm font-bold leading-5 text-black [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                      {study.result}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#e60023]">
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
