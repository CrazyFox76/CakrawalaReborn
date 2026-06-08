"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Produk", href: "#products" },
  { label: "Blog", href: "#blog" },
  { label: "Tentang", href: "#about" },
  { label: "Kontak", href: "#footer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-950/95 dark:supports-[backdrop-filter]:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-white">CE</span>
          </div>
          <span className="text-lg font-bold text-primary">
            Cakrawala <span className="text-accent">EduCentre</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary dark:text-zinc-400 dark:hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/6281324868790"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Konsultasi Gratis
        </a>

        <ThemeToggle />

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 pb-4 pt-2 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-primary dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281324868790"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              <Phone className="h-4 w-4" />
              Konsultasi Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
