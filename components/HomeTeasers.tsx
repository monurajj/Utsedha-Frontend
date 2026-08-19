import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

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
    <section className="site-section px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Explore"
          title="What UUPL offers."
          description="Everything you need to understand our service, process, and direction — in one place."
          className="mb-12"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {teasers.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card-modern group flex flex-col p-7 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-signal-red">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-fog-white md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-steel md:text-base">
                {item.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal-red">
                Learn more
                <ArrowRight
                  size={16}
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
