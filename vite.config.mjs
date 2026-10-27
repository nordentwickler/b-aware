import { defineConfig, loadEnv } from 'vite';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { compression } from 'vite-plugin-compression2';
import FullReload from 'vite-plugin-full-reload';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        base: command === 'serve' ? '' : '/dist/',
        build: {
            commonjsOptions: {
                transformMixedEsModules: false,
            },
            manifest: 'manifest.json',
            sourcemap: true,
            outDir: path.resolve(import.meta.dirname, 'public/dist/'),
            rollupOptions: {
                input: {
                    app: path.resolve(import.meta.dirname, 'src/scripts/app.js'),
                },
            },
        },
        plugins: [
            vue(),
            manifestSRI(),
            compression({
                algorithms: ['gzip'],
                include: /\.(js|mjs|json|css|map)$/i,
            }),
            FullReload(['templates/**/*']),
        ],
        publicDir: path.resolve(import.meta.dirname, 'src/public'),
        resolve: {
            alias: {
                '@': path.resolve(import.meta.dirname, 'src'),
                '@scripts': path.resolve(import.meta.dirname, 'src/scripts'),
                '@styles': path.resolve(import.meta.dirname, 'src/styles'),
                '@components': path.resolve(
                    import.meta.dirname,
                    'src/scripts/components'
                ),
                vue: 'vue/dist/vue.esm-bundler.js',
            },
        },
        server: {
            host: '0.0.0.0',
            port: 3000,
            strictPort: true,
        },
    };
});
