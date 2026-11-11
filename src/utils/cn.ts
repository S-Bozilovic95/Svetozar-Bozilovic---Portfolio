type ClassValue = string | false | null | undefined;

/** Joins class names, skipping the falsy ones */
export const cn = (...classes: ClassValue[]) => classes.filter(Boolean).join(" ");
