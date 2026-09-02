import Image from "next/image";

type SiteLogoProps = {
  className?: string;
  tone?: "light" | "dark";
  size?: "default" | "compact";
};

const sizeClasses: Record<NonNullable<SiteLogoProps["size"]>, string> = {
  default: "h-9 w-auto sm:h-10",
  compact: "h-[27px] w-auto sm:h-[30px]",
};

export function SiteLogo({
  className = "",
  tone = "light",
  size = "default",
}: SiteLogoProps) {
  const src =
    tone === "dark"
      ? "/assets/brand/restrovate-logo-on-dark.png"
      : "/assets/brand/restrovate-logo.png";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Restrovate"
        width={2026}
        height={321}
        priority
        className={sizeClasses[size]}
      />
    </span>
  );
}
