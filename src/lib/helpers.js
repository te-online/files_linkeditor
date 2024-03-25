export const checkAndFixExtension = (file) => {
	if (!file?.name || !file?.templateName) {
		return file;
	}

	const [, extension] = file.templateName.split(".") ?? [];
	const lowerCaseFileName = file.name.toLocaleLowerCase();
	if (extension && !lowerCaseFileName.endsWith(extension.toLocaleLowerCase())) {
		file.name += `.${extension}`;
	}

	return file;
};
