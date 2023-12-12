export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - hipo-token-landing",
    title: "hipo-token-landing",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/fonts/fontPoppins.scss',
    "~/assets/styles/main.scss",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/styles/variables.scss"],
    treeShake: true,
    optionsPath: "./vuetify.options.js",
    // material design became filter , it work with vpn, we should make a decision for it
    // one solution is replace all default icons in project to custom icon and defaultAssets remain false
    defaultAssets: false,
    dark: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
