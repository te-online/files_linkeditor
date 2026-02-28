<script>
	import Viewer32 from "./Viewer32.svelte";
	import Editor32 from "./Editor32.svelte";
	import FileNameEditor32 from "./FileNameEditor32.svelte";
	import { onDestroy, onMount } from "svelte";
	import { viewMode as viewModeStore } from "../../lib/store";

	$: viewMode = "";
	let unsubscribe;
	onMount(() => {
		// Subscribe to changes of the viewmode
		unsubscribe = viewModeStore.subscribe((mode) => {
			viewMode = mode;
		});
	});

	onDestroy(() => {
		// Unsubscribe from store to avoid memory leaks
		unsubscribe();
	});
</script>

{#if viewMode === 'filename'}
	<FileNameEditor32 />
{/if}
{#if viewMode === 'view'}
	<Viewer32 />
{/if}
{#if viewMode === 'edit'}
	<Editor32 />
{/if}
