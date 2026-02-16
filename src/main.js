import "vite/modulepreload-polyfill";
import App from "./views/App.svelte";
import { LinkeditorService } from "./lib/Linkeditor.service";
const components = [];

components.push(
	new App({
		target: document.body,
		props: {},
	}),
);

LinkeditorService.registerFileActions();
