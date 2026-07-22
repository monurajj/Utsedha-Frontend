import {
  Clock3,
  Wallet,
  Crosshair,
  ShieldOff,
  Activity,
  Building2,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data/benefits";

const icons = [Clock3, Wallet, Crosshair, ShieldOff, Activity, Building2];

type BenefitsSectionProps = {
  showIntro?: boolean;
};

export function BenefitsSection({ showIntro = true }: BenefitsSectionProps) {
  return (
    <section className="border-y border-white/10 bg-panel-slate/40 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        {showIntro && (
          <>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-red">
              Why choose UUPL
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-white md:text-4xl">
              Benefits that show up on the job.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-steel">
              Time, cost, precision, and safety — the reasons building owners and
              contractors pick a managed painting service over scaffolding.
            </p>
          </>
        )}

        <ul
          className={`${showIntro ? "mt-12" : ""} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {whyChooseUs.map((benefit, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li
                key={benefit.id}
                className="rounded-sm border border-white/10 bg-void-navy/50 p-6 transition duration-300 hover:border-signal-red/35"
              >
                <Icon className="text-signal-red" size={22} aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold text-fog-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-steel">
                  {benefit.detail}
                </p>
                <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-telemetry-cyan">
                  {benefit.proof}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
