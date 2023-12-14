export { default as Header } from '../..\\components\\Header.vue'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'
export { default as AppIconsBottomArrow } from '../..\\components\\appIcons\\BottomArrow.vue'
export { default as AppIconsNextIcon } from '../..\\components\\appIcons\\NextIcon.vue'
export { default as AppIconsPancakeswap } from '../..\\components\\appIcons\\Pancakeswap.vue'
export { default as AppIconsPrevIcon } from '../..\\components\\appIcons\\PrevIcon.vue'
export { default as AppIconsReadMore } from '../..\\components\\appIcons\\ReadMore.vue'
export { default as AppIconsSushiswap } from '../..\\components\\appIcons\\Sushiswap.vue'

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
