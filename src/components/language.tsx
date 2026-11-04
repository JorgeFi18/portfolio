"use client";

import type { Locale } from "@/lib/locale";

const languageNames: Record<Locale, string> = { es: "Español", en: "English" };

export function LanguageSwitch({
  locale,
  label,
  anchors,
}: {
  locale: Locale;
  label: string;
  anchors: Record<Locale, string[]>;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex h-9 shrink-0 items-stretch border border-line text-xs font-medium tracking-[0.12em]"
    >
      {(["es", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <a
            key={code}
            href={`/${code}`}
            hrefLang={code}
            lang={code}
            aria-current={active ? "true" : undefined}
            aria-label={languageNames[code]}
            onClick={(event) => {
              if (code === locale) {
                event.preventDefault();
                return;
              }
              const hash = window.location.hash.slice(1);
              const index = anchors[locale].indexOf(hash);
              if (index < 0) return;
              event.currentTarget.href = `/${code}#${anchors[code][index]}`;
            }}
            className={`inline-flex items-center justify-center px-2.5 uppercase transition-colors ${
              active ? "bg-ink text-paper" : "text-muted hover:text-ink"
            }`}
          >
            {code}
          </a>
        );
      })}
    </div>
  );
}
