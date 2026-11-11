import {
  siElectron,
  siGit,
  siJavascript,
  siMui,
  siNextdotjs,
  siReact,
  siReactquery,
  siRedux,
  siTailwindcss,
  siTypescript,
  siVitest,
  type SimpleIcon,
} from "simple-icons";

export interface Technology {
  name: string;
  /** SVG path of the logo, on a 24 by 24 canvas */
  path: string;
}

/** Names as they are written on my CV, where they differ from the icon library */
const displayNames: Record<string, string> = {
  MUI: "Material UI",
  "React Query": "TanStack Query",
};

const toTechnology = ({ title, path }: SimpleIcon): Technology => ({
  name: displayNames[title] ?? title,
  path,
});

/** What I work with every day, shown on the inner ring of the hero */
export const coreTechnologies: Technology[] = [
  siReact,
  siTypescript,
  siJavascript,
  siNextdotjs,
].map(toTechnology);

/** The rest of the stack, shown on the outer ring */
export const supportTechnologies: Technology[] = [
  siElectron,
  siMui,
  siRedux,
  siReactquery,
  siTailwindcss,
  siVitest,
  siGit,
].map(toTechnology);
