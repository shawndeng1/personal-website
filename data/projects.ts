export type Project = {
  slug: string;
  name: string;
  label: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  problem: string;
  architecture: string;
  challenges: string[];
  results: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "atlas",
    name: "Atlas",
    label: "Distributed systems playground",
    description: "A fault-tolerant job orchestration engine with retries, observability, and a visual execution graph.",
    technologies: ["Go", "gRPC", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/yourusername/atlas",
    demo: "https://example.com",
    problem: "Teams need a dependable way to coordinate long-running work without losing visibility when individual tasks fail.",
    architecture: "A Go control plane schedules DAG-based jobs across stateless workers. PostgreSQL stores durable state; Redis coordinates short-lived leases and events.",
    challenges: ["Idempotent retries across worker failures", "Back-pressure for bursty queues", "Human-readable distributed tracing"],
    results: ["Processes 25k simulated jobs/hour", "Recovers interrupted work without duplicate output", "One-command local environment"],
    accent: "amber",
  },
  {
    slug: "relay",
    name: "Relay",
    label: "Real-time collaboration platform",
    description: "A multiplayer workspace that keeps documents and presence synchronized with an offline-first experience.",
    technologies: ["TypeScript", "Next.js", "WebSockets", "Redis", "PostgreSQL"],
    github: "https://github.com/yourusername/relay",
    demo: "https://example.com",
    problem: "Collaborative tools often become fragile when connections drop or concurrent edits collide.",
    architecture: "A React client applies optimistic updates while a WebSocket gateway sequences changes and persists compact snapshots.",
    challenges: ["Conflict resolution", "Reconnect state reconciliation", "Keeping presence updates inexpensive"],
    results: ["Sub-100ms local update latency", "Seamless offline recovery", "Accessible keyboard-first editor"],
    accent: "blue",
  },
  {
    slug: "signal",
    name: "Signal",
    label: "Observability for data pipelines",
    description: "A focused monitoring console for scheduled pipelines, lineage, failures, and data-quality checks.",
    technologies: ["Python", "Airflow", "FastAPI", "React", "SQL"],
    github: "https://github.com/yourusername/signal",
    demo: "https://example.com",
    problem: "Pipeline failures are easy to detect but slow to diagnose when logs, lineage, and ownership live in separate tools.",
    architecture: "Event collectors normalize Airflow metadata into an API optimized for a responsive operational dashboard.",
    challenges: ["Normalizing inconsistent events", "Rendering large lineage graphs", "Useful alert prioritization"],
    results: ["Cut simulated triage time by 60%", "Unified run history and ownership", "Clear responsive incident views"],
    accent: "violet",
  },
  {
    slug: "keystone",
    name: "Keystone",
    label: "Personal knowledge index",
    description: "A semantic search tool that turns notes, bookmarks, and code snippets into one private knowledge index.",
    technologies: ["Python", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/keystone",
    demo: "https://example.com",
    problem: "Useful technical context disappears across disconnected notes, bookmarks, and repositories.",
    architecture: "Background workers chunk and index imported content; a hybrid lexical and semantic search ranks concise answers.",
    challenges: ["Useful chunk boundaries", "Fast incremental indexing", "Private local-first defaults"],
    results: ["Searches thousands of items instantly", "Incremental sync avoids reprocessing", "Exports all user-owned data"],
    accent: "green",
  },
];
