"use client";

import type { PointerEvent, ReactNode } from "react";

export function SpotlightCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  function onPointerMove(event: PointerEvent<HTMLElement>) {
    const card = event.currentTarget;
    const box = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - box.left}px`);
    card.style.setProperty("--y", `${event.clientY - box.top}px`);
  }

  return (
    <article onPointerMove={onPointerMove} className={`spotlight ${className}`}>
      {children}
    </article>
  );
}
