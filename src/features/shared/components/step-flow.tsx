type Step = {
  title: string;
  summary: string;
};

type StepFlowProps = {
  steps: Step[];
  accentColor?: string;
  cardClassName?: string;
  direction?: "vertical" | "horizontal";
};

export function StepFlow({
  steps,
  accentColor = "#ffd02f",
  cardClassName = "text-ink",
  direction = "vertical",
}: StepFlowProps) {
  return (
    <ol
      className={`grid gap-8 ${
        direction === "horizontal" ? "md:grid-cols-2 lg:grid-cols-4" : ""
      }`}
    >
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={`relative border-t pt-5 ${cardClassName}`}
          style={{ borderColor: `${accentColor}66` }}
        >
          <span
            className="font-mono text-xs font-semibold tracking-[0.14em]"
            style={{ color: accentColor }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 text-lg font-medium leading-snug">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 opacity-70">{step.summary}</p>
        </li>
      ))}
    </ol>
  );
}
