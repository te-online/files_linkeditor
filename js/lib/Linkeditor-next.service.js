import { viewMode, currentFile } from "./store.js";
import { FileServiceNext } from "./File-next.service";
import { Parser } from "./Parser";
import PublicButton from "../views/PublicButton.svelte";
import { Permission, registerFileAction } from "@nextcloud/files";

const supportedMimetype = "application/internet-shortcut";
const buttons = [];

export class LinkeditorServiceNext {
	/**
	 * Registers the file actions with files app
	 */
	static registerFileActions() {
		// Edit action on single file
		registerFileAction({
			id: "editLink",
			displayName: () => t("files_linkeditor", "Edit link"),
			iconSvgInline: () => '<span class="icon-link"></span>',
			exec: async (file) => {
				await LinkeditorServiceNext.loadAndChangeViewMode({
					fileName: file.basename,
					dirName: file.dirname,
					nextViewMode: "edit",
					permissions: file.permissions,
				});
			},
			enabled: (files) =>
				window.OC.currentUser &&
				files.every((file) => file.permissions >= Permission.UPDATE && supportedMimetype.includes(file.mime)),
		});

		// View action on single file
		registerFileAction({
			id: "viewLink",
			displayName: () => t("files_linkeditor", "View link"),
			iconSvgInline: () => '<span class="icon-link"></span>',
			exec: async (file) => {
				if (window.OC.currentUser) {
					// Logged in
					await LinkeditorServiceNext.loadAndChangeViewMode({
						fileName: file.basename,
						dirName: file.dirname,
						nextViewMode: "view",
						permissions: file.permissions,
					});
				} else {
					// Public share
					await LinkeditorServiceNext.loadAndChangeViewMode({
						fileName: file.basename,
						dirName: file.dirname,
						nextViewMode: "view",
						// TODO:
						downloadUrl: file.source,
						publicUser: true,
						permissions: file.permissions,
					});
				}
			},
			enabled: (files) =>
				files.every((file) => file.permissions >= Permission.READ && supportedMimetype.includes(file.mime)),
		});
	}

	static async loadAndChangeViewMode({ fileName, dirName, nextViewMode, publicUser, downloadUrl, permissions }) {
		// Get ready to show viewer
		viewMode.update(() => nextViewMode);
		// Preliminary file config update
		currentFile.update(() =>
			FileServiceNext.getFileConfig({
				name: fileName,
				dir: dirName ? dirName : "",
				permissions,
			}),
		);
		// Load file from backend
		let file = {};
		if (publicUser) {
			file = await FileServiceNext.loadPublic({ downloadUrl });
		} else {
			file = await FileServiceNext.load({ fileName, dir: dirName });
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
				FileServiceNext.getFileConfig({
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
		await FileServiceNext.save({ fileContent, name, dir, fileModifiedTime });
		// Hide editor
		viewMode.update(() => "none");
	}
}
