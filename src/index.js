/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendConf = function (conf) {
  // make sure qwindow boot file is registered
  conf.boot.push('~@quasar/quasar-app-extension-colorize/src/boot/colorize.js')
  conf.boot.push('~@quasar/quasar-app-extension-colorize/src/boot/theme.js')
  console.log(` App Extension (colorize) Info: 'Added boot references to your quasar.conf.js'`)

  // make sure boot & component files transpile
  conf.build.transpileDependencies.push(/quasar-app-extension-colorize[\\/]src/)

  // make sure qwindow css goes through webpack to avoid ssr issues
  conf.css.push('~@quasar/quasar-app-extension-colorize/src/components/colorize/colorize.styl')
  console.log(` App Extension (colorize) Info: 'Added css reference to your quasar.conf.js'`)
}

module.exports = function (api) {
  // quasar compatibility check
  api.compatibleWith('@quasar/app', '^1.0.0')

  // register JSON api
  // api.registerDescribeApi('Colorize', './components/colorize/Colorize.json')
  // api.registerDescribeApi('Theme', './components/theme/Theme.json')

  // extend quasar.conf
  api.extendQuasarConf(extendConf)
}
