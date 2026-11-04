import { Bot, Boxes, Database, Globe, Plug, Server, type LucideIcon } from "lucide-react";
import type { Copy } from "@/content/copy";
import { delay } from "@/lib/motion";

const nodeLayout: { icon: LucideIcon; x: number; y: number; primary?: boolean }[] = [
  { icon: Globe, x: 50, y: 9 },
  { icon: Server, x: 50, y: 38, primary: true },
  { icon: Boxes, x: 20, y: 65 },
  { icon: Bot, x: 80, y: 65 },
  { icon: Database, x: 20, y: 91 },
  { icon: Plug, x: 80, y: 91 },
];

const edges = [
  "M50 9 L50 38",
  "M50 38 C50 53 20 50 20 65",
  "M50 38 C50 53 80 50 80 65",
  "M20 65 L20 91",
  "M80 65 L80 91",
];

export function ArchitectureDiagram({ copy }: { copy: Copy }) {
  const nodes = nodeLayout.map((node, index) => ({
    ...node,
    ...copy.diagram.nodes[index],
  }));

  return (
    <figure className="relative mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-none">
      <div
        role="img"
        aria-label={copy.diagram.aria}
        className="relative aspect-square"
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          {edges.map((d, index) => (
            <g key={d}>
              <path
                d={d}
                pathLength={100}
                className="draw"
                style={delay(350 + index * 140)}
                fill="none"
                stroke="var(--line)"
                strokeWidth={0.45}
              />
              <path
                d={d}
                pathLength={100}
                className="flow"
                style={delay(1100 + index * 140)}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={0.6}
                strokeLinecap="round"
                strokeDasharray="2 10"
              />
              <circle r={1.1} className="packet intro-fade" style={delay(1300 + index * 140)} fill="var(--accent)">
                <animateMotion
                  dur={`${3 + (index % 3) * 0.6}s`}
                  begin={`${-index * 0.8}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </circle>
            </g>
          ))}
        </svg>

        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              aria-hidden="true"
            >
              <div className="intro" style={delay(500 + index * 120)}>
                <div className="float flex flex-col items-center" style={{ animationDelay: `${index * -1.1}s` }}>
                  <span
                    className={`relative inline-flex items-center gap-2 whitespace-nowrap rounded-full border bg-paper px-3 py-1.5 text-xs font-medium text-ink shadow-[0_10px_28px_-18px_rgb(38_38_38/0.55)] sm:text-sm ${
                      node.primary ? "border-accent" : "border-line"
                    }`}
                  >
                    {node.primary ? (
                      <span className="ping-pill absolute inset-0 rounded-full border border-accent" />
                    ) : null}
                    <Icon className="size-3.5 sm:size-4" strokeWidth={1.75} />
                    {node.label}
                  </span>
                  <span className="mt-1 hidden whitespace-nowrap rounded-sm bg-paper px-1.5 py-0.5 text-[11px] text-muted sm:block">
                    {node.detail}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <figcaption className="intro-fade mt-6 text-center text-sm text-muted" style={delay(1500)}>
        {copy.diagram.caption}
      </figcaption>
    </figure>
  );
}
