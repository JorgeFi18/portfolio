"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import type { Copy } from "@/content/copy";

export function MobileMenu({ copy }: { copy: Copy }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? copy.ui.closeMenu : copy.ui.openMenu}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-ink transition-colors hover:border-accent"
      >
        {open ? (
          <X className="size-4" strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <Menu className="size-4" strokeWidth={1.75} aria-hidden="true" />
        )}
      </button>

      {open ? (
        <>
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 top-full h-screen bg-black/25"
          />
          <nav
            id={menuId}
            aria-label={copy.ui.navLabel}
            className="absolute inset-x-0 top-full border-b border-line bg-paper px-6 py-4 shadow-[0_18px_36px_-18px_rgb(38_38_38/0.35)]"
          >
            <ul className="divide-y divide-line/60">
              {copy.nav.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 text-base text-ink transition-colors hover:text-muted"
                  >
                    <span>{item.label}</span>
                    <span className="font-serif text-xs tracking-[0.16em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
}
