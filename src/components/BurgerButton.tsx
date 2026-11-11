import { cn } from "../utils/cn";

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const line =
  "absolute left-3 h-0.5 rounded-sm bg-current transition-all duration-[400ms] ease-[cubic-bezier(0.7,0,0.2,1)]";

/** Hamburger that turns into a cross. The middle line slides out. */
const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
    className={cn(
      "relative -ml-3 mr-auto h-[46px] w-[46px] md:hidden",
      isOpen ? "text-primary" : "text-foreground",
    )}
  >
    <span className={cn(line, "w-[22px]", isOpen ? "top-[22px] rotate-45" : "top-4")} />
    <span className={cn(line, "top-[22px] w-[15px]", isOpen && "-translate-x-2.5 opacity-0")} />
    <span className={cn(line, "w-[22px]", isOpen ? "top-[22px] -rotate-45" : "top-7")} />
  </button>
);

export default BurgerButton;
