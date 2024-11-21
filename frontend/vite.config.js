import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
    server: {
        host: 'localhost', // Listen on all network interfaces
    },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
