const ADMIN_WA = "6281324868790";

function fmtRupiah(n: number) {
  return `Rp ${n.toLocaleString("id-ID")}`;
}

export function adminNewRegistrationWA({
  nama, wa, program, jenjang, paket, harga, invoiceNo,
}: {
  nama: string;
  wa: string;
  program: string;
  jenjang: string;
  paket: string | null;
  harga: number | null;
  invoiceNo: string;
}) {
  const msg =
    `*[PENDAFTARAN BARU]*%0A%0A` +
    `*Invoice:* ${invoiceNo}%0A` +
    `*Nama:* ${nama}%0A` +
    `*WA:* ${wa}%0A` +
    `*Program:* ${program}%0A` +
    `*Jenjang:* ${jenjang}%0A` +
    `*Paket:* ${paket ?? "-"}%0A` +
    `*Total:* ${harga ? fmtRupiah(harga) : "-"}%0A%0A` +
    `Detail: https://cakrawalaeducloud.com/admin/registrasi`;

  return `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(msg)}`;
}
