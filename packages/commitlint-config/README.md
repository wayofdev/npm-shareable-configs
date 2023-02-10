<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>

<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnext-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/@wayofdev/commitlint-config"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@wayofdev/commitlint-config?style=flat-square"></a>
<a href="https://www.npmjs.com/package/@wayofdev/commitlint-config?activeTab=versions"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@wayofdev/commitlint-config?style=flat-square"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>

<br>

# Shareable Commitlint Config

## 📄 About

A shareable [commitlint](https://commitlint.js.org/#/) configuration for enforcing consistent commit messages in your projects.

### → Purpose

Consistent commit messages are important for project collaboration, maintainability, and project history. This commitlint configuration provides a set of rules to ensure that all commits in your project follow a consistent structure, making it easier for your team to understand what changes were made and why.

<br>

## 💿 Installation

To use this configuration, you'll need to install the `@commitlint/cli` package as a devDependency in your project:

```bash
# Install as dev-dependency into root of monorepo
$ pnpm add -wD @commitlint/cli @wayofdev/commitlint-config
```

This package should be added to the root of your monorepo, where you have a file `commitlint.config.js` and a `package.json` file. Within your monorepo, you should have a structure with directories for your apps and packages, such as:

```bash
.
├── commitlint.config.js (root)
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

1. To configure the `commitlint.config.js` file, include the following line:

   ```javascript
   module.exports = {
     extends: ["@wayofdev/commitlint-config"],
   }
   ```

   This extends the `@wayofdev/commitlint-config` configuration and uses its [pre-defined configuration](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/commitlint-config/index.js).

   Alternatively the configuration can be defined in a `commitlint.config.js`, `.commitlintrc.js`, `.commitlintrc`, `.commitlintrc.json`, `.commitlintrc.yml` file or a `commitlint` field in `package.json`.

2. Install Husky

   Install `husky` as devDependency, a handy git hook helper available on npm.

   ```bash
   # Install as dev-dependency into root of monorepo
   $ pnpm add -wD husky is-ci

   # Activate hooks
   $ pnpm husky install
   ```

3. Add hook

   ```bash
   $ npx husky add .husky/commit-msg 'pnpm commitlint --edit "${1}"'
   ```

4. Add scripts to `package.json`

   ```bash
   $ pnpm pkg set scripts.lint:commits="pnpm commitlint --from HEAD~1 --to HEAD --verbose"
   $ pnpm pkg set scripts.prepare="is-ci || husky install"
   ```

   <br>

## 💻 Usage

### → Test simple usage

For a first simple usage test of commitlint you can do the following:

```bash
# using pnpm
$ pnpm commitlint --from HEAD~1 --to HEAD --verbose

# or, using npx
$ npx commitlint --from HEAD~1 --to HEAD --verbose

# or, if script was added
$ pnpm lint:commits
```

This will check your last commit and return an error if invalid or a positive output if valid.

### → Test the hook

You can test the hook by simply committing. You should see something like this if everything works.

```bash
$ git commit -m "foo: this will fail"
husky > commit-msg (node v10.1.0)
No staged files match any of provided globs.
⧗   input: foo: this will fail
✖   type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky > commit-msg hook failed (add --no-verify to bypass)
```

<br>

## 🛠️ Extending

This shows, how config can be extended with your custom rules.

**`commitlint.config.js`**

```js
module.exports = {
  extends: ["@wayofdev/commitlint-config"],
  rules: {
    "body-leading-blank": [2, "always"],
  },
}
```

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Credits and Useful Resources

Based on:

- [shareable-configs](https://github.com/waldronmatt/shareable-configs) from [waldronmatt](https://github.com/waldronmatt)

Guides:

- [Official commitlint setup guide](https://commitlint.js.org/#/./guides-local-setup?id=guides-local-setup)

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
