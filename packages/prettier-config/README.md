# Prettier Config

Shareable prettier configuration.

## Install

```bash
# using yarn
$ yarn add -D prettier @wayofdev/prettier-config

# using pnpm
$ pnpm add -Dw prettier @wayofdev/prettier-config
```

## Usage

**`.prettierrc.js`**

```js
module.exports = '@wayofdev/prettier-config';
```

## Extending

**`.prettierrc.js`**

```js
module.exports = {
    ...require('@wayofdev/prettier-config'),
    semi: false,
};
```

## Add an NPM Script

Running this command:

```bash
npm set-script lint:prettier "prettier --write ."
```

Will create:

**`package.json`**

```bash
...
"scripts": {
    ...
    "lint:prettier": "prettier --write ."
    ...
},
...
```

## Add a Pre-commit Hook

**`lint-staged.config.js`**

```js
module.exports = {
    '**/*': ['prettier --cache --write --ignore-unknown'],
};
```

## License

MIT
