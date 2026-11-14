import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/section";
import { TalkGallery } from "@/components/talk-gallery";
import type { Copy } from "@/content/copy";
import { talkMedia } from "@/content/talks";

export function Community({ copy }: { copy: Copy }) {
  const section = copy.communitySection;

  return (
    <Section id={copy.sections.community} title={section.title} intro={section.intro}>
      <div className="grid gap-6">
        {copy.talks.map((talk) => {
          const media = talkMedia[talk.id];
          return (
            <article key={talk.id} data-reveal className="border border-line p-5 md:p-8">
              <div className="grid gap-8 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:items-start">
                <Image
                  src={media.banner}
                  alt={talk.bannerAlt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 18rem, calc(100vw - 5.5rem)"
                  className="h-auto w-full ring-1 ring-line"
                />
                <div>
                  <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                    {talk.event} · <time dateTime={talk.dateTime}>{talk.date}</time>
                  </p>
                  <h3 className="mt-4 font-serif text-2xl tracking-tight text-ink md:text-3xl">
                    {talk.title}
                  </h3>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
                    <MapPin className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    {talk.venue}
                  </p>
                  <p className="mt-5 leading-relaxed text-muted">{talk.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={copy.ui.technologies}>
                    {talk.topics.map((topic) => (
                      <li key={topic} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink">
                        {topic}
                      </li>
                    ))}
                  </ul>
                  {copy.ui.talkLanguage ? (
                    <p className="mt-4 text-xs text-muted italic">{copy.ui.talkLanguage}</p>
                  ) : null}
                </div>
              </div>
              <TalkGallery
                photos={media.photos.map((image, index) => ({ image, alt: talk.photoAlts[index] ?? "" }))}
                labels={{
                  open: copy.ui.openPhoto,
                  close: copy.ui.closePhoto,
                  previous: copy.ui.previousPhoto,
                  next: copy.ui.nextPhoto,
                  count: copy.ui.photoCount,
                }}
              />
            </article>
          );
        })}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        {section.speakerProfileHref ? (
          <a
            href={section.speakerProfileHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:decoration-ink"
          >
            {section.speakerProfileLabel}
            <ArrowUpRight
              className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </a>
        ) : null}
        {section.tiktokHref ? (
          <a
            href={section.tiktokHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:decoration-ink"
          >
            {section.tiktokLabel}
            <ArrowUpRight
              className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </a>
        ) : null}
        <a
          href={section.eventHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:decoration-ink"
        >
          {section.eventLinkLabel}
          <ArrowUpRight
            className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </a>
      </div>
    </Section>
  );
}
