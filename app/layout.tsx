import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { getSiteUrl } from "../lib/site";
import "./globals.css";

const title = "Tom Deng — Software Engineer";
const description = "Toronto software engineer experienced in responsive web applications, scalable backend services, real-time systems, and reliable deployment pipelines.";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title,
  description,
  applicationName: "Tom Deng — Portfolio OS",
  keywords: ["software engineer", "Toronto", "TypeScript", "Python", "React", "Node.js"],
  authors: [{ name: "Tom Deng", url: "https://github.com/shawndeng1" }],
  creator: "Tom Deng",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Tom Deng — Portfolio OS",
    locale: "en_CA",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Tom Deng software engineer portfolio workstation" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
