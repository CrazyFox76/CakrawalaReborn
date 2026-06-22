import { Gift, ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export default function CakraPointsPromo() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-primary shadow-lg">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-accent">
                <Sparkles className="h-3 w-3" />
                Program Poin Eksklusif
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Kumpulkan CakraPoints,
                <br />
                Dapatkan{" "}
                <span className="text-accent">Diskon & Hadiah</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                Tukarkan poinmu dengan diskon kelas, modul premium, tryout gratis, dan banyak lagi.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {["Diskon 50%", "Modul Gratis", "Tryout Eksklusif"].map((perk) => (
                  <span key={perk} className="flex items-center gap-1.5 text-xs font-medium text-white/60">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
              <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Mulai dari</p>
                <p className="text-xl font-bold text-white">500 <span className="text-accent">Pts</span></p>
              </div>
              <Link
                href="#cakrapoints"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-gold-600 hover:shadow-md"
              >
                <Gift className="h-4 w-4" />
                Redeem Sekarang
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
