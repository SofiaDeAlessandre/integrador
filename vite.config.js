import { resolve } from "path";

export default {
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nosotros: resolve(__dirname, "pages/nosotros/index.html"),
        contacto: resolve(__dirname, "pages/contacto/index.html"),
      },
    },
  },
};
