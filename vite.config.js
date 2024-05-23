import { defineConfig } from 'vite';

export default defineConfig({
  root: './public', // Вказуємо корінь проекту
  build: {
    outDir: '../dist', // Директорія для побудови файлів
    rollupOptions: {
      input: {
        main: './public/index.html', // Головний HTML файл
        gallery: './public/1-gallery.html', // Додатковий HTML файл, якщо є
      },
    },
  },
});
