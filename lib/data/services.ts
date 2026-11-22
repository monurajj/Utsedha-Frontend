export type ServiceStatus = "ACTIVE" | "PILOT" | "IN R&D" | "TBD";

export type Service = {
  id: string;
  name: string;
  status: ServiceStatus;
  headline: string;
  description: string;
  outcomes: { label: string; value: string }[];
  methodNotes?: string[];
  benefits?: { title: string; detail: string }[];
};

/** What UUPL sells: high-rise facade painting — not drones. */
export const services: Service[] = [
  {
    id: "facade-painting",
    name: "High-Rise Facade Painting",
    status: "PILOT",
    headline:
      "Exterior painting for tall buildings — without scaffolding or rope crews on the elevation.",
    description:
      "We paint high-rise building exteriors using our in-house tethered painting drone. You hire the painting outcome — not equipment. We are now selecting pilot buildings to prove time, cost, and finish quality on real sites.",
    outcomes: [
      { label: "Approach", value: "No scaffolding" },
      { label: "Power", value: "Tethered, continuous" },
      { label: "Stage", value: "Pilot projects" },
    ],
    methodNotes: [
      "Site assessment and painting plan for your building",
      "Crew and equipment arrive as a managed painting package",
      "Measured results — time, paint used, and finish — shared with you",
    ],
    benefits: [
      {
        title: "No scaffolding, no fall risk",
        detail:
          "No rope-access or scaffold crews working on the elevation — safer sites, fewer permits.",
      },
      {
        title: "Results measured, not promised",
        detail:
          "Every pilot is benchmarked against conventional scaffold/rope-access painting on time and cost.",
      },
      {
        title: "Less site disruption",
        detail:
          "No weeks of scaffold build-out and teardown around an occupied building.",
      },
      {
        title: "Built for hard-to-reach elevations",
        detail:
          "Tall faces and tight sites where scaffolding is slow, costly, or unsafe.",
      },
    ],
  },
];
