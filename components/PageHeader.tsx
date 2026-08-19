import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="site-section hero-mesh relative border-b border-slate-200/80 px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36">
      <div className="relative z-[1] mx-auto max-w-6xl">
        <span className="section-label">{eyebrow}</span>
        <h1 className="section-title mt-5 max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-steel">
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
    <section className="site-section px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-signal-red via-[#0052cc] to-telemetry-cyan px-8 py-12 shadow-[0_24px_64px_rgb(0_102_255_25%)] md:flex md:items-center md:justify-between md:gap-10 md:px-12 md:py-14">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/85 md:text-lg">
            {body}
          </p>
        </div>
        <Link
          href={href}
          className="btn-cta-light mt-8 shrink-0 gap-2 md:mt-0"
        >
          {label}
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
