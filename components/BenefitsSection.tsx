import {
  Clock3,
  Wallet,
  Crosshair,
  ShieldOff,
  Activity,
  Building2,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data/benefits";
import { SectionHeader } from "@/components/SectionHeader";

const icons = [Clock3, Wallet, Crosshair, ShieldOff, Activity, Building2];

type BenefitsSectionProps = {
  showIntro?: boolean;
};

export function BenefitsSection({ showIntro = true }: BenefitsSectionProps) {
  return (
    <section className="site-section-alt px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        {showIntro && (
          <SectionHeader
            label="Why choose UUPL"
            title="Benefits that show up on the job."
            description="Time, cost, precision, and safety — the reasons building owners and contractors pick a managed painting service over scaffolding."
            align="center"
            className="mb-14"
          />
        )}

        <ul
          className={`${showIntro ? "" : ""} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {whyChooseUs.map((benefit, i) => {
            const Icon = icons[i % icons.length];
            const featured = i === 0;
            return (
              <li
                key={benefit.id}
                className={`card-modern p-7 ${featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-red/10">
                  <Icon className="text-signal-red" size={22} aria-hidden />
                </div>
                <p className="mt-5 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted-steel">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-fog-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-steel">
                  {benefit.detail}
                </p>
                <p className="mt-5 inline-block rounded-full bg-signal-red/8 px-3 py-1 text-xs font-medium text-signal-red">
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
