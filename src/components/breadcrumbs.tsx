import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="mb-4 flex items-center gap-1.5 text-xs text-zinc-400 sm:mb-6 sm:gap-2 sm:text-sm" aria-label="Breadcrumb">
      <Link href="/" className="transition-colors hover:text-primary">Beranda</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5 sm:gap-2">
          <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-primary">{item.label}</Link>
          ) : (
            <span className="text-zinc-600 dark:text-slate-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
