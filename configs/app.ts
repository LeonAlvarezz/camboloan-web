const app = {
  head: {
    charset: "utf-16",
    titleTemplate: process.env.NUXT_PUBLIC_APP_NAME,
    viewport:
      "initial-scale=1.0, maximum-scale=1.0, user-scalable=no, height=device-height, width=device-width, viewport-fit=cover",
    meta: [
      {
        name: "apple-mobile-web-app-title",
        title: process.env.NUXT_PUBLIC_APP_NAME || "BaiShun",
      },
      {
        name: "application-name",
        title: process.env.NUXT_PUBLIC_APP_NAME || "BaiShun",
      },
      {
        name: "msapplication-TileColor",
        content: "#ffffff",
      },
      {
        name: "naive-ui-style",
      },
      {
        name: "vueuc-style",
      },
      {
        name: "theme-color",
        content: "#131316",
      },
    ],
    script: [
      {
        src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/tgs-player.js",
      },
    ],
  },
};

export default app;
