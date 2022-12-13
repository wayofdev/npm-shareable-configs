# Prettier Config

My personal shareable prettier configuration.

## Install

```bash
yarn add -D prettier @wayofdev/prettier-config
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

```json
"scripts": {
  "lint:prettier": "prettier --write ."
},
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
