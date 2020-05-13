<script>
	import Overlay from "./Overlay.svelte";
	import { viewMode, currentFile } from "../store";
	import { onDestroy, onMount } from "svelte";
	import { FileService } from "../File.service";
	const t = window.t;

	$: file = FileService.getFileConfig();
	$: loading = true;
	let unsubscribe;
	onMount(() => {
		// Subscribe to changes of the current file
		unsubscribe = currentFile.subscribe(async (fileUpdate) => {
			file = fileUpdate;
			if (file.isLoaded) {
				loading = false;
				// Show error when url is permanently empty (or maybe show editor?)
				if (!file.url) {
					OC.dialogs.alert(
						t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
						t("files_linkeditor", "A slight problem")
					);
				}
			}
		});
	});

	onDestroy(() => {
		// Unsubscribe from store to avoid memory leaks
		unsubscribe();
	});
</script>

<Overlay {loading}>
	<div class="urledit push-bottom">
		<h3>{file.name}</h3>
		{#if !loading}
			<p class="urldisplay">
				{t('files_linkeditor', 'You are about to visit:')}
				<em>
					<a href={file.url} target="_blank">{file.url}</a>
				</em>
			</p>
		{/if}
	</div>
	<div class="oc-dialog-buttonrow twobuttons">
		<a
			href={file.currentUrl}
			class="button"
			on:click|preventDefault={() => {
				viewMode.update(() => 'none');
			}}>
			{t('files_linkeditor', 'Cancel')}
		</a>
		{#if !loading}
			{#if FileService.userCanEdit()}
				<a
					href={file.currentUrl}
					class="button"
					on:click|preventDefault={() => {
						viewMode.update(() => 'edit');
					}}>
					{t('files_linkeditor', 'Edit link')}
				</a>
			{/if}
			<a href={file.url} target="_blank" class="button primary">{t('files_linkeditor', 'Visit link')}</a>
		{/if}
	</div>
</Overlay>
