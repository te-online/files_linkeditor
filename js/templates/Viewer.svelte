<script>
  export let filename = '.url'
  export let url = 'about:blank'
  export let currentUrl = ''
  import Overlay from './Overlay.svelte'
  const t = window.t

  // @TODO: Implement closing
</script>

<Overlay>
  <div class="urledit push-bottom">
    <h3>{filename}</h3>
    <p class="urldisplay">
      {t('files_linkeditor', 'You are about to visit:')}
      <em>{url}</em>
    </p>
  </div>
  <div class="oc-dialog-buttonrow twobutton">
    <a href={currentUrl} class="button" id="linkeditor_cancel">
      {t('files_linkeditor', 'Cancel')}
    </a>
    <a
      href={url}
      target="_blank"
      class="button primary"
      id="linkviewer_visitlink">
      {t('files_linkeditor', 'Visit link')}
    </a>
  </div>
</Overlay>
