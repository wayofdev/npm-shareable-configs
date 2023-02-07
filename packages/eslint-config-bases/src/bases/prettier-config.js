/**
 * Custom config base for projects using prettier.
 * @see https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/eslint-config-bases
 */

module.exports = {
  extends: ['prettier'],
  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}
