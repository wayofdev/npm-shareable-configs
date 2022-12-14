# Postcss Config

Shareable postcss configuration.

## Install

```bash
# using yarn
$ yarn add -D postcss @wayofdev/postcss-config

# using pnpm
$ pnpm add -Dw postcss @wayofdev/postcss-config
```

## Usage

**`postcss.config.js`**

```js
module.exports = require('@wayofdev/postcss-config');
```

## Under The Hood

### `index.js`

- `autoprefixer`
- `browserslist`
- `postcss-100vh-fix`
- `postcss-cli`
- `postcss-flexbugs-fixes`
- `postcss-normalize`
- `postcss-preset-env`
- `postcss-reporter`

## License

MIT
