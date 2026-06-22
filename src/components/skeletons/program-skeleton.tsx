import { Skeleton } from "@/components/ui/skeleton";

export default function ProgramSkeleton() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Skeleton className="mb-4 h-4 w-36 sm:mb-6 sm:h-5" />

        <div className="text-center">
          <Skeleton className="mx-auto h-8 w-48 sm:h-10 sm:w-64" />
          <Skeleton className="mx-auto mt-3 h-3 w-56 sm:mt-4 sm:h-5 sm:w-96" />
        </div>

        {Array.from({ length: 3 }).map((_, catIdx) => (
          <div key={catIdx} className="mt-10 sm:mt-16">
            <Skeleton className="h-5 w-40 sm:h-6 sm:w-56" />
            <Skeleton className="mt-1 h-3 w-64 sm:mt-2 sm:h-4 sm:w-96" />

            <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, cardIdx) => (
                <div
                  key={cardIdx}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 dark:border-slate-700/50 dark:bg-slate-800/50"
                >
                  <div className="mb-3 flex items-center gap-3 sm:mb-5 sm:gap-4">
                    <Skeleton className="h-10 w-10 rounded-lg sm:h-12 sm:w-12 sm:rounded-xl" />
                    <Skeleton className="h-4 w-16 rounded-full sm:h-5 sm:w-20" />
                  </div>
                  <Skeleton className="h-5 w-3/4 sm:h-6" />
                  <Skeleton className="mt-2 h-3 w-full sm:mt-3 sm:h-4" />
                  <Skeleton className="mt-1 h-3 w-5/6 sm:h-4" />
                  <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 sm:mt-6 sm:pt-4 dark:border-slate-700">
                    <Skeleton className="h-3 w-16 sm:h-3.5 sm:w-20" />
                    <Skeleton className="h-3 w-20 sm:h-3.5 sm:w-24" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
