import "vite/modulepreload-polyfill";
import App from "./views/App.svelte";
import App32 from "./_v32/views/App32.svelte";
import { LinkeditorService } from "./lib/Linkeditor.service";
import { LinkeditorService32 } from "./_v32/lib/Linkeditor.service.32.js";
const components = [];

const version = Number.parseInt((window.OC?.config?.version ?? '0').split('.')[0])

if (version >= 33) {
	components.push(
		new App({
			target: document.body,
			props: {},
		}),
	);

	LinkeditorService.registerFileActions();
} else {
	components.push(
		new App32({
			target: document.body,
			props: {},
		}),
	);

	LinkeditorService32.registerFileActions();
}
