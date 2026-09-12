"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react/ssr";
import type { FaqItem } from "@/core/site";

type FaqAccordionProps = {
  items: FaqItem[];
  accentColor?: string;
  openOnHover?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function FaqAccordion({
  items,
  accentColor = "#4262ff",
  openOnHover = true,
}: FaqAccordionProps) {
  const [openQuestion, setOpenQuestion] = useState(items[0]?.question ?? "");
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="divide-y divide-line-soft border-y border-line-soft">
      {items.map((item) => {
        const isOpen = openQuestion === item.question;

        return (
          <div
            key={item.question}
            onMouseEnter={openOnHover ? () => setOpenQuestion(item.question) : undefined}
            onFocus={openOnHover ? () => setOpenQuestion(item.question) : undefined}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() =>
                setOpenQuestion((current) =>
                  current === item.question ? "" : item.question,
                )
              }
              className="group flex w-full items-center justify-between gap-5 rounded-control py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action"
            >
              <span className="text-lg font-medium leading-7 text-ink">
                {item.question}
              </span>
              <span
                className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white transition-colors group-hover:border-line-strong"
                style={{ color: isOpen ? accentColor : "var(--copy)" }}
              >
                <CaretDown
                  size={18}
                  weight="duotone"
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: EASE }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: EASE }}
                    className="max-w-3xl pb-5 text-sm leading-6 text-copy"
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
