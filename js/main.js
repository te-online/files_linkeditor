import "vite/modulepreload-polyfill";
import App from "./views/App.svelte";
import { LinkeditorServiceNext } from "./lib/Linkeditor-next.service";
const components = [];

components.push(
	new App({
		target: document.body,
		props: {},
	}),
);

LinkeditorServiceNext.registerFileActions();
