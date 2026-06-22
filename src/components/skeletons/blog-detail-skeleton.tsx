import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetailSkeleton() {
  return (
    <div className="min-h-dvh bg-white pb-12 sm:pb-24 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <Skeleton className="mb-4 h-4 w-48 sm:mb-6 sm:h-5" />

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-700 dark:bg-slate-900/50">
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-4 w-16 rounded-full sm:h-5 sm:w-20" />
            <Skeleton className="h-3 w-24 sm:h-3.5 sm:w-28" />
            <Skeleton className="h-3 w-16 sm:h-3.5 sm:w-20" />
          </div>

          <Skeleton className="mt-4 h-6 w-full sm:mt-6 sm:h-8" />
          <Skeleton className="mt-1 h-6 w-4/5 sm:h-8" />

          <Skeleton className="mt-3 h-3 w-40 sm:mt-4 sm:h-4 sm:w-48" />

          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            <Skeleton className="h-4 w-full sm:h-5" />
            <Skeleton className="h-4 w-11/12 sm:h-5" />
            <Skeleton className="h-4 w-5/6 sm:h-5" />
            <Skeleton className="h-4 w-full sm:h-5" />
            <Skeleton className="h-4 w-4/5 sm:h-5" />
            <Skeleton className="h-4 w-3/4 sm:h-5" />
            <Skeleton className="h-4 w-full sm:h-5" />
            <Skeleton className="h-4 w-9/12 sm:h-5" />
            <Skeleton className="h-4 w-full sm:h-5" />
            <Skeleton className="h-4 w-5/6 sm:h-5" />
          </div>
        </div>

        <Skeleton className="mx-auto mt-8 h-12 w-64 rounded-xl sm:mt-10 sm:h-14" />
      </div>
    </div>
  );
}
