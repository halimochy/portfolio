import type { Experience } from "@/types";

/**
 * Work experience, newest first.
 */
export const experience: Experience[] = [
  {
    id: "sinarmas-cepsa",
    company: "PT Energi Sejahtera Mas (Sinarmas Cepsa)",
    role: "Operation Analytics – IT Digitalization",
    period: "Oct 2025 – Present",
    location: "Riau, Indonesia",
    type: "Full-time",
    summary:
      "Building end-to-end data, analytics, automation and web solutions for operations — from data extraction and integration to dashboards, workflows and internal applications.",
    responsibilities: [
      "Develop and maintain end-to-end data solutions covering data extraction, preprocessing, transformation, integration, analysis and visualization.",
      "Extract and process operational data from SAP using Python, then integrate the transformed datasets into SQL Server and Microsoft Fabric Lakehouse for analytics and reporting.",
      "Build and maintain interactive Power BI dashboards to monitor operational performance and support data-driven decision-making.",
      "Design responsive web interfaces, wireframes and prototypes to improve usability and visual consistency.",
      "Collaborate with supervisors, department heads and business stakeholders to gather requirements, validate data and continuously improve digital solutions.",
    ],
    achievements: [
      "Delivered and maintained 5+ end-to-end data solutions.",
      "Built and maintained 5+ interactive Power BI dashboards for operational performance monitoring.",
      "Developed and managed 3+ business process automations with Microsoft Power Automate, reducing manual processes and improving workflow efficiency.",
      "Developed a full-stack intranet web application that centralizes company applications and improves accessibility across departments.",
    ],
    technologies: [
      "Python",
      "SAP",
      "SQL Server",
      "Microsoft Fabric",
      "Fabric Lakehouse",
      "Power BI",
      "DAX",
      "Power Automate",
      "React",
      "JavaScript",
    ],
  },
  {
    id: "kai-bandara",
    company: "KAI Bandara (PT Railink)",
    role: "Database Maintenance and Planning Intern",
    period: "Jun 2024 – Jul 2024",
    location: "Medan, Indonesia",
    type: "Internship",
    summary:
      "Supported the IT team in maintaining, monitoring and documenting the company's database systems.",
    responsibilities: [
      "Assisted in the maintenance and optimization of database systems.",
      "Monitored database performance and performed regular backups.",
      "Documented database procedures and technical issues for future reference.",
    ],
    achievements: [
      "Contributed to keeping database systems reliable through routine monitoring and backups.",
      "Produced documentation of database procedures and technical issues for the team's future reference.",
    ],
    technologies: ["SQL", "Database Maintenance", "Performance Monitoring", "Backup & Recovery", "Technical Documentation"],
  },
];
