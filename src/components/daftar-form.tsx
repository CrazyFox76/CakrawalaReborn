"use client";

import { useState } from "react";
import DaftarFormView from "./daftar-form-view";
import DaftarInvoiceView from "./daftar-invoice-view";
import type { BankAccount } from "@/data/bank-accounts";
import type { Price } from "@/data/prices";
import type { DaftarFormSubmission } from "./daftar-form-view";

type Props = {
  bankAccounts: BankAccount[];
  prices: Price[];
};

export default function DaftarForm({ bankAccounts, prices }: Props) {
  const [step, setStep] = useState<"form" | "invoice">("form");
  const [submission, setSubmission] = useState<DaftarFormSubmission | null>(null);

  const handleSuccess = (data: DaftarFormSubmission) => {
    setSubmission(data);
    setStep("invoice");
  };

  if (step === "invoice" && submission) {
    return (
      <DaftarInvoiceView
        invoiceNo={submission.invoiceNo}
        bankAccounts={bankAccounts}
        form={submission.form}
        voucherDiscount={submission.voucherDiscount}
        finalHarga={submission.finalHarga}
        totalHarga={submission.totalHarga}
        selectedPaket={submission.selectedPaket}
        onBack={() => setStep("form")}
      />
    );
  }

  return (
    <DaftarFormView
      bankAccounts={bankAccounts}
      prices={prices}
      onSuccess={handleSuccess}
    />
  );
}
