import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { getBrandWithProgramsBySlug } from "@/db/actions";
import { getProgramIcon } from "@/lib/icon-map";

type Props = { params: Promise<{ slug: string; subSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subSlug } = await params;
  const brand = await getBrandWithProgramsBySlug(slug);
  const prog = brand?.programs.find((p) => p.slug === subSlug) ?? null;
  if (!prog) return { title: "Program Tidak Ditemukan | Cakrawala EduCentre" };
  return {
    title: `${prog.title} | Cakrawala EduCentre`,
    description: prog.description,
  };
}

export default async function SubProgramDetail({ params }: Props) {
  const { slug, subSlug } = await params;
  const brand = await getBrandWithProgramsBySlug(slug);
  const prog = brand?.programs.find((p) => p.slug === subSlug) ?? null;
  if (!brand || !prog) notFound();

  const Icon = getProgramIcon(brand.iconName);

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href={`/program/${brand.slug}`}
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-primary sm:mb-6 sm:text-sm dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali ke {brand.name}
        </Link>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-primary sm:h-14 sm:w-14 sm:rounded-xl dark:bg-blue-900/30">
            <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
          </div>

          <h1 className="mt-4 text-lg font-bold text-zinc-900 sm:mt-5 sm:text-3xl dark:text-slate-100">
            {prog.title}
          </h1>
          <p className="mt-0.5 text-xs font-semibold text-accent sm:mt-1 sm:text-sm">{prog.age}</p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-5 sm:text-base dark:text-slate-400">
            {prog.description}
          </p>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-sm font-bold text-zinc-900 sm:text-lg dark:text-slate-100">
              Apa yang Anda Dapatkan?
            </h2>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
              {prog.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-xs text-zinc-600 sm:gap-3 sm:text-sm dark:text-slate-400"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500 sm:h-5 sm:w-5" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Link
              href="/daftar"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary-light sm:px-6 sm:py-3 sm:text-sm"
            >
              Daftar Program Ini
            </Link>
            <a
              href="https://wa.me/6281324868790"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-700 transition-colors hover:border-primary hover:text-primary sm:px-6 sm:py-3 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-primary"
            >
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Konsultasi Via WA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
