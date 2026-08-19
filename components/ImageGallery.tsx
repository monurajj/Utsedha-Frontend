import Image from "next/image";
import { siteImages } from "@/lib/data/images";
import { SectionHeader } from "@/components/SectionHeader";

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
      className={`group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 px-5 py-4 text-sm font-medium text-white">
        {caption}
      </figcaption>
    </figure>
  );
}

export function ImageGallery() {
  return (
    <section className="site-section-alt px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="In the field"
          title="Real jobs. Real elevations."
          description="From ground logistics to continuous facade coverage — how UUPL shows up on site."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-3 md:grid-cols-12 md:grid-rows-[minmax(120px,14vw)_minmax(120px,14vw)]">
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

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
