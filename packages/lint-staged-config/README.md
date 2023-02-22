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
$ pnpm add -wD lint-staged @wayofdev/lint-staged-config

# Optional, to lint for secrets and sort package.json files
$ pnpm add -wD secretlint sort-package-json
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

### → Configure

1. Create `lint-staged.config.js` file in root of mono-repository and add lines:

   ```javascript
   const { concatFilesForPrettier } = require("@wayofdev/lint-staged-config")

   const json = require("@wayofdev/lint-staged-config/json")
   const yaml = require("@wayofdev/lint-staged-config/yaml")
   const secrets = require("@wayofdev/lint-staged-config/secrets")
   const md = require("@wayofdev/lint-staged-config/md")

   const rules = {
     ...json,
     ...yaml,
     ...secrets,
     ...md,
     "**/*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}": filenames => {
       return [`prettier --write ${concatFilesForPrettier(filenames)}`]
     },
   }

   module.exports = rules
   ```

2. If needed, override the base `lint-staged.config.js` in each package or application.

   Example `lint-staged.config.js` in folder `./packages/eslint-config-bases/`

   ```typescript
   const { getEslintFixCmd } = require("@wayofdev/lint-staged-config")

   const json = require("@wayofdev/lint-staged-config/json")
   const yaml = require("@wayofdev/lint-staged-config/yaml")
   const secrets = require("@wayofdev/lint-staged-config/secrets")
   const md = require("@wayofdev/lint-staged-config/md")
   const html = require("@wayofdev/lint-staged-config/html")

   /**
    * @typedef {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>} LintRule
    */
   const rules = {
     "**/*.{js,jsx,ts,tsx}": (/** @type {any} */ filenames) => {
       return getEslintFixCmd({
         cwd: __dirname,
         fix: true,
         cache: true,
         // when autofixing staged-files a good tip is to disable react-hooks/exhaustive-deps, cause
         // a change here can potentially break things without proper visibility.
         rules: ["react-hooks/exhaustive-deps: off"],
         maxWarnings: 25,
         files: filenames,
       })
     },
     ...json,
     ...secrets,
     ...md,
     ...yaml,
     ...html,
   }

   module.exports = rules
   ```

3. Set up the `pre-commit` git hook to run _lint-staged_ using [Husky](https://github.com/typicode/husky) — popular choice for configuring git hooks

   Install `husky` as dev-dependency into root of monorepo

   ```bash
   pnpm add -wD husky is-ci
   ```

   Activate hooks:

   ```bash
   pnpm husky install
   ```

   Add lint-staged hook:

   ```bash
   npx husky add .husky/pre-commit 'pnpm lint-staged --verbose --concurrent false'
   ```

   Read more about git hooks [here](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

4. Don't forget to commit changes to `package.json` and `.husky` to share this setup with your team!

<br>

## 💻 Usage

After installing `@wayofdev/lint-staged-config` and setting up the `pre-commit` git hook with Husky, you can now run the following command:

```bash
git add . && git commit -am 'feat: adding lint-staged'
```

This will automatically trigger the checks defined in your `lint-staged.config.js` file for all the files that have been staged for commit. This will help you catch common errors and enforce a consistent coding style before the code is committed to source control.

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
