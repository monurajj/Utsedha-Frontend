import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/data/specs";
import { footerLinks } from "@/lib/navigation";
import { DroneSchematic } from "@/components/DroneSchematic";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-panel-slate">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-[0.9fr_0.85fr_0.95fr_1.4fr] lg:gap-6 lg:items-start">
        {/* Column 1 — Contact */}
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-steel">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="text-fog-white/85 transition-colors hover:text-telemetry-cyan"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.engineeringEmail}`}
                className="text-muted-steel transition-colors hover:text-telemetry-cyan"
              >
                {contact.engineeringEmail}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-fog-white/85 transition-colors hover:text-telemetry-cyan"
              >
                {contact.phone}
              </a>
            </li>
            <li className="text-muted-steel">{contact.location}</li>
            <li className="pt-1 text-xs leading-relaxed text-muted-steel/70">
              {contact.registeredAddress}
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-sm bg-signal-red px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fog-white transition-opacity hover:opacity-90"
          >
            Request a quote
          </Link>
        </div>

        {/* Column 2 — Navigate */}
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-steel">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-fog-white/85 transition-colors hover:text-telemetry-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Brand */}
        <div>
          <Link href="/" className="group inline-block">
            <Image
              src="/logo.png"
              alt="UUPL — Utsedha Unmanned Private Limited"
              width={220}
              height={88}
              className="h-20 w-auto brightness-0 invert transition-opacity group-hover:opacity-80"
            />
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted-steel">
            High-rise facade painting without scaffolding or rope crews on the
            elevation. We paint buildings — we don&apos;t sell drones.
          </p>
          <p className="mt-4 font-mono text-[0.65rem] text-muted-steel/80">
            {contact.registration}
          </p>
        </div>

        {/* Column 4 — Drone schematic */}
        <div className="min-w-0 overflow-visible">
          <DroneSchematic className="h-auto w-full min-h-[200px] text-fog-white/70 lg:min-h-[240px]" />
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 md:px-8">
        <p className="mx-auto max-w-7xl text-center font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-steel">
          © {new Date().getFullYear()} {contact.company}. Facade painting
          services.
        </p>
      </div>
    </footer>
  );
}
