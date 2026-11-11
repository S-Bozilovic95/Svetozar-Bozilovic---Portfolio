interface ChipListProps {
  chips: string[];
  className?: string;
}

const ChipList = ({ chips, className = "mt-11" }: ChipListProps) => (
  <ul className={`flex flex-wrap gap-2.5 ${className}`}>
    {chips.map((chip) => (
      <li
        key={chip}
        className="rounded-[3px] border border-tint-border bg-tint px-3.5 py-1.5 text-sm font-medium text-primary"
      >
        {chip}
      </li>
    ))}
  </ul>
);

export default ChipList;
