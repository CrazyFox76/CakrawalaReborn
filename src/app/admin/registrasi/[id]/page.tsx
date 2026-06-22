import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getRegistrationById } from "@/db/actions";
import StatusUpdateForm from "./status-update-form";

function fmtRupiah(n: number | null) {
  if (n === null) return "-";
  return `Rp ${n.toLocaleString("id-ID")}`;
}

function formatDate(d: Date | null) {
  if (!d) return "-";
  return new Date(d).toLocaleString("id-ID", {
    dateStyle: "long",
    timeStyle: "short",
  });
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AdminRegistrasiDetailPage({ params }: Props) {
  const { id } = await params;
  const reg = await getRegistrationById(Number(id));

  if (!reg) notFound();

  const sendWA = (reg: {
    nama: string; wa: string; invoiceNo: string | null;
    program: string | null; jenjang: string | null; paket: string | null;
    harga: number | null; jenisLes: string | null; alamat: string | null;
    waktuLes: string | null; durasi: string | null; voucherDiscount: number | null;
  }) => {
    const total = reg.harga ?? 0;
    const discount = reg.voucherDiscount ?? 0;
    const final = total - discount;
    const header =
      `*INVOICE PEMBAYARAN LES*%0A${reg.invoiceNo ?? ""}%0A%0A` +
      `--- KETERANGAN SISWA ---%0A` +
      `Nama: ${reg.nama}%0A` +
      `Kelas: ${reg.jenjang ?? "-"}%0A` +
      `Alamat: ${reg.alamat ?? "-"}%0A` +
      `Jenis Les: ${reg.jenisLes ?? "-"} | ${reg.program ?? "-"}%0A` +
      `Waktu: ${reg.waktuLes ?? "-"}%0A` +
      `Durasi: ${reg.durasi ?? "-"} Menit/Pertemuan%0A%0A` +
      `--- RINCIAN BIAYA ---%0A` +
      `${reg.paket ?? "-"}: ${fmtRupiah(total)}%0A` +
      (discount > 0 ? `Diskon Voucher: ${fmtRupiah(discount)}%0A` : "") +
      `*Grand Total: ${fmtRupiah(final)}*%0A%0A` +
      `--- METODE PEMBAYARAN ---%0A` +
      `BCA: 6611335226%0Aa/n: Citarani Anggraini%0A%0A` +
      `Kirim bukti bayar ke +62 813-2486-8790`;
    return `https://wa.me/6281324868790?text=${encodeURIComponent(header)}`;
  };

  return (
    <div>
      <Link
        href="/admin/registrasi"
        className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-primary sm:text-sm"
      >
        <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        Kembali
      </Link>

      <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-lg font-bold text-zinc-900 sm:text-2xl dark:text-slate-100">
              {reg.nama}
            </h1>
            <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
              {reg.invoiceNo ?? "-"} &middot; {formatDate(reg.createdAt)}
            </p>
          </div>
          <StatusUpdateForm id={reg.id} currentStatus={reg.status ?? "baru"} />
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <Section title="Data Siswa">
              <Row label="Nama" value={reg.nama} />
              <Row label="WhatsApp" value={reg.wa} />
              <Row label="Email" value={reg.email ?? "-"} />
              <Row label="Program" value={reg.program} />
              <Row label="Jenjang" value={reg.jenjang} />
              <Row label="Paket" value={reg.paket ?? "-"} />
              <Row label="Jenis Les" value={reg.jenisLes ?? "-"} />
              <Row label="Alamat" value={reg.alamat ?? "-"} />
              <Row label="Waktu Les" value={reg.waktuLes ?? "-"} />
              <Row label="Durasi" value={`${reg.durasi ?? "-"} Menit`} />
              <Row label="Orang Tua" value={reg.orangTua ?? "-"} />
            </Section>
          </div>

          <div className="space-y-4">
            <Section title="Rincian Biaya">
              <Row label="Paket" value={reg.paket ?? "-"} />
              <Row label="Harga" value={fmtRupiah(reg.harga)} />
              <Row label="Diskon Voucher" value={reg.voucherDiscount ? fmtRupiah(reg.voucherDiscount) : "0"} />
              <Row
                label="Grand Total"
                value={fmtRupiah((reg.harga ?? 0) - (reg.voucherDiscount ?? 0))}
              />
            </Section>

            {reg.pesan && (
              <Section title="Catatan">
                <p className="text-xs text-zinc-600 sm:text-sm dark:text-slate-400">
                  {reg.pesan}
                </p>
              </Section>
            )}

            <a
              href={sendWA({
                nama: reg.nama, wa: reg.wa, invoiceNo: reg.invoiceNo,
                program: reg.program, jenjang: reg.jenjang, paket: reg.paket,
                harga: reg.harga, jenisLes: reg.jenisLes, alamat: reg.alamat,
                waktuLes: reg.waktuLes, durasi: reg.durasi, voucherDiscount: reg.voucherDiscount,
              })}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-primary-light sm:text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Kirim Invoice via WA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
      <h2 className="text-xs font-bold text-zinc-900 sm:text-sm dark:text-slate-100">
        {title}
      </h2>
      <div className="mt-2 space-y-1">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-xs sm:text-sm">
      <span className="text-zinc-500 dark:text-slate-400">{label}</span>
      <span className="text-right font-medium text-zinc-900 dark:text-slate-200">
        {value}
      </span>
    </div>
  );
}
