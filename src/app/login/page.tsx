"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Eye, EyeOff, GraduationCap, ArrowLeft, Sparkles, BookOpen, Users, Trophy } from "lucide-react";
import { createUser } from "@/db/actions";

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-200">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-300 shrink-0">{icon}</div>
      <p className="text-sm font-medium text-white/90">{text}</p>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.error) {
      setError("Email atau password salah");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Password tidak cocok");
      return;
    }

    setIsLoading(true);

    try {
      await createUser({ name, email, password });

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      setIsLoading(false);

      if (result?.error) {
        setError("Gagal login setelah daftar. Silakan login manual.");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setIsLoading(false);
      setError("Email sudah terdaftar atau terjadi kesalahan");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0d1b4b] via-[#1a3a8f] to-[#1565c0] flex items-center justify-center p-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-indigo-400/10 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
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

      <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-white/70 hover:text-white transition-all duration-200 group">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-all">
          <ArrowLeft className="h-4 w-4" />
        </div>
        <span className="text-sm font-medium">Kembali ke Beranda</span>
      </Link>

      <div className="relative z-10 w-full max-w-5xl mx-auto lg:grid lg:grid-cols-5 lg:gap-8 lg:items-center">
        <div className="hidden lg:flex lg:col-span-2 flex-col gap-6 pr-4">
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

          <div className="flex flex-col gap-3">
            <FeatureItem icon={<BookOpen className="h-4 w-4" />} text="Akses ribuan materi & video belajar" />
            <FeatureItem icon={<Users className="h-4 w-4" />} text="Belajar langsung dengan Master Teacher" />
            <FeatureItem icon={<Trophy className="h-4 w-4" />} text="Lacak progres & ranking kelasmu" />
            <FeatureItem icon={<Sparkles className="h-4 w-4" />} text="Latihan soal UTBK & tryout online" />
          </div>

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

        <div className="lg:col-span-3">
          <div className="flex items-center justify-center gap-3 mb-6 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 to-orange-400 shadow-lg">
              <GraduationCap className="h-5 w-5 text-slate-900" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-extrabold text-white">Cakrawala EduCentre</span>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-blue-300">Learning Management System</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            <div className="flex rounded-2xl bg-white/10 p-1 mb-6">
              {(["login", "register"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setError(""); }}
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

            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-white">
                {activeTab === "login" ? "Masuk ke Akun" : "Buat Akun Baru"}
              </h2>
              <p className="mt-1 text-sm text-blue-200">
                {activeTab === "login"
                  ? "Masuk menggunakan email dan password"
                  : "Daftar untuk mulai belajar"}
              </p>
            </div>

            {error && (
              <div className="mb-4 rounded-xl bg-red-500/20 border border-red-500/30 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <form onSubmit={activeTab === "login" ? handleLogin : handleRegister} className="flex flex-col gap-4">
              {activeTab === "register" && (
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60">Nama Lengkap</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama kamu"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition-all focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20 focus:bg-white/15"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60">Alamat Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@contoh.com"
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition-all focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20 focus:bg-white/15"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    required
                    minLength={6}
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

              {activeTab === "register" && (
                <div>
                  <label htmlFor="confirmPassword" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/60">Konfirmasi Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Ulangi password"
                    required
                    minLength={6}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition-all focus:border-yellow-300/60 focus:ring-2 focus:ring-yellow-300/20 focus:bg-white/15"
                  />
                </div>
              )}

              {activeTab === "login" && (
                <div className="flex justify-end -mt-1">
                  <span className="text-xs font-semibold text-white/40">Lupa password? Hubungi admin</span>
                </div>
              )}

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
                  "Masuk →"
                ) : (
                  "Buat Akun Sekarang →"
                )}
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-white/40">
              {activeTab === "login" ? (
                <>Belum punya akun? <button onClick={() => { setActiveTab("register"); setError(""); }} className="font-bold text-yellow-300 hover:text-yellow-200 underline underline-offset-2">Daftar sekarang</button></>
              ) : (
                <>Sudah punya akun? <button onClick={() => { setActiveTab("login"); setError(""); }} className="font-bold text-yellow-300 hover:text-yellow-200 underline underline-offset-2">Masuk di sini</button></>
              )}
            </p>

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
