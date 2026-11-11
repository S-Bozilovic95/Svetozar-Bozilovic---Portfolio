import { useState, type ReactNode } from "react";
import Lightbox from "../components/Lightbox";
import type { MediaItem } from "../types/content";
import { LightboxContext } from "./LightboxContext";

interface LightboxState {
  items: MediaItem[];
  startIndex: number;
}

interface LightboxProviderProps {
  children: ReactNode;
}

/** Gives every image and video on the page one shared full-screen viewer */
const LightboxProvider = ({ children }: LightboxProviderProps) => {
  const [state, setState] = useState<LightboxState | null>(null);

  const openLightbox = (items: MediaItem[], startIndex = 0) => setState({ items, startIndex });
  const handleClose = () => setState(null);

  return (
    <LightboxContext.Provider value={{ openLightbox, isOpen: state !== null }}>
      {children}
      {state && (
        <Lightbox items={state.items} startIndex={state.startIndex} onClose={handleClose} />
      )}
    </LightboxContext.Provider>
  );
};

export default LightboxProvider;
