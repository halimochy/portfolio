import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Timeline } from "@/components/ui/Timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience, responsibilities, accomplishments and technologies used.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked"
        description="Roles across data engineering, analytics, IT digitalization and database operations — and what I delivered in each."
      />
      <div className="container">
        <Timeline items={experience.map((item) => ({ key: item.id, node: <ExperienceCard item={item} /> }))} />
      </div>
    </>
  );
}
