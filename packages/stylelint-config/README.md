<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>



<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnext-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/@wayofdev/stylelint-config"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@wayofdev/stylelint-config?style=flat-square"></a>
<a href="https://www.npmjs.com/package/@wayofdev/stylelint-config?activeTab=versions"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@wayofdev/stylelint-config?style=flat-square"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>

<br>

# Shareable Stylelint Config

This npm package provides a set of shareable configurations for [Stylelint](https://stylelint.io/) 15+ — a linter for CSS and SCSS.

<br>

## 📄 About

Collection of stylelint configurations that can be used to enforce consistent styling across CSS and SCSS files.

The configurations provided in this package are designed to be flexible and easily extendable, allowing developers to customize the rules to fit their specific needs.

### → Purpose

Provide a set of opinionated yet flexible configurations for stylelint that help developers to maintain consistent code styling and avoid common errors. The configurations provided in this package:

- Provide a solid foundation for a project's code styling that can be extended and modified as needed
- Enforce common best practices for CSS and SCSS development, such as using consistent indentation, avoiding vendor prefixes, and avoiding unnecessary specificity
- Catch common errors, such as missing units for numeric values, using invalid colors, and using unsupported or deprecated CSS features
- Help developers to maintain consistency across their codebase by providing clear and consistent rules for code styling.

<br>

## 💿 Installation

To use `@wayofdev/stylelint-config` in an app that uses CSS or SCSS, you need to install `stylelint` and `@wayofdev/stylelint-config` in the app's directory within the monorepository.

For example, if you have a Next.js app located in `apps/web`, you would install `stylelint` and `@wayofdev/stylelint-config` in the `apps/web` directory using the following command:

```bash
pnpm --filter=web add -D stylelint @wayofdev/stylelint-config
```

<br>

## 💻 Usage

You can use one of the provided configurations by adding it to your `stylelint` configuration file.

For example, to use the `@wayofdev/stylelint-config/scss` configuration for your Next.js app, add the following to your `apps/web/.stylelintrc.js` file:

### → CSS

```js
module.exports = {
  extends: "@wayofdev/stylelint-config/css",
}
```

### → SCSS

```js
module.exports = {
  extends: "@wayofdev/stylelint-config/scss",
}
```

You can also customize the rules provided in the configurations or create your own configuration that extends one of the provided configurations. For more information on how to configure `stylelint`, see the [stylelint configuration documentation](https://stylelint.io/user-guide/configure).

### → Extending

You can extend one of the provided configurations in `@wayofdev/stylelint-config` by adding an `overrides` section to your `stylelint` configuration file. For example, to use a mixed CSS/SCSS configuration that ignores files in the `dist` directory, add the following to your `apps/web/.stylelintrc.js` file:

```js
module.exports = {
  ignoreFiles: ["dist/**"],
  extends: "@wayofdev/stylelint-config/scss",
  overrides: [
    {
      files: ["**/*.css"],
      extends: "@wayofdev/stylelint-config/css",
    },
  ],
}
```

This configuration will extend the `@wayofdev/stylelint-config/scss` configuration for SCSS files and the `@wayofdev/stylelint-config/css` configuration for CSS files, and will ignore all files in the `dist` directory.

### → Add a NPM Script

To add an NPM script for running `stylelint` use command, which will add the `lint:styles` script to the `scripts` section of your `package.json`.

```bash
pnpm pkg set scripts.lint:styles="stylelint --fix **/*.{css,scss}"
```

This will run `stylelint` on all CSS and SCSS files in your app's directory and its subdirectories. You can customize the files and directories to be linted as needed.

### → Add Pre-commit Hook

To automatically lint files with Stylelint before committing them, you can use `lint-staged` and add it to your pre-commit hook. Here's how:

1. Follow the installation instructions for `lint-staged` in the [@wayofdev/lint-staged-config](https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/lint-staged-config) package. This package provides a pre-configured `lint-staged` configuration that includes [Husky](https://github.com/typicode/husky) and other tools.

2. Add the following configuration to a `lint-staged.config.js` file at each application or package, that uses css or scss:

   ```js
   module.exports = {
     '**/*.{css,scss}': [`prettier --cache --write`, `stylelint --cache --fix`],
   }
   ```

   This will configure `lint-staged` to run Stylelint on all staged files in your monorepository.

<br>

## 🚗 Under The Hood

Under the hood, these configurations include various plugins and extends to enforce a range of best practices and standards for CSS and SCSS development.

### `css.js`

- **Plugins**
  - `stylelint-order`
  - `stylelint-no-unsupported-browser-features`
  - `stylelint-high-performance-animation`
- **Extends**
  - `stylelint-config-standard`
  - `@double-great/stylelint-a11y/recommendedstylelint-a11y`

### `scss.js`

- **Plugins**
  - `stylelint-order`
  - `stylelint-no-unsupported-browser-features`
  - `stylelint-high-performance-animation`
- **Extends**
  - `stylelint-config-standard-scss`
  - `stylelint-config-sass-guidelines`
  - `@double-great/stylelint-a11y/recommended`

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Credits and Useful Resources

Based on:

- [shareable-configs](https://github.com/waldronmatt/shareable-configs) from [waldronmatt](https://github.com/waldronmatt)

Related projects:

- [husky](https://typicode.github.io/husky/#/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [@wayofdev/lint-staged-config](https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/lint-staged-config)

This package builds on the work of others to provide a pre-configured Secretlint configuration that can be easily shared and reused across different projects. The related projects listed above may also be useful for integrating Secretlint into your project, particularly if you're using Git and want to automatically run Secretlint before committing changes.

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

