<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>

<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnext-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/@wayofdev/lint-staged-config"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@wayofdev/lint-staged-config?style=flat-square"></a>
<a href="https://www.npmjs.com/package/@wayofdev/lint-staged-config?activeTab=versions"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@wayofdev/lint-staged-config?style=flat-square"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>

<br>

# Shareable Lint-Staged Config

## 📄 About

Package that contains shareable configuration for [lint-staged](https://github.com/okonet/lint-staged) — a popular tool for running linters on staged Git files.

It is designed to provide a set of ready-to-use configuration files that can be easily imported and used in your projects. This package also includes a helper module with utility functions to ease the use of [lint-staged](https://github.com/okonet/lint-staged) with tools like [ESLint](https://eslint.org), [Prettier](https://prettier.io), [StyleLint](https://stylelint.io) and [SecretLint](https://github.com/secretlint/secretlint).

### → Purpose

- Provide developers with a set of easy-to-use and shareable lint-staged configuration files. These configuration files can help developers enforce a consistent coding style and catch common errors before they are committed to source control.
- Included helper module provides utility functions for working with [lint-staged](https://github.com/okonet/lint-staged) and popular linting and formatting tools.
- Functions of package simplify the process of setting up `lint-staged` and help ensure that it is used effectively in your projects.

<br>

## 💿 Installation

To use this configuration, you'll need to install `@wayofdev/lint-staged-config` as a development dependency in your mono-repository.

```bash
# Install as dev-dependency in the root of the mono-repository
$ pnpm add -wD @lint-staged @wayofdev/lint-staged-config
```

This package should be installed in the root of your mono-repository, where you will create a file `lint-staged.config.js`. Within your monorepo, you should have a structure with directories for your apps and packages, such as:

```bash
.
├── lint-staged.config.js (root)
├── package.json (root)
├── apps
│   └── my-first-app
│       ├── lint-staged.config.js (overrides lint-staged.config.js from root folder)
│       ├── package.json
│       └── ... (other app files)
└── packages
    └── my-first-package
        ├── lint-staged.config.js (overrides lint-staged.config.js from root folder)
        ├── package.json
        └── ... (other package files)
```

<br>

### → Configure

1. Create `lint-staged.config.js` file in root of mono-repository and add lines:

   ```javascript
   // @ts-check

   /**
    * This is the base lint-staged rules config and just includes prettier by default.
    * A good practice is to override this base configuration in each package and/or application
    * where we are able to add customization depending on the nature of the project (eslint...).
    *
    * {@link https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo}
    */

   const {
     concatFilesForPrettier,
   } = require("@wayofdev/lint-staged-config/src/lint-staged.common.js")

   /**
    * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
    */
   const rules = {
     "**/*.{json,md,mdx,css,html,yml,yaml,scss,ts,js,tsx,jsx,mjs}": filenames => {
       return [`prettier --write ${concatFilesForPrettier(filenames)}`]
     },
     "*": () => {
       return [`secretlint`]
     },
   }

   module.exports = rules
   ```

2. @todo

3. @todo

<br>

## 💻 Usage

@todo

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Credits and Useful Resources

Based on:

- [shareable-configs](https://github.com/waldronmatt/shareable-configs) from [waldronmatt](https://github.com/waldronmatt)
- configs by [belgattitude](https://github.com/belgattitude) from his repositories
- various best practices

<br>

## 🙆🏼‍♂️ Author Information

This repository was created in **2023** by [lotyp / wayofdev](https://github.com/wayofdev).

<br>

## 🙌 Want to Contribute?

Thank you for considering contributing to the wayofdev community!
We are open to all kinds of contributions. If you want to:

- 🤔 Suggest a feature
- 🐛 Report an issue
- 📖 Improve documentation
- 👨‍💻 Contribute to the code

You are more than welcome. Before contributing, kindly check our [guidelines](https://next-starter-tpl-docs.wayof.dev/contribution).
