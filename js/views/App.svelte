<script>
	import Viewer from "./Viewer.svelte";
	import Editor from "./Editor.svelte";
	import { onDestroy, onMount } from "svelte";
	import { viewMode as viewModeStore } from "../lib/store";

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

{#if viewMode === 'view'}
	<Viewer />
{/if}
{#if viewMode === 'edit'}
	<Editor />
{/if}
