import { Fragment } from "react";
import { CaretDoubleDown, CaretDoubleRight } from "@phosphor-icons/react/ssr";

type Step = {
  title: string;
  summary: string;
};

type StepFlowProps = {
  steps: Step[];
  accentColor?: string;
  cardClassName?: string;
  /**
   * "vertical" always stacks with down-arrow connectors (for narrow columns).
   * "horizontal" stacks on mobile and lays out left-to-right with
   * right-arrow connectors from md up (for full-width sections).
   */
  direction?: "vertical" | "horizontal";
};

function Chip({ accentColor, icon: Icon }: { accentColor: string; icon: typeof CaretDoubleRight }) {
  return (
    <span
      className="grid size-7 shrink-0 place-items-center rounded-full"
      style={{ backgroundColor: accentColor }}
    >
      <Icon size={14} weight="bold" className="text-[#1c1c1e]" />
    </span>
  );
}

export function StepFlow({
  steps,
  accentColor = "#ffd02f",
  cardClassName = "border border-[#eef0f3] bg-white text-[#1c1c1e]",
  direction = "vertical",
}: StepFlowProps) {
  return (
    <div
      className={`flex flex-col ${
        direction === "horizontal" ? "md:flex-row md:items-stretch" : ""
      }`}
    >
      {steps.map((step, index) => (
        <Fragment key={step.title}>
          <article className={`flex-1 rounded-2xl p-5 ${cardClassName}`}>
            <span className="text-sm font-medium" style={{ color: accentColor }}>
              0{index + 1}
            </span>
            <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 opacity-70">{step.summary}</p>
          </article>

          {index < steps.length - 1 ? (
            <>
              {direction === "horizontal" ? (
                <div className="hidden shrink-0 items-center justify-center md:flex md:w-10">
                  <Chip accentColor={accentColor} icon={CaretDoubleRight} />
                </div>
              ) : null}
              <div
                className={`flex items-center justify-center py-1.5 ${
                  direction === "horizontal" ? "md:hidden" : ""
                }`}
              >
                <Chip accentColor={accentColor} icon={CaretDoubleDown} />
              </div>
            </>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
