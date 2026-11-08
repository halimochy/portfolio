import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-4", className)}>
      <div className="max-w-xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2
          id={id}
          className="mt-2 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl"
        >
          {title}
        </h2>
        {description && <p className="mt-3 text-ink-soft">{description}</p>}
      </div>
      {action}
    </div>
  );
}
