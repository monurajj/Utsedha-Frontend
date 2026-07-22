import type { Metadata } from "next";
import { PageHeader, CtaBand } from "@/components/PageHeader";
import { AboutSection } from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Utsedha Unmanned Private Limited — high-rise facade painting based in India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Painting high-rises the safer way."
        description="Based in India. We paint buildings — we don't sell drones."
      />
      <AboutSection showIntro={false} />
      <CtaBand
        title="Work with UUPL"
        body="Building owners, contractors, and facade teams — request a quote."
      />
    </>
  );
}
