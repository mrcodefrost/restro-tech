import { siteConfig } from "@/core/site";

const icons = {
  LinkedIn: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px]">
      <path
        fill="currentColor"
        d="M6.94 8.94H3.58V20h3.36V8.94ZM5.26 4a1.95 1.95 0 1 0 0 3.9 1.95 1.95 0 0 0 0-3.9Zm15.16 9.93c0-3.34-1.78-4.89-4.16-4.89a3.6 3.6 0 0 0-3.24 1.78h-.05V8.94H9.75V20h3.36v-5.47c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.47v-6.07Z"
      />
    </svg>
  ),
  Instagram: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px]">
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.15A4.85 4.85 0 1 1 12 16.85 4.85 4.85 0 0 1 12 7.15Zm0 2A2.85 2.85 0 1 0 12 14.85 2.85 2.85 0 0 0 12 9.15Zm5.1-2.55a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"
      />
    </svg>
  ),
  X: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px]">
      <path
        fill="currentColor"
        d="M13.9 10.47 21.35 2h-1.76l-6.47 7.35L7.96 2H2l7.8 11.09L2 22h1.76l6.82-7.77L16.04 22H22l-8.1-11.53Zm-2.41 2.74-.79-1.1L4.41 3.3h2.7l5.08 7.11.79 1.1 6.61 9.25h-2.7l-5.4-7.56Z"
      />
    </svg>
  ),
};

type SocialLinksProps = {
  tone?: "dark" | "light";
};

export function SocialLinks({ tone = "light" }: SocialLinksProps) {
  const isDark = tone === "dark";

  return (
    <div className="flex items-center gap-2">
      {siteConfig.socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`RestroScale on ${link.label}`}
          className={`grid size-10 place-items-center rounded-full border transition-colors ${
            isDark
              ? "border-white/15 text-white/70 hover:border-white/35 hover:text-white"
              : "border-[#e0e2e8] text-[#555a6a] hover:border-[#c7cad5] hover:text-[#1c1c1e]"
          }`}
        >
          {icons[link.label as keyof typeof icons]}
        </a>
      ))}
    </div>
  );
}
