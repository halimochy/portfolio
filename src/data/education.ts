import type { Education } from "@/types";

/**
 * Education history, newest first. PLACEHOLDER content — replace with your own.
 */
export const education: Education[] = [
  {
    id: "bsc",
    institution: "Universitas Sumatera Utara",
    degree: "S.Kom.",
    field: "Computer Science",
    location: "Medan, Indonesia",
    period: "2021 – 2025",
    graduationYear: "2025",
    grade: "GPA (3.83/4.00)",
    summary:
      "Graduate programme focused on distributed systems, data platforms and applied machine learning.",
    highlights: [
      "Final year project: HDBSCAN-Based Analysis of Stunting Prevalence (graded A).",
      "3rd Place in the National Scientific Writing Competition (KTI) at the RXPO FARMASI 2024",
      "Teaching assistant for the Big Data Visualization course (30 students).",
    ],
    coursework: [
      "Data Mining",
      "Web Development",
      "UI/UX Design",
      "Database",
      "Machine Learning",
      "Artificial Intelligence.",
    ],
  },
  {
    id: "its-exchange",
    institution: "Institut Teknologi Sepuluh Nopember",
    degree: "S.Kom",
    field: "Computer Engineering",
    location: "Surabaya, Indonesia",
    period: "Aug 2022 – Dec 2022",
    graduationYear: "2022",
    summary:
      "Pertukaran Mahasiswa Merdeka Batch 2 – MBKM’s Program",
    highlights: [
      "Exchange Program at the Department of Computer Engineering.",
    ],
    coursework: [
      "Database",
      "Data Structure",
      "Web Development",
      "Information Systems",
      "Social Culture",
    ],
  },
];
