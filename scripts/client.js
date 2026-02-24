const { context } = require('esbuild')
const { readFile } = require('fs').promises

const punycodeAliasPlugin = {
  name: 'punycode-alias',
  setup (build) {
    build.onResolve({ filter: /^punycode$/ }, () => ({
      path: require.resolve('punycode/')
    }))
  }
}

const configs = [
  {
    inPath: 'client/main.js',
    outPath: 'static/karma.js'
  },
  {
    inPath: 'context/main.js',
    outPath: 'static/context.js'
  }
]

const createBuildOptions = ({ inPath, outPath }, write = true) => ({
  entryPoints: [inPath],
  bundle: true,
  platform: 'browser',
  format: 'iife',
  target: 'es2018',
  logLevel: 'silent',
  plugins: [punycodeAliasPlugin],
  write,
  outfile: outPath
})

const buildResourceToFile = async (config) => {
  const ctx = await context(createBuildOptions(config, true))
  try {
    await ctx.rebuild()
  } finally {
    await ctx.dispose()
  }
}

const buildResourceBuffer = async (config) => {
  const ctx = await context(createBuildOptions(config, false))
  try {
    const result = await ctx.rebuild()
    return result.outputFiles[0].contents
  } finally {
    await ctx.dispose()
  }
}

const watchResourceToFile = async (config) => {
  const ctx = await context(createBuildOptions(config, true))
  await ctx.watch()
  console.log(`Watching ${config.inPath} -> ${config.outPath}`)
}

const runBuild = async () => {
  await Promise.all(configs.map(buildResourceToFile))
}

const runCheck = async () => {
  const [expectedClient, expectedContext] = await Promise.all(configs.map(buildResourceBuffer))
  const [actualClient, actualContext] = await Promise.all([
    readFile('static/karma.js'),
    readFile('static/context.js')
  ])

  if (Buffer.compare(expectedClient, actualClient) !== 0 || Buffer.compare(expectedContext, actualContext) !== 0) {
    // eslint-disable-next-line no-throw-literal
    throw 'Bundled client assets are outdated. Forgot to run "npm run build"?'
  }
}

const runWatch = async () => {
  await Promise.all(configs.map(watchResourceToFile))
}

const main = async () => {
  if (process.argv[2] === 'build') {
    await runBuild()
  } else if (process.argv[2] === 'check') {
    await runCheck()
  } else if (process.argv[2] === 'watch') {
    await runWatch()
  } else {
    // eslint-disable-next-line no-throw-literal
    throw `Unknown command: ${process.argv[2]}`
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
