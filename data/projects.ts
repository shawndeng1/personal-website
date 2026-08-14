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
    slug: "playlist-to-mp3",
    name: "Playlist to MP3",
    label: "Desktop app · media processing",
    description: "A cross-platform desktop app and reusable download engine for converting YouTube playlists and videos into organized, metadata-rich MP3 libraries.",
    technologies: ["Python", "PySide6", "yt-dlp", "FFmpeg", "pytest", "PyInstaller"],
    github: "https://github.com/shawndeng1/yt-to-mp3",
    repository: "public",
    problem: "Large playlists are difficult to download reliably: individual items fail, metadata varies, and long-running jobs need to remain observable and controllable.",
    architecture: "A Qt-independent download engine handles extraction, conversion, retries, and file management while a PySide6 interface runs work in background QThreads. Atomic JSON persistence protects settings and history, and PyInstaller provides a desktop packaging path.",
    challenges: ["Keeping the interface responsive during long downloads", "Isolating failures without stopping an entire playlist", "Coordinating pause, resume, cancellation, and bounded concurrency"],
    results: ["Designed to process playlists with 1,000+ entries", "Configurable concurrency from one to five downloads", "Per-item retries, logs, and failure isolation", "Metadata, thumbnails, history, and CSV/JSON export"],
    accent: "amber",
  },
  {
    slug: "bistro-boulevard",
    name: "Bistro Boulevard",
    label: "Roblox game · distributed simulation",
    description: "An original restaurant-management game with customer AI, staff progression, construction tools, persistence, and multiplayer social systems.",
    technologies: ["Luau", "Roblox", "Rojo", "DataStore", "PathfindingService"],
    github: "https://github.com/shawndeng1/restaurant-game",
    repository: "public",
    problem: "A management game needs many interconnected systems to feel coherent while keeping each player's restaurant isolated, persistent, and secure in a shared server.",
    architecture: "Server-authoritative Luau services own economy, placement, progression, and persistence. Customer state machines coordinate queues and pathfinding, while a compact remoting contract and per-player rate limits protect the trust boundary.",
    challenges: ["Validating client-driven building actions on the server", "Coordinating customer and staff state without per-frame loops", "Saving evolving player data safely across sessions"],
    results: ["Playable end-to-end management-game vertical slice", "Grid building with undo, redo, moving, selling, and collision checks", "Versioned autosave with retry and backoff", "Load targets of 250 furniture, 50 customers, and 20 staff per plot"],
    accent: "violet",
  },
  {
    slug: "mlb-home-run-predictor",
    name: "MLB Home Run Predictor",
    label: "Machine learning · sports analytics",
    description: "A reproducible machine-learning pipeline that estimates each expected starting hitter's probability of hitting a home run.",
    technologies: ["Python", "pandas", "scikit-learn", "pybaseball", "NumPy", "pytest"],
    github: "https://github.com/shawndeng1/home-run-predictor",
    repository: "public",
    problem: "Baseball predictions are easy to overstate when future information leaks into training data or evaluation mixes earlier and later games.",
    architecture: "A command-line pipeline collects incremental Statcast data, builds batter and pitcher features from prior games only, trains a calibrated logistic-regression model, and serves single-game or daily predictions. Whole game dates are split chronologically for validation and testing.",
    challenges: ["Preventing target leakage in expanding player statistics", "Handling unseen players and incomplete live lineups", "Keeping collection, training, evaluation, and inference reproducible"],
    results: ["Leakage-safe chronological evaluation", "Calibrated probability outputs with Brier, log-loss, and ROC-AUC reporting", "Game-level and daily prediction commands", "Tests for shifting, unseen players, targets, and split boundaries"],
    accent: "blue",
  },
  {
    slug: "catchcart",
    name: "CatchCart",
    label: "Product prototype · commerce tooling",
    description: "An interactive product-monitoring dashboard prototype for tracking Pokémon inventory and prices across major retailers.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Cloudflare"],
    github: "https://github.com/shawndeng1/pokemon-bot",
    repository: "public",
    problem: "Collectors need a clear way to track many products and retailers without losing sight of stock changes, price limits, or purchase safety.",
    architecture: "A typed React dashboard models monitors, retailer health, alerts, and recent activity in local interface state. Search, filters, modals, notifications, and responsive layouts demonstrate the workflow while keeping checkout behind explicit user review.",
    challenges: ["Presenting dense monitoring state without clutter", "Designing safe review-before-purchase interactions", "Keeping filters, forms, status changes, and feedback coherent"],
    results: ["Responsive interactive dashboard prototype", "Monitor creation, toggling, search, filters, and refresh flows", "Purchase-review modal and visible activity history", "Clear foundation for connecting real monitoring services later"],
    accent: "green",
  },
];
