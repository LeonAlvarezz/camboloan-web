// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import AppTheme from "./configs/theme";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/test-utils",
    "@primevue/nuxt-module",
  ],

  runtimeConfig: {
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || "Camboloan",
      api_url:
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1",
    },
  },

  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: AppTheme,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },
});
