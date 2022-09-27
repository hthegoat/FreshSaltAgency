import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a65d5d98 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _59f52038 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _991ff666 = () => interopDefault(import('..\\pages\\kickstarter.vue' /* webpackChunkName: "pages/kickstarter" */))
const _1db0e07e = () => interopDefault(import('..\\pages\\privacypolicy.vue' /* webpackChunkName: "pages/privacypolicy" */))
const _f21662f4 = () => interopDefault(import('..\\pages\\Projects.vue' /* webpackChunkName: "pages/Projects" */))
const _f3cd1b82 = () => interopDefault(import('..\\pages\\Reviews.vue' /* webpackChunkName: "pages/Reviews" */))
const _646a346a = () => interopDefault(import('..\\pages\\Services.vue' /* webpackChunkName: "pages/Services" */))
const _6347766e = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _5157a500 = () => interopDefault(import('..\\pages\\thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _428cc980 = () => interopDefault(import('..\\pages\\projects\\Bth.vue' /* webpackChunkName: "pages/projects/Bth" */))
const _127eb6cc = () => interopDefault(import('..\\pages\\projects\\keystone.vue' /* webpackChunkName: "pages/projects/keystone" */))
const _bf506f76 = () => interopDefault(import('..\\pages\\projects\\pineridge.vue' /* webpackChunkName: "pages/projects/pineridge" */))
const _4e1ae956 = () => interopDefault(import('..\\pages\\services\\ads.vue' /* webpackChunkName: "pages/services/ads" */))
const _58047d10 = () => interopDefault(import('..\\pages\\services\\facebook.vue' /* webpackChunkName: "pages/services/facebook" */))
const _5c165383 = () => interopDefault(import('..\\pages\\services\\google.vue' /* webpackChunkName: "pages/services/google" */))
const _07c78e83 = () => interopDefault(import('..\\pages\\services\\seo.vue' /* webpackChunkName: "pages/services/seo" */))
const _30556b38 = () => interopDefault(import('..\\pages\\services\\webdesign.vue' /* webpackChunkName: "pages/services/webdesign" */))
const _7eac6d6d = () => interopDefault(import('..\\pages\\blog\\all\\_number\\index.vue' /* webpackChunkName: "pages/blog/all/_number/index" */))
const _a9caa028 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _6d3a8ca9 = () => interopDefault(import('..\\pages\\blog\\_category\\_number\\index.vue' /* webpackChunkName: "pages/blog/_category/_number/index" */))
const _4bb7b2d4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _a65d5d98,
    name: "blog"
  }, {
    path: "/contact",
    component: _59f52038,
    name: "contact"
  }, {
    path: "/kickstarter",
    component: _991ff666,
    name: "kickstarter"
  }, {
    path: "/privacypolicy",
    component: _1db0e07e,
    name: "privacypolicy"
  }, {
    path: "/Projects",
    component: _f21662f4,
    name: "Projects"
  }, {
    path: "/Reviews",
    component: _f3cd1b82,
    name: "Reviews"
  }, {
    path: "/Services",
    component: _646a346a,
    name: "Services"
  }, {
    path: "/team",
    component: _6347766e,
    name: "team"
  }, {
    path: "/thank-you",
    component: _5157a500,
    name: "thank-you"
  }, {
    path: "/projects/Bth",
    component: _428cc980,
    name: "projects-Bth"
  }, {
    path: "/projects/keystone",
    component: _127eb6cc,
    name: "projects-keystone"
  }, {
    path: "/projects/pineridge",
    component: _bf506f76,
    name: "projects-pineridge"
  }, {
    path: "/services/ads",
    component: _4e1ae956,
    name: "services-ads"
  }, {
    path: "/services/facebook",
    component: _58047d10,
    name: "services-facebook"
  }, {
    path: "/services/google",
    component: _5c165383,
    name: "services-google"
  }, {
    path: "/services/seo",
    component: _07c78e83,
    name: "services-seo"
  }, {
    path: "/services/webdesign",
    component: _30556b38,
    name: "services-webdesign"
  }, {
    path: "/blog/all/:number",
    component: _7eac6d6d,
    name: "blog-all-number"
  }, {
    path: "/blog/:slug",
    component: _a9caa028,
    name: "blog-slug"
  }, {
    path: "/blog/:category/:number",
    component: _6d3a8ca9,
    name: "blog-category-number"
  }, {
    path: "/",
    component: _4bb7b2d4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
