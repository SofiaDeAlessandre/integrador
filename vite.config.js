import { resolve } from 'path';

export default {
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html'),
            nosotros: resolve(__dirname, 'pages/nosotros/index.html'),
        }
    }
}