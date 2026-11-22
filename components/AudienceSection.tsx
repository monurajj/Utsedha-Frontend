import Link from "next/link";
import { ArrowRight, Building, Home, Landmark, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { audiences } from "@/lib/data/audiences";

const icons = [Building, Home, Landmark, TrendingUp];

export function AudienceSection() {
  return (
    <section className="site-section px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Who it's for"
          title="Built for the people who own the facade."
          description="Whether you build towers, manage a society, run a public building, or back deep-tech — here's where we fit."
          className="mb-12"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {audiences.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article key={a.id} className="card-modern flex flex-col p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-red/10">
                    <Icon className="text-signal-red" size={22} aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-fog-white md:text-2xl">
                    {a.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm font-medium leading-relaxed text-fog-white md:text-base">
                  {a.pain}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-steel md:text-base">
                  {a.offer}
                </p>
                <Link
                  href={`/contact?role=${encodeURIComponent(a.role)}`}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal-red"
                >
                  {a.cta}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
