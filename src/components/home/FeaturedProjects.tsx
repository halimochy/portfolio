import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section aria-labelledby="featured-heading" className="border-y border-line bg-surface/60 py-16 sm:py-20">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="featured-heading"
            eyebrow="Selected work"
            title="Featured projects"
            description="A few recent projects that show how I approach problems end to end."
            action={
              <ButtonLink href="/projects" variant="secondary">
                All projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
            }
          />
        </Reveal>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <li key={project.slug}>
              <Reveal delay={i * 90} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
