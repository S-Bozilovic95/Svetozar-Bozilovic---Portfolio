import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { isExternalLink } from "../utils/isExternalLink";

type Variant = "solid" | "outline";

type ButtonProps = { variant?: Variant } & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] border px-[22px] py-3 text-[15px] font-medium transition-colors duration-150";

const variants: Record<Variant, string> = {
  solid:
    "border-foreground bg-foreground font-semibold text-background hover:border-primary hover:bg-primary hover:text-primary-foreground",
  outline: "border-border bg-transparent text-foreground hover:border-primary",
};

const Button = ({ variant = "outline", className, ...props }: ButtonProps) => {
  const classes = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props;
    const external = isExternalLink(href);

    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...anchorProps}
      />
    );
  }

  const { href: _unused, ...buttonProps } = props;
  return <button type="button" className={classes} {...buttonProps} />;
};

export default Button;
