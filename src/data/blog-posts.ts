export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "TOEFL ITP: Soal Comparison (er/est, more/most) dan Irregular Forms",
    slug: "toefl-itp-comparison",
    excerpt:
      '"The weather today is _____ than yesterday (bad/worse/worst)" — pelajari aturan comparative & superlative degree beserta irregular forms dan contoh soal lengkap.',
    content: `TOEFL ITP Structure & Written Expression sering menguji kemampuan peserta dalam memahami comparative dan superlative degree. Bagian ini menguji pemahaman Anda tentang bagaimana membandingkan dua hal (comparative) atau lebih dari dua hal (superlative).

<h3>Aturan Dasar Comparative Degree</h3>
<p>Comparative degree digunakan untuk membandingkan <strong>dua</strong> hal. Polanya:</p>
<ul>
  <li>Adjective 1 suku kata → tambah <strong>-er</strong> (fast → faster, tall → taller)</li>
  <li>Adjective 2 suku kata berakhiran -y → ubah y jadi <strong>-ier</strong> (happy → happier, easy → easier)</li>
  <li>Adjective 2+ suku kata → tambah <strong>more</strong> (beautiful → more beautiful, expensive → more expensive)</li>
</ul>

<h3>Aturan Dasar Superlative Degree</h3>
<p>Superlative degree digunakan untuk membandingkan <strong>tiga atau lebih</strong> hal. Polanya:</p>
<ul>
  <li>Adjective 1 suku kata → tambah <strong>-est</strong> (fast → fastest, tall → tallest)</li>
  <li>Adjective 2 suku kata berakhiran -y → ubah y jadi <strong>-iest</strong> (happy → happiest, easy → easiest)</li>
  <li>Adjective 2+ suku kata → tambah <strong>most</strong> (beautiful → most beautiful)</li>
</ul>

<h3>Irregular Forms (Bentuk Tidak Beraturan)</h3>
<p>Beberapa kata sifat memiliki bentuk comparative dan superlative yang tidak beraturan:</p>
<ul>
  <li><strong>Good/Well</strong> → better → best</li>
  <li><strong>Bad</strong> → worse → worst</li>
  <li><strong>Far</strong> → farther/further → farthest/furthest</li>
  <li><strong>Little</strong> → less → least</li>
  <li><strong>Many/Much</strong> → more → most</li>
</ul>

<p>Tips: Perhatikan kata kunci seperti "than" yang menandakan comparative, dan "the" + "of all/in the world" yang menandakan superlative.</p>`,
    category: "Edukasi",
    date: "18 Mei 2026",
    author: "Cakrawala EduCentre",
    readTime: "5 menit",
  },
  {
    id: "2",
    title: "TOEFL iBT Integrated Writing: Cara Menulis 2 Paragraf yang Berlawanan dengan Efektif",
    slug: "toefl-ibt-integrated-writing",
    excerpt:
      "Reading bilang ini bagus, tapi lecturer bilang ini jelek. Waktu cuma 20 menit — strategi efektif menghadapi integrated writing task.",
    content: `Integrated Writing Task di TOEFL iBT sering menjadi tantangan karena Anda harus menggabungkan informasi dari bacaan (reading) dan perkuliahan (lecture) yang saling bertentangan.

<h3>Struktur Jawaban yang Tepat</h3>
<p>Ikuti struktur 3 paragraf ini:</p>
<ol>
  <li><strong>Paragraf 1:</strong> Perkenalan — sebutkan topik dan bahwa lecturer tidak setuju dengan reading</li>
  <li><strong>Paragraf 2:</strong> Poin pertama — jelaskan poin reading, lalu jelaskan sanggahan lecturer</li>
  <li><strong>Paragraf 3:</strong> Poin kedua dan ketiga — lakukan hal yang sama untuk poin-poin berikutnya</li>
</ol>

<h3>Frasa Kunci yang Berguna</h3>
<ul>
  <li>"The reading passage states that... However, the professor argues that..."</li>
  <li>"According to the reading... In contrast, the lecture points out that..."</li>
  <li>"While the reading claims that..., the professor contradicts this by saying..."</li>
</ul>

<h3>Tips Manajemen Waktu</h3>
<p>Anda memiliki 20 menit untuk menulis. Alokasikan waktu Anda: 3 menit untuk membaca, 5 menit untuk menulis paragraf 1, 5 menit untuk paragraf 2, 5 menit untuk paragraf 3, dan 2 menit untuk review.</p>`,
    category: "Edukasi",
    date: "18 Mei 2026",
    author: "Cakrawala EduCentre",
    readTime: "4 menit",
  },
  {
    id: "3",
    title: "SIMAK UI: Pola Rotasi, Cermin, dan Pencerminan pada Soal Figural",
    slug: "simak-ui-figural",
    excerpt:
      '"Gambar ini diputar 90 derajat searah jarum jam, lalu dicerminkan. Bentuk akhirnya seperti apa?" — pahami pola rotasi, pencerminan, dan kombinasinya.',
    content: `Soal figural dalam SIMAK UI TPA menguji kemampuan visual-spasial dan penalaran abstrak Anda. Tiga pola yang paling sering muncul adalah rotasi, pencerminan, dan kombinasi keduanya.

<h3>1. Pola Rotasi (Perputaran)</h3>
<p>Rotasi adalah perputaran objek terhadap titik pusat. Perhatikan:</p>
<ul>
  <li><strong>Rotasi 90°:</strong> Objek diputar seperempat putaran</li>
  <li><strong>Rotasi 180°:</strong> Objek diputar setengah putaran (terbalik)</li>
  <li><strong>Rotasi 270°:</strong> Objek diputar tiga perempat putaran</li>
</ul>

<h3>2. Pola Pencerminan (Refleksi)</h3>
<p>Pencerminan adalah pembalikan objek terhadap sumbu tertentu:</p>
<ul>
  <li><strong>Horizontal:</strong> Atas jadi bawah, bawah jadi atas</li>
  <li><strong>Vertikal:</strong> Kiri jadi kanan, kanan jadi kiri</li>
  <li><strong>Diagonal:</strong> Terbalik terhadap garis miring</li>
</ul>

<h3>3. Kombinasi Rotasi + Pencerminan</h3>
<p>Soal tersulit biasanya menggabungkan kedua pola. Tips: kerjakan satu langkah demi satu langkah. Jangan langsung mencoba membayangkan hasil akhir.</p>

<p>Latihan rutin akan membuat Anda semakin peka terhadap pola-pola figural. Cobalah mengerjakan minimal 5 soal figural setiap hari.</p>`,
    category: "Edukasi",
    date: "18 Mei 2026",
    author: "Cakrawala EduCentre",
    readTime: "6 menit",
  },
  {
    id: "4",
    title: "TOEFL ITP: Menguasai Adjective Clause (Who/Whom/Which/That) di Structure",
    slug: "toefl-itp-adjective-clause",
    excerpt:
      '"The book which is on the table is mine" — kenapa pakai which? Pelajari adjective clause dan cara menjawab soal structure dengan tepat.',
    content: `Adjective clause (relative clause) adalah klausa yang berfungsi sebagai adjective — menerangkan noun. Ini adalah salah satu topik paling sering diuji di TOEFL ITP Structure.

<h3>Kata Penghubung (Relative Pronouns)</h3>
<ul>
  <li><strong>Who:</strong> untuk orang sebagai subjek (The man who called you...)</li>
  <li><strong>Whom:</strong> untuk orang sebagai objek (The man whom you called...)</li>
  <li><strong>Which:</strong> untuk benda/hewan (The book which is on the table...)</li>
  <li><strong>That:</strong> untuk orang atau benda (informal)</li>
  <li><strong>Whose:</strong> untuk kepemilikan (The student whose bag is lost...)</li>
</ul>

<h3>Tips Mengerjakan Soal</h3>
<p>Perhatikan kata setelah relative pronoun. Jika diikuti kata kerja (verb), maka relative pronoun berfungsi sebagai subjek. Jika diikuti kata benda/subjek, maka relative pronoun berfungsi sebagai objek.</p>`,
    category: "Edukasi",
    date: "15 Mei 2026",
    author: "Cakrawala EduCentre",
    readTime: "4 menit",
  },
  {
    id: "5",
    title: "TOEFL iBT Writing for an Academic Discussion: Cara Menanggapi Dosen + Dua Mahasiswa dalam 10 Menit",
    slug: "toefl-ibt-academic-discussion",
    excerpt:
      "Profesor: Should companies prioritize profit or social responsibility? Dua mahasiswa sudah kasih pendapat — bagaimana cara kamu menanggapinya dalam 10 menit?",
    content: `Academic Discussion adalah tugas writing terbaru di TOEFL iBT yang menggantikan Independent Writing. Anda punya 10 menit untuk menulis tanggapan.

<h3>Struktur Tanggapan (100-120 kata)</h3>
<ol>
  <li><strong>Kalimat pembuka:</strong> Setujui atau tidak setujui dengan salah satu mahasiswa</li>
  <li><strong>Alasan 1:</strong> Dukung pendapat Anda dengan contoh spesifik</li>
  <li><strong>Alasan 2:</strong> Tambahkan satu argumen tambahan</li>
  <li><strong>Penutup:</strong> Kesimpulan singkat</li>
</ol>

<h3>Tips 10 Menit</h3>
<ul>
  <li>1 menit: baca topik dan dua pendapat mahasiswa, tentukan posisi</li>
  <li>7 menit: menulis tanggapan</li>
  <li>2 menit: review grammar dan ejaan</li>
</ul>`,
    category: "Edukasi",
    date: "15 Mei 2026",
    author: "Cakrawala EduCentre",
    readTime: "3 menit",
  },
];
