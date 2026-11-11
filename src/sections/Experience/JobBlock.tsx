import CardCarousel from "../../components/CardCarousel";
import ChipList from "../../components/ChipList";
import Ledger from "../../components/Ledger";
import LinkList from "../../components/LinkList";
import LogoMark from "../../components/LogoMark";
import MediaCarousel from "../../components/MediaCarousel";
import { linksTitle } from "../../data/site";
import type { Job } from "../../types/content";
import { cn } from "../../utils/cn";
import ProjectBlock from "./ProjectBlock";

interface JobBlockProps {
  job: Job;
}

const JobBlock = ({ job }: JobBlockProps) => {
  const {
    id,
    company,
    logo,
    initials,
    startLabel,
    endLabel,
    role,
    kind,
    lead,
    rows,
    media,
    mediaAspect,
    cards,
    chips,
    links,
    projects,
    todo,
    longName,
  } = job;

  return (
    <article
      id={id}
      className="mb-[90px] border-b-2 border-foreground pb-[90px] last:mb-0 last:border-b-0 last:pb-10 md:mb-[130px] md:pb-[130px]"
    >
      <header className="flex flex-col items-start justify-between gap-[22px] md:flex-row md:items-center md:gap-8">
        <div className="flex items-center gap-[18px] md:gap-[26px]">
          {(logo !== undefined || initials !== undefined) && (
            <LogoMark name={company} src={logo} initials={initials} />
          )}
          <h3
            className={cn(
              "font-display font-extrabold leading-[0.95] tracking-[-0.02em] wdth-120",
              longName ? "text-[clamp(34px,3.6vw,52px)]" : "text-[clamp(38px,4.6vw,68px)]",
            )}
          >
            {company}
          </h3>
        </div>

        <p className="flex-none text-base leading-relaxed text-muted-foreground md:text-right">
          <span className="block text-xl font-semibold tabular-nums text-primary">
            {startLabel} – {endLabel}
          </span>
          {role}
          <br />
          {kind}
        </p>
      </header>

      <p className="mt-[34px] max-w-[58ch] text-xl leading-[1.7] text-muted-foreground md:mt-11">
        {lead}
      </p>
      {todo && <p className="mt-5 text-[15px] text-primary">{todo}</p>}

      {media && <MediaCarousel items={media} aspect={mediaAspect} />}
      {cards && <CardCarousel cards={cards} />}
      {rows && <Ledger items={rows} />}
      {chips && <ChipList chips={chips} />}
      {links && links.length > 0 && <LinkList links={links} title={linksTitle} />}

      {projects?.map((project) => (
        <ProjectBlock key={project.id} project={project} />
      ))}
    </article>
  );
};

export default JobBlock;
