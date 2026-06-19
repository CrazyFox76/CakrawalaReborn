import { getActiveBankAccounts } from "@/data/bank-accounts";
import { getPrices } from "@/data/prices";
import DaftarForm from "@/components/daftar-form";

export default async function DaftarPage() {
  const [bankAccounts, prices] = await Promise.all([
    getActiveBankAccounts(),
    getPrices(),
  ]);

  return <DaftarForm bankAccounts={bankAccounts} prices={prices} />;
}
