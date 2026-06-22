"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle, FileText } from "lucide-react";
import { createRegistration } from "@/db/actions";
import type { BankAccount } from "@/data/bank-accounts";
import type { DaftarFormFields, Paket } from "./daftar-form-view";

function fmtRupiah(n: number) {
  return `Rp ${n.toLocaleString("id-ID")}`;
}

type Props = {
  bankAccounts: BankAccount[];
  form: DaftarFormFields;
  selectedPaket: Paket | undefined;
  voucherDiscount: number;
  voucherCode: string;
  totalHarga: number;
  finalHarga: number;
  invoiceNo: { full: string; short: string };
  onBack: () => void;
  onConfirm: () => void;
};

export default function DaftarReviewView({
  bankAccounts,
  form,
  selectedPaket,
  voucherDiscount,
  voucherCode,
  totalHarga,
  finalHarga,
  invoiceNo,
  onBack,
  onConfirm,
}: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = async () => {
    setSubmitting(true);
    setError("");
    try {
      await createRegistration({
        nama: form.nama,
        wa: form.wa,
        email: form.email || null,
        program: form.program,
        jenjang: form.jenjang,
        paket: selectedPaket?.label ?? null,
        harga: selectedPaket?.harga ?? null,
        jenisLes: form.jenisLes,
        alamat: form.alamat,
        waktuLes: form.waktuLes,
        durasi: form.durasi,
        orangTua: form.orangTua || null,
        pesan: form.pesan || null,
        invoiceNo: invoiceNo.full,
        voucherCode: voucherCode || null,
        voucherDiscount: voucherDiscount > 0 ? voucherDiscount : null,
      });
    } catch (err) {
      console.error("Gagal menyimpan pendaftaran:", err);
      setError("Gagal menyimpan pendaftaran. Silakan coba lagi.");
      setSubmitting(false);
      return;
    }
    onConfirm();
  };

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <button
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors sm:mb-6 sm:text-sm hover:text-primary dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali ke Form
        </button>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary sm:text-2xl">Konfirmasi Data</h1>
              <p className="text-xs text-zinc-600 sm:text-sm dark:text-slate-400">
                Periksa kembali data pendaftaran Anda
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
              <h2 className="text-xs font-bold text-zinc-900 sm:text-sm dark:text-slate-100">Data Siswa</h2>
              <div className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs text-zinc-600 sm:text-sm dark:text-slate-400">
                <span>Nama</span>
                <span className="text-zinc-900 dark:text-slate-200">: {form.nama}</span>
                <span>WhatsApp</span>
                <span className="text-zinc-900 dark:text-slate-200">: {form.wa}</span>
                {form.email && (
                  <>
                    <span>Email</span>
                    <span className="text-zinc-900 dark:text-slate-200">: {form.email}</span>
                  </>
                )}
                <span>Program</span>
                <span className="text-zinc-900 dark:text-slate-200">: {form.program}</span>
                <span>Jenjang</span>
                <span className="text-zinc-900 dark:text-slate-200">: {form.jenjang}</span>
                <span>Jenis Les</span>
                <span className="text-zinc-900 dark:text-slate-200">: {form.jenisLes}</span>
                <span>Alamat</span>
                <span className="text-zinc-900 dark:text-slate-200">: {form.alamat}</span>
                <span>Waktu Les</span>
                <span className="text-zinc-900 dark:text-slate-200">: {form.waktuLes}</span>
                <span>Durasi</span>
                <span className="text-zinc-900 dark:text-slate-200">: {form.durasi} Menit/Pertemuan</span>
                {form.orangTua && (
                  <>
                    <span>Orang Tua</span>
                    <span className="text-zinc-900 dark:text-slate-200">: {form.orangTua}</span>
                  </>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
              <h2 className="text-xs font-bold text-zinc-900 sm:text-sm dark:text-slate-100">Rincian Biaya</h2>
              <div className="mt-2 space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between text-zinc-600 dark:text-slate-400">
                  <span>{selectedPaket?.label} {form.jenjang}</span>
                  <span>{fmtRupiah(totalHarga)}</span>
                </div>
                {voucherDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Diskon Voucher</span>
                    <span>-{fmtRupiah(voucherDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-zinc-200 pt-1 font-bold text-primary dark:border-slate-700">
                  <span>Grand Total</span>
                  <span>{fmtRupiah(finalHarga)}</span>
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onBack}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition-all hover:border-primary hover:text-primary sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              Perbaiki Data
            </button>
            <button
              onClick={handleConfirm} disabled={submitting}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition-all hover:bg-primary-light hover:shadow-xl disabled:opacity-50"
            >
              <FileText className="h-4 w-4" />
              {submitting ? "Menyimpan..." : "Konfirmasi & Buat Faktur"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
