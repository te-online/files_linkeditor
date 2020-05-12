import { sanitizeUrl } from "./sanitizeUrl";

export class LinkeditorService {
	/**
	 * Registers the file actions
	 */
	static registerFileActions() {
		const mimes = LinkeditorService.getSupportedMimetypes();

		mimes.forEach((value) => {
			window.OCA.Files.fileActions.registerAction({
				name: "editLink",
				displayName: t("files_linkeditor", "Edit link"),
				mime: value,
				// @TODO:
				actionHandler: (something) => {
					console.log({ edit: true, something });
				},
				permissions: window.OC.PERMISSION_UPDATE,
				iconClass: "icon-link",
			});

			window.OCA.Files.fileActions.registerAction({
				name: "viewLink",
				displayName: t("files_linkeditor", "View link"),
				mime: value,
				actionHandler: (filename, context) => {
					window.context = context;
					// Build the download url.
					const downloadUrl = context.fileList.getDownloadUrl(filename);
					// Find out where we are to use this link for the cancel button.
					const currentUrl = encodeURI(context.fileList.linkTo() + "?path=" + context.dir);
					// Find the element we are clicking on.
					const linkElement = document.querySelector('[href="' + downloadUrl + '"]');
					// Trigger view Action
					// @TODO:
					console.log({
						view: true,
						filename,
						downloadUrl,
						currentUrl,
						linkElement,
					});
				},
				permissions: window.OC.PERMISSION_READ,
				iconClass: "icon-link",
			});

			// Use Link viewing as default action.
			window.OCA.Files.fileActions.setDefault(value, "viewLink");
		});

		window.OC.Plugins.register("OCA.Files.NewFileMenu", {
			attach: function (menu) {
				const fileList = menu.fileList;

				// Only attach to main file list
				if (fileList.id !== "files") {
					return;
				}

				// Register the new menu entry
				menu.addMenuEntry({
					id: "application-internet-shortcut",
					displayName: window.t("files_linkeditor", "New link"),
					templateName: window.t("files_linkeditor", "Link.URL"),
					iconClass: "icon-link",
					fileType: "application/internet-shortcut",
					actionHandler: function (name) {
						const dir = fileList.getCurrentDirectory();
						// First create the file
						fileList
							.createFile(name, {
								scrollTo: false,
							})
							.then(function () {
								// once the file got successfully created,
								// open the editor
								// @TODO:
								console.log({
									new: true,
									fileList: fileList,
									dir: dir,
									name,
								});
							});
					},
				});
			},
		});
	}

	static getSupportedMimetypes() {
		return ["application/internet-shortcut"];
	}

	static encodeURI() {}

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
			return "[InternetShortcut]\r\nURL=" + sanitizeUrl(url) + "\r\n";
		}
	}

	/**
	 * Parse a URL file.
	 */
	static parseURLFile(filecontent) {
		if (filecontent) {
			// Match for URL line.
			var urllines = filecontent.match("URL=.*");
			// See if matches were found.
			if (urllines && Array.isArray(urllines) && urllines.length > 0) {
				// Let's use the first match.
				var url = urllines[0];
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
		var urlmatch = oldcontent.match("<key>URL</key>\n.<string>(.*)</string>");
		// See if at least two matches were found (the whole expression and the url itself).
		if (urlmatch && Array.isArray(urlmatch) && urlmatch.length > 1) {
			// Seems like it, replace the url.
			return oldcontent.replace(urlmatch[1], sanitizeUrl(url));
		} else {
			// Okay, let's create a new file.
			return (
				'<?xml version="1.0" encoding="UTF-8"?>\n' +
				'<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n' +
				'<plist version="1.0">\n' +
				"	<dict>\n" +
				"		<key>URL</key>\n" +
				"		<string>" +
				sanitizeUrl(url) +
				"</string>\n" +
				"	</dict>\n" +
				"</plist>"
			);
		}
	}

	/**
	 * Parse a webloc file.
	 */
	static parseWeblocFile(filecontent) {
		if (filecontent) {
			// Match for URL line.
			var urlmatch = filecontent.match("<key>URL</key>\n.<string>(.*)</string>");
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
			var parts = filename.split(".");
			// See if there was a dot in the name.
			if (parts && Array.isArray(parts) && parts.length > 1) {
				// Get extension.
				var extension = parts[parts.length - 1];
				// Return the last part after the last dot.
				if (extension) {
					return extension.toLowerCase();
				}
			}
		}
		return "";
	}
}
