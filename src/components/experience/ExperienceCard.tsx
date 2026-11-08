import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import type { Experience } from "@/types";
import { Badge, BadgeList } from "@/components/ui/Badge";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="card p-6 transition-shadow duration-500 hover:shadow-lift sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-medium tracking-tight">{item.role}</h3>
          <p className="mt-1 flex items-center gap-2 text-ink-soft">
            <Briefcase className="h-4 w-4 text-accent" aria-hidden="true" />
            {item.company}
          </p>
        </div>
        <Badge variant="accent">{item.type}</Badge>
      </div>

      <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Period</dt>
          <Calendar className="h-4 w-4" aria-hidden="true" />
          <dd>{item.period}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Location</dt>
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <dd>{item.location}</dd>
        </div>
      </dl>

      <p className="mt-5 leading-relaxed text-ink-soft">{item.summary}</p>

      <h4 className="mt-6 text-sm font-semibold">Key responsibilities</h4>
      <ul className="mt-3 space-y-2.5">
        {item.responsibilities.map((r) => (
          <li key={r} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {r}
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl bg-accent-soft/70 p-4 sm:p-5">
        <h4 className="text-sm font-semibold text-accent-strong">Highlights &amp; contributions</h4>
        <ul className="mt-3 space-y-2.5">
          {item.achievements.map((a) => (
            <li key={a} className="flex gap-3 text-sm leading-relaxed text-ink">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>
      </div>

      <h4 className="mt-6 text-sm font-semibold">Technologies &amp; tools</h4>
      <BadgeList items={item.technologies} variant="outline" className="mt-3" />
    </article>
  );
}
