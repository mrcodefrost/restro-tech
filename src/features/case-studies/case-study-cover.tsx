import Image from "next/image";
import type { CaseStudy } from "@/core/site";
import { publicAsset } from "@/core/paths";

type CaseStudyCoverProps = {
  study: CaseStudy;
  index?: number;
  variant?: "band" | "card" | "detail";
  className?: string;
};

export function CaseStudyCover({
  study,
  variant = "card",
  className = "",
}: CaseStudyCoverProps) {
  const objectPosition =
    variant === "band" && study.slug === "chef-aman-puri-personal-brand-and-catering-site"
      ? "58% center"
      : "center";

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <Image
        src={publicAsset(study.image)}
        alt={`${study.client} generated case study cover`}
        fill
        sizes="(min-width: 1024px) 100vw, (min-width: 768px) 50vw, 100vw"
        draggable={false}
        className="select-none object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
