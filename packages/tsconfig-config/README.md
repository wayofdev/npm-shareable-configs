<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>



<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnext-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/@wayofdev/tsconfig-config"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@wayofdev/tsconfig-config?style=flat-square"></a>
<a href="https://www.npmjs.com/package/@wayofdev/tsconfig-config?activeTab=versions"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@wayofdev/tsconfig-config?style=flat-square"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>

<br>

# Shareable TSConfig

This npm package provides a set of shareable [tsconfig.json](https://www.typescriptlang.org/tsconfig) base files that can be used as a starting point for TypeScript projects within a [monorepository](https://monorepo.tools).

<br>

## 📄 About

Collection of TypeScript configurations that can be used to enforce consistent compiler options, target platforms, and module resolution strategies across TypeScript projects within a monorepository.

The configurations provided in this package are designed to be compatible with popular TypeScript frameworks and libraries, and to provide a solid foundation for a project's TypeScript settings that can be extended and modified as needed.

### → Purpose

Provide a set of opinionated yet flexible configurations for TypeScript that help developers to maintain consistent compiler options, target platforms, and module resolution strategies across their projects. The configurations provided in this package:

- Enforce common best practices for TypeScript development, such as using strict null checks and enabling strict mode
- Catch common errors, such as using unsupported or deprecated TypeScript features or using incorrect module resolution strategies
- Help developers to maintain consistency across their codebase by providing clear and consistent rules for TypeScript configuration.

<br>

## 💿 Installation

To use `@wayofdev/tsconfig-config` in your TypeScript projects within a monorepository:

1. Install the package using your preferred package manager in the root of the monorepository. For example, using `pnpm`:

   ```bash
   pnpm add -Dw @wayofdev/tsconfig-config
   ```

2. Once installed in the root of the monorepository, you can create a `tsconfig.base.json` file in the root directory and use the provided configurations by extending them in each package's `tsconfig.json` file.

   **`tsconfig.base.json`:**

   ```json
   {
     "$schema": "https://json.schemastore.org/tsconfig/base.json",
     "extends": "@wayofdev/tsconfig-config/bases/base.json",
     "compilerOptions": {
       "useUnknownInCatchVariables": true,
       "noEmit": true,
       "moduleResolution": "node",
       "isolatedModules": true,
       "jsx": "preserve"
     },
     "exclude": ["**/node_modules", "**/.*/"]
   }
   ```

   This will extend the `base.json` configuration, which is designed to be a minimal TypeScript configuration that can be extended and customized as needed.

3. To extend the `tsconfig.base.json` file in a package located in `apps/web`, you would add the following:

   **`apps/web/tsconfig.json`:**

   ```json
   {
     "$schema": "https://json.schemastore.org/tsconfig",
     "extends": "../../tsconfig.base.json",
     "exclude": ["**/node_modules", "**/.*/"],
     "include": [
       "next-env.d.ts",
       "**/*.ts",
       "**/*.tsx",
       "**/*.mts",
       "**/*.js",
       "**/*.cjs",
       "**/*.mjs",
       "**/*.jsx",
       "**/*.json"
     ],
     "compilerOptions": {
       "lib": ["dom", "dom.iterable", "esnext"],
       "target": "esnext",
       "baseUrl": "./src",
       "importHelpers": true,
       "module": "esnext",
       "paths": {
         ...
       }
     }
   }
   ```

   This will extend the `tsconfig.base.json` file, which can in turn extend any of the provided configurations in `@wayofdev/tsconfig-config`, or provide custom settings for your project.

   Packages within the monorepository can also extend `tsconfig.base.json` in the same way to use the shared TypeScript configuration.

<br>

## 📋 Recipes

Here are some recipes to use `@wayofdev/tsconfig-config` with other tools in your project:

### → Jest

When using Jest with TypeScript, you can create a `tsconfig.jest.json` file that extends the `tsconfig.json` file in your `apps` or `packages` folders. This will enable your Jest tests to use the correct TypeScript configuration.

Create `tsconfig.jest.json` that extends `tsconfig.json` in your `apps` or `packages` folders

**`tsconfig.jest.json`:**

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

**`jest.config.js`:**

```js
// @ts-check

const tsConfigFile = './tsconfig.jest.json'

// ...

/**
 * Transform the tsconfig paths into jest compatible one (support extends)
 * @param {string} tsConfigFile
 */
const getTsConfigBasePaths = tsConfigFile => {
  const parsedTsConfig = getTsconfig(tsConfigFile)
  if (parsedTsConfig === null) {
    throw new Error(`Cannot find tsconfig file: ${tsConfigFile}`)
  }
  const tsPaths = parsedTsConfig.config.compilerOptions?.paths
  return tsPaths
    ? pathsToModuleNameMapper(tsPaths, {
        prefix: '<rootDir>/src',
      })
    : {}
}

// ...
```

### → ESLint

Lint your source and configuration/dot files (`eslintrc.js`, ect.) that 

When using ESLint with TypeScript, you may want to lint your source and configuration/dot files (`eslintrc.js`, etc.) [shouldn't be part of your existing `tsconfig` file](https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file) You can create a `tsconfig.eslint.json` file that extends the `tsconfig.json` file in your `apps` or `packages` folders to accomplish this.

**`tsconfig.eslint.json`:**

```json
{
  "extends": "./tsconfig.json",
  "include": [".*.js", "*.js", "src/*"],
  "compilerOptions": {
    "noEmit": true,
    "allowJs": true
  }
}
```

**`.eslintrc.js`**

```js
module.exports = {
  root: true,
  extends: ["my-config"],
  plugins: ["import"],
  parserOptions: {
    project: ["tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    "import/extensions": "off",
  },
  ignorePatterns: ["dist/**"],
}
```

<br>

## 🚗 Under The Hood

### `base.json`

- This is a recommended base tsconfig for TypeScript projects, providing strict type checking and common compiler options.

### `lib.json`

This tsconfig is intended for use with React libraries, and extends `bases/base.json`. It also enables `importHelpers` and allows emitting files.

### `next.json`

This tsconfig is intended for use with Next.js, and extends `bases/base.json`. It includes necessary compiler options for working with Next.js, such as support for JSX and isolated modules. It also disables emitting files and enables `importHelpers`.

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Credits and Useful Resources

Based on:

- [shareable-configs](https://github.com/waldronmatt/shareable-configs) from [waldronmatt](https://github.com/waldronmatt)
- [shared-dx](https://github.com/belgattitude/shared-dx) from [belgattitude](https://github.com/belgattitude)

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

