"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, GraduationCap, ArrowLeft, Sparkles, BookOpen, Users, Trophy } from "lucide-react";

// ─── Google Icon SVG ───────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// ─── Feature item ──────────────────────────────────────────────────────────────
function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-200">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-300 shrink-0">
        {icon}
      </div>
      <p className="text-sm font-medium text-white/90">{text}</p>
    </div>
  );
}

// ─── Main Login Page ──────────────────────────────────────────────────────────
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleGoogle = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0d1b4b] via-[#1a3a8f] to-[#1565c0] flex items-center justify-center p-4">

      {/* ── Dekoratif geometrik (sama dengan hero) ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-indigo-400/10 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-blue-600/5 blur-3xl" />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Geometric lines */}
        <svg className="absolute top-0 right-0 opacity-10 w-96" viewBox="0 0 400 400" fill="none">
          <circle cx="350" cy="50" r="200" stroke="white" strokeWidth="0.5" />
          <circle cx="350" cy="50" r="150" stroke="white" strokeWidth="0.5" />
          <circle cx="350" cy="50" r="100" stroke="white" strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-0 left-0 opacity-10 w-80" viewBox="0 0 400 400" fill="none">
          <circle cx="50" cy="350" r="200" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="350" r="130" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ── Back button ── */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/70 hover:text-white transition-all duration-200 group"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-all">
          <ArrowLeft className="h-4 w-4" />
        </div>
        <span className="text-sm font-medium">Kembali ke Beranda</span>
      </Link>

      {/* ── Main card container ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto lg:grid lg:grid-cols-5 lg:gap-8 lg:items-center">

        {/* ── Left panel (info) ── */}
        <div className="hidden lg:flex lg:col-span-2 flex-col gap-6 pr-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400 shadow-xl shadow-orange-500/30">
              <span className="text-sm font-extrabold text-slate-900 tracking-tight">CE</span>
            </div>
            <div className="leading-tight">
              <span className="block text-xl font-extrabold text-white">Cakrawala</span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-blue-300">EduCentre</span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold leading-tight text-white">
              Selamat Datang di{" "}
              <span className="text-yellow-300">Learning Management System</span>
            </h1>
            <p className="mt-3 text-base text-blue-100/80 leading-relaxed">
              Akses materi belajar, jadwal kelas, dan progres belajar kamu di satu tempat.
            </p>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-3">
            <FeatureItem icon={<BookOpen className="h-4 w-4" />} text="Akses ribuan materi & video belajar" />
            <FeatureItem icon={<Users className="h-4 w-4" />} text="Belajar langsung dengan Master Teacher" />
            <FeatureItem icon={<Trophy className="h-4 w-4" />} text="Lacak progres & ranking kelasmu" />
            <FeatureItem icon={<Sparkles className="h-4 w-4" />} text="Latihan soal UTBK & tryout online" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            {[
              { value: "500+", label: "Siswa Aktif" },
              { value: "50+", label: "Tutor Expert" },
              { value: "98%", label: "Lulus PTN" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/10 p-3 text-center border border-white/10">
                <p className="text-xl font-extrabold text-yellow-300">{stat.value}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right panel (form) ── */}
        <div className="lg:col-span-3">
          {/* Mobile brand */}
          <div className="flex items-center justify-center gap-3 mb-6 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 to-orange-400 shadow-lg">
              <GraduationCap className="h-5 w-5 text-slate-900" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-extrabold text-white">Cakrawala EduCentre</span>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-blue-300">Learning Management System</span>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">

            {/* Tabs */}
            <div className="flex rounded-2xl bg-white/10 p-1 mb-6">
              {(["login", "register"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-white text-blue-700 shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {tab === "login" ? "Masuk" : "Daftar"}
                </button>
              ))}
            </div>

            {/* Tab title */}
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-white">
                {activeTab === "login" ? "Masuk ke Akun LMS" : "Buat Akun LMS"}
              </h2>
              <p className="mt-1 text-sm text-blue-200">
                {activeTab === "login"
                  ? "Akses dashboard belajar dan materi kelas kamu"
                  : "Bergabung dan mulai perjalanan belajarmu"}
              </p>
            </div>

            {/* Google login button */}
            <button
              onClick={handleGoogle}
              disabled={isLoading}
              className="group relative w-full flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-lg shadow-black/10 transition-all duration-200 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <GoogleIcon />
              <span>Lanjutkan dengan Google</span>
              <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-blue-400/30 transition-all" />
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">atau dengan email</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {activeTab === "register" && (
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Nama kamu"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition-all focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20 focus:bg-white/15"
                  />
                </div>
              )}

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60">
                  Alamat Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@contoh.com"
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition-all focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20 focus:bg-white/15"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 pr-12 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition-all focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20 focus:bg-white/15"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {activeTab === "login" && (
                <div className="flex justify-end -mt-1">
                  <a href="#" className="text-xs font-semibold text-yellow-300 hover:text-yellow-200 transition-colors underline underline-offset-2">
                    Lupa password?
                  </a>
                </div>
              )}

              {activeTab === "register" && (
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60">
                    Konfirmasi Password
                  </label>
                  <input
                    type="password"
                    placeholder="Ulangi password"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition-all focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20 focus:bg-white/15"
                  />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-1 w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 py-3.5 text-sm font-extrabold text-slate-900 shadow-lg shadow-orange-500/30 transition-all duration-200 hover:from-yellow-300 hover:to-orange-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Memproses...
                  </span>
                ) : activeTab === "login" ? (
                  "Masuk ke LMS →"
                ) : (
                  "Buat Akun Sekarang →"
                )}
              </button>
            </form>

            {/* Footer note */}
            <p className="mt-5 text-center text-xs text-white/40">
              {activeTab === "login" ? (
                <>Belum punya akun? <button onClick={() => setActiveTab("register")} className="font-bold text-yellow-300 hover:text-yellow-200 underline underline-offset-2">Daftar sekarang</button></>
              ) : (
                <>Sudah punya akun? <button onClick={() => setActiveTab("login")} className="font-bold text-yellow-300 hover:text-yellow-200 underline underline-offset-2">Masuk di sini</button></>
              )}
            </p>

            {/* Security badge */}
            <div className="mt-4 flex items-center justify-center gap-2 text-white/30">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px] font-medium tracking-wider">Dilindungi enkripsi SSL 256-bit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
