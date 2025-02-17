import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: '../public',
        // emptyOutDir: true,
        minify: true,
        // rollupOptions: {
        //     input: {
        //         main: resolve(__dirname, 'src/index.html')
        //     }
        // },
    },
});
