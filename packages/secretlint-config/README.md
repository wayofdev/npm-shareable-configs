# Secretlint Config

Shareable secretlint configuration.

## Install

```bash
# using yarn
$ yarn add -D secretlint @wayofdev/secretlint-config

# using pnpm
$ pnpm add -Dw secretlint @wayofdev/secretlint-config
```

## Usage

**`.secretlintrc.js`**

```js
module.exports = {
    ...require('@wayofdev/secretlint-config'),
};
```

## Add an NPM Script

Running this command:

```bash
# using yarn, npm
npm pkg set scripts.lint:secrets="npx secretlint **/*"

# using pnpm
pnpm pkg set scripts.lint:secrets="npx secretlint **/*"
```

Will create:

**`package.json`**

```bash
...
"scripts": {
    ...
    "lint:secrets": "npx secretlint **/*"
    ...
},
...
```

## Add a Pre-commit Hook

**`lint-staged.config.js`**

```js
module.exports = {
    '*': ['secretlint'],
};
```

## Under The Hood

### `index.json`

- `@secretlint/secretlint-rule-preset-recommend`

## License

MIT
