"use client";

import { useState } from "react";
import DaftarFormView from "./daftar-form-view";
import DaftarReviewView from "./daftar-review-view";
import DaftarInvoiceView from "./daftar-invoice-view";
import type { BankAccount } from "@/data/bank-accounts";
import type { Price } from "@/data/prices";
import type { DaftarFormSubmission } from "./daftar-form-view";

type Props = {
  bankAccounts: BankAccount[];
  prices: Price[];
};

export default function DaftarForm({ bankAccounts, prices }: Props) {
  const [step, setStep] = useState<"form" | "review" | "invoice">("form");
  const [submission, setSubmission] = useState<DaftarFormSubmission | null>(null);

  const handleReview = (data: DaftarFormSubmission) => {
    setSubmission(data);
    setStep("review");
  };

  const handleConfirm = () => {
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
        onBack={() => {
          setSubmission(null);
          setStep("form");
        }}
      />
    );
  }

  if (step === "review" && submission) {
    return (
      <DaftarReviewView
        bankAccounts={bankAccounts}
        form={submission.form}
        selectedPaket={submission.selectedPaket}
        voucherDiscount={submission.voucherDiscount}
        voucherCode={submission.voucherCode}
        totalHarga={submission.totalHarga}
        finalHarga={submission.finalHarga}
        invoiceNo={submission.invoiceNo}
        onBack={() => setStep("form")}
        onConfirm={handleConfirm}
      />
    );
  }

  return (
    <DaftarFormView
      bankAccounts={bankAccounts}
      prices={prices}
      onReview={handleReview}
    />
  );
}
