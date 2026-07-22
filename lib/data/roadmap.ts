import type { ServiceStatus } from "./services";

export type RoadmapItem = {
  id: string;
  stamp: string;
  title: string;
  summary: string;
  status: ServiceStatus;
};

/** Sample service roadmap — replace with real UUPL milestones. */
export const roadmap: RoadmapItem[] = [
  {
    id: "r1",
    stamp: "2026 Q1–Q2",
    title: "Continuous-coverage painting platform",
    summary:
      "Finalize the in-house aerial painting system for full-shift facade coverage without mid-job power stoppages.",
    status: "IN R&D",
  },
  {
    id: "r2",
    stamp: "2026 Q3",
    title: "Site logistics package",
    summary:
      "Ground crew workflow, site setup, and building-access playbook for live commercial sites.",
    status: "IN R&D",
  },
  {
    id: "r3",
    stamp: "2026 Q4",
    title: "Facade finish & coverage playbooks",
    summary:
      "Paint delivery, coverage patterns, and quality checks for common commercial finishes.",
    status: "TBD",
  },
  {
    id: "r4",
    stamp: "2027",
    title: "Pilot building programs",
    summary:
      "First paid facade painting engagements with construction and facade-maintenance partners.",
    status: "TBD",
  },
  {
    id: "r5",
    stamp: "2027+",
    title: "Taller elevation envelope",
    summary:
      "Expand the heights and building types we can take on as a painting service.",
    status: "TBD",
  },
];
