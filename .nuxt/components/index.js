export const AppBreadCrumb = () => import('../..\\components\\AppBreadCrumb.vue' /* webpackChunkName: "components/app-bread-crumb" */).then(c => wrapFunctional(c.default || c))
export const ArticleCard = () => import('../..\\components\\ArticleCard.vue' /* webpackChunkName: "components/article-card" */).then(c => wrapFunctional(c.default || c))
export const ArticlePrevNext = () => import('../..\\components\\ArticlePrevNext.vue' /* webpackChunkName: "components/article-prev-next" */).then(c => wrapFunctional(c.default || c))
export const Cf = () => import('../..\\components\\cf.vue' /* webpackChunkName: "components/cf" */).then(c => wrapFunctional(c.default || c))
export const ClientList = () => import('../..\\components\\ClientList.vue' /* webpackChunkName: "components/client-list" */).then(c => wrapFunctional(c.default || c))
export const Contact = () => import('../..\\components\\Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const Faq = () => import('../..\\components\\Faq.vue' /* webpackChunkName: "components/faq" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Hero = () => import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const Hero2 = () => import('../..\\components\\Hero2.vue' /* webpackChunkName: "components/hero2" */).then(c => wrapFunctional(c.default || c))
export const HeroB = () => import('../..\\components\\HeroB.vue' /* webpackChunkName: "components/hero-b" */).then(c => wrapFunctional(c.default || c))
export const Nav = () => import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const Nav2 = () => import('../..\\components\\Nav2.vue' /* webpackChunkName: "components/nav2" */).then(c => wrapFunctional(c.default || c))
export const Pagination = () => import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const PostsCard = () => import('../..\\components\\PostsCard.vue' /* webpackChunkName: "components/posts-card" */).then(c => wrapFunctional(c.default || c))
export const ProjectList = () => import('../..\\components\\ProjectList.vue' /* webpackChunkName: "components/project-list" */).then(c => wrapFunctional(c.default || c))
export const ProjectList2 = () => import('../..\\components\\ProjectList2.vue' /* webpackChunkName: "components/project-list2" */).then(c => wrapFunctional(c.default || c))
export const SearchInput = () => import('../..\\components\\SearchInput.vue' /* webpackChunkName: "components/search-input" */).then(c => wrapFunctional(c.default || c))
export const SocialHead = () => import('../..\\components\\SocialHead.vue' /* webpackChunkName: "components/social-head" */).then(c => wrapFunctional(c.default || c))
export const Stats = () => import('../..\\components\\Stats.vue' /* webpackChunkName: "components/stats" */).then(c => wrapFunctional(c.default || c))
export const Testimonial = () => import('../..\\components\\Testimonial.vue' /* webpackChunkName: "components/testimonial" */).then(c => wrapFunctional(c.default || c))
export const Wow = () => import('../..\\components\\Wow.vue' /* webpackChunkName: "components/wow" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
