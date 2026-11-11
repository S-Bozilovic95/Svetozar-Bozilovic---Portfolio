import { createContext } from "react";
import type { MediaItem } from "../types/content";

export interface LightboxContextValue {
  openLightbox: (items: MediaItem[], startIndex?: number) => void;
  /** True while the viewer is on screen, so the page behind it can stop playing video */
  isOpen: boolean;
}

export const LightboxContext = createContext<LightboxContextValue | null>(null);
