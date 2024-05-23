import { defineConfig } from 'vite';

export default defineConfig({
  root: './src/public', // Вказуємо корінь проекту на папку src/public
  build: {
    outDir: '../../dist', // Директорія для побудови файлів, відносно кореня проекту
    rollupOptions: {
      input: {
        main: './src/public/index.html', // Головний HTML файл
        gallery: './src/public/1-gallery.html', // Додатковий HTML файл
        form: './src/public/2-form.html', // Інший HTML файл
      },
    },
  },
});
