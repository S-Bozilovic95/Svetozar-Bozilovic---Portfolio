import type { MouseEvent } from "react";
import type { MediaItem } from "../types/content";

interface LightboxSlideProps {
  item: MediaItem;
  /** True once the slide has stopped moving into view. Only then does a video start. */
  isSettled: boolean;
  onBackgroundClick: () => void;
}

const mediaClass = "max-h-full max-w-full rounded-md border border-border";

/** One full-size picture or video. A click on the empty space around it closes the viewer. */
const LightboxSlide = ({ item, isSettled, onBackgroundClick }: LightboxSlideProps) => {
  const handleSlideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onBackgroundClick();
  };

  // While sliding, a video is just its first frame, so only one video is ever decoding
  const isPlayingVideo = item.type === "video" && isSettled;
  const stillSrc = item.type === "video" ? item.poster : item.src;

  return (
    <div
      onClick={handleSlideClick}
      className="flex h-full min-w-0 flex-[0_0_100%] items-center justify-center px-4 pb-2 pt-16 md:px-24"
    >
      {isPlayingVideo ? (
        <video
          src={item.src}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
          controls
          aria-label={item.alt}
          className={mediaClass}
        />
      ) : (
        <img
          src={stillSrc}
          alt={item.alt}
          draggable={false}
          decoding="async"
          className={`${mediaClass} object-contain`}
        />
      )}
    </div>
  );
};

export default LightboxSlide;
