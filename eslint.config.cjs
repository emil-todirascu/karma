const js = require('@eslint/js')
const eslintConfigPrettier = require('eslint-config-prettier')
const globals = require('globals')
const nodePlugin = require('eslint-plugin-n')

module.exports = [
  {
    ignores: [
      'test/e2e/support/sandbox',
      'test/e2e/support/error/under-test.js',
      'test/unit/fixtures/bundled.js',
      'static/karma.js',
      'static/context.js',
      '**/*.tpl.js'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: globals.node
    },
    plugins: {
      n: nodePlugin,
      node: nodePlugin
    },
    rules: {
      'no-empty': 'warn',
      'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }],
      'no-useless-assignment': 'warn'
    }
  },
  {
    files: [
      'common/**/*.js',
      'context/**/*.js',
      'static/**/*.js',
      'requirejs.config.tpl.js'
    ],
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    files: ['client/**/*.js', 'lib/server.js', 'test/e2e/support/**/*.js'],
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    files: ['test/e2e/support/**/plus.js', 'test/e2e/support/tag/tag.js'],
    rules: {
      'no-unused-vars': 'off'
    }
  },
  {
    files: ['test/unit/**/*.js', 'test/e2e/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.mocha,
        expect: 'readonly',
        sinon: 'readonly'
      }
    }
  },
  {
    files: ['test/client/**/*.js', 'test/e2e/support/modules/**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.mocha,
        ...globals.jasmine,
        ...globals.browser,
        expect: 'readonly'
      }
    }
  },
  {
    files: [
      'test/e2e/support/error/import-something-from-somewhere.js',
      'test/e2e/support/modules/**/*.js'
    ],
    languageOptions: {
      sourceType: 'module'
    }
  },
  eslintConfigPrettier
]
