const { getDefaultIgnorePatterns } = require('./src/helpers')

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: ['./src/bases/typescript', './src/bases/prettier-plugin'],
}
