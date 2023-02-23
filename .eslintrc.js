const { getDefaultIgnorePatterns } = require('@wayofdev/eslint-config-bases/helpers')

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.base.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    '@wayofdev/eslint-config-bases/typescript',
    '@wayofdev/eslint-config-bases/mdx',
    '@wayofdev/eslint-config-bases/prettier-plugin',
  ],
}
