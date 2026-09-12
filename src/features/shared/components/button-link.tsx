import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "yellow"
    | "on-dark"
    | "outline-on-dark"
    | "ghost";
  className?: string;
};

type ButtonTheme = CSSProperties & {
  "--cta-border": string;
  "--cta-base": string;
  "--cta-fill": string;
  "--cta-text": string;
  "--cta-hover-text": string;
};

const themes: Record<NonNullable<ButtonLinkProps["variant"]>, ButtonTheme> = {
  primary: {
    "--cta-border": "#1c1c1e",
    "--cta-base": "transparent",
    "--cta-fill": "#1c1c1e",
    "--cta-text": "#1c1c1e",
    "--cta-hover-text": "#ffffff",
  },
  secondary: {
    "--cta-border": "#c7cad5",
    "--cta-base": "#ffffff",
    "--cta-fill": "#eef0f3",
    "--cta-text": "#1c1c1e",
    "--cta-hover-text": "#1c1c1e",
  },
  yellow: {
    "--cta-border": "#ffd02f",
    "--cta-base": "#ffd02f",
    "--cta-fill": "#fcb900",
    "--cta-text": "#1c1c1e",
    "--cta-hover-text": "#1c1c1e",
  },
  "on-dark": {
    "--cta-border": "#ffffff",
    "--cta-base": "transparent",
    "--cta-fill": "#ffffff",
    "--cta-text": "#ffffff",
    "--cta-hover-text": "#1c1c1e",
  },
  "outline-on-dark": {
    "--cta-border": "rgba(255, 255, 255, 0.42)",
    "--cta-base": "transparent",
    "--cta-fill": "#ffffff",
    "--cta-text": "#ffffff",
    "--cta-hover-text": "#1c1c1e",
  },
  ghost: {
    "--cta-border": "transparent",
    "--cta-base": "transparent",
    "--cta-fill": "#f7f8fa",
    "--cta-text": "#1c1c1e",
    "--cta-hover-text": "#1c1c1e",
  },
};

function AnimatedLabel({ children, duplicate = false }: { children: ReactNode; duplicate?: boolean }) {
  const characters = typeof children === "string" ? Array.from(children) : null;

  return (
    <span className={`era-cta__label-layer${duplicate ? " era-cta__label-layer--enter" : ""}`}>
      {characters
        ? characters.map((character, index) => (
            <span
              key={`${character}-${index}`}
              className="era-cta__character"
              style={{ "--cta-character": index } as CSSProperties}
            >
              {character === " " ? "\u00a0" : character}
            </span>
          ))
        : children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`era-cta ${className}`} style={themes[variant]}>
      <span className="sr-only">{children}</span>
      <span className="era-cta__background" aria-hidden="true">
        <span className="era-cta__fill" />
      </span>
      <span className="era-cta__label" aria-hidden="true">
        <AnimatedLabel>{children}</AnimatedLabel>
        <AnimatedLabel duplicate>{children}</AnimatedLabel>
      </span>
    </Link>
  );
}
