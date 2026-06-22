import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-lg font-bold text-zinc-900 sm:text-2xl dark:text-slate-100">
        Dashboard Admin
      </h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-slate-400">
        Kelola data pendaftaran Cakrawala EduCentre.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/registrasi"
          className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-primary hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/50"
        >
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-slate-100">
              Data Registrasi
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-slate-400">
              Lihat dan kelola pendaftar
            </p>
          </div>
          <ArrowRight className="h-4 w-4 text-zinc-400" />
        </Link>
      </div>
    </div>
  );
}
