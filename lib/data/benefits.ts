export type Benefit = {
  id: string;
  title: string;
  detail: string;
  proof: string;
};

/**
 * Buyer-facing reasons to choose UUPL — benefit first, technical receipt second.
 * We are at prototype/pilot stage: describe what the system is designed to do,
 * don't quote numbers until they're measured on real buildings.
 */
export const whyChooseUs: Benefit[] = [
  {
    id: "time",
    title: "Faster turnaround",
    detail:
      "No scaffold build-out, no rope-access staging, no multi-day teardown — the slowest parts of facade painting come off the schedule.",
    proof: "Skip scaffold setup & teardown",
  },
  {
    id: "cost",
    title: "Lower project cost",
    detail:
      "Designed to cut the spend tied to scaffolding rental, permits, and long crew days at height — without cutting finish quality.",
    proof: "Less logistics overhead",
  },
  {
    id: "precision",
    title: "Even, consistent finish",
    detail:
      "Controlled spray paths reach hard-to-access panels evenly for a consistent finish across the elevation.",
    proof: "Repeatable spray pathing",
  },
  {
    id: "safety",
    title: "Safer sites",
    detail:
      "No painters hanging on ropes or working on scaffolds at height. Fall risk and site congestion drop with them.",
    proof: "No workers at height on the face",
  },
  {
    id: "disruption",
    title: "Less downtime",
    detail:
      "Tethered ground power means the drone isn't limited by battery swaps, and residents or tenants keep using the building.",
    proof: "Tethered, continuous power",
  },
  {
    id: "access",
    title: "Hard elevations, handled",
    detail:
      "Built for the jobs scaffolding struggles with — tall faces, tight plots, and access that rope teams find risky.",
    proof: "Designed for high-rise work",
  },
];
