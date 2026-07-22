"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/navigation";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open || !isHome
          ? "border-b border-white/10 bg-void-navy/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-wide text-fog-white transition-colors group-hover:text-signal-red">
            UUPL
          </span>
          <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-steel">
            Utsedha Unmanned
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors ${
                    active
                      ? "text-fog-white"
                      : "text-muted-steel hover:text-fog-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="rounded-sm bg-signal-red px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fog-white transition-opacity hover:opacity-90"
            >
              Request a quote
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-white/15 p-2 text-fog-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-void-navy px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-sm uppercase tracking-[0.16em] text-fog-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-block rounded-sm bg-signal-red px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fog-white"
              >
                Request a quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
