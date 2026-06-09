import "dotenv/config";
import { db } from "./index";
import {
  programs,
  blogPosts,
  tutors,
  testimonials,
  faqs,
  passingGrades,
  aboutFeatures,
  whyUs,
} from "./schema";

async function seed() {
  console.log("Seeding programs...");
  const programData = [
    { iconName: "BookOpen", title: "Rumbel Cakrawala (Rumah Belajar)", slug: "rumbel-cakrawala", age: "Semua Jenjang (SD, SMP, SMA)", description: "Program bimbingan belajar tatap muka kelas reguler dan intensif untuk meningkatkan prestasi akademik dan pemahaman materi sekolah.", highlights: ["Bimbingan tatap muka", "Tutor berpengalaman", "Kurikulum sekolah terbaru"], category: "akademik" },
    { iconName: "Home", title: "Cakrawala Home Visit", slug: "cakrawala-home-visit", age: "Semua Jenjang", description: "Layanan les privat guru datang ke rumah untuk kenyamanan belajar maksimal dan pembelajaran yang disesuaikan secara personal.", highlights: ["Guru datang ke rumah", "Jadwal fleksibel", "Fokus 1-on-1"], category: "akademik" },
    { iconName: "MessageSquare", title: "Cakrashare Brainly", slug: "cakrashare-brainly", age: "SD, SMP, SMA", description: "Layanan bantuan pengerjaan tugas, PR, dan tryout melalui grup WhatsApp dengan akses ribuan bank soal.", highlights: ["Bantuan tugas via WA", "Bank soal ribuan", "Tryout rutin"], category: "layanan" },
    { iconName: "ShoppingBag", title: "Cakrashare Mart", slug: "cakrashare-mart", age: "Umum", description: "Pusat kebutuhan pendidikan lengkap mulai dari buku, alat tulis, merchandise, hingga voucher tryout dengan harga terjangkau.", highlights: ["Kebutuhan pendidikan", "Harga terjangkau", "Mudah diakses"], category: "layanan" },
    { iconName: "Baby", title: "Cakrakids (PAUD/TK)", slug: "cakrakids-paud-tk", age: "PAUD / TK", description: "Program pendidikan anak usia dini yang interaktif untuk membangun fondasi belajar yang kuat sejak dini dengan metode bermain sambil belajar.", highlights: ["Belajar sambil bermain", "Motorik & kognitif", "Guru ramah anak"], category: "anak" },
    { iconName: "Languages", title: "Cakra English Centre", slug: "cakra-english-centre", age: "SD, SMP, SMA, Umum", description: "Kursus bahasa Inggris dengan kurikulum internasional untuk meningkatkan kemampuan speaking, writing, listening, dan reading.", highlights: ["TOEFL/IELTS preparation", "Full English conversation", "Sertifikat resmi"], category: "bahasa" },
    { iconName: "TrendingUp", title: "Cakra English Test", slug: "cakra-english-test", age: "SMA, Umum", description: "Tes kemampuan bahasa Inggris standar internasional yang diakui secara global untuk kebutuhan studi dan karir.", highlights: ["Tes standar internasional", "Sertifikat resmi", "Analisa hasil detail"], category: "bahasa" },
    { iconName: "Laptop", title: "Cakra TryOut CBT", slug: "cakra-tryout-cbt", age: "SMA, Umum", description: "Tryout UTBK SNBT, CPNS, dan ujian kedinasan berbasis komputer dengan model soal HOTS dan sistem penilaian real-time.", highlights: ["Soal HOTS update", "Skor real-time", "Pembahasan lengkap"], category: "akademik" },
    { iconName: "Code", title: "Cakra Tech (Coding & IT)", slug: "cakra-tech-coding-it", age: "SD, SMP, SMA, Umum", description: "Kursus coding dan teknologi digital untuk mempersiapkan siswa menghadapi era digital dengan keterampilan yang relevan.", highlights: ["Scratch, Python, Web", "Proyek nyata", "Sertifikat kompetensi"], category: "skills" },
    { iconName: "Monitor", title: "Cakra Multimedia", slug: "cakra-multimedia", age: "SMP, SMA, Umum", description: "Pelatihan desain grafis, video editing, animasi, dan konten kreatif untuk mengembangkan kreativitas dan skill digital.", highlights: ["Desain grafis & video", "Animasi & konten kreatif", "Portofolio digital"], category: "skills" },
    { iconName: "Handshake", title: "Cakra Kemitraan", slug: "cakra-kemitraan", age: "Semua Jenjang", description: "Program kemitraan untuk sekolah, bimbel, dan institusi pendidikan dalam mengembangkan layanan belajar bersama Cakrawala.", highlights: ["Kemitraan sekolah", "Bimbel partner", "Pelatihan guru"], category: "layanan" },
    { iconName: "FileText", title: "Cakra Prestasi (Olimpiade)", slug: "cakra-prestasi-olimpiade", age: "SD, SMP, SMA", description: "Program persiapan olimpiade sains, matematika, dan berbagai kompetisi akademik dengan pembinaan intensif oleh tutor ahli.", highlights: ["Olimpiade Sains", "Matematika & IPA", "Pembinaan juara"], category: "akademik" },
    { iconName: "Heart", title: "Cakra Character (Softskill)", slug: "cakra-character-softskill", age: "SD, SMP, SMA", description: "Program pembentukan karakter dan pengembangan soft skill seperti leadership, public speaking, dan emotional intelligence.", highlights: ["Public speaking", "Leadership", "Emotional intelligence"], category: "anak" },
    { iconName: "Globe", title: "Cakra Bahasa Asing", slug: "cakra-bahasa-asing", age: "SD, SMP, SMA, Umum", description: "Kursus bahasa asing (Jepang, Mandarin, Jerman, Korea, Perancis) untuk kebutuhan studi lanjut dan karir global.", highlights: ["Bahasa Jepang, Mandarin", "Jerman, Korea, Perancis", "Persiapan studi LN"], category: "bahasa" },
    { iconName: "Trophy", title: "Cakra Kedinasan (Cakdin)", slug: "cakra-kedinasan-cakdin", age: "SMA, Umum", description: "Program persiapan seleksi sekolah kedinasan (STAN, IPDN, STIS, POLTEKIM, dll) dengan simulasi CAT dan psikotes.", highlights: ["Simulasi CAT", "Psikotes & wawancara", "Bank soal kedinasan"], category: "akademik" },
    { iconName: "Shield", title: "Cakra Skills Up", slug: "cakra-skills-up", age: "Umum, Mahasiswa", description: "Pelatihan keterampilan profesional seperti digital marketing, content creation, public speaking, dan kewirausahaan untuk karir.", highlights: ["Digital marketing", "Content creation", "Kewirausahaan"], category: "skills" },
    { iconName: "CreditCard", title: "Cakra Finance Club", slug: "cakra-finance-club", age: "SMA, Umum", description: "Edukasi literasi keuangan, investasi saham, crypto, dan perencanaan keuangan untuk generasi muda yang melek finansial.", highlights: ["Literasi keuangan", "Investasi saham", "Perencanaan finansial"], category: "skills" },
  ];

  for (const p of programData) {
    await db.insert(programs).values(p).onConflictDoNothing({ target: programs.slug });
  }

  console.log("Seeding blog posts...");
  const blogData = [
    { id: "1", title: "TOEFL ITP: Soal Comparison (er/est, more/most) dan Irregular Forms", slug: "toefl-itp-comparison", excerpt: "Pelajari aturan comparative & superlative degree beserta irregular forms dan contoh soal lengkap.", content: "<p>TOEFL ITP Structure & Written Expression sering menguji kemampuan peserta dalam memahami comparative dan superlative degree.</p><h3>Aturan Dasar Comparative Degree</h3><p>Comparative degree digunakan untuk membandingkan <strong>dua</strong> hal.</p><ul><li>Adjective 1 suku kata → tambah <strong>-er</strong></li><li>Adjective 2 suku kata berakhiran -y → ubah y jadi <strong>-ier</strong></li><li>Adjective 2+ suku kata → tambah <strong>more</strong></li></ul>", category: "TOEFL", date: "15 Mei 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "2", title: "TOEFL iBT Integrated Writing: Struktur, Strategi & Contoh Jawaban", slug: "toefl-ibt-integrated-writing", excerpt: "Panduan lengkap mengerjakan soal Integrated Writing Task di TOEFL iBT beserta strategi dan contoh jawaban skor tinggi.", content: "<p>Integrated Writing Task di TOEFL iBT mengharuskan peserta untuk membaca sebuah teks akademik singkat, mendengarkan kuliah tentang topik yang sama, kemudian menulis ringkasan.</p><h3>Struktur Integrated Writing</h3><ol><li>Baca teks akademik (3 menit)</li><li>Dengarkan kuliah (2-3 menit)</li><li>Tulis jawaban (20 menit)</li></ol>", category: "TOEFL", date: "10 Mei 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "3", title: "Pembahasan Soal Figural SIMAK UI: Pola, Rotasi & Logika Visual", slug: "simak-ui-figural", excerpt: "Latihan dan pembahasan soal figural SIMAK UI lengkap dengan tips cepat mengerjakan pola gambar, rotasi, dan penalaran visual.", content: "<p>SIMAK UI adalah salah satu ujian masuk PTN paling kompetitif di Indonesia. Soal figural menguji kemampuan penalaran visual peserta.</p><h3>Jenis Soal Figural SIMAK UI</h3><ul><li>Pola gambar berulang</li><li>Rotasi dan refleksi</li><li>Analogi visual</li></ul>", category: "SIMAK UI", date: "5 Mei 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "4", title: "UTBK SNBT 2026: Perubahan Terbaru & Tips Skor Tinggi", slug: "utbk-snbt-2026", excerpt: "Informasi terbaru tentang UTBK SNBT 2026, perubahan kisi-kisi, jadwal, dan strategi meraih skor tinggi.", content: "<p>UTBK SNBT 2026 membawa beberapa perubahan signifikan yang perlu diketahui calon peserta.</p><h3>Perubahan UTBK SNBT 2026</h3><ul><li>Penyesuaian bobot soal</li><li>Materi baru: penalaran matematika diperluas</li><li>Sistem penilaian IRT</li></ul>", category: "SNBT", date: "1 Mei 2026", author: "Tim Cakrawala", readTime: "8 menit" },
    { id: "5", title: "Rekomendasi Jurusan IPA untuk SNBT 2026: Prospek Cerah & Passing Grade", slug: "rekomendasi-jurusan-ipa-snbt-2026", excerpt: "Jurusan IPA dengan prospek kerja cerah dan passing grade SNBT 2026. Cocok untuk siswa SMA IPA yang bingung memilih program studi.", content: "<p>Memilih jurusan adalah keputusan penting yang akan memengaruhi masa depan karir. Berikut rekomendasi jurusan IPA dengan prospek cerah.</p><h3>Top 5 Jurusan IPA Prospek Cerah</h3><ol><li>Kedokteran</li><li>Teknik Informatika</li><li>Farmasi</li><li>Teknik Industri</li><li>Statistika</li></ol>", category: "SNBT", date: "28 April 2026", author: "Tim Cakrawala", readTime: "6 menit" },
  ];

  for (const b of blogData) {
    await db.insert(blogPosts).values(b).onConflictDoNothing({ target: blogPosts.slug });
  }

  console.log("Seeding tutors...");
  await db.insert(tutors).values([
    { name: "Ahmad Syarif", initials: "AS", subject: "Matematika & Fisika", education: "S1 Teknik UI", desc: "Berpengalaman 5 tahun membimbing siswa SMP-SMA. Spesialis persiapan UTBK dan olimpiade sains." },
    { name: "Nurul Hidayah", initials: "NH", subject: "Bahasa Inggris", education: "S1 Sastra Inggris UI", desc: "TOEFL score 110. Berpengalaman mengajar TOEFL/IELTS dan academic writing untuk SMA dan umum." },
    { name: "Rizky Pratama", initials: "RP", subject: "Kimia & Biologi", education: "S1 Farmasi ITB", desc: "Membimbing siswa SMA jurusan IPA dengan pendekatan konseptual dan latihan soal HOTS." },
    { name: "Fitriani Sari", initials: "FS", subject: "Matematika SD-SMP", education: "S1 Pendidikan Matematika UNJ", desc: "Ahli dalam membangun fondasi matematika anak dengan metode fun learning. Sudah mendampingi 100+ siswa." },
  ]);

  console.log("Seeding testimonials...");
  await db.insert(testimonials).values([
    { name: "Siti Rahmawati", role: "Orang Tua Siswa SD", content: "Anak saya jadi lebih percaya diri dan nilainya meningkat drastis sejak les di Cakrawala. Tutornya sabar dan profesional.", rating: 5 },
    { name: "Budi Santoso", role: "Orang Tua Siswa SMP", content: "Program les SMP-nya sangat membantu anak saya menghadapi ujian sekolah. Nilai matematika naik dari 60 jadi 85.", rating: 5 },
    { name: "Rina Amelia", role: "Siswa SMA", content: "Persiapan UTBK di Cakrawala bikin saya lebih siap. Pembahasannya detail dan tutornya asyik. Recommended!", rating: 5 },
    { name: "Dewi Lestari", role: "Orang Tua Siswa SD", content: "Metode belajarnya menyenangkan, anak saya jadi semangat belajar. Terima kasih Cakrawala EduCentre!", rating: 5 },
    { name: "Ahmad Fauzi", role: "Siswa Kelas 12", content: "Tryout UTBK-nya mirip banget sama aslinya. Pembahasan soalnya lengkap banget, bikin paham konsep.", rating: 5 },
    { name: "Maya Anggraini", role: "Orang Tua Siswa SMP", content: "Gurunya datang ke rumah, jadwal fleksibel. Anak saya jadi lebih teratur belajarnya. Sangat puas!", rating: 5 },
  ]);

  console.log("Seeding FAQs...");
  await db.insert(faqs).values([
    { question: "Apakah lesnya offline atau online?", answer: "Kami menyediakan keduanya. Les offline tersedia dengan tutor datang ke rumah siswa di wilayah Jakarta, Bekasi, Tangerang, Bogor, dan kota lainnya. Les online via Zoom atau platform lainnya bisa diikuti dari mana saja di seluruh Indonesia." },
    { question: "Berapa biaya les privat di Cakrawala EduCentre?", answer: "Biaya les privat bervariasi tergantung jenjang pendidikan, jumlah pertemuan, durasi, dan metode (online/offline). Kami menyediakan paket bulanan yang lebih ekonomis serta paket intensif untuk persiapan ujian." },
    { question: "Apakah ada kelas trial atau konsultasi gratis?", answer: "Ya, kami menyediakan sesi konsultasi gratis untuk mengenali kebutuhan belajar siswa dan mencocokkan dengan tutor yang tepat. Silakan hubungi kami via WhatsApp untuk menjadwalkan sesi konsultasi tanpa biaya." },
    { question: "Apakah bisa memilih guru sendiri?", answer: "Tentu. Orang tua dan siswa dapat memilih guru sesuai preferensi. Tim Cakrawala akan membantu mencocokkan guru berdasarkan mata pelajaran, lokasi, jadwal, dan karakter yang cocok dengan siswa." },
    { question: "Apakah jadwal les bisa disesuaikan?", answer: "Salah satu keunggulan kami adalah fleksibilitas jadwal. Anda bisa menentukan hari dan jam belajar sendiri, mengubah jadwal jika ada kebutuhan mendadak." },
    { question: "Kurikulum apa yang digunakan?", answer: "Kami mendukung Kurikulum Nasional (Kurikulum Merdeka, K13) maupun Kurikulum Internasional (Cambridge, IB)." },
    { question: "Bagaimana cara mendaftar?", answer: "Proses pendaftaran sangat mudah: 1) Hubungi kami via WhatsApp, 2) Konsultasi kebutuhan belajar, 3) Penentuan jadwal dan guru yang sesuai, 4) Mulai sesi les privat." },
  ]);

  console.log("Seeding passing grades...");
  const pgData = [
    { university: "Universitas Indonesia", program: "Kedokteran", grade: 95, category: "IPA", peminat: 4500 },
    { university: "Universitas Indonesia", program: "Teknik Informatika", grade: 92, category: "Campuran", peminat: 3200 },
    { university: "Universitas Indonesia", program: "Ilmu Hukum", grade: 90, category: "IPS", peminat: 3800 },
    { university: "Universitas Indonesia", program: "Psikologi", grade: 88, category: "IPS", peminat: 2800 },
    { university: "Universitas Indonesia", program: "Akuntansi", grade: 87, category: "IPS", peminat: 2500 },
    { university: "Universitas Indonesia", program: "Ilmu Komputer", grade: 91, category: "Campuran", peminat: 3000 },
    { university: "Universitas Indonesia", program: "Hubungan Internasional", grade: 86, category: "IPS", peminat: 2200 },
    { university: "Universitas Indonesia", program: "Farmasi", grade: 89, category: "IPA", peminat: 1800 },
    { university: "Universitas Indonesia", program: "Teknik Sipil", grade: 84, category: "IPA", peminat: 1600 },
    { university: "Universitas Indonesia", program: "Keperawatan", grade: 82, category: "IPA", peminat: 1500 },
    { university: "Institut Teknologi Bandung", program: "Teknik Informatika", grade: 93, category: "Campuran", peminat: 3500 },
    { university: "Institut Teknologi Bandung", program: "Teknik Elektro", grade: 90, category: "IPA", peminat: 2200 },
    { university: "Institut Teknologi Bandung", program: "Teknik Mesin", grade: 88, category: "IPA", peminat: 2000 },
    { university: "Institut Teknologi Bandung", program: "Fisika", grade: 82, category: "IPA", peminat: 1200 },
    { university: "Institut Teknologi Bandung", program: "Matematika", grade: 80, category: "IPA", peminat: 1000 },
    { university: "Institut Teknologi Bandung", program: "Arsitektur", grade: 87, category: "Campuran", peminat: 1800 },
    { university: "Institut Teknologi Bandung", program: "Teknik Kimia", grade: 85, category: "IPA", peminat: 1600 },
    { university: "Universitas Gadjah Mada", program: "Kedokteran", grade: 94, category: "IPA", peminat: 4200 },
    { university: "Universitas Gadjah Mada", program: "Teknik Informatika", grade: 90, category: "Campuran", peminat: 2800 },
    { university: "Universitas Gadjah Mada", program: "Ilmu Hukum", grade: 89, category: "IPS", peminat: 3500 },
    { university: "Universitas Gadjah Mada", program: "Teknik Sipil", grade: 86, category: "IPA", peminat: 1800 },
    { university: "Universitas Gadjah Mada", program: "Psikologi", grade: 87, category: "IPS", peminat: 2400 },
    { university: "Universitas Gadjah Mada", program: "Akuntansi", grade: 86, category: "IPS", peminat: 2200 },
    { university: "Universitas Gadjah Mada", program: "Manajemen", grade: 85, category: "IPS", peminat: 2600 },
    { university: "Universitas Gadjah Mada", program: "Farmasi", grade: 88, category: "IPA", peminat: 1700 },
    { university: "Universitas Gadjah Mada", program: "Ilmu Komunikasi", grade: 84, category: "IPS", peminat: 2100 },
    { university: "Institut Teknologi Sepuluh Nopember", program: "Teknik Informatika", grade: 89, category: "Campuran", peminat: 2600 },
    { university: "Institut Teknologi Sepuluh Nopember", program: "Teknik Elektro", grade: 86, category: "IPA", peminat: 1800 },
    { university: "Institut Teknologi Sepuluh Nopember", program: "Teknik Mesin", grade: 84, category: "IPA", peminat: 1600 },
    { university: "Institut Teknologi Sepuluh Nopember", program: "Teknik Sipil", grade: 82, category: "IPA", peminat: 1400 },
    { university: "Institut Teknologi Sepuluh Nopember", program: "Desain Produk", grade: 83, category: "Campuran", peminat: 1200 },
    { university: "IPB University", program: "Kedokteran Hewan", grade: 87, category: "IPA", peminat: 2000 },
    { university: "IPB University", program: "Teknologi Pangan", grade: 84, category: "IPA", peminat: 1500 },
    { university: "IPB University", program: "Ilmu Komputer", grade: 83, category: "Campuran", peminat: 1800 },
    { university: "Universitas Padjadjaran", program: "Kedokteran", grade: 93, category: "IPA", peminat: 3500 },
    { university: "Universitas Padjadjaran", program: "Ilmu Hukum", grade: 87, category: "IPS", peminat: 3000 },
    { university: "Universitas Padjadjaran", program: "Psikologi", grade: 85, category: "IPS", peminat: 2200 },
    { university: "Universitas Padjadjaran", program: "Ilmu Komunikasi", grade: 83, category: "IPS", peminat: 2000 },
    { university: "Universitas Padjadjaran", program: "Farmasi", grade: 86, category: "IPA", peminat: 1600 },
    { university: "Universitas Diponegoro", program: "Kedokteran", grade: 91, category: "IPA", peminat: 3200 },
    { university: "Universitas Diponegoro", program: "Teknik Informatika", grade: 87, category: "Campuran", peminat: 2400 },
    { university: "Universitas Diponegoro", program: "Ilmu Hukum", grade: 85, category: "IPS", peminat: 2800 },
    { university: "Universitas Airlangga", program: "Kedokteran", grade: 93, category: "IPA", peminat: 3800 },
    { university: "Universitas Airlangga", program: "Ilmu Hukum", grade: 87, category: "IPS", peminat: 3000 },
    { university: "Universitas Airlangga", program: "Psikologi", grade: 85, category: "IPS", peminat: 2100 },
    { university: "Universitas Brawijaya", program: "Kedokteran", grade: 91, category: "IPA", peminat: 3400 },
    { university: "Universitas Brawijaya", program: "Teknik Informatika", grade: 87, category: "Campuran", peminat: 2500 },
    { university: "Universitas Brawijaya", program: "Ilmu Hukum", grade: 85, category: "IPS", peminat: 2700 },
    { university: "Universitas Pendidikan Indonesia", program: "Pendidikan Bahasa Inggris", grade: 78, category: "Campuran", peminat: 1800 },
    { university: "Universitas Pendidikan Indonesia", program: "Pendidikan Guru SD", grade: 72, category: "Campuran", peminat: 2000 },
    { university: "Universitas Sebelas Maret", program: "Kedokteran", grade: 90, category: "IPA", peminat: 3000 },
    { university: "Universitas Sebelas Maret", program: "Ilmu Hukum", grade: 84, category: "IPS", peminat: 2500 },
    { university: "Universitas Hasanuddin", program: "Kedokteran", grade: 89, category: "IPA", peminat: 2800 },
    { university: "Universitas Hasanuddin", program: "Ilmu Hukum", grade: 83, category: "IPS", peminat: 2400 },
    { university: "Universitas Sumatera Utara", program: "Kedokteran", grade: 87, category: "IPA", peminat: 2600 },
    { university: "Universitas Sumatera Utara", program: "Teknik Informatika", grade: 83, category: "Campuran", peminat: 2000 },
    { university: "Universitas Sriwijaya", program: "Kedokteran", grade: 86, category: "IPA", peminat: 2200 },
    { university: "Universitas Negeri Semarang", program: "Kedokteran", grade: 87, category: "IPA", peminat: 2400 },
    { university: "Universitas Negeri Malang", program: "Kedokteran", grade: 86, category: "IPA", peminat: 2200 },
    { university: "Universitas Jenderal Soedirman", program: "Kedokteran", grade: 86, category: "IPA", peminat: 2000 },
    { university: "Universitas Syiah Kuala", program: "Kedokteran", grade: 85, category: "IPA", peminat: 2000 },
    { university: "Universitas Mulawarman", program: "Kedokteran", grade: 85, category: "IPA", peminat: 2000 },
    { university: "Universitas Sam Ratulangi", program: "Kedokteran", grade: 84, category: "IPA", peminat: 1800 },
    { university: "Universitas Lambung Mangkurat", program: "Kedokteran", grade: 84, category: "IPA", peminat: 1800 },
    { university: "Universitas Mataram", program: "Kedokteran", grade: 83, category: "IPA", peminat: 1600 },
    { university: "Universitas Bengkulu", program: "Kedokteran", grade: 82, category: "IPA", peminat: 1500 },
    { university: "Universitas Negeri Jakarta", program: "Psikologi", grade: 80, category: "IPS", peminat: 1800 },
    { university: "Universitas Negeri Makassar", program: "Pendidikan Bahasa Inggris", grade: 72, category: "Campuran", peminat: 1300 },
    { university: "Universitas Cenderawasih", program: "Kedokteran", grade: 78, category: "IPA", peminat: 1200 },
  ];

  for (const p of pgData) {
    await db.insert(passingGrades).values(p);
  }

  console.log("Seeding about features...");
  await db.insert(aboutFeatures).values([
    { iconName: "GraduationCap", title: "Tutor Profesional", desc: "Berpengalaman dan tersertifikasi di bidangnya", sortOrder: 1 },
    { iconName: "Target", title: "Kurikulum Terarah", desc: "Materi disesuaikan dengan kebutuhan siswa", sortOrder: 2 },
    { iconName: "Users", title: "Pendekatan Personal", desc: "Pendampingan 1-on-1 yang intensif dan fokus", sortOrder: 3 },
    { iconName: "Award", title: "Terpercaya", desc: "Sudah berpengalaman 10+ tahun mencetak generasi unggul", sortOrder: 4 },
  ]);

  console.log("Seeding why us...");
  await db.insert(whyUs).values([
    { title: "Tutor Profesional & Berpengalaman", desc: "Tutor kami adalah lulusan terbaik dari universitas ternama, berpengalaman, dan telah melalui proses seleksi ketat.", sortOrder: 1 },
    { title: "Jadwal Belajar Fleksibel", desc: "Siswa dan orang tua dapat menyesuaikan jadwal les sesuai waktu luang tanpa mengganggu aktivitas sekolah.", sortOrder: 2 },
    { title: "Kurikulum Terarah & Terstruktur", desc: "Materi belajar dirancang sistematis sesuai jenjang dan kebutuhan, mulai dari penguatan konsep hingga latihan soal.", sortOrder: 3 },
    { title: "Pendampingan Intensif 1-on-1", desc: "Setiap siswa mendapat perhatian penuh dari tutor, sehingga perkembangan belajar terpantau secara optimal.", sortOrder: 4 },
    { title: "Evaluasi Berkala", desc: "Laporan perkembangan belajar diberikan secara rutin kepada orang tua untuk memonitor kemajuan siswa.", sortOrder: 5 },
    { title: "Biaya Terjangkau", desc: "Kualitas pendidikan terbaik dengan biaya yang kompetitif dan opsi paket yang bisa disesuaikan.", sortOrder: 6 },
  ]);

  console.log("✅ Seed selesai!");
}

seed().catch(console.error);
