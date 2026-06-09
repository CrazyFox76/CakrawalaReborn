export function ProgramSkeleton() {
  return (
    <div className="h-96 animate-pulse rounded-2xl border border-zinc-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/50">
      <div className="h-12 w-12 rounded-xl bg-zinc-200 dark:bg-slate-700" />
      <div className="mt-4 h-5 w-3/4 rounded bg-zinc-200 dark:bg-slate-700" />
      <div className="mt-2 h-4 w-1/3 rounded bg-zinc-200 dark:bg-slate-700" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-zinc-200 dark:bg-slate-700" />
        <div className="h-3 w-5/6 rounded bg-zinc-200 dark:bg-slate-700" />
      </div>
      <div className="mt-6 space-y-2">
        <div className="h-3 w-2/3 rounded bg-zinc-200 dark:bg-slate-700" />
        <div className="h-3 w-1/2 rounded bg-zinc-200 dark:bg-slate-700" />
        <div className="h-3 w-3/4 rounded bg-zinc-200 dark:bg-slate-700" />
      </div>
    </div>
  );
}

export function BlogSkeleton() {
  return (
    <div className="h-72 animate-pulse rounded-2xl border border-zinc-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/50">
      <div className="h-5 w-20 rounded-full bg-zinc-200 dark:bg-slate-700" />
      <div className="mt-4 h-5 w-full rounded bg-zinc-200 dark:bg-slate-700" />
      <div className="mt-2 h-5 w-4/5 rounded bg-zinc-200 dark:bg-slate-700" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-zinc-200 dark:bg-slate-700" />
        <div className="h-3 w-5/6 rounded bg-zinc-200 dark:bg-slate-700" />
      </div>
      <div className="mt-6 h-4 w-1/3 rounded bg-zinc-200 dark:bg-slate-700" />
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-zinc-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900/50 sm:p-10">
      <div className="h-5 w-24 rounded bg-zinc-200 dark:bg-slate-700" />
      <div className="mt-6 h-10 w-3/4 rounded bg-zinc-200 dark:bg-slate-700" />
      <div className="mt-4 h-4 w-1/4 rounded bg-zinc-200 dark:bg-slate-700" />
      <div className="mt-8 space-y-3">
        <div className="h-4 w-full rounded bg-zinc-200 dark:bg-slate-700" />
        <div className="h-4 w-5/6 rounded bg-zinc-200 dark:bg-slate-700" />
        <div className="h-4 w-4/5 rounded bg-zinc-200 dark:bg-slate-700" />
        <div className="h-4 w-full rounded bg-zinc-200 dark:bg-slate-700" />
      </div>
    </div>
  );
}
