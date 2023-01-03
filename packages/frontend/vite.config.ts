import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    proxy: {
      "^/todo/*": "http://localhost:4004", // CORS Auth Header not allowed CAP - https://vitejs.dev/config/server-options.html#server-proxy
    },
  },
  build: {
    target: "esnext",
  },
  test: {
    setupFiles: "./tests/setupVitest.ts",
  },
});
