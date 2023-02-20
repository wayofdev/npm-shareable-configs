

<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>



<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnext-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/@wayofdev/secretlint-config"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@wayofdev/secretlint-config?style=flat-square"></a>
<a href="https://www.npmjs.com/package/@wayofdev/secretlint-config?activeTab=versions"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@wayofdev/secretlint-config?style=flat-square"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>

<br>

# Shareable Secretlint Config

## 📄 About

Shareable configuration for [Secretlint](https://github.com/secretlint/secretlint) — a tool for linting and fixing secrets in your codebase.

The configuration provides a set of rules and settings that can be easily shared and reused across different projects, reducing the amount of boilerplate code needed to set up [Secretlint](https://github.com/secretlint/secretlint) in each project.

### → Purpose

Simplify the process of setting up Secretlint in a project by providing a pre-configured set of rules and settings. This package can be useful for developers who want to:

- Use Secretlint in their project but don't want to spend time configuring it from scratch
- Share Secretlint configuration across multiple projects
- Avoid maintaining and updating Secretlint configuration in every project manually

The configuration includes a set of preconfigured rules, such as `@secretlint/secretlint-rule-preset-recommend`, that check for common mistakes and prevent secrets from being accidentally committed to the repository.

<br>

## 💿 Installation

To use Secretlint with `@wayofdev/secretlint-config` in a mono-repository, you can install them at the root level and configure it to lint only the packages that require it. Follow these steps:

1. Install `secretlint` and `@wayofdev/secretlint-config` as development dependencies at the root of your mono-repository using the package manager of your choice (`npm`, `yarn`, `pnpm`, etc.). For example, using `pnpm`:

   ```bash
   pnpm add -Dw secretlint @wayofdev/secretlint-config
   ```

2. Create a `.secretlintrc.json` configuration file in the root of your mono-repository with the following content:

   ```json
   {
     "rules": {},
     "rulesConfig": {},
     "plugins": [],
     "processor": "",
     "noDefaultConfig": true,
     "configs": {
       "@wayofdev/secretlint-config": true
     },
     "ignore": [],
     "include": [
       "packages/*/**",
       "apps/*/**"
     ]
   }
   ```

   In this example, Secretlint is configured to use the `@wayofdev/secretlint-config` package as its configuration, and to lint only the directories in the `packages` and `apps` folders of the mono-repository.

   You can adjust the `include` and `exclude` patterns to match your specific mono-repository structure and exclude files or directories that don't need to be linted.

3. Add a linting script to the `scripts` section of the `package.json` file at the root of your mono-repository:

   ```bash
   pnpm pkg set scripts.lint:secrets="secretlint"
   ```

   This will add the `lint:secrets` script to the `scripts` section of your `package.json`.

That's it! You can now run the `lint:secrets` script to lint the relevant packages in your mono-repository.

<br>

### → Add Pre-commit Hook

To automatically lint files with Secretlint before committing them, you can use `lint-staged` and add it to your pre-commit hook. Here's how:

1. Follow the installation instructions for `lint-staged` in the [@wayofdev/lint-staged-config](https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/lint-staged-config) package. This package provides a pre-configured `lint-staged` configuration that includes [Husky](https://github.com/typicode/husky) and other tools.

2. Add the following configuration to a `lint-staged.config.js` file at the root of your mono-repository:

   ```js
   module.exports = {
     '*': 'secretlint',
   }
   ```
   
   This will configure `lint-staged` to run Secretlint on all staged files in your mono-repository.

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
