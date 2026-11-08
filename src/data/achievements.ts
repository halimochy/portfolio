import type { Achievement } from "@/types";

/**
 * Awards, certifications, competitions and more. Order does not matter:
 * items are sorted by `year`. Add certifications here as you earn them.
 */
export const achievements: Achievement[] = [
  {
    id: "kti-rxpo-farmasi-2024",
    category: "Competition",
    title: "3rd Place — National Scientific Writing Competition (KTI)",
    organization: "RXPO FARMASI 2024",
    date: "2024",
    year: 2024,
    description:
      "Placed third in a national scientific writing competition held at RXPO FARMASI 2024.",
  },
  {
    id: "mbkm-pmm-batch-2",
    category: "Other",
    title: "Pertukaran Mahasiswa Merdeka Batch 2 (MBKM)",
    organization: "Institut Teknologi Sepuluh Nopember",
    date: "Sep 2022 – Dec 2022",
    year: 2022,
    description:
      "Selected for the national MBKM student exchange programme at the Department of Computer Engineering, ITS Surabaya, studying Database, Data Structure and Front-End Web Development.",
  },
];
