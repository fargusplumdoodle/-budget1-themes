import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import * as path from "path";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@fargusplumdoodle/themes",
      formats: ["es", "umd"],
      fileName: (format) => `themes.${format}.js`,
    },
  },
});
