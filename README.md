# nextcloud--files_linkeditor

A nextcloud app to edit .URL and .webloc files and visit links stored in them.

## Features

* Click on any .URL (Windows) or .webloc (macOS) file in the Nextcloud webinterface to see the link and have the option to visit it directly.
* Create .URL files (no .webloc files as of v1.0.2) from the Nextcloud webinterface.
* Edit the link inside of .URL and .webloc files from the webinterface, if you have write access to the file.
* Change will also be synced to your Desktop, where you can open the shortcut files.

## What are .URL or .webloc files?

If you ever saved a favorite/shortcut in a browser on macOS or Windows, you have thereby created a .webloc or .URL file. Windows saves internet-shortcuts in .URL files and macOS in .webloc files. Example: You drag and drop a shortcut from Firefox to your macOS Desktop -> you have a .webloc file. Now if you sync this file with your Nextcloud, you can view, edit or open the link from within the webinterface.

## Changelog

### 1.0.8, 11. Dec 2018
- Initial changelog entry.
- Add nextcloud 15 compatibility.
- Fix pop-up closing, when visit link is clicked on edit pop-up.
- Allow directly shared link files to be opened. Fixes #19.