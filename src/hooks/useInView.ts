import { useEffect, useRef, useState } from "react";

/** Tells whether the referenced element is currently visible in the viewport */
export const useInView = <T extends Element>(threshold = 0.4) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold,
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};
