import { sanitizeUrl } from "@braintree/sanitize-url";
import { Permission } from "@nextcloud/files";

export class FileServiceNext {
	static getFileConfig({
		name,
		url,
		downloadUrl,
		dir,
		onCreate,
		fileModifiedTime,
		isNew,
		isLoaded,
		sameWindow,
		skipConfirmation,
		permissions,
	} = {}) {
		return {
			name: name || "?",
			downloadUrl: downloadUrl || "",
			url: url ? sanitizeUrl(url) : "",
			dir: dir || "",
			onCreate: onCreate,
			fileModifiedTime: fileModifiedTime || null,
			isNew: isNew || false,
			isLoaded: isLoaded || false,
			sameWindow: sameWindow || false,
			skipConfirmation: skipConfirmation || false,
			permissions: permissions || Permission.NONE,
		};
	}

	static async load({ fileName, dir } = {}) {
		const result = await window.fetch(
			`${window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile")}?filename=${encodeURIComponent(
				fileName,
			)}&dir=${encodeURIComponent(dir)}`,
			{
				method: "GET",
				headers: {
					requesttoken: window.OC.requestToken,
				},
			},
		);
		if (result && result.ok) {
			return await result.json();
		}
		window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
	}

	static async loadPublic({ downloadUrl } = {}) {
		const result = await window.fetch(downloadUrl, {
			method: "GET",
			headers: {
				requesttoken: window.OC.requestToken,
			},
		});
		if (result && result.ok) {
			return { filecontents: await result.text() };
		}
		window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
	}

	static async save({ fileContent, name, fileModifiedTime, dir } = {}) {
		// Send the PUT request
		let path = `${dir}${name}`;
		if (dir !== "/") {
			path = `${dir}/${name}`;
		}
		const result = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
			method: "PUT",
			body: JSON.stringify({
				filecontents: fileContent,
				path,
				mtime: fileModifiedTime,
			}),
			headers: {
				requesttoken: window.OC.requestToken,
				"Content-Type": "application/json",
			},
		});
		if (result && result.ok) {
			return true;
		}
		window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
	}
}
