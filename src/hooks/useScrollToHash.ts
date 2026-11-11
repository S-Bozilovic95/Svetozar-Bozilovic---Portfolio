import { useEffect } from "react";

/**
 * Scrolls to the section named in the URL hash (for example #asc).
 * The page is built by React after the browser tried its own jump, so it has to be done here,
 * and once more after the images load and the page height settles.
 */
export const useScrollToHash = () => {
  useEffect(() => {
    const handleScrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;

      target?.scrollIntoView({ behavior: "instant" });
    };

    handleScrollToHash();
    window.addEventListener("load", handleScrollToHash);
    return () => window.removeEventListener("load", handleScrollToHash);
  }, []);
};
