"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Globe, Users, MapPin, LogIn, FileText, Code, Baby, Monitor, Heart, Shield, Search, Zap } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

// ─── Data navigasi ────────────────────────────────────────────────────────────
const produkItems = [
  { label: "Semua Produk", icon: <GraduationCap className="h-4 w-4 text-blue-400" />, href: "/program" },
  { label: "Cakrawala Centre", icon: <BookOpen className="h-4 w-4 text-blue-400" />, href: "/program/rumbel-cakrawala" },
  { label: "Balai Tutor", icon: <Users className="h-4 w-4 text-indigo-400" />, href: "/program/cakrawala-home-visit" },
  { label: "Cakra English Centre", icon: <Globe className="h-4 w-4 text-teal-400" />, href: "/program/cakra-english-centre" },
  { label: "Cakra Coding", icon: <Code className="h-4 w-4 text-purple-400" />, href: "/program/cakra-tech" },
  { label: "Cakra Kids", icon: <Baby className="h-4 w-4 text-pink-400" />, href: "/program/cakrakids" },
  { label: "TryOut CBT", icon: <Monitor className="h-4 w-4 text-orange-400" />, href: "/program/tryout-cbt" },
  { label: "Bimbingan Skripsi", icon: <FileText className="h-4 w-4 text-green-400" />, href: "/program/cakra-bimskrip" },
  { label: "Cakra Islami", icon: <Heart className="h-4 w-4 text-red-400" />, href: "/program/cakra-islami-terpadu" },
];

const programItems = [
  { label: "Semua Program", icon: <GraduationCap className="h-4 w-4 text-blue-400" />, href: "/program" },
  { label: "SD (Kelas 1–6)", icon: <BookOpen className="h-4 w-4 text-blue-400" />, href: "/program/rumbel-cakrawala" },
  { label: "SMP (Kelas 7–9)", icon: <BookOpen className="h-4 w-4 text-indigo-400" />, href: "/program/rumbel-cakrawala" },
  { label: "SMA (Kelas 10–12)", icon: <GraduationCap className="h-4 w-4 text-purple-400" />, href: "/program/rumbel-cakrawala" },
  { label: "Les Privat Online", icon: <Globe className="h-4 w-4 text-teal-400" />, href: "/program/rumbel-cakrawala" },
  { label: "Les Privat Tatap Muka", icon: <Users className="h-4 w-4 text-pink-400" />, href: "/program/cakrawala-home-visit" },
  { label: "Persiapan SNBT / UTBK", icon: <GraduationCap className="h-4 w-4 text-yellow-500" />, href: "/program/tryout-cbt" },
  { label: "Persiapan Kedinasan", icon: <Shield className="h-4 w-4 text-green-400" />, href: "/program/cakra-kedinasan" },
  { label: "Les Bahasa Asing", icon: <Globe className="h-4 w-4 text-teal-400" />, href: "/program/cakra-english-centre" },
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
        <nav className="hidden items-center gap-6 md:flex">
          <Dropdown label="Produk" items={produkItems} />
          <Dropdown label="Program" items={programItems} />
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
            href="/screening"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
          >
            <Search className="mr-1 inline-block h-3.5 w-3.5" />
            Cek PTN
          </Link>
          <Link
            href="/free-trial-bimbel"
            className="text-sm font-semibold text-green-600 transition-colors hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
          >
            Trial Gratis
          </Link>
          <Link
            href="/daftar"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1.5 text-sm font-bold text-white shadow-sm transition-all hover:shadow-md hover:from-orange-600 hover:to-red-600"
          >
            <FileText className="h-3.5 w-3.5" />
            Daftar
          </Link>
        </nav>

        {/* Theme + Login desktop */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <LogIn className="h-3.5 w-3.5" />
            Login
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
              Produk
            </p>
            {produkItems.map((item) => (
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
                { label: "Biaya", icon: <MapPin className="h-3.5 w-3.5" />, href: "/biaya" },
                { label: "Tentang", icon: <BookOpen className="h-3.5 w-3.5" />, href: "/tentang-kami" },
                { label: "Blog", icon: <BookOpen className="h-3.5 w-3.5" />, href: "/blog" },
                { label: "Cek PTN", icon: <Search className="h-3.5 w-3.5" />, href: "/screening" },
                { label: "Trial Gratis", icon: <Zap className="h-3.5 w-3.5" />, href: "/free-trial-bimbel" },
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

            <div className="mt-3 flex gap-2">
              <Link
                href="/daftar"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2.5 text-xs font-bold text-white shadow-md"
              >
                <FileText className="h-3.5 w-3.5" />
                Daftar
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-400"
              >
                <LogIn className="h-3.5 w-3.5" />
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
