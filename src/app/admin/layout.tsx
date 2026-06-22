import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-zinc-50 dark:bg-slate-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-sm font-bold text-primary">
              Admin Panel
            </Link>
            <nav className="flex gap-4 text-xs font-medium text-zinc-600 dark:text-slate-400">
              <Link
                href="/admin/registrasi"
                className="transition-colors hover:text-primary"
              >
                Registrasi
              </Link>
            </nav>
          </div>
          <Link
            href="/"
            className="text-xs text-zinc-500 transition-colors hover:text-primary dark:text-slate-400"
          >
            Lihat Situs
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {children}
      </main>
    </div>
  );
}
