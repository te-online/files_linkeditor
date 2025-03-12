"use strict";

import { sanitizeUrl } from "@braintree/sanitize-url";
import { Parser } from "../src/lib/Parser";
import { suite, describe, it, expect, vi } from "vitest";
import { readFile } from "fs/promises";
import { JSDOM } from "jsdom";
import { checkAndFixExtension } from "../src/lib/helpers";

const { window } = new JSDOM(`...`);
vi.stubGlobal("window", window);

suite("Sanitizer", function () {
	it("replaces javascript urls with about:blank", function () {
		expect(sanitizeUrl("javascript:alert(document.domain)")).toEqual("about:blank");
	});

	it("don't sanitize away percent signs in urls", function () {
		var url = "http://example.org/7pe0o300%40group.calendar.com/public/basic.ics";
		expect(sanitizeUrl(url)).toEqual(url);
	});

	it("converts a URL with percent signs in it correctly to URL file format", function () {
		var url = "http://example.org/7pe0o300%40group.calendar.com/public/basic.ics";
		expect(Parser.generateURLFileContent("", url)).toEqual(`[InternetShortcut]\r\nURL=${url}\r\n`);
	});

	it("keeps a URL with special characters as it is", function () {
		var url = "https://example.org/éèùà";
		expect(Parser.generateURLFileContent("", url)).toEqual(`[InternetShortcut]\r\nURL=${url}\r\n`);
	});
});

suite("Parser", function () {
	describe(".webloc files", function () {
		it("creates a .webloc file with just a URL", function () {
			const url = "https://example.org";
			expect(Parser.generateWeblocFileContent("", url)).toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${url}</string>
</dict>
</plist>`);
		});

		it("creates a .webloc file with a URL and the newWindow option", function () {
			const url = "https://example.org";
			const sameWindow = true;
			expect(Parser.generateWeblocFileContent("", url, sameWindow)).toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${url}</string>
</dict>
<!-- <extra>
<key>X-Target</key>
<string>_self</string>
</extra> -->
</plist>`);
		});

		it("creates a .webloc file with a URL, the newWindow option and the skipConfirmation option", function () {
			const url = "https://example.org";
			const sameWindow = true;
			const skipConfirmation = true;
			expect(Parser.generateWeblocFileContent("", url, sameWindow, skipConfirmation))
				.toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${url}</string>
</dict>
<!-- <extra>
<key>X-Target</key>
<string>_self</string>
</extra> -->
<!-- <extra>
<key>X-Skip-Confirm-Navigation</key>
<string>1</string>
</extra> -->
</plist>`);
		});

		it("updates a .webloc file removing the newWindow option and keeping the skipConfirmation option", function () {
			const url = "https://example.org";
			const previousFile = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${url}</string>
</dict>

<!-- <extra>
<key>X-Target</key>
<string>_self</string>
</extra> -->

<!-- <extra>
<key>X-Skip-Confirm-Navigation</key>
<string>1</string>
</extra> -->
</plist>`;
			const sameWindow = false;
			const skipConfirmation = true;
			expect(Parser.generateWeblocFileContent(previousFile, url, sameWindow, skipConfirmation))
				.toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${url}</string>
</dict>
<!-- <extra>
<key>X-Skip-Confirm-Navigation</key>
<string>1</string>
</extra> -->
</plist>`);
		});

		it("updates a .webloc file removing the skipConfirmation option, keeping an unknown option and adding sameWindow option", function () {
			const url = "https://example.org";
			const previousFile = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${url}</string>
</dict>

<!-- <extra>
<key>X-It's-fine</key>
<string>I'm fine.</string>
</extra> -->

<!-- <extra>
<key>X-Skip-Confirm-Navigation</key>
<string>1</string>
</extra> -->
</plist>`;
			const sameWindow = true;
			const skipConfirmation = false;
			expect(Parser.generateWeblocFileContent(previousFile, url, sameWindow, skipConfirmation))
				.toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${url}</string>
</dict>
<!-- <extra>
<key>X-It's-fine</key>
<string>I'm fine.</string>
</extra> -->
<!-- <extra>
<key>X-Target</key>
<string>_self</string>
</extra> -->
</plist>`);
		});

		it("reads a .webloc file with a link", function () {
			const file = {
				url: "https://example.org",
				sameWindow: false,
				skipConfirmation: false,
			};
			expect(
				Parser.parseWeblocFile(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${file.url}</string>
</dict>
</plist>`),
			).toEqual(file);
		});

		it("reads a .webloc file with a link and a sameWindow field", function () {
			const file = {
				url: "https://example.org",
				sameWindow: true,
				skipConfirmation: false,
			};
			expect(
				Parser.parseWeblocFile(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${file.url}</string>
</dict>
<!-- <extra>
<key>X-Target</key>
<string>_self</string>
</extra> -->
</plist>`),
			).toEqual(file);
		});

		it("reads a .webloc file with a link, a sameWindow field and a skipConfirmation field", function () {
			const file = {
				url: "https://example.org",
				sameWindow: true,
				skipConfirmation: true,
			};
			expect(
				Parser.parseWeblocFile(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${file.url}</string>
</dict>
<!-- <extra>
<key>X-Skip-Confirm-Navigation</key>
<string>1</string>
</extra> -->
<!-- <extra>
<key>X-Target</key>
<string>_self</string>
</extra> -->
</plist>`),
			).toEqual(file);
		});

		it("reads a .webloc file with a link, and a skipConfirmation field", function () {
			const file = {
				url: "https://example.org",
				sameWindow: false,
				skipConfirmation: true,
			};
			expect(
				Parser.parseWeblocFile(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${file.url}</string>
</dict>
<!-- <extra>
<key>X-Skip-Confirm-Navigation</key>
<string>1</string>
</extra> -->
</plist>`),
			).toEqual(file);
		});

		it("reads a .webloc file with a link, an unknown field and a sameWindow field", function () {
			const file = {
				url: "https://example.org",
				sameWindow: true,
				skipConfirmation: false,
			};
			expect(
				Parser.parseWeblocFile(`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>URL</key>
<string>${file.url}</string>
</dict>
<!-- <extra>
<key>X-It's-fine</key>
<string>I'm fine.</string>
</extra> -->
<!-- <extra>
<key>X-Target</key>
<string>_self</string>
</extra> -->
</plist>`),
			).toEqual(file);
		});
	});

	describe(".webloc binary files", function () {
		it("reads a .webloc file that is a binary plist file", async function () {
			const binaryContent = await readFile("./unittest/Example Domain.webloc", "binary");
			const file = {
				url: "https://example.org/",
				sameWindow: false,
				skipConfirmation: false,
			};
			expect(Parser.parseWeblocFile(binaryContent)).toEqual(file);
		});
	});

	describe(".URL files", function () {
		it("creates a .URL file with just a URL", function () {
			const url = "https://example.org";
			expect(Parser.generateURLFileContent("", url)).toEqual(`[InternetShortcut]\r
URL=${url}\r
`);
		});

		it("creates a .URL file with a URL and the newWindow option", function () {
			const url = "https://example.org";
			const sameWindow = true;
			expect(Parser.generateURLFileContent("", url, sameWindow)).toEqual(`[InternetShortcut]\r
URL=${url}\r
X-Target=_self\r
`);
		});

		it("creates a .URL file with a URL, the newWindow option and the skipConfirmation option", function () {
			const url = "https://example.org";
			const sameWindow = true;
			const skipConfirmation = true;
			expect(Parser.generateURLFileContent("", url, sameWindow, skipConfirmation)).toEqual(`[InternetShortcut]\r
URL=${url}\r
X-Target=_self\r
X-Skip-Confirm-Navigation=1\r
`);
		});

		it("updates a .URL file removing the newWindow option and keeping the skipConfirmation option", function () {
			const url = "https://example.org";
			const previousFile = `[InternetShortcut]\r
URL=${url}\r
X-Target=_self\r
X-Skip-Confirm-Navigation=1\r
`;
			const sameWindow = false;
			const skipConfirmation = true;
			expect(Parser.generateURLFileContent(previousFile, url, sameWindow, skipConfirmation))
				.toEqual(`[InternetShortcut]\r
URL=${url}\r
X-Skip-Confirm-Navigation=1\r
`);
		});

		it("updates a .URL file removing the skipConfirmation option, keeping an unknown option and adding sameWindow option", function () {
			const url = "https://example.org";
			const previousFile = `[InternetShortcut]\r
URL=${url}\r
X-Skip-Confirm-Navigation=1\r
X-It's-Fine=I'm fine\r
`;
			const sameWindow = true;
			const skipConfirmation = false;
			expect(Parser.generateURLFileContent(previousFile, url, sameWindow, skipConfirmation))
				.toEqual(`[InternetShortcut]\r
URL=${url}\r
X-It's-Fine=I'm fine\r
X-Target=_self\r
`);
		});

		it("reads a .URL file with a link", function () {
			const file = {
				url: "https://example.org",
				sameWindow: false,
				skipConfirmation: false,
			};
			expect(
				Parser.parseURLFile(`[InternetShortcut]
URL=${file.url}`),
			).toEqual(file);
		});

		it("reads a .URL file with a link and a sameWindow field", function () {
			const file = {
				url: "https://example.org",
				sameWindow: true,
				skipConfirmation: false,
			};
			expect(
				Parser.parseURLFile(`[InternetShortcut]
URL=${file.url}
X-Target=_self`),
			).toEqual(file);
		});

		it("reads a .URL file with a link, a sameWindow field and a skipConfirmation field", function () {
			const file = {
				url: "https://example.org",
				sameWindow: true,
				skipConfirmation: true,
			};
			expect(
				Parser.parseURLFile(`[InternetShortcut]
URL=${file.url}
X-Skip-Confirm-Navigation=1
X-Target=_self`),
			).toEqual(file);
		});

		it("reads a .URL file with a link, and a skipConfirmation field", function () {
			const file = {
				url: "https://example.org",
				sameWindow: false,
				skipConfirmation: true,
			};
			expect(
				Parser.parseURLFile(`[InternetShortcut]
URL=${file.url}
X-Skip-Confirm-Navigation=1`),
			).toEqual(file);
		});

		it("reads a .URL file with a link, an unknown field and a sameWindow field", function () {
			const file = {
				url: "https://example.org",
				sameWindow: true,
				skipConfirmation: false,
			};
			expect(
				Parser.parseURLFile(`[InternetShortcut]
URL=${file.url}
X-It's-Fine=I'm fine
X-Target=_self`),
			).toEqual(file);
		});
	});

	describe("Helpers", function () {
		it("can fix a missing .webloc extension", () => {
			expect(checkAndFixExtension({ templateName: "File.webloc", name: "File" })).toStrictEqual({
				templateName: "File.webloc",
				name: "File.webloc",
			});
		});

		it("can fix a missing .URL extension", () => {
			expect(checkAndFixExtension({ templateName: "File.URL", name: "File" })).toStrictEqual({
				templateName: "File.URL",
				name: "File.URL",
			});
		});

		it("can fix a wrong .png extension", () => {
			expect(checkAndFixExtension({ templateName: "File.URL", name: "File my space.png" })).toStrictEqual({
				templateName: "File.URL",
				name: "File my space.png.URL",
			});
		});

		it("leaves a lowercase extension", () => {
			expect(checkAndFixExtension({ templateName: "File.URL", name: "all my files are lowercase.url" })).toStrictEqual({
				templateName: "File.URL",
				name: "all my files are lowercase.url",
			});
		});

		it("leaves a partly uppercase extension", () => {
			expect(checkAndFixExtension({ templateName: "File.webloc", name: "WeBLoc rUlEz.wEBloC" })).toStrictEqual({
				templateName: "File.webloc",
				name: "WeBLoc rUlEz.wEBloC",
			});
		});

		it("can handle a missing template", () => {
			expect(checkAndFixExtension({ name: "nothing" })).toStrictEqual({
				name: "nothing",
			});
		});

		it("can handle an empty file", () => {
			expect(checkAndFixExtension({})).toStrictEqual({});
		});
	});
});
