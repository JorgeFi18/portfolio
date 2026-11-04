import { icons } from "@/components/icons";
import type { Copy } from "@/content/copy";
import { Section } from "@/components/section";
import { delay } from "@/lib/motion";

export function Skills({ copy }: { copy: Copy }) {
  return (
    <Section
      id={copy.sections.skills}
      title={copy.skillsSection.title}
      intro={copy.skillsSection.intro}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {copy.skillGroups.map((group, index) => {
          const Icon = icons[group.icon];
          return (
            <div key={group.icon} data-reveal style={delay((index % 3) * 100)}>
              <div className="group h-full border border-line p-6 transition-colors duration-300 hover:border-accent hover:bg-blush">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-chip text-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="text-xs font-medium tracking-[0.16em] text-ink uppercase">{group.label}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-sm text-ink transition-colors hover:border-accent hover:bg-paper"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
