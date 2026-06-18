import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { getBlogPostBySlug, getBlogPosts } from "@/db/actions";
import { sanitize } from "@/lib/sanitize";
import Breadcrumbs from "@/components/breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Artikel Tidak Ditemukan | Cakrawala EduCentre" };
  return {
    title: `${post.title} | Cakrawala EduCentre`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "id_ID",
      siteName: "Cakrawala EduCentre",
      publishedTime: post.createdAt?.toISOString(),
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <article className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Breadcrumbs items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]} />

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] text-zinc-400 sm:mb-4 sm:gap-3 sm:text-xs dark:text-slate-500">
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-primary sm:px-3 sm:py-1 sm:text-xs dark:bg-blue-900/30 dark:text-blue-300">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-lg font-bold text-zinc-900 sm:text-3xl dark:text-slate-100">
            {post.title}
          </h1>

          <p className="mt-1 text-xs text-zinc-500 sm:mt-2 sm:text-sm dark:text-slate-400">
            Oleh {post.author}
          </p>

          <div
            className="mt-5 prose prose-sm max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-li:text-zinc-600 sm:mt-8 dark:prose-headings:text-slate-100 dark:prose-p:text-slate-400 dark:prose-li:text-slate-400 prose-strong:text-zinc-900 dark:prose-strong:text-slate-100"
            dangerouslySetInnerHTML={{ __html: sanitize(post.content) }}
          />
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center sm:mt-8 sm:p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <p className="text-xs text-zinc-600 sm:text-sm dark:text-slate-400">
            Butuh bimbingan lebih lanjut?
          </p>
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors sm:px-5 sm:py-2.5 sm:text-sm hover:bg-primary-light"
          >
            <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Konsultasi Gratis via WhatsApp
          </a>
        </div>

        <Script id="blog-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.createdAt?.toISOString() || post.date,
            author: { "@type": "Person", name: post.author },
            publisher: { "@type": "Organization", name: "Cakrawala EduCentre" },
          }),
        }} />
      </article>
    </div>
  );
}
