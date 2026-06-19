import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import DaftarFormView from "@/components/daftar-form-view";
import DaftarInvoiceView from "@/components/daftar-invoice-view";
import type { BankAccount } from "@/data/bank-accounts";
import type { Price } from "@/data/prices";
import type { DaftarFormFields, Paket } from "@/components/daftar-form-view";

afterEach(cleanup);

vi.mock("@/db/actions", () => ({
  createRegistration: vi.fn(),
  validateVoucher: vi.fn(),
  redeemVoucher: vi.fn(),
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

const mockBankAccounts: BankAccount[] = [
  { id: 1, bankName: "BCA", accountNumber: "6611335226", accountHolder: "Citarani Anggraini", isActive: true },
];

const mockPrices: Price[] = [
  { id: 1, jenjang: "SD", sesi: 6, harga: 600000, isPopular: false },
  { id: 2, jenjang: "SD", sesi: 12, harga: 1080000, isPopular: true },
];

const mockForm: DaftarFormFields = {
  nama: "Budi",
  wa: "08123456789",
  email: "budi@test.com",
  program: "Les Privat (Semua Mapel)",
  jenjang: "SD",
  paketIndex: "0",
  jenisLes: "Online (Jarak Jauh)",
  alamat: "Jl. Merdeka No. 1",
  waktuLes: "Senin, 18.30",
  durasi: "90",
  orangTua: "Ibu Budi",
  pesan: "",
};

const mockSelectedPaket: Paket = { label: "Paket 6 Sesi", sesi: 6, harga: 600000 };
const mockInvoiceNo = { full: "NO. 123456/NASIONAL/JUNI/2026", short: "123456" };

describe("DaftarFormView", () => {
  it("renders without crashing", () => {
    render(
      <DaftarFormView
        bankAccounts={mockBankAccounts}
        prices={mockPrices}
        onSuccess={vi.fn()}
      />
    );
    expect(screen.getByText("Form Pendaftaran")).toBeInTheDocument();
  });

  it("renders form fields", () => {
    render(
      <DaftarFormView
        bankAccounts={mockBankAccounts}
        prices={mockPrices}
        onSuccess={vi.fn()}
      />
    );
    expect(screen.getAllByPlaceholderText("Masukkan nama lengkap").length).toBe(1);
    expect(screen.getByPlaceholderText("08xxxxxxxxxx")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("contoh@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Alamat lengkap")).toBeInTheDocument();
    expect(screen.getByText("90 Menit")).toBeInTheDocument();
  });
});

describe("DaftarInvoiceView", () => {
  it("renders invoice details", () => {
    render(
      <DaftarInvoiceView
        invoiceNo={mockInvoiceNo}
        bankAccounts={mockBankAccounts}
        form={mockForm}
        voucherDiscount={0}
        finalHarga={600000}
        totalHarga={600000}
        selectedPaket={mockSelectedPaket}
        onBack={vi.fn()}
      />
    );
    expect(screen.getByText("FAKTUR PEMBAYARAN LES")).toBeInTheDocument();
    expect(screen.getByText(mockInvoiceNo.full)).toBeInTheDocument();
  });

  it("renders student name in invoice", () => {
    render(
      <DaftarInvoiceView
        invoiceNo={mockInvoiceNo}
        bankAccounts={mockBankAccounts}
        form={mockForm}
        voucherDiscount={0}
        finalHarga={600000}
        totalHarga={600000}
        selectedPaket={mockSelectedPaket}
        onBack={vi.fn()}
      />
    );
    expect(screen.getByText(/Nama Siswa/)).toBeInTheDocument();
  });
});
