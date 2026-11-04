export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-2xl" data-reveal>
          <span className="reveal-bar mb-6 block h-0.5 w-10 bg-accent" aria-hidden="true" />
          <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">{title}</h2>
          {intro ? <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p> : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
