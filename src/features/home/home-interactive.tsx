"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChartBar, ChatText, MapPin, Storefront } from "@phosphor-icons/react/ssr";
import { publicAsset } from "@/core/paths";
import { brandGrowthQuestions } from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";
import { FloatingElement, ParallaxFloating } from "../shared/components/parallax-floating";
import SplitText from "../shared/components/split-text";
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
    yellow: "bg-brand-soft text-[#746019]",
    teal: "bg-[#c3faf5] text-[#187574]",
    coral: "bg-[#ffc6c6] text-[#600000]",
    blue: "bg-action-soft text-action-deep",
  };

  return (
    <div className="rounded-card border border-white/80 bg-white/90 p-4 shadow-[0_18px_48px_-24px_rgba(5,0,56,0.32)] backdrop-blur">
      <div
        className={`inline-grid size-9 place-items-center rounded-full ${tones[tone]}`}
      >
        <Icon size={18} weight="duotone" />
      </div>
      <p className="mt-3 text-2xl font-medium leading-none text-ink">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium leading-5 text-copy">
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

export function HomeHero() {
  const titleWrapRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

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
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto w-full max-w-3xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-copy-muted">
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
            className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[64px]"
            onLetterAnimationComplete={highlightBrandWords}
          />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-copy">
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

export function GrowthQuestionPanel() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveQuestion((current) => (current + 1) % brandGrowthQuestions.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="relative overflow-hidden rounded-display bg-ink px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-14 lg:py-12">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 size-64 rounded-full bg-brand/15 blur-3xl"
      />
      <div className="relative flex items-center justify-between gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
          Your brand comes first
        </p>
        <p className="font-mono text-xs tracking-wider text-white/45">
          {String(activeQuestion + 1).padStart(2, "0")} / {String(brandGrowthQuestions.length).padStart(2, "0")}
        </p>
      </div>

      <div className="relative mt-10 flex min-h-44 items-center sm:min-h-40 lg:min-h-48">
        <SplitText
          key={brandGrowthQuestions[activeQuestion]}
          tag="h2"
          text={brandGrowthQuestions[activeQuestion]}
          splitType="words"
          duration={prefersReducedMotion ? 0 : 0.7}
          delay={prefersReducedMotion ? 0 : 60}
          from={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
          className="max-w-5xl text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl"
        />
      </div>

      <div className="relative mt-8 grid grid-cols-3 gap-2" aria-hidden="true">
        {brandGrowthQuestions.map((question, index) => (
          <span key={question} className="h-0.5 overflow-hidden rounded-full bg-white/15">
            <span
              className="block h-full origin-left rounded-full bg-brand transition-transform duration-500 motion-reduce:transition-none"
              style={{ transform: `scaleX(${index === activeQuestion ? 1 : 0})` }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
