# Eslint Config

Shareable eslint configuration.

## Install

```bash
# install with yarn
$ yarn add -D @wayofdev/eslint-config

# install with pnpm
$ pnpm add -Dw @wayofdev/eslint-config
```

## Usage

**`.eslintrc.js`**

### JS

```js
module.exports = {
    extends: '@wayofdev/eslint-config',
};
```

### TS

```js
module.exports = {
    extends: '@wayofdev/eslint-config/ts',
};
```

### Jest

```js
module.exports = {
    extends: '@wayofdev/eslint-config/jest',
};
```

## Extending

An example configuring a mixed JS/TS, `tsconfig`-compatible configuration.

**`.eslintrc.js`**

```js
module.exports = {
    // ignore linting in dist bundle output folder
    ignorePatterns: ['dist/**'],
    // enable global variables
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    overrides: [
        {
            files: ['**/*.ts'],
            extends: [
                '@wayofdev/eslint-config/ts',
                // add jest linting
                '@wayofdev/eslint-config/jest',
            ],
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
        {
            files: ['**/*.js'],
            extends: [
                '@wayofdev/eslint-config',
                // add jest linting
                '@wayofdev/eslint-config/jest',
            ],
        },
    ],
};
```

## Add an NPM Script

Running this command:

```bash
# using yarn, npm
$ npm pkg set scripts.lint:js="eslint --fix **/*.{js,jsx,ts,tsx}"

# using pnpm
$ pnpm pkg set scripts.lint:js="eslint --fix **/*.{js,jsx,ts,tsx}"
```

Will create:

**`package.json`**

```bash
...
"scripts": {
    ...
    "lint:js": "eslint --fix **/*.{js,jsx,ts,tsx}"
    ...
},
...
```

## Add a Pre-commit Hook

**`lint-staged.config.js`**

```js
module.exports = {
    '*.{js,jsx,ts,tsx}': ['prettier --cache --write', 'eslint --cache --fix'],
};
```

## Under The Hood

### `index.js`

- Plugins
    - `eslint-plugin-prettier`
- Parser
    - default `eslint` parser
- Extends
    - `eslint-plugin-unicorn`
    - `eslint-plugin-promise`
    - `eslint-plugin-sonarjs`
    - `eslint-plugin-security`,
    - default `eslint` ruleset
    - `eslint-config-airbnb-base`
    - `eslint-config-prettier`
- Rules
    - [Prettier Special Rules](https://github.com/prettier/eslint-config-prettier#special-rules)
    - Other rules can be found in the config

### `ts.js`

- Plugins
    - `@typescript-eslint/eslint-plugin`
    - `eslint-plugin-prettier`
- Parser
    - `@typescript-eslint/parser`
- Extends
    - `eslint-plugin-unicorn`
    - `eslint-plugin-promise`
    - `eslint-plugin-sonarjs`
    - `eslint-plugin-security`,
    - `@typescript-eslint/eslint-plugin`
    - `eslint-config-airbnb-typescript`
    - `eslint-config-prettier`
- Rules
    - [Prettier Special Rules](https://github.com/prettier/eslint-config-prettier#special-rules)
    - Other rules can be found in the config

### `jest.js`

- Plugins
    - `jest`
    - `jest-dom`
    - `jest-formatting`
- Extends
    - `plugin:jest/recommended`
    - `plugin:jest-dom/recommended`
    - `plugin:jest-formatting/recommended`

## License

MIT
