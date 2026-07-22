"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { siteImages } from "@/lib/data/images";

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
        .timeline({ defaults: { ease: "power2.out" } })
        .from(".hero-copy > *", {
          opacity: 0,
          y: 28,
          duration: 0.7,
          stagger: 0.12,
        })
        .from(
          ".hero-visual",
          { opacity: 0, y: 24, duration: 0.8 },
          "-=0.45",
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-70" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid-fine opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void-navy via-void-navy/40 to-void-navy" />

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
        <div className="hero-copy">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-red">
            Utsedha Unmanned · High-Rise Facade Painting
          </p>
          <h1 className="mt-5 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-fog-white md:text-[3.75rem] lg:text-[4.5rem]">
            Facades painted in hours, not weeks.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-steel md:text-lg">
            UUPL paints high-rise buildings without scaffolding or rope crews on
            the elevation. Safer sites. Faster turnaround. Less disruption. You
            buy the painting service — we handle the rest.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/service"
              className="rounded-sm bg-signal-red px-6 py-3 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-fog-white transition-opacity hover:opacity-90"
            >
              See the service
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-fog-white/25 px-6 py-3 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-fog-white transition-colors hover:border-telemetry-cyan hover:text-telemetry-cyan"
            >
              Request a quote
            </Link>
          </div>
          <p className="mt-8 max-w-md font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-steel">
            Cut facade painting costs{" "}
            <span className="text-telemetry-cyan">without cutting corners.</span>
          </p>
        </div>

        <div className="hero-visual relative">
          <div className="absolute -inset-6 rounded-full bg-signal-red/5 blur-3xl" />
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-panel-slate/40">
            <Image
              src={siteImages.heroPainting.src}
              alt={siteImages.heroPainting.alt}
              width={siteImages.heroPainting.width}
              height={siteImages.heroPainting.height}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-steel">
            <span className="rounded-sm border border-white/10 bg-panel-slate/60 px-2 py-1">
              No scaffolding
            </span>
            <span className="rounded-sm border border-telemetry-cyan/30 bg-panel-slate/60 px-2 py-1 text-telemetry-cyan">
              Continuous coverage
            </span>
            <span className="rounded-sm border border-signal-red/30 bg-panel-slate/60 px-2 py-1 text-signal-red">
              High-rise ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
