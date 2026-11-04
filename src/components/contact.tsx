import { ArrowUpRight, Mail } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { Copy } from "@/content/copy";
import { contactLinks, profile, type ContactLink } from "@/content/profile";

const linkIcons: Record<ContactLink["kind"], (props: { className?: string }) => React.ReactNode> = {
  email: ({ className }) => <Mail className={className} strokeWidth={1.75} aria-hidden="true" />,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

const buttonClass =
  "group inline-flex items-center gap-3 border border-paper/25 px-4 py-3 text-sm transition-colors hover:border-paper hover:bg-paper/10";

export function Contact({ copy }: { copy: Copy }) {
  const links = contactLinks();

  return (
    <footer id={copy.sections.contact} className="scroll-mt-28 bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div data-reveal>
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase dark:text-paper">
            {copy.contact.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            {copy.contact.heading}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">{copy.profile.availability}</p>
        </div>
        {links.length > 0 ? (
          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" data-reveal>
            {links.map((link) => {
              const Icon = linkIcons[link.kind];
              const external = link.href.startsWith("http");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={buttonClass}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <Icon className="size-4" />
                    {link.label}
                    <ArrowUpRight
                      className="size-4 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
            {profile.email ? (
              <li>
                <CopyEmail
                  email={profile.email}
                  className={buttonClass}
                  copyLabel={copy.ui.copyEmail}
                  copiedLabel={copy.ui.copied}
                />
              </li>
            ) : null}
          </ul>
        ) : null}
        <p className="mt-16 border-t border-paper/15 pt-6 text-sm text-paper/75">
          {profile.name}
          <span className="px-2" aria-hidden="true">
            ·
          </span>
          {copy.profile.role}
        </p>
      </div>
    </footer>
  );
}
