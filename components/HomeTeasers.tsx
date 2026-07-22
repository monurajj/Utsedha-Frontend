import Link from "next/link";
import { ArrowRight } from "lucide-react";

const teasers = [
  {
    href: "/service",
    eyebrow: "Service",
    title: "High-rise facade painting",
    body: "No scaffolding. No rope crews on the elevation. A managed painting engagement for your building.",
  },
  {
    href: "/how-it-works",
    eyebrow: "Process",
    title: "From quote to painted facade",
    body: "Site assessment, crew on site, continuous coverage, and a clean handover.",
  },
  {
    href: "/roadmap",
    eyebrow: "Roadmap",
    title: "Where we're headed",
    body: "Expanding the heights and building types we can take on as a painting service.",
  },
  {
    href: "/about",
    eyebrow: "About",
    title: "Painting high-rises the safer way",
    body: "Based in India. We paint buildings — we don't sell drones.",
  },
];

export function HomeTeasers() {
  return (
    <section className="border-t border-white/10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-red">
          Explore
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-white md:text-4xl">
          What UUPL offers.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {teasers.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-sm border border-white/10 bg-panel-slate p-6 transition duration-300 hover:-translate-y-0.5 hover:border-signal-red/40 md:p-8"
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-steel">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-fog-white md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted-steel md:text-base">
                {item.body}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-telemetry-cyan">
                Learn more
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
