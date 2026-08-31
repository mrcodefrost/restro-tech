import Image from "next/image";
import { ButtonLink } from "@/features/shared/components/button-link";
import { FadeIn } from "@/features/shared/components/fade-in";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center px-6 py-8 md:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <p className="relative inline-block text-[56px] font-medium leading-[1.05] tracking-tight text-[#1c1c1e] sm:text-[72px]">
            <span className="relative">
              404
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 -z-10 h-2.5 w-full rounded-full bg-[#ffd02f]/60"
              />
            </span>
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-3 w-full">
          <Image
            src="/assets/errors/chef-missing-ingredient.png"
            alt="A confused chef holding an empty ingredient crate"
            width={768}
            height={1152}
            priority
            className="mx-auto h-auto max-h-[32vh] w-auto max-w-[220px] object-contain sm:max-h-[36vh] sm:max-w-[270px] lg:max-h-[34vh]"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="mt-4 text-2xl font-medium leading-tight tracking-tight text-[#1c1c1e] sm:text-3xl">
            This dish isn&apos;t on the menu.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base leading-7 text-[#555a6a]">
            The page may have moved. Let&apos;s get you back to something real.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-6 flex justify-center">
          <ButtonLink href="/">Back to homepage</ButtonLink>
        </FadeIn>
      </div>
    </section>
  );
}
