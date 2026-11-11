import type { LinkItem } from "../types/content";
import { isExternalLink } from "../utils/isExternalLink";

interface LinkListProps {
  links: LinkItem[];
  /** Small heading above the links */
  title?: string;
  className?: string;
}

const LinkList = ({ links, title, className = "mt-8" }: LinkListProps) => (
  <div className={className}>
    {title && <h4 className="mb-3.5 text-[15px] font-medium text-muted-foreground">{title}</h4>}
    <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
      {links.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            {...(isExternalLink(href) && { target: "_blank", rel: "noopener noreferrer" })}
            className="border-b-2 border-primary pb-0.5 font-medium transition-colors hover:text-primary"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default LinkList;
