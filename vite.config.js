import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import checker from "vite-plugin-checker";

import svgr from "@svgr/rollup";

import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
    plugins: [
        react(),
        legacy({
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
        checker({ typescript: true }),
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
        modules: {
            localsConvention: "dashesOnly",
        },
    },
});
