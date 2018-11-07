const path = require('path')

module.exports = function linkedinPixelModule (moduleOptions) {
  const defaults = {
    partnerId: null,
    disabled: false
  }

  const options = Object.assign({}, defaults, this.options.linkedin, moduleOptions)

  if (!options.partnerId) throw new Error('The `partnerId` option is required.')

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
