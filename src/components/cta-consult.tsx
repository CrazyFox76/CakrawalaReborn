import { Phone, MessageCircle } from "lucide-react";

export default function CtaConsult() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Konsultasikan Kebutuhan Belajar Anak Anda
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/80">
          Tim kami siap membantu memilihkan program les privat yang paling sesuai
          dengan kebutuhan dan target belajar putra-putri Anda. Gratis!
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/30 transition-all hover:bg-gold-600 hover:shadow-xl sm:w-auto"
          >
            <MessageCircle className="h-6 w-6" />
            Hubungi WhatsApp
          </a>
          <a
            href="tel:+6281324868790"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-6 w-6" />
            +62 813-2486-8790
          </a>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Jadwalkan konsultasi sekarang dan dapatkan program terbaik untuk
          putra-putri Anda!
        </p>
      </div>
    </section>
  );
}
