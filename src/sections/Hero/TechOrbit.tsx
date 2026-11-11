import type { CSSProperties } from "react";
import { coreTechnologies, supportTechnologies, type Technology } from "../../data/technologies";
import { site } from "../../data/site";
import { useCountUp } from "../../hooks/useCountUp";
import { cn } from "../../utils/cn";

interface OrbitRingProps {
  technologies: Technology[];
  /** Seconds for one full turn */
  duration: number;
  isReversed?: boolean;
  className: string;
  iconClassName: string;
}

interface TechBadgeProps {
  technology: Technology;
  isReversed: boolean;
  iconClassName: string;
}

const calculateYears = () =>
  Math.floor((Date.now() - new Date(site.careerStart).getTime()) / (365.25 * 24 * 3600 * 1000));

/** Position of an icon on the ring, in percent of the ring box, starting at the top */
const calculatePosition = (index: number, count: number) => {
  const angle = (index / count) * 2 * Math.PI - Math.PI / 2;
  return { left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` };
};

/**
 * A logo that turns against its ring, so it stays upright. The turning wrapper only carries
 * the motion: the hover effect and the name tooltip live on the elements inside it.
 */
const TechBadge = ({ technology, isReversed, iconClassName }: TechBadgeProps) => (
  <span
    role="img"
    aria-label={technology.name}
    tabIndex={0}
    className={cn(
      "group/badge relative block cursor-pointer rounded-full group-hover:[animation-play-state:paused]",
      isReversed ? "animate-orbit" : "animate-orbit-reverse",
    )}
  >
    <span
      className={cn(
        "grid h-11 w-11 place-items-center rounded-full border border-border bg-background transition-all duration-200 group-hover/badge:scale-110 group-hover/badge:border-primary group-hover/badge:text-primary group-hover/badge:shadow-glow-lg group-focus-visible/badge:scale-110 group-focus-visible/badge:border-primary md:h-14 md:w-14",
        iconClassName,
      )}
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-[22px] w-[22px] fill-current md:h-7 md:w-7">
        <path d={technology.path} />
      </svg>
    </span>
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-[3px] border border-border bg-card px-3 py-1 text-[13px] font-medium text-foreground opacity-0 shadow-lift transition-all duration-200 group-hover/badge:translate-y-0 group-hover/badge:opacity-100 group-focus-visible/badge:translate-y-0 group-focus-visible/badge:opacity-100"
    >
      {technology.name}
    </span>
  </span>
);

/** A turning ring of logos. The ring that holds the hovered logo is raised above the other. */
const OrbitRing = ({
  technologies,
  duration,
  isReversed = false,
  className,
  iconClassName,
}: OrbitRingProps) => (
  <div
    style={{ "--orbit-duration": `${duration}s` } as CSSProperties}
    className={cn(
      "absolute rounded-full border border-dashed border-muted-foreground/30 group-hover:[animation-play-state:paused] has-[:focus-visible]:z-10 has-[:hover]:z-10",
      isReversed ? "animate-orbit-reverse" : "animate-orbit",
      className,
    )}
  >
    {technologies.map((technology, index) => (
      <span
        key={technology.name}
        style={calculatePosition(index, technologies.length)}
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <TechBadge technology={technology} isReversed={isReversed} iconClassName={iconClassName} />
      </span>
    ))}
  </div>
);

/** Hero visual: the technologies I work with, turning around the years of experience */
const TechOrbit = () => {
  const years = useCountUp(calculateYears());

  return (
    <div
      role="group"
      aria-label="Technologies I work with"
      className="group relative mx-auto aspect-square w-full max-w-[560px]"
    >
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgb(var(--primary)/0.12),transparent_66%)]"
      />

      <OrbitRing
        technologies={supportTechnologies}
        duration={90}
        isReversed
        className="inset-[2%]"
        iconClassName="text-muted-foreground"
      />
      <OrbitRing
        technologies={coreTechnologies}
        duration={60}
        className="inset-[21%]"
        iconClassName="text-primary"
      />

      <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
        <div>
          <span className="block font-display text-[clamp(56px,6vw,84px)] font-extrabold tabular-nums leading-none text-primary wdth-118">
            {years}+
          </span>
          <p className="mt-2.5 text-[15px] leading-normal">
            years of frontend work
            <small className="mx-auto mt-0.5 block max-w-[20ch] text-sm text-muted-foreground">
              React and TypeScript, since 06/2021
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechOrbit;
