'use strict'

const os = require('os')
const path = require('path')
const fs = require('fs')
const esbuild = require('esbuild')

const readChaiPackage = (chaiPath) => {
  let directory = path.dirname(chaiPath)

  while (directory !== path.dirname(directory)) {
    const packagePath = path.join(directory, 'package.json')

    if (fs.existsSync(packagePath)) {
      return JSON.parse(fs.readFileSync(packagePath, 'utf8'))
    }

    directory = path.dirname(directory)
  }

  return JSON.parse(
    fs.readFileSync(require.resolve('chai/package.json'), 'utf8')
  )
}

const getChaiBrowserGlobals = () => {
  const chaiPath = require.resolve('chai')
  const chaiPackage = readChaiPackage(chaiPath)
  const outfile = path.join(
    os.tmpdir(),
    `karma-maintained-chai-${chaiPackage.version}-globals.js`
  )

  if (fs.existsSync(outfile)) {
    return outfile
  }

  const tempDir = fs.mkdtempSync(
    path.join(os.tmpdir(), 'karma-maintained-chai-')
  )
  const tempFile = path.join(
    tempDir,
    `${process.pid}-${Math.random().toString(36).slice(2)}-globals.js`
  )

  esbuild.buildSync({
    stdin: {
      contents: `
        import * as chai from 'chai'

        window.chai = chai
        window.assert = chai.assert
        window.expect = chai.expect
        window.should = chai.should()
      `,
      resolveDir: path.dirname(chaiPath),
      sourcefile: 'chai-globals.mjs'
    },
    bundle: true,
    format: 'iife',
    legalComments: 'none',
    outfile: tempFile,
    target: 'es2021'
  })

  try {
    fs.renameSync(tempFile, outfile)
  } catch (error) {
    if (!fs.existsSync(outfile)) {
      throw error
    }
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true })
  }

  return outfile
}

module.exports = { getChaiBrowserGlobals }
