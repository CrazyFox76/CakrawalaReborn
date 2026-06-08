import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPreview() {
  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Artikel & Blog Edukasi
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Tips belajar, pembahasan soal, dan informasi pendidikan terbaru dari
            Cakrawala EduCentre.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </div>
              <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </div>
                <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Baca selengkapnya →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-primary hover:text-primary"
          >
            Lihat Semua Artikel
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
