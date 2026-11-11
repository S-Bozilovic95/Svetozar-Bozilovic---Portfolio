import ChipList from "../../components/ChipList";
import FactList from "../../components/FactList";
import Ledger from "../../components/Ledger";
import LinkList from "../../components/LinkList";
import MediaCarousel from "../../components/MediaCarousel";
import PointList from "../../components/PointList";
import { linksTitle } from "../../data/site";
import type { LegendItem, Project } from "../../types/content";

interface ProjectBlockProps {
  project: Project;
}

interface LegendProps {
  items: LegendItem[];
}

const Legend = ({ items }: LegendProps) => (
  <ol className="mt-11 grid gap-7 lg:grid-cols-3 lg:gap-12">
    {items.map(({ title, text }, index) => (
      <li key={title} className="grid grid-cols-[30px_1fr] gap-4 text-base text-muted-foreground">
        <b className="grid h-[30px] w-[30px] place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
          {index + 1}
        </b>
        <span>
          <strong className="mb-1 block font-semibold text-foreground">{title}</strong>
          {text}
        </span>
      </li>
    ))}
  </ol>
);

const ProjectBlock = ({ project }: ProjectBlockProps) => {
  const { id, title, intro, body, points, facts, legend, chips, sideMedia, media, rows, links } =
    project;

  const hasSplit = Boolean(points);

  return (
    <div id={id} className="pt-[72px] md:pt-[120px]">
      <div className="mb-[30px] flex items-center gap-[22px] md:mb-10">
        <h3 className="font-display text-[clamp(26px,3vw,38px)] font-bold leading-[1.15] wdth-112">
          {title}
        </h3>
        <span className="h-px flex-1 bg-border" />
      </div>

      {hasSplit ? (
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-[72px]">
          <div>
            <p className="text-[21px] leading-[1.6]">{intro}</p>
            {body && <p className="mt-[22px] text-muted-foreground">{body}</p>}
            {points && <PointList points={points} />}
          </div>
          {sideMedia && <MediaCarousel items={sideMedia} className="mt-0 md:mt-0" />}
        </div>
      ) : (
        <div className="max-w-[58ch] text-xl leading-[1.7] text-muted-foreground">
          <p>{intro}</p>
          {body && <p className="mt-5">{body}</p>}
        </div>
      )}

      {facts && <FactList facts={facts} />}
      {legend && <Legend items={legend} />}
      {rows && <Ledger items={rows} />}
      {media && <MediaCarousel items={media} />}
      {chips && <ChipList chips={chips} />}
      {links && links.length > 0 && <LinkList links={links} title={linksTitle} />}
    </div>
  );
};

export default ProjectBlock;
