import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { homeEngagements, homePageCopy } from "@/core/site";
import { StartingPointsMenu } from "./starting-points-menu";
import { Container, Section, SectionIntro } from "../shared/components/section-layout";
import { FadeIn } from "../shared/components/fade-in";

export function StartingPointsSection() {
  return (
    <Section spacing="compact" className="border-t border-line-soft">
      <Container>
        <FadeIn>
          <SectionIntro title={homePageCopy.startingPoints.title} summary={homePageCopy.startingPoints.summary} />
        </FadeIn>
      </Container>
      <div className="mt-10">
        <StartingPointsMenu />
      </div>
    </Section>
  );
}

export function EngagementsSection() {
  return (
    <Section tone="surface" spacing="compact">
      <Container>
        <FadeIn>
          <SectionIntro title={homePageCopy.engagements.title} summary={homePageCopy.engagements.summary} />
        </FadeIn>
        <div className="mt-10 grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {homeEngagements.map((engagement, index) => (
            <FadeIn key={engagement.title} delay={index * 0.05} className="flex h-full flex-col py-7 md:px-6 md:first:pl-0 md:last:pr-0 lg:px-8">
              <p className="text-sm leading-6 text-copy">{engagement.summary}</p>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-ink">{engagement.title}</h3>
              <p className="mb-6 mt-4 text-sm leading-6 text-copy">{engagement.detail}</p>
              <Link href={engagement.href} className="group mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-control text-sm font-medium text-action-deep underline decoration-line underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action">
                {engagement.label}<ArrowUpRight aria-hidden="true" size={17} className="shrink-0" />
              </Link>
            </FadeIn>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-copy">{homePageCopy.engagements.note}</p>
      </Container>
    </Section>
  );
}
