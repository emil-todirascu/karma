'use strict'

const os = require('os')
const path = require('path')
const fs = require('fs')
const esbuild = require('esbuild')

const getChaiBrowserGlobals = () => {
  const chaiPath = require.resolve('chai/index.js')
  const chaiPackage = JSON.parse(
    fs.readFileSync(path.join(path.dirname(chaiPath), 'package.json'), 'utf8')
  )
  const outfile = path.join(
    os.tmpdir(),
    `karma-maintained-chai-${chaiPackage.version}-globals.js`
  )

  esbuild.buildSync({
    stdin: {
      contents: `
        import * as chai from ${JSON.stringify(chaiPath)}

        window.chai = chai
        window.assert = chai.assert
        window.expect = chai.expect
        window.should = chai.should()
      `,
      resolveDir: process.cwd(),
      sourcefile: 'chai-globals.mjs'
    },
    bundle: true,
    format: 'iife',
    legalComments: 'none',
    outfile,
    target: 'es2021'
  })

  return outfile
}

module.exports = { getChaiBrowserGlobals }
