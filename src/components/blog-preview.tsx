import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPreview() {
  return (
    <section id="blog" className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Artikel & Blog Edukasi
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Tips belajar, pembahasan soal, dan informasi pendidikan terbaru dari
            Cakrawala EduCentre.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group h-full rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-primary/20 hover:shadow-lg sm:p-6 dark:border-slate-700/50 dark:bg-slate-800/50">
                <div className="mb-2 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-primary sm:mb-3 sm:px-3 sm:py-1 sm:text-xs dark:bg-blue-900/30">
                  {post.category}
                </div>
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-900 transition-colors sm:text-base group-hover:text-primary dark:text-slate-100">
                  {post.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 line-clamp-2 sm:mt-2 sm:text-sm">
                  {post.excerpt}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3 sm:mt-4 sm:pt-4 dark:border-slate-700">
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 sm:gap-2 sm:text-xs">
                    <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {post.date}
                  </div>
                  <span className="text-[10px] font-medium text-primary opacity-0 transition-opacity sm:text-xs group-hover:opacity-100">
                    Baca selengkapnya →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {blogPosts.length > 3 && (
          <div className="mt-8 text-center sm:mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-700 transition-all hover:border-primary hover:bg-primary hover:text-white sm:px-6 sm:py-3 sm:text-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
            >
              Lihat Semua Artikel
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
