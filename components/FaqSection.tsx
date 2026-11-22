import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { faqs } from "@/lib/data/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FaqSection() {
  return (
    <section className="site-section-alt px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label="FAQ"
          title="Questions we get asked."
          align="center"
          className="mb-12"
        />
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="card-modern group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-fog-white md:text-lg">
                {f.q}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-signal-red transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-steel md:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
