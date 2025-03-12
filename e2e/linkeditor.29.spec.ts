import { test, expect, type Page } from "@playwright/test";

const adminLogin = async (page: Page) => {
	await page.getByPlaceholder("Login with username or email").fill(process.env.NEXTCLOUD_ADMIN_USER!);
	await page.getByPlaceholder("Login with username or email").press("Tab");
	await page.getByPlaceholder("Password").fill(process.env.NEXTCLOUD_ADMIN_PASSWORD!);
	await page.getByPlaceholder("Password").press("Enter");
};

const testUserLogin = async (page: Page) => {
	// Log in as other user
	await page.getByPlaceholder("Login with username or email").fill("testuser-1");
	await page.getByPlaceholder("Login with username or email").press("Tab");
	await page.getByPlaceholder("Password").fill("testuser-1-password");
	await page.getByPlaceholder("Password").press("Enter");
};

const testFileViewer = async (
	page: Page,
	{ fileName, url, _blank, close }: { fileName: string; url: string; _blank: boolean; close?: boolean },
) => {
	await page.locator("h3").filter({ hasText: fileName }).isVisible();

	await page.getByText(`You are about to visit: ${url}`).isVisible();

	if (_blank) {
		const page1Promise = page.waitForEvent("popup");
		await page.getByRole("link", { name: url }).click();
		const page1 = await page1Promise;
		expect(page1.url()).toBe(url);
		page1.close();
	}

	await page.getByRole("link", { name: "Visit link" }).isVisible();
	expect(await page.getByRole("link", { name: "Visit link" }).getAttribute("href")).toBe(url);

	if (_blank) {
		expect(await page.getByRole("link", { name: "Visit link" }).getAttribute("target")).toBe("_blank");
	}

	if (close === false) {
		return;
	}

	await page.getByRole("link", { name: "Cancel" }).click();
	await expect(page.getByRole("heading", { name: "Test File.URL" })).not.toBeVisible();
};

test.beforeEach(async ({ page, context }) => {
	// Grant clipboard permissions to browser context
	await context.grantPermissions(["clipboard-read", "clipboard-write"]);

	await page.goto("http://localhost:8000");
});

test.describe("Preparation", () => {
	test("create test user", async ({ page }) => {
		await adminLogin(page);

		await page.getByLabel("Settings menu").click();
		await page.getByRole("link", { name: "Users" }).click();
		await page.getByRole("button", { name: "New account" }).click();
		await page.locator('[data-test="username"]').fill("testuser-1");
		await page.locator('[data-test="password"]').fill("testuser-1-password");
		await page.locator('[data-test="submit"]').click();
		await page.getByRole("cell", { name: "testuser-1 testuser-" }).getByRole("strong").isVisible();
	});
});

test.describe("Link File Creation", () => {
	test("create a .URL link file", async ({ page }) => {
		await adminLogin(page);

		await page.getByLabel("Files", { exact: true }).click();
		await page.getByRole("button", { name: "New" }).click();
		await page.getByRole("menuitem", { name: "New link (.URL)" }).click();
		await page.getByLabel("File name").fill("Test File.URL");
		await page.getByRole("button", { name: "Create" }).click();
		await page.getByPlaceholder("e.g. https://example.org").fill("https://example.org/");
		await page.getByRole("link", { name: "Save" }).click();
		// Space is produced by two <span> around filename and suffix
		await page.getByRole("button").filter({ hasText: "Test File .URL" }).scrollIntoViewIfNeeded();
		await expect(page.getByRole("button").filter({ hasText: "Test File .URL" })).toBeVisible();
	});

	test("create a .webloc link file", async ({ page }) => {
		await adminLogin(page);

		await page.getByLabel("Files", { exact: true }).click();
		await page.getByRole("button", { name: "New" }).click();
		await page.getByRole("menuitem", { name: "New link (.webloc)" }).click();
		await page.getByLabel("File name").fill("Test File.webloc");
		await page.getByRole("button", { name: "Create" }).click();
		await page.getByPlaceholder("e.g. https://example.org").fill("https://example.org/");
		await page.getByRole("link", { name: "Save" }).click();
		await page.getByRole("button").filter({ hasText: "Test File .webloc" }).scrollIntoViewIfNeeded();
		await expect(page.getByRole("button").filter({ hasText: "Test File .webloc" })).toBeVisible();
	});

	test("create a .webloc link file in a subdirectory", async ({ page }) => {
		await adminLogin(page);

		await page.getByLabel("Files", { exact: true }).click();

		await page.getByRole("button", { name: "Documents" }).click();

		await page.getByRole("button", { name: "New" }).click();
		await page.getByRole("menuitem", { name: "New link (.webloc)" }).click();
		await page.getByLabel("File name").fill("Test File.webloc");
		await page.getByRole("button", { name: "Create" }).click();
		await page.getByPlaceholder("e.g. https://example.org").fill("https://example.org/");
		await page.getByRole("link", { name: "Save" }).click();
		await page.getByRole("button").filter({ hasText: "Test File .webloc" }).scrollIntoViewIfNeeded();
		await expect(page.getByRole("button").filter({ hasText: "Test File .webloc" })).toBeVisible();
	});

	test("open an existing .URL link file", async ({ page }) => {
		await adminLogin(page);

		await page.getByLabel("Files", { exact: true }).click();
		await page.getByRole("button").filter({ hasText: "Test File .URL" }).scrollIntoViewIfNeeded();
		await expect(page.getByRole("button").filter({ hasText: "Test File .URL" })).toBeVisible();
		await page.getByRole("button").filter({ hasText: "Test File .URL" }).click();

		await testFileViewer(page, { fileName: "Test File.URL", url: "https://example.org/", _blank: true });
	});

	test("open an existing .webloc link file", async ({ page }) => {
		await adminLogin(page);

		await page.getByLabel("Files", { exact: true }).click();
		await page.getByRole("button").filter({ hasText: "Test File .webloc" }).scrollIntoViewIfNeeded();
		await expect(page.getByRole("button").filter({ hasText: "Test File .webloc" })).toBeVisible();
		await page.getByRole("button").filter({ hasText: "Test File .webloc" }).click();

		await testFileViewer(page, { fileName: "Test File.webloc", url: "https://example.org/", _blank: true });
	});

	test("open link in same tab", async ({ page }) => {
		await adminLogin(page);

		await page.getByLabel("Files", { exact: true }).click();
		await page.getByRole("button").filter({ hasText: "Test File .URL" }).scrollIntoViewIfNeeded();
		await page.getByRole("row", { name: 'Toggle selection for file "Test File.URL"' }).getByLabel("Actions").click();
		await page.getByRole("menuitem", { name: "Edit link" }).click();
		await page.getByText("Open in same window", { exact: true }).click();
		await page.getByRole("link", { name: "Save" }).click();
		await page.getByRole("button").filter({ hasText: "Test File .URL" }).click();

		await testFileViewer(page, { fileName: "Test File.URL", url: "https://example.org/", _blank: false, close: false });

		await page.getByRole("link", { name: "Visit link" }).click();
		expect(page.url()).toBe("https://example.org/");
	});

	test("open link in same tab without confirmation", async ({ page }) => {
		await adminLogin(page);

		await page.getByLabel("Files", { exact: true }).click();

		await page.getByRole("button").filter({ hasText: "Test File .URL" }).scrollIntoViewIfNeeded();
		await page.getByRole("row", { name: 'Toggle selection for file "Test File.URL"' }).getByLabel("Actions").click();
		await page.getByRole("menuitem", { name: "Edit link" }).click();
		await page.getByText("Skip confirmation dialog").click();
		await page.getByRole("link", { name: "Save" }).click();
		await page.getByRole("button").filter({ hasText: "Test File .URL" }).click();

		await page.waitForURL("https://example.org/");
	});
});

test.describe("Link File Sharing", () => {
	test("open shared link file", async ({ page }) => {
		await adminLogin(page);

		await page.getByLabel("Files", { exact: true }).click();

		await page.getByRole("button").filter({ hasText: "Test File .webloc" }).scrollIntoViewIfNeeded();
		await page
			.getByRole("row", { name: 'Toggle selection for file "Test File.webloc"' })
			.getByRole("button")
			.nth(1)
			.click();

		await page.getByPlaceholder("Name, email, or Federated").click();
		await page.getByPlaceholder("Name, email, or Federated").fill("testuser");
		await page.getByRole("option", { name: "testuser-" }).click();
		await page.getByRole("button", { name: "Save share" }).click();
		await page.getByLabel("Copy internal link to").click();
		await expect(page.getByText("Link copied✖")).toBeVisible();

		// Log out
		await page.getByLabel("Settings menu").click();
		await page.getByRole("link", { name: "Log out" }).click();

		await testUserLogin(page);

		// Go to link copied to clipboard
		const handle = await page.evaluateHandle(() => navigator.clipboard.readText());
		const copiedUrl = await handle.jsonValue();
		await page.goto(copiedUrl);

		await testFileViewer(page, { fileName: "Test File.webloc", url: "https://example.org/", _blank: true });
	});

	test("edit a shared link file", async ({ page }) => {
		await testUserLogin(page);

		await page.getByLabel("Files", { exact: true }).click();

		await page.getByRole("button").filter({ hasText: "Test File .webloc" }).scrollIntoViewIfNeeded();
		await page.getByRole("button").filter({ hasText: "Test File .webloc" }).click();

		await testFileViewer(page, {
			fileName: "Test File.webloc",
			url: "https://example.org/",
			_blank: true,
			close: false,
		});

		await page.getByRole("link", { name: "Edit link" }).click();
		await page.getByPlaceholder("e.g. https://example.org").click();
		await page.getByPlaceholder("e.g. https://example.org").fill("https://nextcloud.com/");
		await page.getByPlaceholder("e.g. https://example.org").press("Enter");

		await page.getByRole("button").filter({ hasText: "Test File .webloc" }).click();

		await testFileViewer(page, { fileName: "Test File.webloc", url: "https://nextcloud.com/", _blank: true });
	});
});

test.describe("Public Link File Sharing", () => {
	test("open publicly shared link file", async ({ page }) => {
		await adminLogin(page);
		await page.getByLabel("Files", { exact: true }).click();

		// Share the file
		await page.getByRole("button").filter({ hasText: "Test File .URL" }).scrollIntoViewIfNeeded();
		await page
			.getByRole("row", { name: 'Toggle selection for file "Test File.URL"' })
			.getByRole("button")
			.nth(1)
			.click();

		// Create and copy the public link
		await page.getByLabel("Create a new share link").click();
		await expect(page.getByText("Link copied✖")).toBeVisible();

		// Go to link copied to clipboard
		const handle = await page.evaluateHandle(() => navigator.clipboard.readText());
		const copiedUrl = await handle.jsonValue();
		await page.goto(copiedUrl);

		await page.getByRole("link", { name: "View link" }).click();

		await page.waitForURL("https://example.org/");
	});

	test("cannot edit publicly shared link file", async ({ page }) => {
		await adminLogin(page);
		await page.getByLabel("Files", { exact: true }).click();

		// Share the file
		await page.getByRole("button").filter({ hasText: "Test File .webloc" }).scrollIntoViewIfNeeded();
		await page.getByRole("row", { name: 'Toggle selection for file "Test File.webloc"' }).getByLabel("Shared").click();

		// Create and copy the public link
		await page.getByLabel("Create a new share link").click();
		await expect(page.getByText("Link copied✖")).toBeVisible();

		// Go to link copied to clipboard
		const handle = await page.evaluateHandle(() => navigator.clipboard.readText());
		const copiedUrl = await handle.jsonValue();
		await page.goto(copiedUrl);

		await page.getByRole("link", { name: "View link" }).click();

		await testFileViewer(page, {
			fileName: "Test File.webloc",
			url: "https://nextcloud.com/",
			_blank: true,
			close: false,
		});

		await expect(page.getByRole("link", { name: "Edit link" })).not.toBeVisible();
	});
});
