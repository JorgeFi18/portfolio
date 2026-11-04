import type { MetadataRoute } from "next";
import { locales } from "@/lib/locale";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const languages = {
    es: `${base}/es`,
    en: `${base}/en`,
    "x-default": `${base}/es`,
  };

  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === "es" ? 1 : 0.8,
    alternates: { languages },
  }));
}
