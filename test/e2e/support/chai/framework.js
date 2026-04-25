'use strict'

const {
  getChaiBrowserGlobals
} = require('../../../support/chai-browser-globals')

const pattern = (file, included, type) => ({
  pattern: file,
  included,
  served: true,
  watched: false,
  type
})

const framework = (files) => {
  // Chai 6 no longer ships a browser bundle, so generate one for Karma.
  files.unshift(pattern(getChaiBrowserGlobals(), true))
}

framework.$inject = ['config.files']

module.exports = { 'framework:chai': ['factory', framework] }
