const { concatFilesForPrettier } = require('../common')

const rules = {
  '**/*.mdx': filenames => {
    return [`prettier --write ${concatFilesForPrettier(filenames)}`]
  },
}

module.exports = rules
