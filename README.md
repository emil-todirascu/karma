# Karma Maintenance Fork

This repository is a maintenance-focused fork of the original [karma-runner/karma][upstream_repo] project.

The upstream project was deprecated. The goal of this fork is to keep Karma usable for teams that still rely on it.

This fork is intended to remain a drop-in replacement for existing Karma-based projects as much as possible.

## Getting Started

For the best compatibility, alias `karma` to `karma-maintained` so tools that call `require('karma')` keep working.

npm: `npm install --save-dev karma@npm:karma-maintained@^6.4.5`

yarn: `yarn add --dev karma@npm:karma-maintained@^6.4.5`

pnpm: `pnpm add --save-dev karma@npm:karma-maintained@^6.4.5`

Alternatively if your project (including dependencies) does not import `karma` by package name, installing `karma-maintained` directly may also work.

## Scope

This fork is in maintenance mode. We prioritize stability and compatibility and avoid new features or ecosystem redesign.

If you are starting a new project, you should probably evaluate modern alternatives (for example Jest, Vitest, or Web Test Runner).

## Help and Support

Please use this repository's [Issue Tracker] for bug reports and maintenance requests.

## This is so great. I want to help.

Please, see
[contributing](./CONTRIBUTING.md).

[Issue Tracker]: https://github.com/emil-todirascu/karma/issues
[upstream_repo]: https://github.com/karma-runner/karma
