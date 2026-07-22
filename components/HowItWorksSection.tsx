import { howItWorks } from "@/lib/data/howItWorks";

type HowItWorksSectionProps = {
  showIntro?: boolean;
};

export function HowItWorksSection({ showIntro = true }: HowItWorksSectionProps) {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        {showIntro && (
          <>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-red">
              How it works
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-white md:text-4xl">
              From quote to painted facade.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-steel">
              A straightforward painting engagement — scoped to your building,
              delivered without scaffolding or rope crews on the elevation.
            </p>
          </>
        )}

        <ol className={`${showIntro ? "mt-12" : ""} grid gap-6 md:grid-cols-2`}>
          {howItWorks.map((step) => (
            <li
              key={step.id}
              className="rounded-sm border border-white/10 bg-panel-slate p-6"
            >
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-signal-red">
                {step.step}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-fog-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-steel">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
