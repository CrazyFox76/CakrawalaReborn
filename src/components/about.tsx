import { GraduationCap, Users, Target, Award } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: GraduationCap,
      title: "Tutor Profesional",
      desc: "Berpengalaman dan tersertifikasi di bidangnya",
    },
    {
      icon: Target,
      title: "Kurikulum Terarah",
      desc: "Materi disesuaikan dengan kebutuhan siswa",
    },
    {
      icon: Users,
      title: "Pendekatan Personal",
      desc: "Pendampingan 1-on-1 yang intensif dan fokus",
    },
    {
      icon: Award,
      title: "Terpercaya",
      desc: "Sudah berpengalaman 10+ tahun mencetak generasi unggul",
    },
  ];

  return (
    <section id="about" className="relative bg-surface py-12 sm:py-24 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Tentang Cakrawala EduCentre
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Lembaga Pendidikan dan Pelatihan yang berkomitmen mencetak generasi
            unggul dan kompeten untuk masa depan yang lebih baik. Kami percaya
            setiap anak memiliki potensi luar biasa yang perlu dibimbing dengan
            cara yang tepat.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white p-4 shadow-sm transition-all sm:p-6 hover:shadow-md dark:bg-slate-800/50 dark:hover:shadow-slate-900"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-primary transition-colors sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl group-hover:bg-primary group-hover:text-white dark:bg-blue-900/30">
                <f.icon className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-900 sm:text-lg dark:text-zinc-100">
                {f.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500 sm:mt-2 sm:text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
