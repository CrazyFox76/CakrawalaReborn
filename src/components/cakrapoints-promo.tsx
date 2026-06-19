import { Star, ArrowRight, Sparkles, Gift, Clock } from "lucide-react";

export default function CakraPointsPromo() {
  return (
    <section id="cakrapoints-promo" className="relative px-4 py-8 sm:py-10 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        {/* ── Main Banner ── */}
        <div className="relative overflow-hidden rounded-3xl bg-[#2B3FDE] shadow-2xl shadow-blue-900/40">

          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Big circle kanan */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/5" />
            {/* Small circles kiri bawah */}
            <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-indigo-500/30" />
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Diagonal stripe */}
            <svg className="absolute right-0 top-0 h-full opacity-10" viewBox="0 0 300 200" preserveAspectRatio="none">
              <polygon points="150,0 300,0 300,200 200,200" fill="white" />
            </svg>
          </div>

          {/* ── Content ── */}
          <div className="relative flex flex-col gap-6 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

            {/* Left text */}
            <div className="flex-1">
              {/* Label badge */}
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white/90">
                  ✦ Promo Eksklusif Cakrawala
                </span>
                <span className="flex items-center gap-1 rounded-full bg-orange-400/20 px-2.5 py-1 text-[10px] font-bold text-orange-200">
                  <Clock className="h-3 w-3" />
                  Periode Terbatas
                </span>
              </div>

              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Kumpulkan CakraPoints kamu
                <br className="hidden sm:block" />
                sekarang dan dapatkan{" "}
                <span className="relative inline-block">
                  <span className="text-yellow-300">gratis belajar seru!</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full opacity-60"
                    viewBox="0 0 220 6"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,4 C60,0 160,0 220,4" stroke="#FDE047" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                Tukarkan CakraPoints-mu dengan berbagai promo menarik. Diskon hingga{" "}
                <span className="font-bold text-yellow-300">50%</span> untuk program pilihan.
                Periode terbatas!
              </p>

              {/* Mini perks row */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Diskon 50% Kelas",
                  "Modul Premium Gratis",
                  "Sesi Konsultasi",
                  "Tryout Eksklusif",
                ].map((perk) => (
                  <span key={perk} className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
                    <Star className="h-3 w-3 fill-yellow-300 text-yellow-300" />
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            {/* Right CTA block */}
            <div className="flex flex-col items-start gap-4 lg:items-center lg:shrink-0">
              {/* Points display */}
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-sm border border-white/20">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/20">
                  <Sparkles className="h-5 w-5 text-yellow-300" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Mulai dari
                  </p>
                  <p className="text-xl font-extrabold text-white">
                    500 <span className="text-yellow-300">Pts</span>
                  </p>
                </div>
              </div>

              {/* CTA button */}
              <a
                href="#cakrapoints"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-orange-400 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-500/40 transition-all duration-200 hover:bg-orange-300 hover:shadow-xl hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Gift className="h-4 w-4" />
                Redeem Sekarang
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-center text-[10px] text-white/40">
                Berlaku untuk semua siswa aktif Cakrawala
              </p>
            </div>

          </div>

          {/* ── Bottom micro-strip ── */}
          <div className="relative border-t border-white/10 bg-white/5 px-7 py-3 sm:px-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span>CakraPoints aktif sejak 2024 · 1.200+ siswa sudah menikmati</span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
                Syarat & ketentuan berlaku
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
