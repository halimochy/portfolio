import type { Metadata } from "next";
import { achievements } from "@/data/achievements";
import { AchievementsGrid } from "@/components/achievements/AchievementsGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Awards, certifications, competitions and organizational experience.",
  alternates: { canonical: "/achievements" },
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Recognition & milestones"
        description="Competitions, programmes and recognition."
      />
      <div className="container">
        <AchievementsGrid items={achievements} />
      </div>
    </>
  );
}
