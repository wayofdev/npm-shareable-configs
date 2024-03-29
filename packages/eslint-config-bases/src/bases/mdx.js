/**
 * Custom config base for projects using mdx.
 * @see https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/eslint-config-bases
 */

const mdxPatterns = {
  files: ['**/*.mdx'],
}

module.exports = {
  // optional, if you want to lint code blocks at the same time
  settings: {
    'mdx/code-blocks': true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    'mdx/language-mapper': {},
  },
  overrides: [
    {
      files: mdxPatterns.files,
      extends: ['plugin:mdx/recommended'],
      parser: 'eslint-mdx',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        'import/namespace': 'off',
        'import/order': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
