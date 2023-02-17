<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only" alt="">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only" alt="">
</div>

<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnext-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/@wayofdev/htmlhint-config"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@wayofdev/htmlhint-config?style=flat-square"></a>
<a href="https://www.npmjs.com/package/@wayofdev/htmlhint-config?activeTab=versions"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@wayofdev/htmlhint-config?style=flat-square"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>

<br>

# Shareable Htmlhint Config

## 📄 About

Package that contains shareable configurations for [HTMLHint](https://github.com/htmlhint/HTMLHint) — a popular linting tool that helps to identify and fix problems in your HTML code.

### → Purpose

This package aims to provide a shared set of rules for [HTMLHint](https://github.com/htmlhint/HTMLHint) to ensure consistent coding practices across a team or organization.

- Provide a shared configuration that helps avoid inconsistencies and ensures that everyone follows the latest best practices and guidelines.
- Make it easier for teams to use [HTMLHint](https://github.com/htmlhint/HTMLHint) effectively and improve the quality of their HTML code.

<br>

## 💿 Installation

To use this configuration, you'll need to install the `htmlhint` and `@wayofdev/htmlhint-config` packages as devDependencies in your project. These packages should be installed in the `package.json` file of the specific app or package that needs them:

```bash
pnpm --filter=my-first-app add -D htmlhint @wayofdev/htmlhint-config
```

This package should be added to the root of your monorepo, where you have a file `.htmlhintrc` and a `package.json` file. Within your monorepo, you should have a structure with directories for your apps and packages, such as:

```bash
.
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

To configure the `htmlhint`, add script to `package.json`

```bash
pnpm pkg set scripts.lint:html="htmlhint --config ./node_modules/@wayofdev/htmlhint-config/index.json **/*.html"
```

<br>

## 💻 Usage

You can run the `htmlhint` command manually using the following `pnpm` command:

```bash
pnpm --filter=my-first-app lint:html
```

Alternatively, you can add it to [lint-staged](https://github.com/okonet/lint-staged) configuration to run together with [Husky](https://typicode.github.io/husky/#/) git hooks.

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Credits and Useful Resources

Based on:

- [shareable-configs](https://github.com/waldronmatt/shareable-configs) from [waldronmatt](https://github.com/waldronmatt)

Related projects:

- [htmlhint]([https://htmlhint.com)
- [husky](https://typicode.github.io/husky/#/)
- [lint-staged](https://github.com/okonet/lint-staged)

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
