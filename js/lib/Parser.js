import { sanitizeUrl } from "./sanitizeUrl";

const extraFields = {
	skipConfirmNavigation: "X-Skip-Confirm-Navigation=1",
	sameWindow: "X-Target=_self",
};
const extraFieldNames = {
	skipConfirmNavigation: "X-Skip-Confirm-Navigation",
	sameWindow: "X-Target",
};
const emptyFile = {
	url: "",
	sameWindow: false,
	skipConfirmNavigation: true,
};
export class Parser {
	/**
	 * Generates a URL file.
	 */
	static generateURLFileContent(oldContent, url, sameWindow = false, skipConfirmNavigation = false) {
		let newContent = "";
		// Find if this is already a shortcut file.
		if (oldContent && oldContent.indexOf("[InternetShortcut]") !== -1 && oldContent.indexOf("URL=") !== -1) {
			// Seems like it, replace the url.
			newContent = oldContent.replace(new RegExp("URL=.*", "gm"), `URL=${sanitizeUrl(url)}`);
		} else {
			// Okay, let's create a new file.
			newContent = `[InternetShortcut]\r\nURL=${sanitizeUrl(url)}\r\n`;
		}
		// Adjust same window property
		if (!sameWindow && newContent.indexOf(extraFields.sameWindow) !== -1) {
			newContent = newContent.replace(extraFields.sameWindow, "");
		} else if (sameWindow && newContent.indexOf(extraFields.sameWindow) === -1) {
			newContent = `${newContent}\r\n${extraFields.sameWindow}`;
		}

		// Adjust skip navigation confirmation property
		if (!skipConfirmNavigation && newContent.indexOf(extraFields.skipConfirmNavigation) !== -1) {
			newContent = newContent.replace(extraFields.skipConfirmNavigation, "");
		} else if (skipConfirmNavigation && newContent.indexOf(extraFields.skipConfirmNavigation) === -1) {
			newContent = `${newContent}\r\n${extraFields.skipConfirmNavigation}`;
		}

		return newContent;
	}

	/**
	 * Parse a URL file.
	 */
	static parseURLFile(filecontent) {
		const result = { ...emptyFile };

		if (filecontent) {
			// Match for URL line.
			const urllines = filecontent.match("URL=.*");
			// See if matches were found.
			if (urllines && Array.isArray(urllines) && urllines.length > 0) {
				// Let's use the first match.
				const url = urllines[0];
				// Return only the URL.
				result.url = sanitizeUrl(url.replace("URL=", ""));
			}

			// If this extra field is present, we skip the navigation confirmation view
			if (filecontent.indexOf(extraFields.skipConfirmNavigation) !== -1) {
				result.skipConfirmNavigation = true;
			}
			// If this extra field is present, the link opens in the same window
			if (filecontent.indexOf(extraFields.sameWindow) !== -1) {
				result.sameWindow = true;
			}
		}

		return result;
	}

	/**
	 * Generates a webloc file.
	 */
	static generateWeblocFileContent(oldcontent, url, sameWindow = false, skipConfirmNavigation = false) {
		// Find if this is already a shortcut file.
		let newContent = "";
		// Match for URL line.
		const urlmatch = oldcontent.match("<key>URL</key>\n.<string>(.*)</string>");
		const sameWindowMatch =
			oldcontent.indexOf(`<dict>\n<key>${extraFieldNames.sameWindow}</key>\n.<string>_self</string>\n</dict>`) !== -1;
		const skipConfirmNavigationMatch =
			oldcontent.indexOf(`<dict><key>${extraFieldNames.skipConfirmNavigation}</key>\n.<string>1</string></dict>`) !==
			-1;
		// See if at least two matches were found (the whole expression and the url itself).
		if (urlmatch && Array.isArray(urlmatch) && urlmatch.length > 1) {
			// Seems like it, replace the url.
			newContent = oldcontent.replace(urlmatch[1], sanitizeUrl(url));
			// Check for same window property
			if (!sameWindow && sameWindowMatch) {
				newContent = newContent.replace(
					`<dict>\n<key>${extraFieldNames.sameWindow}</key>\n.<string>_self</string>\n</dict>`,
					""
				);
			} else if (sameWindow && !sameWindowMatch) {
				newContent = newContent.replace(
					"</plist>",
					`<dict>\n<key>${extraFieldNames.sameWindow}</key>\n.<string>_self</string>\n</dict>\n</plist>`
				);
			}
			// Check for skip confirm navigation property
			if (!skipConfirmNavigation && skipConfirmNavigationMatch) {
				newContent = newContent.replace(
					`<dict>\n<key>${extraFieldNames.skipConfirmNavigation}</key>\n.<string>1</string>\n</dict>`,
					""
				);
			} else if (skipConfirmNavigation && !skipConfirmNavigationMatch) {
				newContent = newContent.replace(
					"</plist>",
					`<dict>\n<key>${extraFieldNames.skipConfirmNavigation}</key>\n.<string>1</string>\n</dict>\n</plist>`
				);
			}
		} else {
			// Okay, let's create a new file.
			newContent = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${sanitizeUrl(url)}</string>
					</dict>
					${
						sameWindow
							? `
					<dict>
						<key>${extraFieldNames.sameWindow}</key>
						<string>_self</string>
					</dict>`
							: ""
					}
					${
						skipConfirmNavigation
							? `
					<dict>
						<key>${extraFieldNames.skipConfirmNavigation}</key>
						<string>1</string>
					</dict>`
							: ""
					}
				</plist>`
				.replace(/(\n|\b)\t+/g, "$1")
				.trim();
		}

		return newContent;
	}

	/**
	 * Parse a webloc file.
	 */
	static parseWeblocFile(filecontent) {
		const result = { ...emptyFile };
		if (filecontent) {
			// Match for URL line.
			const urlmatch = filecontent
				.replace(/(\n|\b)\t+/g, "$1")
				.trim()
				.match(
					`<key>URL</key>
					<string>(.*)</string>
					`
						.replace(/(\n|\b)\t+/g, "$1")
						.trim()
				);
			// See if at least two matches were found (the whole expression and the url itself).
			if (urlmatch && Array.isArray(urlmatch) && urlmatch.length > 1) {
				// Let's use the first match.
				result.url = sanitizeUrl(urlmatch[1]);
			}

			// If this extra field is present, we skip the navigation confirmation view
			const sameWindowMatch =
				filecontent.indexOf(`<dict>\n<key>${extraFieldNames.sameWindow}</key>\n.<string>_self</string>\n</dict>`) !==
				-1;
			if (sameWindowMatch) {
				result.sameWindow = true;
			}
			// If this extra field is present, the link opens in the same window
			const skipConfirmNavigationMatch =
				filecontent.indexOf(`<dict><key>${extraFieldNames.skipConfirmNavigation}</key>\n.<string>1</string></dict>`) !==
				-1;
			if (skipConfirmNavigationMatch) {
				result.skipConfirmNavigation = true;
			}
		}

		return result;
	}

	/**
	 * Get extension from filename.
	 */
	static getExtension(filename) {
		if (filename) {
			// Split at dot.
			const parts = filename.split(".");
			// See if there was a dot in the name.
			if (parts && Array.isArray(parts) && parts.length > 1) {
				// Get extension.
				const extension = parts[parts.length - 1];
				// Return the last part after the last dot.
				if (extension) {
					return extension.toLowerCase();
				}
			}
		}
		return "";
	}
}
