import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { HomeTeasers } from "@/components/HomeTeasers";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ImageGallery } from "@/components/ImageGallery";
import { CtaBand } from "@/components/PageHeader";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BenefitsSection />
      <HomeTeasers />
      <ImageGallery />
      <CtaBand
        title="Ready to paint your facade?"
        body="Tell us about your building and timeline — we'll come back with a clear next step."
      />
    </>
  );
}
