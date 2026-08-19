type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <span className="section-label">{label}</span>
      <h2 className="section-title mt-4">{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed text-muted-steel md:text-lg ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
