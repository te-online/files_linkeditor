<script>
  export let file = { name: '?' }
  import Overlay from './Overlay.svelte'
  const t = window.t
  const OC = window.OC
</script>

<Overlay>
  <form action={OC.generateUrl('/')} method="post" id="linkeditor_form">
    <div class="urledit">
      <h3>{file.name}</h3>
      <label>
        {t('files_linkeditor', 'Link target URL')}
        <br />
        <input
          type="text"
          style="width: 100%;"
          class="input-wide"
          name="linkeditor_url"
          id="linkeditor_url"
          placeholder={t('files_linkeditor', 'e.g. https://example.org')} />
      </label>
    </div>
    <div class="oc-dialog-buttonrow onebutton urlvisit">
      <a
        href="https://example.org"
        target="_blank"
        class="button"
        id="linkeditor_visitlink">
        {t('files_linkeditor', 'Visit link')}
      </a>
    </div>
    <div class="oc-dialog-buttonrow twobutton">
      <button type="reset" id="linkeditor_cancel" class="cancel">
        {t('files_linkeditor', 'Cancel')}
      </button>
      <button type="submit" id="linkeditor_save" class="primary">
        {t('files_linkeditor', 'Save')}
      </button>
    </div>
  </form>
</Overlay>
