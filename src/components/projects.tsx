import { ArrowUpRight } from "lucide-react";
import { icons } from "@/components/icons";
import type { Copy } from "@/content/copy";
import { Section } from "@/components/section";
import { SpotlightCard } from "@/components/spotlight-card";
import { delay } from "@/lib/motion";

export function Projects({ copy }: { copy: Copy }) {
  return (
    <Section
      id={copy.sections.projects}
      title={copy.projectsSection.title}
      intro={copy.projectsSection.intro}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {copy.projects.map((project, index) => {
          const Icon = icons[project.icon];
          return (
            <div key={project.icon} data-reveal style={delay((index % 2) * 120)}>
              <SpotlightCard className="group flex h-full flex-col border border-line bg-blush p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_24px_48px_-28px_rgb(38_38_38/0.5)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-paper text-ink ring-1 ring-line transition-colors duration-300 group-hover:bg-accent group-hover:text-[#262626] group-hover:ring-accent">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className="pt-1 text-right text-xs font-medium tracking-[0.16em] text-muted uppercase">
                    {project.context}
                  </p>
                </div>
                <h3 className="mt-6 font-serif text-2xl tracking-tight text-ink">{project.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted">{project.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={copy.ui.technologies}>
                  {project.stack.map((item) => (
                    <li key={item} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:decoration-ink"
                  >
                    {project.hrefLabel}
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </a>
                ) : null}
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
