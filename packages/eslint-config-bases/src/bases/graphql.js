/**
 * Opinionated config base for projects using graphql schemas (*.graphql)
 * @see https://github.com/wayofdev/npm-shareable-configs/tree/master/packages/eslint-config-bases
 */
const graphqlSchemaPatterns = {
  files: ['*.graphql'],
}

module.exports = {
  overrides: [
    {
      files: graphqlSchemaPatterns.files,
      // @see https://github.com/B2o5T/graphql-eslint
      extends: 'plugin:@graphql-eslint/schema-recommended',
      rules: {
        '@graphql-eslint/known-type-names': 'error',
      },
    },
  ],
}
