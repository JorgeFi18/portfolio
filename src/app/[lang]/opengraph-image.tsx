import { OgCard, contentType, size } from "@/lib/og-card";
import { dictionaries } from "@/content/copy";
import { isLocale } from "@/lib/locale";

export const alt = "Jorge Figueroa";
export { contentType, size };

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const copy = dictionaries[isLocale(lang) ? lang : "es"];
  return OgCard({ role: copy.profile.role, tagline: copy.meta.ogTagline });
}
