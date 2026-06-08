"use client";

import { useState } from "react";
import {
  Phone,
  ArrowRight,
  Star,
  Sparkles,
  Gift,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phone.replace(/[^0-9]/g, "");
    if (cleaned.length < 10) {
      setError("Masukkan nomor HP yang valid (min. 10 angka)");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
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

          {!submitted ? (
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                  <Gift className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    Dapatkan Promo Spesial!
                  </h3>
                  <p className="text-sm text-white/60">
                    Diskon 20% + Modul Gratis + Konsultasi
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-5">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setError("");
                      }}
                      placeholder="Masukkan No. HP Anda"
                      className="w-full rounded-xl border border-white/20 bg-white/10 py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-gold-600 hover:shadow-xl active:scale-[0.97]"
                  >
                    <Sparkles className="h-4 w-4" />
                    Klaim Promo
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-left text-xs text-red-300">
                    {error}
                  </p>
                )}
              </form>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-white/50">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                  Privasi terjamin
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                  Gratis
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                  500+ orang tua bergabung
                </span>
              </div>
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-xl animate-fadeIn rounded-2xl border border-green-500/30 bg-green-500/10 p-8 backdrop-blur-md">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">
                  <CheckCircle className="h-7 w-7 text-green-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white">
                    Promo Dikirim ke WhatsApp!
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    Tim kami akan menghubungi{" "}
                    <span className="font-semibold text-white">{phone}</span>{" "}
                    dalam 1x24 jam dengan promo spesial untuk Anda.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setPhone("");
                  }}
                  className="mt-2 text-sm text-white/50 underline underline-offset-2 transition-colors hover:text-white/80"
                >
                  Kirim nomor lain
                </button>
              </div>
            </div>
          )}

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
