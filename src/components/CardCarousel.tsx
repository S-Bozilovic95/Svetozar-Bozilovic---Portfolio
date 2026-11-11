import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { ProjectCard } from "../types/content";
import { cn } from "../utils/cn";
import LinkList from "./LinkList";
import ZoomImage from "./ZoomImage";

interface CardCarouselProps {
  cards: ProjectCard[];
  className?: string;
}

interface CardViewProps {
  card: ProjectCard;
}

/** One wide card: the picture on the left, the text on the right (stacked on a phone) */
const CardView = ({ card }: CardViewProps) => {
  const { title, text, image, link, tag } = card;

  return (
    <article className="grid h-full border border-border bg-card md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <ZoomImage
        item={image}
        className="aspect-[16/10] w-full border-b border-border md:border-b-0 md:border-r"
        imgClassName="object-cover object-top"
      />
      <div className="flex flex-col justify-center p-6 md:p-10">
        {tag && <em className="mb-3 text-sm font-medium not-italic text-primary">{tag}</em>}
        <h4 className="font-display text-[clamp(26px,3vw,36px)] font-bold leading-tight wdth-112">
          {title}
        </h4>
        <p className="mt-3 text-muted-foreground">{text}</p>
        <LinkList links={[link]} className="mt-7" />
      </div>
    </article>
  );
};

/** One card at a time in a draggable slider, with dots */
const CardCarousel = ({ cards, className }: CardCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDotClick = (index: number) => emblaApi?.scrollTo(index);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", handleSelect);
    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("mt-14 md:mt-16", className)} aria-roledescription="carousel">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {cards.map((card) => (
            <div key={card.title} className="min-w-0 flex-[0_0_100%]">
              <CardView card={card} />
            </div>
          ))}
        </div>
      </div>

      {cards.length > 1 && (
        <div className="mt-8 flex justify-center gap-3" role="tablist" aria-label="Choose project">
          {cards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Show ${card.title}`}
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
    </div>
  );
};

export default CardCarousel;
