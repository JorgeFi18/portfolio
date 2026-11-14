import { ArrowDown, Mail } from "lucide-react";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { CountUp } from "@/components/count-up";
import type { Copy } from "@/content/copy";
import { companies, profile } from "@/content/profile";
import { delay } from "@/lib/motion";

export function Hero({ copy }: { copy: Copy }) {
  const [firstName, ...lastName] = profile.name.split(" ");

  return (
    <section id={copy.sections.hero} className="relative scroll-mt-28 overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="dot-grid absolute inset-0" />
        <div
          className="aurora -top-1/4 -right-1/4 h-[44rem] w-[44rem]"
          style={{ background: "radial-gradient(closest-side, var(--glow-a), transparent)" }}
        />
        <div
          className="aurora -bottom-1/3 -left-1/4 h-[38rem] w-[38rem]"
          style={{
            background: "radial-gradient(closest-side, var(--glow-b), transparent)",
            animationDuration: "30s",
            animationDelay: "-8s",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-5xl gap-14 px-6 pt-16 md:pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-center lg:gap-10">
        <div>
          <span className="intro-bar mb-8 block h-0.5 w-10 bg-accent" style={delay(50)} aria-hidden="true" />
          <p className="intro text-sm font-medium tracking-[0.18em] text-ink uppercase" style={delay(120)}>
            {copy.profile.role}
          </p>
          <h1 className="mt-4 font-serif text-[clamp(3.4rem,8vw,6.4rem)] leading-[0.92] tracking-[-0.03em] text-ink">
            <span className="intro-line">
              <span style={delay(200)}>{firstName}</span>
            </span>
            <span className="intro-line">
              <span style={delay(320)}>{lastName.join(" ")}</span>
            </span>
          </h1>
          <p className="intro mt-8 max-w-xl text-xl leading-relaxed text-ink md:text-2xl" style={delay(520)}>
            {copy.profile.summary}
          </p>
          {(copy.profile.location || profile.location) ? (
            <p className="intro mt-4 text-muted" style={delay(600)}>
              {copy.profile.location || profile.location}
            </p>
          ) : null}
          <div className="intro mt-10 flex flex-wrap gap-3" style={delay(680)}>
            <a
              href={`#${copy.sections.experience}`}
              className="group inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              {copy.ui.seeExperience}
              <ArrowDown
                className="size-4 transition-transform group-hover:translate-y-0.5"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
            <a
              href={`#${copy.sections.contact}`}
              className="group inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-blush"
            >
              <Mail className="size-4" strokeWidth={1.75} aria-hidden="true" />
              {copy.ui.contact}
            </a>
          </div>
        </div>

        <ArchitectureDiagram copy={copy} />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-14 pb-16 md:pb-20">
        <dl className="intro grid gap-6 border-t border-line pt-6 sm:grid-cols-3" style={delay(820)}>
          {copy.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">{fact.label}</dt>
              <dd className="mt-1 font-serif text-2xl text-ink">
                <CountUp value={fact.value} />
              </dd>
            </div>
          ))}
        </dl>
        <p className="intro mt-10 text-sm leading-relaxed text-muted" style={delay(940)}>
          <span className="mr-2 font-medium tracking-[0.16em] text-ink uppercase">{copy.ui.experienceAt}</span>
          {companies.join(" · ")}
        </p>
      </div>
    </section>
  );
}
