<script>
	import Overlay from "./Overlay.svelte";
	import { viewMode, currentFile } from "../store";
	import { onDestroy, onMount } from "svelte";
	import { FileService } from "../File.service";
	const t = window.t;
	const OC = window.OC;

	$: file = FileService.getFileConfig();
	$: loading = true;
	let unsubscribe;
	onMount(() => {
		// Subscribe to changes of the current file
		unsubscribe = currentFile.subscribe((fileUpdate) => {
			file = fileUpdate;
			if (file.url && file.url !== "about:blank") {
				loading = false;
			}
		});
	});

	onDestroy(() => {
		// Unsubscribe from store to avoid memory leaks
		unsubscribe();
  });

  // @TODO: Add saving
</script>

<Overlay {loading}>
	<form action={OC.generateUrl('/')} method="post" id="linkeditor_form">
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
						value={file.url}
						placeholder={t('files_linkeditor', 'e.g. https://example.org')} />
				</label>
			{/if}
		</div>
		<div class="oc-dialog-buttonrow onebutton urlvisit">
			{#if !loading}
				<a href={file.url} target="_blank" class="button">{t('files_linkeditor', 'Visit link')}</a>
			{/if}
		</div>
		<div class="oc-dialog-buttonrow twobutton">
			<button
				type="reset"
				on:click|preventDefault={() => {
					viewMode.update(() => 'none');
				}}
				class="cancel">
				{t('files_linkeditor', 'Cancel')}
			</button>
			{#if !loading}
				<button type="submit" id="linkeditor_save" class="primary">{t('files_linkeditor', 'Save')}</button>
			{/if}
		</div>
	</form>
</Overlay>
