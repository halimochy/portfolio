"use client";

import { useState } from "react";
import {
  Award,
  BadgeCheck,
  ExternalLink,
  Medal,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Achievement, AchievementCategory } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const categoryMeta: Record<AchievementCategory, { icon: LucideIcon; plural: string }> = {
  Award: { icon: Award, plural: "Awards" },
  Certification: { icon: BadgeCheck, plural: "Certifications" },
  Competition: { icon: Medal, plural: "Competitions" },
  Organization: { icon: Users, plural: "Organizations" },
  Other: { icon: Sparkles, plural: "Other" },
};

export function AchievementsGrid({ items }: { items: Achievement[] }) {
  const [active, setActive] = useState<AchievementCategory | "All">("All");

  const sorted = [...items].sort((a, b) => b.year - a.year);
  const categories = (Object.keys(categoryMeta) as AchievementCategory[]).filter((c) =>
    items.some((i) => i.category === c),
  );
  const visible = active === "All" ? sorted : sorted.filter((i) => i.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter achievements by type" className="mb-8 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((category) => {
          const selected = category === active;
          const count =
            category === "All" ? items.length : items.filter((i) => i.category === category).length;
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
              {category === "All" ? "All" : categoryMeta[category].plural}
              <span className={cn("ml-1.5 text-xs", selected ? "text-white/60" : "text-ink-muted")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-5 sm:grid-cols-2" aria-live="polite">
        {visible.map((item, i) => {
          const Icon = categoryMeta[item.category].icon;
          return (
            <li key={item.id}>
              <Reveal delay={(i % 2) * 80} className="h-full">
                <article className="card group flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lift">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-muted">
                    {item.organization} · {item.date}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      View credential
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
