export default {
 // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
 ssr: false,

 // Target: https://go.nuxtjs.dev/config-target
 target: 'static',


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fresh Salt Agency',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fresh Salt Marketing Agency' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

script: [
{ src: 'https://selvogrj.use.stape.io/selvogrj.js'}
],

  sitemap : {
    hostname: 'https://FreshSaltAgency.com'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

   '~/plugins/alpinejs.js',{ src: '~/plugins/flowbite.js', ssr: false },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content', '@nuxtjs/google-fonts', '@nuxtjs/sitemap', ['@nuxtjs/gtm', {
      id: 'GTM-WJQ5XKJ',
      transport_url: 'https://selvogrj.use.stape.io',
      scriptId: 'gtm-script',
      scriptDefer: false,
      scriptURL: 'https://selvogrj.use.stape.io',
      crossOrigin: false,
      noscript: true,
      noscriptId: 'gtm-noscript',
      noscriptURL: 'https://selvogrj.use.stape.io',
      layer: 'dataLayer',
      variables: {},



      autoInit: true,
      respectDoNotTrack: true,
    }],



        ['nuxt-facebook-pixel-module', {
          /* module options */
          track: 'PageView',
          pixelId: '3264404717140380',
          autoPageView: true,
          disabled: false
        }],

      ],
      content: {
        markdown: {
          prism: {
            theme: 'prism-themes/themes/prism-material-oceanic.css'
          }
        }
      },
      hooks: {
        'content:file:beforeInsert': document => {
          if (document.extension === '.md') {
            const { time } = require('reading-time')(document.text)

            document.readingTime = time
          }
        }
      },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
