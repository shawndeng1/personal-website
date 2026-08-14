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
    version: "v4.0",
    company: "Accion Labs",
    role: "Software Engineering Intern",
    dates: "Jan. 2024 - Apr. 2024",
    location: "Toronto, Ontario",
    summary: "Built a production-ready employee timesheet platform spanning web, backend, browser extension, testing, and cloud deployment.",
    accomplishments: [
      "Built a responsive React, Redux Toolkit, and Tailwind CSS timesheet interface used by more than 100 employees, with page loads under 300 milliseconds.",
      "Designed secure Node.js and PostgreSQL backend services integrated with Auth0 using the Repository Pattern in a microservices architecture.",
      "Packaged the product as a Manifest V3 Chrome extension and created continuous deployment pipelines that reduced deployment time to under 10 minutes.",
      "Built Jest and Cypress test coverage integrated with GitHub Actions, achieving 85% code coverage.",
      "Configured Docker and Kubernetes deployment environments to reduce environment inconsistency errors.",
    ],
  },
  {
    version: "v3.0",
    company: "Syngli Inc.",
    role: "Software Engineering Intern",
    dates: "Jan. 2021 - Apr. 2021",
    location: "Waterloo, Ontario",
    summary: "Developed a high-performance recommendation system and improved production reliability.",
    accomplishments: [
      "Built a collaborative filtering recommendation system in Python using Surprise, Spark, and Ray with prediction latency under 250 milliseconds.",
      "Integrated MySQL using the Repository Pattern, indexing strategies, and connection pooling to improve query efficiency.",
      "Resolved production bugs and edge cases in a live user-facing environment, reducing mean time to resolution.",
    ],
  },
  {
    version: "v2.0",
    company: "Canadian Mortgages Inc.",
    role: "Software Engineering Intern",
    dates: "Sep. 2019 - Dec. 2019",
    location: "Mississauga, Ontario",
    summary: "Built event-driven services, real-time notifications, and automated document workflows.",
    accomplishments: [
      "Designed an Apache Kafka and PostgreSQL email queue supporting scheduling, prioritization, retries, and deletion with processing latency under 50 milliseconds.",
      "Improved user engagement by 40% with Socket.IO and Kafka-powered WebSocket notifications.",
      "Automated PDF compression with Ghostscript and Apache Airflow, reducing memory usage by 30%.",
      "Tested public APIs with Postman and pytest to lower defect escape rates.",
    ],
  },
  {
    version: "v1.0",
    company: "University of Waterloo",
    role: "Software Engineering Intern",
    dates: "Jan. 2019 - Apr. 2019",
    location: "Waterloo, Ontario",
    summary: "Modernized a legacy web application for maintainability and accessibility.",
    accomplishments: [
      "Improved modularity by introducing an MVC micro-framework with Flask and Jinja2 and incrementally refactoring the legacy codebase.",
      "Improved frontend accessibility with ARIA and Axe-Core, using server-side rendering to meet WCAG 2.0 standards.",
      "Restructured and optimized codebases for static analysis.",
    ],
  },
];
