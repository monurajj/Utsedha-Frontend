import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/components/PageHeader";
import { RoadmapLog } from "@/components/RoadmapLog";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "UUPL capability roadmap — expanding the buildings and elevations we can paint.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Roadmap"
        title="Capability roadmap."
        description="How we expand the buildings and elevations we can take on as a painting service."
      />
      <RoadmapLog showIntro={false} />
      <CtaBand
        title="Partner on a pilot building"
        body="Construction and facade teams — talk to us about upcoming elevations."
      />
    </>
  );
}
