import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { CheckCircle, MessageCircle } from "lucide-react";
import { getBrandWithProgramsBySlug } from "@/db/actions";
import { getProgramIcon } from "@/lib/icon-map";
import Breadcrumbs from "@/components/breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = await getBrandWithProgramsBySlug(slug);
  if (!brand) return { title: "Brand Tidak Ditemukan | Cakrawala EduCentre" };
  return {
    title: `${brand.name} - Program & Biaya | Cakrawala EduCentre`,
    description: brand.description,
    openGraph: {
      title: `${brand.name} | Cakrawala EduCentre`,
      description: brand.description.slice(0, 160),
      locale: "id_ID",
      siteName: "Cakrawala EduCentre",
    },
  };
}

export default async function BrandDetail({ params }: Props) {
  const { slug } = await params;
  const brand = await getBrandWithProgramsBySlug(slug);
  if (!brand) notFound();

  const Icon = getProgramIcon(brand.iconName);

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Breadcrumbs items={[
          { label: brand.name },
        ]} />

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary sm:h-16 sm:w-16 dark:bg-blue-900/30">
            <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>

          <h1 className="mt-4 text-xl font-bold text-zinc-900 sm:mt-5 sm:text-3xl dark:text-slate-100">
            {brand.name}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-base dark:text-slate-400">
            {brand.description}
          </p>

          <div className="mt-8 sm:mt-10">
            <h2 className="text-base font-bold text-zinc-900 sm:text-xl dark:text-slate-100">
              Program Tersedia ({brand.programs.length})
            </h2>

            <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6">
              {brand.programs.map((prog) => (
                <Link
                  key={prog.slug}
                  href={`/program/${brand.slug}/${prog.slug}`}
                  className="group rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg sm:p-6 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-primary"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-zinc-900 group-hover:text-primary sm:text-lg dark:text-slate-100">
                        {prog.title}
                      </h3>
                      <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent sm:mt-1 sm:text-xs">
                        {prog.age}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:mt-3 sm:text-sm dark:text-slate-400">
                        {prog.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
                    {prog.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 rounded-full bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-500 sm:px-3 sm:py-1 sm:text-xs dark:bg-slate-700 dark:text-slate-400"
                      >
                        <CheckCircle className="h-2.5 w-2.5 text-green-500 sm:h-3 sm:w-3" />
                        {h}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              href="https://wa.me/6281324868790"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary-light sm:px-6 sm:py-3 sm:text-sm"
            >
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Konsultasikan Program Ini
            </a>
            <Link
              href="/daftar"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-700 transition-colors hover:border-primary hover:text-primary sm:px-6 sm:py-3 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-primary"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>

        <Script id="brand-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: brand.name,
            description: brand.description,
            numberOfItems: brand.programs.length,
            itemListElement: brand.programs.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Course",
                name: p.title,
                description: p.description,
                url: `${process.env.NEXT_PUBLIC_URL || "https://cakrawala-educentre.vercel.app"}/program/${brand.slug}/${p.slug}`,
              },
            })),
          }),
        }} />
      </div>
    </div>
  );
}
