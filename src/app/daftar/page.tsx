"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Send, CheckCircle, User, Phone, BookText, Mail, Calendar } from "lucide-react";

const programOptions = [
  "Rumbel Cakrawala (Rumah Belajar)",
  "Cakrawala Home Visit",
  "Cakrakids (PAUD/TK)",
  "Cakra English Centre",
  "Cakra Tech (Coding & IT)",
  "TryOut CBT",
  "Cakra Prestasi (Olimpiade)",
  "Cakra Kedinasan (Cakdin)",
  "Cakra Skills Up",
  "Lainnya",
];

export default function Daftar() {
  const [form, setForm] = useState({
    nama: "",
    wa: "",
    email: "",
    program: "",
    jenjang: "",
    pesan: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Pendaftaran Baru Cakrawala EduCentre*%0A%0A*Nama:* ${form.nama}%0A*WA:* ${form.wa}%0A*Email:* ${form.email}%0A*Program:* ${form.program}%0A*Jenjang:* ${form.jenjang}%0A*Pesan:* ${form.pesan}`;
    window.open(`https://wa.me/6281324868790?text=${text}`, "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-dvh bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-lg px-4 py-20 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-slate-100">Pendaftaran Terkirim!</h1>
          <p className="mt-3 text-zinc-600 dark:text-slate-400">Data Anda sudah kami terima. Tim kami akan menghubungi via WhatsApp dalam 1x24 jam.</p>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm font-semibold text-white transition-colors hover:bg-primary-light">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link href="/" className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors sm:mb-6 sm:text-sm hover:text-primary dark:text-slate-400 dark:hover:text-primary">
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali
        </Link>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <h1 className="text-lg font-bold text-primary sm:text-3xl">Form Pendaftaran</h1>
          <p className="mt-1 text-xs text-zinc-600 sm:mt-2 sm:text-sm dark:text-slate-400">Isi data di bawah, dan kami akan menghubungi Anda via WhatsApp.</p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-8 sm:space-y-5">
            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                <User className="h-4 w-4" /> Nama Lengkap
              </label>
              <input type="text" name="nama" required value={form.nama} onChange={handleChange} placeholder="Masukkan nama lengkap" className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500" />
            </div>

            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                <Phone className="h-4 w-4" /> Nomor WhatsApp
              </label>
              <input type="tel" name="wa" required value={form.wa} onChange={handleChange} placeholder="08xxxxxxxxxx" className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500" />
            </div>

            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                <Mail className="h-4 w-4" /> Email (opsional)
              </label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="contoh@email.com" className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <BookText className="h-4 w-4" /> Program
                </label>
                <select name="program" required value={form.program} onChange={handleChange} className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm text-zinc-700 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <option value="">Pilih program</option>
                  {programOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                  <Calendar className="h-4 w-4" /> Jenjang
                </label>
                <select name="jenjang" required value={form.jenjang} onChange={handleChange} className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm text-zinc-700 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <option value="">Pilih jenjang</option>
                  <option>PAUD/TK</option>
                  <option>SD</option>
                  <option>SMP</option>
                  <option>SMA</option>
                  <option>Umum/Mahasiswa</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-700 sm:mb-1.5 sm:gap-2 sm:text-sm dark:text-slate-300">
                Pesan / Catatan (opsional)
              </label>
              <textarea name="pesan" value={form.pesan} onChange={handleChange} rows={3} placeholder="Tulis kebutuhan atau pertanyaan Anda..." className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500" />
            </div>

            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm font-semibold text-white shadow-lg shadow-primary/15 transition-all hover:bg-primary-light hover:shadow-xl">
              <Send className="h-4 w-4" />
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
