"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, MessageCircle } from "lucide-react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { siteImages } from "@/lib/data/images";
import { whatsappLink } from "@/lib/data/specs";

const highlights = [
  "No scaffolding or rope crews on the elevation",
  "Tethered drone — continuous power and paint",
  "Managed painting service, not equipment sales",
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
          <div className="flex flex-wrap items-center gap-2">
            <span className="section-label">Drone facade painting</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-fog-white">
              <GraduationCap size={14} className="text-signal-red" aria-hidden />
              Incubated at IIT Ropar
            </span>
          </div>
          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-fog-white md:text-[3.5rem] lg:text-[4rem]">
            High-rise painting,{" "}
            <span className="text-signal-red">without scaffolding</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-steel">
            Utsedha is building a tethered painting drone that paints building
            exteriors with no scaffolding and no workers hanging at height.
            We&apos;re now selecting pilot buildings across India.
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
              Apply for a pilot
              <ArrowRight size={16} aria-hidden />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2"
            >
              <MessageCircle size={16} aria-hidden />
              WhatsApp us
            </a>
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
