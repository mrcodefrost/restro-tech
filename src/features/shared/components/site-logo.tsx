import Image from "next/image";

type SiteLogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function SiteLogo({ className = "", tone = "light" }: SiteLogoProps) {
  const src =
    tone === "dark"
      ? "/assets/brand/restrovate-logo-on-dark.svg"
      : "/assets/brand/restrovate-logo.svg";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Restrovate"
        width={214}
        height={47}
        priority
        className="h-11 w-auto sm:h-12"
      />
    </span>
  );
}
