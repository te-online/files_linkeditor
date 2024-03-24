import { viewMode, currentFile } from "./store.js";
import { FileService } from "./File.service";
import { Parser } from "./Parser";
import PublicButton from "../views/PublicButton.svelte";

const supportedMimetype = "application/internet-shortcut";
const buttons = [];
export class LinkeditorService {
	/**
	 * Registers the file actions with files app
	 */
	static registerFileActions() {
		// Edit action on single file
		window.OCA.Files?.fileActions?.registerAction({
			name: "editLink",
			displayName: t("files_linkeditor", "Edit link"),
			mime: supportedMimetype,
			actionHandler: async (fileName, context) =>
				await LinkeditorService.loadAndChangeViewMode({ fileName, context, nextViewMode: "edit" }),
			permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
			iconClass: "icon-link",
		});

		// View action on single file
		window.OCA.Files?.fileActions?.registerAction({
			name: "viewLink",
			displayName: t("files_linkeditor", "View link"),
			mime: supportedMimetype,
			actionHandler: async (fileName, context) => {
				if (window.OC.currentUser) {
					// Logged in
					await LinkeditorService.loadAndChangeViewMode({ fileName, context, nextViewMode: "view" });
				} else {
					// Public share
					await LinkeditorService.loadAndChangeViewMode({
						fileName,
						context,
						nextViewMode: "view",
						downloadUrl: context.fileList.getDownloadUrl(fileName),
						publicUser: true,
					});
				}
			},
			permissions: window.OC.PERMISSION_READ,
			iconClass: "icon-link",
		});

		// Use Link viewing as default action.
		window.OCA.Files?.fileActions?.setDefault(supportedMimetype, "viewLink");

		window.OC.Plugins?.register?.("OCA.Files.NewFileMenu", {
			attach: function (menu) {
				const fileList = menu.fileList;

				// Only attach to main file list
				if (fileList.id !== "files") {
					return;
				}

				const menuEntryFactory = ({ id, displayName, templateName }) => {
					// Register the new menu entry
					menu.addMenuEntry({
						id,
						displayName,
						templateName,
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
			},
		});

		// Public shares where only the link file is shared
		const directDownload = document.querySelectorAll(".directDownload");
		if (directDownload && directDownload.length > 0) {
			// Get the filename
			const filename = (document.querySelector("input#filename") || { value: "" }).value;
			// Get extension
			var extension = Parser.getExtension(filename);
			// Public download page, single file
			if (extension === "url" || extension === "webloc") {
				// Get the download URL
				const downloadUrl = (document.querySelector("input#downloadURL") || { value: "" }).value;
				// Replace link and id on new button, add icon and label
				buttons.push(
					new PublicButton({
						anchor: document.querySelector(".directDownload"),
						target: document.querySelector(".directDownload").parentElement,
						props: {
							onClick: () => {
								// Show view modal when clicked
								LinkeditorService.loadAndChangeViewMode({
									fileName: filename,
									nextViewMode: "view",
									publicUser: true,
									downloadUrl,
								});
							},
						},
					}),
				);
			}
		}
	}

	static async loadAndChangeViewMode({ fileName, context, nextViewMode, publicUser, downloadUrl }) {
		// Find out where we are to use this link for the cancel button.
		const currentUrl = context ? encodeURI(context.fileList.linkTo() + "?path=" + context.dir) : window.location.href;
		// Get ready to show viewer
		viewMode.update(() => nextViewMode);
		// Preliminary file config update
		currentFile.update(() =>
			FileService.getFileConfig({
				name: fileName,
				currentUrl,
				dir: context ? context.dir : "",
			}),
		);
		// Load file from backend
		let file = {};
		if (publicUser) {
			file = await FileService.loadPublic({ downloadUrl });
		} else {
			file = await FileService.load({ fileName, dir: context.dir });
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
				FileService.getFileConfig({ ...fileConfig, ...parsedFile, fileModifiedTime: file.mtime, isLoaded: true }),
			);
		} else {
			window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
		}
	}

	static async saveAndChangeViewMode({ name, dir, url, fileModifiedTime, sameWindow, skipConfirmation }) {
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
		await FileService.save({ fileContent, name, dir, fileModifiedTime });
		// Hide editor
		viewMode.update(() => "none");
	}
}
