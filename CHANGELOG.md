# Changelog

Notable changes in each released version can be seen here.

## 1.1.23, 23. September 2025

### Added

- Support for Nextcloud 32
- New end-to-end test spec for Nextcloud 32

### Changed

- Updated translations from Transifex

## 1.1.22, 12. March 2025

### Added

- Support for Nextcloud 31
- New end-to-end test spec for Nextcloud 31

### Changed

- Updated translations from Transifex

### Fixed

- Updated JS dependencies via `npm audit` and manually
- Patch `OC.dialog.alert` locally, since the upstream version has a typo in the enum used to determine button arrangements

## 1.1.21, 29. September 2024

### Added

- Tested compatibility with Nextcloud 30, enabled support for NC30

### Changed

- Updated JS dependencies and rebuild bundle

## 1.1.20, 8. April 2024

### Added

- Tested compatibility with [Nextcloud 29 RC2](https://help.nextcloud.com/t/second-rc-of-nextcloud-29/187230), enabled support for NC29

### Changed

- Updated JS dependencies and rebuilt bundle
- Updated translations from Transifex

## 1.1.19, 25. March 2024

**I'm sorry about the frequent updates, this has been a steep hill to climb. If you want to be sure everything works, maybe hold off a few days with updating from 1.1.16. There's no beta channel currently, so I'm listening closely to feedback people provide on the production version.**

### Fixed

- In Nextcloud 28, link files could not be created in subdirectories using the "New" button, but would always be created in the user's root (mentioned in #92)
- In Nextcloud 28, files could be created without the proper extension (.URL or .webloc), rendering them unusable. The extension is now forced when creating a new file

## 1.1.18, 24. March 2024

### Fixed

- Change structure to accomodate Nextcloud's weird and undocumented JS bundle resolution

## 1.1.17, 23. March 2024

### Added

- Both, next-generation and legacy Nextcloud file apps are supported, thereby adding support for Nextcloud 28 (#92)
- Public sharing seems to still use the legacy files app as is still supported that way (no editing)
- End-to-end tests for Nextcloud 28 have been recreated using Playwright
- Update translations from the community
- JS dependency updates

### Changed

- Required Nextcloud version is now 26+, in line with the [Maintenance and Release Schedule](https://github.com/nextcloud/server/wiki/Maintenance-and-Release-Schedule)
- Move JS build to `vite`
- Move unit tests to `vitetest`

## 1.1.16, 10. July 2023

### Fixed

- Fix missing version bump

## 1.1.15, 10. July 2023

### Added

- Run tests for Nextcloud 27 and bump compatibility to Nextcloud 27 (#82)
- Adjust controller naming to PSR-4 to fix compatibility with Nextcloud 27

### Changed

- Update JS dependencies
- Update translations from Transifex

## 1.1.14, 6. April 2023

### Added

- Run tests for Nextcloud 26 and bump compatibility to Nextcloud 26 (#80)

### Changed

- Update JS dependencies
- Update translations from Transifex (#72)

## 1.1.13, 23. November 2022

- Fix missing CSS for Nextcloud 25, thanks to @datenzar
- Update JS dependencies

## 1.1.12, 31. October 2022

- Run tests for Nextcloud 25 and bump compatibility to Nextcloud 25

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
