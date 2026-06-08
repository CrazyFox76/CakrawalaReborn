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
    <section id="about" className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Tentang Cakrawala EduCentre
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Lembaga Pendidikan dan Pelatihan yang berkomitmen mencetak generasi
            unggul dan kompeten untuk masa depan yang lebih baik. Kami percaya
            setiap anak memiliki potensi luar biasa yang perlu dibimbing dengan
            cara yang tepat.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
