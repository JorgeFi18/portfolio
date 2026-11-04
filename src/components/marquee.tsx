import { Sparkle } from "lucide-react";
import type { Copy } from "@/content/copy";
import { stackStrip } from "@/content/profile";

export function Marquee({ copy }: { copy: Copy }) {

  return (
    <div className="border-b border-line">
      <p className="sr-only">
        {copy.marqueeLabel}: {stackStrip.join(", ")}.
      </p>
      <div className="marquee overflow-hidden py-6" aria-hidden="true">
        <div className="marquee-track flex w-max">
          {[...stackStrip, ...stackStrip].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-8 pr-8 font-serif text-2xl whitespace-nowrap text-ink/80 md:text-3xl"
            >
              {item}
              <Sparkle className="size-4 text-accent" strokeWidth={1.75} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
