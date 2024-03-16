import { sanitizeUrl } from "@braintree/sanitize-url";
import { Permission, davGetClient, davRootPath, davGetDefaultPropfind, davResultToNode } from "@nextcloud/files";
import { emit } from "@nextcloud/event-bus";

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
		existingContents,
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
			existingContents,
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

	static async save({ fileContent, name, dir } = {}) {
		// Send the PUT request
		let path = `${dir}${encodeURIComponent(name)}`;
		if (dir !== "/") {
			path = `${dir}/${encodeURIComponent(name)}`;
		}
		// Use dav client to save file
		const client = davGetClient();
		const absolutePath = `${davRootPath}${path}`;
		try {
			const result = await client.putFileContents(absolutePath, fileContent);
			if (result) {
				const stat = await client.stat(absolutePath, { details: true, data: davGetDefaultPropfind() });
				emit("files:node:created", davResultToNode(stat.data));

				return true;
			}
		} catch (error) {
			console.error(error);
		}
		window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
	}
}
