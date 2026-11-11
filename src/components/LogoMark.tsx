import { useState } from "react";
import { cn } from "../utils/cn";

interface LogoMarkProps {
  name: string;
  src?: string;
  /** Letters shown when there is no image, instead of the first letter of the name */
  initials?: string;
  size?: "md" | "sm";
}

/** Company logo on a white tile. Falls back to the initials, or the first letter, if the image is missing. */
const LogoMark = ({ name, src, initials, size = "md" }: LogoMarkProps) => {
  const [failed, setFailed] = useState(false);
  const letters = initials ?? name[0];

  return (
    <span
      className={cn(
        "relative grid flex-none place-items-center overflow-hidden rounded-md border border-border bg-card",
        size === "md" ? "h-16 w-16 md:h-[84px] md:w-[84px]" : "h-[60px] w-[60px]",
      )}
    >
      <b
        className={cn(
          "font-display font-extrabold text-primary wdth-125",
          letters.length > 1 ? "text-[22px] md:text-[28px]" : "text-[28px]",
        )}
      >
        {letters}
      </b>
      {src && !failed && (
        <img
          src={src}
          alt={`${name} logo`}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full bg-white object-contain p-3"
        />
      )}
    </span>
  );
};

export default LogoMark;
