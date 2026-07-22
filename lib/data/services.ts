export type ServiceStatus = "ACTIVE" | "IN R&D" | "TBD";

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
    status: "IN R&D",
    headline:
      "Facades painted in hours, not weeks — no scaffolding, no fall risk.",
    description:
      "We paint high-rise building exteriors end-to-end. You hire the painting outcome — not equipment. Scaffolding, rope access, and long site shutdowns come off the critical path.",
    outcomes: [
      { label: "Approach", value: "No scaffolding" },
      { label: "Coverage", value: "Continuous" },
      { label: "Focus", value: "High-rise facades" },
    ],
    methodNotes: [
      "Crew and equipment arrive as a managed painting package",
      "Continuous aerial coverage — no mid-job power stoppages",
      "Safer elevations without rope-access teams on the face",
    ],
    benefits: [
      {
        title: "No scaffolding, no fall risk",
        detail:
          "No rope-access or scaffold crews on the elevation — safer sites, fewer permits.",
      },
      {
        title: "Paint time cut by [X]%",
        detail:
          "Vs. traditional scaffold/rope-access painting — validate before publishing.",
      },
      {
        title: "Less site disruption",
        detail:
          "Keep the building running while the facade gets done — without weeks of scaffold build-out.",
      },
      {
        title: "Built for elevations scaffolding can't do safely",
        detail:
          "High-rise and hard-to-reach facades without shutting the site down for weeks.",
      },
    ],
  },
];
