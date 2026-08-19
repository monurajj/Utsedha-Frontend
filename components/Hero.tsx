"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { siteImages } from "@/lib/data/images";

const highlights = [
  "No scaffolding or rope crews",
  "Continuous facade coverage",
  "Managed end-to-end service",
];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(".hero-copy > *", { opacity: 1, y: 0 });
        gsap.set(".hero-visual", { opacity: 1, y: 0 });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-copy > *", {
          opacity: 0,
          y: 32,
          duration: 0.8,
          stagger: 0.1,
        })
        .from(
          ".hero-visual",
          { opacity: 0, y: 28, duration: 0.9 },
          "-=0.5",
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="site-section hero-mesh relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-20"
    >
      <div className="relative z-[1] mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-5 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-10">
        <div className="hero-copy">
          <span className="section-label">High-rise facade painting</span>
          <h1 className="mt-6 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-fog-white md:text-[3.5rem] lg:text-[4.25rem]">
            Facades painted in{" "}
            <span className="text-signal-red">hours</span>, not weeks.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-steel">
            UUPL paints high-rise buildings without scaffolding or rope crews on
            the elevation. Safer sites, faster turnaround, less disruption — you
            buy the painting service, we handle the rest.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-fog-white md:text-base">
                <CheckCircle2 size={18} className="shrink-0 text-signal-red" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary gap-2">
              Request a quote
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/service" className="btn-secondary">
              See the service
            </Link>
          </div>
        </div>

        <div className="hero-visual relative">
          <div className="absolute -inset-8 rounded-full bg-signal-red/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_24px_64px_rgb(0_102_255_12%)]">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={siteImages.heroPainting.src}
                alt={siteImages.heroPainting.alt}
                width={siteImages.heroPainting.width}
                height={siteImages.heroPainting.height}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
