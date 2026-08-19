const stats = [
  { value: "No scaffold", label: "Zero rope crews on elevation" },
  { value: "Continuous", label: "Uninterrupted facade coverage" },
  { value: "High-rise", label: "Built for tall facades" },
  { value: "India", label: "Based in Himachal Pradesh" },
];

export function TrustStrip() {
  return (
    <section className="site-section-alt border-y border-slate-200/80">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-slate-200/80 md:grid-cols-4 md:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="px-5 py-8 text-center md:px-6 md:py-10">
            <p className="font-display text-xl font-bold tracking-tight text-signal-red md:text-2xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-muted-steel">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
