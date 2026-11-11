import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { MediaItem } from "../types/content";
import { cn } from "../utils/cn";
import LightboxSlide from "./LightboxSlide";

interface LightboxProps {
  items: MediaItem[];
  startIndex: number;
  onClose: () => void;
}

type IconName = "close" | "prev" | "next";

interface RoundButtonProps {
  label: string;
  icon: IconName;
  onClick: () => void;
  className?: string;
}

const FOCUSABLE = "button, video[controls], a[href]";

const iconPaths: Record<IconName, string> = {
  close: "M6 6l12 12M18 6L6 18",
  prev: "M15 5l-7 7 7 7",
  next: "M9 5l7 7-7 7",
};

const RoundButton = ({ label, icon, onClick, className }: RoundButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className={cn(
      "grid h-11 w-11 place-items-center rounded-full border border-border bg-card/90 text-foreground transition-colors hover:border-primary hover:text-primary",
      className,
    )}
  >
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPaths[icon]} />
    </svg>
  </button>
);

/** Full-screen viewer over the page: one picture or video, or a gallery to slide through */
const Lightbox = ({ items, startIndex, onClose }: LightboxProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex, loop: false });
  const [selectedIndex, setSelectedIndex] = useState(startIndex);
  const [settledIndex, setSettledIndex] = useState(startIndex);
  const dialogRef = useRef<HTMLDivElement>(null);

  const hasMany = items.length > 1;
  const caption = items[selectedIndex]?.caption;

  const handlePrev = () => emblaApi?.scrollPrev();
  const handleNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const handleSettle = () => setSettledIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", handleSelect);
    emblaApi.on("settle", handleSettle);
    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("settle", handleSettle);
    };
  }, [emblaApi]);

  useEffect(() => {
    // Decode every picture up front, so a swipe does not wait for a large image
    items.forEach(({ type, src, poster }) => {
      const image = new Image();
      image.src = (type === "video" ? poster : src) ?? src;
      image.decode().catch(() => undefined);
    });
  }, [items]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const { overflow, paddingRight } = document.body.style;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (event.key === "ArrowRight") emblaApi?.scrollNext();

      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi, onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
      className="fixed inset-0 z-50 flex flex-col bg-deep"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 md:px-8">
        <span className="text-sm tabular-nums text-muted-foreground">
          {hasMany && `${selectedIndex + 1} / ${items.length}`}
        </span>
        <RoundButton label="Close" icon="close" onClick={onClose} className="pointer-events-auto" />
      </div>

      <div ref={emblaRef} className="min-h-0 flex-1 cursor-grab overflow-hidden">
        <div className="flex h-full">
          {items.map((item, index) => (
            <LightboxSlide
              key={item.src}
              item={item}
              isSettled={index === settledIndex}
              onBackgroundClick={onClose}
            />
          ))}
        </div>
      </div>

      {hasMany && (
        <>
          <RoundButton
            label="Previous"
            icon="prev"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 md:grid"
          />
          <RoundButton
            label="Next"
            icon="next"
            onClick={handleNext}
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:grid"
          />
        </>
      )}

      <p className="min-h-[4.5rem] px-6 pb-6 pt-2 text-center text-[15px] text-muted-foreground">
        {caption}
      </p>
    </div>
  );
};

export default Lightbox;
