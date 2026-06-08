"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Search, Inbox } from "lucide-react";
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
        return "bg-blue-50 text-blue-700 border-blue-200/60";
      case "bahasa":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "anak":
        return "bg-pink-50 text-pink-700 border-pink-200/60";
      case "skills":
        return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "layanan":
        return "bg-purple-50 text-purple-700 border-purple-200/60";
      default:
        return "bg-zinc-50 text-zinc-700 border-zinc-200/60";
    }
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-zinc-50/30 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Produk Unggulan Kami
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Temukan berbagai layanan bimbingan belajar, kursus bahasa asing, program keterampilan digital,
            dan kemitraan edukasi terbaik yang dirancang untuk mendukung kesuksesan akademis dan karir Anda.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="mt-12 flex flex-col gap-6 items-stretch justify-between border-b border-zinc-200 pb-8 lg:flex-row lg:items-center">
          {/* Navigation/Tabs */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md shadow-primary/10"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-md self-start lg:self-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-400">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Cari produk (misal: Coding, TOEFL, Bimbel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-11 pr-4 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5"
            />
          </div>
        </div>

        {/* Results Metadata */}
        <div className="mt-6 flex items-center justify-between text-sm text-zinc-500">
          <div>
            Menampilkan <span className="font-semibold text-zinc-800">{filteredPrograms.length}</span> dari{" "}
            <span className="font-semibold text-zinc-800">{programs.length}</span> produk unggulan
          </div>
          {(activeTab !== "all" || searchQuery.trim() !== "") && (
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="text-primary hover:text-primary-light font-medium underline transition-all"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-white py-16 px-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 text-zinc-400">
              <Inbox className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-zinc-900">Tidak ada produk ditemukan</h3>
            <p className="mt-2 text-sm text-zinc-500 max-w-sm">
              Kami tidak menemukan produk yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo; di kategori ini.
            </p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Lihat Semua Produk
            </button>
          </div>
        ) : (
          /* Products Grid */
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <div
                key={program.title}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl animate-fadeIn"
              >
                <div>
                  {/* Category Badge & Icon Container */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <program.icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide ${getCategoryBadgeClass(
                        program.category
                      )}`}
                    >
                      {getCategoryLabel(program.category)}
                    </span>
                  </div>

                  {/* Title and Age Info */}
                  <h3 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-primary">
                    {program.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider">
                    {program.age}
                  </p>

                  {/* Description */}
                  <p className="mt-3.5 text-sm leading-relaxed text-zinc-500">
                    {program.description}
                  </p>
                </div>

                {/* Highlights / Bullet Points */}
                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <ul className="space-y-2.5">
                    {program.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-zinc-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span className="leading-tight">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Consultation CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-zinc-500 font-medium">
            Bingung memilih program atau produk yang cocok untuk kebutuhan Anda?
          </p>
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition-all hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20"
          >
            Konsultasikan Produk yang Tepat
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
