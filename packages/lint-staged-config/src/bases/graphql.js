const { concatFilesForPrettier } = require('../common')

const rules = {
  '**/*.{gql,graphql}': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`]
  },
}

module.exports = rules
