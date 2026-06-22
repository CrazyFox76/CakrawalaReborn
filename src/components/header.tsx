"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, MessageCircle, HelpCircle, LogIn, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

const programItems = [
  { label: "Semua Program", href: "/program" },
  { label: "Rumbel Cakrawala", href: "/program/rumbel-cakrawala" },
  { label: "Home Visit", href: "/program/cakrawala-home-visit" },
  { label: "English Centre", href: "/program/cakra-english-centre" },
  { label: "TryOut CBT", href: "/program/tryout-cbt" },
  { label: "Cakra Tech", href: "/program/cakra-tech" },
  { label: "Cakrakids", href: "/program/cakrakids" },
];

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-lg border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

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
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/95"
          : "bg-white dark:bg-slate-950"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
            <span className="text-xs font-bold text-white">CE</span>
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-white">
            Cakrawala<span className="text-accent">EduCentre</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Dropdown label="Program" items={programItems} />
          <Link href="/screening" className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
            <Search className="h-3.5 w-3.5" />
            Screening
          </Link>
          <a href="#testimoni" className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
            <MessageCircle className="h-3.5 w-3.5" />
            Testimoni
          </a>
          <a href="#faq" className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </a>
          <Link
            href="/screening"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-gold-600 hover:shadow-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Cek Potensi Gratis
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <LogIn className="h-3 w-3" />
            Login
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Program</div>
          {programItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800">
            <a href="/screening" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800">
              <Search className="h-4 w-4" /> Screening
            </a>
            <a href="#testimoni" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800">
              <MessageCircle className="h-4 w-4" /> Testimoni
            </a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800">
              <HelpCircle className="h-4 w-4" /> FAQ
            </a>
          </div>
          <div className="mt-4 flex gap-2">
            <Link
              href="/screening"
              onClick={() => setMobileOpen(false)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-white shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              Cek Potensi Gratis
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
