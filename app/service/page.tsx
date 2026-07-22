import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/components/PageHeader";
import { ServiceSection } from "@/components/ServiceSection";
import { BenefitsSection } from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Service",
  description:
    "High-rise facade painting without scaffolding or rope crews on the elevation.",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="We paint the building. Not sell the aircraft."
        description="UUPL is a high-rise facade painting service — scoped to your building, delivered without scaffolding or rope crews on the elevation."
      />
      <ServiceSection showIntro={false} />
      <BenefitsSection />
      <CtaBand
        title="Get a quote for your building"
        body="Share elevation, finish, and timeline — we'll follow up with next steps."
      />
    </>
  );
}
