import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The link may be broken or the page may have moved. Head back to the homepage or browse my projects.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          View projects
        </ButtonLink>
      </div>
    </section>
  );
}
