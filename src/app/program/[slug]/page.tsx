import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { programs } from "@/data/programs";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </Link>

        <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900/50 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-primary dark:bg-blue-900/30">
            <program.icon className="h-7 w-7" />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-zinc-900 dark:text-slate-100 sm:text-3xl">
            {program.title}
          </h1>
          <p className="mt-1 text-sm font-semibold text-accent">{program.age}</p>

          <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-slate-400">
            {program.description}
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-slate-100">
              Apa yang Anda Dapatkan?
            </h2>
            <ul className="mt-4 space-y-3">
              {program.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm text-zinc-600 dark:text-slate-400"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/6281324868790"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasikan Program Ini
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
