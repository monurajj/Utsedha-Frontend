export type Benefit = {
  id: string;
  title: string;
  detail: string;
  proof: string;
};

/** Buyer-facing reasons to choose UUPL — benefit first, technical receipt second. */
export const whyChooseUs: Benefit[] = [
  {
    id: "time",
    title: "Time saving",
    detail:
      "Facades painted in hours, not weeks. No scaffold build-out, no rope-access staging, no multi-day teardown.",
    proof: "Faster turnaround vs. conventional methods",
  },
  {
    id: "cost",
    title: "Lower project cost",
    detail:
      "Cut the spend tied to scaffolding, permits, and long crew days on the elevation — without cutting finish quality.",
    proof: "Less logistics overhead on every job",
  },
  {
    id: "precision",
    title: "More precision",
    detail:
      "Controlled aerial coverage reaches hard-to-access panels evenly — consistent finish across the elevation.",
    proof: "Repeatable spray pathing on the facade",
  },
  {
    id: "safety",
    title: "Safer sites",
    detail:
      "No rope crews or scaffold teams working at height on the face. Fall risk and site congestion drop with them.",
    proof: "No scaffolding, no fall risk",
  },
  {
    id: "disruption",
    title: "Less downtime",
    detail:
      "Keep the building operating while work continues. Continuous coverage means fewer mid-job stoppages.",
    proof: "Runs as long as the job needs",
  },
  {
    id: "access",
    title: "Hard elevations, handled",
    detail:
      "Built for the jobs scaffolding struggles with — tall faces, tight sites, and access that rope teams find risky.",
    proof: "High-rise ready painting service",
  },
];
