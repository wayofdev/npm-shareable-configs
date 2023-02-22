<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/npm-shareable-configs/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only" alt="Logo for light mode">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/npm-shareable-configs/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only" alt="Logo for dark mode">
</div>
<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnpm-shareable-configs%2Fbadge&style=flat-square"/></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>

<br>

# NPM Shareable Configs

This repository shareable contains configurations with fully automated package publishing to the `NPM` Registry.

## 📄 About

This is a mono-repository that contains a collection of separate, shareable npm packages that provide various configuration files for commonly used tools in modern web development.

### → Purpose

- This repository serves the following purposes:

  - Provides a centralized location for managing configuration files for commonly used tools in web development.
  - Allows for easy sharing and reuse of configurations across multiple projects.
  - Ensures consistency and adherence to best practices in your code.
  - Saves time by providing pre-configured packages that work well together.
  - Can improve the quality of your code and streamline your development workflow.
  - Suitable for both beginner and experienced web developers.


<br>

## 🚀 Featured Packages

| Tool                                                                        | Package                                                                                                                     | Version                                                                                                                     | Description                                                                                                                                                        |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [browserslist](https://github.com/browserslist/browserslist)                | [browserslist-config](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/browserslist-config/README.md) | ![npm](https://img.shields.io/npm/v/@wayofdev/browserslist-config?style=flat-square&labelColor=292a44&color=663399&label=v) | Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env                                                         |
| [commitlint](https://commitlint.js.org/#/)                                  | [commitlint-config](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/commitlint-config/README.md)     | ![npm](https://img.shields.io/npm/v/@wayofdev/commitlint-config?style=flat-square&labelColor=292a44&color=663399&label=v)   | Helps your team adhere to a commit convention.                                                                                                                     |
| [eslint](https://eslint.org/)                                               | [eslint-config-bases](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/eslint-config-bases/README.md) | ![npm](https://img.shields.io/npm/v/@wayofdev/eslint-config-bases?style=flat-square&labelColor=292a44&color=663399&label=v) | Statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline. |
| [htmlhint](https://htmlhint.com/)                                           | [htmlhint-config](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/htmlhint-config/README.md)         | ![npm](https://img.shields.io/npm/v/@wayofdev/htmlhint-config?style=flat-square&labelColor=292a44&color=663399&label=v)     | Static code analysis tool you need for your HTML.                                                                                                                  |
| [lint-staged](https://github.com/okonet/lint-staged)                        | [lint-staged-config](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/lint-staged-config/README.md)   | ![npm](https://img.shields.io/npm/v/@wayofdev/lint-staged-config?style=flat-square&labelColor=292a44&color=663399&label=v)  | Run linters on git staged files.                                                                                                                                   |
| [markdownlint](https://github.com/DavidAnson/markdownlint)                  | [markdownlint-config](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/markdownlint-config/README.md) | ![npm](https://img.shields.io/npm/v/@wayofdev/markdownlint-config?style=flat-square&labelColor=292a44&color=663399&label=v) | A Node.js style checker and lint tool for Markdown/CommonMark files.                                                                                               |
| [postcss](https://postcss.org/)                                             | [postcss-config](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/postcss-config/README.md)           | ![npm](https://img.shields.io/npm/v/@wayofdev/postcss-config?style=flat-square&labelColor=292a44&color=663399&label=v)      | Add vendor prefixes to CSS rules using values from Can I Use. Autoprefixer will use the                                                                            |
| [secretlint](https://github.com/secretlint/secretlint/)                     | [secretlint-config](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/secretlint-config/README.md)     | ![npm](https://img.shields.io/npm/v/@wayofdev/secretlint-config?style=flat-square&labelColor=292a44&color=663399&label=v)   | Pluggable linting tool to prevent committing credential                                                                                                            |
| [stylelint](https://stylelint.io/)                                          | [stylelint-config](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/stylelint-config/README.md)       | ![npm](https://img.shields.io/npm/v/@wayofdev/stylelint-config?style=flat-square&labelColor=292a44&color=663399&label=v)    | Linter that helps you avoid errors and enforce conventions in your styles                                                                                          |
| [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) | [tsconfig-config](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/tsconfig-config/README.md)         | ![npm](https://img.shields.io/npm/v/@wayofdev/tsconfig-config?style=flat-square&labelColor=292a44&color=663399&label=v)     | Typescript configuration for projects                                                                                                                              |

<br>

## 💿 Installation

Looking for an already configured starter template? Check out our project: **[wayofdev/next-starter-tpl](https://github.com/wayofdev/next-starter-tpl)** — Fully configured, ready-to-start template with everything already configured for you!

<br>

This section covers installation when configs contained in this repository are used in a monorepo type of project. Here's an example structure of a monorepo:

```bash
├── package.json (root)
├── apps
│   ├── docs                          # nextra app
│   │   ├── package.json              # @wayofdev/docs
│   │   └── ... (other app files)
│   └── web                           # nextjs app
│       ├── package.json              # @wayofdev/web
│       └── ... (other app files)
└── packages
    ├── ui                            # shared react ui components package
    │   ├── package.json              # @wayofdev/ui
    │   └── ... (other package files)
    └── common-i18n                   # common i18n package
        ├── package.json              # @wayofdev/common-i18n
        └── ... (other package files)
```

### → Root Level Configuration

To install the necessary tools and configurations for your monorepo, follow these steps:

1. Install the required tools as dev-dependencies inside the root of your monorepo:

   ```bash
   $ pnpm add -Dw \
     husky \
     is-ci \
     npm-run-all \
     rimraf \
     sort-package-json \
     turbo \
     prettier
   ```

2. Install [changesets](https://github.com/changesets/changesets) in the root of your monorepo to manage your versioning and changelogs with a focus on monorepos:

   ```bash
   $ pnpm add -Dw \
     @changesets/cli \
     @changesets/changelog-github
   ```

3. Install the necessary config packages with their dependencies that are needed at the root level of your monorepo. Here are some examples:

   **`commitlint:`**

   - Install the `commitlint` configuration package:

     ```bash
     $ pnpm add -Dw \
       @commitlint/cli \
       @wayofdev/commitlint-config
     ```

   - Follow the configuration instructions in the `commitlint-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/commitlint-config/README.md).

   **`eslint:`**

   - Install the `eslint` configuration package:

     ```bash
     $ pnpm add -Dw \
     	eslint \
     	@wayofdev/eslint-config-bases
     ```

   - Follow the configuration instructions in the `commitlint-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/eslint-config-bases/README.md).

   **`secretlint:`** 

   - Install the `secretlint` configuration package:

     ```bash
     $ pnpm add -Dw \
       @secretlint \
       @wayofdev/secretlint-config
     ```

   - Follow the configuration instructions in the `secretlint-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/secretlint-config/README.md).

   **`tsconfig:`**

   - Install the `tsconfig` configuration package:

     ```bash
     $ pnpm add -Dw \
       typescript \
       @wayofdev/tsconfig-config
     ```

   - Follow the configuration instructions in the `tsconfig-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/tsconfig-config/README.md).

   **`lint-staged:`**

   - Install the `lint-staged` configuration package:

     ```bash
     $ pnpm add -Dw \
       lint-staged \
       @wayofdev/lint-staged-config
     ```

   - Follow the configuration instructions in the `lint-staged-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/lint-staged-config/README.md).

   **`markdownlint:`**

   - Install the `markdownlint` configuration package:

     ```bash
     $ pnpm add -Dw \
       markdownlint \
       markdownlint-cli \
       @wayofdev/markdownlint-config
     ```

   - Follow the configuration instructions in the `markdownlint-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/markdownlint-config/README.md).

<br>

### → Per App/Package Configuration

In addition, this repository provides a guide for managing linting in a monorepo, which can be tricky. Most workspaces are likely to contain code that needs to be linted, making it difficult to determine the most efficient way to do so.

To address this, we propose a method that plays to Turborepo's strengths: running lint tasks inside the workspaces, not from root, and sharing as much config as possible between workspaces.

By following this guide, you can ensure that your code is consistently and thoroughly linted, while also leveraging the benefits of a monorepo. This guide is suitable for both beginner and experienced web developers.

1. Install `@wayofdev/eslint-config-bases` to all `apps` and `packages` in monorepo. Following tree structure, from [Installation](https://chat.openai.com/chat/5163a197-1297-45d2-b0be-b7e14441e673#Installation) section

   **`eslint:`**

   ```bash
   $ pnpm \
     --filter="@wayofdev/web" \
     --filter="@wayofdev/docs" \
     --filter="@wayofdev/ui" \
     --filter="@wayofdev/common-i18n" \
     add -D eslint @wayofdev/eslint-config-bases
   ```

   Follow the configuration instructions in the `eslint-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/eslint-config/README.md).

2. Install `@wayofdev/postcss-config` in apps or packages, where it needs to be used. We will install it to `apps/web`, as it contains NextJS application, and we want to add TailwindCSS support, which requires `postcss`:

   **`postcss:`**

   ```bash
   $ pnpm \
     --filter="@wayofdev/web" \
     add -D postcss @wayofdev/postcss-config
   ```

   Follow the configuration instructions in the `postcss-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/postcss-config/README.md).

3. Install `@wayofdev/stylelint-config` in apps or packages, where CSS and/or SCSS is used. We will install it to `apps/web`.

   **`stylelint:`**

   ```bash
   $ pnpm \
     --filter="@wayofdev/web" \
     add -D stylelint @wayofdev/stylelint-config
   ```

   Follow the configuration instructions in the `stylelint-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/stylelint-config/README.md).

4. Install `@wayofdev/htmlhint-config` in apps or packages, where HTML is used.

   **`htmlhint:`**

   ```bash
   $ pnpm \
     --filter="@wayofdev/web" \
     add -D htmlhint @wayofdev/htmlhint-config
   ```

   Follow the configuration instructions in the `htmlhint-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/htmlhint-config/README.md).

5. Install `@wayofdev/browserslist-config` in apps or packages, where you need to check projects against browser compatability.

   **`browserslist:`**

   ```bash
   $ pnpm \
     --filter="@wayofdev/web" \
     add -D browserslist @wayofdev/browserslist-config
   ```

   Follow the configuration instructions in the `browserslist-config` [README.md](https://github.com/wayofdev/npm-shareable-configs/blob/master/packages/browserslist-config/README.md).

Check out [Turbo Guide](https://turbo.build/repo/docs/handbook/linting) about linting in mono-repositories for more information.

<br>

## ⚙️ Configuration

### → Commitlint

Commitlint is a tool that ensures that your commit messages meet certain standards. To configure the `commitlint.config.js` file, follow these steps:

1. Create an empty `commitlint.config.js` file:

   ```bash
   $ touch commitlint.config.js
   ```

2. Paste the following code into the file:

   ```bash
   $ tee -a commitlint.config.js <<EOF
   module.exports = {
     extends: ["@wayofdev/commitlint-config"],
   }
   EOF
   ```

   This will extend the `@wayofdev/commitlint-config` package, which provides a set of commonly used commit message rules. You can customize these rules by modifying the `commitlint.config.js` file.

### → Lint-Staged

Lint-Staged is a tool that allows you to run linters on only the files that have been staged in Git. To configure Lint-Staged, follow these steps:

1. In the root directory of your project, create the file `lint-staged.config.js`:

   ```bash
   $ touch lint-staged.config.js
   ```

2. Add the following contents to `lint-staged.config.js`:

   ```js
   // @ts-check
   
   const {
     concatFilesForPrettier,
     jsonRules,
     secretsRules,
     mdRules,
     yamlRules,
   } = require('@wayofdev/lint-staged-config')
   
   const rules = {
     ...jsonRules,
     ...yamlRules,
     ...secretsRules,
     ...mdRules,
     '**/*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}': filenames => {
       return [`prettier --write ${concatFilesForPrettier(filenames)}`]
     },
   }
   
   module.exports = rules
   ```

### → Husky

Husky is a tool that allows you to set up Git hooks, which are scripts that run automatically when certain Git commands are executed. To configure Husky, follow these steps:

1. Add pnpm scripts to your `package.json` file:

   ```bash
   $ pnpm pkg set scripts.prepare="is-ci || husky install"
   ```

   This will add a `prepare` script that will run the `husky install` command when you run `pnpm install`.

2. Run the `prepare` command once to configure Husky:

   ```bash
   $ pnpm run prepare
   ```

3. Add a pre-commit hook that runs `lint-staged`:

   ```bash
   $ pnpm husky add .husky/pre-commit "pnpm lint-staged --verbose --concurrent false"
   ```

   This will run `lint-staged` on the files that have been staged in Git before you make a commit.

4. Add a commit-msg hook that runs `commitlint`:

   ```bash
   $ pnpm husky add .husky/commit-msg 'pnpm commitlint --edit "${1}"'
   ```

   This will run `commitlint` on the commit message that you write before you make a commit.

By following these steps, you can ensure that your commits meet certain standards and that your code is properly formatted before you make a commit.

<br>

## 🧪 Testing

You can check `Makefile` or `package.json` to get full list of commands for local testing. For testing, you can use these commands to test:

```bash
$ make test
```

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwayofdev%2Fnpm-shareable-configs.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwayofdev%2Fnpm-shareable-configs?ref=badge_large)

<br>

## 🧱 Useful Resources

- This repository is based on:
  - [waldronmatt/shareable-configs](https://github.com/waldronmatt/shareable-configs) by [Matthew Waldron](https://github.com/waldronmatt)
  - [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example) by [belgattitude](https://github.com/belgattitude)

- Other monorepo examples:
  - [base-configs](https://github.com/demartini/base-configs) - A collection of base configs for code quality and linting tools.
  - [threepio](https://github.com/the-holocron/threepio) - Shareable configurations that are used within the Galaxy.
  - [medly](https://github.com/medly/configs) - Share common configurations across different projects.
  - [code-quality-tools](https://github.com/strvcom/code-quality-tools) - Shareable configurations for various coding-style/best practices/lint tools.
  - [frontend-configs](https://github.com/drivy/frontend-configs) - NPM-Published front-end shareable configurations.

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

## 🤑 Sponsors

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <a href="https://prisma.io" target="_blank">
          <img width="128px" src="https://avatars.githubusercontent.com/u/110109081?s=200&v=4" alt="Reproto Logo" /></a><br />
        <div>Reproto</div><br />
        <sub>🎖️ Financial Support</sub>
      </td>
      <td align="center" valign="top">
        <a href="https://varsitybase.com" target="_blank">
          <img width="128px" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/vb-logo.png" alt="VarsityBase Logo" /></a><br />
        <div>VarsityBase</div><br />
        <sub>🎖️ Financial Support</sub>
      </td>
      <td align="center" valign="top">
        <a href="https://vercel.com" target="_blank">
          <img width="128px" src="https://avatars.githubusercontent.com/u/14985020?s=200&v=4" alt="Vercel Logo" /></a><br />
        <div>Vercel</div><br />
        <sub>☁️ Infrastructure Support</sub>
      </td>
      <td align="center" valign="top">
        <a href="https://sentry.io" target="_blank">
          <img width="128px" src="https://avatars.githubusercontent.com/u/1396951?s=200&v=4" alt="Sentry Logo" /></a><br />
        <div>Sentry</div><br />
        <sub>☁️ Infrastructure Support</sub>
      </td>
			<td align="center" valign="top">
        <a href="https://zenhub.com" target="_blank">
          <img width="128px" src="https://avatars.githubusercontent.com/ml/9?s=200&v=4" alt="ZenHub Logo" /></a><br />
        <div>ZenHub</div><br />
        <sub>☁️ Infrastructure Support</sub>
      </td>
    </tr><tr></tr>
  </tbody>
</table>
