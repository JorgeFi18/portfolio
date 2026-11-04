import { icons } from "@/components/icons";
import type { Copy } from "@/content/copy";
import { Section } from "@/components/section";
import { delay } from "@/lib/motion";

export function Scope({ copy }: { copy: Copy }) {
  return (
    <Section
      id={copy.sections.scope}
      title={copy.scopeSection.title}
      intro={copy.scopeSection.intro}
    >
      <ol className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {copy.scope.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.icon} className="bg-paper" data-reveal style={delay((index % 2) * 120)}>
              <div className="group h-full p-6 transition-colors duration-300 hover:bg-blush md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-ink">{String(index + 1).padStart(2, "0")}</span>
                  <Icon
                    className="size-5 text-muted transition-all duration-300 group-hover:scale-110 group-hover:text-ink"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-lg leading-relaxed text-ink">{item.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
