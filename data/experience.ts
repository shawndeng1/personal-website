export type Experience = {
  version: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  accomplishments: string[];
};

export const experience: Experience[] = [
  {
    version: "v3.0",
    company: "[Current Company]",
    role: "Software Engineering Intern",
    dates: "May 2026 — Aug 2026",
    location: "[City, State / Remote]",
    summary: "Building reliable platform services and internal developer tooling.",
    accomplishments: [
      "Designed and shipped an internal service that reduced a repetitive workflow from hours to minutes.",
      "Improved API observability with structured metrics and actionable dashboards.",
      "Collaborated across engineering and product to deliver a production feature end to end.",
    ],
  },
  {
    version: "v2.0",
    company: "[Previous Company]",
    role: "Software Developer Intern",
    dates: "May 2025 — Aug 2025",
    location: "[City, State]",
    summary: "Developed customer-facing features and backend integrations.",
    accomplishments: [
      "Built reusable TypeScript components used across multiple product surfaces.",
      "Optimized a high-traffic data path and reduced median response time.",
      "Added automated tests and CI checks that made releases safer.",
    ],
  },
  {
    version: "v1.0",
    company: "[Your University]",
    role: "Computer Science Student",
    dates: "2023 — Present",
    location: "[City, State]",
    summary: "Studying computer science and building production-minded software outside the classroom.",
    accomplishments: [
      "Coursework in algorithms, systems, networking, databases, and software engineering.",
      "Built and shipped collaborative projects with small engineering teams.",
    ],
  },
];
