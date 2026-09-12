import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardText,
  Megaphone,
  ChatText,
  Rocket,
} from "@phosphor-icons/react/ssr";
import {
  caseStudies,
  brandGrowthSolutions,
  discoveryAgenda,
  homePageCopy,
  products,
  processSteps,
  type CaseStudy,
} from "@/core/site";
import { CaseStudyCover } from "../case-studies/case-study-cover";
import { ButtonLink } from "../shared/components/button-link";
import { StepFlow } from "../shared/components/step-flow";
import { Section, Container, SectionIntro } from "../shared/components/section-layout";
import { FadeIn } from "../shared/components/fade-in";
import { HomeHero, GrowthQuestionPanel } from "./home-interactive";
import { ServicePillarShowcase } from "./service-pillar-showcase";
import { StartingPointsSection, EngagementsSection } from "./home-decision-sections";
import { HomeFaq } from "./home-faq";

const growthSolutionIcons = [Megaphone, ChatText, ClipboardText, Rocket];

// Category strings in site.ts read as prose ("Brand website, store locator,
// and franchise enquiry"); split them into short tag chips for the case
// study bands below.
function splitCategoryTags(category: string): string[] {
  return category
    .replace(/, and /g, ", ")
    .replace(/ and /g, ", ")
    .split(", ")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function CaseStudyBand({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  const tags = splitCategoryTags(caseStudy.category);

  return (
    <FadeIn delay={index * 0.06}>
      <Link
        href={`/case-studies/${caseStudy.slug}`}
        aria-label={`View ${caseStudy.client} case study`}
        className="group relative isolate block overflow-hidden bg-ink focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-action"
      >
        <div className="pointer-events-none absolute inset-0">
        <CaseStudyCover
          study={caseStudy}
          index={index}
          variant="band"
          className="transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-linear-to-r from-black/35 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-72 max-w-7xl flex-col justify-center gap-8 px-6 py-10 md:min-h-64 md:flex-row md:items-center md:justify-between md:px-10 lg:min-h-72 lg:px-12">
          <div className="max-w-xl md:flex-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/85">
              {caseStudy.slug === "chef-aman-puri-personal-brand-and-catering-site"
                ? "Private chef & catering"
                : caseStudy.outletCount}
            </p>
              <h3 className="text-2xl font-medium uppercase leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
                {caseStudy.client}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/90">
                {caseStudy.result}
              </p>
            </div>
          <div className="flex flex-col items-start gap-5 md:max-w-sm md:flex-1 md:items-end">
            <div className="flex flex-wrap gap-2 md:justify-end">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/50 bg-black/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink">
              View case study
              <ArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                size={18}
              />
            </span>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

export function HomePage() {
  return (
    <>
      <HomeHero />
      <StartingPointsSection />

      <Section tone="surface" className="border-t border-line-soft">
        <Container>
          <FadeIn>
            <GrowthQuestionPanel />
          </FadeIn>

          <FadeIn className="mt-12" delay={0.08}>
            <SectionIntro
              eyebrow={homePageCopy.solutions.eyebrow}
              as="h3"
              title={homePageCopy.solutions.title}
              className="mb-7"
            />

            <ol className="grid overflow-hidden rounded-display border border-line bg-white md:grid-cols-2">
              {brandGrowthSolutions.map((solution, index) => {
                const Icon = growthSolutionIcons[index];
                return (
                  <li
                    key={solution.title}
                    className="group border-b border-line p-6 last:border-b-0 md:p-8 md:odd:border-r md:[&:nth-child(3)]:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-full bg-brand-soft text-[#746019] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                        <Icon size={21} weight="duotone" />
                      </span>
                      <span className="font-mono text-xs tracking-wider text-copy-subtle">
                        0{index + 1}
                      </span>
                    </div>
                    <h4 className="mt-8 text-xl font-medium leading-tight text-ink">
                      {solution.title}
                    </h4>
                    <p className="mt-3 max-w-md text-sm leading-6 text-copy">
                      {solution.summary}
                    </p>
                  </li>
                );
              })}
            </ol>
          </FadeIn>
        </Container>
      </Section>

      <Section className="border-t border-line-soft">
        <Container>
          <FadeIn>
            <SectionIntro
              title={homePageCopy.services.title}
              summary={homePageCopy.services.summary}
            />
          </FadeIn>
          <FadeIn className="mt-10" delay={0.06}>
            <ServicePillarShowcase />
          </FadeIn>
        </Container>
      </Section>
      <EngagementsSection />
      <Section tone="ink">
        <Container>
          <FadeIn>
            <SectionIntro
              tone="dark"
              title={homePageCopy.process.title}
              summary={homePageCopy.process.summary}
            />
          </FadeIn>

          <FadeIn className="mt-10">
            <StepFlow
              steps={processSteps}
              accentColor="#ffd02f"
              cardClassName="text-white"
              direction="horizontal"
            />
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <SectionIntro
              eyebrow={homePageCopy.products.eyebrow}
              title={homePageCopy.products.title}
              summary={homePageCopy.products.summary}
            />
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
            {products.map((product, index) => (
              <FadeIn
                key={product.slug}
                delay={index * 0.05}
                className={`h-full ${index % 4 === 0 || index % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5"}`}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group relative block min-h-64 overflow-hidden rounded-feature p-6 text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_-28px_rgba(5,0,56,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action lg:p-8"
                  style={{ backgroundColor: product.color.soft }}
                >
                  <ArrowUpRight
                    className="absolute right-5 top-5 text-ink opacity-45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    size={20}
                    weight="duotone"
                  />
                  <p
                    className="max-w-[calc(100%-32px)] text-xs font-semibold uppercase tracking-wide"
                    style={{ color: product.color.text }}
                  >
                    {product.tagline}
                  </p>
                  <h3 className="mt-4 inline-flex rounded-full bg-white px-3 py-1.5 text-xl font-semibold shadow-sm">
                    {product.name}
                  </h3>
                  <p className="mt-8 max-w-lg text-sm leading-6 text-ink-soft">
                    {product.summary}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink href="/products" variant="secondary">
              See all products
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <FadeIn>
            <SectionIntro
              title={homePageCopy.caseStudies.title}
              summary={homePageCopy.caseStudies.summary}
            />
          </FadeIn>
        </Container>

        <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyBand
              key={caseStudy.slug}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <SectionIntro
              eyebrow={homePageCopy.faq.eyebrow}
              title={homePageCopy.faq.title}
            />
          </FadeIn>

          <FadeIn className="mt-8 max-w-4xl">
            <HomeFaq />
          </FadeIn>
        </Container>
      </Section>

      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-feature bg-ink px-6 py-14 text-white md:px-12">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
            <FadeIn>
              <h2 className="text-3xl font-medium leading-tight md:text-4xl">
                {homePageCopy.closing.title}
              </h2>
              <p className="mt-4 leading-7 text-white/70">
                {homePageCopy.closing.summary}
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="on-dark">
                  Book a Discovery Call
                </ButtonLink>
              </div>
            </FadeIn>

            <FadeIn className="grid gap-2">
              {discoveryAgenda.map((item, index) => (
                <div key={item} className="flex gap-3 border-t border-white/15 py-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-xs font-semibold text-ink">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm font-medium leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
