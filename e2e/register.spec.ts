import { test, expect } from "@playwright/test";

test.describe("Registration flow", () => {
  test("should display registration form", async ({ page }) => {
    await page.goto("/daftar");
    await expect(page.getByRole("heading", { name: "Form Pendaftaran" })).toBeVisible();
    await expect(page.locator('input[name="nama"]')).toBeVisible();
    await expect(page.locator('input[name="wa"]')).toBeVisible();
    await expect(page.locator('select[name="program"]')).toBeVisible();
    await expect(page.locator('select[name="jenjang"]')).toBeVisible();
    await expect(page.locator('input[name="alamat"]')).toBeVisible();
  });

  test("should fill form and submit", async ({ page }) => {
    await page.goto("/daftar");

    await page.locator('input[name="nama"]').fill("Budi Santoso");
    await page.locator('input[name="wa"]').fill("08123456789");
    await page.locator('select[name="program"]').selectOption("Les Privat (Semua Mapel)");
    await page.locator('select[name="jenjang"]').selectOption("SMA");
    await page.locator('input[name="alamat"]').fill("Jl. Merdeka No. 1, Jakarta");
    await page.locator('input[name="waktuLes"]').fill("Senin Rabu Jumat, 18.30 WIB");

    await page.getByRole("button", { name: "Buat Faktur Pembayaran" }).click();

    await page.waitForTimeout(1000);

    await expect(page.getByText(/Faktur|Invoice/i).first()).toBeVisible();
  });
});
