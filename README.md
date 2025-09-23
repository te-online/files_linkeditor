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

Unit tests are run using [Vitest](https://github.com/vitest-dev/vitest). Tests can be found in the `unittest` directory. To run tests, run `npm run test` in the project's directory.

### End-to-end tests

#### Introduction and podman-compose setup

To run the app, install podman and podman-compose on your machine. Then run

```bash
$ cd dev && podman-compose up
```

Let this run to be able to see the output. Add `-d` if you want podman-compose to run in the background.

In a new terminal run

```bash
# ATTENTION: Wait here for the app to be ready, then run:
$ podman exec -u www-data $(podman ps -qf "name=nextcloud-dev") sh -c 'php -f ./occ app:enable files_linkeditor'
```

To shut down containers and delete the temporary volumes, run

```bash
# This will DELETE your test data
$ podman-compose down -v
```

in a second terminal while you're in the same `dev` directory.

Test cases might depend on running in a specific order. This means you might need to wind down your containers and start them again as described above when re-running tests.

**New features** are supposed to be covered by end-to-end tests in a way that reflects their average usage.

**Bugfixes** are supposed to include a test case that demonstrates the bug being fixed and prevent it to be re-introduced in the future.

#### Playwright

End-to-end testing (manually before release) is done using [Playwright](https://playwright.dev/). Tests currently cover basic features of the app and run in a headless Chrome browser on a containerized Nextcloud instance.

To run tests locally, install the ["Playwright Test for VSCode extension"](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright). Before running or working on tests, run `npm install` to install dependencies. Make sure you have create a `.env` file based on `.env.example` in the `tests` folder; values can be chosen freely.

Use the "Testing" section in VSCode to run the Playwright tests (or [consult the official documentation](https://playwright.dev/docs/running-tests) to find alternative run methods).

## Changelog

The changelog is available [in the CHANGELOG file](https://github.com/te-online/files_linkeditor/blob/main/CHANGELOG.md)
