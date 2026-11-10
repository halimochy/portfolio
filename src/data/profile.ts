import type { Profile } from "@/types";

/**
 * Personal details, based on the CV in /public/resume.pdf.
 */
export const profile: Profile = {
  name: "Nurhalimah",
  initials: "N",
  title: "Data Engineer & Full-Stack Developer",
  tagline: "I build end-to-end data and digital solutions — from raw data to dashboards and web apps.",
  intro:
    "Computer Science graduate working in IT Digitalization and Operations Analytics, specializing in data engineering, data analytics, business intelligence and full-stack development.",
  about: [
    "I develop end-to-end digital solutions: extracting and transforming operational data, integrating it into analytics platforms, and turning it into dashboards, automations and web applications that people across the business can use every day.",
    "In my current role I extract data from SAP with Python, integrate it into SQL Server and Microsoft Fabric Lakehouse, build Power BI dashboards, automate workflows with Power Automate and develop responsive internal web applications. I work closely with supervisors, department heads and business users to gather requirements, validate data and keep improving each solution.",
  ],
  location: "Medan, North Sumatera, Indonesia",
  email: "nurhalimahnvr@gmail.com",
  avatar: "/images/profile.jpeg",
  avatarAlt: "Portrait of Nurhalimah",
  resume: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/halimochy", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/halimahnvr",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:nurhalimahnvr@gmail.com", icon: "mail" },
  ],
  stats: [
    { value: "5+", label: "End-to-end data solutions" },
    { value: "5+", label: "Power BI dashboards" },
    { value: "3+", label: "Business process automations" },
  ],
  skills: [
    {
      group: "Data Engineering & Analytics",
      items: [
        "Data Pipeline",
        "ETL/ELT",
        "Data Cleaning",
        "Data Transformation",
        "Data Integration",
        "Data Analysis",
      ],
    },
    {
      group: "Business Intelligence",
      items: ["Power BI", "DAX", "Power Query", "Data Visualization"],
    },
    {
      group: "Data Platform & Database",
      items: ["Microsoft Fabric", "Fabric Lakehouse", "SQL Server", "SSMS"],
    },
    {
      group: "Programming & Automation",
      items: ["Python", "SQL", "JavaScript", "Microsoft Power Automate"],
    },
    {
      group: "Web Development & UI/UX",
      items: ["HTML", "CSS", "React", "Vite", "Responsive Web Development", "Wireframing", "Prototyping", "Interface Design"],
    },
    {
      group: "Soft Skills & Languages",
      items: [
        "Analytical Thinking",
        "Problem-Solving",
        "Communication",
        "Teamwork",
        "Indonesian (Native)",
        "English (Professional Working Proficiency)",
      ],
    },
  ],
};
