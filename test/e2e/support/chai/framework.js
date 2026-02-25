'use strict'

const path = require('path')

const pattern = (file, included, type) => ({
  pattern: file,
  included,
  served: true,
  watched: false,
  type
})

const framework = (files) => {
  // Use the browser bundle and expose globals from `window.chai`.
  files.unshift(pattern(path.join(__dirname, 'globals.js'), true))
  files.unshift(pattern(require.resolve('chai/chai.js'), true))
}

framework.$inject = ['config.files']

module.exports = { 'framework:chai': ['factory', framework] }
