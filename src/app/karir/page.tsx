import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, GraduationCap, Users, Target, Heart, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Karir | Cakrawala EduCentre",
  description: "Bergabunglah dengan tim Cakrawala EduCentre. Tersedia posisi tutor, admin, marketing, dan lainnya.",
};

const positions = [
  {
    title: "Tutor Privat (Semua Mapel)",
    type: "Freelance / Part-time",
    location: "Jabodetabek",
    desc: "Mengajar les privat untuk siswa SD/SMP/SMA sesuai bidang keahlian. Jadwal fleksibel, honor kompetitif.",
  },
  {
    title: "Admin & Customer Service",
    type: "Full-time",
    location: "Bekasi",
    desc: "Menangani pendaftaran siswa, komunikasi dengan orang tua, dan administrasi operasional.",
  },
  {
    title: "Creative Content & Social Media",
    type: "Full-time / Remote",
    location: "Bekasi",
    desc: "Membuat konten edukatif untuk Instagram, TikTok, dan website. Mengelola brand awareness Cakrawala.",
  },
  {
    title: "Marketing & Business Development",
    type: "Full-time",
    location: "Bekasi",
    desc: "Mengembangkan strategi pemasaran, menjalin kemitraan dengan sekolah dan institusi.",
  },
];

const benefits = [
  { icon: GraduationCap, title: "Pengembangan Diri", desc: "Pelatihan dan sertifikasi untuk meningkatkan kompetensi" },
  { icon: Users, title: "Tim Solid", desc: "Lingkungan kerja yang suportif dan kolaboratif" },
  { icon: Target, title: "Jenjang Karir", desc: "Kesempatan berkembang bersama perusahaan" },
  { icon: Heart, title: "Kesejahteraan", desc: "Honor kompetitif, bonus, dan tunjangan" },
];

export default function Karir() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-primary sm:mb-6 sm:text-sm dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali ke Beranda
        </Link>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <h1 className="text-xl font-bold text-primary sm:text-4xl">Karir di Cakrawala EduCentre</h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-base dark:text-slate-400">
            Ingin berkontribusi dalam dunia pendidikan? Bergabunglah dengan tim Cakrawala EduCentre
            dan bersama-sama kita mencetak generasi unggul dan kompeten untuk Indonesia.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                <b.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-2 text-sm font-semibold text-zinc-900 dark:text-slate-100">{b.title}</h3>
                <p className="mt-0.5 text-xs text-zinc-500 dark:text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-8 text-lg font-bold text-zinc-900 sm:text-xl dark:text-slate-100">Posisi Tersedia</h2>
          <div className="mt-4 space-y-4">
            {positions.map((p) => (
              <div key={p.title} className="rounded-xl border border-zinc-200 bg-white p-4 sm:p-6 dark:border-slate-700 dark:bg-slate-800/50">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 sm:text-base dark:text-slate-100">{p.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{p.type}</span>
                      <span className="rounded-full bg-zinc-50 px-2.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:bg-slate-700 dark:text-slate-400">{p.location}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs text-zinc-500 sm:text-sm dark:text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center sm:p-8 dark:border-slate-700 dark:bg-slate-800/50">
            <Send className="mx-auto h-6 w-6 text-primary sm:h-8 sm:w-8" />
            <h2 className="mt-3 text-lg font-bold text-zinc-900 dark:text-slate-100">Tertarik Bergabung?</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-slate-400">
              Kirim CV dan portofolio Anda ke WhatsApp HRD Cakrawala. Kami akan menghubungi Anda untuk proses selanjutnya.
            </p>
            <a
              href="https://wa.me/6281324868790?text=Halo%20saya%20tertarik%20bergabung%20dengan%20Cakrawala%20EduCentre"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              <MessageCircle className="h-4 w-4" />
              Kirim Lamaran via WA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
