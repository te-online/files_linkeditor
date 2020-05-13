"use strict";

import { sanitizeUrl } from "../js/lib/sanitizeUrl";
import { Parser } from "../js/lib/Parser";

describe("filelist", function () {
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
});
