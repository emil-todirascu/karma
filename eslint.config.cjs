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
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs'
    },
    plugins: {
      n: nodePlugin,
      node: nodePlugin
    },
    rules: {
      'arrow-parens': [2, 'always'],
      'space-before-function-paren': ['error', 'always']
    }
  },
  {
    files: ['common/**/*.js', 'context/**/*.js', 'static/**/*.js', 'requirejs.config.tpl.js'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly'
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
  }
]
