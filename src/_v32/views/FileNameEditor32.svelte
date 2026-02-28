<script>
	import Overlay from "../../views/Overlay.svelte";
	import { viewMode, currentFile } from "../../lib/store";
	import { onDestroy, onMount } from "svelte";
	import { FileService32 } from "../lib/File.service.32.js";
	import { checkAndFixExtension } from "../../lib/helpers";
	const t = window.t;
	const OC = window.OC;

	// I would have loved to use `hasConflict` from `@nextcloud/upload`,
	// but the entire module seems to depend on Vue. So this is a cheap copy
	const hasConflict = (fileName, contents) => {
		const tempFile = { name: fileName, templateName: file.templateName };
		const fixedFile = checkAndFixExtension(tempFile);
		const fileNames = contents?.map((oneFile) => oneFile.basename) ?? [];
		return fileNames.includes(fixedFile.name);
	};

	$: file = FileService32.getFileConfig();
	$: loading = true;
	$: isConflicting = true;
	let unsubscribe;
	onMount(() => {
		// Subscribe to changes of the current file
		unsubscribe = currentFile.subscribe((fileUpdate) => {
			file = fileUpdate;
			if (file && (file.isLoaded || file.isNew)) {
				loading = false;
				checkConflicts();
			}
		});
	});

	onDestroy(() => {
		// Unsubscribe from store to avoid memory leaks
		unsubscribe();
	});

	const checkConflicts = () => {
		if (hasConflict(file.name, file.existingContents)) {
			isConflicting = true;
		} else {
			isConflicting = false;
		}
	};

	const save = () => {
		if (!hasConflict(file.name, file.existingContents)) {
			loading = true;
			file.onCreate(checkAndFixExtension({ ...file }));
		}
	};
</script>

<Overlay {loading}>
	<form action={OC.generateUrl("/")} on:submit|preventDefault={save} method="post">
		<div class="edit">
			<h3>{window.t("files_linkeditor", "New link")}</h3>
			{#if !loading}
				<label>
					{t("files_linkeditor", "File name")}
					<br />
					<input
						type="text"
						style="width: 100%;"
						class="input-wide"
						bind:value={file.name}
						on:keyup={checkConflicts}
						autofocus
						data-cy="name-input"
					/>
				</label>
			{/if}
		</div>
		<div class="oc-dialog-buttonrow twobuttons">
			<a
				href={window.location.href}
				on:click|preventDefault={() => {
					viewMode.update(() => "none");
				}}
				class="cancel button"
			>
				{t("files_linkeditor", "Cancel")}
			</a>
			{#if !loading}
				<button type="submit" on:click|preventDefault={save} disabled={isConflicting} class="primary button">
					{t("files_linkeditor", "Create")}
				</button>
			{/if}
		</div>
	</form>
</Overlay>
