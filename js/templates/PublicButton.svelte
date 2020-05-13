<script>
	export let onClick;
	const t = window.t;
</script>

<div class="directDownload">
	<a href="#/" on:click|preventDefault={onClick} class="button" id="downloadFile">
		<span class="icon icon-link" />
		{t('files_linkeditor', 'View link')}
	</a>
</div>
