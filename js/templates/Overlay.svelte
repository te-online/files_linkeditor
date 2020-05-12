<script>
	export let loading = false;
</script>

<div id="linkeditor_overlay" class="oc-dialog-dim" />
<div id="linkeditor_container" class={`oc-dialog ${loading ? 'icon-loading' : ''}`} style="position: fixed;">
	<slot />
</div>
