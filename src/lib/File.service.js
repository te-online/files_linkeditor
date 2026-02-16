import { sanitizeUrl } from "@braintree/sanitize-url";
import { Permission } from "@nextcloud/files";
import { getClient, defaultRootPath, getDefaultPropfind, resultToNode } from '@nextcloud/files/dav';
import { emit } from "@nextcloud/event-bus";

export class FileService {
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
		templateName,
		isPublicLink,
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
			templateName,
			isPublicLink: isPublicLink || false,
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
		let path = `${dir}${name}`;
		if (dir !== "/") {
			path = `${dir}/${name}`;
		}
		// Use dav client to save file
		const client = getClient();
		const absolutePath = `${defaultRootPath}${path}`;
		try {
			const result = await client.putFileContents(absolutePath, fileContent, { overwrite: true });
			if (result) {
				const stat = await client.stat(absolutePath, { details: true, data: getDefaultPropfind() });
				emit("files:node:created", resultToNode(stat.data));

				return true;
			}
		} catch (error) {
			console.error(error);
		}
		window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
	}

	static userCanEdit(permission) {
		return (
			(window.FileList &&
				window.OC &&
				window.OC.currentUser &&
				(window.OC.PERMISSION_ALL === window.FileList?.getDirectoryPermissions?.() ||
					window.OC.PERMISSION_UPDATE === window.FileList?.getDirectoryPermissions?.())) ||
			permission >= Permission.WRITE
		);
	}
}
