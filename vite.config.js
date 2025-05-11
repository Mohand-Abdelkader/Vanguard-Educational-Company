import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    assetsDir: "react-assets", // if you're renaming assets to avoid conflict
  },
});
