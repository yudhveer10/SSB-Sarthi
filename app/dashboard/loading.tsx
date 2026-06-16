export default function DashboardLoading() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-6 sm:px-7 lg:px-8">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_256px_256px]">
        <div>
          <div className="h-[174px] rounded-lg bg-[var(--color-surface)] p-6">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="mt-5 h-5 w-2/3" />
            <div className="mt-8 flex gap-3">
              <Skeleton className="h-12 w-36" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
        <SkeletonPanel />
        <SkeletonPanel />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
        <SkeletonPanel rows={4} />
        <SkeletonPanel rows={5} />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
        <SkeletonPanel rows={5} />
        <SkeletonPanel rows={4} />
      </div>
    </section>
  );
}

function SkeletonPanel({ rows = 3 }: { rows?: number }) {
  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
      <Skeleton className="h-6 w-44" />
      <div className="mt-5 space-y-3">
        {Array.from({ length: rows }).map((_, index) => (
          <Skeleton key={index} className="h-10 w-full" />
        ))}
      </div>
    </section>
  );
}

function SkeletonCard() {
  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-4">
        <Skeleton className="h-14 w-14 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="mt-3 h-8 w-24" />
        </div>
      </div>
      <Skeleton className="mt-7 h-2 w-full" />
      <Skeleton className="mt-4 h-4 w-32" />
    </section>
  );
}

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-[#edf1f5] ${className}`} />;
}
