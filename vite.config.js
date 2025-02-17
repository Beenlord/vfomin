import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
    ],
    // resolve: {
    //     alias: {
    //         '@': '/resources',
    //     },
    // },
    css: {
    },
    build: {
        outDir: 'public',
        emptyOutDir: true,
        minify: true,
    },
});
