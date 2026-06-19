export default function Loading() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-white dark:bg-slate-950">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
        <p className="text-sm text-zinc-500 dark:text-slate-400">Memuat...</p>
      </div>
    </div>
  );
}
