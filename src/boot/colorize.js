import Colorize from '@quasar/quasar-app-extension-colorize/src/components/colorize'

export default ({ Vue, ssrContext }) => {
  Vue.component('colorize', Colorize)
}
