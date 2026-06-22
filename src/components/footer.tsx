import { Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  Map,
  MapMarker,
  MarkerContent,
  MapControls,
} from "@/components/ui/map";

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Program", href: "/program" },
  { label: "Biaya", href: "/biaya" },
  { label: "Screening", href: "/screening" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Blog", href: "/blog" },
  { label: "Karir", href: "/karir" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
                <span className="text-xs font-bold text-white">CE</span>
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Cakrawala<span className="text-accent">EduCentre</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Lembaga pendidikan dan pelatihan yang berkomitmen membantu setiap siswa menemukan potensi terbaiknya.
            </p>
            <div className="mt-4 flex gap-2">
              {[
                { icon: MessageCircle, href: "https://wa.me/6281324868790", label: "WhatsApp" },
                { icon: ExternalLink, href: "https://instagram.com/cakrawala_educentre", label: "Instagram" },
                { icon: ExternalLink, href: "https://tiktok.com/@cakrawala_educentre", label: "TikTok" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Tautan
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:cakrawalaeducentre@gmail.com" className="flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  cakrawalaeducentre@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+6281324868790" className="flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  +62 813-2486-8790
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Jl. Bayan II No.7, Mustikajaya, Kota Bekasi 17158
              </li>
              <li className="mt-2 overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
                <Map
                  initialViewState={{
                    longitude: 107.0307589,
                    latitude: -6.3023472,
                    zoom: 16,
                  }}
                  className="h-[200px] w-full"
                >
                  <MapControls showZoom showCompass showFullscreen position="top-right" />
                  <MapMarker longitude={107.0307589} latitude={-6.3023472}>
                    <MarkerContent>
                      <div className="relative flex h-10 w-10 items-center justify-center">
                        <span className="absolute h-full w-full animate-ping rounded-full bg-blue-500/30" />
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
                          <MapPin className="h-5 w-5" />
                        </div>
                      </div>
                    </MarkerContent>
                  </MapMarker>
                </Map>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 py-6 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} Cakrawala EduCentre
        </div>
      </div>
    </footer>
  );
}
