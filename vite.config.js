/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-03-08 09:37:49
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001,
    host: '0.0.0.0',
  },
  base: process.env.NODE_ENV === 'production' ? '/calculator/' : '/',
})
