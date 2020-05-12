import { sanitizeUrl } from "./sanitizeUrl";

export class FileService {
	static getFileConfig({ name, url, downloadUrl, currentUrl, dir } = {}) {
		return {
			name: name || "?",
			downloadUrl: downloadUrl || "",
			url: sanitizeUrl(url || ""),
			dir: dir || "",
			currentUrl: currentUrl || "",
		};
	}

	static async load({ filename, dir } = {}) {
		const result = await window.fetch(
			`${window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile")}?filename=${encodeURIComponent(
				filename
			)}&dir=${encodeURIComponent(dir)}`,
			{
				method: "GET",
				headers: {
					requesttoken: window.OC.requestToken,
				},
			}
		);
		if (result && result.ok) {
			return await result.json();
		}
	}

	static async save(data, file) {
		// Send the PUT request
		let path = `${file.dir}${file.name}`;
		if (file.dir !== "/") {
			path = `${file.dir}/${file.name}`;
		}
		const result = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
			method: "PUT",
			body: JSON.stringify({
				filecontents: data,
				path,
				mtime: file.mtime,
			}),
			headers: {
				requesttoken: window.OC.requestToken,
			},
		});
		if (result && result.ok) {
			console.log({ result });
		}
	}
}
