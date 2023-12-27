import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"; // 導入 resolve 方法

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/ElectionMap/',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      // "/images": "src/assets/images",
    },

  },



})