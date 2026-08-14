import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html", host: "localhost" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the portfolio shell and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Tom Developer — Software Engineer<\/title>/i);
  assert.match(html, /Initializing portfolio/);
  assert.match(html, /Developer environment ready/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps portfolio data centralized and removes starter assets", async () => {
  const [profile, projects, experience, skills, packageJson] = await Promise.all([
    readFile(new URL("../data/profile.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/projects.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/experience.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/skills.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(profile, /resumePath/);
  assert.match(projects, /architecture/);
  assert.match(experience, /accomplishments/);
  assert.match(skills, /skillGroups/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
