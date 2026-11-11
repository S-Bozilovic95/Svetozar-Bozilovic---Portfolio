import { useLightbox } from "../hooks/useLightbox";
import type { MediaItem } from "../types/content";
import { cn } from "../utils/cn";

interface ZoomImageProps {
  item: MediaItem;
  className?: string;
  imgClassName?: string;
}

/** A single picture that opens in the viewer when clicked */
const ZoomImage = ({ item, className, imgClassName }: ZoomImageProps) => {
  const { openLightbox } = useLightbox();

  const handleOpen = () => openLightbox([item]);

  return (
    <button
      type="button"
      onClick={handleOpen}
      aria-label={`Enlarge: ${item.alt}`}
      className={cn("block cursor-pointer overflow-hidden", className)}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        draggable={false}
        className={cn("h-full w-full", imgClassName)}
      />
    </button>
  );
};

export default ZoomImage;
