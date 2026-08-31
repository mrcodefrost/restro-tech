import { Image as ImageIcon } from "@phosphor-icons/react/ssr";
import { publicAsset } from "@/core/paths";

type PlaceholderProps = {
  label?: string;
  src?: string;
  alt?: string;
  className?: string;
  rounded?: "lg" | "xl" | "2xl";
  imageClassName?: string;
};

const roundedClass: Record<NonNullable<PlaceholderProps["rounded"]>, string> = {
  lg: "rounded-xl",
  xl: "rounded-2xl",
  "2xl": "rounded-3xl",
};

export function Placeholder({
  label,
  src,
  alt = "",
  className = "",
  rounded = "xl",
  imageClassName = "",
}: PlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-[#e0e2e8] bg-[#f7f8fa] ${roundedClass[rounded]} ${className}`}
    >
      {src ? (
        <img
          src={publicAsset(src)}
          alt={alt}
          className={`h-full w-full object-cover ${imageClassName}`}
        />
      ) : (
        <ImageIcon className="text-[#c7cad5]" size={28} weight="duotone" />
      )}
      {label ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#1c1c1e] shadow-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
