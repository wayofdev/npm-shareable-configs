/**
 * Custom config base for projects using prettier.
 * @see https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/eslint-config-bases
 */

const { getPrettierConfig } = require('../helpers')
const { ...prettierConfig } = getPrettierConfig()

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}
