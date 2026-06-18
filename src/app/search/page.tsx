"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Search, FileText, BookOpen, Calendar } from "lucide-react";
import { searchAll } from "@/db/actions";
import SearchInput from "@/components/search-input";

type SearchResult = Awaited<ReturnType<typeof searchAll>>;

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = useCallback(async () => {
    const q = query.trim();
    if (!q) return;
    setLoading(true);
    setSearched(true);
    try {
      const res = await searchAll(q);
      setResult(res);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const hasResults = result && (result.blogPosts.length > 0 || result.programs.length > 0);

  return (
    <main className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Pencarian
          </h1>
          <p className="mt-2 text-sm text-zinc-500 sm:mt-3 sm:text-base dark:text-slate-400">
            Cari artikel blog atau program belajar di Cakrawala EduCentre
          </p>
        </div>

        <div className="mt-6 sm:mt-8">
          <SearchInput
            value={query}
            onChange={setQuery}
            onSubmit={handleSearch}
          />
        </div>

        {loading && (
          <div className="mt-12 text-center text-sm text-zinc-500 dark:text-slate-400">
            Mencari...
          </div>
        )}

        {searched && !loading && !hasResults && (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-white px-4 py-16 text-center dark:border-slate-700 dark:bg-slate-800/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 dark:bg-slate-800 dark:text-slate-500">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-slate-100">
              Hasil tidak ditemukan
            </h3>
            <p className="mt-2 max-w-sm text-sm text-zinc-500 dark:text-slate-400">
              Tidak ada hasil untuk &ldquo;{query}&rdquo;. Coba gunakan kata kunci lain.
            </p>
          </div>
        )}

        {hasResults && (
          <div className="mt-8 space-y-8 sm:mt-10">
            {result!.blogPosts.length > 0 && (
              <section>
                <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-900 sm:text-xl dark:text-slate-100">
                  <FileText className="h-5 w-5 text-primary" />
                  Blog ({result!.blogPosts.length})
                </h2>
                <div className="mt-4 space-y-3">
                  {result!.blogPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="block rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-primary/20 hover:shadow-md sm:p-5 dark:border-slate-700 dark:bg-slate-800/50"
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-medium text-primary sm:text-xs dark:bg-blue-900/30">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="mt-2 text-sm font-semibold text-zinc-900 sm:text-base dark:text-slate-100">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-500 line-clamp-2 sm:text-sm dark:text-slate-400">
                        {post.excerpt}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-zinc-400 sm:gap-2 sm:text-xs">
                        <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        {post.date}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {result!.programs.length > 0 && (
              <section>
                <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-900 sm:text-xl dark:text-slate-100">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Program ({result!.programs.length})
                </h2>
                <div className="mt-4 space-y-3">
                  {result!.programs.map((prog) => (
                    <Link
                      key={prog.id}
                      href={`/program/${prog.brandSlug}/${prog.slug}`}
                      className="block rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-primary/20 hover:shadow-md sm:p-5 dark:border-slate-700 dark:bg-slate-800/50"
                    >
                      <h3 className="text-sm font-semibold text-zinc-900 sm:text-base dark:text-slate-100">
                        {prog.title}
                      </h3>
                      <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent sm:text-xs">
                        {prog.age}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-500 line-clamp-2 sm:text-sm dark:text-slate-400">
                        {prog.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
