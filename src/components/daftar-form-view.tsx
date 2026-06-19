"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft, User, Phone, Mail, BookText, Calendar,
  Clock, MapPin, FileText, Tag,
} from "lucide-react";
import { createRegistration, validateVoucher, redeemVoucher } from "@/db/actions";
import type { BankAccount } from "@/data/bank-accounts";
import type { Price } from "@/data/prices";

export type Paket = { label: string; sesi: number; harga: number };

function buildPaketMap(rows: Price[]): Record<string, Paket[]> {
  const map: Record<string, Paket[]> = {};
  for (const r of rows) {
    if (!map[r.jenjang]) map[r.jenjang] = [];
    map[r.jenjang].push({ label: `Paket ${r.sesi} Sesi`, sesi: r.sesi, harga: r.harga });
  }
  return map;
}

const JENIS_LES = ["Online (Jarak Jauh)", "Tatap Muka (Home Visit)"];

const bulanIndo = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

function fmtRupiah(n: number) {
  return `Rp ${n.toLocaleString("id-ID")}`;
}

function generateInvoiceNumber() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const rand = String(Math.floor(Math.random() * 900) + 100);
  const seq = `${day}${month}${rand}`;
  const bln = bulanIndo[now.getMonth()].toUpperCase();
  return {
    full: `NO. ${seq}/NASIONAL/${bln}/${now.getFullYear()}`,
    short: seq,
  };
}

export type DaftarFormFields = {
  nama: string;
  wa: string;
  email: string;
  program: string;
  jenjang: string;
  paketIndex: string;
  jenisLes: string;
  alamat: string;
  waktuLes: string;
  durasi: string;
  orangTua: string;
  pesan: string;
};

export type DaftarFormSubmission = {
  invoiceNo: { full: string; short: string };
  form: DaftarFormFields;
  voucherDiscount: number;
  totalHarga: number;
  finalHarga: number;
  selectedPaket: Paket | undefined;
};

type Props = {
  bankAccounts: BankAccount[];
  prices: Price[];
  onSuccess: (data: DaftarFormSubmission) => void;
};

export default function DaftarFormView({ bankAccounts, prices, onSuccess }: Props) {
  const [form, setForm] = useState<DaftarFormFields>({
    nama: "",
    wa: "",
    email: "",
    program: "",
    jenjang: "",
    paketIndex: "0",
    jenisLes: JENIS_LES[0],
    alamat: "",
    waktuLes: "",
    durasi: "90",
    orangTua: "",
    pesan: "",
  });

  const [voucherCode, setVoucherCode] = useState("");
  const [voucherDiscount, setVoucherDiscount] = useState(0);
  const [voucherError, setVoucherError] = useState("");
  const [voucherApplied, setVoucherApplied] = useState("");

  const [invoiceNo] = useState(generateInvoiceNumber);

  const PAKET_MAP = useMemo(() => buildPaketMap(prices), [prices]);
  const paketList = PAKET_MAP[form.jenjang] || [];
  const selectedPaket = paketList[Number(form.paketIndex)];

  const totalHarga = selectedPaket?.harga ?? 0;
  const finalHarga = Math.max(0, totalHarga - voucherDiscount);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleApplyVoucher = async () => {
    if (!voucherCode.trim()) return;
    setVoucherError("");
    const result = await validateVoucher(voucherCode.trim(), totalHarga);
    if (!result.valid) {
      setVoucherError(result.error);
      setVoucherDiscount(0);
      setVoucherApplied("");
      return;
    }
    setVoucherDiscount(result.discount);
    setVoucherApplied(result.code);
    await redeemVoucher(result.code);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      });
    } catch (err) {
      console.error("Gagal menyimpan pendaftaran:", err);
    }
    onSuccess({
      invoiceNo,
      form,
      voucherDiscount,
      totalHarga,
      finalHarga,
      selectedPaket,
    });
  };

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors sm:mb-6 sm:text-sm hover:text-primary dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali
        </Link>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <h1 className="text-lg font-bold text-primary sm:text-3xl">Form Pendaftaran</h1>
          <p className="mt-1 text-xs text-zinc-600 sm:mt-2 sm:text-sm dark:text-slate-400">
            Isi data lengkap untuk mendapatkan faktur pembayaran.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-8 sm:space-y-5">
            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                <User className="h-4 w-4" /> Nama Lengkap Siswa
              </label>
              <input
                type="text" name="nama" required value={form.nama} onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <Phone className="h-4 w-4" /> Nomor WhatsApp
                </label>
                <input
                  type="tel" name="wa" required value={form.wa} onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
                />
              </div>
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <Mail className="h-4 w-4" /> Email (opsional)
                </label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="contoh@email.com"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <BookText className="h-4 w-4" /> Program
                </label>
                <select name="program" required value={form.program} onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm text-zinc-700 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <option value="">Pilih program</option>
                  <option>Les Privat (Semua Mapel)</option>
                  <option>Bimbel Akademik</option>
                  <option>Bahasa Inggris</option>
                  <option>Coding & IT</option>
                  <option>TryOut CBT</option>
                  <option>Olimpiade</option>
                  <option>Persiapan SNBT/UTBK</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <Calendar className="h-4 w-4" /> Jenjang
                </label>
                <select name="jenjang" required value={form.jenjang} onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm text-zinc-700 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <option value="">Pilih jenjang</option>
                  <option>PAUD/TK</option>
                  <option>SD</option>
                  <option>SMP</option>
                  <option>SMA</option>
                  <option>Umum/Mahasiswa</option>
                </select>
              </div>
            </div>

            {paketList.length > 0 && (
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <Clock className="h-4 w-4" /> Paket Pertemuan
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {paketList.map((p, i) => (
                    <label
                      key={i}
                      className={`flex cursor-pointer flex-col rounded-lg border p-3 text-center transition-all sm:rounded-xl ${
                        form.paketIndex === String(i)
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-slate-700 dark:bg-slate-800"
                      }`}
                    >
                      <input
                        type="radio" name="paketIndex" value={String(i)}
                        checked={form.paketIndex === String(i)}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="text-xs font-semibold text-zinc-900 sm:text-sm dark:text-slate-200">
                        {p.label}
                      </span>
                      <span className="mt-0.5 text-xs text-zinc-500 dark:text-slate-400">{p.sesi} pertemuan</span>
                      <span className="mt-0.5 text-xs font-bold text-primary">{fmtRupiah(p.harga)}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                Jenis Les
              </label>
              <div className="flex gap-3">
                {JENIS_LES.map((j) => (
                  <label
                    key={j}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-all sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm ${
                      form.jenisLes === j
                        ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    <input
                      type="radio" name="jenisLes" value={j}
                      checked={form.jenisLes === j}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {j}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                <MapPin className="h-4 w-4" /> Alamat
              </label>
              <input
                type="text" name="alamat" required value={form.alamat} onChange={handleChange}
                placeholder="Alamat lengkap"
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <Clock className="h-4 w-4" /> Waktu Les
                </label>
                <input
                  type="text" name="waktuLes" required value={form.waktuLes} onChange={handleChange}
                  placeholder="Senin Rabu Jumat, 18.30 WIB"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
                />
              </div>
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <Clock className="h-4 w-4" /> Durasi (menit)
                </label>
                <select name="durasi" value={form.durasi} onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm text-zinc-700 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <option value="30">30 Menit</option>
                  <option value="60">60 Menit</option>
                  <option value="90">90 Menit</option>
                  <option value="120">120 Menit</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                <User className="h-4 w-4" /> Nama Orang Tua / Wali
              </label>
              <input
                type="text" name="orangTua" value={form.orangTua} onChange={handleChange}
                placeholder="Nama orang tua atau wali"
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
              />
            </div>

            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                Pesan / Catatan (opsional)
              </label>
              <textarea
                name="pesan" value={form.pesan} onChange={handleChange} rows={3}
                placeholder="Tulis kebutuhan atau pertanyaan Anda..."
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
              />
            </div>

            {!voucherApplied && (
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <Tag className="h-4 w-4" /> Kode Voucher (opsional)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text" value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    placeholder="Masukkan kode voucher"
                    className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
                  />
                  <button
                    type="button" onClick={handleApplyVoucher}
                    className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-light sm:rounded-xl sm:px-5 sm:text-sm"
                  >
                    Pakai
                  </button>
                </div>
                {voucherError && (
                  <p className="mt-1 text-xs text-red-500">{voucherError}</p>
                )}
              </div>
            )}
            {voucherApplied && (
              <div className="flex items-center justify-between rounded-lg bg-green-50 p-3 text-xs dark:bg-green-900/20">
                <span className="text-green-700 dark:text-green-300">
                  ✅ Voucher {voucherApplied} diterapkan! Diskon {fmtRupiah(voucherDiscount)}
                </span>
                <button
                  type="button" onClick={() => { setVoucherApplied(""); setVoucherDiscount(0); setVoucherCode(""); }}
                  className="text-green-600 hover:text-green-800 dark:text-green-400"
                >
                  Hapus
                </button>
              </div>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-primary/15 transition-all hover:bg-primary-light hover:shadow-xl sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm"
            >
              <FileText className="h-4 w-4" />
              Buat Faktur Pembayaran
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
