Karma runs on [Node.js] and is available as an [npm] package.

## Installing Node.js

On Mac or Linux we recommend using [NVM](https://github.com/creationix/nvm). On Windows, download Node.js
from [the official site](https://nodejs.org/) or use the [NVM PowerShell Module](https://www.powershellgallery.com/packages/nvm).

Karma works on all [LTS releases](https://nodejs.org/en/about/releases/) of Node.js.

## Installing the fork package and plugins

The recommended approach is to install this fork (and all the plugins your project needs) locally in
the project's directory.

```bash
# Install this fork:
$ npm install karma-maintained --save-dev

# Install plugins that your project needs:
$ npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev

```

This will install `karma-maintained`, `karma-jasmine`, `karma-chrome-launcher` and `jasmine-core` packages into `node_modules` in your current
working directory and also save these as `devDependencies` in `package.json`, so that any
other developer working on the project will only have to do `npm install` in order to get all these
dependencies installed.

```bash
# Run Karma:
$ npx karma start
```

## Commandline Interface

You can run the local binary with `npx karma` from your project directory.

```bash
$ npx karma --version
```

This always uses the project-local version installed in your `devDependencies`.

[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[NVM]: https://github.com/creationix/nvm
[FAQ]: ./faq.html
