"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Search, Inbox, ChevronDown, ChevronUp } from "lucide-react";
import { getProgramIcon } from "@/lib/icon-map";
import type { BrandWithPrograms } from "@/db/types";

const TABS = [
  { id: "all", label: "Semua" },
  { id: "akademik", label: "Bimbel & Akademik" },
  { id: "bahasa", label: "Bahasa" },
  { id: "anak", label: "Anak & Kids" },
  { id: "skills", label: "Tech & Keterampilan" },
  { id: "tryout", label: "Tryout & Ujian" },
  { id: "layanan", label: "Layanan & Komunitas" },
];

const categoryStyles: Record<string, { badge: string; border: string; icon: string }> = {
  akademik: {
    badge: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    border: "border-blue-100 hover:border-blue-400 dark:border-blue-900/50 dark:hover:border-blue-500",
    icon: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 dark:bg-blue-900/30",
  },
  bahasa: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
    border: "border-emerald-100 hover:border-emerald-400 dark:border-emerald-900/50 dark:hover:border-emerald-500",
    icon: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 dark:bg-emerald-900/30",
  },
  anak: {
    badge: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800",
    border: "border-pink-100 hover:border-pink-400 dark:border-pink-900/50 dark:hover:border-pink-500",
    icon: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 dark:bg-pink-900/30",
  },
  skills: {
    badge: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
    border: "border-amber-100 hover:border-amber-400 dark:border-amber-900/50 dark:hover:border-amber-500",
    icon: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 dark:bg-amber-900/30",
  },
  tryout: {
    badge: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
    border: "border-orange-100 hover:border-orange-400 dark:border-orange-900/50 dark:hover:border-orange-500",
    icon: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 dark:bg-orange-900/30",
  },
  layanan: {
    badge: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
    border: "border-purple-100 hover:border-purple-400 dark:border-purple-900/50 dark:hover:border-purple-500",
    icon: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 dark:bg-purple-900/30",
  },
};

export default function Programs({ brands }: { brands: BrandWithPrograms[] }) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const initialCount = isMobile ? 3 : 6;

  const filteredBrands = useMemo(() => {
    return brands.filter((brand) => {
      let matchesTab = true;
      if (activeTab !== "all") {
        matchesTab = brand.category === activeTab;
      }

      const search = searchQuery.toLowerCase().trim();
      const matchesSearch =
        search === "" ||
        brand.name.toLowerCase().includes(search) ||
        brand.description.toLowerCase().includes(search) ||
        brand.programs.some(
          (p) =>
            p.title.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search),
        );

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery, brands]);

  const displayedBrands = useMemo(() => {
    return showAll ? filteredBrands : filteredBrands.slice(0, initialCount);
  }, [filteredBrands, showAll, initialCount]);

  return (
    <section id="products" className="scroll-mt-20 bg-zinc-50/30 py-12 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Program Unggulan Kami
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Temukan berbagai layanan bimbingan belajar, kursus bahasa asing, program keterampilan digital,
            dan kemitraan edukasi terbaik yang dirancang untuk mendukung kesuksesan akademis dan karir Anda.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-b border-zinc-200 pb-6 sm:mt-12 sm:gap-6 sm:pb-8 lg:flex-row lg:items-center lg:justify-between dark:border-slate-700">
          <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-2 sm:gap-2 lg:pb-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setShowAll(false); }}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md shadow-primary/10"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-md self-start lg:self-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 sm:pl-3.5">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <input
              type="text"
              placeholder="Cari program..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
              className="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-9 pr-3 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:py-2.5 sm:pl-11 sm:pr-4 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 sm:mt-6 sm:text-sm dark:text-slate-400">
          <div>
            <span className="hidden sm:inline">Menampilkan </span>
            <span className="font-semibold text-zinc-800 dark:text-slate-200">{filteredBrands.length}</span>{" "}
            <span className="hidden sm:inline">brand dari </span>
            <span className="font-semibold text-zinc-800 dark:text-slate-200">{brands.length}</span> total
          </div>
          {(activeTab !== "all" || searchQuery.trim() !== "" || showAll) && (
            <button
              onClick={() => { setActiveTab("all"); setSearchQuery(""); setShowAll(false); }}
              className="font-medium text-primary underline transition-all hover:text-primary-light"
            >
              Reset Filter
            </button>
          )}
        </div>

        {filteredBrands.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-white px-4 py-16 text-center dark:border-slate-700 dark:bg-slate-800/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 dark:bg-slate-800 dark:text-slate-500">
              <Inbox className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-slate-100">Tidak ada brand ditemukan</h3>
            <p className="mt-2 max-w-sm text-sm text-zinc-500 dark:text-slate-400">
              Tidak ditemukan brand yang cocok dengan &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => { setActiveTab("all"); setSearchQuery(""); setShowAll(false); }}
              className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Lihat Semua Program
            </button>
          </div>
        ) : (
          <>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {displayedBrands.map((brand) => {
                const s = categoryStyles[brand.category] || categoryStyles.akademik;
                const Icon = getProgramIcon(brand.iconName);
                return (
                  <Link
                    key={brand.slug}
                    href={`/program/${brand.slug}`}
                    className={`group flex flex-col justify-between rounded-2xl border-2 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-6 dark:bg-slate-800/50 ${s.border}`}
                  >
                    <div>
                      <div className="mb-3 flex items-center justify-between gap-3 sm:mb-5 sm:gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 sm:h-12 sm:w-12 sm:rounded-xl group-hover:text-white ${s.icon}`}>
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold sm:text-xs ${s.badge}`}>
                          {TABS.find((t) => t.id === brand.category)?.label || brand.category}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-zinc-900 transition-colors group-hover:text-primary sm:text-lg dark:text-slate-100">
                        {brand.name}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:mt-3 sm:text-sm dark:text-slate-400">
                        {brand.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 sm:mt-6 sm:pt-4 dark:border-slate-700">
                      <span className="text-xs font-medium text-zinc-400 sm:text-sm dark:text-slate-500">
                        {brand.programs.length} program
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary sm:text-sm">
                        Lihat Detail
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {filteredBrands.length > initialCount && (
              <div className="mt-12 animate-fadeIn text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/10 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20"
                >
                  {showAll ? (
                    <>
                      Tampilkan Lebih Sedikit
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Lihat Selengkapnya ({filteredBrands.length - initialCount} brand lainnya)
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
