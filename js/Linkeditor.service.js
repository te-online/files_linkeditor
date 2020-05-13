import { viewMode, currentFile } from "./store.js";
import { FileService } from "./File.service";
import { Parser } from "./Parser";

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
			actionHandler: async (fileName, context) =>
				await LinkeditorService.loadAndChangeViewMode({ fileName, context, nextViewMode: "edit" }),
			permissions: window.OC.PERMISSION_UPDATE,
			iconClass: "icon-link",
		});

		// View action on single file
		window.OCA.Files.fileActions.registerAction({
			name: "viewLink",
			displayName: t("files_linkeditor", "View link"),
			mime: supportedMimetype,
			actionHandler: async (fileName, context) =>
				await LinkeditorService.loadAndChangeViewMode({ fileName, context, nextViewMode: "view" }),
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
						viewMode.update(() => "edit");
						currentFile.update(() =>
							FileService.getFileConfig({
								name,
								dir,
								isNew: true,
								onCreate: async (file) => {
									await fileList.createFile(name, {
										scrollTo: false,
									});
									const newFile = await FileService.load({ fileName: name, dir });
									await LinkeditorService.saveAndChangeViewMode({ ...file, fileModifiedTime: newFile.mtime });
								},
							})
						);
					},
				});
			},
		});
	}

	static async loadAndChangeViewMode({ fileName, context, nextViewMode }) {
		window.context = context;
		// Find out where we are to use this link for the cancel button.
		const currentUrl = encodeURI(context.fileList.linkTo() + "?path=" + context.dir);
		// Get ready to show viewer
		viewMode.update(() => nextViewMode);
		// Preliminary file config update
		currentFile.update(() =>
			FileService.getFileConfig({
				name: fileName,
				currentUrl,
				dir: context.dir,
			})
		);
		// Load file from backend
		const file = await FileService.load({ fileName, dir: context.dir });
		// Read extension and run fitting parser.
		const extension = Parser.getExtension(fileName);
		// Parse the filecontent to get to the URL.
		let url = "";
		if (extension === "webloc") {
			url = Parser.parseWeblocFile(file ? file.filecontents : "");
		} else {
			url = Parser.parseURLFile(file ? file.filecontents : "");
		}
		// Update file info in store
		currentFile.update((fileConfig) =>
			FileService.getFileConfig({ ...fileConfig, url, fileModifiedTime: file.mtime, isLoaded: true })
		);
	}

	static async saveAndChangeViewMode({ name, dir, url, fileModifiedTime }) {
		// Read extension and run fitting parser.
		const extension = Parser.getExtension(name);
		// Parse the filecontent to get to the URL.
		let fileContent = "";
		if (extension === "webloc") {
			fileContent = Parser.generateWeblocFileContent("", url);
		} else {
			fileContent = Parser.generateURLFileContent("", url);
		}
		// Save file
		await FileService.save({ fileContent, name, dir, fileModifiedTime });
		// Hide editor
		viewMode.update(() => "none");
	}
}
