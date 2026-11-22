import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/data/specs";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Utsedha on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgb(37_211_102_35%)] transition-transform hover:-translate-y-0.5 md:bottom-7 md:right-7"
    >
      <MessageCircle size={26} aria-hidden />
    </a>
  );
}
