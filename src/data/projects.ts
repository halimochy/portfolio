import type { Project, ProjectImage } from "@/types";

/**
 * Portfolio projects, based on the "Selected Projects" section of the CV.
 *
 * To add a project: copy one entry and change the `slug` (it becomes the URL:
 * /projects/<slug>). Screenshots live in /public/images/projects/<folder>/ —
 * the folder is passed to `cover()` and `shots()`. The card, filters, detail
 * page, sitemap and "next project" navigation all update automatically.
 *
 * Screenshots: the current images are generic placeholders. Replace them with
 * real .png / .jpg / .webp screenshots (recommended 1600×1000) and update the
 * file extensions below.
 */

const base = (folder: string) => `/images/projects/${folder}`;
const cover = (folder: string) => `${base(folder)}/cover.svg`;

function shots(folder: string, alts: [string, string, string], captions: [string, string, string]): ProjectImage[] {
  return alts.map((alt, i) => ({
    src: `${base(folder)}/screen-${i + 1}.svg`,
    alt,
    caption: captions[i],
  }));
}

export const projects: Project[] = [
  {
    slug: "repair-report",
    title: "Repair Report Web Application",
    category: "Web Application",
    year: "2025",
    featured: true,
    summary:
      "A centralized web application that brings repair report forms, workflows, automation and image/document submission into a single platform.",
    overview:
      "The Repair Report Web Application replaces a multi-form, multi-platform reporting process with one place to submit, track and process repair reports. It was built together with Export Import users as an enhancement to the existing Repair Report dashboard and automation solution.",
    thumbnail: cover("repair-report"),
    thumbnailAlt: "Repair Report Web Application overview",
    gallery: shots(
      "repair-report",
      [
        "Repair report overview page",
        "Repair report list and workflow status",
        "Repair report submission form with image and document upload",
      ],
      ["Report overview", "Workflow tracking", "Report form with attachments"],
    ),
    technologies: ["React", "Vite", "JavaScript", "Power Automate", "Power BI", "UI/UX Design"],
    role: "Full-Stack Developer",
    duration: "Jul 2025 – Present",
    team: "In collaboration with Export Import users",
    problem: [
      "Repair reporting was spread across multiple forms and platforms. Users had to fill in separate forms, send images and documents through different channels and follow up manually on each step of the process.",
      "This made the process slow, harder to access and less reliable, even though a Repair Report dashboard and automation already existed.",
    ],
    objectives: [
      "Integrate repair report forms, workflows, automation and attachments into a single platform.",
      "Simplify the existing multi-form, multi-platform reporting process based on operational requirements.",
      "Improve accessibility, efficiency and reliability of the end-to-end workflow.",
      "Extend the existing Repair Report dashboard and automation solution.",
    ],
    solution: [
      "I worked with Export Import users to understand the existing reporting process and its operational requirements, then designed a simpler end-to-end flow.",
      "The application combines the report form, workflow process, automation and image/document submission in one responsive interface, and connects with the existing dashboard and automation so reports flow straight into monitoring.",
    ],
    features: [
      { title: "Single platform", description: "Repair report forms, workflows and attachments live in one place." },
      { title: "Image & document submission", description: "Supporting photos and files are uploaded directly with each report." },
      { title: "Workflow automation", description: "Automated steps replace manual follow-ups between process stages." },
      { title: "Responsive UI/UX", description: "A streamlined interface that works across desktop and mobile." },
    ],
    contributions: [
      "Gathered and analysed requirements with Export Import users.",
      "Designed the responsive UI/UX and end-to-end workflow.",
      "Developed the full-stack web application and its integrations.",
      "Integrated the application with the existing Repair Report dashboard and automation.",
    ],
    outcomes: [
      { value: "1", label: "Platform replacing multiple forms" },
      { value: "~80%", label: "Development completed" },
      { value: "Next", label: "Production deployment" },
    ],
    outcomeSummary:
      "The application is currently about 80% complete and in ongoing development toward production deployment.",
  },
  {
    slug: "central-web-application",
    title: "Cerea – Central Web Application",
    category: "Web Application",
    year: "2026",
    featured: true,
    summary:
      "A central web application with a specialized UI that brings company systems together in one place and improves accessibility for users.",
    overview:
      "Cerea is a central web application that acts as the single entry point to the company's systems. As the frontend developer, I designed and built its specialized user interface — from wireframes and prototypes to responsive web pages — through continuous review cycles with the Digitalization Supervisor and Department Head.",
    thumbnail: cover("cerea"),
    thumbnailAlt: "Cerea logo",
    // Screenshots use dummy data and Cerea branding only, to keep company data private.
    gallery: [
      {
        src: `${base("cerea")}/loginpage.png`,
        alt: "Cerea login page with username, password and Microsoft sign-in",
        caption: "Login page — username/password or Microsoft sign-in",
        fit: "contain",
      },
      {
        src: `${base("cerea")}/portal.png`,
        alt: "Cerea employee portal with announcements, frequently used apps and general apps",
        caption: "Employee portal — announcements and app cards",
      },
      {
        src: `${base("cerea")}/cerea-app-flow.svg`,
        alt: "Cerea end-to-end flow diagram covering sign-in, roles, portal and admin workspace",
        caption: "End-to-end flow — user, system and admin",
        fit: "contain",
      },
    ],
    technologies: ["React", "Vite", "JavaScript", "HTML", "CSS", "Wireframing", "Prototyping"],
    role: "Frontend Developer",
    duration: "Apr 2026 – Present",
    team: "With the Digitalization Supervisor and Department Head",
    problem: [
      "Company applications and systems were scattered, so users had to remember different addresses and entry points to reach the tools they needed.",
    ],
    objectives: [
      "Centralize company systems in a single web application.",
      "Improve accessibility for users across departments.",
      "Deliver a consistent, responsive and easy-to-use interface.",
    ],
    solution: [
      "I started with wireframes and prototypes to define the structure and user flow, then developed a specialized frontend with responsive web interfaces.",
      "The design and features were refined through continuous review and enhancement cycles with the Digitalization Supervisor and Department Head.",
    ],
    features: [
      { title: "Central access", description: "One entry point to the company's applications and systems." },
      { title: "Responsive interface", description: "Works consistently on desktop, tablet and mobile." },
      { title: "Consistent design", description: "A unified visual language across the application." },
      { title: "Iterative improvement", description: "Enhanced continuously based on stakeholder reviews." },
    ],
    contributions: [
      "Designed the UI/UX, including wireframes, prototypes and responsive interfaces.",
      "Developed the specialized frontend of the central web application.",
      "Ran review and enhancement cycles with the Digitalization Supervisor and Department Head.",
    ],
    outcomes: [
      { value: "1", label: "Central entry point for company systems" },
      { value: "UI/UX", label: "Designed and built the frontend" },
      { value: "Ongoing", label: "Continuous enhancement" },
    ],
    outcomeSummary:
      "Cerea centralizes access to company systems and is continuously enhanced through review cycles with stakeholders.",
  },
  {
    slug: "it-user-satisfaction",
    title: "IT User Satisfaction Analytics & Dashboard",
    category: "Analytics",
    year: "2025",
    featured: true,
    summary:
      "An automated survey pipeline and Power BI dashboards for monitoring IT service performance and user satisfaction.",
    overview:
      "This project automates how IT user satisfaction surveys are collected and integrated, and turns the results into interactive Power BI dashboards. An end-to-end data pipeline keeps the reporting up to date in real time.",
    thumbnail: cover("data-analytics"),
    thumbnailAlt: "IT user satisfaction dashboard with KPI tiles and trend charts",
    gallery: shots(
      "data-analytics",
      [
        "IT user satisfaction overview with KPI tiles",
        "Satisfaction breakdown by service and period",
        "Survey response detail page",
      ],
      ["Satisfaction overview", "Breakdown by service", "Survey response details"],
    ),
    technologies: ["Microsoft Forms", "SharePoint", "Power Automate", "Power BI", "DAX", "Power Query"],
    role: "Data Engineer",
    duration: "Dec 2025 – Jan 2026",
    team: "IT Digitalization team",
    problem: [
      "IT user satisfaction feedback had to be collected and compiled manually, which made it slow to turn survey responses into insight about IT service performance.",
    ],
    objectives: [
      "Automate survey data collection and integration.",
      "Build an end-to-end data pipeline for real-time analytics reporting.",
      "Give IT a clear view of service performance and user satisfaction.",
    ],
    solution: [
      "Survey responses are collected with Microsoft Forms and stored in SharePoint, with Power Automate handling the collection and integration automatically.",
      "The resulting dataset feeds interactive Power BI dashboards that track IT service performance and user satisfaction over time.",
    ],
    features: [
      { title: "Automated collection", description: "Survey responses flow from Microsoft Forms to SharePoint without manual work." },
      { title: "End-to-end pipeline", description: "Data is integrated and refreshed for real-time reporting." },
      { title: "Interactive dashboards", description: "Power BI reports to explore satisfaction and service performance." },
    ],
    contributions: [
      "Automated survey data collection and integration with Power Automate.",
      "Developed the end-to-end data pipeline.",
      "Designed and built the Power BI dashboards.",
    ],
    outcomes: [
      { value: "Automated", label: "Survey data collection" },
      { value: "Real-time", label: "Analytics reporting" },
      { value: "Power BI", label: "Interactive dashboards" },
    ],
    outcomeSummary:
      "Survey collection is now automated and IT can monitor service performance and user satisfaction through always-up-to-date dashboards.",
  },
  {
    slug: "safety-induction",
    title: "Safety Induction Automation & Dashboard",
    category: "Digitalization",
    year: "2025",
    summary:
      "Automated safety induction data collection and approvals, with dashboards to monitor compliance and induction performance.",
    overview:
      "This project digitalizes the safety induction process: data collection and approval workflows are automated with Power Automate, multiple sources are integrated into a centralized cloud database, and dashboards track compliance and induction performance.",
    thumbnail: cover("approval-workflow"),
    thumbnailAlt: "Safety induction approval workflow and compliance dashboard",
    gallery: shots(
      "approval-workflow",
      [
        "Safety induction approval overview",
        "Induction data submission form",
        "Compliance and induction performance dashboard",
      ],
      ["Approval overview", "Induction submission", "Compliance dashboard"],
    ),
    technologies: ["Power Automate", "Power BI", "DAX", "Power Query", "Data Integration"],
    role: "Data Analytics",
    duration: "Dec 2025 – Jan 2026",
    team: "IT Digitalization team",
    problem: [
      "Safety induction data and approvals were handled manually across several sources, making it difficult to monitor compliance and induction performance.",
    ],
    objectives: [
      "Automate safety induction data collection and approval workflows.",
      "Integrate multiple data sources into a centralized cloud database.",
      "Monitor compliance and induction performance with dashboards.",
    ],
    solution: [
      "Power Automate flows handle safety induction data collection and route approvals automatically.",
      "Data from multiple sources is integrated into a centralized cloud database with scheduled refreshes, which powers analytics dashboards for compliance and induction performance.",
    ],
    features: [
      { title: "Automated approvals", description: "Induction submissions are routed and approved through automated workflows." },
      { title: "Centralized data", description: "Multiple sources integrated into one cloud database." },
      { title: "Scheduled refreshes", description: "Data stays current without manual updates." },
      { title: "Compliance dashboards", description: "Track compliance and induction performance at a glance." },
    ],
    contributions: [
      "Automated data collection and approval workflows with Power Automate.",
      "Integrated multiple data sources into a centralized cloud database.",
      "Developed the analytics dashboards.",
    ],
    outcomes: [
      { value: "Automated", label: "Data collection & approvals" },
      { value: "Centralized", label: "Cloud database" },
      { value: "Scheduled", label: "Data refreshes" },
    ],
    outcomeSummary:
      "Safety induction data and approvals now run through automated workflows, and compliance can be monitored from dashboards backed by a centralized, regularly refreshed database.",
  },
];

export const projectCategories = Array.from(new Set(projects.map((p) => p.category)));

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { previous: Project; next: Project } | null {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1 || projects.length < 2) return null;
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
