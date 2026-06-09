import { Phone, MessageCircle } from "lucide-react";

export default function CtaConsult() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Konsultasikan Kebutuhan Belajar Anak Anda
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-lg">
          Tim kami siap membantu memilihkan program les privat yang paling sesuai
          dengan kebutuhan dan target belajar putra-putri Anda. Gratis!
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all sm:px-8 sm:py-4 sm:text-base hover:bg-gold-600 hover:shadow-xl sm:w-auto"
          >
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
            Hubungi WhatsApp
          </a>
          <a
            href="tel:+6281324868790"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all sm:px-8 sm:py-4 sm:text-base hover:border-white/50 hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
            +62 813-2486-8790
          </a>
        </div>
        <p className="mt-3 text-xs text-white/60 sm:mt-4 sm:text-sm">
          Jadwalkan konsultasi sekarang dan dapatkan program terbaik untuk
          putra-putri Anda!
        </p>
      </div>
    </section>
  );
}
