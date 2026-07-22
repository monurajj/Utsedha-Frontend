import { ShieldOff, Percent, HardHat, Building2 } from "lucide-react";
import { StatusChip } from "@/components/StatusChip";
import type { Service } from "@/lib/data/services";

const benefitIcons = [ShieldOff, Percent, HardHat, Building2];

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-sm border border-white/10 bg-panel-slate p-6 transition duration-300 hover:-translate-y-1 hover:border-signal-red/40 hover:shadow-[0_0_0_1px_rgba(214,41,62,0.25)] md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-fog-white md:text-3xl">
            {service.name}
          </h3>
          <p className="mt-3 max-w-xl text-base text-muted-steel">
            {service.headline}
          </p>
        </div>
        <StatusChip status={service.status} />
      </div>

      <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {service.outcomes.map((item) => (
          <div
            key={item.label}
            className="rounded-sm border border-white/10 bg-void-navy/60 px-4 py-3"
          >
            <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-steel">
              {item.label}
            </dt>
            <dd className="mt-1 font-mono text-lg tracking-wide text-telemetry-cyan">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-sm leading-relaxed text-fog-white/80 md:text-base">
        {service.description}
      </p>

      {service.methodNotes && (
        <div className="mt-5">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-steel">
            What&apos;s included
          </p>
          <ul className="mt-3 space-y-1.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-steel">
            {service.methodNotes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-signal-red">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.benefits && (
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
          {service.benefits.map((benefit, i) => {
            const Icon = benefitIcons[i % benefitIcons.length];
            return (
              <div key={benefit.title} className="flex gap-3">
                <Icon
                  className="mt-0.5 shrink-0 text-signal-red"
                  size={18}
                  aria-hidden
                />
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-fog-white">
                    {benefit.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-steel">{benefit.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}
