import Link from "next/link";
import { getRegistrations } from "@/db/actions";
import { ExternalLink } from "lucide-react";

function fmtRupiah(n: number | null) {
  if (n === null) return "-";
  return `Rp ${n.toLocaleString("id-ID")}`;
}

const statusStyles: Record<string, string> = {
  baru: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  dibayar: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  diproses: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  selesai: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  batal: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

export default async function AdminRegistrasiPage() {
  const registrations = await getRegistrations();

  return (
    <div>
      <h1 className="text-lg font-bold text-zinc-900 sm:text-2xl dark:text-slate-100">
        Data Registrasi
      </h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-slate-400">
        Total {registrations.length} pendaftar
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-zinc-200 text-zinc-500 dark:border-slate-700 dark:text-slate-400">
              <th className="pb-2 pr-3 font-medium">No</th>
              <th className="pb-2 pr-3 font-medium">Tanggal</th>
              <th className="pb-2 pr-3 font-medium">Nama</th>
              <th className="pb-2 pr-3 font-medium">WA</th>
              <th className="pb-2 pr-3 font-medium">Program</th>
              <th className="pb-2 pr-3 font-medium">Jenjang</th>
              <th className="pb-2 pr-3 font-medium">Total</th>
              <th className="pb-2 pr-3 font-medium">Status</th>
              <th className="pb-2 font-medium" />
            </tr>
          </thead>
          <tbody>
            {registrations.length === 0 && (
              <tr>
                <td colSpan={9} className="py-8 text-center text-zinc-400">
                  Belum ada pendaftar
                </td>
              </tr>
            )}
            {registrations.map((r, i) => (
              <tr
                key={r.id}
                className="border-b border-zinc-100 text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800/50"
              >
                <td className="py-2.5 pr-3 text-zinc-400">{i + 1}</td>
                <td className="py-2.5 pr-3 text-zinc-500">
                  {r.createdAt
                    ? new Date(r.createdAt).toLocaleDateString("id-ID")
                    : "-"}
                </td>
                <td className="py-2.5 pr-3 font-medium">{r.nama}</td>
                <td className="py-2.5 pr-3">{r.wa}</td>
                <td className="py-2.5 pr-3">{r.program}</td>
                <td className="py-2.5 pr-3">{r.jenjang}</td>
                <td className="py-2.5 pr-3">{fmtRupiah(r.harga)}</td>
                <td className="py-2.5 pr-3">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium sm:text-xs ${
                      statusStyles[r.status ?? "baru"] ?? ""
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="py-2.5">
                  <Link
                    href={`/admin/registrasi/${r.id}`}
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary-light"
                  >
                    Detail
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
