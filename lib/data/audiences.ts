export type Audience = {
  id: string;
  title: string;
  pain: string;
  offer: string;
  cta: string;
  role: string;
};

/** Who the site speaks to. `role` pre-fills the contact form. */
export const audiences: Audience[] = [
  {
    id: "builders",
    title: "Builders & developers",
    pain: "Scaffolding eats weeks and budget at the end of every tower project.",
    offer:
      "Pilot drone painting on an upcoming elevation and compare time and cost against your usual contractor.",
    cta: "Propose a pilot building",
    role: "Builder / developer",
  },
  {
    id: "societies",
    title: "Housing societies & RWAs",
    pain: "Repainting means months of scaffolding, blocked windows, and safety worries for residents.",
    offer:
      "A cleaner, faster repaint with no workers hanging outside your flats. Get on the list for a site assessment.",
    cta: "Request a site assessment",
    role: "Housing society / RWA",
  },
  {
    id: "commercial",
    title: "Commercial & government buildings",
    pain: "Offices, hotels, hospitals, and public buildings can't shut down for facade work.",
    offer:
      "Paint while the building stays open — less disruption, fewer people working at height.",
    cta: "Discuss your building",
    role: "Commercial / government building",
  },
  {
    id: "investors",
    title: "Investors & partners",
    pain: "Facade maintenance is a large, manual, high-risk market waiting for automation.",
    offer:
      "Incubated at IIT Ropar, we're building an aerial infrastructure-maintenance platform starting with painting.",
    cta: "Talk to the founders",
    role: "Investor / partner",
  },
];

export const roles = [...audiences.map((a) => a.role), "Other"] as const;
