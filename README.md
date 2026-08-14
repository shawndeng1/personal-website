# Developer OS Portfolio

A polished personal portfolio built as a modern developer workstation. It combines a recruiter-friendly resume and project showcase with app windows, a command palette, a functional terminal, persisted themes, and a fast boot sequence.

## Portfolio content

All resume-backed content is centralized:

- `data/profile.ts` — name, headline, introduction, contact links, education, and resume path
- `data/projects.ts` — project cards and full README-style case studies
- `data/experience.ts` — roles, dates, locations, and accomplishments
- `data/skills.ts` — grouped languages, frameworks, and tools
- `public/resume.pdf` — downloadable one-page resume

The featured project case studies are sourced from the public GitHub repositories.
Employment history and accomplishments remain centralized separately in `data/experience.ts`.

## Run locally

Requires Node.js 22.13 or newer.

If `node --version` reports an older release, install the current Node.js LTS
from [nodejs.org](https://nodejs.org/en/download), then close and reopen your
terminal. The project includes `.nvmrc` and `.node-version` files for version
managers and prints a clear message when the active runtime is too old.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Use `Ctrl/Cmd + K` for the command palette.

## Validate

```bash
npm run lint
npx tsc --noEmit
npm run build
npm test
```

## Architecture

- `app/` — route, global design system, SEO and social metadata
- `components/desktop/` — workstation shell, windows, dock, desktop icons
- `components/apps/` — About, Projects, Experience, Skills, Resume, Contact, Terminal
- `components/command/` — VS Code-inspired command palette
- `components/projects/` — reusable cards and README-style detail views
- `data/` — centralized portfolio content

The project uses Next.js-compatible vinext output so it can run on Cloudflare Sites while retaining the Next.js app-router component model.
