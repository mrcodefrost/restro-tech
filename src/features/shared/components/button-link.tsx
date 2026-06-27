import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-[#e60023] text-white hover:bg-[#cc001f]",
  secondary: "bg-[#e5e5e0] text-black hover:bg-[#c8c8c1]",
  ghost: "bg-transparent text-black hover:bg-[#f6f6f3]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-10 items-center justify-center rounded-2xl px-4 py-2 text-sm font-bold leading-none transition-colors ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
