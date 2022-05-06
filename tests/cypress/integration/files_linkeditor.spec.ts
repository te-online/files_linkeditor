const testusers = ["testuser-1"];

const waitForOcDialog = () => {
	// @TODO: OC-Dialog auto-closes if opened too earlier after page-load
	cy.wait(500);
};

describe("Linkeditor", { defaultCommandTimeout: 5000 }, () => {
	beforeEach(() => {
		// Log in
		cy.visit("/");
		cy.get('input[name="user"]').type(Cypress.env("NEXTCLOUD_ADMIN_USER"));
		cy.get('input[name="password"]').type(Cypress.env("NEXTCLOUD_ADMIN_PASSWORD"));
		cy.get('input[type="submit"]').click();
	});

	it("can create test users", () => {
		cy.visit("/settings/users");
		for (const username of testusers) {
			// It can take a while until the user from the previous run is created
			cy.get("button#new-user-button").click({ timeout: 30000 });
			cy.get('input[name="username"]').type(username);
			cy.get('input[name="password"]').type(`${username}-password`);
			cy.contains("button", "Add a new user").click();
		}
	});

	it("can activate app", () => {
		cy.visit("/settings/apps");
		cy.get(".apps-list-container div.section").contains("Linkeditor").parent().find("input[value='Enable']").click();
		cy.get(".apps-list-container div.section")
			.contains("Linkeditor")
			.parent()
			.find("input[value='Enable']")
			.should("not.exist");
	});

	it("can create a URL link file", () => {
		throw new Error("Implement this test");
	});

	it("can create a webloc link file", () => {
		throw new Error("Implement this test");
	});

	it("can open an existing url link file", () => {
		throw new Error("Implement this test");
	});

	it("can open an existing webloc link file", () => {
		throw new Error("Implement this test");
	});

	it("can open link in new tab", () => {
		throw new Error("Implement this test");
	});

	it("can open link in same tab", () => {
		throw new Error("Implement this test");
	});

	it("can open shared link file", () => {
		throw new Error("Implement this test");
	});

	it("can edit shared link file", () => {
		throw new Error("Implement this test");
	});

	it("can open publicly shared link file", () => {
		throw new Error("Implement this test");
	});

	it("cannot edit publicly shared link file", () => {
		throw new Error("Implement this test");
	});
});
