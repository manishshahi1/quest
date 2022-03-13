import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		vite: {
			resolve: {
				alias: {
					$posts: path.resolve('./src/routes/posts'),
					$blog: path.resolve('./src/routes/posts/blog'),
					$news: path.resolve('./src/routes/posts/news')
				}
			}
		},
		adapter: adapter()
	},

	preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
