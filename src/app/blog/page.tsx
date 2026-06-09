import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog Edukasi | Cakrawala EduCentre",
  description: "Tips belajar, pembahasan soal, dan informasi pendidikan terbaru dari Cakrawala EduCentre.",
};

export default function BlogIndex() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors sm:mb-6 sm:text-sm hover:text-primary dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali ke Beranda
        </Link>

        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Blog Edukasi
          </h1>
          <p className="mt-3 text-sm text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Tips belajar, pembahasan soal, dan informasi pendidikan terbaru dari Cakrawala EduCentre.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group h-full rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-primary/20 hover:shadow-lg sm:p-6 dark:border-slate-700/50 dark:bg-slate-800/50">
                <div className="mb-2 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-primary sm:mb-3 sm:px-3 sm:py-1 sm:text-xs dark:bg-blue-900/30">
                  {post.category}
                </div>
                <h2 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-900 transition-colors sm:text-base group-hover:text-primary dark:text-slate-100">
                  {post.title}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 line-clamp-2 sm:mt-2 sm:text-sm">
                  {post.excerpt}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3 sm:mt-4 sm:pt-4 dark:border-slate-700">
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 sm:gap-2 sm:text-xs">
                    <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {post.date}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-zinc-400 sm:gap-1.5 sm:text-xs">
                    <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
