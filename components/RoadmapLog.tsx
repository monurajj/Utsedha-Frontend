import { StatusChip } from "@/components/StatusChip";
import { roadmap } from "@/lib/data/roadmap";

type RoadmapLogProps = {
  showIntro?: boolean;
};

export function RoadmapLog({ showIntro = true }: RoadmapLogProps) {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        {showIntro && (
          <>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-red">
              Roadmap
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-white md:text-4xl">
              Capability roadmap.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-steel">
              How we expand the buildings and elevations we can take on as a
              painting service.
            </p>
          </>
        )}

        <ol
          className={`relative ${showIntro ? "mt-12" : ""} space-y-0 border-l border-white/10 pl-6 md:pl-8`}
        >
          {roadmap.map((item, index) => (
            <li key={item.id} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[1.65rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-signal-red bg-void-navy md:-left-[2.15rem]"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-signal-red" />
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-steel">
                  {String(index + 1).padStart(2, "0")} · {item.stamp}
                </span>
                <StatusChip status={item.status} />
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-fog-white md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-steel md:text-base">
                {item.summary}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
