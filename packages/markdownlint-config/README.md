# Markdownlint Config

Shareable markdownlint configuration.

## Install

```bash
# using yarn
$ yarn add -D markdownlint @wayofdev/markdownlint-config

# using pnpm
$ pnpm add -Dw markdownlint @wayofdev/markdownlint-config
```

## Usage

**`.markdownlint.json`**

```bash
{
  "extends": "./node_modules/@wayofdev/markdownlint-config/index.json"
}
```

## Extending

**`.markdownlint.json`**

```bash
{
  "extends": "./node_modules/@wayofdev/markdownlint-config/index.json",
  "MD013": false,
}
```

## Add an NPM Script

Running this command:

```bash
# using yarn, npm
npm pkg set scripts.lint:md="markdownlint --fix **/*.md --ignore node_modules --ignore **/CHANGELOG.md"

# using pnpm
pnpm pkg set scripts.lint:md="markdownlint --fix **/*.md --ignore node_modules --ignore **/CHANGELOG.md"
```

Will create:

**`package.json`**

```bash
...
"scripts": {
    ...
    "lint:md": "markdownlint --fix **/*.md --ignore node_modules --ignore **/CHANGELOG.md"
    ...
},
...
```

## Add a Pre-commit Hook

**`lint-staged.config.js`**

```js
module.exports = {
    '*.md': ['prettier --cache --write', 'markdownlint'],
};
```

## Under The Hood

### `index.json`

- `markdownlint-cli`

## License

MIT
