import { viewMode, currentFile } from "./store.js";
import { FileService } from "./File.service";
import { Parser } from "./Parser";
import PublicButton from "../views/PublicButton.svelte";
import { registerFileAction } from "@nextcloud/files";

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
			// TODO:
			iconSvgInline: () => "link",
			exec: async (file, view, dir) => {
				alert("Not implemented");
				// await LinkeditorService.loadAndChangeViewMode({ fileName, context, nextViewMode: "edit" }),
			},
			permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
			enabled: (files, view) =>
				files.every((file) => supportedMimetype.includes(file.mime)) &&
				window.OC.currentUser &&
				window.OC.PERMISSION_UPDATE,
		});
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
