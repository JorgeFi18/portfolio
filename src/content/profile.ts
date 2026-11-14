import { dictionaries } from "@/content/copy";
import type { Locale } from "@/lib/locale";

export const profile = {
  name: "Jorge Figueroa",
  email: "jorgefigueroa1897@gmail.com",
  linkedin: "https://www.linkedin.com/in/jorge-figueroa-gt/",
  github: "https://github.com/JorgeFi18",
  sessionize: "https://sessionize.com/jorge-figueroa-gt/",
  tiktok: "https://www.tiktok.com/@jorgefi_dev",
  location: "",
};

export type IconName =
  | "architecture"
  | "server"
  | "ai"
  | "agent"
  | "dx"
  | "frontend"
  | "data"
  | "commerce"
  | "layers"
  | "chart"
  | "management";

export const companies = [
  "Itti",
  "Cliengo",
  "TELUS International",
  "Master Development",
  "Viaro Networks",
];

export const stackStrip = [
  "Next.js",
  "Node.js",
  "Go",
  "Python",
  ".NET",
  "Gemini",
  "OpenAI",
  "Anthropic",
  "MCP",
  "React",
  "TypeScript",
  "Module Federation",
  "PostgreSQL",
  "Redis",
  "AWS Lambda",
];

export type ContactLink = {
  kind: "email" | "linkedin" | "github" | "sessionize" | "tiktok";
  label: string;
  href: string;
};

export function contactLinks(): ContactLink[] {
  const links: (ContactLink | null)[] = [
    profile.email
      ? { kind: "email", label: profile.email, href: `mailto:${profile.email}` }
      : null,
    profile.linkedin
      ? { kind: "linkedin", label: "LinkedIn", href: profile.linkedin }
      : null,
    profile.github
      ? { kind: "github", label: "GitHub", href: profile.github }
      : null,
    profile.sessionize
      ? { kind: "sessionize", label: "Sessionize", href: profile.sessionize }
      : null,
    profile.tiktok
      ? { kind: "tiktok", label: "TikTok", href: profile.tiktok }
      : null,
  ];
  return links.filter((link): link is ContactLink => link !== null);
}

export function personJsonLd(locale: Locale) {
  const copy = dictionaries[locale];
  const links = contactLinks();
  const sameAs = links
    .map((link) => link.href)
    .filter((href) => href.startsWith("http"));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: copy.profile.role,
    description: copy.profile.summary,
    inLanguage: locale,
    knowsAbout: copy.skillGroups.flatMap((group) => group.items),
    ...(profile.email ? { email: profile.email } : {}),
    ...((copy.profile.location || profile.location) ? { homeLocation: copy.profile.location || profile.location } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}
