import { useEffect, useState } from "react";

/** True once the page is scrolled further than `offset` pixels */
export const useScrolledPast = (offset: number) => {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsPast(window.scrollY > offset);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isPast;
};
