import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    nodePolyfills({
      // Ви можете вказати налаштування плагіна тут, якщо це необхідно
    }),
  ],
  root: './src', // Вказуємо корінь проекту на папку src
  build: {
    outDir: '../dist', // Директорія для побудови файлів, відносно кореня проекту
    rollupOptions: {
      input: {
        main: './src/index.html', // Головний HTML файл
        gallery: './src/1-gallery.html', // Додатковий HTML файл
        form: './src/2-form.html', // Інший HTML файл
      },
    },
  },
});
