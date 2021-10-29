import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pluginSvgVue from '@vuetter/vite-plugin-vue-svg';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginSvgVue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: ` @import './src/styles/global-import'; ` },
    },
  },
})
