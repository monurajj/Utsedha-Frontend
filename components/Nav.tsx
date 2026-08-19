"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const solid = scrolled || open || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link href="/" className="group flex items-center">
          <Image
            src="/logo.png"
            alt="UUPL — Utsedha Unmanned Private Limited"
            width={140}
            height={56}
            priority
            className="h-9 w-auto transition-opacity group-hover:opacity-80 md:h-10"
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${active ? "nav-link--active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-2">
            <Link href="/contact" className="btn-primary !px-5 !py-2.5 !text-sm">
              Request a quote
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="nav-menu-btn inline-flex md:hidden"
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
          className="border-t border-slate-200 bg-white px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link-mobile ${active ? "nav-link-mobile--active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3">
              <Link href="/contact" className="btn-primary w-full">
                Request a quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
