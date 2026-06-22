import { Skeleton } from "@/components/ui/skeleton";

export default function DaftarSkeleton() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8">
        <Skeleton className="mb-6 h-4 w-36 sm:h-5 sm:w-40" />

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-700 dark:bg-slate-900/50">
          <Skeleton className="h-6 w-48 sm:h-7 sm:w-56" />
          <Skeleton className="mt-1 h-3 w-64 sm:mt-2 sm:h-4 sm:w-80" />

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            <div>
              <Skeleton className="h-3 w-32 sm:h-3.5 sm:w-36" />
              <Skeleton className="mt-1.5 h-10 w-full rounded-lg sm:h-12 sm:rounded-xl" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Skeleton className="h-3 w-28 sm:h-3.5 sm:w-32" />
                <Skeleton className="mt-1.5 h-10 w-full rounded-lg sm:h-12 sm:rounded-xl" />
              </div>
              <div>
                <Skeleton className="h-3 w-20 sm:h-3.5 sm:w-24" />
                <Skeleton className="mt-1.5 h-10 w-full rounded-lg sm:h-12 sm:rounded-xl" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Skeleton className="h-3 w-20 sm:h-3.5 sm:w-24" />
                <Skeleton className="mt-1.5 h-10 w-full rounded-lg sm:h-12 sm:rounded-xl" />
              </div>
              <div>
                <Skeleton className="h-3 w-20 sm:h-3.5 sm:w-24" />
                <Skeleton className="mt-1.5 h-10 w-full rounded-lg sm:h-12 sm:rounded-xl" />
              </div>
            </div>

            <div>
              <Skeleton className="h-3 w-28 sm:h-3.5 sm:w-32" />
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                <Skeleton className="h-14 w-full rounded-lg sm:h-16 sm:rounded-xl" />
                <Skeleton className="h-14 w-full rounded-lg sm:h-16 sm:rounded-xl" />
                <Skeleton className="h-14 w-full rounded-lg sm:h-16 sm:rounded-xl" />
              </div>
            </div>

            <div>
              <Skeleton className="h-3 w-24 sm:h-3.5 sm:w-28" />
              <div className="mt-2 flex gap-3">
                <Skeleton className="h-10 w-24 rounded-lg sm:h-12 sm:w-28 sm:rounded-xl" />
                <Skeleton className="h-10 w-24 rounded-lg sm:h-12 sm:w-28 sm:rounded-xl" />
              </div>
            </div>

            <div>
              <Skeleton className="h-3 w-20 sm:h-3.5 sm:w-24" />
              <Skeleton className="mt-1.5 h-10 w-full rounded-lg sm:h-12 sm:rounded-xl" />
            </div>
          </div>

          <Skeleton className="mt-8 h-12 w-full rounded-xl sm:h-14" />
        </div>
      </div>
    </div>
  );
}
