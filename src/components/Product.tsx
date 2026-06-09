"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Search, Inbox, ChevronDown, ChevronUp } from "lucide-react";
import { programs } from "@/data/programs";

const TABS = [
  { id: "all", label: "Semua Produk" },
  { id: "akademik", label: "Bimbel & Akademik" },
  { id: "bahasa-anak", label: "Bahasa & Anak" },
  { id: "skills", label: "Tech & Keterampilan" },
  { id: "layanan", label: "Layanan & Komunitas" },
];

export default function Programs() {
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

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      // 1. Filter by category
      let matchesTab = true;
      if (activeTab === "akademik") {
        matchesTab = program.category === "akademik";
      } else if (activeTab === "bahasa-anak") {
        matchesTab = program.category === "bahasa" || program.category === "anak";
      } else if (activeTab === "skills") {
        matchesTab = program.category === "skills";
      } else if (activeTab === "layanan") {
        matchesTab = program.category === "layanan";
      }

      // 2. Filter by search query
      const search = searchQuery.toLowerCase().trim();
      const matchesSearch =
        search === "" ||
        program.title.toLowerCase().includes(search) ||
        program.description.toLowerCase().includes(search) ||
        program.age.toLowerCase().includes(search) ||
        program.highlights.some((h) => h.toLowerCase().includes(search));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const displayedPrograms = useMemo(() => {
    return showAll ? filteredPrograms : filteredPrograms.slice(0, initialCount);
  }, [filteredPrograms, showAll, initialCount]);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "akademik":
        return "Bimbel & Akademik";
      case "bahasa":
        return "Bahasa";
      case "anak":
        return "Anak & Kids";
      case "skills":
        return "Tech & Keterampilan";
      case "layanan":
        return "Layanan & Komunitas";
      default:
        return category;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "akademik":
        return "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800";
      case "bahasa":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800";
      case "anak":
        return "bg-pink-50 text-pink-700 border-pink-200/60 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800";
      case "skills":
        return "bg-amber-50 text-amber-700 border-amber-200/60 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800";
      case "layanan":
        return "bg-purple-50 text-purple-700 border-purple-200/60 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800";
      default:
        return "bg-zinc-50 text-zinc-700 border-zinc-200/60 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700";
    }
  };

  const getCategoryBorderClass = (category: string) => {
    switch (category) {
      case "akademik":
        return "border-blue-100/80 hover:border-blue-400 dark:border-blue-900/50 dark:hover:border-blue-500";
      case "bahasa":
        return "border-emerald-100/80 hover:border-emerald-400 dark:border-emerald-900/50 dark:hover:border-emerald-500";
      case "anak":
        return "border-pink-100/80 hover:border-pink-400 dark:border-pink-900/50 dark:hover:border-pink-500";
      case "skills":
        return "border-amber-100/80 hover:border-amber-400 dark:border-amber-900/50 dark:hover:border-amber-500";
      case "layanan":
        return "border-purple-100/80 hover:border-purple-400 dark:border-purple-900/50 dark:hover:border-purple-500";
      default:
        return "border-zinc-200/80 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500";
    }
  };

  return (
    <section id="products" className="py-12 sm:py-24 bg-zinc-50/30 scroll-mt-20 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Produk Unggulan Kami
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Temukan berbagai layanan bimbingan belajar, kursus bahasa asing, program keterampilan digital,
            dan kemitraan edukasi terbaik yang dirancang untuk mendukung kesuksesan akademis dan karir Anda.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="mt-8 flex flex-col gap-4 items-stretch justify-between border-b border-zinc-200 pb-6 sm:mt-12 sm:gap-6 sm:pb-8 lg:flex-row lg:items-center dark:border-slate-700">
          {/* Navigation/Tabs */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-2 sm:gap-2 lg:pb-0 scrollbar-none">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowAll(false);
                }}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm ${
                   activeTab === tab.id
                     ? "bg-primary text-white shadow-md shadow-primary/10"
                     : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:text-slate-200"
                 }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-md self-start lg:self-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400 sm:pl-3.5">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAll(false);
              }}
              className="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-9 pr-3 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:py-2.5 sm:pl-11 sm:pr-4 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
            />
          </div>
        </div>

        {/* Results Metadata */}
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 sm:mt-6 sm:text-sm dark:text-slate-400">
          <div>
            <span className="hidden sm:inline">Menampilkan </span>
            <span className="font-semibold text-zinc-800 dark:text-slate-200">{filteredPrograms.length}</span>{" "}
            <span className="hidden sm:inline">dari </span>
            <span className="font-semibold text-zinc-800 dark:text-slate-200">{programs.length}</span> produk
          </div>
          {(activeTab !== "all" || searchQuery.trim() !== "" || showAll) && (
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
                setShowAll(false);
              }}
              className="text-primary hover:text-primary-light font-medium underline transition-all"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-white py-16 px-4 text-center dark:border-slate-700 dark:bg-slate-800/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 dark:bg-slate-800 dark:text-slate-500">
              <Inbox className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-slate-100">Tidak ada produk ditemukan</h3>
            <p className="mt-2 text-sm text-zinc-500 max-w-sm dark:text-slate-400">
              Kami tidak menemukan produk yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo; di kategori ini.
            </p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
                setShowAll(false);
              }}
              className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Lihat Semua Produk
            </button>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {displayedPrograms.map((program) => {
                const borderClass = getCategoryBorderClass(program.category);
                return (
                  <div
                    key={program.title}
                    className={`group flex flex-col justify-between rounded-2xl border-2 bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5 animate-fadeIn dark:bg-slate-800/50 ${borderClass}`}
                  >
                    <div>
                      {/* Category Badge & Icon Container */}
                      <div className="flex items-center justify-between gap-3 mb-3 sm:mb-5 sm:gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-primary transition-all duration-300 sm:h-12 sm:w-12 sm:rounded-xl group-hover:bg-primary group-hover:text-white dark:bg-blue-900/30">
                          <program.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                        </div>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide sm:px-2.5 sm:text-xs ${getCategoryBadgeClass(
                            program.category
                          )}`}
                        >
                          {getCategoryLabel(program.category)}
                        </span>
                      </div>

                      {/* Title and Age Info */}
                      <h3 className="text-sm font-bold text-zinc-900 transition-colors sm:text-lg group-hover:text-primary dark:text-slate-100">
                        {program.title}
                      </h3>
                      <p className="mt-0.5 text-[10px] font-semibold text-accent uppercase tracking-wider sm:mt-1 sm:text-xs">
                        {program.age}
                      </p>

                      {/* Description */}
                      <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:mt-3.5 sm:text-sm dark:text-slate-400">
                        {program.description}
                      </p>
                    </div>

                    {/* Highlights / Bullet Points */}
                    <div className="mt-4 pt-3 border-t border-zinc-100 sm:mt-6 sm:pt-5 dark:border-slate-700">
                      <ul className="space-y-1.5 sm:space-y-2.5">
                        {program.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-zinc-600 sm:gap-2.5 sm:text-sm dark:text-slate-400">
                            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-accent sm:mt-1.5 sm:h-1.5 sm:w-1.5" />
                            <span className="leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/program/${program.slug}`}
                      className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 py-2 text-xs font-semibold text-zinc-700 transition-all sm:mt-5 sm:gap-2 sm:rounded-xl sm:py-2.5 sm:text-sm hover:border-primary hover:bg-primary hover:text-white dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                    >
                      Lihat Detail
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Show More / Show Less Button */}
            {filteredPrograms.length > initialCount && (
              <div className="mt-12 text-center animate-fadeIn">
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
                      Lihat Selengkapnya ({filteredPrograms.length - initialCount} produk lainnya)
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
