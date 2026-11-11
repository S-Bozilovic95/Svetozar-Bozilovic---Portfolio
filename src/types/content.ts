export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  /** Still frame shown before a video loads */
  poster?: string;
}

/** Shape of the carousel frame, the same for every slide: a screen, or a wide banner */
export type MediaAspect = "screen" | "banner";

/** One project shown as a card: a picture, a title, a sentence and a link */
export interface ProjectCard {
  title: string;
  text: string;
  image: MediaItem;
  link: LinkItem;
  tag?: string;
}

export interface Fact {
  value: string;
  label: string;
}

export interface LegendItem {
  title: string;
  text: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

/** One row of a ledger list: a title, a sentence, and an optional tag or link */
export interface LedgerItem {
  title: string;
  text: string;
  tag?: string;
  href?: string;
  /** Extra detail lines shown under the text */
  details?: string[];
  /** Technology chips shown under the text and details */
  chips?: string[];
}

/** A titled part of a job: ASC, the dashboard, the warehouse view... */
export interface Project {
  id: string;
  title: string;
  /** Short label for the timeline sub-menu */
  navLabel: string;
  intro: string;
  body?: string;
  points?: string[];
  facts?: Fact[];
  legend?: LegendItem[];
  chips?: string[];
  /** Shown next to the text, in the same block as the points */
  sideMedia?: MediaItem[];
  /** Full-width slider under the text */
  media?: MediaItem[];
  rows?: LedgerItem[];
  links?: LinkItem[];
}

export interface Job {
  id: string;
  company: string;
  /** Short name used in the timeline on small screens */
  shortName: string;
  /** The part of the name that is dropped on small screens */
  nameSuffix?: string;
  logo?: string;
  /** Letters shown in the logo square when there is no logo image */
  initials?: string;
  startLabel: string;
  endLabel: string;
  role: string;
  kind: string;
  lead: string;
  rows?: LedgerItem[];
  media?: MediaItem[];
  mediaAspect?: MediaAspect;
  /** Projects shown as cards in a carousel */
  cards?: ProjectCard[];
  links?: LinkItem[];
  chips?: string[];
  projects?: Project[];
  /** Shown while the real text is still being written */
  todo?: string;
  longName?: boolean;
}

export interface Course {
  title: string;
  provider: string;
  certificateImage?: string;
  certificateUrl?: string;
}

export interface SkillGroup {
  label: string;
  items: string;
}
