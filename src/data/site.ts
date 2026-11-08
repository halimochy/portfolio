/**
 * Site-wide configuration: navigation and SEO defaults.
 * Personal details live in `profile.ts`.
 */

export const siteConfig = {
  /** Used in the browser tab title: "Page | Nurhalimah". */
  siteName: "Nurhalimah",
  description:
    "Portfolio of Nurhalimah — data engineering, data analytics, business intelligence and full-stack development projects, experience, education and achievements.",
  keywords: [
    "portfolio",
    "Nurhalimah",
    "data engineer",
    "data analyst",
    "business intelligence",
    "Power BI",
    "Microsoft Fabric",
    "full-stack developer",
    "IT digitalization",
  ],
  /**
   * Canonical URL. Set NEXT_PUBLIC_SITE_URL in Vercel (see .env.example).
   * Falls back to the Vercel deployment URL, then localhost.
   */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, ""),
};

export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
];
