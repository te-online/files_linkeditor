import { sanitizeUrl } from "./sanitizeUrl";
import { viewMode, currentFile } from "./store.js";
import { FileService } from "./File.service";

const supportedMimetype = "application/internet-shortcut";
export class LinkeditorService {
	/**
	 * Registers the file actions with files app
	 */
	static registerFileActions() {
		// Edit action on single file
		window.OCA.Files.fileActions.registerAction({
			name: "editLink",
			displayName: t("files_linkeditor", "Edit link"),
			mime: supportedMimetype,
			// @TODO:
			actionHandler: async (filename, context) =>
				await LinkeditorService.loadAndChangeViewMode({ filename, context, nextViewMode: "edit" }),
			permissions: window.OC.PERMISSION_UPDATE,
			iconClass: "icon-link",
		});

		// View action on single file
		window.OCA.Files.fileActions.registerAction({
			name: "viewLink",
			displayName: t("files_linkeditor", "View link"),
			mime: supportedMimetype,
			actionHandler: async (filename, context) =>
				await LinkeditorService.loadAndChangeViewMode({ filename, context, nextViewMode: "view" }),
			permissions: window.OC.PERMISSION_READ,
			iconClass: "icon-link",
		});

		// Use Link viewing as default action.
		window.OCA.Files.fileActions.setDefault(supportedMimetype, "viewLink");

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
					fileType: supportedMimetype,
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
								viewMode.update(() => "edit");
								currentFile.update(() =>
									FileService.getFileConfig({
										name,
										dir,
									})
								);
							});
					},
				});
			},
		});
	}

	static async loadAndChangeViewMode({ filename, context, nextViewMode }) {
		window.context = context;
		// Find out where we are to use this link for the cancel button.
		const currentUrl = encodeURI(context.fileList.linkTo() + "?path=" + context.dir);
		// Get ready to show viewer
		viewMode.update(() => nextViewMode);
		// Preliminary file config update
		currentFile.update(() =>
			FileService.getFileConfig({
				name: filename,
				currentUrl,
			})
		);
		// Load file from backend
		const file = await FileService.load({ filename, dir: context.dir });
		// Read extension and run fitting parser.
		const extension = LinkeditorService.getExtension(filename);
		// Parse the filecontent to get to the URL.
		let url = "";
		if (extension === "webloc") {
			url = LinkeditorService.parseWeblocFile(file.filecontents);
		} else {
			url = LinkeditorService.parseURLFile(file.filecontents);
		}
		// Update file info in store
		currentFile.update((fileConfig) => ({ ...fileConfig, url: sanitizeUrl(url) }));
	}

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
