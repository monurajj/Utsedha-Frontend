# UUPL Website

Marketing site for **Utsedha Unmanned Private Limited** (incubated at IIT Ropar) — high-rise facade painting delivered with an in-house tethered painting drone.

**Positioning:** UUPL sells the painting service, not drones. Current stage: prototype / pilot buildings — keep copy honest and don't publish performance numbers until they're measured on real sites.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger, Lenis smooth scroll
- lucide-react

All content lives in `/lib/data` (services, benefits, audiences, FAQ, roadmap, contact details).

## Contact form

`/api/contact` sends two emails through Brevo (internal notification + confirmation to the visitor).

- Set `BREVO_API_KEY` in `.env.local` locally and in the hosting provider's env vars (redeploy after changes).
- The sender `info@utsedha.com` must be a verified sender in Brevo, with the domain authenticated.
- Brevo IP blocking must be disabled — serverless functions don't have fixed IPs.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build && npm start
```
