import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    proxy: {
      "^/todo/*": "http://localhost:4004",
      // CORS Auth Header not allowed CAP - https://vitejs.dev/config/server-options.html#server-proxy
      // alternatively during dev time: create own cap server impl that allows auth header by adding
      // "access-control-allow-headers, authorization" to it's impl:
      // https://cap.cloud.sap/docs/node.js/best-practices?q=cors#manual-implementation-1
    },
  },
  build: {
    target: "esnext",
  },
  test: {
    setupFiles: "./tests/setupVitest.ts",
  },
});
