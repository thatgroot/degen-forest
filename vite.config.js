import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	define: {
		'__SVELTEKIT_APP_VERSION_FILE_': JSON.stringify('0.0.1'),
		'__APP_VERSION__': JSON.stringify('0.0.1'),
	}
};

export default config;
