import type { ElementType } from "react";
import type { LedgerItem } from "../types/content";
import { cn } from "../utils/cn";
import { isExternalLink } from "../utils/isExternalLink";
import ChipList from "./ChipList";

interface LedgerProps {
  items: LedgerItem[];
  className?: string;
}

interface LedgerRowProps {
  item: LedgerItem;
}

const rowBase =
  "grid items-center gap-x-7 gap-y-2.5 border-b border-border px-4 py-7 text-inherit transition-colors md:grid-cols-[170px_minmax(0,1fr)_auto] md:px-6";

const LedgerRow = ({ item }: LedgerRowProps) => {
  const { title, text, tag, href, details, chips } = item;
  const Row: ElementType = href ? "a" : "div";
  const linkProps = href
    ? {
        href,
        ...(isExternalLink(href) && { target: "_blank", rel: "noopener noreferrer" }),
      }
    : {};

  return (
    <Row className={cn(rowBase, href && "group hover:bg-surface")} {...linkProps}>
      <b className="font-display text-[22px] font-bold wdth-108">{title}</b>
      <span className="grid gap-2 text-muted-foreground">
        {text}
        {details?.map((line) => (
          <span key={line} className="text-[15px]">
            {line}
          </span>
        ))}
        {chips && <ChipList chips={chips} className="mt-2" />}
      </span>
      {tag && (
        <em
          className={cn(
            "w-fit whitespace-nowrap text-sm font-medium not-italic text-primary",
            href &&
              "rounded-full border border-tint-border bg-tint px-4 py-[5px] transition-colors group-hover:border-primary",
          )}
        >
          {tag}
        </em>
      )}
    </Row>
  );
};

const Ledger = ({ items, className }: LedgerProps) => (
  <div className={cn("mt-14 border-t border-border", className)}>
    {items.map((item) => (
      <LedgerRow key={item.title} item={item} />
    ))}
  </div>
);

export default Ledger;
