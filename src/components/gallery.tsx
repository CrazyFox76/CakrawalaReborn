import Image from "next/image";
import { Camera } from "lucide-react";

export default function GallerySection() {
  const photos = [
    { label: "Kegiatan Belajar", url: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&q=80" },
    { label: "Tutor & Siswa", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
    { label: "Suasana Kelas", url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80" },
    { label: "Kegiatan Outdoor", url: "https://images.unsplash.com/photo-1577896851231-70f1885d09cd?w=600&q=80" },
    { label: "Sesi TryOut", url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80" },
    { label: "Kelulusan", url: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&q=80" },
  ];

  return (
    <section className="py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <Camera className="h-3.5 w-3.5" />
            Galeri
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Galeri{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Kegiatan
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Suasana belajar dan kegiatan seru di Cakrawala EduCentre.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 sm:grid-cols-3">
          {photos.map((p) => (
            <div
              key={p.label}
              className="group relative h-44 overflow-hidden rounded-2xl shadow-sm sm:h-72"
            >
              <Image
                src={p.url}
                alt={p.label}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute inset-0 flex items-end p-4 sm:p-5">
                <p className="translate-y-0 text-sm font-bold text-white transition-all duration-300 sm:text-base">
                  {p.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
