export default {
 // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
 ssr: false,

 // Target: https://go.nuxtjs.dev/config-target
 target: 'static',


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FreshSaltAgency',
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

  sitemap : {
    hostname: 'https://FreshSaltAgency.com'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    '~/plugins/alpinejs.js', '~/plugins/prism.js',

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss', 'nuxt-vite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content', '@nuxtjs/google-fonts', '@nuxtjs/sitemap', ['@nuxtjs/gtm', { 
      id: 'GTM-WJQ5XKJ' }],

    

        ['nuxt-facebook-pixel-module', {
          /* module options */
          track: 'PageView',
          pixelId: '3264404717140380',
          autoPageView: true,
          disabled: false
        }],
       
      ],
content: {

},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
