import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/data/specs";
import { footerLinks } from "@/lib/navigation";
import { DroneSchematic } from "@/components/DroneSchematic";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[0.9fr_0.85fr_0.95fr_1.4fr] lg:gap-8 lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-steel">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-fog-white transition-colors hover:text-signal-red"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.engineeringEmail}`}
                className="text-muted-steel transition-colors hover:text-signal-red"
              >
                {contact.engineeringEmail}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="font-medium text-fog-white transition-colors hover:text-signal-red"
              >
                {contact.phone}
              </a>
            </li>
            <li className="text-muted-steel">{contact.location}</li>
            <li className="pt-1 text-xs leading-relaxed text-muted-steel/80">
              {contact.registeredAddress}
            </li>
          </ul>
          <Link href="/contact" className="btn-primary mt-7 !px-5 !py-2.5 !text-sm">
            Request a quote
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-steel">
            Navigate
          </p>
          <ul className="mt-5 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-fog-white/90 transition-colors hover:text-signal-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link href="/" className="group inline-block">
            <Image
              src="/logo.png"
              alt="UUPL — Utsedha Unmanned Private Limited"
              width={220}
              height={88}
              className="h-16 w-auto transition-opacity group-hover:opacity-80 md:h-20"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-steel">
            High-rise facade painting without scaffolding or rope crews on the
            elevation. We paint buildings — we don&apos;t sell drones.
          </p>
          <p className="mt-4 text-xs text-muted-steel/80">{contact.registration}</p>
        </div>

        <div className="min-w-0 overflow-visible">
          <DroneSchematic className="h-auto w-full min-h-[200px] text-slate-500 lg:min-h-[240px]" />
        </div>
      </div>

      <div className="border-t border-slate-200/80 px-5 py-6 md:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs text-muted-steel">
          © {new Date().getFullYear()} {contact.company}. Facade painting services.
        </p>
      </div>
    </footer>
  );
}
