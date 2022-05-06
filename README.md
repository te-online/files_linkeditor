# nextcloud--files_linkeditor

A nextcloud app to edit .URL and .webloc files and visit links stored in them.

## Features

- Click on any .URL (Windows) or .webloc (macOS) file in the Nextcloud webinterface to see the link and have the option to visit it directly.
- Create .URL files (no .webloc files as of v1.0.2) from the Nextcloud webinterface.
- Edit the link inside of .URL and .webloc files from the webinterface, if you have write access to the file.
- Change will also be synced to your Desktop, where you can open the shortcut files.

## What are .URL or .webloc files?

If you ever saved a favorite/shortcut in a browser on macOS or Windows, you have thereby created a .webloc or .URL file. Windows saves internet-shortcuts in .URL files and macOS in .webloc files. Example: You drag and drop a shortcut from Firefox to your macOS Desktop -> you have a .webloc file. Now if you sync this file with your Nextcloud, you can view, edit or open the link from within the webinterface.

## Why can't I open a link file in a new window/tab without confirmation

See this Pull Request for an extensive discussion: [#20](https://github.com/te-online/files_linkeditor/pull/20).

## Development

The client-side JavaScript of this plugin uses ES6 features and needs to be transpiled for use in a browser. To run a watch command that automatically updates the `bundle.js` file when you make changes, execute `npm run dev`. To make a simple build, use `npm build`.

Before building or development, dependencies need to be installed once, by running `npm install`.

## Automated testing

### Unit tests

Unit tests are run using [Jest](https://jestjs.io/). Tests can be found in the `jest` directory. To run tests, run `npm run test` in the project's directory.

### End-to-end tests

Some end-to-end testing is done using [Cypress](https://www.cypress.io/). Tests currently cover basic features of the app and run in a headless Chrome browser on a dockerized Nextcloud instance. For this repository tests run on [a mirror repository on Gitlab](https://gitlab.com/te-online/files_linkeditor).

To run tests locally, change into the `tests` directory. Before running or working on tests, run `npm install` to install dependencies. Make sure to create a `.env` file based on `.env.example` and a `cypress.env.json` based on `cypress.env.example.json`; values can be chosen freely, only make sure they align between the two files.

To run the app install docker and docker-compose on your machine. Then run `docker-compose up`, followed by `docker exec $(docker ps -qf "name=app") sh -c 'chown www-data:root custom_apps'`. Wait for the app to be ready, then run `docker exec -u www-data $(docker ps -qf "name=app") sh -c 'php -f ./occ app:disable firstrunwizard'`.

Finally, run `npm start` and use Cypress' UI to start running the tests included in the spec file.

To shut down containers and delete the temporary volumes, run `docker-compose down -v` in a second terminal while you're in the same `tests` directory.

Test cases might depend on running in a specific order. This means you might need to wind down your docker containers and start them again as described above when re-running tests.

**New features** are supposed to be covered by end-to-end tests in a way that reflects their average usage.

**Bugfixes** are supposed to include a test case that demonstrates the bug being fixed and prevent it to be re-introduced in the future.

## Changelog

### 1.1.10, 6. May 2022

- Add some basic end-to-end tests
- Run tests for Nextcloud 24 and bump compatibility to Nextcloud 24
- Update JS dependencies

### 1.1.9, 21. March 2022

- Add Czech localization (thanks to @p-bo)
- Update JS dependencies, fixes [a potential XSS-vulnerability in the URL sanitizer](https://github.com/te-online/files_linkeditor/pull/65)

### 1.1.8, 3. December 2021

- v1.1.7, but a second attempt to get a properly signed app into the appstore

### 1.1.7, 3. December 2021

- Bump compatibility to Nextcloud 23
- Update JS dependencies

### 1.1.6, 14. July 2021

- Bump compatibility to Nextcloud 22
- Update JS dependencies
- Fix jest test config

### 1.1.5, 19. March 2021

- Add Polish translation (thanks to @Valdnet)

### 1.1.4, 11. March 2021

- Support for Nextcloud 21

### 1.1.3, 3. December 2020

- Disable edit functionality when `OC.currentUser` is not populated (no user session)

### 1.1.2, 28. August 2020

- Replace URL sanitizer to fix removal of special characters (#36).
- Update French translation, thanks @Ravinou

### 1.1.1, 13. June 2020

- Add parser for reading binary plist `.webloc` files, see [Propery list, Wikipedia](https://en.wikipedia.org/wiki/Property_list) and [#34](https://github.com/te-online/files_linkeditor/issues/34).

### 1.1.0, 6. June 2020

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

### 1.0.14, 20. May 2020

- Add compatibility for Nextcloud 19.

### 1.0.13, 9. Mar 2020

- Add Basque translation (thanks to @aldatsa).

### 1.0.12, 7. Jan 2020

- Add French translation (thanks to @Gildas-GH).

### 1.0.11, 10. Oct 2019

- Improve appstore description and add screenshots (thanks to @jospoortvliet).
- Add Spanish translation (thanks to @alemorbel).
- Add compatibility for Nextcloud 17.
- Set `scrollTop` property, when creating a new file (see https://github.com/nextcloud/server/pull/12990)

### 1.0.10, 2. Feb 2019

- Apply temporary fix to sidebar issue. See #18.
- Add compatibility for Nextcloud 16.

### 1.0.9, 19. Dec 2018

- Fix issue with public single file shares always displaying `View link` button. Fixes #22.

### 1.0.8, 11. Dec 2018

- Initial changelog entry.
- Add nextcloud 15 compatibility.
- Fix pop-up closing, when visit link is clicked on edit pop-up.
- Allow directly shared link files to be opened. Fixes #19.
