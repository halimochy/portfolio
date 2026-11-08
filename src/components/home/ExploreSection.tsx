import Link from "next/link";
import { ArrowUpRight, Award, Briefcase, GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { achievements } from "@/data/achievements";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExploreSection() {
  const cards = [
    {
      href: "/experience",
      icon: Briefcase,
      title: "Experience",
      headline: `${experience[0].role}`,
      detail: `${experience[0].company} · ${experience[0].period}`,
    },
    {
      href: "/education",
      icon: GraduationCap,
      title: "Education",
      headline: `${education[0].degree} ${education[0].field}`,
      detail: `${education[0].institution} · ${education[0].graduationYear}`,
    },
    {
      href: "/achievements",
      icon: Award,
      title: "Achievements",
      headline: `${achievements.length} achievements & milestones`,
      detail: "Competitions, programmes and recognition",
    },
  ];

  return (
    <section aria-labelledby="explore-heading" className="container py-16 sm:py-20">
      <Reveal>
        <SectionHeading id="explore-heading" eyebrow="Background" title="Learn more about me" />
      </Reveal>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {cards.map(({ href, icon: Icon, title, headline, detail }, i) => (
          <li key={href}>
            <Reveal delay={i * 90} className="h-full">
              <Link
                href={href}
                className="card group flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 text-sm font-medium text-ink">{headline}</p>
                <p className="mt-1 text-sm text-ink-muted">{detail}</p>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
