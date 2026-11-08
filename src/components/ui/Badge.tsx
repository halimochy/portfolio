import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "neutral" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium leading-none",
        variant === "neutral" && "bg-ink/[0.05] text-ink-soft",
        variant === "accent" && "bg-accent-soft text-accent-strong",
        variant === "outline" && "border border-line bg-surface text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function BadgeList({
  items,
  max,
  variant,
  className,
}: {
  items: string[];
  max?: number;
  variant?: BadgeProps["variant"];
  className?: string;
}) {
  const visible = max ? items.slice(0, max) : items;
  const hidden = max ? items.length - visible.length : 0;
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label="Technologies">
      {visible.map((item) => (
        <li key={item}>
          <Badge variant={variant}>{item}</Badge>
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <Badge variant="outline">+{hidden}</Badge>
        </li>
      )}
    </ul>
  );
}
