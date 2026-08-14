import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("includes Vercel-ready production routes and public assets", async () => {
  await Promise.all([
    access(new URL("../.next/BUILD_ID", import.meta.url)),
    access(new URL("../app/not-found.tsx", import.meta.url)),
    access(new URL("../app/robots.ts", import.meta.url)),
    access(new URL("../app/sitemap.ts", import.meta.url)),
    access(new URL("../public/favicon.svg", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/resume.pdf", import.meta.url)),
  ]);
});

test("uses native Next.js scripts and centralized production URLs", async () => {
  const [packageJson, layout, site, profile] = await Promise.all([
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/site.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/profile.ts", import.meta.url), "utf8"),
  ]);

  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|cloudflare/i);
  assert.match(layout, /metadataBase: getSiteUrl\(\)/);
  assert.match(site, /SITE_URL/);
  assert.match(site, /VERCEL_PROJECT_PRODUCTION_URL/);
  assert.match(profile, /resumePath: "\/resume\.pdf"/);
});
