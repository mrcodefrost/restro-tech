export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#1c1c1e] sm:size-8">
        <span className="size-2.5 rounded-full bg-[#ffd02f]" />
      </span>
      <span className="truncate text-lg font-semibold tracking-tight text-[#1c1c1e] sm:text-xl">
        Restrovate
      </span>
    </span>
  );
}
