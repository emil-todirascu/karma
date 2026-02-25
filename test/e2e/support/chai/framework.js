'use strict'

const pattern = (file, included, type) => ({
  pattern: file,
  included,
  served: true,
  watched: false,
  type
})

const framework = (files) => {
  files.unshift(
    pattern(require.resolve('chai/register-assert.js'), true, 'module')
  )
  files.unshift(
    pattern(require.resolve('chai/register-expect.js'), true, 'module')
  )
  files.unshift(
    pattern(require.resolve('chai/register-should.js'), true, 'module')
  )
  files.unshift(pattern(require.resolve('chai/index.js'), false, 'module'))
}

framework.$inject = ['config.files']

module.exports = { 'framework:chai': ['factory', framework] }
