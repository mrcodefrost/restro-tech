import Image from "next/image";
import { Image as ImageIcon } from "@phosphor-icons/react/ssr";
import { publicAsset } from "@/core/paths";
import type { CSSProperties } from "react";

type MediaFrameProps = {
  label?: string;
  src?: string;
  alt?: string;
  className?: string;
  rounded?: "control" | "card" | "feature" | "display" | "full";
  imageClassName?: string;
  imageStyle?: CSSProperties;
  sizes?: string;
};

const roundedClass: Record<NonNullable<MediaFrameProps["rounded"]>, string> = {
  control: "rounded-control",
  card: "rounded-card",
  feature: "rounded-feature",
  display: "rounded-display",
  full: "rounded-full",
};

export function MediaFrame({
  label,
  src,
  alt = "",
  className = "",
  rounded = "card",
  imageClassName = "",
  imageStyle,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MediaFrameProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-line bg-surface ${roundedClass[rounded]} ${className}`}
    >
      {src ? (
        <Image
          src={publicAsset(src)}
          alt={alt}
          width={1600}
          height={1000}
          sizes={sizes}
          draggable={false}
          style={imageStyle}
          className={`h-full w-full select-none object-cover ${imageClassName}`}
        />
      ) : (
        <ImageIcon className="text-line-strong" size={28} weight="duotone" />
      )}
      {label ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
