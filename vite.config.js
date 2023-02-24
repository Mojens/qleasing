import { fileURLToPath, URL } from "node:url";
import dotenv from 'dotenv';

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const env = dotenv.config().parsed;

export default defineConfig({
  plugins: [vue()],
  define: Object.keys(env).reduce((acc, key) => {
    acc[`process.env.${key}`] = JSON.stringify(env[key]);
    return acc;
  }, {}),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
