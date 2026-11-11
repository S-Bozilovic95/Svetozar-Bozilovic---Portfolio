import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "../data/site";
import type { Theme } from "../hooks/useTheme";
import BurgerButton from "./BurgerButton";
import Button from "./Button";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen((open) => !open);
  const handleCloseMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 721) setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-30 h-[68px] border-b border-border bg-background/90 backdrop-blur-[10px]"
    >
      <Container className="flex h-full items-center gap-[30px]">
        <BurgerButton isOpen={isOpen} onClick={handleToggleMenu} />

        <a
          href="#top"
          aria-label={`${site.firstName} ${site.lastName}, back to top`}
          className="mr-auto hidden md:block"
        >
          <span className="grid h-[42px] w-[42px] place-items-center rounded-[3px] bg-primary font-display text-[17px] font-extrabold tracking-[0.02em] text-primary-foreground transition-colors wdth-125 hover:bg-foreground hover:text-background">
            {site.initials}
          </span>
        </a>

        <nav aria-label="Sections" className="hidden gap-8 text-[15px] md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="border-b-2 border-transparent py-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        {site.links.cv && (
          <Button href={site.links.cv} className="px-[18px] py-[9px]">
            CV
          </Button>
        )}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </Container>

      <MobileMenu isOpen={isOpen} links={navLinks} onNavigate={handleCloseMenu} />
    </header>
  );
};

export default Navbar;
