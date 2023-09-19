import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      NODE_ENV: "development",
      DEBUG: "false",
      API_KEY: undefined,
      APP_VERSION: null,
    }),
  ],
});
