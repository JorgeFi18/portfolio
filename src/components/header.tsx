import { LanguageSwitch } from "@/components/language";
import { MobileMenu } from "@/components/mobile-menu";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Copy } from "@/content/copy";
import { profile } from "@/content/profile";
import { sectionAnchors } from "@/lib/i18n";
import type { Locale } from "@/lib/locale";

export function Header({ copy, locale }: { copy: Copy; locale: Locale }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <a
        href={`#${copy.sections.main}`}
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-30 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        {copy.ui.skip}
      </a>
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MobileMenu copy={copy} />
            <a href={`#${copy.sections.hero}`} className="font-serif text-lg tracking-tight text-ink">
              {profile.name}
            </a>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-5">
            <nav aria-label={copy.ui.navLabel} className="hidden gap-x-5 sm:flex">
              <NavLinks copy={copy} />
            </nav>
            <LanguageSwitch
              locale={locale}
              label={copy.ui.language}
              anchors={{ es: sectionAnchors("es"), en: sectionAnchors("en") }}
            />
            <ThemeToggle toDark={copy.ui.themeToDark} toLight={copy.ui.themeToLight} />
          </div>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}

function NavLinks({ copy }: { copy: Copy }) {
  return copy.nav.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="relative text-sm text-muted transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100"
    >
      {item.label}
    </a>
  ));
}
