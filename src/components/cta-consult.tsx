import { MessageCircle, Phone } from "lucide-react";

export default function CtaConsult() {
  return (
    <section className="bg-primary py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Konsultasi Gratis
        </h2>
        <p className="mt-3 text-sm text-white/70 sm:text-base">
          Tim kami siap membantu memilihkan program les privat yang paling sesuai dengan kebutuhan dan target belajarmu.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-gold-600 hover:shadow-md sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Hubungi WhatsApp
          </a>
          <a
            href="tel:+6281324868790"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            +62 813-2486-8790
          </a>
        </div>
      </div>
    </section>
  );
}
