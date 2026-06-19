import { test, expect } from "@playwright/test";

test.describe("Program pages", () => {
  test("should list all programs", async ({ page }) => {
    await page.goto("/program");
    await expect(page).toHaveTitle(/Semua Program/);
    await expect(page.getByRole("heading", { name: "Semua Program" })).toBeVisible();
  });

  test("should have program cards that link to detail pages", async ({ page }) => {
    await page.goto("/program");
    const programLinks = page.locator("a[href^='/program/']");
    await expect(programLinks.first()).toBeVisible();
    const count = await programLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("should navigate to a known program detail page", async ({ page }) => {
    await page.goto("/program/rumbel-cakrawala");
    await expect(page).toHaveTitle(/Rumbel Cakrawala/);
    await expect(page.getByRole("heading", { name: "Rumbel Cakrawala" })).toBeVisible();
    await expect(page.getByText(/Program Tersedia/)).toBeVisible();
  });
});
