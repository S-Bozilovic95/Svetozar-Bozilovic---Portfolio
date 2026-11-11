import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface WindowFrameProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

/** A small browser-style window around screenshots and videos */
const WindowFrame = ({ title, children, className }: WindowFrameProps) => (
  <div
    className={cn(
      "overflow-hidden rounded-md border border-border bg-card shadow-frame",
      className,
    )}
  >
    <div className="flex h-9 items-center gap-2 border-b border-border bg-surface px-3.5">
      {title && (
        <b className="min-w-0 truncate text-[13px] font-normal text-muted-foreground">{title}</b>
      )}
    </div>
    {children}
  </div>
);

export default WindowFrame;
