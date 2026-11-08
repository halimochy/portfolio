export type SocialIcon = "github" | "linkedin" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  /** One-line value statement shown under the title. */
  tagline: string;
  /** Short introduction shown in the hero. */
  intro: string;
  /** Longer paragraphs used on the home page "About" block. */
  about: string[];
  location: string;
  availability: string;
  email: string;
  /** Path inside /public. Replace with your own photo (e.g. /images/profile.jpg). */
  avatar: string;
  avatarAlt: string;
  /** Path inside /public. Replace with your own CV (keep the filename or update it here). */
  resume: string;
  socials: SocialLink[];
  stats: { value: string; label: string }[];
  skills: { group: string; items: string[] }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  graduationYear: string;
  grade?: string;
  summary: string;
  highlights: string[];
  coursework?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export type ProjectCategory =
  | "Web Application"
  | "Data Engineering"
  | "Analytics"
  | "IT Operations"
  | "Digitalization";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  /** One or two sentences for cards. */
  summary: string;
  /** Longer overview for the detail page. */
  overview: string;
  /** Card thumbnail (path inside /public). */
  thumbnail: string;
  thumbnailAlt: string;
  gallery: ProjectImage[];
  technologies: string[];
  featured?: boolean;
  role: string;
  duration: string;
  team: string;
  problem: string[];
  objectives: string[];
  solution: string[];
  features: { title: string; description: string }[];
  contributions: string[];
  outcomes: { value: string; label: string }[];
  outcomeSummary: string;
  github?: string;
  demo?: string;
}

export type AchievementCategory =
  | "Award"
  | "Certification"
  | "Competition"
  | "Organization"
  | "Other";

export interface Achievement {
  id: string;
  category: AchievementCategory;
  title: string;
  organization: string;
  /** Human readable date, e.g. "Mar 2024". */
  date: string;
  /** Used for sorting (newest first). */
  year: number;
  description: string;
  link?: string;
}
