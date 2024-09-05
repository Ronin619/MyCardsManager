import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    server: isDev
      ? {
          https: {
            key: fs.readFileSync("../backend/server.key"),
            cert: fs.readFileSync("../backend/server.cert"),
          },
        }
      : undefined,
    plugins: [react()],
  };
});
