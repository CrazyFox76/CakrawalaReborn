import { Mail, Phone, MapPin, Globe, ExternalLink, MessageCircle } from "lucide-react";
import MapSection from "@/components/map-section";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Program", href: "/program" },
  { label: "Bimbel", href: "/bimbel" },
  { label: "Biaya", href: "/biaya" },
  { label: "Harga Les", href: "/harga" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Blog", href: "/blog" },
  { label: "Karir", href: "/karir" },
  { label: "Pendaftaran", href: "/daftar" },
];

const socialLinks = [
  { icon: MessageCircle, href: "https://wa.me/6281324868790", label: "WhatsApp" },
  { icon: Globe, href: "https://instagram.com/cakrawala_educentre", label: "Instagram" },
  { icon: ExternalLink, href: "https://facebook.com/cakrawalaeducentre", label: "Facebook" },
  { icon: ExternalLink, href: "https://tiktok.com/@cakrawala_educentre", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-white">CE</span>
              </div>
              <span className="text-lg font-bold text-white">
                Cakrawala <span className="text-accent">EduCentre</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Lembaga Pendidikan dan Pelatihan yang berkomitmen mencetak generasi
              unggul dan kompeten untuk masa depan yang lebih baik.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm text-zinc-500">
                  Jl. Siti 2, Jl. Bayan II No.7, Mustikajaya, Kota Bekasi, Jawa
                  Barat 17158
                </span>
              </li>
              <li>
                <a
                  href="mailto:cakrawalaeducentre@gmail.com"
                  className="flex items-center gap-3 text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                  cakrawalaeducentre@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6281324868790"
                  className="flex items-center gap-3 text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                  +62 813-2486-8790
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Ikuti Kami
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-colors hover:bg-primary hover:text-white"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <MapSection />

      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} Cakrawala EduCentre. Hak cipta dilindungi.
      </div>
    </footer>
  );
}
