import Image from "next/image";
import { siteImages } from "@/lib/data/images";

const featured = {
  ...siteImages.heroPainting,
  caption: "Facade coverage in flight",
};

const supporting = [
  {
    ...siteImages.facadeWork,
    caption: "Undercarriage & tether",
  },
  {
    ...siteImages.droneOnGround,
    caption: "Staged on the roof",
  },
  {
    ...siteImages.tetherAndPump,
    caption: "Ground power & paint supply",
  },
  {
    ...siteImages.completeSystem,
    caption: "Full job-site overview",
  },
] as const;

function GalleryFigure({
  src,
  alt,
  width,
  height,
  caption,
  sizes,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-sm border border-white/10 bg-panel-slate ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void-navy/80 via-void-navy/10 to-transparent opacity-90" />
      <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-fog-white/90">
        {caption}
      </figcaption>
    </figure>
  );
}

export function ImageGallery() {
  return (
    <section className="border-t border-white/10 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-red">
          In the field
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-white md:text-4xl">
          Real jobs. Real elevations.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-steel">
          From ground logistics to continuous facade coverage — how UUPL shows up
          on site.
        </p>

        {/* Editorial mosaic: featured lead + balanced supporting grid */}
        <div className="mt-10 grid gap-2.5 md:grid-cols-12 md:grid-rows-[minmax(120px,14vw)_minmax(120px,14vw)]">
          <GalleryFigure
            {...featured}
            priority
            className="aspect-[16/10] md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-0"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <GalleryFigure
            {...supporting[0]}
            className="aspect-[16/9] md:col-span-5 md:aspect-auto"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
          <GalleryFigure
            {...supporting[1]}
            className="aspect-[16/9] md:col-span-5 md:aspect-auto"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>

        <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
          <GalleryFigure
            {...supporting[2]}
            className="aspect-[2/1]"
            sizes="(max-width: 640px) 100vw, 35vw"
          />
          <GalleryFigure
            {...supporting[3]}
            className="aspect-[2/1]"
            sizes="(max-width: 640px) 100vw, 35vw"
          />
        </div>
      </div>
    </section>
  );
}
