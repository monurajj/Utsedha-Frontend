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
              is based in India and exists to paint high-rise facades better than
              scaffolding and rope access allow — safer, faster, and without weeks
              of site disruption.
            </p>
            <p>
              We are not a drone reseller. We run the painting job end-to-end so
              building owners, contractors, and facade teams get a finished
              elevation — not a piece of equipment to operate.
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.12em] text-telemetry-cyan">
              Built for teams who need the facade done, not a hardware brief.
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
