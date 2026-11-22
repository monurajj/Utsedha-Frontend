import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="site-pattern min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
