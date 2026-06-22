import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CtaFinal() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          Mulai Sekarang
        </div>

        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Siap Temukan{" "}
          <span className="text-accent">Potensi Terbaikmu?</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
          Ribuan siswa sudah menemukan arah dan meraih impian mereka. Sekarang giliran kamu. Gratis, tanpa komitmen.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/screening"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-gold-600 hover:shadow-md sm:w-auto"
          >
            Cek Potensi Gratis
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/program"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
          >
            Lihat Program
          </Link>
        </div>

        <p className="mt-4 text-xs text-white/40">
          Tidak perlu data kartu. Konsultasi gratis 1-on-1 dengan tim kami.
        </p>
      </div>
    </section>
  );
}
