const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
      router: {
        base: "/vanzwartnaargroen/"
      }
    }
    : {};

module.exports = {
  transition: "page",
  // or
  // transition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   beforeEnter(el) {
  //     console.log('Before enter...');
  //   }
  // }
  generate: {
    dir: "docs"
  },
  ...routerBase,
  css: ["@/assets/css/main.scss"],
  /*
  ** Headers of the page
  */
  head: {
    title: "van Zwart naar Groen",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      },
      { hid: "description", name: "description", content: "Van zwart naar groen is een interactieve tool waarmee bezoekers een overzicht krijgen van de Nederlandse energieproductie en de manier waarop vervuilende energiecentrales kunnen worden vervangen voor een meer duurzame vorm van energieopwekking." },
      {
        property: "og:image",
        content: "~/social.jpg"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },
  plugins: [
    { src: '~/plugins/ScrollMagic.js', ssr: false },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#f6e437" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
