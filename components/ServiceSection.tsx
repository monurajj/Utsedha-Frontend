import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/data/services";

type ServiceSectionProps = {
  showIntro?: boolean;
};

export function ServiceSection({ showIntro = true }: ServiceSectionProps) {
  return (
    <section className="site-section-alt px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        {showIntro && (
          <>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-red">
              Service
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-white md:text-4xl">
              We paint the building. Not sell the aircraft.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-steel">
              UUPL is a high-rise facade painting service — scoped to your building,
              delivered without scaffolding or rope crews on the elevation.
            </p>
          </>
        )}

        <div className={showIntro ? "mt-12 grid gap-6 lg:gap-8" : "grid gap-6 lg:gap-8"}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
