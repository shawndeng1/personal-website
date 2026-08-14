export type Project = {
  slug: string;
  name: string;
  label: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  repository: "private" | "public";
  problem: string;
  architecture: string;
  challenges: string[];
  results: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "timesheet-platform",
    name: "Employee Timesheet Platform",
    label: "Accion Labs · full-stack product",
    description: "A responsive timesheet application and Chrome extension used by more than 100 employees.",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "PostgreSQL", "Auth0"],
    repository: "private",
    problem: "Employees needed a fast, secure way to track work hours across a web interface and browser extension.",
    architecture: "A client-rendered React interface connected to secure Node.js and PostgreSQL microservices using Auth0 and the Repository Pattern, also packaged as a Manifest V3 Chrome extension.",
    challenges: ["Consistent web and extension experiences", "Secure single sign-on", "Reliable automated delivery and testing"],
    results: ["Supported more than 100 employees", "Page loads under 300 milliseconds", "85% test coverage", "Deployments completed in under 10 minutes"],
    accent: "amber",
  },
  {
    slug: "recommendation-engine",
    name: "Recommendation Engine",
    label: "Syngli Inc. · machine learning systems",
    description: "A scalable collaborative filtering system optimized for low-latency predictions.",
    technologies: ["Python", "Surprise", "Spark", "Ray", "MySQL"],
    repository: "private",
    problem: "The product needed accurate recommendations that remained responsive as workloads scaled.",
    architecture: "A Python collaborative filtering pipeline used Surprise for recommendation modeling, Spark and Ray for scalable computation, and an indexed MySQL persistence layer with connection pooling.",
    challenges: ["Low-latency inference", "Scalable model execution", "Efficient database access"],
    results: ["Prediction latency under 250 milliseconds", "Improved scalability and accuracy", "More efficient queries through indexing and pooling"],
    accent: "blue",
  },
  {
    slug: "event-driven-platform",
    name: "Event-Driven Communications",
    label: "Canadian Mortgages Inc. · distributed backend",
    description: "An email queue and real-time notification system built around Kafka and PostgreSQL.",
    technologies: ["Apache Kafka", "PostgreSQL", "Socket.IO", "WebSockets", "pytest"],
    repository: "private",
    problem: "The platform needed dependable scheduled email processing and timely in-product notifications.",
    architecture: "Kafka coordinated queued email work and WebSocket notification events, PostgreSQL stored durable scheduling state, and Socket.IO delivered real-time updates to clients.",
    challenges: ["Scheduling and prioritization", "Retries and deletion semantics", "Low-latency real-time delivery"],
    results: ["Queue processing under 50 milliseconds", "40% increase in user engagement", "Lower API defect escape rates"],
    accent: "violet",
  },
  {
    slug: "accessible-modernization",
    name: "Accessible Web Modernization",
    label: "University of Waterloo · platform modernization",
    description: "An incremental modernization of a legacy web application focused on modularity, accessibility, and static analysis.",
    technologies: ["Python", "Flask", "Jinja2", "ARIA", "Axe-Core", "SSR"],
    repository: "private",
    problem: "A legacy application needed a more maintainable structure and stronger accessibility compliance without a risky full rewrite.",
    architecture: "The codebase was incrementally reorganized around an MVC micro-framework using Flask and Jinja2, with server-rendered accessible components validated by Axe-Core.",
    challenges: ["Incremental legacy refactoring", "WCAG 2.0 accessibility", "Improving static analysis quality"],
    results: ["Improved modularity and maintainability", "Met WCAG 2.0 standards", "Cleaner code structure for static analysis"],
    accent: "green",
  },
];
