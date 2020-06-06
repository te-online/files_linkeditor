<script>
	import Overlay from "./Overlay.svelte";
	import { viewMode, currentFile } from "../lib/store";
	import { onDestroy, onMount } from "svelte";
	import { FileService } from "../lib/File.service";
	import { LinkeditorService } from "../lib/Linkeditor.service";
	import { sanitizeUrl } from "../lib/sanitizeUrl";
	const t = window.t;
	const OC = window.OC;

	$: file = FileService.getFileConfig();
	$: loading = true;
	let unsubscribe;
	onMount(() => {
		// Subscribe to changes of the current file
		unsubscribe = currentFile.subscribe((fileUpdate) => {
			file = fileUpdate;
			if (file && (file.isLoaded || file.isNew)) {
				loading = false;
			}
		});
	});

	onDestroy(() => {
		// Unsubscribe from store to avoid memory leaks
		unsubscribe();
	});

	const save = () => {
		loading = true;
		if (file.isNew && file.onCreate) {
			file.onCreate({ ...file });
		} else {
			LinkeditorService.saveAndChangeViewMode({ ...file });
		}
	};
</script>

<Overlay {loading}>
	<form action={OC.generateUrl('/')} on:submit|preventDefault={save} method="post">
		<div class="urledit">
			<h3>{file.name}</h3>
			{#if !loading}
				<label>
					{t('files_linkeditor', 'Link target URL')}
					<br />
					<input
						type="text"
						style="width: 100%;"
						class="input-wide"
						bind:value={file.url}
						autofocus
						placeholder={t('files_linkeditor', 'e.g. https://example.org')} />
				</label>
				<input type="checkbox" bind:checked={file.sameWindow} id="linkeditor_sameWindow" class="checkbox" />
				<label for="linkeditor_sameWindow" class="space-top">{t('files_linkeditor', 'Open in same window')}</label>
				<input
					type="checkbox"
					disabled={!file.sameWindow}
					bind:checked={file.skipConfirmation}
					id="linkeditor_skipConfirmation"
					class="checkbox" />
				<label for="linkeditor_skipConfirmation">
					{t('files_linkeditor', 'Skip confirmation dialog before open (has to open in same window)')}
				</label>
			{/if}
		</div>
		<div class="oc-dialog-buttonrow onebutton urlvisit">
			{#if !loading}
				<a href={sanitizeUrl(file.url)} target="_blank" class="button">{t('files_linkeditor', 'Visit link')}</a>
			{/if}
		</div>
		<div class="oc-dialog-buttonrow twobuttons">
			<button
				type="reset"
				on:click|preventDefault={() => {
					viewMode.update(() => 'none');
				}}
				class="cancel">
				{t('files_linkeditor', 'Cancel')}
			</button>
			{#if !loading}
				<button type="submit" on:click|preventDefault={save} class="primary">{t('files_linkeditor', 'Save')}</button>
			{/if}
		</div>
	</form>
</Overlay>
