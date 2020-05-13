import { sanitizeUrl } from "./sanitizeUrl";

export class Parser {
	/**
	 * Generates a URL file.
	 */
	static generateURLFileContent(oldcontent, url) {
		// Find if this is already a shortcut file.
		if (oldcontent && oldcontent.indexOf("[InternetShortcut]") !== -1 && oldcontent.indexOf("URL=") !== -1) {
			// Seems like it, replace the url.
			return oldcontent.replace(new RegExp("URL=.*", "gm"), "URL=" + sanitizeUrl(url));
		} else {
			// Okay, let's create a new file.
			return `[InternetShortcut]\r\nURL=${sanitizeUrl(url)}\r\n`;
		}
	}

	/**
	 * Parse a URL file.
	 */
	static parseURLFile(filecontent) {
		if (filecontent) {
			// Match for URL line.
			const urllines = filecontent.match("URL=.*");
			// See if matches were found.
			if (urllines && Array.isArray(urllines) && urllines.length > 0) {
				// Let's use the first match.
				const url = urllines[0];
				// Return only the URL.
				return sanitizeUrl(url.replace("URL=", ""));
			}
		}
		return "";
	}

	/**
	 * Generates a webloc file.
	 */
	static generateWeblocFileContent(oldcontent, url) {
		// Find if this is already a shortcut file.
		// Match for URL line.
		const urlmatch = oldcontent.match("<key>URL</key>\n.<string>(.*)</string>");
		// See if at least two matches were found (the whole expression and the url itself).
		if (urlmatch && Array.isArray(urlmatch) && urlmatch.length > 1) {
			// Seems like it, replace the url.
			return oldcontent.replace(urlmatch[1], sanitizeUrl(url));
		} else {
			// Okay, let's create a new file.
			return `<?xml version="1.0" encoding="UTF-8"?>
				 <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				 <plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${sanitizeUrl(url)}</string>
					</dict>
				</plist>`;
		}
	}

	/**
	 * Parse a webloc file.
	 */
	static parseWeblocFile(filecontent) {
		if (filecontent) {
			// Match for URL line.
			const urlmatch = filecontent.match("<key>URL</key>\n.<string>(.*)</string>");
			// See if at least two matches were found (the whole expression and the url itself).
			if (urlmatch && Array.isArray(urlmatch) && urlmatch.length > 1) {
				// Let's use the first match.
				return sanitizeUrl(urlmatch[1]);
			}
		}
		return "";
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
