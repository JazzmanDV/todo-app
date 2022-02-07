import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

import svgr from "@svgr/rollup";

import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
    plugins: [
        react(),
        legacy({
            targets: ["cover 99.5%"],
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
        svgr(),
    ],
    base: "./",
    build: {
        outDir: "./build",
    },
    css: {
        postcss: {
            plugins: [
                postcssPresetEnv({
                    importFrom: "./src/variables.css",
                }),
            ],
        },
    },
});
