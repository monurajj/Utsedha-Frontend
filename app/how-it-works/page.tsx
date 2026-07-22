import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/components/PageHeader";
import { HowItWorksSection } from "@/components/HowItWorksSection";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From site assessment to painted facade — how UUPL delivers high-rise painting without scaffolding.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From quote to painted facade."
        description="A straightforward painting engagement — scoped to your building, delivered without scaffolding or rope crews on the elevation."
      />
      <HowItWorksSection showIntro={false} />
      <CtaBand
        title="Start with a site assessment"
        body="Tell us about your building and we'll outline scope and timing."
      />
    </>
  );
}
