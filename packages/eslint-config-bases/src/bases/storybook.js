/**
 * Opinionated config base for projects using storybook.
 * @see https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/eslint-config-bases
 */

const storybookPatterns = {
  files: ['**/*.stories.{ts,tsx,mdx}'],
}

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      // For performance run storybook/recommended on test files, not regular code
      files: storybookPatterns.files,
      extends: ['plugin:storybook/recommended'],
    },
  ],
}
