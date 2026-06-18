import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
};

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Cari blog, program...",
}: SearchInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div className="relative flex w-full max-w-2xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-12 pr-4 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:py-4 sm:pl-14 sm:pr-6 sm:text-base dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
      />
      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400 sm:pl-5">
        <Search className="h-5 w-5" />
      </span>
      <button
        onClick={onSubmit}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-light sm:px-5 sm:py-2 sm:text-sm"
      >
        Cari
      </button>
    </div>
  );
}
