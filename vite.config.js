import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    server: {
        host: true,
        port: 5179,
        hmr: {
            host: "localhost",
        },
    },
    plugins: [
        laravel({
            input: [
                "resources/css/app.scss",
                "resources/css/app.css",
                "resources/js/app.js",
            ],
            refresh: true,
        }),
    ],
});
