import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { globalConst } from 'vite-plugin-global-const'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    globalConst({
      Text: 'Hello World!',
      MAIN: true
    }),

    vue(),
  ],
})
