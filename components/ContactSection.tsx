"use client";

import { FormEvent, useEffect, useState } from "react";
import { MessageCircle, ShieldOff, Clock3, HardHat } from "lucide-react";
import { contact, whatsappLink } from "@/lib/data/specs";
import { roles } from "@/lib/data/audiences";

type Status = "idle" | "sending" | "success" | "error";

const benefits = [
  {
    icon: ShieldOff,
    label: "No scaffolding, no fall risk",
  },
  {
    icon: HardHat,
    label: "Less site disruption",
  },
  {
    icon: Clock3,
    label: "Runs as long as the job needs",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  projectType: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  role: roles[0],
  company: "",
  projectType: "Commercial high-rise",
  message: "",
};

type ContactSectionProps = {
  showIntro?: boolean;
};

export function ContactSection({ showIntro = true }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Pre-select the role when arriving from a "Who it's for" card (/contact?role=…).
  useEffect(() => {
    const role = new URLSearchParams(window.location.search).get("role");
    if (role && (roles as readonly string[]).includes(role)) {
      setForm((f) => ({ ...f, role }));
    }
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section className="site-section-alt px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="card-modern overflow-hidden p-8 md:p-12">
          {showIntro && (
            <>
              <span className="section-label">Contact</span>
              <h2 className="section-title mt-5 max-w-3xl">
                Reduce your paint time and cost with Utsedha.
              </h2>
              <p className="mt-5 max-w-2xl text-base text-muted-steel md:text-lg">
                Tell us about your building, elevation, timeline, and budget.
                We&apos;ll come back with how our painting crew fits the job —
                not a drone sales pitch.
              </p>
            </>
          )}

          <ul className={`${showIntro ? "mt-8" : ""} flex flex-wrap gap-3`}>
            {benefits.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-fog-white"
              >
                <Icon size={14} className="text-telemetry-cyan" aria-hidden />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-steel">
                Direct line
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="block text-lg text-fog-white transition-colors hover:text-signal-red"
              >
                {contact.email}
              </a>
              <a
                href={`mailto:${contact.engineeringEmail}`}
                className="block text-sm text-muted-steel transition-colors hover:text-signal-red"
              >
                {contact.engineeringEmail}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="block text-lg text-fog-white transition-colors hover:text-signal-red"
              >
                {contact.phone}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="!mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle size={16} aria-hidden />
                Chat on WhatsApp
              </a>
            </div>

            {status === "success" ? (
              <div
                className="flex flex-col justify-center rounded-sm border border-signal-red/30 bg-white p-8"
                role="status"
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-signal-red">
                  Request sent
                </p>
                <p className="mt-3 font-display text-2xl font-semibold text-fog-white">
                  We&apos;ll be in touch shortly.
                </p>
                <p className="mt-3 text-sm text-muted-steel">
                  Your message has been delivered to{" "}
                  <a
                    className="text-signal-red underline-offset-2 hover:underline"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                  . Expect a response within one business day.
                </p>
                <button
                  type="button"
                  className="mt-6 self-start font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-steel hover:text-fog-white"
                  onClick={() => {
                    setStatus("idle");
                    setForm(initial);
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 md:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-steel">
                      Name
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-3 py-2.5 text-fog-white outline-none transition-colors focus:border-signal-red"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-steel">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-3 py-2.5 text-fog-white outline-none transition-colors focus:border-signal-red"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-steel">
                      Phone / WhatsApp
                    </span>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+91"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-3 py-2.5 text-fog-white outline-none transition-colors focus:border-signal-red placeholder:text-muted-steel/50"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-steel">
                      I am a
                    </span>
                    <select
                      value={form.role}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, role: e.target.value }))
                      }
                      className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-3 py-2.5 text-fog-white outline-none transition-colors focus:border-signal-red"
                    >
                      {roles.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-steel">
                      Company / society
                    </span>
                    <input
                      value={form.company}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, company: e.target.value }))
                      }
                      className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-3 py-2.5 text-fog-white outline-none transition-colors focus:border-signal-red"
                    />
                  </label>
                </div>

                <label className="block text-sm">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-steel">
                    Building / project type
                  </span>
                  <select
                    value={form.projectType}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, projectType: e.target.value }))
                    }
                    className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-3 py-2.5 text-fog-white outline-none transition-colors focus:border-signal-red"
                  >
                    <option>Commercial high-rise</option>
                    <option>Residential tower / society</option>
                    <option>Hotel / hospital / institution</option>
                    <option>Government / public building</option>
                    <option>Industrial / campus</option>
                    <option>Not a building project (investor / partner)</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="block text-sm">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-steel">
                    Message
                  </span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Building height, facade area, finish, timeline…"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="mt-2 w-full resize-y rounded-sm border border-slate-300 bg-white px-3 py-2.5 text-fog-white outline-none transition-colors focus:border-signal-red placeholder:text-muted-steel/50"
                  />
                </label>

                {status === "error" && (
                  <p className="rounded-sm border border-signal-red/40 bg-signal-red/10 px-3 py-2 font-mono text-[0.7rem] text-signal-red">
                    {errorMsg || "Something went wrong. Please try again."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
