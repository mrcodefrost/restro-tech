import { Placeholder } from "./placeholder";

export type TeamMember = {
  name: string;
  title: string;
  src?: string;
};

type TeamShowcaseProps = {
  members: TeamMember[];
};

export function TeamShowcase({ members }: TeamShowcaseProps) {
  return (
    <div className="w-full px-6 md:px-10 lg:px-12">
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-8 lg:flex-nowrap">
        {members.map((member, index) => (
          <div
            key={member.name}
            className={`flex w-16 shrink-0 flex-col items-center text-center sm:w-20 md:w-24 xl:w-32 2xl:w-40 ${
              index % 2 === 1 ? "lg:mt-10 xl:mt-12" : ""
            }`}
          >
            <Placeholder
              src={member.src}
              alt={member.src ? member.name : ""}
              rounded="full"
              className="aspect-square w-full"
            />
            <p className="mt-3 text-xs font-medium leading-4 text-[#1c1c1e] sm:text-sm">
              {member.name}
            </p>
            <p className="mt-1 text-[11px] leading-4 text-[#6b6f7e] sm:text-xs">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
