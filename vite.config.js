import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// eslint-disable-next-line no-undef
const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    // base: '/ameena-fashion/',
    resolve: {
        alias: {
            '@': resolve(root),
        },
    },
});
