import Image from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  caption?: string;
};

export function MediaFrame({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "",
  priority = false,
  caption,
}: MediaFrameProps) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden rounded-sm border border-slate-200 bg-panel-slate/40">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`h-auto w-full object-cover ${imageClassName}`}
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-steel">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
