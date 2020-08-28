import { sanitizeUrl } from "@braintree/sanitize-url";
import { BinaryPlistParserService } from "./bplistParser";
const binaryPlistParser = new BinaryPlistParserService();

const extraFields = {
	skipConfirmation: "X-Skip-Confirm-Navigation=1",
	sameWindow: "X-Target=_self",
};
const extraFieldNames = {
	skipConfirmation: "X-Skip-Confirm-Navigation",
	sameWindow: "X-Target",
};
const emptyFile = {
	url: "",
	sameWindow: false,
	skipConfirmation: false,
};
export class Parser {
	/**
	 * Generates a URL file.
	 */
	static generateURLFileContent(oldContent, url, sameWindow = false, skipConfirmation = false) {
		let newContent = "";
		// Find if this is already a shortcut file.
		if (oldContent && oldContent.indexOf("[InternetShortcut]") !== -1 && oldContent.indexOf("URL=") !== -1) {
			// Seems like it, replace the url.
			newContent = oldContent.replace(new RegExp("URL=.*", "gm"), `URL=${sanitizeUrl(url)}`);
		} else {
			// Okay, let's create a new file.
			newContent = `[InternetShortcut]\r\nURL=${sanitizeUrl(url)}`;
		}
		// Adjust same window property
		if (!sameWindow && newContent.indexOf(extraFields.sameWindow) !== -1) {
			newContent = newContent.replace(extraFields.sameWindow, "");
		} else if (sameWindow && newContent.indexOf(extraFields.sameWindow) === -1) {
			newContent = `${newContent}\r\n${extraFields.sameWindow}`;
		}

		// Adjust skip navigation confirmation property
		if (!skipConfirmation && newContent.indexOf(extraFields.skipConfirmation) !== -1) {
			newContent = newContent.replace(extraFields.skipConfirmation, "");
		} else if (skipConfirmation && newContent.indexOf(extraFields.skipConfirmation) === -1) {
			newContent = `${newContent}\r\n${extraFields.skipConfirmation}`;
		}

		// Remove blank new lines
		newContent = newContent.replace(/\r\n\r\n/gm, "\r\n").trim();
		// Add a newline at the end
		return `${newContent}\r\n`;
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
			if (filecontent.indexOf(extraFields.skipConfirmation) !== -1) {
				result.skipConfirmation = true;
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
	static generateWeblocFileContent(oldcontent, url, sameWindow = false, skipConfirmation = false) {
		let newContent = "";
		let urlMatch = false;

		// Editing existing file
		if (oldcontent) {
			// Parse XML file
			const parser = new window.DOMParser();
			// Remove comment characters around extra fields
			const xmlContent = uncommentExtraFields(oldcontent);
			const xmlDoc = parser.parseFromString(xmlContent, "text/xml");
			// There can be <dict> and <extra> tags on the root <plist>
			const elements = [...xmlDoc.getElementsByTagName("dict"), ...xmlDoc.getElementsByTagName("extra")];

			let skipConfirmationMatch = false;
			let sameWindowMatch = false;
			// Map over all child elements
			if (elements && elements.length) {
				for (const element of elements) {
					const key = element.getElementsByTagName("key");
					const string = element.getElementsByTagName("string");
					// Match for URL line
					if (getXMLTagValue(key) === "URL") {
						setXMLTagValue(string, sanitizeUrl(url));
						urlMatch = true;
					}
					// If this extra field is present, the link opens in the same window
					if (getXMLTagValue(key) === extraFieldNames.sameWindow && getXMLTagValue(string) === "_self") {
						if (sameWindow) {
							// Update sameWindow field
							setXMLTagValue(string, "_self");
						} else {
							// Remove field
							xmlDoc.getElementsByTagName("plist")[0].removeChild(element);
						}
						sameWindowMatch = true;
					}
					// If this extra field is present, we skip the navigation confirmation view
					if (getXMLTagValue(key) === extraFieldNames.skipConfirmation && getXMLTagValue(string) === "1") {
						if (skipConfirmation) {
							// Update skipNavigation field
							setXMLTagValue(string, "1");
						} else {
							// Remove field
							xmlDoc.getElementsByTagName("plist")[0].removeChild(element);
						}
						skipConfirmationMatch = true;
					}
				}
			}

			// The sameWindow field is not present, but needs to be added
			if (sameWindow && !sameWindowMatch) {
				const sameWindowElement = createExtraElement(xmlDoc, extraFieldNames.sameWindow, "_self");
				xmlDoc.getElementsByTagName("plist")[0].appendChild(sameWindowElement);
			}

			// The skipConfirmation field is not present, but needs to be added
			if (skipConfirmation && !skipConfirmationMatch) {
				const skipConfirmationElement = createExtraElement(xmlDoc, extraFieldNames.skipConfirmation, "1");
				xmlDoc.getElementsByTagName("plist")[0].appendChild(skipConfirmationElement);
			}

			// Instantiate XML serializer
			const serializer = new window.XMLSerializer();
			// Add XML header, serialize
			newContent = `<?xml version="1.0" encoding="UTF-8"?>
			${serializer.serializeToString(xmlDoc)}`;
			if (newContent.indexOf("parsererror") > -1) {
				// Bail if parse error was "thrown"
				console.error("Parse error", newContent);
				newContent = "";
			}
			// pretty print XML
			newContent = formatXml(newContent);
		}

		// No content or URL not found in content
		if (!newContent || !urlMatch) {
			// Okay, let's create a new file.
			newContent = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${sanitizeUrl(url)}</string>
					</dict>`;
			if (sameWindow) {
				newContent = `${newContent}
				<extra>
					<key>${extraFieldNames.sameWindow}</key>
					<string>_self</string>
				</extra>`;
			}
			if (skipConfirmation) {
				newContent = `${newContent}
				<extra>
					<key>${extraFieldNames.skipConfirmation}</key>
					<string>1</string>
				</extra>`;
			}
			newContent = `${newContent}
			</plist>`;
		}

		// Comment extra fields
		newContent = commentExtraFields(newContent);
		// Trim and remove indentation
		newContent = newContent.replace(/(\n|\b)\t+/g, "$1").trim();
		// Remove empty newlines
		newContent = newContent.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim();

		return newContent;
	}

	/**
	 * Parse a webloc file.
	 */
	static parseWeblocFile(filecontent) {
		const result = { ...emptyFile };

		if (filecontent) {
			if (filecontent.substring(0, 6) === "bplist") {
				// Try parsing as binary file
				try {
					const parsed = binaryPlistParser.parse64Content(window.btoa(filecontent));
					// Was able to parse and has URL
					if (parsed && parsed.length && parsed[0] && parsed[0].URL) {
						// Return URL, no custom metadata can be saved to the binary file
						result.url = parsed[0].URL;
					}
				} catch (error) {
					console.info(error);
				}
			} else {
				// Try parsing a XML file
				const parser = new window.DOMParser();
				// Remove comment characters around extra fields
				const xmlContent = uncommentExtraFields(filecontent);
				// Parse XML file
				const xmlDoc = parser.parseFromString(xmlContent, "text/xml");
				// There can be <dict> and <extra> tags on the root <plist>
				const elements = [...xmlDoc.getElementsByTagName("dict"), ...xmlDoc.getElementsByTagName("extra")];

				// Map over all child elements
				if (elements && elements.length) {
					for (const element of elements) {
						const key = element.getElementsByTagName("key");
						const string = element.getElementsByTagName("string");
						// Match for URL line
						if (getXMLTagValue(key) === "URL") {
							result.url = sanitizeUrl(getXMLTagValue(string));
						}
						// If this extra field is present, the link opens in the same window
						if (getXMLTagValue(key) === extraFieldNames.sameWindow && getXMLTagValue(string) === "_self") {
							result.sameWindow = true;
						}
						// If this extra field is present, we skip the navigation confirmation view
						if (getXMLTagValue(key) === extraFieldNames.skipConfirmation && getXMLTagValue(string) === "1") {
							result.skipConfirmation = true;
						}
					}
				}
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

// Get the actual value of an XML node
const getXMLTagValue = (element) => {
	if (
		element &&
		element.length > 0 &&
		element[0].childNodes &&
		element[0].childNodes.length > 0 &&
		element[0].childNodes[0]
	) {
		return element[0].childNodes[0].nodeValue;
	}
	return "";
};

// Set the value of an XML node
const setXMLTagValue = (element, value) => {
	if (
		element &&
		element.length > 0 &&
		element[0].childNodes &&
		element[0].childNodes.length > 0 &&
		element[0].childNodes[0]
	) {
		element[0].childNodes[0].nodeValue = value;
	}
};

// Creates an <extra> XML element
const createExtraElement = (xmlDoc, keyValue, stringValue) => {
	const extra = xmlDoc.createElement("extra");

	const key = xmlDoc.createElement("key");
	key.appendChild(xmlDoc.createTextNode(keyValue));
	extra.appendChild(key);

	const string = xmlDoc.createElement("string");
	string.appendChild(xmlDoc.createTextNode(stringValue));
	extra.appendChild(string);

	return extra;
};

const formatXml = (xml) => {
	return xml.replace(/></g, ">\n<");
};

const commentExtraFields = (xml) => {
	return xml.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->");
};

const uncommentExtraFields = (xml) => {
	return xml.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
};
