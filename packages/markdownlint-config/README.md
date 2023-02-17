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

# Shareable Markdownlint Config

## 📄 About

Shareable configuration package for [markdownlint](https://github.com/DavidAnson/markdownlint) — a popular linter for Markdown files.

This package provides a consistent and standardized configuration for Markdown linters across projects. By using this package, you can ensure that your Markdown files adhere to the same set of rules and guidelines, improving their readability and maintainability.

### → Purpose

- Make it easy for developers to create Markdown files that meet a minimum standard of quality
- Provide a consistent and standardized configuration for Markdown linters across projects
- Save time and effort by avoiding the need to manually configure markdownlint for each project
- Improve the readability and maintainability of Markdown files

<br>

## 💿 Installation

To use this configuration, you'll need to install `@wayofdev/markdownlint-config` as a development dependency in your mono-repository.

```bash
# Install as dev-dependency in the root of the mono-repository
$ pnpm add -wD \
	markdownlint \
	markdownlint-cli \
	@wayofdev/markdownlint-config
```

This package should be installed in the root of your mono-repository, where you will create a file `.markdownlint.json`. Within your monorepo, you should have a structure with directories for your apps and packages, such as:

```bash
.
├── .markdownlint.json (root)
├── package.json (root)
├── apps
│   └── my-first-app
│       ├── package.json
│       └── ... (other app files)
└── packages
    └── my-first-package
        ├── package.json
        └── ... (other package files)
```

### → Configure

1. Create `.markdownlint.json` file in root of mono-repository and add lines:

   ```json
   {
     "extends": "./node_modules/@wayofdev/markdownlint-config/index.json"
   }
   ```

2. Add scripts to your `package.json`:

   ```bash
   pnpm pkg set scripts.lint:md="markdownlint --fix **/*.md --ignore '**/node_modules/**' --ignore '**/CHANGELOG.md'"
   ```

<br>

## 💻 Usage

### → Running

To manually run linter, use command:

```bash
pnpm run lint:md
```

### → Lint-staged

Config can be added to your lint-staged workflow.

**`lint-staged.config.js`**

```js
module.exports = {
  '*.md': ['prettier --cache --write', 'markdownlint'],
}
```

### → Extending

**`.markdownlint.json`**

```bash
{
  "extends": "./node_modules/@wayofdev/markdownlint-config/index.json",
  "MD013": false,
}
```

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Credits and Useful Resources

Based on:

- [shareable-configs](https://github.com/waldronmatt/shareable-configs) from [waldronmatt](https://github.com/waldronmatt)
- configs by [belgattitude](https://github.com/belgattitude) from his repositories

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
