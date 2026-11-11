interface PointListProps {
  points: string[];
}

const PointList = ({ points }: PointListProps) => (
  <ul className="mt-8 text-left">
    {points.map((point) => (
      <li
        key={point}
        className="relative border-t border-border py-4 pl-[34px] text-base last:border-b"
      >
        <span className="absolute left-[3px] top-[27px] h-2 w-2 rounded-full bg-primary shadow-glow" />
        {point}
      </li>
    ))}
  </ul>
);

export default PointList;
