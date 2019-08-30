export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/splitting', mode: 'client' },
    { src: '~/plugins/vue-scroll-spy', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/setup.html
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        detectBrowserLanguage: {
          useCookie: false
        }
      }
    ],
    '@nuxtjs/style-resources'
  ],
  i18n: {
    locales: ['pt-br', 'en'],
    defaultLocale: 'pt-br',
    vueI18n: {
      fallbackLocale: 'pt-br',
      messages: {
        'pt-br': {
          home: 'Início',
          about: 'Sobre',
          portfolio: 'Projetos',
          contact: 'Contato'
        },
        en: {
          home: 'Home',
          about: 'About',
          portfolio: 'Projects',
          contact: 'Contact'
        }
      }
    }
  },
  /*
   ** Globals Styles
   */
  styleResources: {
    scss: [
      '~assets/scss/globals/_buefy.scss',
      '~assets/scss/globals/_variables.scss'
    ]
  },
  buefy: {
    css: false
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
