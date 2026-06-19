import { test, expect } from "@playwright/test";

test.describe("Blog pages", () => {
  test("should list blog posts on index page", async ({ page }) => {
    await page.goto("/blog");
    await expect(page).toHaveTitle(/Blog Edukasi/);
    await expect(page.getByRole("heading", { name: "Blog Edukasi" })).toBeVisible();
    const articles = page.locator("article");
    await expect(articles.first()).toBeVisible();
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test("should navigate to blog detail page", async ({ page }) => {
    await page.goto("/blog");
    const firstArticle = page.locator("article").first();
    const titleEl = firstArticle.locator("h2").first();
    const title = await titleEl.textContent();

    await firstArticle.click();
    await page.waitForURL(/\/blog\//);

    const detailHeading = page.getByRole("heading").first();
    await expect(detailHeading).toBeVisible();

    if (title) {
      await expect(detailHeading).toContainText(title.trim());
    }
  });
});
