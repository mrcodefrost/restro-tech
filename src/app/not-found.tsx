import { ButtonLink } from "@/features/shared/components/button-link";
import { FadeIn } from "@/features/shared/components/fade-in";

export default function NotFound() {
  return (
    <section className="px-6 py-24 sm:py-28 md:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            404
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="relative mt-6 inline-block text-[80px] font-medium leading-[1.1] tracking-tight text-[#1c1c1e] sm:text-[96px]">
            <span className="relative">
              404
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-3 w-full -z-10 rounded-full bg-[#ffd02f]/60"
              />
            </span>
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="mt-4 text-2xl font-medium leading-tight tracking-tight text-[#1c1c1e] sm:text-3xl">
            This outlet doesn&apos;t exist on our menu.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#555a6a]">
            The page you&apos;re looking for may have moved or never existed.
            Let&apos;s get you back to something real.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-8 flex justify-center">
          <ButtonLink href="/">Back to homepage</ButtonLink>
        </FadeIn>
      </div>
    </section>
  );
}
