import type { Metadata } from "next";
import { Chakra_Petch, Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { SiteShell } from "@/components/SiteShell";
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
  title: {
    default: "UUPL — High-Rise Facade Painting",
    template: "%s · UUPL",
  },
  description:
    "High-rise facade painting services without scaffolding or rope crews. Request a quote for your building.",
  icons: {
    icon: [{ url: "/faviconlogo.png", type: "image/png" }],
    apple: [{ url: "/faviconlogo.png", type: "image/png" }],
  },
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
        <SmoothScrollProvider>
          <SiteShell>{children}</SiteShell>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
