"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";

// ─── Data siswa berprestasi ────────────────────────────────────────────────────
const students = [
  { name: "Rizky A.", major: "Teknik ITB", branch: "Cakrawala Jakarta", img: "/student1.png" },
  { name: "Bunga P.", major: "Hukum UI", branch: "Cakrawala Manado", img: "/student2.png" },
  { name: "Calista A.", major: "Kedokteran UGM", branch: "Cakrawala Bandung", img: "/student3.png" },
  { name: "Angel J.", major: "Psikologi UGM", branch: "Cakrawala Pontianak", img: "/student1.png" },
  { name: "Nadia A.", major: "Psikologi UI", branch: "Cakrawala Mataram", img: "/student2.png" },
  { name: "Aryagani M.", major: "Kedokteran UGM", branch: "Cakrawala Padang", img: "/student3.png" },
  { name: "Indah L.", major: "Kedokteran UI", branch: "Cakrawala Bengkulu", img: "/student4.png" },
  { name: "Davina A.", major: "Sastra Inggris UI", branch: "Cakrawala Bukittinggi", img: "/student1.png" },
  { name: "Fathur Q.", major: "Mesin UI", branch: "Cakrawala Jakarta", img: "/student2.png" },
  { name: "Jesslyn E.", major: "Farmasi ITB", branch: "Cakrawala Tasikmalaya", img: "/student3.png" },
  { name: "Gusti A.", major: "Kedokteran Gigi Udayana", branch: "Cakrawala Denpasar", img: "/student4.png" },
  { name: "Annisa R.", major: "Elektro UI", branch: "Cakrawala Karawang", img: "/student1.png" },
];

// ─── Countdown target: 6 hari dari sekarang ────────────────────────────────
function getTarget() {
  const d = new Date();
  d.setDate(d.getDate() + 6);
  return d;
}

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      h: String(Math.floor(diff / 3_600_000)).padStart(2, "0"),
      m: String(Math.floor((diff % 3_600_000) / 60_000)).padStart(2, "0"),
      s: String(Math.floor((diff % 60_000) / 1000)).padStart(2, "0"),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  });
  return time;
}

// ─── Kartu siswa (tile) ───────────────────────────────────────────────────────
function StudentCard({ student }: { student: (typeof students)[0] }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-[1.03] hover:shadow-lg">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white/30">
        <Image
          src={student.img}
          alt={student.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-bold text-white">{student.name}</p>
        <p className="truncate text-[10px] font-semibold text-blue-200">{student.major}</p>
        <p className="truncate text-[9px] text-white/50">{student.branch}</p>
      </div>
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const target = useRef(getTarget()).current;
  const { h, m, s } = useCountdown(target);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phone.replace(/[^0-9]/g, "");
    if (cleaned.length < 10) {
      setError("Masukkan nomor WhatsApp yang valid (min. 10 angka)");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-br from-[#0d1b4b] via-[#1a3a8f] to-[#1565c0]">
      {/* ── Dekoratif geometrik ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Lingkaran besar kanan bawah */}
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        {/* Lingkaran kecil kiri atas */}
        <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-indigo-400/10 blur-2xl" />
        {/* Segitiga dekoratif */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-10"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <polygon points="0,200 720,0 1440,200" fill="white" />
        </svg>
        {/* Titik-titik pola */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Konten utama ── */}
      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-24 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-20 lg:pb-28">
        {/* Kolom kiri */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Bersama{" "}
            <span className="text-yellow-300">Cakrawala EduCentre,</span>
            <br />
            peluang untuk lolos
            <br />
            <span className="bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent">
              PTN impian naik 3x lipat
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-blue-100 sm:text-lg">
            Dibimbing langsung oleh Master Teacher lulusan PTN favorit di Indonesia
          </p>

          {/* Countdown + form klaim */}
          <div className="mt-8 max-w-lg">
            {/* Badge countdown */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-bold text-yellow-300 ring-1 ring-yellow-300/30">
              <Zap className="h-4 w-4 fill-yellow-300" />
              Sisa 6 hari lagi!&nbsp;
              <span className="font-mono text-base tracking-widest text-white">
                {h} : {m} : {s}
              </span>
            </div>

            {/* Card form */}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md sm:p-6">
              {!submitted ? (
                <>
                  <p className="text-sm font-semibold text-white sm:text-base">
                    Mau seperti mereka?
                  </p>
                  <p className="mt-0.5 text-sm text-blue-100">
                    Yuk, isi nomor WhatsApp untuk klaim{" "}
                    <span className="font-bold text-yellow-300 underline underline-offset-2">
                      DISKON hingga Rp4.4jt!
                    </span>
                  </p>

                  <form onSubmit={handleSubmit} className="mt-4">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setError("");
                        }}
                        placeholder="6281234567890"
                        className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 backdrop-blur-sm outline-none transition-all focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/30"
                      />
                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:from-orange-500 hover:to-orange-600 hover:shadow-xl active:scale-[0.97]"
                      >
                        Klaim Diskon
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                    {error && (
                      <p className="mt-2 text-xs text-red-300">{error}</p>
                    )}
                  </form>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/50">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                      Gratis konsultasi
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                      Privasi terjamin
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                      500+ siswa bergabung
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-3 py-2 text-center">
                  <CheckCircle className="h-10 w-10 text-green-400" />
                  <h3 className="text-base font-bold text-white">
                    Promo Dikirim ke WhatsApp!
                  </h3>
                  <p className="text-sm text-blue-100">
                    Tim kami akan menghubungi{" "}
                    <span className="font-semibold text-white">{phone}</span>{" "}
                    dalam 1×24 jam.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setPhone(""); }}
                    className="text-xs text-white/50 underline underline-offset-2 hover:text-white/80"
                  >
                    Kirim nomor lain
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sub-note */}
          <p className="mt-6 text-center text-sm text-blue-200 lg:text-left">
            Daftar langsung <span className="font-semibold text-white">Kelas Tatap Muka dan Online</span>,
            tersedia untuk SD, SMP, SMA, Gap Year
          </p>
          <p className="text-center text-xs text-white/50 lg:text-left">
            Persiapan TKA SMP dan persiapan SNBT juga tersedia disini!
          </p>
        </div>

        {/* Kolom kanan — grid siswa berprestasi */}
        <div className="mt-14 hidden lg:block">
          <div className="relative">
            {/* Label judul grid */}
            <div className="mb-4 text-right text-xs font-semibold uppercase tracking-widest text-white/40">
              Alumni Cakrawala yang Diterima PTN Terbaik
            </div>

            {/* Grid 3 kolom */}
            <div className="grid grid-cols-3 gap-3">
              {students.map((s, i) => (
                <div
                  key={i}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <StudentCard student={s} />
                </div>
              ))}
            </div>

            {/* Gradien fade kanan */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#1565c0]/80 to-transparent" />
          </div>
        </div>
      </div>

      {/* Gelombang bawah */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z"
            fill="white"
            className="dark:fill-slate-950"
          />
        </svg>
      </div>
    </section>
  );
}
