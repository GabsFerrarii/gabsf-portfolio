import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // Importa o módulo 'path' do Node.js

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // A linha abaixo diz ao Vite: "Sempre que você ver '@' em um caminho de importação,
      // substitua-o pelo caminho físico para a pasta 'src' do projeto."
      '@': path.resolve(__dirname, './src'),
    },
  },
})
