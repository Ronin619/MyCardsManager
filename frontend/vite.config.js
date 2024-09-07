import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync("../backend/server.key"),
      cert: fs.readFileSync("../backend/server.cert"),
    },
  },
  plugins: [react()],
});
