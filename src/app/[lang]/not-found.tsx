import { defaultLocale, locales } from "@/lib/locale";

const text = {
  es: { title: "Página no encontrada", body: "Esa dirección no existe." },
  en: { title: "Page not found", body: "That address does not exist." },
} as const;

export default function NotFound() {
  const copy = text[defaultLocale];

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm font-medium tracking-[0.18em] text-muted uppercase">404</p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">{copy.title}</h1>
      <p className="mt-4 text-lg text-muted">{copy.body}</p>
      <div className="mt-8 flex gap-3">
        {locales.map((locale) => (
          <a
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            className="border border-line px-4 py-2 text-sm text-ink hover:border-accent"
          >
            {locale === "es" ? "Español" : "English"}
          </a>
        ))}
      </div>
    </main>
  );
}
