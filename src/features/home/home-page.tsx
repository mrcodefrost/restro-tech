"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";
import { publicAsset } from "@/core/paths";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  SealCheck,
  ChartBar,
  ListChecks,
  ClipboardText,
  MapPin,
  ChatText,
  Rocket,
  Star,
  Storefront,
  Warning,
} from "@phosphor-icons/react/ssr";
import {
  clientProof,
  conversionProblems,
  discoveryAgenda,
  expertiseSignals,
  faqItems,
  products,
  processSteps,
} from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";
import { FaqAccordion } from "../shared/components/faq-accordion";
import { StepFlow } from "../shared/components/step-flow";
import {
  FloatingElement,
  ParallaxFloating,
} from "../shared/components/parallax-floating";
import SplitText from "../shared/components/split-text";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const problemIcons = [Warning, ClipboardText, Star, ListChecks];
const expertiseIcons = [ListChecks, Storefront, SealCheck, Rocket];

function FloatingMetricCard({
  label,
  value,
  tone,
  icon: Icon,
}: {
  label: string;
  value: string;
  tone: "yellow" | "teal" | "coral" | "blue";
  icon: typeof ChartBar;
}) {
  const tones = {
    yellow: "bg-[#fff8e0] text-[#746019]",
    teal: "bg-[#c3faf5] text-[#187574]",
    coral: "bg-[#ffc6c6] text-[#600000]",
    blue: "bg-[#f5f3ff] text-[#2a41b6]",
  };

  return (
    <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_18px_48px_-24px_rgba(5,0,56,0.32)] backdrop-blur">
      <div
        className={`inline-grid size-9 place-items-center rounded-full ${tones[tone]}`}
      >
        <Icon size={18} weight="duotone" />
      </div>
      <p className="mt-3 text-2xl font-medium leading-none text-[#1c1c1e]">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium leading-5 text-[#555a6a]">
        {label}
      </p>
    </div>
  );
}

function HeroFloatingBackground() {
  // The source art is one wide 1536x1024 collage (natural aspect 1.5:1).
  // Rather than centering it behind the headline, each side crops a slice
  // of it via background-position so the two clusters flank the text
  // column and the center of the hero, where the title sits, stays clear.
  // Now that the hero fills the viewport height, size the clusters off a
  // taller crop so the art flows further down into that extra space.
  const clusterHeight = 384;
  const scale = clusterHeight / 208;
  const clusterWidth = Math.round(260 * scale);
  const collageWidth = Math.round(620 * scale);
  const collageHeight = collageWidth / 1.5;
  const cropTop = Math.round(20 * scale);

  return (
    <ParallaxFloating
      sensitivity={60}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <FloatingElement
        depth={0.18}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 opacity-80 xl:block"
        style={{ width: clusterWidth, height: clusterHeight }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${publicAsset("/assets/home/hero-floating-polaroids.png")})`,
            backgroundSize: `${collageWidth}px ${collageHeight}px`,
            backgroundPosition: `0px -${cropTop}px`,
            backgroundRepeat: "no-repeat",
            maskImage:
              "linear-gradient(to right, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 50%, transparent 100%)",
          }}
        />
      </FloatingElement>
      <FloatingElement
        depth={0.18}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 opacity-80 xl:block"
        style={{ width: clusterWidth, height: clusterHeight }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${publicAsset("/assets/home/hero-floating-polaroids.png")})`,
            backgroundSize: `${collageWidth}px ${collageHeight}px`,
            backgroundPosition: `-${collageWidth - clusterWidth}px -${cropTop}px`,
            backgroundRepeat: "no-repeat",
            maskImage:
              "linear-gradient(to left, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 50%, transparent 100%)",
          }}
        />
      </FloatingElement>
      <FloatingElement
        depth={0.42}
        className="absolute left-[3%] top-[10%] hidden w-44 lg:block"
      >
        <div style={{ transform: "rotate(-7deg)" }}>
          <FloatingMetricCard
            icon={MapPin}
            tone="yellow"
            value="60+"
            label="cities mapped for franchise rollout"
          />
        </div>
      </FloatingElement>
      <FloatingElement
        depth={0.6}
        className="absolute right-[4%] top-[15%] hidden w-44 lg:block"
      >
        <div style={{ transform: "rotate(6deg)" }}>
          <FloatingMetricCard
            icon={ChartBar}
            tone="teal"
            value="4.8"
            label="direct feedback signal per outlet"
          />
        </div>
      </FloatingElement>
      <FloatingElement
        depth={0.5}
        className="absolute bottom-[10%] left-[7%] hidden w-48 md:block"
      >
        <div style={{ transform: "rotate(5deg)" }}>
          <FloatingMetricCard
            icon={ChatText}
            tone="coral"
            value="Q"
            label="wait-time alerts over WhatsApp"
          />
        </div>
      </FloatingElement>
      <FloatingElement
        depth={0.35}
        className="absolute bottom-[15%] right-[8%] hidden w-48 md:block"
      >
        <div style={{ transform: "rotate(-5deg)" }}>
          <FloatingMetricCard
            icon={Storefront}
            tone="blue"
            value="200"
            label="outlet operations without generic tooling"
          />
        </div>
      </FloatingElement>
    </ParallaxFloating>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// A hand-drawn-looking marker stroke (wavy top/bottom, rounded uneven ends)
// used as the highlight's background instead of a strict rectangle block.
const brushStrokeUrl = (color: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 60" preserveAspectRatio="none">` +
      `<path d="M6,42 C3,30 2,16 8,5 C55,-3 130,4 205,1 C248,-1 282,5 295,12 C298,22 297,35 292,47 ` +
      `C245,55 165,50 105,53 C58,55 18,52 6,42 Z" fill="${color}"/></svg>`,
  )}")`;

// A non-breaking space between "F&B" and "brand" in the hero title (below)
// makes GSAP's word-splitter treat the phrase as a single `.split-word`
// token instead of two — so the highlight below paints one continuous
// stroke with no gap, rather than two separate strokes that have to be
// stretched into each other's space (which either leaves a seam or, if
// stretched too far, bleeds onto neighboring letters).
const HERO_TITLE = "Scale your F&B brand without the generic parts.";

function Hero() {
  const titleWrapRef = useRef<HTMLDivElement>(null);

  // SplitText renders "F&B brand" as its own `.split-word` span once the
  // GSAP split runs. There's no way to hand it pre-marked JSX (it owns the
  // DOM split), so once the word's own entrance animation finishes, find
  // that span and sweep a brush-stroke highlight across it.
  const highlightBrandWords = useCallback(() => {
    const container = titleWrapRef.current;
    if (!container) return;
    const word = Array.from(
      container.querySelectorAll<HTMLElement>(".split-word"),
    ).find((el) => el.textContent?.replace(/ /g, " ").trim() === "F&B brand");
    if (!word) return;

    word.style.backgroundImage = brushStrokeUrl("#ffd02f");
    word.style.backgroundSize = "100% 100%";
    word.style.backgroundRepeat = "no-repeat";
    word.style.paddingInline = "0.18em";
    word.style.paddingTop = "0.1em";
    word.style.paddingBottom = "0.16em";
    word.style.marginInline = "-0.18em";
    word.style.marginTop = "-0.1em";
    word.style.marginBottom = "-0.16em";
    word.style.boxDecorationBreak = "clone";
    word.style.setProperty("-webkit-box-decoration-break", "clone");
    word.style.clipPath = "inset(0 100% 0 0)";
    word.style.transition = "clip-path 0.6s cubic-bezier(0.22, 1, 0.36, 1)";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        word.style.clipPath = "inset(0 0% 0 0)";
      });
    });
  }, []);

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden px-6 py-10 md:px-10 lg:px-12">
      <HeroFloatingBackground />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-3xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
          Paperwork, tech, marketing, and production for food &amp; beverage brands
        </p>
        <div ref={titleWrapRef}>
          <SplitText
            tag="h1"
            text={HERO_TITLE}
            splitType="words"
            duration={0.7}
            delay={60}
            from={{ opacity: 0, y: 24 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-[#1c1c1e] sm:text-5xl lg:text-[64px]"
            onLetterAnimationComplete={highlightBrandWords}
          />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#555a6a]">
          Custom ordering, regional menus, FSSAI and franchise paperwork,
          marketing, and production, for brands going from one outlet to
          two hundred.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/contact">Book a Discovery Call</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            See our services
          </ButtonLink>
          <ButtonLink href="/products" variant="secondary">
            Explore products
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-t border-[#eef0f3] bg-[#f7f8fa] px-6 py-20 md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
              Expansion breaks when tech treats every outlet the same.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#555a6a]">
              One brand, many local rules, plus paperwork and marketing that
              generic tech never touches.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {conversionProblems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
                <Reveal key={problem.title} delay={index * 0.06} className="h-full">
                  <article className="relative h-full overflow-hidden rounded-2xl border border-[#eef0f3] bg-white p-6">
                    <Icon className="relative text-[#4262ff]" size={24} weight="duotone" />
                    <h3 className="mt-4 text-lg font-medium leading-tight text-[#1c1c1e]">
                      {problem.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#555a6a]">
                      {problem.summary}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Why Restrovate
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
              F&amp;B expansion is not ecommerce with food photos.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#555a6a]">
              Prep time, outlet downtime, packaging, tax, kitchen capacity,
              and franchise reality shape the product.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {expertiseSignals.map((signal, index) => {
              const Icon = expertiseIcons[index];
              return (
                <Reveal key={signal.title} delay={index * 0.05} className="h-full">
                  <article className="h-full rounded-2xl border border-[#eef0f3] bg-white p-6">
                    <Icon className="text-[#4262ff]" size={24} weight="duotone" />
                    <h3 className="mt-4 text-lg font-medium text-[#1c1c1e]">
                      {signal.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#555a6a]">
                      {signal.summary}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#eef0f3] bg-white p-6 md:grid-cols-[1fr_0.85fr] md:p-8 lg:p-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Not sure where to start?
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
              Tell us what you are trying to open, fix, or scale.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#555a6a]">
              A few plain details are enough. Share where the brand is today,
              what feels stuck, and what needs to happen next. We will take it
              from there.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact">Start the conversation</ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-2 rounded-2xl bg-[#1c1c1e] p-5 text-white">
              {[
                "What are you building toward?",
                "What is getting in the way?",
                "What would make the next step easier?",
                "When do you want to move?",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#ffd02f] text-xs font-semibold text-[#1c1c1e]">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-5">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#1c1c1e] px-6 py-20 text-white md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Pilot first. Then expand region by region.
            </h2>
          </Reveal>

          <Reveal className="mt-10">
            <StepFlow
              steps={processSteps}
              accentColor="#ffd02f"
              cardClassName="bg-white/5 text-white"
              direction="horizontal"
            />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Products
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
              Standalone tools, built from real franchise work.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#555a6a]">
              Four products inside one software suite. A client can activate
              any one product, use the same account, pay only for what is
              active, and cancel anytime.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.05} className="h-full">
                <Link
                  href={`/products/${product.slug}`}
                  className="group relative block h-full overflow-hidden rounded-3xl p-6 text-[#1c1c1e] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_-28px_rgba(5,0,56,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4262ff]"
                  style={{ backgroundColor: product.color.soft }}
                >
                  <ArrowUpRight
                    className="absolute right-5 top-5 text-[#1c1c1e] opacity-45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
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
                  <p className="mt-4 text-sm leading-6 text-[#2c2c34]">
                    {product.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink href="/products" variant="secondary">
              See all products
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-6 py-20 md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Clients
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
              Real F&amp;B brands, real websites, from one outlet to two hundred.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {clientProof.map((proof, index) => (
              <Reveal key={proof.brand} delay={index * 0.06} className="h-full">
                <Link
                  href={proof.href}
                  className="group flex h-full flex-col rounded-2xl border border-[#eef0f3] bg-white p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#4262ff]">
                    {proof.highlight}
                  </p>
                  <h3 className="mt-3 text-xl font-medium text-[#1c1c1e]">
                    {proof.brand}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#555a6a]">
                    {proof.detail}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#4262ff]">
                    Read case study
                    <ArrowUpRight
                      size={16}
                      weight="duotone"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Questions
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
              Clear answers before a discovery call.
            </h2>
          </Reveal>

          <Reveal className="mt-8 max-w-4xl">
            <FaqAccordion items={faqItems} />
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#1c1c1e] px-6 py-14 text-white md:px-12">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Start here
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
                Bring one messy restaurant expansion problem. Leave with a
                pilot path.
              </h2>
              <p className="mt-4 leading-7 text-white/70">
                The first call maps your outlets, menus, and integrations,
                then finds the smallest useful pilot.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="on-dark">
                  Book a Discovery Call
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal className="grid gap-2">
              {discoveryAgenda.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-xl bg-white/5 p-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#ffd02f] text-xs font-semibold text-[#1c1c1e]">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm font-medium leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
