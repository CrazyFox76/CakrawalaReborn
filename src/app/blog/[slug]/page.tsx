import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MessageCircle } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artikel Tidak Ditemukan" };
  return { title: `${post.title} | Cakrawala EduCentre`, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt } };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Blog
        </Link>

        <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900/50 sm:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400 dark:text-slate-500">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary dark:bg-blue-900/30 dark:text-blue-300">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl font-bold text-zinc-900 dark:text-slate-100 sm:text-3xl">
            {post.title}
          </h1>

          <p className="mt-2 text-sm text-zinc-500 dark:text-slate-400">
            Oleh {post.author}
          </p>

          <div
            className="mt-8 prose prose-sm max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-li:text-zinc-600 dark:prose-headings:text-slate-100 dark:prose-p:text-slate-400 dark:prose-li:text-slate-400 prose-strong:text-zinc-900 dark:prose-strong:text-slate-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-slate-800 dark:bg-slate-900/50">
          <p className="text-sm text-zinc-600 dark:text-slate-400">
            Butuh bimbingan lebih lanjut?
          </p>
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            <MessageCircle className="h-4 w-4" />
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </article>
    </div>
  );
}
