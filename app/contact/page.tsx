import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote for high-rise facade painting from Utsedha Unmanned.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Reduce your paint time and cost with Utsedha."
        description="Tell us about your building, elevation, timeline, and budget. We'll come back with how our painting crew fits the job."
      />
      <ContactSection showIntro={false} />
    </>
  );
}
