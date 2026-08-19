export const navLinks = [
  { href: "/service", label: "Service" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/about", label: "About" },
] as const;

export const footerLinks = [
  { href: "/", label: "Home" },
  ...navLinks,
  { href: "/contact", label: "Contact" },
] as const;
