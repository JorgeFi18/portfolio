import { notFound } from "next/navigation";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Projects } from "@/components/projects";
import { RevealObserver } from "@/components/reveal-observer";
import { Scope } from "@/components/scope";
import { Skills } from "@/components/skills";
import { dictionaries } from "@/content/copy";
import { personJsonLd } from "@/content/profile";
import { isLocale } from "@/lib/locale";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = dictionaries[lang];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd(lang)),
        }}
      />
      <Header copy={copy} locale={lang} />
      <main id={copy.sections.main}>
        <Hero copy={copy} />
        <Marquee copy={copy} />
        <Experience copy={copy} />
        <Projects copy={copy} />
        <Skills copy={copy} />
        <Scope copy={copy} />
      </main>
      <Contact copy={copy} />
      <RevealObserver />
    </>
  );
}
