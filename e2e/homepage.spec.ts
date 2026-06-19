import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should have correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Cakrawala/);
  });

  test("should display hero section", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();
    await expect(hero.getByText("Cakrawala EduCentre")).toBeVisible();
  });

  test("should have working navigation links", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("header nav");
    await expect(nav.getByRole("link", { name: "Biaya" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Tentang" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Blog" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Daftar" })).toBeVisible();
  });

  test("should display footer", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByText("Cakrawala EduCentre")).toBeVisible();
    await expect(footer.getByText("Quick Links")).toBeVisible();
    await expect(footer.getByText("Kontak")).toBeVisible();
  });

  test("should have theme toggle", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByLabel("Toggle dark mode");
    await expect(toggle).toBeVisible();
  });
});
