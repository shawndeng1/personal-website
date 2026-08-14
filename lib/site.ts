const LOCAL_URL = "http://localhost:3000";

function normalizeUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
}

export function getSiteUrl(): URL {
  const configuredUrl = process.env.SITE_URL;
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const value = configuredUrl || vercelProductionUrl || LOCAL_URL;
  return new URL(normalizeUrl(value));
}
