import type { ElementType, HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "canvas" | "surface" | "ink";
  spacing?: "compact" | "default";
};

const toneClasses = {
  canvas: "bg-canvas text-ink",
  surface: "bg-surface text-ink",
  ink: "bg-ink text-white",
};

const spacingClasses = {
  compact: "py-16 lg:py-20",
  default: "py-20 lg:py-24",
};

export function Section({
  tone = "canvas",
  spacing = "default",
  className = "",
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={`${toneClasses[tone]} ${spacingClasses[spacing]} ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "content" | "wide";
};

export function Container({
  size = "wide",
  className = "",
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-10 lg:px-12 ${
        size === "content" ? "max-w-5xl" : "max-w-7xl"
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

type SectionIntroProps = {
  eyebrow?: string;
  title: ReactNode;
  summary?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: ElementType;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  summary,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className = "",
}: SectionIntroProps) {
  const centered = align === "center" ? "mx-auto text-center" : "";
  const muted = tone === "dark" ? "text-white/65" : "text-copy";

  return (
    <div className={`max-w-2xl ${centered} ${className}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.12em] ${
            tone === "dark" ? "text-white/50" : "text-copy-muted"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={`${eyebrow ? "mt-4" : ""} text-3xl font-medium leading-tight tracking-tight md:text-4xl`}
      >
        {title}
      </Heading>
      {summary ? (
        <p className={`mt-4 text-lg leading-8 ${muted}`}>{summary}</p>
      ) : null}
    </div>
  );
}
