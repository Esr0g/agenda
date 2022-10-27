import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    root: 'views/',
    plugins: [vue()],
    build: {
        outDir: "../public/"
    }
});