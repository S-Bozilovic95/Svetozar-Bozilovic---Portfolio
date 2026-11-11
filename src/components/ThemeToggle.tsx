import type { Theme } from "../hooks/useTheme";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

const icon = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-border text-foreground transition-colors hover:border-primary"
  >
    {theme === "dark" ? (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" {...icon}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" {...icon}>
        <path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z" />
      </svg>
    )}
  </button>
);

export default ThemeToggle;
