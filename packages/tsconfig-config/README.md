# Tsconfig Config

Shareable tsconfig configuration.

## Install

```bash
# using yarn
$ yarn add -D typescript @wayofdev/tsconfig-config

# using pnpm
$ pnpm add -Dw typescript @wayofdev/tsconfig-config
```

Optionally include types for `node`:

```bash
yarn add -D @types/node  # yarn
pnpm add -Dw @types/node # pnpm
```

## Usage

**`tsconfig.json`**

### Base

```json
{
    "extends": "@wayofdev/tsconfig-config/base.json"
}
```

### Lib

Useful defaults for code publishing and distribution:

```json
{
    "extends": "@wayofdev/tsconfig-config/lib.json"
}
```

Add the `tslib` package:

```bash
$ yarn add -D tslib  # yarn
$ pnpm add -Dw tslib # pnpm
```

## Extending

A basic configuration for projects:

**`tsconfig.json`**

```bash
{
    "extends": "@wayofdev/tsconfig-config/base.json",
    "compilerOptions": {
        // output to dist directory
        "outDir": "dist"
    },
    // include source and test files
    "include": [
        "src/**/*",
        "__tests__/**/*"
    ],
    // ignore node_modules and dist directories
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```

## Recipes

Lint your source and configuration/dot files (`eslintrc.js`, ect.)
that [shouldn't be part of your existing `tsconfig` file:](https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file)

**`tsconfig.eslint.json`**

```json
{
    "extends": "./tsconfig.json",
    "include": [
        ".*.js",
        "*.js",
        "src/*"
    ],
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
    extends: ['my-config'],
    plugins: ['import'],
    parserOptions: {
        project: ['tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
    },
    rules: {
        'import/extensions': 'off',
    },
    ignorePatterns: ['dist/**'],
};
```

Exclude test and configuration/dot files from compilation, but still have them type checked:

**`tsconfig.build.json`**

```json
{
    "extends": "./tsconfig.json",
    "exclude": [
        ".*.js",
        "*.js",
        "src/*.spec.ts"
    ]
}
```

**`package.json`**

```bash
...
"scripts": {
    ...
    "compile": "tsc --project tsconfig.build.json"
    ...
},
...
```

Clean up bundle and artifacts with your build script:

Install `rimraf` and `npm-run-all`:

```bash
$ yarn add -D rimraf npm-run-all  # yarn
$ pnpm add -Dw rimraf npm-run-all # pnpm
```

**`package.json`**

```bash
...
"scripts": {
    ...
    "clean": "rimraf dist coverage tsconfig.build.tsbuildinfo",
    "compile": "tsc --project tsconfig.build.json",
    "build": "run-s clean compile",
    ...
},
...
```

And then you can run:

```bash
$ yarn build # yarn
$ pnpm build # pnpm
```

## License

MIT
