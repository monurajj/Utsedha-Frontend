"use client";

import type { ServiceStatus } from "@/lib/data/services";

const styles: Record<
  ServiceStatus,
  { label: string; className: string; dot: string; filled: boolean }
> = {
  ACTIVE: {
    label: "STATUS: ACTIVE",
    className: "border-telemetry-cyan/40 text-telemetry-cyan bg-telemetry-cyan/10",
    dot: "bg-telemetry-cyan status-pulse",
    filled: true,
  },
  "IN R&D": {
    label: "STATUS: IN R&D",
    className: "border-warning-amber/40 text-warning-amber bg-warning-amber/10",
    dot: "bg-warning-amber",
    filled: true,
  },
  TBD: {
    label: "STATUS: TBD",
    className: "border-muted-steel/40 text-muted-steel bg-muted-steel/5",
    dot: "border border-muted-steel",
    filled: false,
  },
};

type StatusChipProps = {
  status: ServiceStatus;
  className?: string;
};

export function StatusChip({ status, className = "" }: StatusChipProps) {
  const s = styles[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] ${s.className} ${className}`}
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${s.dot} ${s.filled ? "" : "bg-transparent"}`}
        aria-hidden
      />
      {s.label}
    </span>
  );
}
