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
    <section className="bg-surface py-12 sm:py-24 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Galeri Kegiatan
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Suasana belajar dan kegiatan seru di Cakrawala EduCentre.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 sm:grid-cols-3">
          {photos.map((p) => (
            <div
              key={p.label}
              className="relative h-40 overflow-hidden rounded-2xl sm:h-64"
            >
              <img
                src={p.url}
                alt={p.label}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-3 text-xs font-semibold text-white sm:p-4 sm:text-sm">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
