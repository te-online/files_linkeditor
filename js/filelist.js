/**
 * nextcloud - External Links in Filelist
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @originalAuthor Tom Needham <tom@owncloud.com>
 * @author Thomas Ebert <thomas.ebert@usability.de>
 * @copyright Thomas Ebert 2017
 */

var Files_External_Links = {

	/**
	 * Holds the editor container
	 */
	$container: null,

	/**
	 * Holds the editor element ID
	 */
	editor: 'editor',

	/**
	 * Stores info on the file being edited
	 */
	file: {
		edited: false,
		mtime: null,
		dir: null,
		name: null,
		writeable: null,
		mime: null,
		size: null
	},

	/**
	 * Stored the saving state
	 */
	saving: false,

	/**
	 * Current files app context
	 */
	currentContext: null,

	/**
	 * Stores the autosave timer
	 */
	saveTimer: null,

	/**
	 * Stores the old page title
	 */
	oldTitle: null,

	/**
	 * Stores the timeout for the saving message
	 */
	saveMessageTimeout: null,

	/**
	 * preview element
	 */
	preview: null,

	previewPluginOnChange: null,

	/**
	 * Save handler, triggered by the button, or keyboard
	 */
	_onSaveTrigger: function() {
		// Don't save if not edited
		if(!OCA.Files_External_Links.file.edited) {
			return;
		}
		// Don't try to save twice
		if(OCA.Files_External_Links.saving) {
			return;
		} else {
			OCA.Files_External_Links.saving = true;
			OCA.Files_External_Links.file.edited = false;
		}

		// Show saving spinner.
		$('#linkeditor_container').addClass('icon-loading');

		// Send to server
		OCA.Files_External_Links.saveFile(
			OCA.Files_External_Links.generateURLFileContent(
				OCA.Files_External_Links.file.content,
				$('#linkeditor_url').val()
			),
			OCA.Files_External_Links.file,
			function(data){
				// Yay
				if(OCA.Files_External_Links.file.edited == false) {
					document.title = OCA.Files_External_Links.file.name + ' - ' + OCA.Files_External_Links.oldTitle;
				}
				OCA.Files_External_Links.file.mtime = data.mtime;
				OCA.Files_External_Links.file.size = data.size;

				OCA.Files_External_Links.closeEditor();
			},
			function(message){
				// Boo
				if (typeof message == 'undefined') {
					$('small.saving-message').text(t('files_external_links', 'failed!'));
				} else {
					$('small.saving-message').text(message);
				}
				OCA.Files_External_Links.saveMessageTimeout = setTimeout(function() {
					$('small.saving-message').fadeOut(200);
				}, 5000);
				OCA.Files_External_Links.file.edited = true;
			}
		);
		OCA.Files_External_Links.saving = false;
	},

	/**
	 * Handles on close button click
	 */
	_onCloseTrigger: function() {
		// Hide or close?
		if(!OCA.Files_External_Links.file.edited) {
			OCA.Files_External_Links.closeEditor();
		} else {
			// Trick the autosave attempt into thinking we have no changes
			OCA.Files_External_Links.file.edited = false;
			// Hide the editor
			OCA.Files_External_Links.hideEditor();
		}
	},

	/**
	 * Handles the trigger or re open editor
	 */
	_onReOpenTrigger: function() {
		if($('#notification').data('reopeneditor') == true) {
			document.title = OCA.Files_External_Links.file.name + ' - ' + OCA.Files_External_Links.oldTitle;
			OCA.Files_External_Links.$container.show();
		}
	},

	/**
	 * Handles the FileAction click event
	 */
	_onEditorTrigger: function(filename, context) {
		this.currentContext = context;
		this.file.name = filename;
		this.file.dir = context.dir;
		this.fileInfoModel = context.fileList.getModelForFile(filename);
		this.loadEditor(
			OCA.Files_External_Links.$container,
			OCA.Files_External_Links.file
		);
		if(!$('html').hasClass('ie8')) {
			history.pushState({file:filename, dir:context.dir}, 'Editor', '#linkeditor');
		}
	},

	/**
	 * Handler for edits detected
	 */
	_onEdit: function () {
		if(!OCA.Files_External_Links.file.edited) {
			OCA.Files_External_Links.file.edited = true;
		}
		$('#linkeditor_visitlink').attr('href', encodeURI($('#linkeditor_url').val()));
	},

	/**
	 * Setup on page load
	 */
	initialize: function(container) {
		// Don't load if not in the files app.
		if(!OCA.Files) {
			return;
		}
		// Don't load if not in the files app TODO: Fix for sharing
		// if(!$('#content.app-files').length) { return; }
		this.$container = container;
		this.registerFileActions();
		this.oldTitle = document.title;
	},

	getSupportedMimetypes: function() {
		return [
			'application/internet-shortcut'
		];
	},

	/**
	 * Registers the file actions
	 */
	registerFileActions: function() {
		var mimes = this.getSupportedMimetypes(),
		_self = this;

		$.each(mimes, function(key, value) {
			OCA.Files.fileActions.registerAction({
				name: 'editLink',
				displayName: t('files_external_links', 'Edit link'),
				mime: value,
				actionHandler: _.bind(_self._onEditorTrigger, _self),
				permissions: OC.PERMISSION_UPDATE,
				icon: function () {
					return OC.imagePath('core', 'places/link');
				}
			});

			// @TODO: Use the same markup for both views.
			OCA.Files.fileActions.registerAction({
				name: 'viewLink',
				displayName: t('files_external_links', 'View link'),
				mime: value,
				actionHandler: function(filename, context) {
					window.context = context;
					// Build the download url.
					var downloadUrl = context.fileList.getDownloadUrl(filename);
					// Find out where we are to use this link for the cancel button.
					var currentUrl = encodeURI(context.fileList.linkTo() + '?path=' + context.dir);
					// Find the element we are clicking on.
					var linkElement = $('[href="'+ downloadUrl +'"]');
					// Add a loading spinner.
					linkElement.addClass('icon-loading');

					$.ajax(
						downloadUrl,
						{}
					).done(function(data) {
						// Parse the filecontent to get to the URL.
						var url = OCA.Files_External_Links.parseURLFile(data);
						// Remove the loading spinner.
						linkElement.removeClass('icon-loading');
						// Show error, if we don't have a url.
						if(!url) {
							OC.dialogs.alert(
								t('files_external_links', 'This link doesn\'t seem to be valid.'),
								t('files_external_links', 'A slight problem')
							);
							return;
						}
						// Open a pop-up to show the target of the URL and a button to visit it.
						$('body')
							.append(
							'<div id="linkeditor_overlay" class="oc-dialog-dim"></div>'
							+'<div id="linkeditor_container" class="oc-dialog" style="position: fixed;">'
								+'<div id="linkeditor">'
							+'</div>'
						);
						$('#linkeditor').append(
							'<form action="" method="post" id="linkeditor_form">'
								+'<div class="urledit">'
									+'<h3>Visit ' + url + '</h3>'
								+'</div>'
								+'<div class="oc-dialog-buttonrow twobutton">'
									+'<a href="' + currentUrl + '" class="button" id="linkeditor_cancel">Cancel</a>'
									+'<a href="' + url + '" target="_blank" class="button primary" id="linkeditor_visitlink">Visit link</a>'
								+'</div>'
							+'</form>'
						);

						// Add event listener for cancel click.
						$(document).on('click', '#linkeditor_cancel', function(e) {
							e.preventDefault();
							$('#linkeditor_container').remove();
							$('#linkeditor_overlay').remove();
						});

						// Add event listener to close pop-up once user visits link.
						$(document).on('click', '#linkeditor_visitlink', function() {
							$('#linkeditor_container').remove();
							$('#linkeditor_overlay').remove();
						});
					}).fail(function(jqXHR) {
						OC.dialogs.alert(
							JSON.parse(jqXHR.responseText).message,
							t('files_external_links', 'An error occurred!')
						);
					});
				},
				permissions: OC.PERMISSION_READ,
				icon: function () {
					return OC.imagePath('core', 'places/link');
				},
				iconClass: 'icon-link'
			});

			// Use Link viewing as default action.
			OCA.Files.fileActions.setDefault(value, 'viewLink');
		});
	},

	/**
	 * Actually fire up the editor in a container
	 */
	loadEditor: function(container, file) {
		var _self = this;
		// Insert the editor into the container
		container.html(
			'<div id="linkeditor_overlay" class="oc-dialog-dim"></div>'
			+'<div id="linkeditor_container" class="icon-loading oc-dialog" style="position: fixed;">'
				+'<div id="linkeditor">'
			+'</div>'
		);
		$('#app-content').append(container);
		$('#linkeditor').append(
			'<form action="" method="post" id="linkeditor_form">'
				+'<div class="urledit">'
					+'<h3>Edit: ' + file.name + '</h3>'
					+'<label>Link target URL<br />'
						+'<input type="text" style="width: 250px;" class="input-wide" name="linkeditor_url" id="linkeditor_url" placeholder="e.g. https://example.org" />'
					+'</label>'
				+'</div>'
				+'<div class="oc-dialog-buttonrow onebutton urlvisit">'
					+'<a href="https://example.org" target="_blank" class="button" id="linkeditor_visitlink">Visit link</a>'
				+'</div>'
				+'<div class="oc-dialog-buttonrow twobutton">'
					+'<button id="linkeditor_cancel" class="cancel">Cancel</button>'
					+'<button type="submit" id="linkeditor_save" class="primary">Save</button>'
				+'</div>'
			+'</form>'
		);

		// Get the file data
		this.loadFile(
			file.dir,
			file.name,
			function(file, data){
				// Success!

				// Sort the title
				document.title = file.name + ' - ' + OCA.Files_External_Links.oldTitle;

				// Remove loading spinner.
				$('#linkeditor_container').removeClass('icon-loading');

				// Parse URL file
				var url = _self.parseURLFile(data);

				// Fill input.
				$('#linkeditor_url').val(url);

				// Bind actions and focus input.
				_self.bindVisibleActions();
				$('#linkeditor_url').focus();

				// Set url for link.
				$('#linkeditor_visitlink').attr('href', url);
			},
			function(message){
				// Oh dear
				OC.dialogs.alert(message, t('files_external_links', 'An error occurred!'));
				_self.closeEditor();
			});
	},

	/**
	 * Loads the data through AJAX
	 */
	loadFile: function(dir, filename, success, failure) {
		$.get(
			OC.generateUrl('/apps/files_external_links/ajax/loadfile'),
			{
				filename: filename,
				dir: dir
			}
		).done(function(data) {
			// Call success callback
			OCA.Files_External_Links.file.writeable = data.writeable;
			OCA.Files_External_Links.file.mime = data.mime;
			OCA.Files_External_Links.file.mtime = data.mtime;
			OCA.Files_External_Links.file.content = data.filecontents;
			success(OCA.Files_External_Links.file, data.filecontents);
		}).fail(function(jqXHR) {
			failure(JSON.parse(jqXHR.responseText).message);
		});
	},

	/**
	 * Send the new file data back to the server
	 */
	saveFile: function(data, file, success, failure) {
		// Send the post request
		var path = file.dir + file.name;
		if (file.dir !== '/') {
			path = file.dir + '/' + file.name;
		}
		$.ajax({
			type: 'PUT',
			url: OC.generateUrl('/apps/files_external_links/ajax/savefile'),
			data: {
				filecontents: data,
				path: path,
				mtime: file.mtime
			}
		})
		.done(success)
		.fail(function(jqXHR) {
			var message;

			try {
				message = JSON.parse(jqXHR.responseText).message;
			} catch(e){
				// Do catch here.
			}

			failure(message);
		});
	},

	/**
	 * Close the editor for good
	 */
	closeEditor: function() {
		this.$container.html('').show();
		this.unBindVisibleActions();
		if (this.fileInfoModel) {
			this.fileInfoModel.set({
				// temp dummy, until we can do a PROPFIND
				etag: this.fileInfoModel.get('id') + this.file.mtime,
				mtime: this.file.mtime * 1000,
				size: this.file.size
			});
		}
		document.title = this.oldTitle;
	},

	/**
	 * Hide the editor (unsaved changes)
	 */
	hideEditor: function() {
		this.$container.hide();
		document.title = this.oldTitle;
		this.unBindVisibleActions();
	},

	/**
	 * Handles event when clicking outside editor
	 */
	_onClickDocument: function(event) {
		// Check if click was inside the editor or not.
		if(!$(event.target).closest('#linkeditor_container').length) {
		   // Edit the editor
		   OCA.Files_External_Links._onCloseTrigger();
	   }
	},

	/*
	 * Binds actions that need to happen whilst the editor is visible
	 */
	bindVisibleActions: function() {
		$(document).bind('mouseup', this._onClickDocument);
		$(document).bind('change', '#linkeditor_url', this._onEdit);

		// Close editor without saving on cancel.
		$(document).on('click', '#linkeditor_cancel', this.closeEditor.bind(this));

		// Prevent the form of being submit regularly, once we have javascript loaded.
		$(document).on('submit', '#linkeditor_form', function(e) {
			e.preventDefault();
			this._onSaveTrigger();
		}.bind(this))
	},

	/**
	 * Unbinds actions that happen whilst the editor is visible
	 */
	unBindVisibleActions: function() {
		$(document).unbind('mouseup', this._onClickDocument);
		$(document).unbind('change', '#linkeditor_url', this._onEdit);
	},

	/**
	 * Generates a URL file.
	 */
	generateURLFileContent: function(oldcontent, url) {
		// Find if this is already a shortcut file.
		if(oldcontent &&
				oldcontent.indexOf('[InternetShortcut]') !== -1 &&
				oldcontent.indexOf('URL=') !== -1) {
			// Seems like it, replace the url.
			return oldcontent.replace(new RegExp('URL=.*', 'gm'), 'URL=' + encodeURI(url));
		} else {
			// Okay, let's create a new file.
			return '[InternetShortcut]\nURL=' + encodeURI(url);
		}
	},

	/**
	 * Parse a URL file.
	 */
	parseURLFile: function(filecontent) {
		if(filecontent) {
			// Match for URL line.
			var urllines = filecontent.match('URL=.*');
			// See if matches were found.
			if(urllines && Array.isArray(urllines) && urllines.length > 0) {
				// Let's use the first match.
				var url = urllines[0];
				// Return the part after the equal sign, which is suprisingly: the URL.
				return encodeURI((url.split('='))[1]);
			}
		}
		return '';
	}
};

Files_External_Links.NewFileMenuPlugin = {

	attach: function(menu) {
		var fileList = menu.fileList;

		// only attach to main file list, public view is not supported yet
		console.log(fileList.id);
		if (fileList.id !== 'files') {
			return;
		}

		// register the new menu entry
		menu.addMenuEntry({
			id: 'file',
			displayName: t('files_external_links', 'New link'),
			templateName: t('files_external_links', 'Link.URL'),
			iconClass: 'icon-link',
			fileType: 'file',
			actionHandler: function(name) {
				var dir = fileList.getCurrentDirectory();
				// first create the file
				fileList.createFile(name).then(function() {
					// once the file got successfully created,
					// open the editor
					Files_External_Links._onEditorTrigger(
						name,
						{
							fileList: fileList,
							dir: dir
						}
					);
				});
			}
		});
	}
};

OCA.Files_External_Links = Files_External_Links;

OC.Plugins.register('OCA.Files.NewFileMenu', Files_External_Links.NewFileMenuPlugin);

$(document).ready(function () {
	$('#linkeditor').remove();
	OCA.Files_External_Links.initialize($('<div id="app-content-linkeditor"></div>'));
});
