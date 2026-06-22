import Link from "next/link";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { getBlogPosts } from "@/data/blog-posts";

const categoryGradients: Record<string, string> = {
  "Tips Belajar": "from-blue-500 to-indigo-600",
  "Info Pendidikan": "from-emerald-500 to-teal-600",
  "Pembahasan Soal": "from-orange-500 to-red-500",
  "Pengumuman": "from-purple-500 to-pink-600",
};

const categoryBadgeColors: Record<string, string> = {
  "Tips Belajar": "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "Info Pendidikan": "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  "Pembahasan Soal": "bg-orange-50 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  "Pengumuman": "bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

export default async function BlogPreview() {
  const blogPosts = await getBlogPosts();
  return (
    <section id="blog" className="py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <BookOpen className="h-3.5 w-3.5" />
            Blog
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Artikel &{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Blog Edukasi
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Tips belajar, pembahasan soal, dan informasi pendidikan terbaru dari
            Cakrawala EduCentre.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => {
            const gradient = categoryGradients[post.category] || "from-blue-500 to-indigo-600";
            const badgeColor = categoryBadgeColors[post.category] || "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
            return (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-6 dark:border-slate-700/50 dark:bg-slate-900/70">
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${gradient} opacity-60`} />
                  <div className={`mb-3 inline-flex rounded-full ${badgeColor} px-3 py-1 text-[10px] font-semibold sm:text-xs`}>
                    {post.category}
                  </div>
                  <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 sm:text-base dark:text-slate-100 dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 sm:mt-6 sm:pt-5 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 transition-all group-hover:opacity-100 group-hover:gap-2 dark:text-blue-400">
                      Baca <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {blogPosts.length > 3 && (
          <div className="mt-10 text-center sm:mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/30 dark:hover:text-blue-300"
            >
              Lihat Semua Artikel
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
