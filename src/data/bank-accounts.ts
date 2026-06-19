export interface BankAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  isActive: boolean;
}

export const bankAccounts: BankAccount[] = [
  { id: 1, bankName: "BCA", accountNumber: "6611335226", accountHolder: "Citarani Anggraini", isActive: true },
];

export async function getActiveBankAccounts() { return bankAccounts.filter((a) => a.isActive); }
