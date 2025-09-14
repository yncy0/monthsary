// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxthub/core",
    "@nuxtjs/supabase",
    "@tresjs/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "reka-ui/nuxt",
    "@nuxt/image",
  ],

  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      title: "Monthsary Website",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", href: "/favicon-16x16.png" },
      ],
      meta: [
        {
          name: "description",
          content: "a monthsary website for my girlfriend.",
        },
        {
          name: "author",
          content: "Yncy0",
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  eslint: {
    config: {
      autoInit: false,
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  supabase: {
    redirect: true,
    redirectOptions: {
      login: "/",
      callback: "/confirm",
      include: undefined,
      exclude: ["/", "/gallery", "/roadmap", "/login", "/confirm"],
      saveRedirectToCookie: false,
    },
  },

  runtimeConfig: {
    public: {
      supabaseRedirect:
        process.env.NUXT_PUBLIC_SUPABASE_REDIRECT ||
        "http://localhost:3000/confirm",
    },
  },

  css: ["~/assets/css/main.css"],

  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
});
