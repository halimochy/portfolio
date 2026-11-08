import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Badge, BadgeList } from "@/components/ui/Badge";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink/5">
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <Badge variant="outline" className="absolute left-3 top-3 shadow-sm">
          {project.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-medium leading-snug tracking-tight">
            {project.title}
          </h3>
          <span className="mt-0.5 text-xs tabular-nums text-ink-muted">{project.year}</span>
        </div>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">{project.summary}</p>

        <BadgeList items={project.technologies} max={4} className="mt-4" />

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          View Details
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
