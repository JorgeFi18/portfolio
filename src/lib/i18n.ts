import { dictionaries } from "@/content/copy";
import type { Locale } from "@/lib/locale";

const sectionKeys = [
  "main",
  "hero",
  "experience",
  "projects",
  "skills",
  "scope",
  "contact",
] as const;

export function sectionAnchors(locale: Locale) {
  const sections = dictionaries[locale].sections;
  return sectionKeys.map((key) => sections[key]);
}
