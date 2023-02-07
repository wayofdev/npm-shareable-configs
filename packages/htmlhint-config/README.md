# Htmlhint Config

Shareable htmlhint configuration.

## Install

```bash
# install with yarn
$ yarn add -D htmlhint @wayofdev/htmlhint-config

# install with pnpm
$ pnpm add -Dw htmlhint @wayofdev/htmlhint-config
```

## Add an NPM Script

Running this command:

```bash
pnpm pkg set scripts.lint:html="htmlhint --config ./node_modules/@wayofdev/htmlhint-config/index.json **/*.html"
```

Will create:

**`package.json`**

```bash
...
"scripts": {
    ...
    "lint:html": "htmlhint --config ./node_modules/@wayofdev/htmlhint-config/index.json **/*.html"
    ...
},
...
```

## License

MIT
