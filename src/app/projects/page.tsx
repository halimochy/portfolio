import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software, data engineering, analytics and digitalization projects.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="Select a project to read the full story — the problem, my approach and the results."
      />
      <div className="container">
        <ProjectGrid projects={projects} filterable />
      </div>
    </>
  );
}
