import { useEffect, useState, type RefObject } from "react";

interface TimelineLayout {
  /** Height of the whole line, from the first dot to the last, in px */
  end: number;
  /** Distance of each dot from the first one, in px */
  dotOffsets: number[];
  /** How many dots the filled line has already reached */
  pastCount: number;
  activeIndex: number;
}

const initial: TimelineLayout = { end: 0, dotOffsets: [], pastCount: 0, activeIndex: -1 };

const DOT_CENTER = 10;

/**
 * Tracks which job is on screen and how far the line is filled, growing from one dot towards
 * the next as its section is scrolled through. The fill is written straight to the element on
 * every frame, so it follows the scroll in real time. Only the slow-changing parts (the dots
 * reached, the active job) go through React state.
 */
export const useTimelineProgress = (
  listRef: RefObject<HTMLOListElement | null>,
  fillRef: RefObject<HTMLSpanElement | null>,
  targetIds: string[],
  endId: string,
) => {
  const [layout, setLayout] = useState(initial);
  // A string key keeps the effect from restarting when the caller passes a fresh array
  const idsKey = targetIds.join(",");

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const ids = idsKey.split(",");
    const items = Array.from(list.querySelectorAll<HTMLElement>("li[data-dot]"));
    let frame = 0;

    const calculateProgress = () => {
      frame = 0;

      const readingLine = window.scrollY + window.innerHeight * 0.4;
      const topOf = (id: string) =>
        (document.getElementById(id)?.getBoundingClientRect().top ?? 0) + window.scrollY;

      const tops = ids.map(topOf);
      const dots = items.map((item) => item.offsetTop + DOT_CENTER);
      const last = tops.length - 1;
      let fill = 0;

      if (readingLine > tops[0]) {
        const segment = tops.findIndex((_, i) => i < last && readingLine < tops[i + 1]);
        fill =
          segment === -1
            ? dots[last] - dots[0]
            : dots[segment] +
              ((readingLine - tops[segment]) / (tops[segment + 1] - tops[segment])) *
                (dots[segment + 1] - dots[segment]) -
              dots[0];
      }

      const end = dots[last] - dots[0];
      const dotOffsets = dots.map((dot) => dot - dots[0]);
      const clampedFill = Math.max(0, fill);
      const pastCount =
        clampedFill > 0 ? dotOffsets.filter((offset) => offset <= clampedFill + 0.5).length : 0;

      const sectionEnd = topOf(endId) + (document.getElementById(endId)?.offsetHeight ?? 0);
      const inside = readingLine >= tops[0] && readingLine < sectionEnd;
      const activeIndex = inside ? tops.filter((top) => readingLine >= top).length - 1 : -1;

      fillRef.current?.style.setProperty("transform", `scaleY(${end > 0 ? clampedFill / end : 0})`);

      setLayout((current) =>
        current.end === end &&
        current.pastCount === pastCount &&
        current.activeIndex === activeIndex &&
        current.dotOffsets.join() === dotOffsets.join()
          ? current
          : { end, dotOffsets, pastCount, activeIndex },
      );
    };

    const handleChange = () => {
      if (!frame) frame = requestAnimationFrame(calculateProgress);
    };

    const resizeObserver = new ResizeObserver(handleChange);
    resizeObserver.observe(list);

    calculateProgress();
    window.addEventListener("scroll", handleChange, { passive: true });
    window.addEventListener("resize", handleChange);
    window.addEventListener("load", handleChange);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleChange);
      window.removeEventListener("resize", handleChange);
      window.removeEventListener("load", handleChange);
    };
  }, [listRef, fillRef, idsKey, endId]);

  return layout;
};
