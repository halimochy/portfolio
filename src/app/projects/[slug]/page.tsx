import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Layers,
  Target,
  User,
  Users,
  Clock,
} from "lucide-react";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Badge, BadgeList } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GithubIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render every project at build time. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `${siteConfig.url}/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.summary,
    },
    twitter: { title: project.title, description: project.summary },
  };
}

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section aria-labelledby={id} className="scroll-mt-24">
        <h2 id={id} className="flex items-center gap-3 font-display text-2xl font-medium tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Icon className="h-[18px] w-[18px]" />
          </span>
          {title}
        </h2>
        <div className="mt-5">{children}</div>
      </section>
    </Reveal>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const adjacent = getAdjacentProjects(project.slug);

  const facts = [
    { icon: User, label: "Role", value: project.role },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: Users, label: "Team", value: project.team },
  ];

  return (
    <article>
      <div className="container pt-8 sm:pt-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
          Back to Projects
        </Link>

        <header className="mt-8 max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-sm text-ink-muted">{project.year}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{project.overview}</p>

          {(project.github || project.demo) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.demo && (
                <ButtonLink href={project.demo}>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live Demo
                </ButtonLink>
              )}
              {project.github && (
                <ButtonLink href={project.github} variant="secondary">
                  <GithubIcon className="h-4 w-4" />
                  GitHub Repository
                </ButtonLink>
              )}
            </div>
          )}
        </header>
      </div>

      <div className="container mt-10 sm:mt-14">
        <ProjectGallery images={project.gallery} />
      </div>

      <div className="container mt-16 grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
        <div className="min-w-0 space-y-14">
          <Section id="problem" icon={Target} title="The problem">
            <div className="space-y-4 leading-relaxed text-ink-soft">
              {project.problem.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Section>

          <Section id="objectives" icon={CheckCircle2} title="Objectives">
            <Bullets items={project.objectives} />
          </Section>

          <Section id="solution" icon={Layers} title="Solution & implementation">
            <div className="space-y-4 leading-relaxed text-ink-soft">
              {project.solution.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Section>

          <Reveal>
            <section aria-labelledby="features" className="scroll-mt-24">
              <h2 id="features" className="font-display text-2xl font-medium tracking-tight">
                Key features
              </h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f.title} className="card p-5">
                    <h3 className="font-medium">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Section id="contributions" icon={User} title="My role & contributions">
            <p className="mb-4 text-ink-soft">
              <strong className="font-medium text-ink">{project.role}</strong>
            </p>
            <Bullets items={project.contributions} />
          </Section>

          <Reveal>
            <section aria-labelledby="outcomes" className="scroll-mt-24">
              <h2 id="outcomes" className="font-display text-2xl font-medium tracking-tight">
                Outcomes &amp; impact
              </h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {project.outcomes.map((o) => (
                  <li key={o.label} className="rounded-2xl bg-accent-soft p-5">
                    <p className="font-display text-3xl font-medium tracking-tight text-accent-strong">
                      {o.value}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">{o.label}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 leading-relaxed text-ink-soft">{project.outcomeSummary}</p>
            </section>
          </Reveal>
        </div>

        <aside aria-label="Project facts" className="lg:sticky lg:top-24 lg:self-start">
          <div className="card space-y-6 p-6">
            <dl className="space-y-5">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-ink-muted">{label}</dt>
                    <dd className="mt-0.5 text-sm text-ink">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="border-t border-line pt-5">
              <h2 className="text-xs uppercase tracking-wider text-ink-muted">Technologies used</h2>
              <BadgeList items={project.technologies} className="mt-3" />
            </div>
            {(project.github || project.demo) && (
              <div className="space-y-2 border-t border-line pt-5 text-sm">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-accent hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-accent hover:underline"
                  >
                    <GithubIcon className="h-4 w-4" /> Source code
                  </a>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>

      <nav aria-label="More projects" className="container mt-20">
        <div className="flex items-center justify-between border-t border-line pt-8">
          <h2 className="font-display text-2xl font-medium tracking-tight">More projects</h2>
          <ButtonLink href="/projects" variant="secondary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Projects
          </ButtonLink>
        </div>
        {adjacent && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href={`/projects/${adjacent.previous.slug}`}
              className="card group flex flex-col gap-1 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-ink-muted">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
                Previous project
              </span>
              <span className="font-display text-xl font-medium">{adjacent.previous.title}</span>
              <span className="text-sm text-ink-muted">{adjacent.previous.category}</span>
            </Link>
            <Link
              href={`/projects/${adjacent.next.slug}`}
              className="card group flex flex-col gap-1 p-6 text-left transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lift sm:items-end sm:text-right"
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-ink-muted">
                Next project
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-medium">{adjacent.next.title}</span>
              <span className="text-sm text-ink-muted">{adjacent.next.category}</span>
            </Link>
          </div>
        )}
      </nav>
    </article>
  );
}
