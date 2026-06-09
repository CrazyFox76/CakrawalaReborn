export default function GallerySection() {
  const photos = [
    { label: "Kegiatan Belajar", color: "from-blue-400 to-blue-600", emoji: "📚" },
    { label: "Tutor & Siswa", color: "from-accent to-accent/60", emoji: "👨‍🏫" },
    { label: "Suasana Kelas", color: "from-green-400 to-green-600", emoji: "🏫" },
    { label: "Kegiatan Outdoor", color: "from-purple-400 to-purple-600", emoji: "🌳" },
    { label: "Sesi TryOut", color: "from-red-400 to-red-600", emoji: "✍️" },
    { label: "Kelulusan", color: "from-yellow-400 to-yellow-600", emoji: "🎓" },
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
              className={`relative flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${p.color} sm:h-64`}
            >
              <div className="text-center">
                <span className="text-3xl sm:text-5xl">{p.emoji}</span>
                <p className="mt-2 text-xs font-semibold text-white/90 sm:text-sm">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
