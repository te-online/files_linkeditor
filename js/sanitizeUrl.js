/**
/*
/* from https://github.com/braintree/sanitize-url,
/* assumed MIT license
/*
**/

"use strict";

var invalidPrototcolRegex = /^(%20|\s)*(javascript|data)/im;
var ctrlCharactersRegex = /[^\x20-\x7E]/gim;
var urlSchemeRegex = /^([^:]+):/gm;
var relativeFirstCharacters = [".", "/"];

export function isRelativeUrl(url) {
	return relativeFirstCharacters.indexOf(url[0]) > -1;
}

export function sanitizeUrl(url) {
	var urlScheme, urlSchemeParseResults;
	var sanitizedUrl = url.replace(ctrlCharactersRegex, "");

	if (isRelativeUrl(sanitizedUrl)) {
		return sanitizedUrl;
	}

	urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);

	if (!urlSchemeParseResults) {
		return "about:blank";
	}

	urlScheme = urlSchemeParseResults[0];

	if (invalidPrototcolRegex.test(urlScheme)) {
		return "about:blank";
	}

	return sanitizedUrl;
}
