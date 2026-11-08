import type { Metadata } from "next";
import { education } from "@/data/education";
import { EducationCard } from "@/components/education/EducationCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Timeline } from "@/components/ui/Timeline";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background, degrees and achievements.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Academic background"
        description="The studies that shaped how I think about software, data and systems."
      />
      <div className="container">
        <Timeline items={education.map((item) => ({ key: item.id, node: <EducationCard item={item} /> }))} />
      </div>
    </>
  );
}
