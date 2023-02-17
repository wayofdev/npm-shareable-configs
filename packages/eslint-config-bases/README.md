<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>
<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnext-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/@wayofdev/eslint-config-bases"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@wayofdev/eslint-config-bases?style=flat-square"></a>
<a href="https://www.npmjs.com/package/@wayofdev/eslint-config-bases?activeTab=versions"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@wayofdev/eslint-config-bases?style=flat-square"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>
<br>

# Shareable ESLint Config Bases

## 📄 About

Composable eslint config bases for [wayofdev projects](https://github.com/wayofdev) and others.

### → Purpose

The purpose of the package is to provide composable and monorepo friendly [eslint](https://eslint.org/) configurations for JavaScript based projects. It includes features such as performance optimization and the ability to extend pre-defined base configs.

- **Workspace-specific Configuration:** This package enables each workspace in a monorepo to have its own configuration.
- **Configurable:** You can easily create your workspace ESLint config by composing it from pre-defined bases.
- **Convenient:** The use of [@rushstack/eslint-patch] ensures that you don't have to install plugins for each workspace, giving you peace of mind.
- **Efficient:** The performance of the package is improved by enabling plugins based on file naming conventions.

<br>

## 💿 Installation

To install `@wayofdev/eslint-config-bases`, add it as a dev-dependency to your monorepo workspaces and in your root `package.json`:

```bash
# Install as dev-dependency into monorepo root
$ pnpm add -wD \
		@wayofdev/eslint-config-bases \
		npm-run-all

# Install as dev-dependency per workspace (app or package)
$ pnpm --filter=my-first-app add -D @wayofdev/eslint-config-bases
$ pnpm --filter=my-first-package add -D @wayofdev/eslint-config-bases
```

Assuming that you have the following structure:

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

<br>

> PS: if you use graphql rules, add the `@graphql-eslint/eslint-plugin` as well (not done by default as it comes with many transitive deps you might not need)

<br>

### → Scripts

Here are some example scripts you can add to your root `package.json`:

```bash
# Runs md, js and secrets linters
$ pnpm pkg set scripts.lint="run-p lint:turbo lint:md lint:html lint:css lint:secrets lint:package-json"

# Runs lint command using turbo (affects all */packages) with auto-fix and sorts package.json after
$ pnpm pkg set scripts.lint:fix="turbo run lint:fix && pnpm lint:package-json"

# Runs lint only on *.md files
$ pnpm pkg set scripts.lint:md="markdownlint --fix **/*.md --ignore '**/node_modules/**' --ignore '**/CHANGELOG.md'"

# Sorts package.json in project
$ pnpm pkg set scripts.lint:package-json="sort-package-json package.json apps/*/package.json packages/*/package.json"

# Searches only for secrets
$ pnpm pkg set scripts.lint:secrets="secretlint **/*"

# Runs lint command over all packages using turbopack
$ pnpm pkg set scripts.lint:turbo="turbo lint"
```

You can also manually add commands to your workspaces, located in `apps/*` and `packages/*`. For example:

```json
...
"scripts": {
  "lint": "eslint --ext .ts,.js,.cjs,.mjs --cache --cache-location ../../.cache/eslint/eslint-config-bases.eslintcache",
  "lint:fix": "eslint --ext .ts,.tsx,.js,.jsx,.mjs,.cjs,.mts,.cts --fix --cache --cache-location ../../.cache/eslint/eslint-config-bases.eslintcache"
},
...
```

<br>

## 💻 Usage

To create your workspace-specific ESLint configuration, create a file `./apps/my-first-app/.eslintrc.js` or `./apps/my-first-app/.eslintrc.cjs` that extends any of the existing base configs.

For example, if you have a Next.js application, your `.eslintrc.js` would look something like this:

```javascript
// Next line only required if you're using a monorepo
// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
require("@wayofdev/eslint-config-bases/patch/modern-module-resolution");

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns(), '.next', '.out', '/storybook-static'],
  extends: [
    '@wayofdev/eslint-config-bases/typescript',
    '@wayofdev/eslint-config-bases/regexp',
    '@wayofdev/eslint-config-bases/sonar',
    '@wayofdev/eslint-config-bases/jest',
    '@wayofdev/eslint-config-bases/rtl',
    '@wayofdev/eslint-config-bases/react',
    '@wayofdev/eslint-config-bases/react-query,
    '@wayofdev/eslint-config-bases/tailwind',
    '@wayofdev/eslint-config-bases/mdx',
    // '@wayofdev/eslint-config-bases/graphql-schema',
    // '@wayofdev/eslint-config-bases/storybook',
    // '@wayofdev/eslint-config-bases/playwright',

    // Add specific rules for your framework if needed.
    // ie:
    'plugin:@next/next/core-web-vitals',
    // '@remix-run/eslint-config',
    // ...

    // Post configure the prettier base and run prettier
    // without conflicts thx to eslint-plugin-prettier
    "@wayofdev/eslint-config-bases/prettier-plugin",
    // Alternatively to the above if you're already running prettier
    // we can get a speed up by using on eslint-prettier-config
    // "@wayofdev/eslint-config-bases/prettier-config",
  ],
  rules: {
    // Specific global rules for your app or package
    // https://github.com/vercel/next.js/discussions/16832
    '@next/next/no-img-element': 'off',
    // For the sake of example
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [
    // Specific file rules for your app or package
    {
      files: ['src/pages/\\_*.{ts,tsx}'],
      rules: {
        'react/display-name': 'off',
      },
    },
    {
      files: ['src/stories/*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
}
```

> **Tip:**
>
> - **Prettier**: `@wayofdev/eslint-config-bases/prettier-plugin` and `@wayofdev/eslint-config-bases/prettier-config` are
>   mutually exclusives. Choose one. The `prettier-config` suppose that you run prettier independently. The `prettier-plugin`
>   will run prettier for you. Easiest the `prettier-plugin`, fastest `prettier-config` (this mostly depends
>   if you set up and persist caches as well)
>
> - **Performance**: Some rules are known to be slow (ie: `import/namespace`...). Slowest identified rules are disabled depending
>   on context (ie: `*.test.tsx?` might not need everything). Depending on project
>   it's possible to disable entirely some slow rules (ie: `'import/namespace': 'off'`). A good tip
>   run eslint with the `TIMING=1` to identify slow rules.

<br>

## 🛠️ Base Configs

You can find the bases in [./src/bases](./src/bases).

| Base                                              | Match convention                  | Scope                                                           |
| :------------------------------------------------ | :-------------------------------- | :-------------------------------------------------------------- |
| [typescript](./src/bases/typescript.js)           | _all_                             | Naming conventions, consistent imports, import sorting...       |
| [sonar](./src/bases/sonar.js)                     | `*.{js,jsx,ts,tsx}`               | Keep levels of code complexity sane. (excl test and stories)    |
| [regexp](./src/bases/regexp.js)                   | `*.{js,jsx,jsx,tsx}`              | Keep regexp consistent and safer.                               |
| [react](./src/bases/react.js)                     | `*.{jsx,tsx}`                     | Recommendations for react, react-hooks and jsx projects.        |
| [react-query](./src/bases/react-query.js)         | `**/?(*.)+(test).{js,jsx,ts,tsx}` | Enforce "recommended" react-query usage.                        |
| [jest](./src/bases/jest.js)                       | `**/?(*.)+(test).{js,jsx,ts,tsx}` | Catch inconsistencies or error in jest tests.                   |
| [rtl](./src/bases/rtl.js)                         | `**/?(*.)+(test).{js,jsx,ts,tsx}` | Potential errors / deprecations in react-testing-library tests. |
| [graphql-schema](./src/bases/graphql-schema.js)   | `*.graphql`                       | Ensure validity of graphql schema files.                        |
| [storybook](./src/bases/storybook.js)             | `*.stories.{ts,tsx,mdx}`          | Potential errors / deprecations in stories.                     |
| [playwright](./src/bases/playwright.js)           | `**/e2e/**/*.test.{js,ts}`        | Keep "recommended" playwright usage.                            |
| [prettier-plugin](./src/bases/prettier-plugin.js) | _all_                             | Post configure eslint for prettier compatibility.               |

<br>

> **Notes**:
>
> - The order is important. Some bases will disable or tune previously defined
>   rules. For example the [react base](./src/bases/react.js) will tune the naming conventions
>   for function components and increase recommended cognitive complexity. The [typescript base](./src/bases/typescript.js)
>   will also relax conventions for javascript files.
>
> - Based on filename conventions some rules are relaxed or disabled to avoid false positives and
>   keep a good level of performance. For example the [sonar base](./src/bases/sonar.js) won't run on
>   test and storybook files. If you work on different conventions the patterns must be updated.

<br>

## 🧹 Prettier integration

Two ways to work with prettier.

- `@wayofdev/eslint-config-bases/prettier-plugin` — eslint will run prettier under the hood (**default**)
- `@wayofdev/eslint-config-bases/prettier-config` — eslint will just disable some conflicting rules (so you'll need to run prettier after)

The first method is recommended for simplicity. For best perf use the cache option to run eslint.

Tune the behaviour by creating a config, named ` .prettierrc.js` in root directory of project and in each package or app.

<br>

### → Example Structure:

```bash
.
├── .prettierrc.js (root)
├── package.json (root)
├── apps
│   └── my-first-app
│       ├── .prettierrc.js
│       ├── package.json
│       └── ... (other app files)
└── packages
    └── my-first-package
        ├── .prettierrc.js
        ├── package.json
        └── ... (other package files)
```

<br>

### → `.prettierrc.js` for root of monorepo:

```javascript
// @ts-check

const { getPrettierConfig } = require('@wayofdev/eslint-config-bases/helpers')
const { overrides = [], ...prettierConfig } = getPrettierConfig()

/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...prettierConfig,
  overrides: [
    ...overrides,
    ...[
      {
        files: '*.md',
        options: {
          singleQuote: false,
          quoteProps: 'preserve',
        },
      },
    ],
  ],
}
```

> **Tip**: You can tune the provided [prettier.base.config](./src/prettier.base.config.js) for your own needs.

<br>

## 📝 Notes

### → Typescript

Generic typescript project, mostly based on

| Type/Plugin                                                                                      | Comment                                                                      |
| :----------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| [eslint:recommended](https://eslint.org/docs/rules/)                                             | The basics for code linting.                                                 |
| [@typescript-eslint/recommended](https://typescript-eslint.io/rules/)                            | The basics for typescript.                                                   |
| [@typescript-eslint/consistent-type](https://typescript-eslint.io/rules/consistent-type-imports) | Use TS 3.8+ imports/exports, helps with [esbuild](https://esbuild.github.io) |
| [@typescript-eslint/naming-convention](https://typescript-eslint.io/rules/naming-convention)     |                                                                              |
| [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)                        | Order imports                                                                |

### → Sonarjs

| Type/Plugin                                                                               | Comment                      |
| :---------------------------------------------------------------------------------------- | :--------------------------- |
| [eslint-plugin-sonarjs/recommended](https://github.com/SonarSource/eslint-plugin-sonarjs) | Help to keep complexity sane |

### → React

| Type/Plugin                                                                                                             | Comment                                  |
| :---------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| [eslint-plugin-react/recommended](https://github.com/yannickcr/eslint-plugin-react)                                     |                                          |
| [eslint-plugin-react-hooks/recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) |                                          |
| [eslint-plugin-jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                              | Helps to produce accessibility-ready jsx |

### → Jest

| Type/Plugin                                                                            | Comment                     |
| :------------------------------------------------------------------------------------- | :-------------------------- |
| [eslint-plugin-jest/recommended](https://github.com/jest-community/eslint-plugin-jest) | Jest recommended practices. |

### → React Testing Library

| Type/Plugin                                                                                                   | Comment                               |
| :------------------------------------------------------------------------------------------------------------ | :------------------------------------ |
| [eslint-plugin-testing-library/recommended](https://github.com/testing-library/eslint-plugin-testing-library) | Ease when using react-testing-library |

### → Regexp

| Type/Plugin                                                                           | Comment                                                              |
| :------------------------------------------------------------------------------------ | :------------------------------------------------------------------- |
| [eslint-plugin-regexp/recommended](https://github.com/ota-meshi/eslint-plugin-regexp) | ESLint plugin for finding regex mistakes and style guide violations. |

### → MDX

| Type/Plugin                                                                                      | Comment                                                                                                               |
| :----------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| [mdx-js/eslint-mdx](https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx) | [ESLint](https://eslint.org/) Parser/Plugin for [MDX](https://github.com/mdx-js/mdx), helps you lint all ES syntaxes. |

### → HTML

| Type/Plugin                                                        | Comment                        |
| :----------------------------------------------------------------- | :----------------------------- |
| [html-eslint/recommended](https://github.com/yeonjuan/html-eslint) | ESLint plugin for linting HTML |

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Credits and Useful Resources

Based on:

- [shared-dx](https://github.com/belgattitude/shared-dx) from [belgattitude](https://github.com/belgattitude)
- [shareable-configs](https://github.com/waldronmatt/shareable-configs) from [waldronmatt](https://github.com/waldronmatt)
- other, various best practices

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
