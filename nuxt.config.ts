import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ["@tsparticles/nuxt4", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@headlessui/vue", "@heroicons/vue/20/solid"],
    },
  },
  i18n: {
    vueI18n: "./config.ts",
  },
});
