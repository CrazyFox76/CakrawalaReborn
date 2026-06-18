export default function MapSection() {
  return (
    <section className="bg-white py-12 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Lokasi Kami
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Cakrawala EduCentre, Jl. Bayan II No.7, RT.002/RW.008, Mustikajaya, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17158
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl sm:mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9!2d107.0307589!3d-6.3023472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f6fd27912db%3A0x5f0b5b2cf0be5252!2sCakrawala+Educentre!5e0!3m2!1sid!2sid!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Cakrawala EduCentre"
          />
        </div>
      </div>
    </section>
  );
}
