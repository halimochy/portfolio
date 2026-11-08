import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ExploreSection } from "@/components/home/ExploreSection";
import { ContactCta } from "@/components/home/ContactCta";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: `${profile.name} — ${profile.title}` },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.intro,
    url: siteConfig.url,
    email: profile.email,
    sameAs: profile.socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <ExploreSection />
      <ContactCta />
    </>
  );
}
