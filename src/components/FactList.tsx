import type { Fact } from "../types/content";

interface FactListProps {
  facts: Fact[];
}

const FactList = ({ facts }: FactListProps) => (
  <dl className="mt-12 flex flex-col items-center gap-8 text-center md:mt-16 md:flex-row md:flex-wrap md:items-start md:gap-x-[72px] md:gap-y-7 md:text-left">
    {facts.map(({ value, label }) => (
      <div key={label}>
        <dt className="font-display text-[clamp(40px,4.6vw,64px)] font-extrabold leading-none text-primary wdth-118">
          {value}
        </dt>
        <dd className="text-base text-muted-foreground">{label}</dd>
      </div>
    ))}
  </dl>
);

export default FactList;
