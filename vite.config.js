import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
	build: {
		outDir: "js",
		lib: {
			name: "files_linkeditor",
			entry: "src/main.js",
			fileName: "bundle",
			formats: ["es"],
		},
	},
	plugins: [nodePolyfills(), svelte()],
});
