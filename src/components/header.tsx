"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Globe, Users, MapPin, LogIn, FileText } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

// ─── Data navigasi ────────────────────────────────────────────────────────────
const jenjangItems = [
  { label: "SD (Kelas 1–6)", icon: <BookOpen className="h-4 w-4 text-blue-400" />, href: "/bimbel" },
  { label: "SMP (Kelas 7–9)", icon: <BookOpen className="h-4 w-4 text-indigo-400" />, href: "/bimbel" },
  { label: "SMA (Kelas 10–12)", icon: <GraduationCap className="h-4 w-4 text-purple-400" />, href: "/bimbel" },
  { label: "Gap Year / UTBK", icon: <GraduationCap className="h-4 w-4 text-orange-400" />, href: "/program/tryout-cbt" },
];

const programItems = [
  { label: "Semua Program", icon: <GraduationCap className="h-4 w-4 text-blue-400" />, href: "/program" },
  { label: "Les Privat Online", icon: <Globe className="h-4 w-4 text-teal-400" />, href: "/program/rumbel-cakrawala" },
  { label: "Les Privat Tatap Muka", icon: <Users className="h-4 w-4 text-pink-400" />, href: "/program/cakrawala-home-visit" },
  { label: "Persiapan SNBT", icon: <GraduationCap className="h-4 w-4 text-yellow-500" />, href: "/program/tryout-cbt" },
];

// ─── Dropdown wrapper ─────────────────────────────────────────────────────────
function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; icon: React.ReactNode; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
          <div className="p-2">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Header utama ─────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-800/80 dark:bg-slate-950/95"
          : "bg-white dark:bg-slate-950"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-md">
            <span className="text-xs font-extrabold text-white tracking-tight">CE</span>
          </div>
          <div className="leading-tight">
            <span className="block text-base font-extrabold text-slate-800 dark:text-white">
              Cakrawala
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-blue-600">
              EduCentre
            </span>
          </div>
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          <Dropdown label="Pilih Jenjang" items={jenjangItems} />
          <Dropdown label="Pilih Program" items={programItems} />

          <Link
            href="/program"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Program
          </Link>
          <Link
            href="/bimbel"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Bimbel
          </Link>
          <Link
            href="/biaya"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Biaya
          </Link>
          <Link
            href="/tentang-kami"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Tentang
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Blog
          </Link>
          <Link
            href="/karir"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Karir
          </Link>
          <Link
            href="/daftar"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-gold-600 px-4 py-1.5 text-sm font-bold text-white shadow-sm transition-all hover:shadow-md hover:from-gold-600 hover:to-gold-700"
          >
            <FileText className="h-3.5 w-3.5" />
            Daftar
          </Link>
        </nav>

        {/* CTA + toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/40 hover:from-blue-500 hover:to-indigo-600 active:scale-[0.97]"
          >
            <LogIn className="h-4 w-4" />
            Login LMS
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-1 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-0.5">
            <p className="mt-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Jenjang
            </p>
            {jenjangItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {item.icon} {item.label}
              </a>
            ))}

            <p className="mt-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Program
            </p>
            {programItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {item.icon} {item.label}
              </a>
            ))}

            <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800">
              {[
                { label: "Program", icon: <GraduationCap className="h-3.5 w-3.5" />, href: "/program" },
                { label: "Bimbel", icon: <BookOpen className="h-3.5 w-3.5" />, href: "/bimbel" },
                { label: "Biaya", icon: <MapPin className="h-3.5 w-3.5" />, href: "/biaya" },
                { label: "Tentang Kami", icon: <BookOpen className="h-3.5 w-3.5" />, href: "/tentang-kami" },
                { label: "Blog", icon: <BookOpen className="h-3.5 w-3.5" />, href: "/blog" },
                { label: "Karir", icon: <Users className="h-3.5 w-3.5" />, href: "/karir" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  {item.icon} {item.label}
                </a>
              ))}
            </div>

            <Link
              href="/daftar"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-gold-600 px-5 py-2.5 text-xs font-bold text-white shadow-md"
            >
              <FileText className="h-3.5 w-3.5" />
              Daftar Sekarang
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-2.5 text-xs font-bold text-white shadow-md"
            >
              <LogIn className="h-3.5 w-3.5" />
              Login LMS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
