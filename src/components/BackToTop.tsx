import { useScrolledPast } from "../hooks/useScrolledPast";
import { cn } from "../utils/cn";

/** Square arrow button in the bottom right corner, shown below the desktop layout (under 1061px) after scrolling */
const BackToTop = () => {
  const isVisible = useScrolledPast(500);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-20 right-4 z-40 grid h-[46px] w-[46px] place-items-center rounded-[3px] bg-primary text-primary-foreground shadow-lift transition-all duration-200 lg:hidden",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3.5 opacity-0",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5.5 11.5 12 5l6.5 6.5" />
      </svg>
    </button>
  );
};

export default BackToTop;
