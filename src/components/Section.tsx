export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-8 pb-6 sm:pt-12">
      {kicker ? (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-2 max-w-3xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
        {title}
      </h1>
      {lede ? <p className="mt-4 max-w-2xl text-base text-muted">{lede}</p> : null}
    </header>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl space-y-3 text-[15px] leading-7 text-ink">{children}</div>;
}
