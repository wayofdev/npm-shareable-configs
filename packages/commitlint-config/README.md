# Commitlint Config

Shareable commitlint configuration.

## Install

```bash
# install with yarn
$ yarn add -D @commitlint/cli @wayofdev/commitlint-config

# install with pnpm
$ pnpm add -Dw @commitlint/cli @wayofdev/commitlint-config
```

## Usage

**`commitlint.config.js`**

```js
module.exports = {
    extends: ['@wayofdev/commitlint-config'],
};
```

## Extending

**`commitlint.config.js`**

```js
module.exports = {
    extends: ['@wayofdev/commitlint-config'],
    rules: {
        'body-leading-blank': [2, 'always'],
    },
};
```

## Add a Husky Hook

Install husky:

```bash
# using yarn
$ yarn dlx husky-init --yarn2 && yarn && npm pkg set scripts.prepare="husky install" && yarn prepare

# using pnpm
$ pnpm dlx husky-init && pnpm install && pnpm pkg set scripts.prepare="husky install" && pnpm prepare
```

Add the hook:

```bash
# using npm
$ npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "${1}"'

# using yarn
$ yarn dlx husky add .husky/pre-commit 'npx --no -- commitlint --edit "${1}"'

# using pnpm
$ pnpm dlx husky add .husky/pre-commit 'npx --no -- commitlint --edit "${1}"'
```

## Under The Hood

### `index.js`

- `@commitlint/config-conventional`

## License

MIT
