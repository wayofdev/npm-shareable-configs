/**
 * Custom config base for projects using html.
 * @see https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/eslint-config-bases
 */

const htmlPatterns = {
  files: ['**/*.html'],
}

module.exports = {
  plugins: ['@html-eslint'],
  overrides: [
    {
      files: htmlPatterns.files,
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
    },
  ],
}
