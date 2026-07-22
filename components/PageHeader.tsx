import Link from "next/link";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-white/10 bg-panel-slate/40 px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-red">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-fog-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-muted-steel md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

type CtaBandProps = {
  title: string;
  body: string;
  href?: string;
  label?: string;
};

export function CtaBand({
  title,
  body,
  href = "/contact",
  label = "Request a quote",
}: CtaBandProps) {
  return (
    <section className="px-5 py-16 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-sm border border-signal-red/25 bg-panel-slate px-6 py-8 md:flex-row md:items-center md:px-10">
        <div>
          <h2 className="font-display text-2xl font-semibold text-fog-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-muted-steel">{body}</p>
        </div>
        <Link
          href={href}
          className="shrink-0 rounded-sm bg-signal-red px-6 py-3 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-fog-white transition-opacity hover:opacity-90"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
