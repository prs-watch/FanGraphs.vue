import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // settings for library building.
  build: {
    lib: {
      entry: resolve(__dirname, 'src/fangraphs.ts'),
      name: 'fangraphs',
      fileName: 'fangraphs',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

  // settings for hot-reload.
  server: {
    watch: {
      usePolling: true,
    },
  },
})
