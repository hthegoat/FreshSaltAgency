export { default as AppBreadCrumb } from '../..\\components\\AppBreadCrumb.vue'
export { default as ArticleCard } from '../..\\components\\ArticleCard.vue'
export { default as ArticlePrevNext } from '../..\\components\\ArticlePrevNext.vue'
export { default as Cf } from '../..\\components\\cf.vue'
export { default as ClientList } from '../..\\components\\ClientList.vue'
export { default as Contact } from '../..\\components\\Contact.vue'
export { default as Faq } from '../..\\components\\Faq.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Hero } from '../..\\components\\Hero.vue'
export { default as Hero2 } from '../..\\components\\Hero2.vue'
export { default as HeroB } from '../..\\components\\HeroB.vue'
export { default as HomeCards } from '../..\\components\\HomeCards.vue'
export { default as Marquee } from '../..\\components\\marquee.vue'
export { default as Marquee2 } from '../..\\components\\marquee2.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as Nav2 } from '../..\\components\\Nav2.vue'
export { default as Pagination } from '../..\\components\\Pagination.vue'
export { default as PostsCard } from '../..\\components\\PostsCard.vue'
export { default as ProjectList } from '../..\\components\\ProjectList.vue'
export { default as ProjectList2 } from '../..\\components\\ProjectList2.vue'
export { default as SearchInput } from '../..\\components\\SearchInput.vue'
export { default as SocialHead } from '../..\\components\\SocialHead.vue'
export { default as Stats } from '../..\\components\\Stats.vue'
export { default as Testimonial } from '../..\\components\\Testimonial.vue'
export { default as Wow } from '../..\\components\\Wow.vue'

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
