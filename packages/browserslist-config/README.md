<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>
<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnext-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/@wayofdev/browserslist-config"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@wayofdev/browserslist-config?style=flat-square"></a>
<a href="https://www.npmjs.com/package/@wayofdev/browserslist-config?activeTab=versions"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@wayofdev/browserslist-config?style=flat-square"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>

<br>

# Shareable Browserslist Config

## 📄 About

Shareable configuration for [Browserslist](https://github.com/browserslist/browserslist) — a popular library for defining the target browsers for your projects. It helps you to maintain consistency across different projects and ensure that your projects support the same set of browsers.

This repository is used for [wayofdev](https://github.com/wayofdev) projects and can be used also by others.

### → Purpose

The purpose is to provide a single, consistent configuration for all your projects. It eliminates the need to define the target browsers in each project, which saves time and reduces the risk of errors.

This package contains a pre-defined set of target browsers that are widely used, so you can include it in your projects and get started right away.

Additionally, it makes it easy to update the target browsers across all your projects when needed.

Overall, Browserslist Config helps maintain a high-quality user experience for your users, regardless of which browsers they use.

<br>

## 💿 Installation

Add as dev-dependency to your monorepo

```bash
# Install as dev-dependency into root of monorepo
$ pnpm add -wD browserslist @wayofdev/browserslist-config
```

This package should be added to the root of your monorepo, where you have a file `.browserslistrc` and a `package.json` file. Within your monorepo, you should have a structure with directories for your apps and packages, such as:

```bash
.
├── .browserslistrc (root)
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

<br>

### → Configure

1. To configure the `.browserslistrc` file, include the following line:

   ```typescript
   extends @wayofdev/browserslist-config
   ```

   This extends the `@wayofdev/browserslist-config` configuration and uses its pre-defined browser support ranges.

2. For each package or app in your monorepository that needs to use the `browserslist` package, add a `browserslist` field in the `package.json` file with the desired browser support ranges. The `package.json` file is located in either the `./packages/[package-name]` or `./apps/[app-name]` directory.

   **For example:**

   ```json
   {
     ...
     "browserslist": [
     	"extends ../../.browserslistrc"
   	]
   }
   ```

<br>

### → Scripts

Adding the following script to your root `package.json` file makes it easier to run the `browserslist` command in your monorepository:

```bash
# Adds browserslist command
$ pnpm pkg set scripts.lint:browsers="browserslist"
```

For `npm` users, replace `pnpm` with `npm` in the above command.

This script allows you to run the `browserslist` command by simply typing `pnpm run lint:browsers` (or `npm run lint:browsers` for `npm` users) in the terminal.

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Credits and Useful Resources

Based on:

- [shareable-configs](https://github.com/waldronmatt/shareable-configs) from [waldronmatt](https://github.com/waldronmatt)
- other, various best practices

Examples:

- [browserslist/browserslist-example](https://github.com/browserslist/browserslist-example#eslint)

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
