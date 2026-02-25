'use strict'

const path = require('path')
const mimeTypes = require('mime-types')

const customTypes = Object.create(null)
const legacyTypes = {
  js: 'application/javascript'
}

function normalizeExtension(extension) {
  return extension.replace(/^\./, '').toLowerCase()
}

function define(definitions, force) {
  Object.keys(definitions || {}).forEach((contentType) => {
    const extensions = definitions[contentType]
    if (!Array.isArray(extensions)) {
      return
    }

    extensions.forEach((extension) => {
      const normalized = normalizeExtension(extension)
      if (!normalized) {
        return
      }

      if (force || !customTypes[normalized]) {
        customTypes[normalized] = contentType
      }
    })
  })
}

function getType(filepath, fallback) {
  const extension = normalizeExtension(path.extname(filepath || ''))

  if (extension && customTypes[extension]) {
    return customTypes[extension]
  }

  if (extension && legacyTypes[extension]) {
    return legacyTypes[extension]
  }

  return mimeTypes.lookup(filepath || '') || fallback || null
}

module.exports = {
  define,
  getType
}
