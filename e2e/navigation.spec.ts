import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate via main nav links", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("header nav");

    await nav.getByRole("link", { name: "Biaya" }).click();
    await expect(page).toHaveURL(/\/biaya/);

    await page.goto("/");
    await nav.getByRole("link", { name: "Blog" }).click();
    await expect(page).toHaveURL(/\/blog/);

    await page.goto("/");
    await nav.getByRole("link", { name: "Daftar" }).click();
    await expect(page).toHaveURL(/\/daftar/);
  });

  test("should toggle mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const menuButton = page.getByLabel("Toggle menu");
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    const mobileMenu = page.locator("div.border-t");
    await expect(mobileMenu).toBeVisible();
    await expect(mobileMenu.getByText("Produk")).toBeVisible();
    await expect(mobileMenu.getByText("Program")).toBeVisible();

    await menuButton.click();
    await expect(mobileMenu).not.toBeVisible();
  });

  test("should have theme toggle button", async ({ page }) => {
    await page.goto("/");
    const themeToggle = page.getByLabel("Toggle dark mode");
    await expect(themeToggle).toBeVisible();
  });
});
