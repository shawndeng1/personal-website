# Developer OS Portfolio

A polished personal portfolio built as a modern developer workstation. It combines a recruiter-friendly resume and project showcase with app windows, a command palette, a functional terminal, persisted themes, and a fast boot sequence.

## Personalize it

All placeholder content is centralized:

- `data/profile.ts` — name, headline, introduction, contact links, education, and resume path
- `data/projects.ts` — project cards and full README-style case studies
- `data/experience.ts` — roles, dates, locations, and accomplishments
- `data/skills.ts` — grouped languages, frameworks, and tools
- `public/resume.pdf` — add your real PDF here (this file is intentionally not included)

Bracketed values and placeholder URLs are marked for replacement.

## Run locally

Requires Node.js 22.13 or newer.

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
