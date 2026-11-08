import Link from "next/link";
import type { ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  /** Adds the `download` attribute (for files in /public). */
  download?: boolean;
  className?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 active:scale-[0.98]";

const variants = {
  primary: "bg-ink text-white hover:bg-accent hover:shadow-lift",
  secondary: "border border-line bg-surface text-ink hover:border-ink/30 hover:shadow-card",
  ghost: "text-ink-soft hover:text-ink",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[15px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  download,
  className,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (download) {
    return (
      <a href={href} download className={classes}>
        {children}
      </a>
    );
  }

  if (isExternal(href)) {
    const isWeb = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
