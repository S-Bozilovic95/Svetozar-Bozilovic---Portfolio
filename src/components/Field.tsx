import type { ComponentProps, ReactNode } from "react";
import { cn } from "../utils/cn";

interface FieldShellProps {
  label: string;
  error?: string;
  children: ReactNode;
}

const controlClass =
  "w-full rounded-[3px] border bg-card px-4 py-[15px] font-sans text-[17px] text-foreground transition-colors focus:border-primary focus:outline-none";

const FieldShell = ({ label, error, children }: FieldShellProps) => (
  <label className="grid gap-2 text-[15px] text-muted-foreground">
    {label}
    {children}
    {error && (
      <span role="alert" className="text-sm text-destructive">
        {error}
      </span>
    )}
  </label>
);

type TextFieldProps = { label: string; error?: string } & ComponentProps<"input">;

export const TextField = ({ label, error, className, ...props }: TextFieldProps) => (
  <FieldShell label={label} error={error}>
    <input
      aria-invalid={Boolean(error)}
      className={cn(controlClass, error ? "border-destructive" : "border-border", className)}
      {...props}
    />
  </FieldShell>
);

type TextAreaFieldProps = { label: string; error?: string } & ComponentProps<"textarea">;

export const TextAreaField = ({ label, error, className, ...props }: TextAreaFieldProps) => (
  <FieldShell label={label} error={error}>
    <textarea
      aria-invalid={Boolean(error)}
      className={cn(
        controlClass,
        "resize-y",
        error ? "border-destructive" : "border-border",
        className,
      )}
      {...props}
    />
  </FieldShell>
);
