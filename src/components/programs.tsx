"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Search, Inbox, ChevronDown, ChevronUp, Layers } from "lucide-react";
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

const categoryStyles: Record<string, { badge: string; border: string }> = {
  akademik: {
    badge: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    border: "border-blue-100 hover:border-blue-300 dark:border-blue-900/50 dark:hover:border-blue-600",
  },
  bahasa: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
    border: "border-emerald-100 hover:border-emerald-300 dark:border-emerald-900/50 dark:hover:border-emerald-600",
  },
  anak: {
    badge: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800",
    border: "border-pink-100 hover:border-pink-300 dark:border-pink-900/50 dark:hover:border-pink-600",
  },
  skills: {
    badge: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
    border: "border-amber-100 hover:border-amber-300 dark:border-amber-900/50 dark:hover:border-amber-600",
  },
  tryout: {
    badge: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
    border: "border-orange-100 hover:border-orange-300 dark:border-orange-900/50 dark:hover:border-orange-600",
  },
  layanan: {
    badge: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
    border: "border-purple-100 hover:border-purple-300 dark:border-purple-900/50 dark:hover:border-purple-600",
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
    <section id="products" className="scroll-mt-20 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <Layers className="h-3.5 w-3.5" />
            Program
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Program{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Unggulan
            </span>{" "}
            Kami
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Temukan berbagai layanan bimbingan belajar, kursus bahasa asing, program keterampilan digital,
            dan kemitraan edukasi terbaik yang dirancang untuk mendukung kesuksesan akademis dan karir Anda.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:mt-12 sm:gap-6 sm:pb-8 lg:flex-row lg:items-center lg:justify-between dark:border-slate-700">
          <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-2 sm:gap-2 lg:pb-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setShowAll(false); }}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-md self-start lg:self-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 sm:pl-3.5">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <input
              type="text"
              placeholder="Cari program..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
              className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 sm:rounded-xl sm:py-2.5 sm:pl-11 sm:pr-4 sm:text-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder-slate-500"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 sm:mt-6 sm:text-sm dark:text-slate-400">
          <div>
            <span className="hidden sm:inline">Menampilkan </span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{filteredBrands.length}</span>{" "}
            <span className="hidden sm:inline">brand dari </span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{brands.length}</span> total
          </div>
          {(activeTab !== "all" || searchQuery.trim() !== "" || showAll) && (
            <button
              onClick={() => { setActiveTab("all"); setSearchQuery(""); setShowAll(false); }}
              className="font-medium text-blue-600 underline transition-all hover:text-blue-700 dark:text-blue-400"
            >
              Reset Filter
            </button>
          )}
        </div>

        {filteredBrands.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white/70 px-4 py-16 text-center backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
              <Inbox className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-100">Tidak ada brand ditemukan</h3>
            <p className="mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              Tidak ditemukan brand yang cocok dengan &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => { setActiveTab("all"); setSearchQuery(""); setShowAll(false); }}
              className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
            >
              Lihat Semua Program
            </button>
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {displayedBrands.map((brand) => {
                const s = categoryStyles[brand.category] || categoryStyles.akademik;
                const Icon = getProgramIcon(brand.iconName);
                const gradient =
                  brand.category === "akademik" ? "from-blue-500 to-indigo-600" :
                  brand.category === "bahasa" ? "from-emerald-500 to-teal-600" :
                  brand.category === "anak" ? "from-pink-500 to-rose-600" :
                  brand.category === "skills" ? "from-amber-500 to-orange-600" :
                  brand.category === "tryout" ? "from-orange-500 to-red-600" :
                  "from-purple-500 to-pink-600";
                return (
                  <Link
                    key={brand.slug}
                    href={`/program/${brand.slug}`}
                    className={`group relative overflow-hidden rounded-2xl border-2 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-6 dark:bg-slate-900/70 ${s.border}`}
                  >
                    <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${gradient} opacity-60`} />

                    <div className="flex items-start justify-between gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg sm:h-14 sm:w-14`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold sm:text-xs ${s.badge}`}>
                        {TABS.find((t) => t.id === brand.category)?.label || brand.category}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600 sm:text-lg dark:text-slate-100 dark:group-hover:text-blue-400">
                      {brand.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {brand.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 sm:mt-6 sm:pt-5 dark:border-slate-800">
                      <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
                        {brand.programs.length} program
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-blue-600 transition-all group-hover:gap-2 dark:text-blue-400">
                        Lihat Detail
                        <ArrowRight className="h-4 w-4" />
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
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
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
