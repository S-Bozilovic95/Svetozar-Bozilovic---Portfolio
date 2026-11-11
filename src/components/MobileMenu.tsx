import type { LinkItem } from "../types/content";
import { cn } from "../utils/cn";

interface MobileMenuProps {
  isOpen: boolean;
  links: LinkItem[];
  onNavigate: () => void;
}

const MobileMenu = ({ isOpen, links, onNavigate }: MobileMenuProps) => (
  <div
    id="mobile-menu"
    className={cn(
      "absolute left-0 right-0 top-full grid border-b border-border bg-background shadow-lift md:hidden",
      isOpen
        ? "visible grid-rows-[1fr] [transition:grid-template-rows_.24s_cubic-bezier(.4,0,.2,1),visibility_0s]"
        : "invisible grid-rows-[0fr] [transition:grid-template-rows_.24s_cubic-bezier(.4,0,.2,1),visibility_0s_.24s]",
    )}
  >
    <nav aria-label="Sections" className="min-h-0 overflow-hidden">
      {links.map(({ label, href }, index) => (
        <a
          key={href}
          href={href}
          onClick={onNavigate}
          style={{ transitionDelay: isOpen ? `${0.05 + index * 0.04}s` : "0s" }}
          className={cn(
            "block border-t border-border px-[22px] py-[18px] text-[17px] leading-tight tracking-[0.02em] text-muted-foreground transition-[opacity,transform,color] duration-200 first:border-t-0 hover:text-foreground active:text-foreground",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0",
          )}
        >
          {label}
        </a>
      ))}
    </nav>
  </div>
);

export default MobileMenu;
