import { useRef } from "react";
import { useTimelineProgress } from "../../hooks/useTimelineProgress";
import type { Job, Project } from "../../types/content";
import { cn } from "../../utils/cn";

interface TimelineRailProps {
  jobs: Job[];
  endId: string;
}

interface SubMenuProps {
  jobId: string;
  projects: Project[];
}

const subLinkClass =
  "py-0.5 text-[14px] leading-snug text-muted-foreground transition-colors hover:text-primary";

/**
 * Links to the parts of a job, unrolled under its name when the dot is hovered. The menu keeps
 * its place in the layout, so the dot below it sits just under the menu. It is revealed with
 * a clip instead of a slide or a fade, which keeps the text sharp when the animation ends.
 */
const SubMenu = ({ jobId, projects }: SubMenuProps) => (
  <div className="invisible hidden flex-col pl-8 pt-2 transition-[clip-path,visibility] duration-300 ease-out [clip-path:inset(0_0_100%_0)] group-focus-within:visible group-focus-within:[clip-path:inset(0)] group-hover:visible group-hover:[clip-path:inset(0)] lg:flex">
    <a href={`#${jobId}`} className={subLinkClass}>
      Overview
    </a>
    {projects.map(({ id, navLabel }) => (
      <a key={id} href={`#${id}`} className={subLinkClass}>
        {navLabel}
      </a>
    ))}
  </div>
);

const TimelineRail = ({ jobs, endId }: TimelineRailProps) => {
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const { end, pastCount, activeIndex } = useTimelineProgress(
    listRef,
    fillRef,
    jobs.map((job) => job.id),
    endId,
  );

  return (
    <aside
      aria-label="Career timeline"
      className="sticky top-[68px] z-20 -mx-5 mb-10 border-b border-border bg-background/90 px-5 py-2.5 backdrop-blur-[10px] md:-mx-8 md:px-8 lg:top-[96px] lg:z-auto lg:mx-0 lg:mb-0 lg:h-[calc(100vh-130px)] lg:max-h-[720px] lg:border-b-0 lg:bg-transparent lg:p-0 lg:py-2 lg:backdrop-blur-none"
    >
      <ol
        ref={listRef}
        className="relative flex justify-between gap-1.5 lg:h-full lg:flex-col lg:justify-start lg:gap-0"
      >
        <span
          aria-hidden
          style={{ height: end }}
          className="absolute left-1.5 top-2.5 hidden w-0.5 bg-border lg:block"
        />
        <span
          ref={fillRef}
          aria-hidden
          style={{ height: end }}
          className="absolute left-1.5 top-2.5 hidden w-0.5 origin-top scale-y-0 bg-primary will-change-transform lg:block"
        />

        {jobs.map((job, index) => {
          const isActive = index === activeIndex;
          const isPast = index < pastCount;

          return (
            <li
              key={job.id}
              data-dot
              className={cn(
                "group relative flex-1 lg:last:flex-none",
                job.projects ? "lg:flex-none lg:pb-7" : "lg:flex-[1_1_0]",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-[3px] z-[1] hidden h-3.5 w-3.5 rounded-full border-2 transition-colors duration-200 lg:block",
                  isPast ? "border-primary bg-primary" : "border-border bg-background",
                  isActive && !isPast && "border-primary shadow-glow",
                  isActive && isPast && "shadow-glow",
                )}
              />
              <a
                href={`#${job.id}`}
                className={cn(
                  "block rounded-[3px] border border-border px-1 py-2 text-center text-[13px] leading-[1.35] text-muted-foreground transition-colors hover:text-foreground lg:border-0 lg:p-0 lg:pl-8 lg:text-left lg:text-base",
                  isActive && "border-primary text-primary lg:font-semibold lg:text-foreground",
                )}
              >
                <small
                  className={cn(
                    "hidden text-[13px] font-normal tabular-nums lg:block",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {job.startLabel} - {job.endLabel}
                </small>
                {job.shortName}
                {job.nameSuffix && <span className="hidden lg:inline">{job.nameSuffix}</span>}
              </a>
              {job.projects && <SubMenu jobId={job.id} projects={job.projects} />}
            </li>
          );
        })}
      </ol>
    </aside>
  );
};

export default TimelineRail;
