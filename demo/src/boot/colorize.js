import ColorizeColor from ('../examples/ColorizeColor')
import ColorizeBackground from '../examples/ColorizeBackground'
import ColorizeBorder from '../examples/ColorizeBorder'
import ColorizeBoth from '../examples/ColorizeBoth'
import ColorizeColorSelection from '../examples/ColorizeColorSelection'
import ColorizeBackgroundSelection from '../examples/ColorizeBackgroundSelection'
import ColorizeBorderSelection from '../examples/ColorizeBorderSelection'
import ColorizeBothSelection from '../examples/ColorizeBothSelection'
import ThemeSimple from '../examples/ThemeSimple'
import ThemeSelection from '../examples/ThemeSelection'
import ThemeQuasarComponents from '../examples/ThemeQuasarComponents'

export default async ({ Vue }) => {
  Vue.use(ColorizeColor)
  Vue.use(ColorizeBackground)
  Vue.use(ColorizeBorder)
  Vue.use(ColorizeBoth)
  Vue.use(ColorizeColorSelection)
  Vue.use(ColorizeBackgroundSelection)
  Vue.use(ColorizeBorderSelection)
  Vue.use(ColorizeBothSelection)
  Vue.use(ThemeSimple)
  Vue.use(ThemeSelection)
  Vue.use(ThemeQuasarComponents)
}
