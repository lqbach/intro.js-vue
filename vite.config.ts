import { defineConfig, PluginOption } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { name as packageName } from './package.json'

import viteCssExtractPlugin from './build/ViteCssExtractPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteCssExtractPlugin() as PluginOption],
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['es', 'cjs', 'iife'],
      entry: resolve(__dirname, 'src/index.js'),
      fileName: (format) => {
        return `${packageName}.${format}.js`
      },
      name: packageName,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        format: 'esm',
        dir: './dist',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
