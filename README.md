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

### → Husky configuration

Install husky:

```bash
$ npx husky-init && npm install       # npm
$ yarn dlx husky-init --yarn2 && yarn # Yarn 2+
$ pnpm dlx husky-init && pnpm install # pnpm
```

Add npm script:

```bash
$ npm pkg set scripts.prepare="husky install"  # npm
$ npm pkg set scripts.prepare="husky install"  # Yarn 2+
$ pnpm pkg set scripts.prepare="husky install" # pnpm
```

Which will add lines to your root `package.json`:

```bash
...

"scripts": {
	...
  "prepare": "husky install"
  ...
},

...
```

### → Husky usage

```bash
$ npm prepare  # npm
$ yarn prepare # Yarn 2+
$ pnpm prepare # pnpm
```

<br>

### → Commitizen configuration

Install commitizen dependencies:

```bash
# install with yarn
yarn add -D commitizen cz-conventional-changelog

# install with pnpm
pnpm add -Dw commitizen cz-conventional-changelog
```

Create `.czrc` file and add lines:

```json
{
  "path": "cz-conventional-changelog"
}
```

Add an NPM Script by running command:

```bash
$ pnpm pkg set scripts.commit="git-cz"
```

Which will add lines to your root `package.json`:

```bash
...

"scripts": {
	...
  "commit": "git-cz"
  ...
},

...
```

### → Commitizen usage

```bash
# run with yarn
$ yarn commit

# run with pnpm
$ pnpm commit
```

<br>

### → Configuration of @wayofdev/*-config packages

Follow the `Usage` section via the `README.md` in each package.

Some packages have examples of extended configurations to better support other packages and/or constitute a complete working configuration for projects.

See [eslint](https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/eslint-config#extending), [jest](https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/jest-config#extending), [lint-staged](https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/lint-staged-config#extending), [stylelint](https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/stylelint-config#extending), and [tsconfig](https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/tsconfig-config#extending).

<br>

### → Add NPM Scripts

```bash
$ pnpm pkg set scripts.lint:md="markdownlint --fix **/*.md --ignore node_modules --ignore **/CHANGELOG.md" && \
    pnpm pkg set scripts.lint:js="eslint --fix **/*.{js,jsx,ts,tsx}" && \
    pnpm pkg set scripts.lint:css="stylelint --fix **/*.{css,scss}" && \
    pnpm pkg set scripts.lint:html="htmlhint --config ./node_modules/@waldronmatt/htmlhint-config/index.json **/*.html" && \
    pnpm pkg set scripts.lint:secrets="npx secretlint **/*" && \
    pnpm pkg set scripts.lint="pnpm lint:md && pnpm lint:js && pnpm lint:css && pnpm lint:html && pnpm lint:secrets" && \
    pnpm pkg set scripts.test="jest"
```

<br>

### → Install git hooks

Install husky into project, all hooks and npm scripts associated with configs:

```bash
$ npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "${1}"'

$ cat > .husky/pre-commit << EOL
#!/usr/bin/env sh
. "\$(dirname "\$0")/_/husky.sh"

echo '🏗️👷 Styling your project before committing👷‍🏗️'
echo 'please be patient, this may take a while...'
# Check ESLint Standards
pnpm lint ||
(
    echo '🔨❌ Yoo, you have a problem in your code. Check linter 🔨❌
          Run pnpm lint, add changes and try commit again.';
    false;
)
pnpm lint-staged --concurrent false
echo '🎉 No error found: committing this now.... ✨🚀🏄‍🍻'
EOL
```

<br>

## 🧪 Testing

You can check `Makefile` or `package.json` to get full list of commands for local testing. For testing, you can use these commands to test:

```bash
$ make test
```

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Useful Resources

* This repository is based on [waldronmatt/shareable-configs](https://github.com/waldronmatt/shareable-configs) by [Matthew Waldron](https://github.com/waldronmatt)
* Other monorepo examples:
  * [lerna-release-workflow](https://github.com/jonwa/lerna-release-workflow) - A basic Lerna monorepo with Yarn Workspaces, Conventional Commits and GitHub Actions.
  * [base-configs](https://github.com/demartini/base-configs) - A collection of base configs for code quality and linting tools.
  * [threepio](https://github.com/the-holocron/threepio) - Shareable configurations that are used within the Galaxy.
  * [medly](https://github.com/medly/configs) - Share common configurations across different projects.
  * [code-quality-tools](https://github.com/strvcom/code-quality-tools) - Shareable configurations for various coding-style/best practices/lint tools.
  * [frontend-configs](https://github.com/drivy/frontend-configs) - NPM-Published front-end shareable configurations.

<br>

## 🙆🏼‍♂️ Author Information

This repository was created in **2022** by [lotyp / wayofdev](https://github.com/wayofdev).

<br>

## 🫡 Contributors

<img align="left" src="https://img.shields.io/github/contributors-anon/wayofdev/npm-shareable-configs?style=for-the-badge" alt="Contributors"/>

<a href="https://github.com/wayofdev/docker-nginx/graphs/contributors">
  <img src="https://opencollective.com/wod/contributors.svg?width=890&button=false" alt="Contributors">
</a>

<br>

