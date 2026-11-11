import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import type { MediaItem } from "../types/content";
import { useInView } from "../hooks/useInView";
import { useLightbox } from "../hooks/useLightbox";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface MediaSlideProps {
  item: MediaItem;
  isActive: boolean;
  onOpen: () => void;
  /** Sets the shape of the frame, which is the same for every slide */
  className?: string;
}

/** A picture this close to the frame shape needs nothing behind it */
const RATIO_TOLERANCE = 0.03;

const calculateRatio = (width: number, height: number) => (height > 0 ? width / height : 0);

/**
 * One slide. The frame is the same for every slide, so a picture of another shape is shown
 * whole, over a blurred copy of itself, instead of being cropped or left on flat bars.
 */
const MediaSlide = ({ item, isActive, onOpen, className }: MediaSlideProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const { ref: wrapperRef, inView } = useInView<HTMLDivElement>(0.3);
  const reducedMotion = useReducedMotion();
  const { isOpen: isViewerOpen } = useLightbox();
  const [hasOddShape, setHasOddShape] = useState(false);

  const shouldPlay = item.type === "video" && isActive && inView && !reducedMotion && !isViewerOpen;

  const handleShape = (width: number, height: number) => {
    const frame = frameRef.current;
    if (!frame) return;

    const ratio = calculateRatio(width, height);
    const frameRatio = calculateRatio(frame.clientWidth, frame.clientHeight);
    setHasOddShape(ratio > 0 && Math.abs(ratio - frameRatio) / frameRatio > RATIO_TOLERANCE);
  };
  const handleImageLoad = ({ currentTarget }: SyntheticEvent<HTMLImageElement>) =>
    handleShape(currentTarget.naturalWidth, currentTarget.naturalHeight);
  const handleVideoLoad = ({ currentTarget }: SyntheticEvent<HTMLVideoElement>) =>
    handleShape(currentTarget.videoWidth, currentTarget.videoHeight);

  useEffect(() => {
    const image = imageRef.current;
    // An image that was already cached has loaded before React could listen to it
    if (image?.complete) handleShape(image.naturalWidth, image.naturalHeight);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldPlay) video.play().catch(() => undefined);
    else video.pause();
  }, [shouldPlay]);

  return (
    <div ref={wrapperRef} className="min-w-0 flex-[0_0_100%] bg-surface">
      <div ref={frameRef} className={className}>
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Enlarge: ${item.alt}`}
          className="relative block h-full w-full cursor-pointer overflow-hidden"
        >
          {hasOddShape && item.type === "image" && (
            <img
              src={item.src}
              alt=""
              aria-hidden
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-full scale-125 object-cover opacity-45 blur-2xl"
            />
          )}
          {item.type === "video" ? (
            <video
              ref={videoRef}
              src={item.src}
              poster={item.poster}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={item.alt}
              onLoadedMetadata={handleVideoLoad}
              className="relative h-full w-full object-contain"
            />
          ) : (
            <img
              ref={imageRef}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              draggable={false}
              onLoad={handleImageLoad}
              className="relative h-full w-full object-contain"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default MediaSlide;
