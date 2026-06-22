import { Skeleton } from "@/components/ui/skeleton";

export default function RootSkeleton() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      {/* Hero area skeleton */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 py-16 sm:py-24 lg:flex-row lg:gap-12">
          <div className="flex-1 space-y-4">
            <Skeleton className="h-8 w-3/4 sm:h-10 lg:h-12" />
            <Skeleton className="h-8 w-1/2 sm:h-10 lg:h-12" />
            <Skeleton className="h-4 w-full sm:h-5" />
            <Skeleton className="h-4 w-11/12 sm:h-5" />
            <Skeleton className="mt-6 h-12 w-44 rounded-xl sm:h-14 sm:w-52" />
          </div>
          <div className="flex-1">
            <Skeleton className="h-64 w-full rounded-2xl sm:h-80 lg:h-96" />
          </div>
        </div>
      </div>

      {/* Cards section skeleton */}
      <div className="bg-zinc-50 py-12 sm:py-24 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Skeleton className="mx-auto h-8 w-48 sm:h-10 sm:w-64" />
            <Skeleton className="mx-auto mt-3 h-4 w-72 sm:mt-4 sm:h-5 sm:w-96" />
          </div>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-4 sm:p-6 dark:bg-slate-800/50"
              >
                <Skeleton className="mb-3 h-8 w-8 rounded-lg sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl" />
                <Skeleton className="h-4 w-3/4 sm:h-5" />
                <Skeleton className="mt-1 h-3 w-full sm:mt-2 sm:h-4" />
                <Skeleton className="mt-1 h-3 w-5/6 sm:h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
