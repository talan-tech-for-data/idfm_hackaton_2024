import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
      host: '127.0.0.1',
	  proxy: {
		'/api': {
		  target: 'http://10.244.1.149:8000',
		  changeOrigin: true,
		  rewrite: (path) => path.replace(/^\/api/, '')
		}
	  }
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
