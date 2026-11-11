import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Counts from 0 to `target` with an ease-out curve */
export const useCountUp = (target: number, duration = 1400) => {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (reducedMotion) return;

    let frame = 0;
    let start: number | null = null;

    const step = (now: number) => {
      start ??= now;
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round((1 - Math.pow(1 - progress, 3)) * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, reducedMotion]);

  return value;
};
