import { Briefcase } from "lucide-react";
import type { Copy } from "@/content/copy";
import { Section } from "@/components/section";

export function Experience({ copy }: { copy: Copy }) {
  return (
    <Section
      id={copy.sections.experience}
      title={copy.experience.title}
      intro={copy.experience.intro}
    >
      <div>
        {copy.jobs.map((job) => (
          <article
            key={job.company}
            data-reveal
            className="grid gap-4 border-t border-line py-10 md:grid-cols-[13rem_1fr] md:gap-12"
          >
            <div>
              <p className="text-sm text-muted">{job.period}</p>
              {job.current ? (
                <p className="mt-3 inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-ink uppercase">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="ping-dot absolute inline-flex size-full rounded-full bg-accent" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  {copy.ui.current}
                </p>
              ) : null}
            </div>
            <div className={job.current ? "border-l-2 border-accent pl-5" : undefined}>
              <h3 className="font-serif text-3xl tracking-tight text-ink">{job.role}</h3>
              <p className="mt-1 inline-flex items-center gap-2 text-lg text-ink">
                <Briefcase className="size-4 text-muted" strokeWidth={1.75} aria-hidden="true" />
                {job.company}
              </p>
              {job.trajectory ? <p className="mt-2 text-sm text-muted">{job.trajectory}</p> : null}
              <ul className="mt-5 space-y-3">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={copy.ui.technologies}>
                {job.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-chip px-3 py-1 text-sm text-ink transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
