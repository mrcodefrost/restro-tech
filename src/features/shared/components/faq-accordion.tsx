"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react/ssr";
import type { FaqItem } from "@/core/site";

type FaqAccordionProps = {
  items: FaqItem[];
  accentColor?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function FaqAccordion({
  items,
  accentColor = "#4262ff",
}: FaqAccordionProps) {
  const [openQuestion, setOpenQuestion] = useState(items[0]?.question ?? "");

  return (
    <div className="divide-y divide-[#eef0f3] border-y border-[#eef0f3]">
      {items.map((item) => {
        const isOpen = openQuestion === item.question;

        return (
          <div
            key={item.question}
            onMouseEnter={() => setOpenQuestion(item.question)}
            onFocus={() => setOpenQuestion(item.question)}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() =>
                setOpenQuestion((current) =>
                  current === item.question ? "" : item.question,
                )
              }
              className="group flex w-full items-center justify-between gap-5 py-5 text-left"
            >
              <span className="text-lg font-medium leading-7 text-[#1c1c1e]">
                {item.question}
              </span>
              <span
                className="grid size-9 shrink-0 place-items-center rounded-full border border-[#e0e2e8] bg-white transition-colors group-hover:border-[#c7cad5]"
                style={{ color: isOpen ? accentColor : "#555a6a" }}
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
                  transition={{ duration: 0.32, ease: EASE }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.24, ease: EASE }}
                    className="max-w-3xl pb-5 text-sm leading-6 text-[#555a6a]"
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
