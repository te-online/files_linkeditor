import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
	build: {
		lib: {
			name: "files_linkeditor",
			entry: "js/main.js",
			fileName: "bundle",
			formats: ["es"],
		},
	},
	plugins: [nodePolyfills(), svelte()],
});
