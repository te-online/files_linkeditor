/**
 * nextcloud - External Links in Filelist
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @originalAuthor Tom Needham <tom@owncloud.com>
 * @author Thomas Ebert <thomas@thomasebert.net>
 * @copyright Thomas Ebert 2018
 */

var Files_Linkeditor = {

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
		if(!OCA.Files_Linkeditor.file.edited) {
			return;
		}
		// Don't try to save twice
		if(OCA.Files_Linkeditor.saving) {
			return;
		} else {
			OCA.Files_Linkeditor.saving = true;
			OCA.Files_Linkeditor.file.edited = false;
		}

		// Show saving spinner.
		$('#linkeditor_container').addClass('icon-loading');

		// Generate the correct file with the new URL.
		var filecontent = OCA.Files_Linkeditor.file.content;
		// Get extension.
		var extension = OCA.Files_Linkeditor.getExtension(OCA.Files_Linkeditor.file.name);
		if(extension === 'webloc') {
			filecontent = OCA.Files_Linkeditor.generateWeblocFileContent(
				OCA.Files_Linkeditor.file.content,
				$('#linkeditor_url').val()
			)
		} else {
			filecontent = OCA.Files_Linkeditor.generateURLFileContent(
				OCA.Files_Linkeditor.file.content,
				$('#linkeditor_url').val()
			)
		}

		// Send to server
		OCA.Files_Linkeditor.saveFile(
			filecontent,
			OCA.Files_Linkeditor.file,
			function(data){
				// Yay
				if(OCA.Files_Linkeditor.file.edited == false) {
					document.title = OCA.Files_Linkeditor.file.name + ' - ' + OCA.Files_Linkeditor.oldTitle;
				}
				OCA.Files_Linkeditor.file.mtime = data.mtime;
				OCA.Files_Linkeditor.file.size = data.size;

				OCA.Files_Linkeditor.closeEditor();
			},
			function(message){
				// Boo
				if (typeof message == 'undefined') {
					$('small.saving-message').text(t('files_linkeditor', 'Saving failed!'));
				} else {
					$('small.saving-message').text(message);
				}
				OCA.Files_Linkeditor.saveMessageTimeout = setTimeout(function() {
					$('small.saving-message').fadeOut(200);
				}, 5000);
				OCA.Files_Linkeditor.file.edited = true;
			}
		);
		OCA.Files_Linkeditor.saving = false;
	},

	/**
	 * Handles on form submit.
	 */
	_onFormSubmitTrigger: function(e) {
		// Prevent default event.
		e.preventDefault();
		// Save.
		this._onSaveTrigger();
		// Close.
		this._onCloseTrigger();
	},

	/**
	 * Handles on close button click
	 */
	_onCloseTrigger: function() {
		// Close and set file to not edited.
		OCA.Files_Linkeditor.closeEditor();
		OCA.Files_Linkeditor.file.edited = false;
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
			OCA.Files_Linkeditor.$container,
			OCA.Files_Linkeditor.file
		);
		if(!$('html').hasClass('ie8')) {
			history.pushState({file:filename, dir:context.dir}, 'Editor', '#linkeditor');
		}
	},

	/**
	 * Handler for edits detected
	 */
	_onEdit: function () {
		if(!OCA.Files_Linkeditor.file.edited) {
			OCA.Files_Linkeditor.file.edited = true;
		}
		$('#linkeditor_visitlink').attr('href', sanitizeUrl($('#linkeditor_url').val()));
	},

	/**
	 * Setup on page load
	 */
	initialize: function(container) {
		// Don't load if not in the files app.
		if(!OCA.Files) {
			return;
		}
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
				displayName: t('files_linkeditor', 'Edit link'),
				mime: value,
				actionHandler: _.bind(_self._onEditorTrigger, _self),
				permissions: OC.PERMISSION_UPDATE,
				iconClass: 'icon-link'
			});

			// @TODO: Use the same markup for both views.
			OCA.Files.fileActions.registerAction({
				name: 'viewLink',
				displayName: t('files_linkeditor', 'View link'),
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
						// Read extension and run fitting parser.
						var extension = OCA.Files_Linkeditor.getExtension(filename);
						// Parse the filecontent to get to the URL.
						var url = '';
						if(extension === 'webloc') {
							url = OCA.Files_Linkeditor.parseWeblocFile(data);
						} else {
							url = OCA.Files_Linkeditor.parseURLFile(data);
						}

						// Remove the loading spinner.
						linkElement.removeClass('icon-loading');
						// Show error, if we don't have a url.
						if(!url) {
							OC.dialogs.alert(
								t('files_linkeditor', 'This link-file doesn\'t seem to be valid.'),
								t('files_linkeditor', 'A slight problem')
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
							'<div class="urledit push-bottom">'
								+'<h3>' + filename + '</h3>'
								+'<p class="urldisplay">'
									+t('files_linkeditor', 'You are about to visit:')
									+' <em>' + url + '</em>'
								+'</p>'
							+'</div>'
							+'<div class="oc-dialog-buttonrow twobutton">'
								+'<a href="' + currentUrl + '" class="button" id="linkeditor_cancel">' + t('files_linkeditor', 'Cancel') + '</a>'
								+'<a href="' + url + '" target="_blank" class="button primary" id="linkeditor_visitlink">' + t('files_linkeditor', 'Visit link') + '</a>'
							+'</div>'
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
							t('files_linkeditor', 'An error occurred!')
						);
					});
				},
				permissions: OC.PERMISSION_READ,
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
			'<form action="' + OC.generateUrl('/') + '" method="post" id="linkeditor_form">'
				+'<div class="urledit">'
					+'<h3>' + file.name + '</h3>'
					+'<label>' + t('files_linkeditor', 'Link target URL') + '<br />'
						+'<input type="text" style="width: 100%;" class="input-wide" name="linkeditor_url" id="linkeditor_url" placeholder="' + t('files_linkeditor', 'e.g. https://example.org') + '" />'
					+'</label>'
				+'</div>'
				+'<div class="oc-dialog-buttonrow onebutton urlvisit">'
					+'<a href="https://example.org" target="_blank" class="button" id="linkeditor_visitlink">' + t('files_linkeditor', 'Visit link') + '</a>'
				+'</div>'
				+'<div class="oc-dialog-buttonrow twobutton">'
					+'<button type="reset" id="linkeditor_cancel" class="cancel">' + t('files_linkeditor', 'Cancel') + '</button>'
					+'<button type="submit" id="linkeditor_save" class="primary">' + t('files_linkeditor', 'Save') + '</button>'
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
				document.title = file.name + ' - ' + OCA.Files_Linkeditor.oldTitle;

				// Remove loading spinner.
				$('#linkeditor_container').removeClass('icon-loading');

				// Read extension and run fitting parser.
				var extension = _self.getExtension(file.name);
				// Parse the filecontent to get to the URL.
				var url = '';
				if(extension === 'webloc') {
					url = _self.parseWeblocFile(data);
				} else {
					url = _self.parseURLFile(data);
				}

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
				OC.dialogs.alert(message, t('files_linkeditor', 'An error occurred!'));
				_self.closeEditor();
			});
	},

	/**
	 * Loads the data through AJAX
	 */
	loadFile: function(dir, filename, success, failure) {
		$.get(
			OC.generateUrl('/apps/files_linkeditor/ajax/loadfile'),
			{
				filename: filename,
				dir: dir
			}
		).done(function(data) {
			// Call success callback
			OCA.Files_Linkeditor.file.writeable = data.writeable;
			OCA.Files_Linkeditor.file.mime = data.mime;
			OCA.Files_Linkeditor.file.mtime = data.mtime;
			OCA.Files_Linkeditor.file.content = data.filecontents;
			success(OCA.Files_Linkeditor.file, data.filecontents);
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
			url: OC.generateUrl('/apps/files_linkeditor/ajax/savefile'),
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
		document.title = this.oldTitle;
	},

	/**
	 * Handles event when clicking outside editor
	 */
	_onClickDocument: function(event) {
		// Check if click was inside the editor or not.
		if(!$(event.target).closest('#linkeditor_container').length) {
		// Edit the editor
			OCA.Files_Linkeditor._onCloseTrigger();
		}
	},

	/*
	 * Binds actions that need to happen whilst the editor is visible
	 */
	bindVisibleActions: function() {
		$(document).bind('mouseup', this._onClickDocument);
		$('#linkeditor_url').bind('change', this._onEdit);

		// Close editor without saving on cancel.
		$('#linkeditor_cancel').bind('click', this.closeEditor.bind(this));

		// Prevent the form of being submit regularly, once we have javascript loaded.
		$('#linkeditor_form').bind('submit', this._onFormSubmitTrigger.bind(this));
	},

	/**
	 * Unbinds actions that happen whilst the editor is visible
	 */
	unBindVisibleActions: function() {
		$(document).unbind('mouseup', this._onClickDocument);
		$('#linkeditor_url').unbind('change');
		$('#linkeditor_cancel').unbind('click');
		$('#linkeditor_form').unbind('submit');
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
			return oldcontent.replace(new RegExp('URL=.*', 'gm'), 'URL=' + sanitizeUrl(url));
		} else {
			// Okay, let's create a new file.
			return '[InternetShortcut]\r\nURL=' + sanitizeUrl(url) + '\r\n';
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
				// Return only the URL.
				return sanitizeUrl(url.replace('URL=', ''));
			}
		}
		return '';
	},

	/**
	 * Generates a webloc file.
	 */
	generateWeblocFileContent: function(oldcontent, url) {
		// Find if this is already a shortcut file.
		// Match for URL line.
		var urlmatch = oldcontent.match('<key>URL<\/key>\n.<string>(.*)<\/string>');
		// See if at least two matches were found (the whole expression and the url itself).
		if(urlmatch && Array.isArray(urlmatch) && urlmatch.length > 1) {
			// Seems like it, replace the url.
			return oldcontent.replace(urlmatch[1], sanitizeUrl(url));
		} else {
			// Okay, let's create a new file.
			return '<?xml version="1.0" encoding="UTF-8"?>\n'
			+ '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n'
			+ '<plist version="1.0">\n'
			+ '	<dict>\n'
			+ '		<key>URL</key>\n'
			+ '		<string>' + sanitizeUrl(url) + '</string>\n'
			+ '	</dict>\n'
			+	'</plist>';
		}
	},

	/**
	 * Parse a webloc file.
	 */
	parseWeblocFile: function(filecontent) {
		if(filecontent) {
			// Match for URL line.
			var urlmatch = filecontent.match('<key>URL<\/key>\n.<string>(.*)<\/string>');
			// See if at least two matches were found (the whole expression and the url itself).
			if(urlmatch && Array.isArray(urlmatch) && urlmatch.length > 1) {
				// Let's use the first match.
				return sanitizeUrl(urlmatch[1]);
			}
		}
		return '';
	},

	/**
	 * Get extension from filename.
	 */
	getExtension: function(filename) {
		if(filename) {
			// Split at dot.
			var parts = filename.split('.');
			// See if there was a dot in the name.
			if(parts && Array.isArray(parts) && parts.length > 1) {
				// Get extension.
				var extension = parts[parts.length-1];
				// Return the last part after the last dot.
				if(extension) {
					return extension.toLowerCase();
				}
			}
		}
		return '';
	}
};

Files_Linkeditor.NewFileMenuPlugin = {

	attach: function(menu) {
		var fileList = menu.fileList;

		// only attach to main file list, public view is not supported yet
		if (fileList.id !== 'files') {
			return;
		}

		// register the new menu entry
		menu.addMenuEntry({
			id: 'application-internet-shortcut',
			displayName: t('files_linkeditor', 'New link'),
			templateName: t('files_linkeditor', 'Link.URL'),
			iconClass: 'icon-link',
			fileType: 'application/internet-shortcut',
			actionHandler: function(name) {
				var dir = fileList.getCurrentDirectory();
				// first create the file
				fileList.createFile(name).then(function() {
					// once the file got successfully created,
					// open the editor
					Files_Linkeditor._onEditorTrigger(
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

OCA.Files_Linkeditor = Files_Linkeditor;

OC.Plugins.register('OCA.Files.NewFileMenu', Files_Linkeditor.NewFileMenuPlugin);

$(document).ready(function () {
	OCA.Files_Linkeditor.initialize($('<div id="app-content-linkeditor"></div>'));
});
