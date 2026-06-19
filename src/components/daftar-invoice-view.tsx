"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, Banknote } from "lucide-react";
import { terbilang } from "@/lib/terbilang";
import type { BankAccount } from "@/data/bank-accounts";
import type { DaftarFormFields, Paket } from "./daftar-form-view";

const bulanIndo = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

function fmtRupiah(n: number) {
  return `Rp ${n.toLocaleString("id-ID")}`;
}

type Props = {
  invoiceNo: { full: string; short: string };
  bankAccounts: BankAccount[];
  form: DaftarFormFields;
  voucherDiscount: number;
  finalHarga: number;
  totalHarga: number;
  selectedPaket: Paket | undefined;
  onBack: () => void;
};

export default function DaftarInvoiceView({
  invoiceNo, bankAccounts, form, voucherDiscount,
  finalHarga, totalHarga, selectedPaket, onBack,
}: Props) {
  const now = new Date();
  const tgl = `${now.getDate()} ${bulanIndo[now.getMonth()]} ${now.getFullYear()}`;
  const bank = bankAccounts[0];

  const sendWA = () => {
    const paymentInfo = bank
      ? `${bank.bankName}: ${bank.accountNumber}%0Aa/n: ${bank.accountHolder}`
      : "BCA: 6611335226%0Aa/n: Citarani Anggraini";
    const header =
      `*INVOICE PEMBAYARAN LES*%0A${invoiceNo.full}%0A%0A` +
      `*Tanggal:* ${tgl}%0A%0A` +
      `--- KETERANGAN SISWA ---%0A` +
      `Nama: ${form.nama}%0AKelas: ${form.jenjang}%0A` +
      `Alamat: ${form.alamat}%0AJenis Les: ${form.jenisLes}%0A` +
      `Waktu: ${form.waktuLes}%0ADurasi: ${form.durasi} Menit/Pertemuan%0A%0A` +
      `--- RINCIAN BIAYA ---%0A` +
      `${selectedPaket?.label} ${form.jenjang}: ${fmtRupiah(totalHarga)}%0A` +
      (voucherDiscount > 0 ? `Diskon Voucher: ${fmtRupiah(voucherDiscount)}%0A` : "") +
      `*Grand Total: ${fmtRupiah(finalHarga)}*%0A%0A` +
      `--- METODE PEMBAYARAN ---%0A` +
      `${paymentInfo}%0A%0A` +
      `Kirim bukti bayar ke +62 813-2486-8790`;
    window.open(`https://wa.me/6281324868790?text=${encodeURIComponent(header)}`, "_blank");
  };

  return (
    <div className="min-h-dvh bg-zinc-50 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <button
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors sm:mb-6 sm:text-sm hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali ke Form
        </button>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="border-b border-zinc-200 pb-4 text-center dark:border-slate-700">
            <h1 className="text-lg font-bold text-primary sm:text-2xl">FAKTUR PEMBAYARAN LES</h1>
            <p className="mt-1 text-xs font-semibold text-zinc-600 sm:text-sm dark:text-slate-400">
              {invoiceNo.full}
            </p>
            <p className="mt-0.5 text-[10px] text-zinc-400 sm:text-xs">Tanggal: {tgl}</p>
          </div>

          <div className="mt-4 space-y-1 text-xs sm:mt-6 sm:text-sm">
            <h2 className="font-bold text-zinc-900 dark:text-slate-100">Keterangan Siswa</h2>
            <div className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-zinc-600 sm:gap-x-4 dark:text-slate-400">
              <span className="text-zinc-500">Nama Siswa</span>
              <span className="text-zinc-900 dark:text-slate-200">: {form.nama}</span>
              <span className="text-zinc-500">Kelas</span>
              <span className="text-zinc-900 dark:text-slate-200">: {form.jenjang}</span>
              <span className="text-zinc-500">Alamat</span>
              <span className="text-zinc-900 dark:text-slate-200">: {form.alamat}</span>
              <span className="text-zinc-500">Jenis Les</span>
              <span className="text-zinc-900 dark:text-slate-200">: {form.jenisLes} | {form.program}</span>
              <span className="text-zinc-500">Waktu Les</span>
              <span className="text-zinc-900 dark:text-slate-200">: {form.waktuLes}</span>
              <span className="text-zinc-500">Durasi Les</span>
              <span className="text-zinc-900 dark:text-slate-200">: {form.durasi} Menit/Pertemuan</span>
            </div>
          </div>

          <div className="mt-4 space-y-1 text-xs sm:mt-6 sm:text-sm">
            <h2 className="font-bold text-zinc-900 dark:text-slate-100">Penanggung Jawab</h2>
            <div className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-zinc-600 sm:gap-x-4 dark:text-slate-400">
              <span className="text-zinc-500">Nama</span>
              <span className="text-zinc-900 dark:text-slate-200">: Citarani Anggraeni, M.Pd</span>
              <span className="text-zinc-500">Selaku</span>
              <span className="text-zinc-900 dark:text-slate-200">: Direktur Utama Cakrawala EduCentre</span>
              <span className="text-zinc-500">No. HP</span>
              <span className="text-zinc-900 dark:text-slate-200">: +62 813-2486-8790</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <h2 className="text-xs font-bold text-zinc-900 sm:text-sm dark:text-slate-100">Rincian Biaya</h2>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full min-w-[400px] text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 text-left text-zinc-500 dark:border-slate-700 dark:text-slate-400">
                    <th className="py-1.5 pr-2 font-medium sm:py-2">No</th>
                    <th className="py-1.5 pr-2 font-medium sm:py-2">Keterangan</th>
                    <th className="py-1.5 pr-2 text-right font-medium sm:py-2">Harga</th>
                    <th className="py-1.5 pr-2 text-right font-medium sm:py-2">Potongan</th>
                    <th className="py-1.5 text-right font-medium sm:py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-100 text-zinc-900 dark:border-slate-700 dark:text-slate-200">
                    <td className="py-1.5 pr-2 sm:py-2">1</td>
                    <td className="py-1.5 pr-2 sm:py-2">{selectedPaket?.label} {form.jenjang}</td>
                    <td className="py-1.5 pr-2 text-right sm:py-2">{fmtRupiah(totalHarga)}</td>
                    <td className="py-1.5 pr-2 text-right sm:py-2">-</td>
                    <td className="py-1.5 text-right sm:py-2">{fmtRupiah(totalHarga)}</td>
                  </tr>
                  <tr className="border-b border-zinc-100 text-zinc-500 dark:border-slate-700 dark:text-slate-400">
                    <td className="py-1.5 pr-2 sm:py-2">2</td>
                    <td className="py-1.5 pr-2 sm:py-2">Biaya Administrasi</td>
                    <td className="py-1.5 pr-2 text-right sm:py-2">-</td>
                    <td className="py-1.5 pr-2 text-right sm:py-2">-</td>
                    <td className="py-1.5 text-right sm:py-2">0</td>
                  </tr>
                  <tr className="border-b border-zinc-100 text-zinc-500 dark:border-slate-700 dark:text-slate-400">
                    <td className="py-1.5 pr-2 sm:py-2">3</td>
                    <td className="py-1.5 pr-2 sm:py-2">Biaya Lain-lain</td>
                    <td className="py-1.5 pr-2 text-right sm:py-2">-</td>
                    <td className="py-1.5 pr-2 text-right sm:py-2">-</td>
                    <td className="py-1.5 text-right sm:py-2">0</td>
                  </tr>
                  <tr className="text-zinc-500 dark:text-slate-400">
                    <td className="py-1.5 pr-2 sm:py-2">4</td>
                    <td className="py-1.5 pr-2 sm:py-2">Potongan Harga</td>
                    <td className="py-1.5 pr-2 text-right sm:py-2">-</td>
                    <td className="py-1.5 pr-2 text-right sm:py-2">-</td>
                    <td className="py-1.5 text-right sm:py-2">{voucherDiscount ? `(${fmtRupiah(voucherDiscount)})` : "0"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-3 space-y-1 border-t border-zinc-200 pt-3 text-xs sm:mt-4 sm:pt-4 sm:text-sm dark:border-slate-700">
              <div className="flex justify-between text-zinc-600 dark:text-slate-400">
                <span>Total {selectedPaket?.label}</span>
                <span>{fmtRupiah(totalHarga)}</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Total Biaya Administrasi</span>
                <span>Rp 0</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Total Biaya Lain-lain</span>
                <span>Rp 0</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Total Potongan Harga</span>
                <span>{voucherDiscount ? fmtRupiah(voucherDiscount) : "Rp 0"}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-primary">
                <span>Grand Total</span>
                <span>{fmtRupiah(finalHarga)}</span>
              </div>
            </div>
          </div>

          {bank && (
            <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs sm:mt-6 sm:p-5 sm:text-sm dark:border-slate-700 dark:bg-slate-800/50">
              <h2 className="flex items-center gap-2 font-bold text-zinc-900 dark:text-slate-100">
                <Banknote className="h-4 w-4" /> Metode Pembayaran
              </h2>
              <p className="mt-2 leading-relaxed text-zinc-600 dark:text-slate-400">
                Pembayaran dilakukan melalui <strong>Rekening {bank.bankName}: {bank.accountNumber}</strong> a/n{" "}
                <strong>{bank.accountHolder}</strong> dengan total biaya{" "}
                <strong>{fmtRupiah(finalHarga)}</strong> ({terbilang(finalHarga)}) dibayarkan
                sebelum pertemuan pertama dimulai.
              </p>
              <p className="mt-2 text-zinc-600 dark:text-slate-400">
                Seluruh bukti pembayaran dikirimkan ke Official WhatsApp Cakrawala EduCentre:{" "}
                <strong>+62 813-2486-8790</strong>
              </p>
            </div>
          )}

          <div className="mt-6 text-right text-xs sm:mt-8 sm:text-sm">
            <p className="text-zinc-600 dark:text-slate-400">Bekasi, {tgl}</p>
            <p className="mt-8 font-semibold text-zinc-900 dark:text-slate-200">Citarani Anggraeni</p>
            <p className="text-xs text-zinc-500">Penanggung Jawab</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row dark:border-slate-700">
            <button
              onClick={sendWA}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light"
            >
              <MessageCircle className="h-4 w-4" />
              Kirim Invoice via WhatsApp
            </button>
            <Link
              href="/"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition-all hover:border-primary hover:text-primary sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
