import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  ClipboardCheck,
  Lightbulb,
  SearchCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import type { CaseStudy } from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";

type CaseStudyDetailPageProps = {
  study: CaseStudy;
};

const metricIcons = [BarChart3, Target, TrendingUp, ClipboardCheck];
const narrativeIcons = [SearchCheck, Target, ClipboardCheck];
const problemIcons = [Target, SearchCheck, ClipboardCheck, Lightbulb];
const solutionIcons = [ClipboardCheck, Target, Lightbulb];
const rationaleIcons = [Lightbulb, SearchCheck, Target];
const impactIcons = [TrendingUp, BarChart3, ClipboardCheck];

export function CaseStudyDetailPage({ study }: CaseStudyDetailPageProps) {
  return (
    <>
      <section className="sketch-texture px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-black"
          >
            <ArrowLeft size={16} />
            Case studies
          </Link>
          <div className="mt-6 grid gap-2 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] bg-white p-7 md:p-10">
              <p className="text-sm font-bold uppercase text-[#E10909]">
                {study.category}
              </p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.04] text-black md:text-6xl">
                {study.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-[#33332e]">
                {study.challenge}
              </p>
              <div className="mt-6 rounded-2xl bg-[#f6f6f3] p-5">
                <p className="text-sm font-bold uppercase text-[#E10909]">
                  Executive summary
                </p>
                <p className="mt-3 text-lg font-semibold leading-8 text-black">
                  {study.executiveSummary}
                </p>
              </div>
              <div className="mt-8 grid gap-2 sm:grid-cols-3">
                <InfoPill label="Client" value={study.client} />
                <InfoPill label="Scale" value={study.outletCount} />
                <InfoPill label="Timeline" value={study.timeline} />
              </div>
            </div>
            <div className="overflow-hidden rounded-[32px] bg-[#f6f6f3]">
              <Image
                src={study.image}
                alt={study.title}
                width={1200}
                height={900}
                priority
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-2 md:grid-cols-4">
          {study.metrics.map((metric, index) => {
            const Icon = metricIcons[index];
            return (
            <article key={metric.label} className="rounded-[32px] bg-[#f6f6f3] p-7">
              <Icon className="text-[#E10909]" size={28} />
              <p className="mt-5 text-4xl font-bold text-black">{metric.value}</p>
              <p className="mt-2 font-semibold leading-6 text-[#62625b]">
                {metric.label}
              </p>
              <p className="mt-4 text-sm leading-6 text-[#33332e]">
                {metric.context}
              </p>
            </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-2 lg:grid-cols-3">
          <NarrativeCard
            icon={narrativeIcons[0]}
            label="Situation"
            title="What was happening inside the brand"
            text={study.situation}
          />
          <NarrativeCard
            icon={narrativeIcons[1]}
            label="Diagnosis"
            title="What we believed the real issue was"
            text={study.diagnosis}
          />
          <NarrativeCard
            icon={narrativeIcons[2]}
            label="Implementation"
            title="How we turned the diagnosis into a build"
            text={study.implementationNarrative}
          />
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase text-[#E10909]">
              The problem
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
              Why this blocked expansion
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#33332e]">
              {study.whyItMattered}
            </p>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            {study.problems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
              <article key={problem} className="rounded-2xl bg-[#f6f6f3] p-6">
                <Icon className="text-[#E10909]" size={26} />
                <p className="mt-5 text-lg font-bold leading-7 text-black">
                  {problem}
                </p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#262622] p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase text-white/70">
                How we solved it
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight">
                A solution designed around restaurant reality.
              </h2>
            </div>
            <div className="grid gap-2 lg:grid-cols-3">
              {study.solution.map((solution, index) => {
                const Icon = solutionIcons[index];
                return (
                <article key={solution.title} className="rounded-2xl bg-white p-6 text-black">
                  <Icon className="text-[#E10909]" size={28} />
                  <h3 className="mt-5 text-xl font-bold">{solution.title}</h3>
                  <ul className="mt-5 grid gap-3">
                    {solution.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm font-semibold leading-6 text-[#33332e]">
                        <BadgeCheck className="mt-0.5 shrink-0 text-[#E10909]" size={18} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbf9] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase text-[#E10909]">
              Why this solution
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
              The strategy behind the build
            </h2>
          </div>
          <div className="grid gap-2">
            {study.rationale.map((item, index) => {
              const Icon = rationaleIcons[index];
              return (
              <article key={item.title} className="rounded-2xl bg-white p-6">
                <Icon className="text-[#E10909]" size={26} />
                <h3 className="mt-5 text-2xl font-bold text-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#33332e]">{item.summary}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#E10909]">
              Visual impact map
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-black">
              From messy operations to rollout-ready systems
            </h2>
          </div>
          <div className="mt-8 overflow-hidden rounded-[32px] bg-[#f6f6f3]">
            <Image
              src={study.infographicImage}
              alt={`${study.title} before and after infographic`}
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-8 grid gap-2 lg:grid-cols-3">
            {study.infographic.map((item) => (
              <article key={item.label} className="rounded-[32px] bg-[#f6f6f3] p-6">
                <p className="text-xl font-bold text-black">{item.label}</p>
                <div className="mt-5 grid gap-3">
                  <BeforeAfter label="Before" value={item.before} />
                  <BeforeAfter label="After" value={item.after} isAfter />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-2 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] bg-[#262622] p-8 text-white md:p-12">
            <p className="text-sm font-bold uppercase text-white/70">
              Impact
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              What changed after the pilot
            </h2>
            <div className="mt-8 grid gap-2 md:grid-cols-3">
              {study.impact.map((impact, index) => {
                const Icon = impactIcons[index];
                return (
                <article key={impact.label} className="rounded-2xl bg-white p-5 text-black">
                  <Icon className="text-[#E10909]" size={26} />
                  <p className="mt-4 text-3xl font-bold">{impact.value}</p>
                  <p className="mt-2 text-sm font-bold">{impact.label}</p>
                  <p className="mt-3 text-sm leading-6 text-[#62625b]">
                    {impact.detail}
                  </p>
                </article>
                );
              })}
            </div>
            <p className="mt-8 text-lg leading-8 text-white/70">
              {study.impactNarrative}
            </p>
          </div>
          <blockquote className="rounded-[32px] bg-[#f6f6f3] p-8 md:p-12">
            <p className="text-2xl font-bold leading-9 text-black">
              &quot;{study.quote.text}&quot;
            </p>
            <footer className="mt-8">
              <p className="font-bold text-black">{study.quote.person}</p>
              <p className="mt-1 text-sm font-semibold text-[#62625b]">
                {study.quote.role}
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#262622] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-white/70">
                Build your version
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight">
                Bring one messy restaurant expansion problem. Leave with a pilot path.
              </h2>
            </div>
            <ButtonLink href="mailto:hello@restro.tech">
              Book a Discovery Call
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function NarrativeCard({
  icon,
  label,
  title,
  text,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  text: string;
}) {
  const Icon = icon;

  return (
    <article className="h-full rounded-[32px] bg-[#f6f6f3] p-7">
      <Icon className="text-[#E10909]" size={28} />
      <p className="mt-5 text-sm font-bold uppercase text-[#E10909]">
        {label}
      </p>
      <h2 className="mt-3 text-2xl font-bold leading-tight text-black">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-[#33332e]">{text}</p>
    </article>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#f6f6f3] p-4">
      <p className="text-xs font-bold uppercase text-[#62625b]">{label}</p>
      <p className="mt-2 font-bold text-black">{value}</p>
    </div>
  );
}

function BeforeAfter({
  label,
  value,
  isAfter = false,
}: {
  label: string;
  value: string;
  isAfter?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-4 ${
        isAfter ? "bg-[#262622] text-white" : "bg-white text-black"
      }`}
    >
      <p className={`text-xs font-bold uppercase ${isAfter ? "text-white/70" : "text-[#62625b]"}`}>
        {label}
      </p>
      <p className="mt-2 font-bold">{value}</p>
    </div>
  );
}
