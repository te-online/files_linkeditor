import App from "./views/App.svelte";
import { LinkeditorService } from "./Linkeditor.service";
const components = [];

components.push(
	new App({
		target: document.body,
		props: {},
	})
);

LinkeditorService.registerFileActions();
