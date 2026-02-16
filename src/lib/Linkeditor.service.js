import { viewMode, currentFile } from "./store.js";
import { FileService } from "./File.service.js";
import { Parser } from "./Parser";
import { Permission, registerFileAction, addNewFileMenuEntry, DefaultType, NewMenuEntryCategory } from "@nextcloud/files";

const supportedMimetype = "application/internet-shortcut";
const getSpanWithIconClass = () => '<span class="icon-link" style="display: block;"></span>';

// Mokey-patch OC.dialogs, since somebody misspelled Dialogs.OK_BUTTON/S/...
window.OC.dialogs.alert = function (title, message) {
	window.OC.dialogs.message(
		t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
		t("files_linkeditor", "A slight problem"),
		"alert",
		71, // Dialogs.OK_BUTTONS
	);
};

export class LinkeditorService {
	/**
	 * Registers the file actions with files app
	 */
	static registerFileActions() {
		// Edit action on single file
		registerFileAction({
			id: "editLink",
			displayName: () => t("files_linkeditor", "Edit link"),
			iconSvgInline: getSpanWithIconClass,
			exec: async ({ nodes }) => {
				const [node] = nodes;
				if (!node) {
					return;
				}
				await LinkeditorService.loadAndChangeViewMode({
					fileName: node.basename,
					dirName: node.dirname,
					nextViewMode: "edit",
					permissions: node.permissions,
				});
			},
			enabled: ({ nodes }) => window.OC.currentUser &&
				nodes.every((file) => file.permissions >= Permission.UPDATE && supportedMimetype.includes(file.mime)),
		});

		// View action on single file
		registerFileAction({
			id: "viewLink",
			displayName: () => t("files_linkeditor", "View link"),
			title: () => "Hello",
			iconSvgInline: getSpanWithIconClass,
			exec: async ({ nodes }) => {
				const [node] = nodes;
				if (!node) {
					return;
				}
				if (window.OC.currentUser) {
					// Logged in
					await LinkeditorService.loadAndChangeViewMode({
						fileName: node.basename,
						dirName: node.dirname,
						nextViewMode: "view",
						permissions: node.permissions,
					});
				} else {
					// Public share
					// From Nextcloud 31, the filename is in `displayname`
					// while `basename` is the share key
					await LinkeditorService.loadAndChangeViewMode({
						fileName: node.displayname ?? node.basename,
						dirName: node.dirname,
						nextViewMode: "view",
						// TODO:
						downloadUrl: node.source,
						publicUser: true,
						permissions: node.permissions,
					});
				}
			},
			enabled: ({ nodes }) => nodes.every((file) => file.permissions >= Permission.READ && supportedMimetype.includes(file.mime)),
			default: DefaultType.DEFAULT,
		});

		const menuEntryFactory = ({ id, displayName, templateName }) => {
			// Register the new menu entry
			addNewFileMenuEntry({
				id,
				displayName,
				enabled: (context) => context.permissions >= Permission.CREATE,
				iconSvgInline: getSpanWithIconClass(),
				category: NewMenuEntryCategory.CreateNew,
				handler: (context, contents) => {
					const dir = context.path;
					// First name the file
					viewMode.update(() => "filename");
					currentFile.update(() =>
						FileService.getFileConfig({
							name: templateName,
							templateName,
							dir,
							isNew: true,
							existingContents: contents,
							onCreate: async (file) => {
								// Now edit and create the file
								viewMode.update(() => "edit");
								currentFile.update(() =>
									FileService.getFileConfig({
										name: file.name,
										dir: file.dir,
										isNew: true,
										onCreate: async (file) => {
											await LinkeditorService.saveAndChangeViewMode(file);
										},
									}),
								);
							},
						}),
					);
				},
			});
		};

		menuEntryFactory({
			id: "application-internet-shortcut",
			displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
			// TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
			templateName: window.t("files_linkeditor", "Link.URL"),
		});
		menuEntryFactory({
			id: "application-internet-shortcut-webloc",
			displayName: `${window.t("files_linkeditor", "New link")} (.webloc)`,
			// TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
			templateName: window.t("files_linkeditor", "Link.webloc"),
		});
	}

	static async loadAndChangeViewMode({ fileName, dirName, nextViewMode, publicUser, downloadUrl, permissions }) {
		// Get ready to show viewer
		viewMode.update(() => nextViewMode);
		// Preliminary file config update
		currentFile.update(() =>
			FileService.getFileConfig({
				name: fileName,
				dir: dirName ? dirName : "",
				permissions,
				isPublicLink: publicUser,
			}),
		);
		// Load file from backend
		let file = {};
		if (publicUser) {
			file = await FileService.loadPublic({ downloadUrl });
		} else {
			file = await FileService.load({ fileName, dir: dirName });
		}
		if (file) {
			// Read extension and run fitting parser.
			const extension = Parser.getExtension(fileName);
			// Parse the filecontent to get to the URL.
			let parsedFile = {};
			if (extension === "webloc") {
				parsedFile = Parser.parseWeblocFile(file.filecontents);
			} else {
				parsedFile = Parser.parseURLFile(file.filecontents);
			}
			// Update file info in store
			currentFile.update((fileConfig) =>
				FileService.getFileConfig({
					...fileConfig,
					...parsedFile,
					fileModifiedTime: file.mtime,
					isLoaded: true,
				}),
			);
		} else {
			window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
		}
	}

	static async saveAndChangeViewMode({ name, dir, url, sameWindow, skipConfirmation }) {
		// Read extension and run fitting parser.
		const extension = Parser.getExtension(name);
		// Parse the filecontent to get to the URL.
		let fileContent = "";
		if (extension === "webloc") {
			fileContent = Parser.generateWeblocFileContent("", url, sameWindow, skipConfirmation);
		} else {
			fileContent = Parser.generateURLFileContent("", url, sameWindow, skipConfirmation);
		}
		// Save file
		await FileService.save({ fileContent, name, dir });
		// Hide editor
		viewMode.update(() => "none");
	}
}
