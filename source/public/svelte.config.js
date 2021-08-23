/** @type {import('@sveltejs/kit').Config} */

import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"

const config = {
	preprocess: preprocess(),
	kit: {
		target: "#svelte",
		adapter: adapter({
			pages: "../../build/public",
			assets: "../../build/public"
		}),
		files: {
			assets: "static",
			lib: "lib",
			routes: "routes",
			template: "index.html"
		}
	}
}

export default config
