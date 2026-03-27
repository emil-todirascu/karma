# karma-maintained: Drop-in Maintenance Fork for Karma

[![npm version](https://img.shields.io/npm/v/karma-maintained)](https://www.npmjs.com/package/karma-maintained)
[![Test](https://github.com/emil-todirascu/karma/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/emil-todirascu/karma/actions/workflows/test.yml)
[![Lint](https://github.com/emil-todirascu/karma/actions/workflows/lint.yml/badge.svg?branch=master)](https://github.com/emil-todirascu/karma/actions/workflows/lint.yml)
[![Node.js >= 20.19.0](https://img.shields.io/badge/node-%3E%3D%2020.19.0-339933?logo=node.js&logoColor=white)](https://github.com/emil-todirascu/karma/blob/master/package.json)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](./LICENSE)

karma-maintained is a maintained, drop-in replacement for Karma, intended for projects that still depend on the Karma test runner.

It preserves the Karma package interface while keeping the project usable on modern Node.js versions.

## Getting Started

Install as an alias to keep `require('karma')` working:

npm: `npm install --save-dev karma@npm:karma-maintained@^6.4.5`

yarn: `yarn add --dev karma@npm:karma-maintained@^6.4.5`

pnpm: `pnpm add --save-dev karma@npm:karma-maintained@^6.4.5`

Alternatively if your project (including dependencies) does not import `karma` by package name, installing `karma-maintained` directly may also work.

## Does This Actually Work

[![Compatibility](https://github.com/emil-todirascu/karma/actions/workflows/compatibility.yml/badge.svg)](https://github.com/emil-todirascu/karma/actions/workflows/compatibility.yml)

Yes, it does! Every week this fork is packed, swapped into real third-party projects that still use Karma and their browser specs are run against it.

Current compatibility checks cover:

| Project                                               | Node.js |
| ----------------------------------------------------- | ------- |
| [Leaflet](https://github.com/Leaflet/Leaflet)         | 24      |
| [react-modal](https://github.com/reactjs/react-modal) | 22      |
| [Bootstrap](https://github.com/twbs/bootstrap)        | 22      |

[Read more on how this works](./COMPATIBILITY.md).

## Scope

This fork is in maintenance mode. We prioritize stability and compatibility and avoid new features or ecosystem redesign.

If you are starting a new project, you should probably evaluate modern alternatives (for example Jest, Vitest, or Web Test Runner).

## Help and Support

Please use this repository's [Issue Tracker] for bug reports and maintenance requests.

## This is so great. I want to help.

Please, see
[contributing](./CONTRIBUTING.md).

## Documentation

The old in-repository documentation was removed from this maintenance fork because it was largely outdated and is not actively maintained here.

If you need the historical Karma documentation, please refer to the [upstream project][upstream_repo] repository and documentation site.

[Issue Tracker]: https://github.com/emil-todirascu/karma/issues
[upstream_repo]: https://github.com/karma-runner/karma
