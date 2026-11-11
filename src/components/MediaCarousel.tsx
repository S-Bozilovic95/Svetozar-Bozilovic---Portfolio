import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useLightbox } from "../hooks/useLightbox";
import type { MediaAspect, MediaItem } from "../types/content";
import { cn } from "../utils/cn";
import MediaSlide from "./MediaSlide";
import WindowFrame from "./WindowFrame";

interface MediaCarouselProps {
  items: MediaItem[];
  aspect?: MediaAspect;
  className?: string;
}

const aspectClass: Record<MediaAspect, string> = {
  screen: "aspect-[16/9]",
  banner: "aspect-[8/3]",
};

/**
 * Draggable slider with dots. The frame keeps one size for every slide. A click opens the
 * picture in the viewer. Videos play only while their slide is in view.
 */
const MediaCarousel = ({ items, aspect = "screen", className }: MediaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { openLightbox } = useLightbox();

  const handleDotClick = (index: number) => emblaApi?.scrollTo(index);
  const handleOpen = (index: number) => openLightbox(items, index);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", handleSelect);
    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

  return (
    <figure className={cn("mt-14 md:mt-16", className)} aria-roledescription="carousel">
      <WindowFrame title={items[selectedIndex]?.alt}>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {items.map((item, index) => (
              <MediaSlide
                key={item.src}
                item={item}
                isActive={index === selectedIndex}
                onOpen={() => handleOpen(index)}
                className={aspectClass[aspect]}
              />
            ))}
          </div>
        </div>
      </WindowFrame>

      <figcaption className="mt-4 min-h-[3em] text-center text-sm text-muted-foreground">
        {items[selectedIndex]?.caption}
      </figcaption>

      {items.length > 1 && (
        <div className="mt-4 flex justify-center gap-3" role="tablist" aria-label="Choose slide">
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-3 w-3 rounded-full border-2 transition-all duration-200 hover:border-primary",
                index === selectedIndex
                  ? "scale-110 border-primary bg-primary"
                  : "border-muted-foreground bg-transparent",
              )}
            />
          ))}
        </div>
      )}
    </figure>
  );
};

export default MediaCarousel;
