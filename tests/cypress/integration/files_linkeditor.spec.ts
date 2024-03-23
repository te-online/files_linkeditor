const testusers = ["testuser-1"];
let sharingLink = "";
let publicSharingLink = "";

const waitForOcDialog = () => {
	// @TODO: OC-Dialog auto-closes if opened too earlier after page-load
	cy.wait(500);
};

describe("Linkeditor", { defaultCommandTimeout: 5000 }, () => {
	beforeEach(() => {
		cy.on("uncaught:exception", (e) => {
			if (e.message.includes("ResizeObserver loop completed with undelivered notifications.")) {
				// we expected this error, so let's ignore it and let the test continue
				return false;
			}
		});
		// Log in
		cy.visit("/");
		cy.get('input[name="user"]').type(Cypress.env("NEXTCLOUD_ADMIN_USER"));
		cy.get('input[name="password"]').type(Cypress.env("NEXTCLOUD_ADMIN_PASSWORD"));
		cy.get('[type="submit"]').click();
	});

	it("can create test users", () => {
		cy.visit("/settings/users");
		for (const username of testusers) {
			// It can take a while until the user from the previous run is created
			cy.get("button#new-user-button").click({ timeout: 30000 });
			if (Cypress.env("NC_VERSION") >= 28) {
				cy.get('[data-test="username"]').type(username);
				cy.get('[data-test="password"]').type(`${username}-password`);
				cy.get('[data-test="submit"]').click();
			} else {
				cy.get('input[name="username"]').type(username);
				cy.get('input[name="password"]').type(`${username}-password`);
				cy.contains("button", "Add a new user").click();
			}
		}
	});

	it("can activate app", () => {
		if (Cypress.env("NC_VERSION") >= 28) {
			throw "Not implemented";
		}
		cy.visit("/settings/apps");
		cy.get(".apps-list-container div.section")
			.contains("Link editor")
			.parent()
			.within(() => {
				cy.contains("Enable").click();
			});
		cy.get(".apps-list-container div.section")
			.contains("Link editor")
			.parent()
			.within(() => {
				cy.contains("Enable").should("not.exist");
			});
	});

	it("can create a URL link file", () => {
		cy.visit("/apps/files/?dir=/");

		if (Cypress.env("NC_VERSION") >= 28) {
			cy.contains('button[aria-haspopup="menu"]', "New").click();
		} else {
			cy.get("a.button.new").click();
		}
		cy.contains(Cypress.env("NC_VERSION") >= 28 ? "button" : "a", "New link (.URL)").click();
		if (Cypress.env("NC_VERSION") >= 28) {
			cy.focused().clear();
			cy.focused().type("Test File.URL");
			cy.contains("button", "Create").click();
		} else {
			cy.focused().type("Test File");
			cy.focused().parent().submit();
		}

		waitForOcDialog();
		cy.get('[data-cy="url-input"]').type("https://example.org");
		cy.contains("a", "Save").click();
		waitForOcDialog();

		if (Cypress.env("NC_VERSION") >= 28) {
			cy.get('[download="Test File.URL"]').scrollIntoView().should("be.visible");
		} else {
			cy.contains(".nametext", "Test File.URL").should("be.visible");
		}
	});

	it("can create a webloc link file", () => {
		cy.visit("/apps/files/?dir=/");

		if (Cypress.env("NC_VERSION") >= 28) {
			cy.contains('button[aria-haspopup="menu"]', "New").click();
		} else {
			cy.get("a.button.new").click();
		}
		cy.contains(Cypress.env("NC_VERSION") >= 28 ? "button" : "a", "New link (.webloc)").click();
		if (Cypress.env("NC_VERSION") >= 28) {
			cy.focused().clear();
			cy.focused().type("Test File.webloc");
			cy.contains("button", "Create").click();
		} else {
			cy.focused().type("Test File");
			cy.focused().parent().submit();
		}

		waitForOcDialog();
		cy.get('[data-cy="url-input"]').type("https://example.org");
		cy.contains("a", "Save").click();
		waitForOcDialog();

		if (Cypress.env("NC_VERSION") >= 28) {
			cy.get('[download="Test File.webloc"]').scrollIntoView().should("be.visible");
		} else {
			cy.contains(".nametext", "Test File.webloc").should("be.visible");
		}
	});

	it("can open an existing URL link file", () => {
		cy.visit("/apps/files/?dir=/");

		if (Cypress.env("NC_VERSION") >= 28) {
			cy.get('[download="Test File.URL"]').scrollIntoView().click();
		} else {
			cy.contains(".nametext", "Test File.URL").click();
		}

		waitForOcDialog();
		cy.contains("h3", "Test File.URL").should("be.visible");
		cy.contains(".urldisplay", "You are about to visit: https://example.org").should("be.visible");
		cy.contains("a", "Visit link").should("have.attr", "href", "https://example.org");
		cy.contains("a", "Visit link").should("have.attr", "target", "_blank");
	});

	it("can open an existing webloc link file", () => {
		cy.visit("/apps/files/?dir=/");

		if (Cypress.env("NC_VERSION") >= 28) {
			cy.get('[download="Test File.webloc"]').scrollIntoView().click();
		} else {
			cy.contains(".nametext", "Test File.webloc").click();
		}

		waitForOcDialog();
		cy.contains("h3", "Test File.webloc").should("be.visible");
		cy.contains(".urldisplay", "You are about to visit: https://example.org").should("be.visible");
		cy.contains("a", "Visit link").should("have.attr", "href", "https://example.org");
		cy.contains("a", "Visit link").should("have.attr", "target", "_blank");
	});

	it("can open link in same tab", () => {
		if (Cypress.env("NC_VERSION") >= 28) {
			throw "Not implemented";
		}
		cy.visit("/apps/files/?dir=/");

		cy.contains(".nametext", "Test File.URL").within(() => {
			cy.root()
				.parent()
				.within(() => {
					cy.get(".fileactions .action-menu").click();
				});
		});
		cy.contains("a", "Edit link").click();

		waitForOcDialog();
		cy.contains("h3", "Test File.URL").should("be.visible");
		cy.get("#linkeditor_sameWindow").should("not.be.checked");
		cy.get('label[for="linkeditor_sameWindow"]').click();
		cy.get("#linkeditor_sameWindow").should("be.checked");
		cy.contains("a", "Save").click();
		waitForOcDialog();

		cy.contains(".nametext", "Test File.URL").click();

		waitForOcDialog();
		cy.contains("h3", "Test File.URL").should("be.visible");
		cy.contains(".urldisplay", "You are about to visit: https://example.org").should("be.visible");
		cy.contains("a", "Visit link").should("have.attr", "href", "https://example.org");
		cy.contains("a", "Visit link").should("have.attr", "target", "_self");
	});

	it("can open link in same tab without confirmation", () => {
		if (Cypress.env("NC_VERSION") >= 28) {
			throw "Not implemented";
		}
		cy.visit("/apps/files/?dir=/");

		cy.contains(".nametext", "Test File.URL").within(() => {
			cy.root()
				.parent()
				.within(() => {
					cy.get(".fileactions .action-menu").click();
				});
		});
		cy.contains("a", "Edit link").click();

		waitForOcDialog();
		cy.contains("h3", "Test File.URL").should("be.visible");
		cy.get("#linkeditor_skipConfirmation").should("not.be.checked");
		cy.get('label[for="linkeditor_skipConfirmation"]').click();
		cy.get("#linkeditor_skipConfirmation").should("be.checked");
		cy.contains("a", "Save").click();
		waitForOcDialog();

		cy.contains(".nametext", "Test File.URL").click();
		cy.url().should("be.equal", "https://example.org/");

		// @TODO: Once `experimentalSessionAndOrigin` is more stable
		// we can re-enable Chrome web security and use this syntax
		// to test for the change of URL
		// cy.origin("https://example.org", () => {
		// 	cy.location("href").should("eq", "https://example.org/");
		// });
	});

	it("can open shared link file", () => {
		if (Cypress.env("NC_VERSION") >= 28) {
			throw "Not implemented";
		}
		cy.visit("/apps/files/?dir=/");

		cy.contains(".nametext", "Test File.webloc").within(() => {
			cy.root()
				.parent()
				.within(() => {
					cy.get(".fileactions .action-share").click();
				});
		});
		if (Cypress.env("NC_VERSION") && Cypress.env("NC_VERSION") >= 27) {
			cy.get("#sharing-search-input").type(testusers[0]);
		} else {
			cy.get("#sharing-search-input input").type(testusers[0]);
		}
		cy.contains(`[sharewith="${testusers[0]}"]`, testusers[0]).click();

		if (Cypress.env("NC_VERSION") >= 27) {
			cy.contains("button", "Save share").click();
		}

		cy.get('[aria-label^="Copy internal link to clipboard"]').then(($el) => {
			sharingLink = $el.get(0).getAttribute("href");
		});

		// Log out admin user
		cy.get('[aria-label="Open settings menu"]').click({ timeout: 4000 });
		cy.contains("a", "Log out").click({ timeout: 4000 });
		cy.reload(true);

		// Log in as test user
		cy.get('input[name="user"]').type(testusers[0]);
		cy.get('input[name="password"]').type(`${testusers[0]}-password`);
		cy.get('[type="submit"]').click();
		cy.contains("#app-dashboard", "Recommended files").should("be.visible");

		cy.then(() => {
			cy.visit(sharingLink);
		});

		waitForOcDialog();
		cy.contains("h3", "Test File.webloc").should("be.visible");
		cy.contains(".urldisplay", "You are about to visit: https://example.org", { timeout: 10000 }).should("be.visible");
		cy.contains("a", "Visit link").should("have.attr", "href", "https://example.org");
		cy.contains("a", "Visit link").should("have.attr", "target", "_blank");
	});

	it("can edit shared link file", () => {
		if (Cypress.env("NC_VERSION") >= 28) {
			throw "Not implemented";
		}
		// Log out admin user
		cy.get('[aria-label="Open settings menu"]').click({ timeout: 4000 });
		cy.contains("a", "Log out").click({ timeout: 4000 });
		cy.reload(true);

		// Log in as test user
		cy.get('input[name="user"]').type(testusers[0]);
		cy.get('input[name="password"]').type(`${testusers[0]}-password`);
		cy.get('[type="submit"]').click();
		cy.contains("#app-dashboard", "Recommended files").should("be.visible");

		cy.visit("/apps/files/?dir=/");

		cy.contains(".nametext", "Test File.webloc").within(() => {
			cy.root()
				.parent()
				.within(() => {
					cy.get(".fileactions .action-menu").click();
				});
		});
		cy.contains("a", "Edit link").click();

		waitForOcDialog();
		cy.contains("h3", "Test File.webloc").should("be.visible");
		cy.get('[data-cy="url-input"]').clear().type("https://nextcloud.com");
		cy.contains("a", "Save").click();
		waitForOcDialog();

		cy.contains(".nametext", "Test File.webloc").click();

		waitForOcDialog();
		cy.contains("h3", "Test File.webloc").should("be.visible");
		cy.contains(".urldisplay", "You are about to visit: https://nextcloud.com").should("be.visible");
		cy.contains("a", "Visit link").should("have.attr", "href", "https://nextcloud.com");
		cy.contains("a", "Visit link").should("have.attr", "target", "_blank");
	});

	it("can open publicly shared link file", () => {
		if (Cypress.env("NC_VERSION") >= 28) {
			throw "Not implemented";
		}
		cy.visit("/apps/files/?dir=/");

		cy.contains(".nametext", "Test File.URL").within(() => {
			cy.root()
				.parent()
				.within(() => {
					cy.get(".fileactions .action-share").click();
				});
		});
		cy.get("button.new-share-link").click();
		cy.get('[aria-label^="Copy public link"]').then(($el) => {
			publicSharingLink = $el.get(0).getAttribute("href");
		});

		// Log out admin user
		cy.get('[aria-label="Open settings menu"]').click({ timeout: 4000 });
		cy.contains("a", "Log out").click({ timeout: 4000 });
		cy.reload(true);

		cy.then(() => {
			cy.visit(publicSharingLink);
		});

		cy.contains(".directDownload", "Test File.URL").should("be.visible");
		cy.contains(".directDownload", "View link").click();
		cy.url().should("be.equal", "https://example.org/");

		// @TODO: Once `experimentalSessionAndOrigin` is more stable
		// we can re-enable Chrome web security and use this syntax
		// to test for the change of URL
		// cy.origin("https://example.org", () => {
		// cy.location("href").should("eq", "https://example.org/");
		// });
	});

	it("cannot edit publicly shared link file", () => {
		if (Cypress.env("NC_VERSION") >= 28) {
			throw "Not implemented";
		}
		cy.visit("/apps/files/?dir=/");

		cy.contains(".nametext", "Test File.webloc").within(() => {
			cy.root()
				.parent()
				.within(() => {
					cy.get(".fileactions .action-share").click();
				});
		});
		cy.get("button.new-share-link").click();

		cy.get('[aria-label^="Copy public link"]').then(($el) => {
			publicSharingLink = $el.get(0).getAttribute("href");
		});

		// Log out admin user
		cy.get('[aria-label="Open settings menu"]').click({ timeout: 4000 });
		cy.contains("a", "Log out").click({ timeout: 4000 });
		cy.reload(true);

		cy.then(() => {
			cy.visit(publicSharingLink);
		});

		cy.contains(".directDownload", "Test File.webloc").should("be.visible");
		cy.contains(".directDownload", "View link").click();

		waitForOcDialog();
		cy.contains("h3", "Test File.webloc").should("be.visible");
		cy.contains(".urldisplay", "You are about to visit: https://nextcloud.com").should("be.visible");
		cy.contains("a", "Visit link").should("have.attr", "href", "https://nextcloud.com");
		cy.contains("a", "Visit link").should("have.attr", "target", "_blank");
		cy.contains("a", "Edit link").should("not.exist");
	});
});
