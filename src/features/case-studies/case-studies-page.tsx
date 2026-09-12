import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { caseStudies } from "@/core/site";
import { CaseStudyCover } from "./case-study-cover";

export function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-line-soft bg-white px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-copy-muted">
            Case studies
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-[40px]">
            Project reports for restaurant brands with expansion complexity.
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-copy">
            A concise look at the situation, the constraints, the decisions
            we made, and what actually shipped, with real numbers where we
            have them and honest scope where we don&apos;t.
          </p>
        </div>
      </section>

      <section className="bg-surface px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl auto-rows-fr gap-4 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group flex h-full min-h-[344px] flex-col overflow-hidden rounded-card border border-line-soft bg-white transition-colors hover:border-line-strong"
            >
              <CaseStudyCover
                study={study}
                index={index}
                className="h-48 w-full border-0"
              />

              <div className="flex flex-1 flex-col p-4">
                <div className="flex min-h-5 flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-wide text-copy-muted">
                  <span className="text-action">0{index + 1}</span>
                  <span>{study.category}</span>
                </div>

                <h2 className="mt-3 min-h-[52px] text-xl font-medium leading-tight text-ink">
                  {study.title}
                </h2>

                <p className="mt-2 overflow-hidden text-sm leading-6 text-copy [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  {study.summary}
                </p>

                <div className="mt-auto pt-3">
                  <div className="border-t border-line-soft pt-3">
                    <p className="overflow-hidden text-sm font-medium leading-5 text-ink [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                      {study.result}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-action">
                      Read report
                      <ArrowUpRight size={16} weight="duotone" />
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
