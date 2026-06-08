import { MessageCircle } from "lucide-react";

export default function WaFloating() {
  return (
    <a
      href="https://wa.me/6281324868790"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg shadow-green-500/40 transition-all hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/50 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6 animate-waPulse" />
      <span className="hidden text-sm font-semibold sm:inline">
        Konsultasi Gratis
      </span>
    </a>
  );
}
