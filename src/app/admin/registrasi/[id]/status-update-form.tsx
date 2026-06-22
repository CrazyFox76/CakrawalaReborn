"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateRegistrationStatus } from "@/db/actions";

const STATUSES = [
  { value: "baru", label: "Baru" },
  { value: "dibayar", label: "Dibayar" },
  { value: "diproses", label: "Diproses" },
  { value: "selesai", label: "Selesai" },
  { value: "batal", label: "Batal" },
];

type Props = {
  id: number;
  currentStatus: string;
};

export default function StatusUpdateForm({ id, currentStatus }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setSaving(true);
    try {
      await updateRegistrationStatus(id, newStatus);
      router.refresh();
    } catch {
      setStatus(currentStatus);
    }
    setSaving(false);
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-xs text-zinc-500 dark:text-slate-400">Status:</label>
      <select
        value={status}
        onChange={handleChange}
        disabled={saving}
        className="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-xs font-medium outline-none transition-all focus:border-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
      >
        {STATUSES.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>
      {saving && (
        <span className="text-[10px] text-zinc-400">Menyimpan...</span>
      )}
    </div>
  );
}
