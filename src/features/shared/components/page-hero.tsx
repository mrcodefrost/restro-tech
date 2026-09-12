import { MediaFrame } from "./media-frame";
import { ButtonLink } from "./button-link";
import SplitText from "./split-text";
import { FadeIn } from "./fade-in";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  ctaLabel?: string;
  ctaHref?: string;
  mockupLabel?: string;
  mockupSrc?: string;
  mockupAlt?: string;
  mockupImageClassName?: string;
};

export function PageHero({
  eyebrow,
  title,
  summary,
  ctaLabel,
  ctaHref,
  mockupLabel,
  mockupSrc,
  mockupAlt = "",
  mockupImageClassName,
}: PageHeroProps) {
  return (
    <section className="px-6 pb-16 pt-16 sm:pt-20 md:px-10 lg:px-12 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-wide text-copy-muted">
            {eyebrow}
          </p>
        </FadeIn>
        <SplitText
          tag="h1"
          text={title}
          splitType="words"
          duration={0.7}
          delay={60}
          from={{ opacity: 0, y: 24 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
          className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        />
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-copy">
            {summary}
          </p>
        </FadeIn>
        {ctaLabel && ctaHref ? (
          <FadeIn delay={0.3} className="mt-8 flex justify-center">
            <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
          </FadeIn>
        ) : null}
      </div>

      <div className="mx-auto mt-14 max-w-5xl">
        <MediaFrame
          src={mockupSrc}
          alt={mockupAlt}
          className="h-[220px] w-full md:h-[280px] lg:h-[320px]"
          rounded="feature"
          label={mockupLabel}
          imageClassName={mockupImageClassName}
        />
      </div>
    </section>
  );
}
