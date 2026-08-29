import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "yellow"
    | "on-dark"
    | "outline-on-dark"
    | "ghost";
  className?: string;
};

const surfaces: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary: "bg-[#1c1c1e] text-white group-hover:bg-white group-hover:text-[#1c1c1e]",
  secondary:
    "bg-white text-[#1c1c1e] border border-[#c7cad5] group-hover:bg-[#f7f8fa]",
  yellow: "bg-[#ffd02f] text-[#1c1c1e] group-hover:bg-[#fcb900]",
  "on-dark": "bg-white text-[#1c1c1e] group-hover:bg-[#f7f8fa]",
  "outline-on-dark":
    "bg-transparent text-white border border-white/30 group-hover:bg-white/10",
  ghost: "bg-transparent text-[#1c1c1e] group-hover:bg-[#f7f8fa]",
};

// Brand yellow everywhere; the "yellow" surface itself uses the deeper
// yellow-deep token instead so the comet reads against its own background.
const glowColors: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary: "#ffd02f",
  secondary: "#ffd02f",
  yellow: "#fcb900",
  "on-dark": "#ffd02f",
  "outline-on-dark": "#ffd02f",
  ghost: "#ffd02f",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-block whitespace-nowrap rounded-full p-[2px] transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 z-0 overflow-hidden rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span
          className="animate-star-movement-top absolute left-[-250%] top-1/2 h-[140%] w-[300%] -translate-y-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${glowColors[variant]}, transparent 22%)`,
            animationDuration: "3.2s",
          }}
        />
        <span
          className="animate-star-movement-bottom absolute right-[-250%] top-1/2 h-[140%] w-[300%] -translate-y-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${glowColors[variant]}, transparent 22%)`,
            animationDuration: "3.2s",
          }}
        />
      </span>
      <span
        className={`relative z-10 flex min-h-10 items-center justify-center gap-1.5 rounded-full px-6 py-2.5 text-sm font-medium leading-tight transition-colors ${surfaces[variant]}`}
      >
        {children}
      </span>
    </Link>
  );
}
