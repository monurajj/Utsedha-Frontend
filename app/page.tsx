import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { HomeTeasers } from "@/components/HomeTeasers";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ImageGallery } from "@/components/ImageGallery";
import { CtaBand } from "@/components/PageHeader";
import { AudienceSection } from "@/components/AudienceSection";
import { FaqSection } from "@/components/FaqSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BenefitsSection />
      <AudienceSection />
      <ImageGallery />
      <HomeTeasers />
      <FaqSection />
      <CtaBand
        title="Have a building that needs painting?"
        body="We're selecting a small number of pilot buildings. Tell us about yours — pilot partners get priority scheduling and pilot pricing."
        label="Apply for a pilot"
      />
    </>
  );
}
