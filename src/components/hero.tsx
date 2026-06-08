import { Phone, ArrowRight, GraduationCap, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
            Lembaga Pendidikan & Pelatihan Terpercaya
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Les Privat Terbaik untuk{" "}
            <span className="text-gold-300">SD, SMP, SMA,</span> UTBK & Bahasa
            Asing
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            Bimbingan intensif oleh tutor profesional, jadwal fleksibel, dan
            kurikulum terarah untuk membantu putra-putri Anda mencapai prestasi
            terbaik.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/6281324868790"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/30 transition-all hover:bg-gold-600 hover:shadow-xl hover:shadow-accent/40 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Konsultasi Gratis
            </a>
            <a
              href="#programs"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10 sm:w-auto"
            >
              Lihat Program
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Tahun Pengalaman", value: "10+" },
              { label: "Siswa Dibimbing", value: "500+" },
              { label: "Tutor Profesional", value: "50+" },
              { label: "Kepuasan Siswa", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
