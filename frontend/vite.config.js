import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

export default defineConfig(({ mode }) => {
  if (mode === "development") {
    return {
      server: {
        https: {
          key: fs.readFileSync("../backend/server.key"),
          cert: fs.readFileSync("../backend/server.cert"),
        },
      },
      plugins: [react()],
    };
  } else {
    return {
      plugins: [react()],
    };
  }
});
