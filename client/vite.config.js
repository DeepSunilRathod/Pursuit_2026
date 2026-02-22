import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Trigger build
export default defineConfig({
  plugins: [react()],
  base: "/",
  assetsInclude: ["**/*.JPG"],
});
