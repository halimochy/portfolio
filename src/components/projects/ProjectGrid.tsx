"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

interface ProjectGridProps {
  projects: Project[];
  /** Show category filter buttons. */
  filterable?: boolean;
}

export function ProjectGrid({ projects, filterable = false }: ProjectGridProps) {
  const [active, setActive] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  );

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {filterable && (
        <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => {
            const count =
              category === "All" ? projects.length : projects.filter((p) => p.category === category).length;
            const selected = category === active;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all duration-300",
                  selected
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-surface text-ink-soft hover:border-ink/30",
                )}
              >
                {category}
                <span className={cn("ml-1.5 text-xs", selected ? "text-white/60" : "text-ink-muted")}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {visible.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
