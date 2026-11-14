"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Photo = { image: StaticImageData; alt: string };

type Labels = {
  open: string;
  close: string;
  previous: string;
  next: string;
  count: string;
};

export function TalkGallery({ photos, labels }: { photos: Photo[]; labels: Labels }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const total = photos.length;

  const open = (index: number) => {
    setActive(index);
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => dialogRef.current?.close(), []);

  const step = useCallback(
    (delta: number) => setActive((current) => (current === null ? current : (current + delta + total) % total)),
    [total],
  );

  useEffect(() => {
    if (active === null) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
    };
  }, [active]);

  const columns = total % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-4";
  const current = active === null ? null : photos[active];

  return (
    <>
      <ul className={`mt-8 grid grid-cols-2 gap-2 ${columns}`}>
        {photos.map((photo, index) => (
          <li
            key={photo.image.src}
            className={total % 2 === 1 && index === total - 1 ? "col-span-2 md:col-span-1" : undefined}
          >
            <button
              type="button"
              onClick={() => open(index)}
              aria-label={`${labels.open}: ${photo.alt}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden bg-chip outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent"
            >
              <Image
                src={photo.image}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 16rem, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        aria-label={current?.alt}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/90 backdrop:backdrop-blur-sm"
      >
        {current ? (
          <figure className="flex flex-col items-center gap-3 px-4">
            <Image
              src={current.image}
              alt={current.alt}
              placeholder="blur"
              sizes="92vw"
              className="h-auto max-h-[80vh] w-auto max-w-[92vw] object-contain"
            />
            <figcaption className="max-w-2xl text-center text-sm text-white/85">
              <span className="block text-xs tracking-[0.16em] text-white/60 uppercase">
                {labels.count
                  .replace("{current}", String((active ?? 0) + 1))
                  .replace("{total}", String(total))}
              </span>
              <span className="mt-1 block">{current.alt}</span>
            </figcaption>
          </figure>
        ) : null}
        <div className="fixed top-4 right-4 flex gap-2">
          {total > 1 ? (
            <>
              <LightboxButton label={labels.previous} onClick={() => step(-1)}>
                <ChevronLeft className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </LightboxButton>
              <LightboxButton label={labels.next} onClick={() => step(1)}>
                <ChevronRight className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </LightboxButton>
            </>
          ) : null}
          <LightboxButton label={labels.close} onClick={close}>
            <X className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </LightboxButton>
        </div>
      </dialog>
    </>
  );
}

function LightboxButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
    >
      {children}
    </button>
  );
}
