const query = "(prefers-reduced-motion: reduce)";

/** Read once: the animations here are decorative, so a live subscription is not needed */
export const useReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia(query).matches;
