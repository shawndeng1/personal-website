# Developer OS Portfolio

Tom Deng's portfolio, presented as a polished developer workstation. It combines recruiter-friendly resume and project content with animated application windows, a command palette, a functional terminal, and responsive mobile navigation.

## Tech stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local development

Node.js 22.13 or newer is required. The repository includes `.nvmrc` and `.node-version` files.

```bash
nvm use
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, copy the environment file with:

```powershell
Copy-Item .env.example .env.local
```

Open [http://localhost:3000](http://localhost:3000). `SITE_URL` may remain unset locally; production should use the canonical `https://` origin.

## Content

- `data/profile.ts` — profile, contact links, education, and resume path
- `data/projects.ts` — project cards and README-style case studies
- `data/experience.ts` — work history and accomplishments
- `data/skills.ts` — grouped languages, frameworks, and tools
- `public/resume.pdf` — resume served at `/resume.pdf`
- `public/og.png` — Open Graph and social sharing image

## Production checks

```bash
npm run lint
npm run typecheck
npm run build
npm test
```

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework preset as **Next.js** and the build command as `npm run build`.
4. Add `SITE_URL` in **Project Settings → Environment Variables** with the canonical production origin, such as `https://portfolio.example.com`.
5. Deploy. Vercel installs dependencies and runs the native Next.js production build automatically.

Vercel supplies `VERCEL_PROJECT_PRODUCTION_URL`; the app uses it when `SITE_URL` is absent. After attaching a custom domain, set `SITE_URL` to that custom origin and redeploy so canonical, Open Graph, robots, and sitemap URLs all use it.

## Production routes and assets

- `/` — portfolio
- `/resume.pdf` — downloadable/viewable resume
- `/robots.txt` — crawler policy
- `/sitemap.xml` — canonical sitemap
- unknown routes — themed 404 page

The site has no backend secrets or required third-party API keys. GitHub, LinkedIn, and email destinations are public profile data centralized in `data/profile.ts`.
