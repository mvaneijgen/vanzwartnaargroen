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
    title: "vanzwartnaargroen",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
      // <link rel="stylesheet" href="https://indestructibletype-fonthosting.github.io/renner.css" type="text/css" charset="utf-8" />
      {
        rel: "stylesheet",
        href: "https://indestructibletype-fonthosting.github.io/renner.css",
        type: "text/css",
        charset: "utf-8"
      },
      {
        property: "og:image",
        content: "~/social.jpg"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
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
