# Htmlhint Config

My personal shareable htmlhint configuration.

## Install

```bash
yarn add -D htmlhint @wayofdev/htmlhint-config
```

## Add an NPM Script

Running this command:

```bash
npm set-script lint:html "htmlhint --config ./node_modules/@wayofdev/htmlhint-config/index.json **/*.html"
```

Will create:

**`package.json`**

```json
"scripts": {
"lint:html": "htmlhint --config ./node_modules/@wayofdev/htmlhint-config/index.json **/*.html"
},
```

## License

MIT
