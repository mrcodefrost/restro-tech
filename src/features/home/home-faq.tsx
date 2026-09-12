"use client";

import { useId, useState } from "react";
import { CaretDown } from "@phosphor-icons/react/ssr";
import { faqItems, homeAdditionalFaqItems, homePageCopy } from "@/core/site";
import { FaqAccordion } from "../shared/components/faq-accordion";

export function HomeFaq() {
  const [expanded, setExpanded] = useState(false);
  const additionalId = useId();

  return (
    <div>
      <FaqAccordion items={faqItems} openOnHover={false} />
      <div id={additionalId} hidden={!expanded}>
        <FaqAccordion items={homeAdditionalFaqItems} openOnHover={false} />
      </div>
      <button type="button" aria-expanded={expanded} aria-controls={additionalId} onClick={() => setExpanded((value) => !value)} className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-full border border-line bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action">
        {expanded ? homePageCopy.faq.showLess : homePageCopy.faq.showMore}
        <CaretDown aria-hidden="true" size={17} className={`transition-transform motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}
