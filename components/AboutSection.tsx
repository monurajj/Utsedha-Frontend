import { MediaFrame } from "@/components/MediaFrame";
import { siteImages } from "@/lib/data/images";

type AboutSectionProps = {
  showIntro?: boolean;
};

export function AboutSection({ showIntro = true }: AboutSectionProps) {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:items-start">
        <div>
          {showIntro && (
            <>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-red">
                About
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-white md:text-4xl">
                Painting high-rises the safer way.
              </h2>
            </>
          )}
          <div
            className={`space-y-5 text-base leading-relaxed text-muted-steel md:text-lg ${
              showIntro ? "mt-8" : ""
            }`}
          >
            <p>
              <span className="text-fog-white">
                Utsedha Unmanned Private Limited
              </span>{" "}
              is a deep-tech UAV startup developing a heavy-lift industrial drone
              for aerial painting and infrastructure maintenance.
            </p>
            <p>
              Our initial focus is a specialised UAV capable of carrying an
              industrial painting payload and operating close to large structures
              — high-rise buildings, building façades, industrial plants, wind
              turbines, and other difficult-to-access infrastructure.
            </p>
            <p>
              The goal is to reduce dependence on conventional high-risk methods:
              scaffolding, rope-access workers, cranes, and other manual
              high-altitude operations.
            </p>
            <p>
              Long-term, Utsedha is building beyond a painting drone — toward a
              multi-purpose aerial infrastructure-maintenance platform.
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.12em] text-telemetry-cyan">
              Deep-tech UAV. Industrial-grade payload. Built for the hard jobs.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <MediaFrame
            {...siteImages.completeSystem}
            caption="Complete tethered painting system"
            imageClassName="aspect-[4/3] object-cover"
          />
          <MediaFrame
            {...siteImages.droneOnGround}
            caption="Aircraft staged on site"
            imageClassName="aspect-[16/9] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
