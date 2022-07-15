export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  router: {
    middleware: "authenticated",
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/NewsPage/:p",
        component: resolve(__dirname, "pages/NewsPage.vue"),
        name: "page",
      });
    },
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "firebasepj",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/firebase.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify", "nuxt-microcms-module", "@nuxt/postcss8"],
  microcms: {
    options: {
      serviceDomain: "conditionyellow",
      apiKey: "1834e7af205d486994be3447af91fbac50b0",
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },

  generate: {
    async routes() {
      const limit = 10;
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i);

      // 一覧のページング
      const pages = await axios
        .get(`https://conditionyellow.microcms.io/api/v1/blog?limit=0`, {
          headers: { "X-MICROCMS-API-KEY": "1834e7af205d486994be3447af91fbac50b0" },
        })
        .then((res) =>
          range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
            route: `/NewsPage/${p}`,
          }))
        );
      return pages;
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  devServerHandlers: [],
};
