module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Documentacion",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Documentacion",
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  /* theme: "book",*/
  themeConfig: {
    logo: "/logo.png",
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Mi Rincon",
        link: "http://mirincon.com.ar/",
      },
    ],
    sidebar: [
      {
        title: "Ingreso al Sistema",
        path: "/doc/ingreso/",
        collapsable: false,
        sidebarDepth: 2,
      },
      {
        title: "Educadores",
        path: "/doc/main/",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          "/doc/main/trabajos",
          "/doc/main/miformacion",
          "/doc/main/inscripciones",
        ],
      },
      /*
      {
        title: "Inscripciones",
        path: "/doc/main/inscripciones/",
        collapsable: false,
      },*/ {
        title: "Eventos",
        path: "/doc/eventos/",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          "/doc/eventos/creacion",
          "/doc/eventos/administrar",
          "/doc/eventos/autorizar",
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "@vuepress/pwa",
    "vuepress-plugin-export",
  ],
};
