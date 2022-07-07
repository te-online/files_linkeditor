# Changelog

Notable changes in each released version can be seen here.

## 1.1.11, 8. July 2022

### Fixed

- Migrate to IBootstrap: Fix logs spammed with deprecation warnings in NC24, see [#68](https://github.com/te-online/files_linkeditor/issues/68)

### Changed

- Move changelog to separate file to show in Appstore, see [#69](https://github.com/te-online/files_linkeditor/issues/69)
- Update JS dependencies

## 1.1.10, 6. May 2022

### Added

- Add some basic end-to-end tests
- Run tests for Nextcloud 24 and bump compatibility to Nextcloud 24
- Update JS dependencies

## 1.1.9, 21. March 2022

### Added

- Add Czech localization (thanks to @p-bo)
- Update JS dependencies, fixes [a potential XSS-vulnerability in the URL sanitizer](https://github.com/te-online/files_linkeditor/pull/65)

## 1.1.8, 3. December 2021

### Fixed

- v1.1.7, but a second attempt to get a properly signed app into the appstore

## 1.1.7, 3. December 2021

### Added

- Bump compatibility to Nextcloud 23
- Update JS dependencies

## 1.1.6, 14. July 2021

### Added

- Bump compatibility to Nextcloud 22
- Update JS dependencies

### Fixed

- Fix jest test config

## 1.1.5, 19. March 2021

### Added

- Add Polish translation (thanks to @Valdnet)

## 1.1.4, 11. March 2021

### Added

- Support for Nextcloud 21

## 1.1.3, 3. December 2020

### Changed

- Disable edit functionality when `OC.currentUser` is not populated (no user session)

## 1.1.2, 28. August 2020

### Fixed

- Replace URL sanitizer to fix removal of special characters (#36).

### Changed

- Update French translation, thanks @Ravinou

## 1.1.1, 13. June 2020

### Added

- Add parser for reading binary plist `.webloc` files, see [Propery list, Wikipedia](https://en.wikipedia.org/wiki/Property_list) and [#34](https://github.com/te-online/files_linkeditor/issues/34).

## 1.1.0, 6. June 2020

### Changed

- Rewrite client-side JavaScript in ES6 and with use of [Svelte](https://svelte.dev) components
- Add autofocus to URL input field when editing a link file
- Enable creation of .webloc files from the filelist
- New file: Don't save an empty file if editing is canceled
- Fix loading spinner sitting on top of text
- Fix displayed link not wrapped in anchor tag
- Add button to change to edit mode from view mode
- Add configurable option to open link in the same window
- Add configurable option to open link without confirmation if it is configured to open in the same window (thanks for the suggestion to @noerw)
- Rewrite .webloc file parser by using the browser's XML parser
- Remove support for Internet Explorer
- Remove dependency on jQuery

## 1.0.14, 20. May 2020

### Added

- Add compatibility for Nextcloud 19.

## 1.0.13, 9. Mar 2020

### Added

- Add Basque translation (thanks to @aldatsa).

## 1.0.12, 7. Jan 2020

### Added

- Add French translation (thanks to @Gildas-GH).

## 1.0.11, 10. Oct 2019

### Changed

- Improve appstore description and add screenshots (thanks to @jospoortvliet).

### Added

- Add Spanish translation (thanks to @alemorbel).
- Add compatibility for Nextcloud 17.

### Fixed

- Set `scrollTop` property, when creating a new file (see https://github.com/nextcloud/server/pull/12990)

## 1.0.10, 2. Feb 2019

### Fixed

- Apply temporary fix to sidebar issue. See #18.

### Added

- Add compatibility for Nextcloud 16.

## 1.0.9, 19. Dec 2018

### Fixed

- Fix issue with public single file shares always displaying `View link` button. Fixes #22.

## 1.0.8, 11. Dec 2018

### Added

- Initial changelog entry.
- Add nextcloud 15 compatibility.
- Fix pop-up closing, when visit link is clicked on edit pop-up.
- Allow directly shared link files to be opened. Fixes #19.
