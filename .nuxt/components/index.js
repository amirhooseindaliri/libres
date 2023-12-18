export { default as BoxModelPractice } from '../..\\components\\BoxModelPractice.vue'
export { default as DatePicker } from '../..\\components\\DatePicker.vue'
export { default as ExtralistButtonPractice } from '../..\\components\\ExtralistButtonPractice.vue'
export { default as ExtraListPractice } from '../..\\components\\ExtraListPractice.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Loading } from '../..\\components\\Loading.vue'
export { default as NavPractice } from '../..\\components\\NavPractice.vue'
export { default as QuestiontitlePractice } from '../..\\components\\QuestiontitlePractice.vue'
export { default as SentenceBlank } from '../..\\components\\SentenceBlank.vue'
export { default as SentencePractice } from '../..\\components\\SentencePractice.vue'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'
export { default as TablePractice } from '../..\\components\\TablePractice.vue'
export { default as WordBoxPractice } from '../..\\components\\WordBoxPractice.vue'
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
