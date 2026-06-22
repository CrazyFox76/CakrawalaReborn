import { Skeleton } from "@/components/ui/skeleton";

export default function BlogIndexSkeleton() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Skeleton className="mb-4 h-4 w-36 sm:mb-6 sm:h-5" />

        <div className="text-center">
          <Skeleton className="mx-auto h-8 w-40 sm:h-10 sm:w-56" />
          <Skeleton className="mx-auto mt-3 h-4 w-72 sm:mt-4 sm:h-5 sm:w-96" />
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-full rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 dark:border-slate-700/50 dark:bg-slate-800/50"
            >
              <Skeleton className="mb-2 h-4 w-14 rounded-full sm:mb-3 sm:h-5 sm:w-16" />
              <Skeleton className="h-4 w-full sm:h-5" />
              <Skeleton className="mt-1 h-4 w-5/6 sm:mt-2 sm:h-5" />
              <Skeleton className="mt-1 h-3 w-full sm:mt-2 sm:h-4" />
              <Skeleton className="mt-1 h-3 w-4/5 sm:h-4" />
              <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3 sm:mt-4 sm:pt-4 dark:border-slate-700">
                <Skeleton className="h-3 w-20 sm:h-3.5 sm:w-24" />
                <Skeleton className="h-3 w-14 sm:h-3.5 sm:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
