import "dotenv/config";
import { db } from "./index";
import {
  brands,
  programs,
  blogPosts,
  tutors,
  testimonials,
  faqs,
  passingGrades,
  aboutFeatures,
  whyUs,
  bankAccounts,
  prices,
  cakraPointStats,
  cakraPointRewards,
  vouchers,
} from "./schema";

async function seed() {
  // ── Brands ──────────────────────────────────────────────────────────────
  console.log("Seeding brands...");
  const brandData = [
    { name: "Cakra Edu Partner", slug: "cakra-edu-partner", description: "Program kemitraan strategis dengan sekolah dan instansi — penyediaan guru pengganti, pelatihan guru, dan kegiatan edukatif.", category: "layanan", iconName: "Handshake" },
    { name: "Rumbel Cakrawala", slug: "rumbel-cakrawala", description: "Bimbingan belajar tatap muka dan online untuk meningkatkan prestasi akademik dan pemahaman materi sekolah.", category: "akademik", iconName: "BookOpen" },
    { name: "Cakrakids", slug: "cakrakids", description: "Program pendidikan anak usia dini yang interaktif untuk membangun fondasi belajar yang kuat sejak dini.", category: "anak", iconName: "Baby" },
    { name: "Cakrawala Home Visit", slug: "cakrawala-home-visit", description: "Layanan les privat guru datang ke rumah untuk pembelajaran personal yang nyaman dan fleksibel.", category: "akademik", iconName: "Home" },
    { name: "Cakra Tech", slug: "cakra-tech", description: "Pelatihan teknologi digital — coding, desain, AI, dan konten kreatif untuk masa depan digital.", category: "skills", iconName: "Code" },
    { name: "Cakra Prestasi", slug: "cakra-prestasi", description: "Bimbingan khusus persiapan olimpiade, lomba akademik, dan seleksi masuk sekolah favorit.", category: "akademik", iconName: "Trophy" },
    { name: "TryOut CBT", slug: "tryout-cbt", description: "Platform simulasi ujian berbasis komputer untuk UTBK, CPNS, Kedinasan, dan ujian sekolah.", category: "tryout", iconName: "Monitor" },
    { name: "Cakra Kedinasan (Cakdin)", slug: "cakra-kedinasan", description: "Persiapan intensif seleksi perguruan tinggi kedinasan dan CPNS dengan simulasi CAT dan psikotes.", category: "akademik", iconName: "Shield" },
    { name: "Cakra English Centre", slug: "cakra-english-centre", description: "Pusat pelatihan bahasa Inggris untuk semua kebutuhan — akademik, profesional, dan tes sertifikasi internasional.", category: "bahasa", iconName: "Languages" },
    { name: "Cakra Language Centre", slug: "cakra-language-centre", description: "Pusat pembelajaran bahasa asing non-Inggris dan layanan akademik writing untuk studi lanjut internasional.", category: "bahasa", iconName: "Globe" },
    { name: "Cakra Skills Up", slug: "cakra-skills-up", description: "Pelatihan keterampilan profesional dan soft skill untuk pengembangan diri dan kesiapan karir.", category: "skills", iconName: "TrendingUp" },
    { name: "Cakra Bimskrip", slug: "cakra-bimskrip", description: "Bimbingan penyusunan tugas akhir, skripsi, tesis, dan olah data statistik dengan mentor akademis berpengalaman.", category: "akademik", iconName: "FileText" },
    { name: "Cakra Islami Terpadu", slug: "cakra-islami-terpadu", description: "Program bimbingan keislaman — mengaji, tahsin, tahfidz, dan pembiasaan ibadah untuk anak dan dewasa.", category: "anak", iconName: "Heart" },
    { name: "Cakra English Test", slug: "cakra-english-test", description: "Tes kemampuan bahasa Inggris standar internasional untuk kebutuhan studi dan karir.", category: "bahasa", iconName: "TrendingUp" },
    { name: "Cakra Member", slug: "cakra-member", description: "Program loyalitas dan layanan jasa kreatif — editing, pengembangan web, dokumentasi, dan translator.", category: "layanan", iconName: "CreditCard" },
  ];

  const insertedBrands = await db.insert(brands).values(brandData).onConflictDoNothing({ target: brands.slug }).returning();
  console.log(`  ${insertedBrands.length} brands inserted`);

  // Map slugs to IDs
  const allBrands = await db.select().from(brands);

  // ── Programs (48 sub-programs) ──────────────────────────────────────────
  console.log("Seeding programs...");
  const programData: (typeof programs.$inferInsert)[] = [];

  function addPrograms(brandSlug: string, items: { title: string; slug: string; age: string; description: string; highlights: string[] }[]) {
    const brand = allBrands.find((b) => b.slug === brandSlug);
    if (!brand) return;
    for (const item of items) {
      programData.push({
        brandId: brand.id,
        title: item.title,
        slug: item.slug,
        age: item.age,
        description: item.description,
        highlights: item.highlights,
        category: brand.category,
        iconName: brand.iconName,
      });
    }
  }

  addPrograms("cakra-edu-partner", [
    { title: "Talent Mapping & Digital Psychotest", slug: "talent-mapping-psychotest", age: "Sekolah & Instansi", description: "Pemetaan bakat dan psikotes digital untuk siswa dan guru guna mengetahui potensi dan minat secara akurat.", highlights: ["Psikotes digital", "Laporan detail potensi", "Rekomendasi pengembangan"] },
    { title: "In House Training For Teacher", slug: "iht-teacher", age: "Guru & Tenaga Pendidik", description: "Pelatihan internal untuk meningkatkan kompetensi guru dalam pengajaran, kurikulum, dan teknologi pendidikan.", highlights: ["Metodologi mengajar", "Teknologi pembelajaran", "Sertifikat pelatihan"] },
    { title: "In House Training For Student", slug: "iht-student", age: "Siswa SD/SMP/SMA", description: "Pelatihan motivasi dan soft skill untuk siswa dalam rangka meningkatkan prestasi akademik dan non-akademik.", highlights: ["Motivasi belajar", "Soft skill", "Workshop interaktif"] },
    { title: "Educational Tour", slug: "educational-tour", age: "SD/SMP/SMA", description: "Program wisata edukasi ke berbagai destinasi yang menggabungkan pembelajaran dengan pengalaman langsung.", highlights: ["Destinasi edukatif", "Pendampingan profesional", "Laporan kegiatan"] },
    { title: "Workshop Curriculum", slug: "workshop-curriculum", age: "Guru & Sekolah", description: "Workshop pengembangan kurikulum yang disesuaikan dengan kebutuhan sekolah dan perkembangan pendidikan terkini.", highlights: ["Kurikulum Merdeka", "Modul ajar", "Pendampingan implementasi"] },
  ]);

  addPrograms("rumbel-cakrawala", [
    { title: "Pendalaman Materi", slug: "pendalaman-materi", age: "Semua Jenjang", description: "Program intensif pendalaman materi pelajaran sekolah dengan fokus pada pemahaman konsep dan latihan soal terstruktur.", highlights: ["Pemahaman konsep", "Latihan soal terstruktur", "Evaluasi rutin"] },
    { title: "Rumbel Cakrawala (Rumah Belajar)", slug: "rumbel-cakrawala-rumah-belajar", age: "Semua Jenjang (SD, SMP, SMA)", description: "Program bimbingan belajar tatap muka kelas reguler dan intensif untuk meningkatkan prestasi akademik dan pemahaman materi sekolah.", highlights: ["Bimbingan tatap muka", "Tutor berpengalaman", "Kurikulum sekolah terbaru"] },
    { title: "Rumbel Cakrawala (Kelas Online)", slug: "rumbel-cakrawala-online", age: "Semua Jenjang", description: "Program bimbingan belajar jarak jauh (online) yang interaktif dengan fasilitas rekaman kelas dan materi digital lengkap.", highlights: ["Belajar online interaktif", "Akses rekaman kelas", "Materi & kuis digital"] },
  ]);

  addPrograms("cakrakids", [
    { title: "Calistung", slug: "calistung", age: "PAUD & TK (3-6 tahun)", description: "Program belajar membaca, menulis, dan berhitung dengan metode menyenangkan untuk persiapan masuk SD.", highlights: ["Membaca dan menulis", "Berhitung dasar", "Metode fun learning"] },
    { title: "English For Kids", slug: "english-for-kids", age: "PAUD & TK (3-6 tahun)", description: "Pengenalan bahasa Inggris sejak dini melalui lagu, permainan, dan aktivitas interaktif yang menyenangkan.", highlights: ["Pengenalan kosakata", "Percakapan sederhana", "Belajar sambil bermain"] },
    { title: "Mental Math", slug: "mental-math", age: "TK & SD (5-9 tahun)", description: "Program berhitung cepat dengan metode mental aritmetika untuk mengembangkan logika dan konsentrasi anak.", highlights: ["Aritmetika mental", "Logika & konsentrasi", "Sempoa & metode cepat"] },
    { title: "Cakrakids (PAUD/TK)", slug: "cakrakids-paud-tk", age: "PAUD & TK (3-6 tahun)", description: "Program stimulasi tumbuh kembang anak usia dini berfokus pada calistung, pendidikan karakter, dan motorik dengan metode bermain.", highlights: ["Calistung interaktif", "Pendidikan karakter", "Metode ramah anak"] },
  ]);

  addPrograms("cakrawala-home-visit", [
    { title: "Pendampingan PR Harian", slug: "pendampingan-pr-harian", age: "SD & SMP", description: "Pendampingan pengerjaan PR dan tugas sekolah setiap hari dengan bimbingan tutor profesional di rumah.", highlights: ["Bantuan PR harian", "Jadwal rutin", "Pemantauan perkembangan"] },
    { title: "Remedial Khusus", slug: "remedial-khusus", age: "Semua Jenjang", description: "Program remedial intensif untuk mata pelajaran yang membutuhkan perbaikan nilai dan penguatan pemahaman.", highlights: ["Perbaikan nilai", "Pendekatan personal", "Target tuntas"] },
    { title: "Cakrawala Home Visit", slug: "cakrawala-home-visit", age: "Semua Jenjang", description: "Layanan les privat guru datang ke rumah untuk kenyamanan belajar maksimal dan pembelajaran yang disesuaikan secara personal.", highlights: ["Guru datang ke rumah", "Jadwal fleksibel", "Fokus 1-on-1"] },
  ]);

  addPrograms("cakra-tech", [
    { title: "Workshop AI & Media", slug: "workshop-ai-media", age: "SMP/SMA/Umum", description: "Workshop penggunaan kecerdasan buatan (AI) untuk pembuatan konten media, desain, dan produktivitas digital.", highlights: ["AI generatif", "Pembuatan konten", "Tools AI praktis"] },
    { title: "AI Guided", slug: "ai-guided", age: "SMA/Umum", description: "Pendampingan belajar dan pengerjaan proyek berbasis AI untuk memahami teknologi artificial intelligence secara mendalam.", highlights: ["Prompt engineering", "Machine learning dasar", "Proyek AI nyata"] },
    { title: "Coding Dasar & Game Development", slug: "coding-dasar-game-dev", age: "SD/SMP/SMA", description: "Belajar coding dari dasar hingga membuat game sederhana menggunakan platform visual dan bahasa pemrograman populer.", highlights: ["Scratch & Python", "Game development", "Logika pemrograman"] },
    { title: "Design Creative", slug: "design-creative", age: "SMP/SMA/Umum", description: "Pelatihan desain grafis untuk pemula hingga mahir menggunakan tools desain profesional.", highlights: ["Canva & Figma", "Adobe Photoshop dasar", "Portofolio desain"] },
    { title: "Video Editing & Content Creator Class", slug: "video-editing-content-creator", age: "SMP/SMA/Umum", description: "Kelas editing video dan menjadi content creator dari nol hingga siap menghasilkan konten profesional.", highlights: ["CapCut & Premiere Pro", "Strategi konten", "Monetisasi"] },
    { title: "Data Science For Teenager", slug: "data-science-teenager", age: "SMA/Umum", description: "Pengenalan data science untuk remaja — analisis data, visualisasi, dan dasar-dasar machine learning.", highlights: ["Analisis data", "Visualisasi", "Python untuk data"] },
    { title: "Cakra Tech (Coding & IT)", slug: "cakra-tech-coding-it", age: "SD/SMP/SMA/Umum", description: "Kursus coding dan teknologi digital untuk mempersiapkan siswa menghadapi era digital dengan keterampilan yang relevan.", highlights: ["Scratch, Python, Web", "Proyek nyata", "Sertifikat kompetensi"] },
  ]);

  addPrograms("cakra-prestasi", [
    { title: "Masuk MTS Unggulan", slug: "masuk-mts-unggulan", age: "SD Kelas 6", description: "Persiapan intensif seleksi masuk MTS unggulan dan pondok modern dengan materi tes akademik dan wawancara.", highlights: ["Tes akademik", "Wawancara", "Simulasi ujian"] },
    { title: "Masuk Swasta National & International", slug: "masuk-swasta-nasional-internasional", age: "SD/SMP", description: "Persiapan masuk sekolah swasta nasional dan internasional favorit dengan kurikulum dan standar seleksi terkini.", highlights: ["Seleksi akademik", "Bahasa Inggris", "Tes potensi"] },
    { title: "Persiapan MAN IC", slug: "persiapan-man-ic", age: "SMP Kelas 9", description: "Bimbingan intensif persiapan seleksi masuk MAN Insan Cendekia dengan fokus pada materi ujian dan pengembangan diri.", highlights: ["Materi tes MAN IC", "Simulasi ujian", "Pembahasan HOTS"] },
    { title: "Persiapan Labschool", slug: "persiapan-labschool", age: "SD/SMP", description: "Program persiapan seleksi masuk Labschool Jakarta untuk jenjang SD dan SMP dengan metode pengajaran terarah.", highlights: ["Tes akademik Labschool", "Psikotes", "Wawancara"] },
    { title: "Persiapan Tarnus & Krida", slug: "persiapan-tarnus-krida", age: "SD/SMP", description: "Persiapan seleksi masuk Taruna Nusantara dan SMA Krida Nusantara dengan program intensif dan pendampingan penuh.", highlights: ["Tes akademik & psikotes", "Kebugaran fisik", "Wawancara & asrama"] },
    { title: "Persiapan MHT", slug: "persiapan-mht", age: "SMP/SMA", description: "Persiapan Matematika, IPA, Bahasa Inggris (MHT) untuk seleksi masuk sekolah unggulan dan akselerasi.", highlights: ["Matematika lanjut", "IPA terpadu", "Bahasa Inggris akademik"] },
    { title: "Cakra Prestasi (Olimpiade)", slug: "cakra-prestasi-olimpiade", age: "SD/SMP/SMA", description: "Program persiapan olimpiade sains, matematika, dan berbagai kompetisi akademik dengan pembinaan intensif.", highlights: ["Olimpiade Sains", "Matematika & IPA", "Pembinaan juara"] },
  ]);

  addPrograms("tryout-cbt", [
    { title: "Psychometrics Credines Modul", slug: "psychometrics-credines", age: "Siswa & Umum", description: "Tes psikometri untuk mengukur potensi akademik, minat bakat, dan kesiapan mental menghadapi ujian.", highlights: ["Tes potensi akademik", "Minat bakat", "Laporan psikometri"] },
    { title: "Intensif TPS & Literasi UTBK", slug: "intensif-tps-literasi-utbk", age: "SMA Kelas 12 & Alumni", description: "Program intensif pemantapan Tes Potensi Skolastik dan Literasi untuk persiapan UTBK SNBT dengan ribuan soal latihan.", highlights: ["TPS & Literasi", "Ribuan soal", "Pembahasan lengkap"] },
    { title: "Akselerasi Penalaran MTK", slug: "akselerasi-penalaran-matematika", age: "SMA Kelas 12 & Alumni", description: "Program akselerasi penalaran matematika untuk UTBK dengan teknik cepat dan trik mengerjakan soal HOTS.", highlights: ["Penalaran matematika", "Trik cepat", "Soal HOTS"] },
    { title: "SNBT AI Predicted", slug: "snbt-ai-predicted", age: "SMA Kelas 12 & Alumni", description: "Tryout UTBK SNBT dengan prediksi soal berbasis AI yang menganalisis tren soal tahun-tahun sebelumnya.", highlights: ["Prediksi AI", "Analisis kelemahan", "Skor real-time"] },
    { title: "Persiapan Simak UI", slug: "persiapan-simak-ui", age: "SMA & Alumni", description: "Persiapan khusus menghadapi SIMAK UI — pembahasan soal tahun sebelumnya, prediksi materi, dan simulasi ujian.", highlights: ["SIMAK UI", "Pembahasan lengkap", "Simulasi ujian"] },
    { title: "Cakra TryOut CBT", slug: "cakra-tryout-cbt", age: "SMA & Umum", description: "Tryout UTBK SNBT, CPNS, dan ujian kedinasan berbasis komputer dengan model soal HOTS dan sistem penilaian real-time.", highlights: ["Soal HOTS update", "Skor real-time", "Pembahasan lengkap"] },
  ]);

  addPrograms("cakra-kedinasan", [
    { title: "Persiapan PKN STAN, STIS", slug: "persiapan-pkn-stan-stis", age: "Lulusan SMA/SMK", description: "Bimbingan intensif seleksi PKN STAN dan STIS — TWK, TIU, TKP, dan tes bahasa Inggris dengan simulasi CAT.", highlights: ["SKD CAT", "Bahasa Inggris", "Psikotes & wawancara"] },
    { title: "Persiapan IPDN, STIN", slug: "persiapan-ipdn-stin", age: "Lulusan SMA/SMK", description: "Program persiapan seleksi IPDN dan STIN dengan materi tes akademik, psikotes, dan kebugaran fisik.", highlights: ["Tes akademik", "Psikotes", "Kebugaran fisik"] },
    { title: "Akpol Akmil", slug: "akpol-akmil", age: "Lulusan SMA/SMK", description: "Persiapan seleksi Akademi Polisi dan Akademi Militer — akademik, psikologi, jasmani, dan mental.", highlights: ["Tes akademik", "Psikologi & jasmani", "Pantukhir"] },
    { title: "Persiapan CPNS", slug: "persiapan-cpns", age: "Umum", description: "Bimbingan seleksi CPNS dengan bank soal SKD dan SKB terupdate serta simulasi CAT online.", highlights: ["SKD (TWK, TIU, TKP)", "SKB", "Simulasi CAT"] },
    { title: "Cakra Kedinasan (Cakdin)", slug: "cakra-kedinasan-cakdin", age: "SMA & Umum", description: "Program persiapan seleksi sekolah kedinasan (STAN, IPDN, STIS, POLTEKIM, dll) dengan simulasi CAT dan psikotes.", highlights: ["Simulasi CAT", "Psikotes & wawancara", "Bank soal kedinasan"] },
  ]);

  addPrograms("cakra-english-centre", [
    { title: "SIT/ICT Preparation", slug: "sit-ict-preparation", age: "SMA/Umum", description: "Persiapan tes bahasa Inggris untuk SIT (Scholastic Integrity Test) dan ICT (International Competency Test).", highlights: ["Tes SIT/ICT", "Strategi menjawab", "Latihan intensif"] },
    { title: "GMAT & GRE", slug: "gmat-gre", age: "Mahasiswa & Umum", description: "Persiapan GMAT dan GRE untuk studi lanjut S2/S3 ke luar negeri dengan materi lengkap dan tips skor tinggi.", highlights: ["GMAT quantitative & verbal", "GRE analytical writing", "Strategi skor tinggi"] },
    { title: "IELTS Preparation", slug: "ielts-preparation", age: "SMA/Umum", description: "Kelas persiapan IELTS akademik dan general training untuk studi, kerja, dan migrasi ke luar negeri.", highlights: ["Listening, Reading, Writing", "Speaking mock test", "Target skor 6.5+"] },
    { title: "TOEFL iBT Preparation", slug: "toefl-ibt-preparation", age: "SMA/Umum", description: "Persiapan TOEFL iBT dengan metode pengajaran interaktif dan simulasi tes berbasis komputer.", highlights: ["TOEFL iBT full simulation", "Integrated writing", "Skor target 90+"] },
    { title: "Cakra English Centre", slug: "cakra-english-centre", age: "Semua Usia", description: "Kursus bahasa Inggris dengan kurikulum internasional untuk meningkatkan kemampuan speaking, writing, listening, dan reading.", highlights: ["TOEFL/IELTS preparation", "Full English conversation", "Sertifikat resmi"] },
  ]);

  addPrograms("cakra-language-centre", [
    { title: "AI Essay & Motivation Letter", slug: "ai-essay-motivation-letter", age: "SMA/Mahasiswa", description: "Bimbingan penulisan esai dan motivation letter untuk aplikasi beasiswa, universitas, dan program internasional.", highlights: ["Bimbingan personal", "AI-assisted writing", "Proofreading & editing"] },
    { title: "Scholarship Interview Coaching", slug: "scholarship-interview-coaching", age: "SMA/Mahasiswa", description: "Coaching wawancara beasiswa dalam dan luar negeri — teknik menjawab, simulasi, dan feedback mendalam.", highlights: ["Simulasi wawancara", "Teknik komunikasi", "Feedback personal"] },
    { title: "Academic Writing", slug: "academic-writing", age: "Mahasiswa/Umum", description: "Pelatihan penulisan akademik — paper, jurnal, proposal penelitian, dan publikasi ilmiah dalam bahasa Inggris.", highlights: ["Paper & jurnal", "Proposal penelitian", "Publikasi ilmiah"] },
    { title: "Cakra Language Centre", slug: "cakra-language-centre", age: "Semua Jenjang", description: "Pusat pembelajaran bahasa asing non-Inggris seperti Mandarin, Jepang, Jerman, Korea, dan Arab untuk studi atau karir.", highlights: ["Bahasa Mandarin, Jepang, Arab", "Sertifikasi kemampuan", "Native speaker"] },
  ]);

  addPrograms("cakra-skills-up", [
    { title: "Public Speaking & Debate", slug: "public-speaking-debate", age: "SMP/SMA/Umum", description: "Pelatihan public speaking dan debat untuk meningkatkan kepercayaan diri, kemampuan presentasi, dan argumentasi.", highlights: ["Teknik presentasi", "Debat kompetitif", "Kepercayaan diri"] },
    { title: "MUN (Model United Nations)", slug: "mun-model-united-nations", age: "SMP/SMA", description: "Persiapan mengikuti konferensi MUN — prosedur, diplomasi, resolusi, dan public speaking dalam bahasa Inggris.", highlights: ["Prosedur MUN", "Diplomasi & negosiasi", "Position paper"] },
    { title: "Microsoft Office Professional", slug: "microsoft-office-professional", age: "SMA/Umum", description: "Pelatihan Microsoft Office (Word, Excel, PowerPoint) tingkat profesional untuk produktivitas kerja dan akademik.", highlights: ["Excel advanced", "PowerPoint presentasi", "Sertifikat kompetensi"] },
    { title: "Cakra Skills Up", slug: "cakra-skills-up", age: "Remaja & Dewasa", description: "Pelatihan keterampilan digital dan praktis untuk mempersiapkan diri menghadapi dunia kerja.", highlights: ["Pelatihan IT & digital", "Keterampilan siap kerja", "Sertifikat resmi"] },
  ]);

  addPrograms("cakra-bimskrip", [
    { title: "Bimbingan Skripsi & Tesis", slug: "bimbingan-skripsi-tesis", age: "Mahasiswa", description: "Pendampingan lengkap penyusunan skripsi dan tesis dari bab 1 hingga sidang, termasuk olah data statistik.", highlights: ["Dari bab 1 sampai sidang", "Olah data SPSS/AMOS", "Revisi & bimbingan intensif"] },
    { title: "Cakra Bimskrip", slug: "cakra-bimskrip", age: "Mahasiswa", description: "Bimbingan penyusunan tugas akhir, skripsi, tesis, dan olah data statistik dengan mentor akademis berpengalaman.", highlights: ["Bimbingan skripsi & tesis", "Olah data statistik", "Pendampingan sampai lulus"] },
  ]);

  addPrograms("cakra-islami-terpadu", [
    { title: "Mengaji & Tahsin Anak", slug: "mengaji-tahsin-anak", age: "Anak-anak (3-12 tahun)", description: "Bimbingan membaca Al-Qur'an dengan tajwid yang benar untuk anak-anak dengan metode interaktif dan menyenangkan.", highlights: ["Mengaji dari nol", "Tajwid dasar", "Metode interaktif"] },
    { title: "Mengaji & Tahsin Dewasa", slug: "mengaji-tahsin-dewasa", age: "Remaja & Dewasa", description: "Perbaikan bacaan Al-Qur'an (tahsin) untuk remaja dan dewasa dengan pengajar profesional dan jadwal fleksibel.", highlights: ["Perbaikan tajwid", "Tahfidz juz 30", "Jadwal fleksibel"] },
    { title: "Cakra Islami Terpadu", slug: "cakra-islami-terpadu", age: "Anak-anak & Remaja", description: "Program bimbingan keislaman terpadu — membaca Al-Qur'an (Tahsin/Tahfidz), fiqih ibadah praktis, dan akhlak.", highlights: ["Tahsin & tahfidz Quran", "Pembiasaan ibadah harian", "Kisah inspiratif Islami"] },
  ]);

  addPrograms("cakra-english-test", [
    { title: "Cakra English Test", slug: "cakra-english-test", age: "SMA & Umum", description: "Tes kemampuan bahasa Inggris standar internasional yang diakui secara global untuk kebutuhan studi dan karir.", highlights: ["Tes standar internasional", "Sertifikat resmi", "Analisa hasil detail"] },
  ]);

  addPrograms("cakra-member", [
    { title: "Jasa Editing Grafis & Video", slug: "jasa-editing-grafis-video", age: "Umum", description: "Layanan editing grafis dan video profesional untuk kebutuhan personal, akademik, dan bisnis.", highlights: ["Desain grafis", "Editing video", "Harga terjangkau"] },
    { title: "Jasa Pembuatan Landing Page & Website", slug: "jasa-landing-page-website", age: "Umum", description: "Jasa pembuatan landing page dan website profesional untuk bisnis, UMKM, dan personal branding.", highlights: ["Landing page modern", "Website UMKM", "Responsive design"] },
    { title: "Dokumentasi & Translator", slug: "dokumentasi-translator", age: "Umum", description: "Layanan dokumentasi acara dan penerjemahan dokumen untuk kebutuhan akademik, bisnis, dan personal.", highlights: ["Dokumentasi event", "Translator tersumpah", "Rapi & profesional"] },
    { title: "Cakra Member", slug: "cakra-member", age: "Semua Pelanggan", description: "Program loyalitas keanggotaan eksklusif dengan diskon biaya bimbingan, voucher belajar, dan prioritas layanan.", highlights: ["Diskon khusus biaya bimbel", "Prioritas pendaftaran", "Akses seminar & webinar gratis"] },
  ]);

  for (const p of programData) {
    await db.insert(programs).values(p).onConflictDoNothing({ target: programs.slug });
  }
  console.log(`  ${programData.length} programs inserted`);

    // ── CakraPoints ──────────────────────────────────────────────────────────
  console.log("Seeding cakra point stats...");
  await db.insert(cakraPointStats).values([
    { label: "Siswa Aktif", value: 1200, suffix: "+", sortOrder: 1 },
    { label: "Poin Ditukarkan", value: 50000, suffix: "+", sortOrder: 2 },
    { label: "Kepuasan Siswa", value: 98, suffix: "%", sortOrder: 3 },
  ]);

  console.log("Seeding cakra point rewards...");
  await db.insert(cakraPointRewards).values([
    { name: "Diskon 25% Kelas", points: 500, icon: "🎓", tag: "Populer", sortOrder: 1 },
    { name: "Modul Belajar Premium", points: 750, icon: "📚", tag: "Hot", sortOrder: 2 },
    { name: "1 Sesi Konsultasi", points: 1000, icon: "💡", tag: "Eksklusif", sortOrder: 3 },
    { name: "Diskon 50% Tryout", points: 1500, icon: "🏆", tag: "Terbaik", sortOrder: 4 },
  ]);

  // ── Bank Accounts ───────────────────────────────────────────────────────
  console.log("Seeding bank accounts...");
  await db.insert(bankAccounts).values([
    { bankName: "BCA", accountNumber: "6611335226", accountHolder: "Citarani Anggraini", isActive: true },
  ]).onConflictDoNothing();

  // ── Blog Posts ──────────────────────────────────────────────────────────
  console.log("Seeding blog posts...");
  const blogData = [
    { id: "1", title: "TOEFL ITP: Soal Comparison (er/est, more/most) dan Irregular Forms", slug: "toefl-itp-comparison", excerpt: "Pelajari aturan comparative & superlative degree beserta irregular forms dan contoh soal lengkap.", content: "<p>TOEFL ITP Structure & Written Expression sering menguji kemampuan peserta dalam memahami comparative dan superlative degree.</p><h3>Aturan Dasar Comparative Degree</h3><p>Comparative degree digunakan untuk membandingkan <strong>dua</strong> hal.</p><ul><li>Adjective 1 suku kata → tambah <strong>-er</strong></li><li>Adjective 2 suku kata berakhiran -y → ubah y jadi <strong>-ier</strong></li><li>Adjective 2+ suku kata → tambah <strong>more</strong></li></ul>", category: "TOEFL", date: "15 Mei 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "2", title: "TOEFL iBT Integrated Writing: Struktur, Strategi & Contoh Jawaban", slug: "toefl-ibt-integrated-writing", excerpt: "Panduan lengkap mengerjakan soal Integrated Writing Task di TOEFL iBT beserta strategi dan contoh jawaban skor tinggi.", content: "<p>Integrated Writing Task di TOEFL iBT mengharuskan peserta untuk membaca sebuah teks akademik singkat, mendengarkan kuliah tentang topik yang sama, kemudian menulis ringkasan.</p><h3>Struktur Integrated Writing</h3><ol><li>Baca teks akademik (3 menit)</li><li>Dengarkan kuliah (2-3 menit)</li><li>Tulis jawaban (20 menit)</li></ol>", category: "TOEFL", date: "10 Mei 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "3", title: "Pembahasan Soal Figural SIMAK UI: Pola, Rotasi & Logika Visual", slug: "simak-ui-figural", excerpt: "Latihan dan pembahasan soal figural SIMAK UI lengkap dengan tips cepat mengerjakan pola gambar, rotasi, dan penalaran visual.", content: "<p>SIMAK UI adalah salah satu ujian masuk PTN paling kompetitif di Indonesia. Soal figural menguji kemampuan penalaran visual peserta.</p><h3>Jenis Soal Figural SIMAK UI</h3><ul><li>Pola gambar berulang</li><li>Rotasi dan refleksi</li><li>Analogi visual</li></ul>", category: "SIMAK UI", date: "5 Mei 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "4", title: "UTBK SNBT 2026: Perubahan Terbaru & Tips Skor Tinggi", slug: "utbk-snbt-2026", excerpt: "Informasi terbaru tentang UTBK SNBT 2026, perubahan kisi-kisi, jadwal, dan strategi meraih skor tinggi.", content: "<p>UTBK SNBT 2026 membawa beberapa perubahan signifikan yang perlu diketahui calon peserta.</p><h3>Perubahan UTBK SNBT 2026</h3><ul><li>Penyesuaian bobot soal</li><li>Materi baru: penalaran matematika diperluas</li><li>Sistem penilaian IRT</li></ul>", category: "SNBT", date: "1 Mei 2026", author: "Tim Cakrawala", readTime: "8 menit" },
    { id: "5", title: "Rekomendasi Jurusan IPA untuk SNBT 2026: Prospek Cerah & Passing Grade", slug: "rekomendasi-jurusan-ipa-snbt-2026", excerpt: "Jurusan IPA dengan prospek kerja cerah dan passing grade SNBT 2026. Cocok untuk siswa SMA IPA yang bingung memilih program studi.", content: "<p>Memilih jurusan adalah keputusan penting yang akan memengaruhi masa depan karir. Berikut rekomendasi jurusan IPA dengan prospek cerah.</p><h3>Top 5 Jurusan IPA Prospek Cerah</h3><ol><li>Kedokteran</li><li>Teknik Informatika</li><li>Farmasi</li><li>Teknik Industri</li><li>Statistika</li></ol>", category: "SNBT", date: "28 April 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "6", title: "Tips Jitu Menaklukkan Soal TPS Penalaran Umum UTBK", slug: "tips-tps-penalaran-umum", excerpt: "Strategi dan trik mengerjakan soal TPS Penalaran Umum UTBK dengan cepat dan tepat.", content: "<p>Tes Potensi Skolastik (TPS) Penalaran Umum menjadi momok bagi banyak peserta UTBK. Padahal, dengan strategi yang tepat, kamu bisa menaklukkan soal-soal ini.</p><h3>Pahami Pola Soal</h3><p>Soal Penalaran Umum biasanya terdiri dari analogi, silogisme, dan analisis informasi. Kenali tiap pola agar kamu bisa mengerjakan dengan cepat.</p>", category: "SNBT", date: "25 April 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "7", title: "Rekomendasi Jurusan IPS untuk SNBT 2026: Peluang & Prospek Karir", slug: "rekomendasi-jurusan-ips-snbt-2026", excerpt: "Jurusan IPS dengan prospek cerah dan passing grade terbaru. Panduan lengkap memilih jurusan untuk siswa SMA IPS.", content: "<p>Banyak siswa IPS bingung memilih jurusan kuliah. Berikut rekomendasi jurusan IPS dengan prospek karir terbaik.</p><h3>Top Jurusan IPS</h3><ol><li>Ilmu Hukum</li><li>Psikologi</li><li>Ilmu Komunikasi</li><li>Hubungan Internasional</li><li>Akuntansi</li></ol>", category: "SNBT", date: "22 April 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "8", title: "Cara Menghitung Passing Grade UTBK dan Strategi Mencapainya", slug: "cara-menghitung-passing-grade-utbk", excerpt: "Pahami cara menghitung passing grade UTBK dan strategi jitu untuk mencapai skor yang kamu targetkan.", content: "<p>Passing grade adalah nilai minimal yang diperlukan untuk lolos ke program studi tertentu. Memahami cara menghitungnya penting untuk menyusun strategi belajar.</p><h3>Cara Menghitung Passing Grade</h3><p>Passing grade dihitung dari total skor UTBK dibagi skor maksimal dikali 100%. Setiap prodi memiliki passing grade berbeda tiap tahunnya.</p>", category: "SNBT", date: "20 April 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "9", title: "Perbedaan SIMAK UI dan UTBK: Mana yang Harus Kamu Pilih?", slug: "perbedaan-simak-ui-utbk", excerpt: "Mana yang lebih susah? Mana peluangnya lebih besar? Simak perbandingan lengkap SIMAK UI vs UTBK.", content: "<p>SIMAK UI dan UTBK adalah dua jalur masuk PTN yang populer. Masing-masing memiliki kelebihan dan tantangan tersendiri.</p><h3>Perbandingan</h3><p>UTBK SNBT lebih fokus pada tes potensi skolastik, sedangkan SIMAK UI menguji penguasaan materi akademik lebih dalam.</p>", category: "SIMAK UI", date: "18 April 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "10", title: "Pembahasan Soal Matematika SIMAK UI: Kalkulus & Aljabar", slug: "pembahasan-matematika-simak-ui", excerpt: "Pembahasan lengkap soal matematika SIMAK UI untuk topik kalkulus dan aljabar beserta tips pengerjaan cepat.", content: "<p>Matematika menjadi salah satu mata ujian tersulit di SIMAK UI. Fokus utama ada di kalkulus dan aljabar linear.</p><h3>Topik yang Sering Keluar</h3><ul><li>Limit dan turunan</li><li>Integral dan aplikasinya</li><li>Matriks dan determinan</li></ul>", category: "SIMAK UI", date: "15 April 2026", author: "Tim Cakrawala", readTime: "8 menit" },
    { id: "11", title: "TOEFL Listening Comprehension: Tips Mendapat Skor Tinggi", slug: "toefl-listening-tips", excerpt: "Tingkatkan skor TOEFL Listening dengan tips dan strategi efektif dari tutor berpengalaman.", content: "<p>Bagian Listening Comprehension sering menjadi tantangan bagi peserta TOEFL. Padahal dengan latihan yang tepat, skor tinggi bisa diraih.</p><h3>Strategi Listening</h3><ul><li>Fokus pada kata kunci</li><li>Catat informasi penting</li><li>Jangan panik jika ada yang terlewat</li></ul>", category: "TOEFL", date: "12 April 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "12", title: "TOEFL Structure: Panduan Lengkap Subject-Verb Agreement", slug: "toefl-structure-subject-verb", excerpt: "Pahami aturan Subject-Verb Agreement di TOEFL Structure lengkap dengan contoh soal dan pembahasan.", content: "<p>Subject-Verb Agreement adalah salah satu topik paling sering diuji di TOEFL Structure. Kesalahan kecil bisa berakibat fatal pada skor.</p><h3>Aturan Dasar</h3><p>Kata kerja harus sesuai dengan subjeknya. Subjek tunggal pakai verb tunggal, subjek jamak pakai verb jamak.</p>", category: "TOEFL", date: "10 April 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "13", title: "IELTS Speaking Part 2: Cara Menjawab Cue Card dengan Percaya Diri", slug: "ielts-speaking-cue-card", excerpt: "Strategi jitu menghadapi IELTS Speaking Part 2 beserta contoh jawaban untuk skor 7+.", content: "<p>IELTS Speaking Part 2 mengharuskan kamu berbicara selama 1-2 menit tentang topik tertentu. Persiapan matang adalah kunci sukses.</p><h3>Struktur Jawaban</h3><ol><li>Introduction (15 detik)</li><li>Deskripsi utama (30 detik)</li><li>Detail & contoh (30 detik)</li><li>Penutup & perasaan (15 detik)</li></ol>", category: "IELTS", date: "8 April 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "14", title: "IELTS Writing Task 2: Struktur Essay dan Contoh Soal", slug: "ielts-writing-task-2", excerpt: "Panduan menulis essay IELTS Task 2 dengan struktur yang benar dan contoh jawaban skor tinggi.", content: "<p>IELTS Writing Task 2 adalah essay akademik minimal 250 kata. Struktur yang baik akan membantu kamu meraih skor tinggi.</p><h3>Struktur Essay</h3><ul><li>Pendahuluan (parafrase + thesis)</li><li>Body paragraph 1 (argumen utama)</li><li>Body paragraph 2 (argumen pendukung)</li><li>Kesimpulan</li></ul>", category: "IELTS", date: "5 April 2026", author: "Tim Cakrawala", readTime: "8 menit" },
    { id: "15", title: "Persiapan CPNS 2026: Materi SKD yang Wajib Dikuasai", slug: "persiapan-cpns-2026-skd", excerpt: "Materi SKD CPNS 2026 meliputi TWK, TIU, dan TKP. Pelajari kisi-kisi terbaru dan tips mengerjakannya.", content: "<p>Seleksi CPNS 2026 akan segera dibuka. Persiapkan dirimu dengan memahami materi SKD yang diujikan.</p><h3>Tiga Pilar SKD</h3><ul><li>Tes Wawasan Kebangsaan (TWK)</li><li>Tes Intelegensi Umum (TIU)</li><li>Tes Karakteristik Pribadi (TKP)</li></ul>", category: "CPNS", date: "3 April 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "16", title: "Contoh Soal TIU CPNS dan Pembahasan Lengkap", slug: "contoh-soal-tiu-cpns", excerpt: "Latihan soal TIU CPNS lengkap dengan pembahasan detail untuk membantu kamu memahami pola soal.", content: "<p>Tes Intelegensi Umum (TIU) menguji kemampuan verbal, numerik, dan figural. Berikut contoh soal dan pembahasannya.</p><h3>Soal Numerik</h3><p>Jika 3x + 7 = 22, maka nilai x adalah... Pembahasan: 3x = 15, x = 5.</p>", category: "CPNS", date: "1 April 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "17", title: "Tips Lolos TWK CPNS: Hafalan Pancasila dan UUD 1945", slug: "tips-lolos-twk-cpns", excerpt: "Strategi menghafal materi TWK CPNS dengan cepat dan efektif untuk lolos passing grade.", content: "<p>Tes Wawasan Kebangsaan (TWK) sering menjadi penyebab gagalnya peserta CPNS. Berikut tips untuk menguasainya.</p><h3>Materi Utama TWK</h3><ul><li>Pancasila (nilai-nilai dan pengamalan)</li><li>UUD 1945 (pasal-pasal penting)</li><li>Bhinneka Tunggal Ika</li><li>NKRI</li></ul>", category: "CPNS", date: "30 Maret 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "18", title: "Pendaftaran PKN STAN 2026: Syarat, Jadwal & Tips Lolos", slug: "pendaftaran-pkn-stan-2026", excerpt: "Informasi lengkap pendaftaran PKN STAN 2026, syarat dokumen, jadwal seleksi, dan tips lolos.", content: "<p>PKN STAN adalah salah satu sekolah kedinasan paling diminati. Persiapkan diri kamu sejak sekarang.</p><h3>Jadwal Seleksi</h3><p>Pendaftaran biasanya dibuka April-Mei. Seleksi terdiri dari SKD CAT, Tes Bahasa Inggris, dan Psikotes.</p>", category: "Kedinasan", date: "28 Maret 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "19", title: "Perbedaan IPDN, STIN, dan PKN STAN: Mana yang Cocok untukmu?", slug: "perbedaan-ipdn-stin-pkn-stan", excerpt: "Bandingkan IPDN, STIN, dan PKN STAN dari segi prospek karir, kurikulum, dan tingkat kesulitan seleksi.", content: "<p>Bingung memilih sekolah kedinasan? Berikut perbandingan tiga sekolah kedinasan favorit di Indonesia.</p><h3>Perbandingan</h3><ul><li>IPDN: fokus pemerintahan dalam negeri</li><li>STIN: fokus intelijen negara</li><li>PKN STAN: fokus keuangan negara</li></ul>", category: "Kedinasan", date: "25 Maret 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "20", title: "Tips Lolos Seleksi Akademik Akpol dan Akmil", slug: "tips-lolos-akpol-akmil", excerpt: "Panduan lengkap persiapan seleksi Akpol dan Akmil, dari tes akademik hingga pantukhir.", content: "<p>Akademi Polisi (Akpol) dan Akademi Militer (Akmil) memiliki seleksi yang sangat ketat. Persiapkan fisik dan mentalmu.</p><h3>Tahapan Seleksi</h3><ol><li>Seleksi administrasi</li><li>Tes akademik</li><li>Tes psikologi</li><li>Tes kesehatan</li><li>Tes jasmani</li><li>Pantukhir</li></ol>", category: "Kedinasan", date: "22 Maret 2026", author: "Tim Cakrawala", readTime: "8 menit" },
    { id: "21", title: "Belajar Coding untuk Anak: Mulai dari Mana?", slug: "belajar-coding-anak", excerpt: "Panduan belajar coding untuk anak SD dan SMP dengan Scratch, Python, dan game development.", content: "<p>Coding adalah skill penting di era digital. Anak-anak bisa mulai belajar coding sejak usia SD dengan cara yang menyenangkan.</p><h3>Rekomendasi Platform</h3><ul><li>Scratch (usia 7+)</li><li>Code.org (usia 5+)</li><li>Python dasar (usia 10+)</li></ul>", category: "Tips Belajar", date: "20 Maret 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "22", title: "Cara Meningkatkan Konsentrasi Belajar pada Anak", slug: "meningkatkan-konsentrasi-belajar-anak", excerpt: "Tips dan trik meningkatkan konsentrasi belajar anak agar lebih fokus dan efektif menyerap pelajaran.", content: "<p>Anak sulit konsentrasi saat belajar? Berikut tips yang bisa orang tua terapkan di rumah.</p><h3>Tips Meningkatkan Konsentrasi</h3><ul><li>Buat jadwal belajar rutin</li><li>Hindari gangguan gadget</li><li>Gunakan teknik pomodoro untuk anak</li><li>Sediakan lingkungan belajar yang nyaman</li></ul>", category: "Tips Belajar", date: "18 Maret 2026", author: "Tim Cakrawala", readTime: "4 menit" },
    { id: "23", title: "Metode Belajar Efektif untuk Siswa SMP Menghadapi Ujian Sekolah", slug: "metode-belajar-smp-ujian", excerpt: "Strategi belajar efektif untuk siswa SMP dalam menghadapi ujian sekolah dan persiapan masuk SMA favorit.", content: "<p>Ujian sekolah adalah momen penting bagi siswa SMP. Dengan metode belajar yang tepat, target nilai tinggi bisa tercapai.</p><h3>Metode Terbukti</h3><ul><li>Belajar aktif dengan mind mapping</li><li>Latihan soal rutin</li><li>Belajar kelompok</li><li>Evaluasi diri secara berkala</li></ul>", category: "Tips Belajar", date: "15 Maret 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "24", title: "Les Privat vs Bimbel Kelompok: Mana yang Lebih Efektif?", slug: "les-privat-vs-bimbel-kelompok", excerpt: "Perbandingan antara les privat dan bimbel kelompok untuk menentukan pilihan terbaik bagi siswa.", content: "<p>Banyak orang tua bingung memilih antara les privat atau bimbel kelompok. Keduanya punya kelebihan masing-masing.</p><h3>Perbandingan</h3><p>Les privat memberikan perhatian penuh dari tutor, sedangkan bimbel kelompok lebih terjangkau dan melatih interaksi sosial.</p>", category: "Tips Belajar", date: "12 Maret 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "25", title: "Pentingnya Pendidikan Karakter untuk Anak Usia Dini", slug: "pendidikan-karakter-anak-usia-dini", excerpt: "Mengapa pendidikan karakter penting untuk anak usia dini dan bagaimana cara menanamkannya.", content: "<p>Pendidikan karakter adalah fondasi penting dalam tumbuh kembang anak. Mulai tanamkan sejak usia dini.</p><h3>Nilai Karakter Utama</h3><ul><li>Kejujuran</li><li>Tanggung jawab</li><li>Disiplin</li><li>Empati</li></ul>", category: "Tips Belajar", date: "10 Maret 2026", author: "Tim Cakrawala", readTime: "4 menit" },
    { id: "26", title: "Panduan Memilih Jurusan Kuliah untuk Siswa SMA", slug: "panduan-memilih-jurusan-kuliah", excerpt: "Tips memilih jurusan kuliah yang tepat sesuai minat, bakat, dan prospek karir untuk siswa SMA.", content: "<p>Memilih jurusan kuliah adalah keputusan besar. Jangan terburu-buru, pertimbangkan beberapa faktor berikut.</p><h3>Faktor Penting</h3><ul><li>Minat dan bakat pribadi</li><li>Prospek karir ke depan</li><li>Passing grade dan peluang lolos</li><li>Biaya pendidikan</li></ul>", category: "Tips Belajar", date: "8 Maret 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "27", title: "Tips Menghadapi Ujian Nasional Berbasis Komputer (UNBK)", slug: "tips-unbk", excerpt: "Strategi sukses menghadapi UNBK dengan persiapan matang dan tips mengerjakan soal di komputer.", content: "<p>UNBK membutuhkan persiapan berbeda dari ujian kertas. Biasakan diri mengerjakan soal di komputer.</p><h3>Tips UNBK</h3><ul><li>Latihan tryout online rutin</li><li>Kuasi navigasi sistem ujian</li><li>Atur waktu dengan baik</li><li>Istirahat cukup sebelum ujian</li></ul>", category: "Tips Belajar", date: "5 Maret 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "28", title: "Cara Belajar Bahasa Inggris Otodidak untuk Pemula", slug: "belajar-inggris-otodidak", excerpt: "Panduan belajar bahasa Inggris secara otodidak untuk pemula dengan sumber daya gratis dan berbayar.", content: "<p>Belajar bahasa Inggris tidak harus mahal. Kamu bisa mulai secara otodidak dengan sumber daya yang tepat.</p><h3>Langkah Awal</h3><ul><li>Perbanyak kosakata sehari-hari</li><li>Dengarkan podcast bahasa Inggris</li><li>Tonton film dengan subtitle</li><li>Praktek berbicara setiap hari</li></ul>", category: "Bahasa Inggris", date: "2 Maret 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "29", title: "Perbedaan TOEFL ITP dan iBT: Mana yang Kamu Butuhkan?", slug: "perbedaan-toefl-itp-ibt", excerpt: "Pahami perbedaan TOEFL ITP dan iBT dari segi format, harga, skor, dan penerimaan institusi.", content: "<p>TOEFL ITP dan iBT adalah dua jenis tes TOEFL yang berbeda. Pilih sesuai kebutuhanmu.</p><h3>Perbedaan Utama</h3><ul><li>ITP lebih murah, iBT lebih mahal</li><li>ITP tidak tes speaking, iBT tes semua skill</li><li>Skor iBT lebih diterima internasional</li></ul>", category: "TOEFL", date: "28 Februari 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "30", title: "Rahasia Mendapat Skor IELTS 7.0 dalam 3 Bulan", slug: "rahasia-ielts-7-3-bulan", excerpt: "Strategi belajar IELTS selama 3 bulan untuk mencapai skor 7.0 dari nol.", content: "<p>Skor IELTS 7.0 adalah target banyak peserta. Dengan strategi yang tepat, target ini bisa dicapai dalam 3 bulan.</p><h3>Rencana Belajar</h3><ul><li>Bulan 1: Fokus pada listening dan reading</li><li>Bulan 2: Fokus pada writing dan speaking</li><li>Bulan 3: Full mock test dan evaluasi</li></ul>", category: "IELTS", date: "25 Februari 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "31", title: "Contoh Soal TKP CPNS dan Strategi Menjawabnya", slug: "contoh-soal-tkp-cpns", excerpt: "Pembahasan soal TKP CPNS lengkap dengan strategi menjawab untuk mendapatkan skor maksimal.", content: "<p>TKP menguji karakteristik pribadi peserta. Tidak ada jawaban benar atau salah, tapi ada skor prioritas.</p><h3>Strategi TKP</h3><p>Pilih jawaban yang paling mencerminkan integritas, profesionalisme, dan pelayanan publik.</p>", category: "CPNS", date: "22 Februari 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "32", title: "Mengenal Jurusan Data Science: Prospek dan Passing Grade", slug: "mengenal-jurusan-data-science", excerpt: "Informasi lengkap tentang jurusan Data Science, prospek karir, dan passing grade di PTN ternama.", content: "<p>Data Science adalah salah satu jurusan dengan prospek cerah di era digital. Banyak PTN mulai membuka program studi ini.</p><h3>Mata Kuliah Utama</h3><ul><li>Statistika dan probabilitas</li><li>Machine learning</li><li>Big data analytics</li><li>Visualisasi data</li></ul>", category: "SNBT", date: "20 Februari 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "33", title: "Tips Memilih Les Privat untuk Anak SD", slug: "tips-memilih-les-privat-sd", excerpt: "Panduan memilih les privat untuk anak SD yang tepat, dari kualifikasi guru hingga metode belajar.", content: "<p>Les privat untuk anak SD membutuhkan pendekatan khusus. Pilih tutor yang sabar dan berpengalaman dengan anak-anak.</p><h3>Kriteria Tutor SD</h3><ul><li>Memahami psikologi anak</li><li>Metode pengajaran menyenangkan</li><li>Komunikasi aktif dengan orang tua</li></ul>", category: "Tips Belajar", date: "18 Februari 2026", author: "Tim Cakrawala", readTime: "4 menit" },
    { id: "34", title: "Keuntungan Belajar di Rumah dengan Les Privat Home Visit", slug: "keuntungan-les-privat-home-visit", excerpt: "Les privat home visit memberikan kenyamanan dan fleksibilitas belajar di rumah bersama tutor profesional.", content: "<p>Les privat home visit semakin populer karena kemudahan dan efektivitasnya. Berikut keuntungannya.</p><h3>Keuntungan</h3><ul><li>Belajar di lingkungan nyaman</li><li>Jadwal fleksibel</li><li>Fokus 1-on-1 dengan tutor</li><li>Orang tua bisa memantau langsung</li></ul>", category: "Tips Belajar", date: "15 Februari 2026", author: "Tim Cakrawala", readTime: "4 menit" },
    { id: "35", title: "Olimpiade Sains Nasional: Persiapan dan Tips Juara", slug: "olimpiade-sains-nasional", excerpt: "Panduan persiapan Olimpiade Sains Nasional (OSN) lengkap dengan tips dari para juara.", content: "<p>OSN adalah kompetisi sains bergengsi di Indonesia. Persiapan matang adalah kunci meraih medali.</p><h3>Tips Persiapan</h3><ul><li>Kuasai konsep dasar</li><li>Latihan soal tahun sebelumnya</li><li>Ikut pembinaan intensif</li><li>Jaga kesehatan selama persiapan</li></ul>", category: "Tips Belajar", date: "12 Februari 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "36", title: "Belajar Bahasa Mandarin untuk Pemula: Tips dan Sumber Belajar", slug: "belajar-mandarin-pemula", excerpt: "Panduan belajar bahasa Mandarin untuk pemula, dari pengenalan nada hingga sumber belajar online.", content: "<p>Bahasa Mandarin semakin penting di era global. Mulai belajar dari dasar dengan panduan ini.</p><h3>Langkah Awal</h3><ul><li>Kenali 4 nada dalam Mandarin</li><li>Pelajari pinyin dasar</li><li>Hafalkan karakter sederhana</li><li>Latihan percakapan sehari-hari</li></ul>", category: "Bahasa Asing", date: "10 Februari 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "37", title: "Tips Lulus Ujian SIMAK UI Pascasarjana", slug: "tips-lulus-simak-ui-pascasarjana", excerpt: "Strategi khusus menghadapi SIMAK UI untuk program pascasarjana (S2) dengan tips dari alumni.", content: "<p>SIMAK UI untuk program pascasarjana memiliki tingkat persaingan yang ketat. Berikut tips dari para alumni.</p><h3>Tips Sukses</h3><ul><li>Pelajari bidang ilmu yang dituju</li><li>Siapkan proposal penelitian</li><li>Latihan wawancara akademik</li></ul>", category: "SIMAK UI", date: "8 Februari 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "38", title: "Cara Membuat Motivation Letter Beasiswa yang Menarik", slug: "cara-membuat-motivation-letter-beasiswa", excerpt: "Panduan menulis motivation letter untuk aplikasi beasiswa yang menarik perhatian reviewer.", content: "<p>Motivation letter adalah dokumen krusial dalam aplikasi beasiswa. Buatlah yang menarik dan autentik.</p><h3>Struktur</h3><ol><li>Pembukaan yang kuat</li><li>Cerita latar belakang</li><li>Prestasi dan pengalaman</li><li>Rencana masa depan</li></ol>", category: "Tips Belajar", date: "5 Februari 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "39", title: "Strategi Sukses Ujian Mandiri PTN 2026", slug: "strategi-ujian-mandiri-ptn-2026", excerpt: "Panduan lengkap menghadapi ujian mandiri PTN 2026, dari pendaftaran hingga tips mengerjakan soal.", content: "<p>Ujian mandiri adalah jalur alternatif masuk PTN favorit. Persiapkan diri dengan strategi yang tepat.</p><h3>Tips</h3><ul><li>Cek jadwal ujian mandiri tiap PTN</li><li>Pelajari materi spesifik PTN tujuan</li><li>Latihan soal tahun sebelumnya</li></ul>", category: "SNBT", date: "2 Februari 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "40", title: "Manfaat Belajar Kelompok untuk Siswa SMP dan SMA", slug: "manfaat-belajar-kelompok", excerpt: "Belajar kelompok efektif meningkatkan pemahaman materi. Simak tips dan manfaat belajar kelompok.", content: "<p>Belajar kelompok bisa menjadi alternatif efektif selain les privat. Asalkan dilakukan dengan benar.</p><h3>Tips Belajar Kelompok</h3><ul><li>Buat jadwal rutin</li><li>Tentukan tujuan setiap sesi</li><li>Diskusikan materi bergantian</li><li>Evaluasi hasil belajar</li></ul>", category: "Tips Belajar", date: "30 Januari 2026", author: "Tim Cakrawala", readTime: "4 menit" },
    { id: "41", title: "Kursus Public Speaking untuk Remaja: Pentingnya Soft Skill", slug: "kursus-public-speaking-remaja", excerpt: "Public speaking adalah soft skill penting untuk remaja. Manfaat dan cara melatihnya sejak dini.", content: "<p>Kemampuan public speaking sangat penting untuk masa depan remaja. Mulai latih sejak sekarang.</p><h3>Manfaat</h3><ul><li>Meningkatkan kepercayaan diri</li><li>Kemampuan presentasi lebih baik</li><li>Siap menghadapi wawancara</li><li>Leadership skill terasah</li></ul>", category: "Tips Belajar", date: "28 Januari 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "42", title: "Panduan Lengkap SKB CPNS 2026", slug: "panduan-skb-cpns-2026", excerpt: "Informasi lengkap tentang Seleksi Kompetensi Bidang (SKB) CPNS 2026, materi, dan tips persiapan.", content: "<p>SKB adalah tahap kedua seleksi CPNS setelah SKD. Setiap instansi memiliki materi SKB yang berbeda.</p><h3>Tips SKB</h3><ul><li>Pelajari bidang tugas instansi</li><li>Latihan soal bidang studi</li><li>Ikuti bimbingan SKB</li></ul>", category: "CPNS", date: "25 Januari 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "43", title: "Cara Memilih Program Studi di Universitas Luar Negeri", slug: "memilih-prodi-luar-negeri", excerpt: "Tips memilih program studi dan universitas di luar negeri sesuai minat dan budget.", content: "<p>Studi di luar negeri adalah impian banyak siswa. Pilih program studi yang tepat dengan panduan ini.</p><h3>Faktor Pertimbangan</h3><ul><li>Akreditasi universitas</li><li>Biaya kuliah dan hidup</li><li>Beasiswa yang tersedia</li><li>Prospek kerja setelah lulus</li></ul>", category: "Tips Belajar", date: "22 Januari 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "44", title: "Tips Menulis Essay Beasiswa yang Memenangkan Hati Reviewer", slug: "tips-menulis-essay-beasiswa", excerpt: "Strategi menulis essay beasiswa yang kuat dan meyakinkan untuk meningkatkan peluang lolos.", content: "<p>Essay beasiswa adalah kesempatanmu menunjukkan siapa dirimu. Buatlah yang berkesan.</p><h3>Tips Penting</h3><ul><li>Ceritakan pengalaman unikmu</li><li>Tunjukkan dampak yang kamu buat</li><li>Jelaskan rencana masa depan</li><li>Proofreading sebelum submit</li></ul>", category: "Tips Belajar", date: "20 Januari 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "45", title: "Les Coding untuk Anak: Scratch vs Python untuk Pemula", slug: "les-coding-anak-scratch-vs-python", excerpt: "Perbandingan Scratch dan Python untuk anak pemula belajar coding. Mana yang lebih cocok?", content: "<p>Scratch dan Python adalah dua pilihan populer untuk anak belajar coding. Pilih sesuai usia anak.</p><h3>Rekomendasi Usia</h3><ul><li>Scratch: usia 7-12 tahun</li><li>Python: usia 10+ tahun</li><li>Keduanya: usia 10-12 tahun</li></ul>", category: "Tips Belajar", date: "18 Januari 2026", author: "Tim Cakrawala", readTime: "4 menit" },
    { id: "46", title: "Persiapan Masuk SMA Favorit: Tips dan Strategi", slug: "persiapan-masuk-sma-favorit", excerpt: "Panduan persiapan masuk SMA favorit melalui jalur prestasi, zonasi, dan tes masuk.", content: "<p>Masuk SMA favorit butuh persiapan matang. Mulai dari sekarang dengan strategi yang tepat.</p><h3>Jalur Masuk</h3><ul><li>Jalur prestasi (nilai rapor)</li><li>Jalur zonasi (domisili)</li><li>Jalur tes/afirmasi</li></ul>", category: "Tips Belajar", date: "15 Januari 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "47", title: "Tips Menghadapi Psikotes Seleksi Kerja dan Kuliah", slug: "tips-psikotes-kerja-kuliah", excerpt: "Panduan menghadapi psikotes untuk seleksi kerja dan kuliah lengkap dengan contoh soal.", content: "<p>Psikotes adalah tahap seleksi yang sering bikin deg-degan. Dengan latihan yang cukup, kamu bisa melewatinya.</p><h3>Jenis Psikotes</h3><ul><li>Logika aritmatika</li><li>Sinonim dan antonim</li><li>Deret gambar</li><li>Kepribadian (disc/tes pauli)</li></ul>", category: "Tips Belajar", date: "12 Januari 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "48", title: "Cara Efektif Menghafal Rumus Matematika untuk Ujian", slug: "cara-menghafal-rumus-matematika", excerpt: "Teknik menghafal rumus matematika dengan cepat dan tidak mudah lupa saat ujian.", content: "<p>Matematika identik dengan rumus. Hafalkan dengan cara yang benar agar tidak mudah lupa.</p><h3>Teknik Menghafal</h3><ul><li>Pahami konsep, bukan hafalan</li><li>Buat catatan rumus ringkas</li><li>Latihan soal rutin</li><li>Gunakan mnemonic</li></ul>", category: "Tips Belajar", date: "10 Januari 2026", author: "Tim Cakrawala", readTime: "4 menit" },
    { id: "49", title: "Rekomendasi Buku Belajar Bahasa Inggris untuk Pemula", slug: "rekomendasi-buku-inggris-pemula", excerpt: "Rekomendasi buku belajar bahasa Inggris terbaik untuk pemula dari level dasar hingga mahir.", content: "<p>Buku adalah sumber belajar bahasa Inggris yang masih relevan. Berikut rekomendasi buku terbaik.</p><h3>Rekomendasi Buku</h3><ul><li>English Grammar in Use (Murphy)</li><li>Headway Series</li><li>Oxford Practice Grammar</li></ul>", category: "Bahasa Inggris", date: "8 Januari 2026", author: "Tim Cakrawala", readTime: "4 menit" },
    { id: "50", title: "Persiapan UTBK 2026: Timeline Belajar 6 Bulan", slug: "persiapan-utbk-2026-timeline", excerpt: "Rencana belajar 6 bulan untuk persiapan UTBK 2026 yang terstruktur dan efektif.", content: "<p>UTBK 2026 masih beberapa bulan lagi. Manfaatkan waktu dengan rencana belajar yang terstruktur.</p><h3>Timeline 6 Bulan</h3><ul><li>Bulan 1-2: Kuasai konsep dasar</li><li>Bulan 3-4: Latihan soal per bab</li><li>Bulan 5: Tryout dan evaluasi</li><li>Bulan 6: Pemantapan akhir</li></ul>", category: "SNBT", date: "5 Januari 2026", author: "Tim Cakrawala", readTime: "7 menit" },
    { id: "51", title: "Mengenal Kurikulum Merdeka: Perubahan dan Dampaknya", slug: "mengenal-kurikulum-merdeka", excerpt: "Penjelasan lengkap tentang Kurikulum Merdeka, perbedaannya dengan K13, dan dampak pada siswa.", content: "<p>Kurikulum Merdeka hadir sebagai penyempurnaan K13. Pahami perubahannya agar siswa dan orang tua tidak bingung.</p><h3>Perbedaan Utama</h3><ul><li>Lebih fleksibel dalam pemilihan mata pelajaran</li><li>Fokus pada pengembangan karakter</li><li>Project-based learning</li></ul>", category: "Tips Belajar", date: "3 Januari 2026", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "52", title: "Tips Belajar Bahasa Arab untuk Pemula", slug: "tips-belajar-bahasa-arab-pemula", excerpt: "Panduan belajar bahasa Arab untuk pemula, dari huruf hijaiyah hingga percakapan dasar.", content: "<p>Bahasa Arab adalah bahasa Al-Qur'an dan bahasa internasional yang penting dipelajari.</p><h3>Langkah Awal</h3><ul><li>Kenali huruf hijaiyah</li><li>Pelajari harakat (tanda baca)</li><li>Hafalkan kosakata sehari-hari</li><li>Latihan membaca Al-Qur'an</li></ul>", category: "Bahasa Asing", date: "1 Januari 2026", author: "Tim Cakrawala", readTime: "5 menit" },
    { id: "53", title: "Strategi Belajar Efektif untuk Siswa SD Kelas 6", slug: "strategi-belajar-sd-kelas-6", excerpt: "Tips belajar efektif untuk siswa SD kelas 6 dalam menghadapi ujian sekolah dan masuk SMP.", content: "<p>Kelas 6 SD adalah tahun penting sebelum melanjutkan ke SMP. Persiapkan dengan baik.</p><h3>Fokus Belajar</h3><ul><li>Matematika dasar</li><li>Bahasa Indonesia (membaca pemahaman)</li><li>IPA (konsep dasar)</li><li>Bahasa Inggris dasar</li></ul>", category: "Tips Belajar", date: "28 Desember 2025", author: "Tim Cakrawala", readTime: "4 menit" },
    { id: "54", title: "Cara Memulai Belajar Digital Marketing untuk Pemula", slug: "belajar-digital-marketing-pemula", excerpt: "Panduan belajar digital marketing dari nol untuk pemula yang ingin memulai karir di bidang ini.", content: "<p>Digital marketing adalah skill yang sangat dibutuhkan di era digital. Mulai belajar dari dasar.</p><h3>Materi Dasar</h3><ul><li>SEO (Search Engine Optimization)</li><li>Social media marketing</li><li>Email marketing</li><li>Google Ads & Facebook Ads</li></ul>", category: "Tips Belajar", date: "25 Desember 2025", author: "Tim Cakrawala", readTime: "6 menit" },
    { id: "55", title: "Pentingnya Les Privat untuk Persiapan Ujian Sekolah", slug: "pentingnya-les-privat-ujian", excerpt: "Mengapa les privat efektif untuk persiapan ujian sekolah dan bagaimana memilih program yang tepat.", content: "<p>Les privat memberikan pendampingan intensif yang sulit didapatkan di belajar mandiri atau bimbel kelompok.</p><h3>Manfaat Les Privat</h3><ul><li>Materi disesuaikan dengan kebutuhan</li><li>Fokus pada kelemahan siswa</li><li>Jadwal fleksibel</li><li>Evaluasi perkembangan rutin</li></ul>", category: "Tips Belajar", date: "22 Desember 2025", author: "Tim Cakrawala", readTime: "4 menit" },
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

  console.log("Seeding prices...");
  const priceData = [
    { jenjang: "PAUD/TK", sesi: 6, harga: 540000, isPopular: true },
    { jenjang: "PAUD/TK", sesi: 12, harga: 960000, isPopular: false },
    { jenjang: "PAUD/TK", sesi: 24, harga: 1680000, isPopular: false },
    { jenjang: "SD", sesi: 6, harga: 600000, isPopular: false },
    { jenjang: "SD", sesi: 12, harga: 1080000, isPopular: true },
    { jenjang: "SD", sesi: 24, harga: 1920000, isPopular: false },
    { jenjang: "SMP", sesi: 6, harga: 720000, isPopular: false },
    { jenjang: "SMP", sesi: 12, harga: 1260000, isPopular: true },
    { jenjang: "SMP", sesi: 24, harga: 2280000, isPopular: false },
    { jenjang: "SMA", sesi: 6, harga: 840000, isPopular: false },
    { jenjang: "SMA", sesi: 12, harga: 1440000, isPopular: true },
    { jenjang: "SMA", sesi: 24, harga: 2640000, isPopular: false },
    { jenjang: "Umum/Mahasiswa", sesi: 6, harga: 900000, isPopular: false },
    { jenjang: "Umum/Mahasiswa", sesi: 12, harga: 1560000, isPopular: true },
    { jenjang: "Umum/Mahasiswa", sesi: 24, harga: 2880000, isPopular: false },
  ];
  await db.insert(prices).values(priceData).onConflictDoNothing();

  console.log("Seeding vouchers...");
  await db.insert(vouchers).values([
    { code: "CAKRAWALA10", type: "nominal", value: 100000, minPurchase: 500000, maxUses: 50, isActive: true },
    { code: "DISKON15", type: "percentage", value: 15, minPurchase: 1000000, maxUses: 30, isActive: true },
    { code: "GRATIS50", type: "nominal", value: 50000, minPurchase: 300000, maxUses: 100, isActive: true },
  ]).onConflictDoNothing();

  console.log("✅ Seed selesai!");
}

seed().catch(console.error);
