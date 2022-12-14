<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/npm-shareable-configs/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/npm-shareable-configs/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>
<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnpm-shareable-configs%2Fbadge&style=flat-square"/></a>
<a href="https://github.com/wayofdev/npm-shareable-configs/tags"><img src="https://img.shields.io/github/v/tag/wayofdev/npm-shareable-configs?sort=semver&style=flat-square" alt="Latest Version"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
<a href="#"><img alt="Commits since latest release" src="https://img.shields.io/github/commits-since/wayofdev/npm-shareable-configs/latest?style=flat-square"></a>
</div>

<br>

# NPM Shareable Configs

This repository shareable configurations with fully automated package publishing to the `NPM` Registry.

<br>

## 🚀 Featured Packages

* browserslist-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Fbrowserslist-config%2Fpackage.json&style=flat-square)
  * [browserslist/browserslist](https://github.com/browserslist/browserslist) — share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env

* commitlint-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Fcommitlint-config%2Fpackage.json&style=flat-square)
  * [commitlint.js](https://commitlint.js.org/#/) — helps your team adhere to a commit convention.

* eslint-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Feslint-config%2Fpackage.json&style=flat-square)
  * [eslint](https://eslint.org/) — statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

* htmlhint-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Fhtmlhint-config%2Fpackage.json&style=flat-square)
  * [htmlhint](https://htmlhint.com) — static code analysis tool you need for your HTML

* lint-staged-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Flint-staged-config%2Fpackage.json&style=flat-square)
  * [lint-staged](https://github.com/okonet/lint-staged) — run linters on git staged files

* markdownlint-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Fmarkdownlint-config%2Fpackage.json&style=flat-square)
  * [davidanson/markdownlint](https://github.com/DavidAnson/markdownlint) — a Node.js style checker and lint tool for Markdown/CommonMark files

* postcss-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Fpostcss-config%2Fpackage.json&style=flat-square)
  * [postcss](https://postcss.org/) — add vendor prefixes to CSS rules using values from Can I Use. [Autoprefixer](https://github.com/postcss/autoprefixer) will use the data based on current browser popularity and property support to apply prefixes for you.

* prettier-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Fprettier-config%2Fpackage.json&style=flat-square)
  * [prettier](https://prettier.io/) — an opinionated code formatter, supports many langauges

* secretlint-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Fsecretlint-config%2Fpackage.json&style=flat-square)
  * [secretlint/secretlint](https://github.com/secretlint/secretlint) — pluggable linting tool to prevent committing credential

* stylelint-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Fsecretlint-config%2Fpackage.json&style=flat-square)
  * [stylelint](https://stylelint.io) — a mighty, modern linter that helps you avoid errors and enforce conventions in your styles

* tsconfig-config ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wayofdev/npm-shareable-configs?filename=packages%2Ftsconfig-config%2Fpackage.json&style=flat-square)
  * [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) — typescript configuration for projects


<br>

## 💿 Installation

Install all configs and associated packages as development dependencies (**excludes** Webpack):

### → with yarn

```bash
$ yarn add -D \
    browserslist \
    @commitlint/cli \
    eslint \
    htmlhint \
    lint-staged \
    markdownlint \
    postcss \
    prettier \
    secretlint \
    stylelint \
    typescript \
    @wayofdev/browserslist-config \
    @wayofdev/commitlint-config \
    @wayofdev/eslint-config \
    @wayofdev/htmlhint-config \
    @wayofdev/lint-staged-config \
    @wayofdev/markdownlint-config \
    @wayofdev/postcss-config \
    @wayofdev/prettier-config \
    @wayofdev/secretlint-config \
    @wayofdev/stylelint-config\
    @wayofdev/tsconfig-config
```

### → with pnpm in monorepo

Execute in root dir of project:

```bash
$ pnpm add -Dw \
    browserslist \
    @commitlint/cli \
    eslint \
    htmlhint \
    lint-staged \
    markdownlint \
    postcss \
    prettier \
    secretlint \
    stylelint \
    typescript \
    @wayofdev/browserslist-config \
    @wayofdev/commitlint-config \
    @wayofdev/eslint-config \
    @wayofdev/htmlhint-config \
    @wayofdev/lint-staged-config \
    @wayofdev/markdownlint-config \
    @wayofdev/postcss-config \
    @wayofdev/prettier-config \
    @wayofdev/secretlint-config \
    @wayofdev/stylelint-config\
    @wayofdev/tsconfig-config
```

<br>

## 💻 Usage

