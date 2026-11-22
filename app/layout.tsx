import type { Metadata } from "next";
import { Chakra_Petch, Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { SiteShell } from "@/components/SiteShell";
import { contact, siteUrl } from "@/lib/data/specs";
import { siteImages } from "@/lib/data/images";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-chakra-petch",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Utsedha (UUPL) — Drone Facade Painting for High-Rise Buildings in India",
    template: "%s · Utsedha UUPL",
  },
  description:
    "Utsedha Unmanned (UUPL), incubated at IIT Ropar, paints high-rise building exteriors with a tethered drone — no scaffolding, no rope crews. Now selecting pilot buildings across India.",
  keywords: [
    "drone painting India",
    "facade painting drone",
    "high-rise exterior painting",
    "building painting without scaffolding",
    "painting drone",
    "Utsedha",
    "UUPL",
    "IIT Ropar startup",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Utsedha Unmanned",
    title: "Drone facade painting — no scaffolding, no rope crews",
    description:
      "High-rise exterior painting with a tethered drone. Incubated at IIT Ropar. Now selecting pilot buildings.",
    images: [
      {
        url: siteImages.heroPainting.src,
        width: siteImages.heroPainting.width,
        height: siteImages.heroPainting.height,
        alt: siteImages.heroPainting.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone facade painting — no scaffolding, no rope crews",
    description:
      "High-rise exterior painting with a tethered drone. Now selecting pilot buildings in India.",
    images: [siteImages.heroPainting.src],
  },
  icons: {
    icon: [{ url: "/faviconlogo.png", type: "image/png" }],
    apple: [{ url: "/faviconlogo.png", type: "image/png" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: contact.company,
  alternateName: ["UUPL", "Utsedha"],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  email: contact.email,
  telephone: contact.phone,
  founder: { "@type": "Person", name: contact.founder },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nahan",
    addressRegion: "Himachal Pradesh",
    postalCode: "173026",
    addressCountry: "IN",
  },
  description:
    "Deep-tech startup incubated at IIT Ropar building a tethered drone for high-rise facade painting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScrollProvider>
          <SiteShell>{children}</SiteShell>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
