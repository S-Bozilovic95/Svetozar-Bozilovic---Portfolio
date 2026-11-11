interface SectionTitleProps {
  title: string;
  description?: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => (
  <div className="flex flex-col items-start justify-between gap-3.5 border-b-2 border-foreground pb-9 md:flex-row md:items-end md:gap-8">
    <h2 className="font-display text-[clamp(38px,6vw,88px)] font-extrabold uppercase leading-[0.95] tracking-[-0.015em] wdth-122">
      {title}
    </h2>
    {description && <p className="max-w-[34ch] text-[17px] text-muted-foreground">{description}</p>}
  </div>
);

export default SectionTitle;
