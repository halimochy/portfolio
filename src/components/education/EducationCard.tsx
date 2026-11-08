import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import type { Education } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function EducationCard({ item }: { item: Education }) {
  return (
    <article className="card p-6 transition-shadow duration-500 hover:shadow-lift sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-medium tracking-tight">{item.institution}</h3>
          <p className="mt-1 flex items-center gap-2 text-ink-soft">
            <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" />
            {item.degree} {item.field}
          </p>
        </div>
        <Badge variant="accent">Class of {item.graduationYear}</Badge>
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
        {item.grade && (
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Grade</dt>
            <Award className="h-4 w-4" aria-hidden="true" />
            <dd>{item.grade}</dd>
          </div>
        )}
      </dl>

      <p className="mt-5 leading-relaxed text-ink-soft">{item.summary}</p>

      <h4 className="mt-6 text-sm font-semibold">Academic highlights</h4>
      <ul className="mt-3 space-y-2.5">
        {item.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>

      {item.coursework && (
        <>
          <h4 className="mt-6 text-sm font-semibold">Relevant coursework</h4>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {item.coursework.map((c) => (
              <li key={c}>
                <Badge>{c}</Badge>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}
