export default function Loading({ className }: { className?: string }) {
  return (
    <div className={`flex min-h-[400px] items-center justify-center ${className ?? ""}`}>
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-primary dark:border-slate-700 dark:border-t-primary" />
        <p className="text-sm text-zinc-500 dark:text-slate-400">Memuat...</p>
      </div>
    </div>
  );
}
