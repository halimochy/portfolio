import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="container pb-12 pt-16 sm:pb-16 sm:pt-24">
      <div className="max-w-2xl">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1
          className="mt-3 animate-fade-up font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="mt-5 animate-fade-up text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "160ms" }}
          >
            {description}
          </p>
        )}
      </div>
      {children && (
        <div className="mt-8 animate-fade-up" style={{ animationDelay: "240ms" }}>
          {children}
        </div>
      )}
    </header>
  );
}
