<script>
	export let loading = false;
</script>

<div class="linkeditor-oc-dialog-dim" />
<div class={`linkeditor-oc-dialog ${loading ? 'icon-loading' : ''}`} style="position: fixed;">
	<slot />
</div>
