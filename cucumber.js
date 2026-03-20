module.exports = {
  default: {
    format: ['progress'],
    paths: ['test/e2e/*.feature'],
    require: [
      'test/e2e/support/env.js',
      'test/e2e/support/world.js',
      'test/e2e/step_definitions/core_steps.js',
      'test/e2e/step_definitions/hooks.js'
    ],
    retry: process.env.CI ? 1 : 0
  }
}
